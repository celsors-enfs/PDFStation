/**
 * Conversion API Routes
 * 
 * Handles file conversion, compression, and merge operations
 * Routes: POST /api/convert, POST /api/compress, POST /api/merge
 */

import express, { Request, Response } from 'express';
import multer from 'multer';
import { convertFile, compressFile, mergeFiles, ConversionError } from '../services/externalConversionClient.js';
import { getConversionConfig, getMimeTypeFromExtension } from '../config/toolConversions.js';
import { getEnvConfig } from '../config/env.js';

const router = express.Router();

// Configure multer for file uploads
// Store files in memory (as buffers)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB limit
  },
});

// Maximum file size in bytes (500MB)
const MAX_FILE_SIZE = 500 * 1024 * 1024;

/**
 * POST /api/convert
 * Convert a file from one format to another
 */
router.post('/convert', upload.single('file'), async (req: Request, res: Response) => {
  try {
    // Validate file was provided
    if (!req.file) {
      return res.status(400).json({
        error: 'No file provided',
        detail: 'Please upload a file to convert',
      });
    }

    // Validate file size (backend enforcement)
    if (req.file.size > MAX_FILE_SIZE) {
      return res.status(413).json({
        error: 'File too large',
        detail: 'Maximum file size is 500MB',
      });
    }

    // Get conversion parameters
    const toolSlug = req.body.toolSlug as string;
    const fromFormat = req.body.fromFormat as string;
    const toFormat = req.body.toFormat as string;

    if (!toolSlug) {
      return res.status(400).json({
        error: 'Missing toolSlug',
        detail: 'toolSlug parameter is required',
      });
    }

    // Get conversion config from tool slug
    const conversionConfig = getConversionConfig(toolSlug);
    if (!conversionConfig) {
      return res.status(400).json({
        error: 'Invalid tool',
        detail: `Unknown tool slug: ${toolSlug}`,
      });
    }

    // Use config values or request body values
    const finalFromFormat = fromFormat || conversionConfig.fromFormat;
    const finalToFormat = toFormat || conversionConfig.toFormat;

    // Call external conversion service
    const result = await convertFile({
      inputBuffer: req.file.buffer,
      fromFormat: finalFromFormat,
      toFormat: finalToFormat,
      filename: req.file.originalname,
    });

    // Generate output filename
    const originalName = req.file.originalname.replace(/\.[^/.]+$/, '');
    const outputFilename = `${originalName}_converted.${result.fileExtension}`;

    // Set response headers
    res.setHeader('Content-Type', result.mimeType);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${outputFilename}"`
    );

    // Send binary response
    res.send(result.buffer);
  } catch (error: any) {
    console.error('Conversion error:', error);

    if (error instanceof ConversionError) {
      // Map conversion errors to appropriate HTTP status codes
      if (error.statusCode === 429) {
        return res.status(429).json({
          error: 'Too many requests',
          detail: error.message || 'Rate limit exceeded. Please try again later.',
        });
      }

      if (error.statusCode === 504) {
        return res.status(504).json({
          error: 'Request timeout',
          detail: error.message || 'The conversion service did not respond in time.',
        });
      }

      return res.status(502).json({
        error: 'Conversion service failed',
        detail: error.detail || error.message || 'The external conversion service encountered an error',
      });
    }

    // Unknown error
    return res.status(500).json({
      error: 'Internal server error',
      detail: 'An unexpected error occurred during conversion',
    });
  }
});

/**
 * POST /api/compress
 * Compress a PDF file
 */
router.post('/compress', upload.single('file'), async (req: Request, res: Response) => {
  try {
    // Validate file was provided
    if (!req.file) {
      return res.status(400).json({
        error: 'No file provided',
        detail: 'Please upload a PDF file to compress',
      });
    }

    // Validate file size
    if (req.file.size > MAX_FILE_SIZE) {
      return res.status(413).json({
        error: 'File too large',
        detail: 'Maximum file size is 500MB',
      });
    }

    // Validate it's a PDF (basic check)
    if (req.file.mimetype !== 'application/pdf' && 
        !req.file.originalname.toLowerCase().endsWith('.pdf')) {
      return res.status(400).json({
        error: 'Invalid file type',
        detail: 'Only PDF files can be compressed',
      });
    }

    // Call external compression service
    const result = await compressFile({
      inputBuffer: req.file.buffer,
      filename: req.file.originalname,
    });

    // Generate output filename
    const originalName = req.file.originalname.replace(/\.pdf$/i, '');
    const outputFilename = `${originalName}_compressed.pdf`;

    // Set response headers
    res.setHeader('Content-Type', result.mimeType);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${outputFilename}"`
    );

    // Send binary response
    res.send(result.buffer);
  } catch (error: any) {
    console.error('Compression error:', error);

    if (error instanceof ConversionError) {
      if (error.statusCode === 429) {
        return res.status(429).json({
          error: 'Too many requests',
          detail: error.message || 'Rate limit exceeded. Please try again later.',
        });
      }

      if (error.statusCode === 504) {
        return res.status(504).json({
          error: 'Request timeout',
          detail: error.message || 'The compression service did not respond in time.',
        });
      }

      return res.status(502).json({
        error: 'Compression service failed',
        detail: error.detail || error.message || 'The external compression service encountered an error',
      });
    }

    return res.status(500).json({
      error: 'Internal server error',
      detail: 'An unexpected error occurred during compression',
    });
  }
});

/**
 * POST /api/merge
 * Merge multiple PDF files into one
 */
router.post('/merge', upload.array('files'), async (req: Request, res: Response) => {
  try {
    // Validate files were provided
    const files = req.files as Express.Multer.File[];
    
    if (!files || files.length === 0) {
      return res.status(400).json({
        error: 'No files provided',
        detail: 'Please upload at least one PDF file to merge',
      });
    }

    // Validate minimum number of files
    if (files.length < 2) {
      return res.status(400).json({
        error: 'Insufficient files',
        detail: 'At least 2 PDF files are required for merging',
      });
    }

    // Validate each file size and type
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return res.status(413).json({
          error: 'File too large',
          detail: `File "${file.originalname}" exceeds 500MB limit`,
        });
      }

      if (file.mimetype !== 'application/pdf' && 
          !file.originalname.toLowerCase().endsWith('.pdf')) {
        return res.status(400).json({
          error: 'Invalid file type',
          detail: `File "${file.originalname}" is not a PDF`,
        });
      }
    }

    // Prepare buffers and filenames
    const inputBuffers = files.map(file => file.buffer);
    const filenames = files.map(file => file.originalname);

    // Call external merge service
    const result = await mergeFiles({
      inputBuffers,
      filenames,
    });

    // Generate output filename
    const outputFilename = `merged_${Date.now()}.pdf`;

    // Set response headers
    res.setHeader('Content-Type', result.mimeType);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${outputFilename}"`
    );

    // Send binary response
    res.send(result.buffer);
  } catch (error: any) {
    console.error('Merge error:', error);

    if (error instanceof ConversionError) {
      if (error.statusCode === 429) {
        return res.status(429).json({
          error: 'Too many requests',
          detail: error.message || 'Rate limit exceeded. Please try again later.',
        });
      }

      if (error.statusCode === 504) {
        return res.status(504).json({
          error: 'Request timeout',
          detail: error.message || 'The merge service did not respond in time.',
        });
      }

      return res.status(502).json({
        error: 'Merge service failed',
        detail: error.detail || error.message || 'The external merge service encountered an error',
      });
    }

    return res.status(500).json({
      error: 'Internal server error',
      detail: 'An unexpected error occurred during merge',
    });
  }
});

export default router;

