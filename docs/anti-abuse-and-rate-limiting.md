# Anti-Abuse and Rate Limiting

## Overview

PDFStation implements IP-based rate limiting to prevent abuse and ensure fair usage of our free service. This document outlines the rate limiting strategy and implementation recommendations.

## Rate Limiting Policy

**Limit:** Maximum 5 upload requests per IP address per 5-minute window.

**Action on Exceed:** Return HTTP 429 (Too Many Requests) with an error message.

## Implementation Recommendations

### Cloudflare Rule (Recommended for Production)

If using Cloudflare, configure a rate limiting rule:

```
Rule: Limit requests to /api/upload
Limit: 5 requests per IP
Window: 5 minutes
Action: Challenge or Block
```

This provides distributed rate limiting at the edge, reducing server load.

### Backend Node/Express Middleware (Example)

For server-side implementation, here's an example middleware:

```javascript
const limitWindow = 5 * 60 * 1000; // 5 minutes in milliseconds
const maxUploads = 5;
const uploads = new Map();

function rateLimitByIP(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  const entry = uploads.get(ip) || { count: 0, start: now };

  // Reset if window has passed
  if (now - entry.start > limitWindow) {
    uploads.set(ip, { count: 1, start: now });
    return next();
  }

  // Check if limit exceeded
  if (entry.count >= maxUploads) {
    return res.status(429).json({
      error: "Too many uploads from your IP. Please try again later.",
      retryAfter: Math.ceil((limitWindow - (now - entry.start)) / 1000) // seconds
    });
  }

  // Increment count
  entry.count++;
  uploads.set(ip, entry);
  next();
}

// Apply to upload endpoint
app.post('/api/upload', rateLimitByIP, uploadHandler);
```

### Production Considerations

**Important:** For production environments, use Redis or a distributed cache instead of an in-memory Map:

```javascript
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

async function rateLimitByIP(req, res, next) {
  const ip = req.ip;
  const key = `rate_limit:${ip}`;
  const now = Date.now();
  
  try {
    const count = await redis.incr(key);
    
    if (count === 1) {
      await redis.expire(key, 300); // 5 minutes
    }
    
    if (count > maxUploads) {
      const ttl = await redis.ttl(key);
      return res.status(429).json({
        error: "Too many uploads from your IP. Please try again later.",
        retryAfter: ttl
      });
    }
    
    next();
  } catch (error) {
    // On Redis error, allow request (fail open)
    console.error('Rate limit error:', error);
    next();
  }
}
```

## Data Retention

- IP address logs are kept **only for rate limiting purposes**
- Logs are automatically purged after the 5-minute window expires
- No permanent storage of IP addresses
- No correlation with uploaded files

## Security Considerations

1. **IP Spoofing:** Be aware that IP addresses can be spoofed. Consider using Cloudflare or similar services that provide real client IPs.

2. **Shared IPs:** Users behind corporate networks or VPNs may share IP addresses. Consider implementing a more sophisticated rate limiting strategy if needed.

3. **Fail Open:** In case of rate limiting system failure, consider allowing requests rather than blocking all users (fail open vs fail closed).

4. **Monitoring:** Monitor rate limit hits to detect potential abuse patterns and adjust limits if necessary.

## Frontend Handling

When a 429 error is received:

1. Display a user-friendly, multilingual error message
2. Show retry time if provided
3. Optionally implement exponential backoff for automatic retries

Example frontend handling:

```typescript
try {
  const response = await uploadFile(file);
  // Handle success
} catch (error) {
  if (error.status === 429) {
    const message = t('error.rate.limit.exceeded');
    const retryAfter = error.retryAfter || 300;
    showError(message, retryAfter);
  }
}
```

## Testing

Test rate limiting with:

1. **Normal usage:** Verify 5 uploads within 5 minutes work
2. **Limit exceeded:** Verify 6th upload returns 429
3. **Window reset:** Verify uploads work again after 5 minutes
4. **Different IPs:** Verify each IP has its own limit

## Compliance

This rate limiting approach:
- Protects service availability
- Prevents abuse
- Maintains user privacy (ephemeral IP storage)
- Aligns with GDPR/privacy regulations (no permanent storage)



