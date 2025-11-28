# Railway Deployment Instructions

## Overview

PDFStation backend uses open-source tools (LibreOffice, ImageMagick, Ghostscript, qpdf) for file conversions. This guide explains how to deploy to Railway for FREE.

## Prerequisites

- GitHub account
- Railway account (free, no credit card required)
- PDFStation repository pushed to GitHub

## Step 1: Prepare Repository

1. **Ensure all files are committed:**
   ```bash
   git add .
   git commit -m "Add open-source conversion backend"
   git push origin main
   ```

2. **Verify Dockerfile exists:**
   - Check that `Dockerfile` is in the project root
   - Verify it installs all required tools

## Step 2: Deploy to Railway

### Option A: Deploy from GitHub

1. **Go to Railway:**
   - Visit https://railway.app
   - Sign in with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your PDFStation repository

3. **Configure Deployment:**
   - Railway will automatically detect the Dockerfile
   - Set the root directory to `/` (project root)
   - Port will be automatically detected (3000)

4. **Set Environment Variables (Optional):**
   - `PORT`: 3000 (default, usually not needed)
   - `FRONTEND_URL`: Your frontend URL (for CORS)
   - `NODE_ENV`: production

5. **Deploy:**
   - Railway will build the Docker image
   - This may take 5-10 minutes (installing system packages)
   - Wait for "Deploy Successful"

### Option B: Deploy from Dockerfile (CLI)

1. **Install Railway CLI:**
   ```bash
   npm i -g @railway/cli
   railway login
   ```

2. **Initialize Project:**
   ```bash
   railway init
   ```

3. **Deploy:**
   ```bash
   railway up
   ```

## Step 3: Configure Frontend

After deployment, Railway will provide a URL like:
```
https://your-project-name.up.railway.app
```

1. **Update Frontend API URL:**
   - In your frontend `.env` or build config:
   ```
   VITE_API_BASE_URL=https://your-project-name.up.railway.app
   ```

2. **Or update `src/services/conversionClient.ts`:**
   ```typescript
   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-project-name.up.railway.app';
   ```

## Step 4: Verify Deployment

1. **Check Health Endpoint:**
   ```bash
   curl https://your-project-name.up.railway.app/health
   ```
   Should return:
   ```json
   {
     "status": "ok",
     "timestamp": "...",
     "tools": {
       "libreoffice": "soffice",
       "imagemagick": "magick",
       "ghostscript": "gs",
       "qpdf": "qpdf"
     }
   }
   ```

2. **Test Conversion:**
   ```bash
   curl -X POST https://your-project-name.up.railway.app/api/convert \
     -F "file=@test.pdf" \
     -F "toolSlug=pdf-to-word" \
     --output converted.docx
   ```

## Step 5: Configure Custom Domain (Optional)

1. In Railway dashboard:
   - Go to your project
   - Click "Settings"
   - Add custom domain
   - Follow DNS configuration instructions

## Troubleshooting

### Build Fails

**Problem:** Docker build fails during package installation

**Solution:**
- Check Railway logs for specific error
- Ensure Dockerfile uses `ubuntu:22.04`
- Verify all package names are correct

### Conversion Fails

**Problem:** API returns 500 error

**Solution:**
1. Check Railway logs:
   ```bash
   railway logs
   ```
2. Verify tools are installed:
   - SSH into container (if enabled)
   - Run: `which soffice gs magick qpdf`
3. Check file permissions:
   - Temp directory should be writable

### Timeout Issues

**Problem:** Requests timeout

**Solution:**
- Large files may take time to process
- Railway free tier has timeout limits
- Consider adding timeout handling in frontend

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `NODE_ENV` | Environment | `production` |

## Cost

✅ **Railway Free Tier:**
- $5 credit per month (free)
- 500 hours of usage
- Perfect for development and small projects
- No credit card required

## Monitoring

1. **View Logs:**
   - Railway dashboard → Your project → Logs
   - Or use CLI: `railway logs`

2. **Monitor Usage:**
   - Dashboard → Usage tab
   - Track compute hours and bandwidth

## Next Steps

1. Deploy frontend (Vercel, Netlify, etc.)
2. Update frontend API URL
3. Test all conversion tools
4. Monitor Railway logs for errors

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway

