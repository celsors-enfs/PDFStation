# PDFStation Backend Dockerfile
# Uses open-source tools: LibreOffice, ImageMagick, Ghostscript, qpdf

FROM ubuntu:22.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=UTC

# Install system dependencies and open-source conversion tools
RUN apt-get update && apt-get install -y \
    # Node.js (LTS)
    curl \
    ca-certificates \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    # LibreOffice for Office ↔ PDF conversions
    libreoffice \
    # ImageMagick for Image ↔ PDF conversions
    imagemagick \
    # Ghostscript for PDF compression
    ghostscript \
    # qpdf for PDF merging
    qpdf \
    # Cleanup
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install Node.js dependencies
RUN npm install --production

# Copy backend code
COPY server.js ./
COPY api/ ./api/

# Create temp directory for file processing
RUN mkdir -p /app/temp && chmod 777 /app/temp

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); const port = process.env.PORT || 3000; http.get(`http://localhost:${port}/health`, (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))"

# Start server
CMD ["node", "server.js"]

