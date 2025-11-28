/**
 * ImageMagick utilities
 * 
 * Handles conversions:
 * - PDF → JPG/PNG/WebP
 * - JPG/PNG/WebP → PDF
 */

import { spawn } from 'child_process';
import path from 'path';
import { getTempFilePath, deleteFile, readFileBuffer, fileExists, writeFileBuffer } from './fileUtils.js';

const MAGICK_CMD = process.env.MAGICK_CMD || 'magick';

/**
 * Convert PDF to image using ImageMagick
 * 
 * @param {Buffer} inputBuffer - PDF file buffer
 * @param {string} outputFormat - Output format ('jpg', 'png', 'webp')
 * @returns {Promise<Buffer>} - Converted image buffer
 */
export async function pdfToImage(inputBuffer, outputFormat = 'jpg') {
  const inputPath = getTempFilePath('pdf');
  const outputPath = getTempFilePath(outputFormat);

  try {
    // Validate input buffer
    if (!inputBuffer || inputBuffer.length === 0) {
      throw new Error('Input buffer is empty');
    }

    console.log(`[ImageMagick] Starting PDF → ${outputFormat} conversion (${inputBuffer.length} bytes)`);

    // Write input PDF
    await writeFileBuffer(inputPath, inputBuffer);

    // ImageMagick convert command
    // -density 300: Set DPI for better quality
    // -quality 90: Set quality for JPEG/WebP
    const args = [
      'convert',
      inputPath,
      '-density', '300',
      '-quality', '90',
      outputPath
    ];

    console.log(`[ImageMagick] Running: ${MAGICK_CMD} ${args.join(' ')}`);

    await new Promise((resolve, reject) => {
      const magick = spawn(MAGICK_CMD, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      magick.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      magick.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      magick.on('close', (code) => {
        console.log(`[ImageMagick] Process exited with code ${code}`);
        if (stdout) console.log(`[ImageMagick] stdout: ${stdout}`);
        if (stderr) console.log(`[ImageMagick] stderr: ${stderr}`);
        
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`ImageMagick conversion failed with code ${code}: ${stderr || stdout}`));
        }
      });

      magick.on('error', (error) => {
        console.error(`[ImageMagick] Spawn error:`, error);
        reject(new Error(`Failed to spawn ImageMagick: ${error.message}`));
      });
    });

    // Wait for file system to sync
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!(await fileExists(outputPath))) {
      throw new Error(`Converted image not found at ${outputPath}`);
    }

    const outputBuffer = await readFileBuffer(outputPath);
    
    if (!outputBuffer || outputBuffer.length === 0) {
      throw new Error(`Converted image is empty at ${outputPath}`);
    }

    console.log(`[ImageMagick] Successfully read output file (${outputBuffer.length} bytes)`);

    // Cleanup
    await deleteFile(inputPath);
    await deleteFile(outputPath);

    return outputBuffer;
  } catch (error) {
    console.error(`[ImageMagick] Conversion error:`, error);
    // Cleanup on error
    await deleteFile(inputPath);
    await deleteFile(outputPath);
    throw error;
  }
}

/**
 * Convert image to PDF using ImageMagick
 * 
 * @param {Buffer} inputBuffer - Image file buffer
 * @param {string} inputFormat - Input format ('jpg', 'png', 'webp')
 * @returns {Promise<Buffer>} - Converted PDF buffer
 */
export async function imageToPdf(inputBuffer, inputFormat = 'jpg') {
  const inputPath = getTempFilePath(inputFormat);
  const outputPath = getTempFilePath('pdf');

  try {
    // Validate input buffer
    if (!inputBuffer || inputBuffer.length === 0) {
      throw new Error('Input buffer is empty');
    }

    console.log(`[ImageMagick] Starting ${inputFormat} → PDF conversion (${inputBuffer.length} bytes)`);

    // Write input image
    await writeFileBuffer(inputPath, inputBuffer);

    // ImageMagick convert image to PDF
    const args = [
      'convert',
      inputPath,
      outputPath
    ];

    console.log(`[ImageMagick] Running: ${MAGICK_CMD} ${args.join(' ')}`);

    await new Promise((resolve, reject) => {
      const magick = spawn(MAGICK_CMD, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      magick.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      magick.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      magick.on('close', (code) => {
        console.log(`[ImageMagick] Process exited with code ${code}`);
        if (stdout) console.log(`[ImageMagick] stdout: ${stdout}`);
        if (stderr) console.log(`[ImageMagick] stderr: ${stderr}`);
        
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`ImageMagick conversion failed with code ${code}: ${stderr || stdout}`));
        }
      });

      magick.on('error', (error) => {
        console.error(`[ImageMagick] Spawn error:`, error);
        reject(new Error(`Failed to spawn ImageMagick: ${error.message}`));
      });
    });

    // Wait for file system to sync
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!(await fileExists(outputPath))) {
      throw new Error(`Converted PDF not found at ${outputPath}`);
    }

    const outputBuffer = await readFileBuffer(outputPath);
    
    if (!outputBuffer || outputBuffer.length === 0) {
      throw new Error(`Converted PDF is empty at ${outputPath}`);
    }

    console.log(`[ImageMagick] Successfully read output file (${outputBuffer.length} bytes)`);

    // Cleanup
    await deleteFile(inputPath);
    await deleteFile(outputPath);

    return outputBuffer;
  } catch (error) {
    console.error(`[ImageMagick] Conversion error:`, error);
    // Cleanup on error
    await deleteFile(inputPath);
    await deleteFile(outputPath);
    throw error;
  }
}

