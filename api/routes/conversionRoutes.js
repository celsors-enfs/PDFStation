/**
 * Conversion API Routes
 * 
 * Handles file conversion, compression, and merge operations using open-source tools
 */

import express from 'express';
import multer from 'multer';
import { convertWithLibreOffice } from '../utils/libreoffice.js';
import { pdfToImage, imageToPdf } from '../utils/imagemagick.js';
import { compressPdf } from '../utils/ghostscript.js';
import { mergePdfs } from '../utils/qpdf.js';
import { getConversionConfig } from '../config/toolConversions.js';

const router = express.Router();

// Configure multer for file uploads (store in memory)
// Multer automatically parses all multipart/form-data fields (both files and text fields)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 500 * 1024 * 1024, // 500MB limit
  },
  // Ensure multer parses all fields, not just files
});

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB

/**
 * Get MIME type from file extension
 */
function getMimeType(extension) {
  const mimeMap = {
    pdf: 'application/pdf',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xls: 'application/vnd.ms-excel',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
  };
  return mimeMap[extension.toLowerCase()] || 'application/octet-stream';
}

/**
 * POST /api/convert
 * Convert a file from one format to another
 */
router.post('/convert', upload.single('file'), async (req, res) => {
  let inputBuffer = null;
  let outputBuffer = null;

  try {
    // Validate file was provided
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided',
        detail: 'Please upload a file to convert',
      });
    }

    // Validate file size
    if (req.file.size > MAX_FILE_SIZE) {
      return res.status(413).json({
        success: false,
        error: 'File too large',
        detail: 'Maximum file size is 500MB',
      });
    }

    inputBuffer = req.file.buffer;

    // Get conversion parameters from multiple sources (body, query, or format fallback)
    // Multer parses multipart/form-data fields into req.body, but we also check query params
    const toolSlug =
      (req.body && (req.body.toolSlug || req.body.tool_slug)) ||
      (req.query && (req.query.toolSlug || req.query.tool_slug)) ||
      (req.body && req.body.format) ||
      (req.query && req.query.format);

    const fromFormat = req.body?.fromFormat || req.query?.fromFormat;
    const toFormat = req.body?.toFormat || req.query?.toFormat;

    // Debug logs (temporary)
    console.log('[DEBUG convert] Body keys:', Object.keys(req.body || {}));
    console.log('[DEBUG convert] Query:', req.query);
    console.log('[DEBUG convert] Final toolSlug:', toolSlug);

    if (!toolSlug) {
      return res.status(400).json({
        success: false,
        error: 'Missing toolSlug',
        detail: 'toolSlug parameter is required. Send it in form-data body or query string.',
      });
    }

    // Get conversion config
    const conversionConfig = getConversionConfig(toolSlug);
    if (!conversionConfig) {
      return res.status(400).json({
        success: false,
        error: 'Invalid tool',
        detail: `Unknown tool slug: ${toolSlug}`,
      });
    }

    // Determine formats
    const finalFromFormat = fromFormat || conversionConfig.fromFormat;
    const finalToFormat = toFormat || conversionConfig.toFormat;

    console.log(`Converting ${finalFromFormat} → ${finalToFormat} using tool: ${toolSlug}`);

    // Route to appropriate conversion tool
    if (finalFromFormat === 'pdf' && ['jpg', 'jpeg', 'png', 'webp'].includes(finalToFormat)) {
      // PDF to Image: Use ImageMagick
      console.log(`[Convert] Routing to ImageMagick: PDF → ${finalToFormat}`);
      outputBuffer = await pdfToImage(inputBuffer, finalToFormat);
    } else if (['jpg', 'jpeg', 'png', 'webp'].includes(finalFromFormat) && finalToFormat === 'pdf') {
      // Image to PDF: Use ImageMagick
      console.log(`[Convert] Routing to ImageMagick: ${finalFromFormat} → PDF`);
      outputBuffer = await imageToPdf(inputBuffer, finalFromFormat);
    } else if (['pdf', 'docx', 'doc', 'xlsx', 'xls', 'pptx', 'ppt'].includes(finalFromFormat) &&
               ['pdf', 'docx', 'doc', 'xlsx', 'xls', 'pptx', 'ppt'].includes(finalToFormat)) {
      // Office ↔ PDF: Use LibreOffice
      console.log(`[Convert] Routing to LibreOffice: ${finalFromFormat} → ${finalToFormat}`);
      outputBuffer = await convertWithLibreOffice(
        inputBuffer,
        finalFromFormat,
        finalToFormat,
        req.file.originalname
      );
    } else {
      return res.status(400).json({
        success: false,
        error: 'Unsupported conversion',
        detail: `Conversion from ${finalFromFormat} to ${finalToFormat} is not supported`,
      });
    }

    // Validate output buffer
    if (!outputBuffer || outputBuffer.length === 0) {
      console.error(`[Convert] ERROR: Output buffer is empty for ${finalFromFormat} → ${finalToFormat}`);
      return res.status(500).json({
        success: false,
        error: 'Conversion produced empty result',
        detail: 'The conversion completed but produced an empty file. Please try again or use a different file.',
      });
    }

    console.log(`[Convert] Success: Generated ${outputBuffer.length} bytes for ${finalFromFormat} → ${finalToFormat}`);

    // Generate output filename
    const originalName = req.file.originalname.replace(/\.[^/.]+$/, '');
    const outputFilename = `${originalName}_converted.${finalToFormat}`;

    // Set response headers
    res.setHeader('Content-Type', getMimeType(finalToFormat));
    res.setHeader('Content-Disposition', `attachment; filename="${outputFilename}"`);
    res.setHeader('Content-Length', outputBuffer.length.toString());

    // Send binary response
    res.send(outputBuffer);
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({
      success: false,
      error: 'Conversion failed',
      detail: error.message || 'An error occurred during conversion',
    });
  }
});

