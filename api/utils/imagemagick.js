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

// Use 'convert' binary (classic ImageMagick command)
// In Railway/Docker, 'magick' binary doesn't exist, only 'convert' is available
const IMAGEMAGICK_BIN = process.env.IMAGEMAGICK_BIN || 'convert';

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
      inputPath,
      '-density', '300',
      '-quality', '90',
      outputPath
    ];

    console.log(`[ImageMagick] Running: ${IMAGEMAGICK_BIN} ${args.join(' ')}`);
    console.log(`[ImageMagick] input: ${inputPath}`);
    console.log(`[ImageMagick] output: ${outputPath}`);

    await new Promise((resolve, reject) => {
      const convertProcess = spawn(IMAGEMAGICK_BIN, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      convertProcess.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      convertProcess.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      convertProcess.on('close', (code) => {
        console.log(`[ImageMagick] Process exited with code ${code}`);
        if (stdout) console.log(`[ImageMagick] stdout: ${stdout}`);
        if (stderr) console.log(`[ImageMagick] stderr: ${stderr}`);
        
        if (code === 0) {
          resolve();
        } else {
          const errorMsg = stderr || stdout || 'Unknown error';
          console.error(`[ImageMagick] Conversion failed with exit code ${code}: ${errorMsg}`);
          reject(new Error(`ImageMagick conversion failed with code ${code}: ${errorMsg}`));
        }
      });

      convertProcess.on('error', (error) => {
        console.error(`[ImageMagick] Spawn error:`, error);
        console.error(`[ImageMagick] Attempted command: ${IMAGEMAGICK_BIN}`);
        console.error(`[ImageMagick] Error code: ${error.code}, syscall: ${error.syscall}, path: ${error.path}`);
        
        if (error.code === 'ENOENT') {
          reject(new Error(`ImageMagick não encontrado no container. Binário esperado: "${IMAGEMAGICK_BIN}". Verifique a instalação no Dockerfile.`));
        } else {
          reject(new Error(`Failed to execute convert command: ${error.message}. Make sure ImageMagick is installed.`));
        }
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
    // Command: convert input.jpg -units PixelsPerInch -density 150x150 -page A4 output.pdf
    const args = [
      inputPath,
      '-units', 'PixelsPerInch',
      '-density', '150x150',
      '-page', 'A4',
      outputPath
    ];

    console.log(`[ImageMagick] Running: ${IMAGEMAGICK_BIN} ${args.join(' ')}`);
    console.log(`[ImageMagick] input: ${inputPath}`);
    console.log(`[ImageMagick] output: ${outputPath}`);

    await new Promise((resolve, reject) => {
      const convertProcess = spawn(IMAGEMAGICK_BIN, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      convertProcess.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      convertProcess.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      convertProcess.on('close', (code) => {
        console.log(`[ImageMagick] Process exited with code ${code}`);
        if (stdout) console.log(`[ImageMagick] stdout: ${stdout}`);
        if (stderr) console.log(`[ImageMagick] stderr: ${stderr}`);
        
        if (code === 0) {
          resolve();
        } else {
          const errorMsg = stderr || stdout || 'Unknown error';
          console.error(`[ImageMagick] Conversion failed with exit code ${code}: ${errorMsg}`);
          reject(new Error(`ImageMagick conversion failed with code ${code}: ${errorMsg}`));
        }
      });

      convertProcess.on('error', (error) => {
        console.error(`[ImageMagick] Spawn error:`, error);
        console.error(`[ImageMagick] Attempted command: ${IMAGEMAGICK_BIN}`);
        console.error(`[ImageMagick] Error code: ${error.code}, syscall: ${error.syscall}, path: ${error.path}`);
        
        if (error.code === 'ENOENT') {
          reject(new Error(`ImageMagick não encontrado no container. Binário esperado: "${IMAGEMAGICK_BIN}". Verifique a instalação no Dockerfile.`));
        } else {
          reject(new Error(`Failed to execute convert command: ${error.message}. Make sure ImageMagick is installed.`));
        }
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
    // Cleanup on error - do NOT create output file if process failed
    await deleteFile(inputPath);
    await deleteFile(outputPath);
    // Reject promise - let the route handle the error
    throw error;
  }
}
