/**
 * PDFStation Backend Server
 * 
 * Express server for file conversion using open-source tools:
 * - LibreOffice (soffice) for Office ↔ PDF conversions
 * - ImageMagick (magick) for Image ↔ PDF conversions
 * - Ghostscript (gs) for PDF compression
 * - qpdf for PDF merging
 */

import express from 'express';
import cors from 'cors';
import conversionRoutes from './api/routes/conversionRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// CORS configuration - allow all origins in production, restricted in development
const isProduction = process.env.NODE_ENV === 'production';
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    // In production: allow all origins (frontend can be on any domain)
    if (isProduction) {
      return callback(null, true);
    }
    
    // In development: allow requests with no origin (like curl) or from known dev origins
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Root endpoint - API information
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'PDFStation API',
    endpoints: [
      '/health',
      '/api/convert',
      '/api/compress',
      '/api/merge'
    ],
    note: 'Frontend is served from Vercel. This Railway instance is API-only.'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    tools: {
      libreoffice: 'soffice',
      imagemagick: 'magick',
      ghostscript: 'gs',
      qpdf: 'qpdf'
    }
  });
});

// API routes
app.use('/api', conversionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error',
    detail: err.detail || (process.env.NODE_ENV === 'development' ? err.stack : null),
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    detail: `The endpoint ${req.method} ${req.path} does not exist.`,
    availableEndpoints: [
      'GET /',
      'GET /health',
      'POST /api/convert',
      'POST /api/compress',
      'POST /api/merge'
    ]
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`PDFStation API running on port ${PORT}`);
  console.log(`📦 Using open-source tools: LibreOffice, ImageMagick, Ghostscript, qpdf`);
  if (isProduction) {
    console.log(`🌐 CORS: Production mode – all origins allowed`);
  } else {
    console.log(`🌐 CORS: Dev mode – restricted origins (${allowedOrigins.join(', ')})`);
  }
  console.log(`✅ API endpoints: GET /, GET /health, POST /api/convert, POST /api/compress, POST /api/merge`);
});

export default app;

