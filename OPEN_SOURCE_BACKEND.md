# Open-Source Conversion Backend

## Overview

PDFStation backend now uses **100% free, open-source tools** for all file conversions. No paid APIs required!

## Tools Used

### LibreOffice (soffice)
- **PDF → Word** (.docx)
- **Word → PDF** (.docx, .doc)
- **Excel → PDF** (.xlsx, .xls)
- **PowerPoint → PDF** (.pptx, .ppt)

### ImageMagick (magick)
- **PDF → Images** (JPG, PNG, WebP)
- **Images → PDF** (JPG, PNG, WebP → PDF)

### Ghostscript (gs)
- **PDF Compression** (lossy and lossless)

### qpdf
- **PDF Merging** (combine multiple PDFs)

## Architecture

```
Frontend → Express API → Open-Source Tools → Converted File → Frontend
```

1. Frontend uploads file via POST /api/convert
2. Backend receives file (multer, in-memory)
3. Backend calls appropriate tool (soffice, magick, gs, qpdf)
4. Tool processes file and outputs result
5. Backend streams result back to frontend
6. Temporary files are automatically cleaned up

## File Structure

```
server.js                    # Main Express server
api/
  ├── routes/
  │   └── conversionRoutes.js  # API endpoints
  ├── utils/
  │   ├── fileUtils.js         # Temp file management
  │   ├── libreoffice.js       # LibreOffice wrapper
  │   ├── imagemagick.js       # ImageMagick wrapper
  │   ├── ghostscript.js       # Ghostscript wrapper
  │   └── qpdf.js              # qpdf wrapper
  └── config/
      └── toolConversions.js   # Tool mapping
```

## API Endpoints

### POST /api/convert

Converts a file from one format to another.

**Request:**
- `file`: File to convert (multipart/form-data)
- `toolSlug`: Tool identifier (e.g., "pdf-to-word")
- `fromFormat`: Source format (optional)
- `toFormat`: Target format (optional)

**Response:**
- Binary file with appropriate Content-Type header

**Example:**
```bash
curl -X POST http://localhost:3001/api/convert \
  -F "file=@document.pdf" \
  -F "toolSlug=pdf-to-word" \
  --output converted.docx
```

### POST /api/compress

Compresses a PDF file.

**Request:**
- `file`: PDF file (multipart/form-data)
- `quality`: Optional - "screen", "ebook", "printer", "prepress" (default: "ebook")

**Response:**
- Compressed PDF binary

**Example:**
```bash
curl -X POST http://localhost:3001/api/compress \
  -F "file=@large.pdf" \
  -F "quality=ebook" \
  --output compressed.pdf
```

### POST /api/merge

Merges multiple PDF files.

**Request:**
- `files`: Array of PDF files (multipart/form-data)

**Response:**
- Merged PDF binary

**Example:**
```bash
curl -X POST http://localhost:3001/api/merge \
  -F "files=@file1.pdf" \
  -F "files=@file2.pdf" \
  --output merged.pdf
```

## Conversion Mapping

| From | To | Tool |
|------|-----|------|
| PDF | DOCX | LibreOffice |
| DOCX | PDF | LibreOffice |
| XLSX | PDF | LibreOffice |
| PDF | JPG/PNG/WebP | ImageMagick |
| JPG/PNG/WebP | PDF | ImageMagick |
| PDF | PDF (compressed) | Ghostscript |
| PDF + PDF | PDF (merged) | qpdf |

## Local Development

### Prerequisites

Install required tools on your system:

**macOS:**
```bash
brew install libreoffice imagemagick ghostscript qpdf
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install -y libreoffice imagemagick ghostscript qpdf
```

**Windows:**
- Download and install:
  - LibreOffice: https://www.libreoffice.org/
  - ImageMagick: https://imagemagick.org/
  - Ghostscript: https://www.ghostscript.com/
  - qpdf: https://qpdf.sourceforge.io/

### Run Backend

```bash
# Start backend server
npm run start

# Or with auto-reload (development)
npm run dev:api

# Or both frontend and backend
npm run dev:all
```

## Docker Deployment

### Build Image

```bash
docker build -t pdfstation-backend .
```

### Run Container

```bash
docker run -p 3000:3000 \
  -e FRONTEND_URL=http://localhost:5173 \
  pdfstation-backend
```

## Railway Deployment

See `RAILWAY_DEPLOY.md` for complete instructions.

**Quick Steps:**
1. Push code to GitHub
2. Connect Railway to GitHub repo
3. Railway auto-detects Dockerfile
4. Deploy (FREE tier available)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3001` (dev) / `3000` (prod) |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `SOFFICE_CMD` | LibreOffice command | `soffice` |
| `MAGICK_CMD` | ImageMagick command | `magick` |
| `GS_CMD` | Ghostscript command | `gs` |
| `QPDF_CMD` | qpdf command | `qpdf` |

## File Size Limits

- **Maximum file size:** 500MB per file
- Enforced on both frontend and backend
- Error: HTTP 413 if exceeded

## Error Handling

All errors return JSON with:
```json
{
  "error": "Error type",
  "detail": "Detailed error message"
}
```

**Status Codes:**
- `400`: Invalid request (missing file, invalid format)
- `413`: File too large
- `500`: Conversion failed

## Temporary Files

- All files are processed in `/app/temp` directory
- Files are automatically deleted after processing
- Cleanup happens even on errors
- Directory is created automatically

## Performance

- **LibreOffice conversions:** 5-30 seconds (depending on file size)
- **ImageMagick conversions:** 2-10 seconds
- **Ghostscript compression:** 3-15 seconds
- **qpdf merge:** 1-5 seconds per file

## Limitations

1. **LibreOffice:**
   - PDF → Word: May lose some formatting
   - Large files may take longer

2. **ImageMagick:**
   - PDF → Image: Converts first page only (by default)
   - Multi-page PDFs need additional handling

3. **Ghostscript:**
   - Compression is lossy (quality settings)
   - Very large PDFs may timeout

4. **qpdf:**
   - Requires all input PDFs to be valid
   - May fail with corrupted PDFs

## Troubleshooting

### Tool Not Found

**Error:** `Failed to spawn LibreOffice: ...`

**Solution:**
- Verify tool is installed: `which soffice gs magick qpdf`
- Check PATH environment variable
- In Docker: Tools are installed automatically

### Conversion Fails

**Error:** `Conversion failed with code X`

**Solution:**
1. Check file format is supported
2. Verify file is not corrupted
3. Check file size (must be < 500MB)
4. Review server logs for detailed error

### Permission Errors

**Error:** `EACCES: permission denied`

**Solution:**
- Ensure temp directory is writable
- Check file permissions
- In Docker: Temp directory has correct permissions

## Testing

### Manual Test

```bash
# Test PDF to Word
curl -X POST http://localhost:3001/api/convert \
  -F "file=@test.pdf" \
  -F "toolSlug=pdf-to-word" \
  --output test.docx

# Test compression
curl -X POST http://localhost:3001/api/compress \
  -F "file=@large.pdf" \
  --output compressed.pdf

# Test merge
curl -X POST http://localhost:3001/api/merge \
  -F "files=@file1.pdf" \
  -F "files=@file2.pdf" \
  --output merged.pdf
```

## Cost

✅ **100% FREE**
- All tools are open-source
- No API keys required
- No usage limits
- No credit card needed
- Perfect for Railway free tier

## Next Steps

1. Test all conversion tools locally
2. Deploy to Railway
3. Update frontend API URL
4. Monitor performance and errors

