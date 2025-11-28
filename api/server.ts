/**
 * Express Server for PDFStation API
 * 
 * Provides internal API endpoints for file conversion, compression, and merging
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getEnvConfig } from './config/env.js';
import conversionRoutes from './routes/conversionRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', conversionRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    detail: 'An unexpected error occurred',
  });
});

// Start server
try {
  const config = getEnvConfig();
  
  app.listen(config.port, () => {
    console.log(`🚀 PDFStation API server running on port ${config.port}`);
    console.log(`📡 Environment: ${config.nodeEnv}`);
    console.log(`🔗 Converter API: ${config.converterApiBaseUrl}`);
    console.log(`⏱️  Timeout: ${config.converterApiTimeoutMs}ms`);
    
    if (process.env.USE_MOCK_CONVERSION === 'true') {
      console.log('⚠️  MOCK MODE: Using dummy conversion responses');
    }
  });
} catch (error: any) {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
}

export default app;

