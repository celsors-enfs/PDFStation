# PDFStation API Integration Guide

This document describes how PDFStation connects to an external file conversion API.

## Architecture Overview

```
Frontend (React) → Internal API (Express) → External Conversion API → Internal API → Frontend
```

1. **Frontend**: User uploads file, clicks Convert/Compress/Merge
2. **Internal API**: Validates file, forwards to external API
3. **External API**: Performs actual conversion
4. **Internal API**: Receives converted file, streams back to frontend
5. **Frontend**: Downloads converted file

## Environment Configuration

Create a `.env` file in the project root with the following variables:

```env
CONVERTER_API_BASE_URL=https://api.example.com
CONVERTER_API_KEY=your-api-key-here
CONVERTER_API_TIMEOUT_MS=120000
PORT=3001
FRONTEND_URL=http://localhost:5173
USE_MOCK_CONVERSION=false
```

### Required Variables

- `CONVERTER_API_BASE_URL`: Base URL of the external conversion API
- `CONVERTER_API_KEY`: API key/token for authentication

### Optional Variables

- `CONVERTER_API_TIMEOUT_MS`: Request timeout in milliseconds (default: 120000)
- `PORT`: Internal API server port (default: 3001)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:5173)
- `USE_MOCK_CONVERSION`: Set to `true` for development without real API

## Internal API Endpoints

### POST /api/convert

Converts a file from one format to another.

**Request:**
- `Content-Type: multipart/form-data`
- `file`: File to convert
- `toolSlug`: Tool identifier (e.g., "pdf-to-word")
- `fromFormat`: Source format (optional, inferred from toolSlug)
- `toFormat`: Target format (optional, inferred from toolSlug)

**Response:**
- `Content-Type`: MIME type of converted file
- `Content-Disposition`: `attachment; filename="converted.<ext>"`
- Body: Binary file data

**Example:**
```bash
curl -X POST http://localhost:3001/api/convert \
  -F "file=@document.pdf" \
  -F "toolSlug=pdf-to-word"
```

### POST /api/compress

Compresses a PDF file.

**Request:**
- `Content-Type: multipart/form-data`
- `file`: PDF file to compress

**Response:**
- `Content-Type: application/pdf`
- `Content-Disposition`: `attachment; filename="compressed.pdf"`
- Body: Binary PDF data

**Example:**
```bash
curl -X POST http://localhost:3001/api/compress \
  -F "file=@large.pdf"
```

### POST /api/merge

Merges multiple PDF files into one.

**Request:**
- `Content-Type: multipart/form-data`
- `files`: Array of PDF files (at least 2)

**Response:**
- `Content-Type: application/pdf`
- `Content-Disposition`: `attachment; filename="merged_<timestamp>.pdf"`
- Body: Binary PDF data

**Example:**
```bash
curl -X POST http://localhost:3001/api/merge \
  -F "files=@file1.pdf" \
  -F "files=@file2.pdf" \
  -F "files=@file3.pdf"
```

## External API Integration

The external conversion API client is located in `api/services/externalConversionClient.ts`.

### Expected External API Format

The external API should accept:

1. **Authentication**: `Authorization: Bearer <API_KEY>` header
2. **Request Format**: `multipart/form-data`
3. **Endpoints**:
   - `POST /convert` - File conversion
   - `POST /compress` - PDF compression
   - `POST /merge` - PDF merging

### Request Format

**Convert:**
```
POST /convert
Content-Type: multipart/form-data
Authorization: Bearer <API_KEY>

file: <binary file data>
fromFormat: pdf
toFormat: docx
```

**Compress:**
```
POST /compress
Content-Type: multipart/form-data
Authorization: Bearer <API_KEY>

file: <binary PDF data>
operation: compress
```

**Merge:**
```
POST /merge
Content-Type: multipart/form-data
Authorization: Bearer <API_KEY>

files: <binary PDF data>
files: <binary PDF data>
operation: merge
```

### Response Format

The external API should return:

- **Success (200)**: Binary file data with appropriate `Content-Type` header
- **Rate Limit (429)**: JSON error with message
- **Error (4xx/5xx)**: JSON error with `error` and optional `detail` fields

### Customizing for Your Provider

To integrate a specific conversion API provider:

1. Open `api/services/externalConversionClient.ts`
2. Modify the `convertFile`, `compressFile`, and `mergeFiles` functions
3. Adjust:
   - Request URL paths
   - Form field names
   - Authentication header format
   - Response parsing logic

Example for a different provider:
```typescript
// Instead of Authorization: Bearer
headers: {
  'X-API-Key': config.converterApiKey,
}

// Different endpoint structure
const response = await fetch(`${config.converterApiBaseUrl}/v2/convert`, {
  // ...
});
```

## Error Handling

### HTTP Status Codes

- **400**: Invalid file or parameters
- **413**: File too large (exceeds 500MB)
- **429**: Rate limit exceeded
- **500/502**: Service failure
- **504**: Request timeout

### Error Messages

All error messages are localized and displayed to users in their selected language.

## Mock Mode

For development/testing without a real API:

1. Set `USE_MOCK_CONVERSION=true` in `.env`
2. The API will return dummy files instead of calling the external API
3. Useful for frontend development and testing

## Running the Application

### Development

```bash
# Start frontend and backend together
npm run dev:all

# Or separately:
npm run dev        # Frontend (port 5173)
npm run dev:api    # Backend API (port 3001)
```

### Production

```bash
# Build frontend
npm run build

# Start backend
node api/server.js
```

## Testing

### Manual Test: PDF to Word Conversion

1. Start the application: `npm run dev:all`
2. Open http://localhost:5173/tools/pdf-to-word
3. Upload a PDF file
4. Click "Convert"
5. Wait for conversion to complete
6. Click "Download" to get the converted Word file

### API Test with curl

```bash
# Test convert endpoint
curl -X POST http://localhost:3001/api/convert \
  -F "file=@test.pdf" \
  -F "toolSlug=pdf-to-word" \
  --output converted.docx

# Test compress endpoint
curl -X POST http://localhost:3001/api/compress \
  -F "file=@large.pdf" \
  --output compressed.pdf

# Test merge endpoint
curl -X POST http://localhost:3001/api/merge \
  -F "files=@file1.pdf" \
  -F "files=@file2.pdf" \
  --output merged.pdf
```

## File Size Limits

- **Maximum file size**: 500MB per file
- Enforced on both frontend and backend
- Error message: "File too large. Maximum allowed size is 500MB."

## Tool-to-Conversion Mapping

Tools are mapped to conversion operations in `api/config/toolConversions.ts`:

- Each tool slug maps to `fromFormat`, `toFormat`, and `operationType`
- The backend uses this mapping to determine conversion parameters
- Frontend sends `toolSlug`, backend looks up the configuration

## Security Notes

- API keys are stored in environment variables (never commit to git)
- Files are processed in memory (not stored on disk)
- CORS is configured to allow only the frontend URL
- File size limits prevent abuse
- Rate limiting should be handled by the external API