/**
 * POST /api/compress
 * Compress a PDF file
 */
router.post('/compress', upload.single('file'), async (req, res) => {
  let inputBuffer = null;
  let outputBuffer = null;

  try {
    // Validate file was provided
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided',
        detail: 'Please upload a PDF file to compress',
      });
    }

    // Validate file size
    if (req.file.size > MAX_FILE_SIZE) {
      return res.status(413).json({
        success: false,
        error: 'File too large',
        detail: 'Maximum file size is 500MB',
      });
    }

    // Validate it's a PDF
    if (req.file.mimetype !== 'application/pdf' && 
        !req.file.originalname.toLowerCase().endsWith('.pdf')) {
      return res.status(400).json({
        success: false,
        error: 'Invalid file type',
        detail: 'Only PDF files can be compressed',
      });
    }

    inputBuffer = req.file.buffer;
    const quality = req.body.quality || 'ebook'; // screen, ebook, printer, prepress

    console.log(`Compressing PDF with quality: ${quality}`);

    // Compress using Ghostscript
    outputBuffer = await compressPdf(inputBuffer, quality);

    // Validate output buffer
    if (!outputBuffer || outputBuffer.length === 0) {
      console.error(`[Compress] ERROR: Output buffer is empty`);
      return res.status(500).json({
        success: false,
        error: 'Compression produced empty result',
        detail: 'The compression completed but produced an empty file. Please try again.',
      });
    }

    console.log(`[Compress] Success: Generated ${outputBuffer.length} bytes`);

    // Generate output filename
    const originalName = req.file.originalname.replace(/\.pdf$/i, '');
    const outputFilename = `${originalName}_compressed.pdf`;

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${outputFilename}"`);
    res.setHeader('Content-Length', outputBuffer.length.toString());

    // Send binary response
    res.send(outputBuffer);
  } catch (error) {
    console.error('Compression error:', error);
    res.status(500).json({
      success: false,
      error: 'Compression failed',
      detail: error.message || 'An error occurred during compression',
    });
  }
});

/**
 * POST /api/merge
 * Merge multiple PDF files into one
 */
router.post('/merge', upload.array('files'), async (req, res) => {
  let inputBuffers = null;
  let outputBuffer = null;

  try {
    // Validate files were provided
    const files = req.files || [];
    
    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No files provided',
        detail: 'Please upload at least one PDF file to merge',
      });
    }

    // Validate minimum number of files
    if (files.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Insufficient files',
        detail: 'At least 2 PDF files are required for merging',
      });
    }

    // Validate each file size and type
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return res.status(413).json({
          success: false,
          error: 'File too large',
          detail: `File "${file.originalname}" exceeds 500MB limit`,
        });
      }

      if (file.mimetype !== 'application/pdf' && 
          !file.originalname.toLowerCase().endsWith('.pdf')) {
        return res.status(400).json({
          success: false,
          error: 'Invalid file type',
          detail: `File "${file.originalname}" is not a PDF`,
        });
      }
    }

    // Prepare buffers
    inputBuffers = files.map(file => file.buffer);

    console.log(`Merging ${inputBuffers.length} PDF files`);

    // Merge using qpdf
    outputBuffer = await mergePdfs(inputBuffers);

    // Validate output buffer
    if (!outputBuffer || outputBuffer.length === 0) {
      console.error(`[Merge] ERROR: Output buffer is empty`);
      return res.status(500).json({
        success: false,
        error: 'Merge produced empty result',
        detail: 'The merge completed but produced an empty file. Please try again.',
      });
    }

    console.log(`[Merge] Success: Generated ${outputBuffer.length} bytes`);

    // Generate output filename
    const outputFilename = `merged_${Date.now()}.pdf`;

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${outputFilename}"`);
    res.setHeader('Content-Length', outputBuffer.length.toString());

    // Send binary response
    res.send(outputBuffer);
  } catch (error) {
    console.error('Merge error:', error);
    res.status(500).json({
      success: false,
      error: 'Merge failed',
      detail: error.message || 'An error occurred during merge',
    });
  }
});

export default router;

