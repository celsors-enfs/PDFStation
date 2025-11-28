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
// CORS configuration - allow all origins in production, or specific frontend URL
const allowedOrigins = process.env.FRONTEND_URL 
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
  : ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // In production, allow all origins (or configure specific domains)
    if (process.env.NODE_ENV === 'production' || !process.env.FRONTEND_URL) {
      return callback(null, true);
    }
    
    // In development, check against allowed origins
    if (allowedOrigins.indexOf(origin) !== -1) {
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
  res.status(500).json({
    error: 'Internal server error',
    detail: err.message || 'An unexpected error occurred',
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 PDFStation Backend Server running on port ${PORT}`);
  console.log(`📦 Using open-source tools: LibreOffice, ImageMagick, Ghostscript, qpdf`);
  console.log(`🌐 CORS: ${process.env.NODE_ENV === 'production' ? 'All origins allowed' : `Allowed origins: ${allowedOrigins.join(', ')}`}`);
});

export default app;

