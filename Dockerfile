# PDFStation Backend Dockerfile
# Uses open-source tools: LibreOffice, ImageMagick, Ghostscript, qpdf

FROM ubuntu:22.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=UTC

# Install system dependencies and open-source conversion tools
# LibreOffice requires additional packages for proper PDF → DOCX conversion
RUN apt-get update && apt-get install -y \
    # Node.js (LTS) dependencies
    curl \
    ca-certificates \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    # LibreOffice core and writer module for PDF → DOCX conversions
    # libreoffice-writer provides the DOCX export functionality
    libreoffice \
    libreoffice-writer \
    libreoffice-core \
    # Fonts required for proper document rendering
    fonts-dejavu \
    fonts-dejavu-core \
    fonts-dejavu-extra \
    fonts-liberation \
    fonts-liberation2 \
    # ImageMagick for Image ↔ PDF conversions
    imagemagick \
    # Ghostscript for PDF compression
    ghostscript \
    # qpdf for PDF merging
    qpdf \
    # Additional dependencies for LibreOffice headless mode
    libxinerama1 \
    libfontconfig1 \
    libxrender1 \
    # Cleanup to reduce image size
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Verify LibreOffice installation and log the soffice path
RUN which soffice && soffice --version || echo "WARNING: soffice not found in PATH"

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
# LibreOffice writes converted files to this directory during PDF → DOCX conversions
RUN mkdir -p /app/temp && chmod 777 /app/temp

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); const port = process.env.PORT || 3000; http.get(`http://localhost:${port}/health`, (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))"

# Start server
CMD ["node", "server.js"]

