/**
 * Conversion Routes
 * 
 * Express routes for file conversion, compression, and merging
 * Uses open-source tools: LibreOffice, ImageMagick, Ghostscript, qpdf
 */

import express from 'express';
import multer from 'multer';
import { convertWithLibreOffice } from '../utils/libreoffice.js';
import { imageToPdf, pdfToImage } from '../utils/imagemagick.js';
import { compressPdf } from '../utils/ghostscript.js';
import { mergePdfs } from '../utils/qpdf.js';
import { getConversionConfig } from '../config/toolConversions.js';

const router = express.Router();

// Configure multer for file uploads
// Max file size: 500MB
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB
  },
});

/**
 * POST /api/convert
 * Convert files between formats
 */
router.post('/convert', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided',
        detail: 'Please upload a file',
      });
    }

    const toolSlug = req.body.toolSlug;
    if (!toolSlug) {
      return res.status(400).json({
        success: false,
        error: 'No toolSlug provided',
        detail: 'Please specify the conversion tool (e.g., pdf-to-word, jpg-to-pdf)',
      });
    }

    // Get conversion config
    const config = getConversionConfig(toolSlug);
    if (!config) {
      return res.status(400).json({
        success: false,
        error: 'Invalid toolSlug',
        detail: `Unknown tool: ${toolSlug}`,
      });
    }

    const inputBuffer = req.file.buffer;
    const inputFilename = req.file.originalname || 'input';

    console.log(`[Convert] ${toolSlug}: ${inputFilename} (${inputBuffer.length} bytes)`);

    let outputBuffer;
    let outputMime = config.suggestedOutputMime;
    let outputExtension = config.suggestedOutputExtension;

    // Determine which tool to use based on conversion type
    if (config.operationType !== 'convert') {
      return res.status(400).json({
        success: false,
        error: 'Invalid operation',
        detail: `Tool ${toolSlug} is not a conversion tool`,
      });
    }

    // LibreOffice conversions (Office ↔ PDF)
    if (['pdf-to-word', 'word-to-pdf', 'pdf-to-excel', 'excel-to-pdf', 'pdf-to-powerpoint', 'powerpoint-to-pdf'].includes(toolSlug)) {
      outputBuffer = await convertWithLibreOffice(
        inputBuffer,
        config.fromFormat,
        config.toFormat,
        inputFilename
      );
    }
    // ImageMagick: Images → PDF
    else if (['jpg-to-pdf', 'png-to-pdf', 'webp-to-pdf'].includes(toolSlug)) {
      outputBuffer = await imageToPdf(inputBuffer, config.fromFormat);
    }
    // ImageMagick: PDF → Images
    else if (['pdf-to-jpg', 'pdf-to-png', 'pdf-to-webp'].includes(toolSlug)) {
      outputBuffer = await pdfToImage(inputBuffer, config.toFormat);
    }
    else {
      return res.status(400).json({
        success: false,
        error: 'Unsupported conversion',
        detail: `Conversion ${config.fromFormat} → ${config.toFormat} is not supported`,
      });
    }

    // Set response headers
    res.setHeader('Content-Type', outputMime);
    res.setHeader('Content-Disposition', `attachment; filename="converted.${outputExtension}"`);
    res.setHeader('Content-Length', outputBuffer.length);

    // Send file
    res.send(outputBuffer);

    console.log(`[Convert] Success: ${toolSlug} → ${outputExtension} (${outputBuffer.length} bytes)`);
  } catch (error) {
    console.error('[Convert] Error:', error);
    res.status(500).json({
      success: false,
      error: 'Conversion failed',
      detail: error.message || 'An unexpected error occurred',
    });
  }
});

/**
 * POST /api/compress
 * Compress PDF files
 */
router.post('/compress', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided',
        detail: 'Please upload a PDF file',
      });
    }

    const inputBuffer = req.file.buffer;
    const quality = req.body.quality || 'ebook'; // screen, ebook, printer, prepress

    // Validate quality
    const validQualities = ['screen', 'ebook', 'printer', 'prepress'];
    if (!validQualities.includes(quality)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid quality',
        detail: `Quality must be one of: ${validQualities.join(', ')}`,
      });
    }

    console.log(`[Compress] PDF compression with quality: ${quality} (${inputBuffer.length} bytes)`);

    const outputBuffer = await compressPdf(inputBuffer, quality);

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="compressed.pdf"');
    res.setHeader('Content-Length', outputBuffer.length);

    // Send file
    res.send(outputBuffer);

    console.log(`[Compress] Success: ${inputBuffer.length} → ${outputBuffer.length} bytes`);
  } catch (error) {
    console.error('[Compress] Error:', error);
    res.status(500).json({
      success: false,
      error: 'Compression failed',
      detail: error.message || 'An unexpected error occurred',
    });
  }
});

/**
 * POST /api/merge
 * Merge multiple PDF files
 */
router.post('/merge', upload.fields([{ name: 'file', maxCount: 10 }]), async (req, res) => {
  try {
    const files = req.files?.file || [];
    
    if (files.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Insufficient files',
        detail: 'Please upload at least 2 PDF files to merge',
      });
    }

    console.log(`[Merge] Merging ${files.length} PDF files`);

    // Extract buffers
    const inputBuffers = files.map(file => file.buffer);

    // Validate all buffers
    for (let i = 0; i < inputBuffers.length; i++) {
      if (!inputBuffers[i] || inputBuffers[i].length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Empty file',
          detail: `File ${i + 1} is empty`,
        });
      }
    }

    const outputBuffer = await mergePdfs(inputBuffers);

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `merged_${timestamp}.pdf`;

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', outputBuffer.length);

    // Send file
    res.send(outputBuffer);

    console.log(`[Merge] Success: ${files.length} files → ${outputBuffer.length} bytes`);
  } catch (error) {
    console.error('[Merge] Error:', error);
    res.status(500).json({
      success: false,
      error: 'Merge failed',
      detail: error.message || 'An unexpected error occurred',
    });
  }
});

export default router;

