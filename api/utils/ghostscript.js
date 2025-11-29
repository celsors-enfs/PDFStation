/**
 * Ghostscript utilities
 * 
 * Handles PDF compression
 */

import { spawn } from 'child_process';
import { getTempFilePath, deleteFile, readFileBuffer, fileExists, writeFileBuffer } from './fileUtils.js';

const GS_CMD = process.env.GS_CMD || 'gs';

/**
 * Compress PDF using Ghostscript
 * 
 * @param {Buffer} inputBuffer - PDF file buffer
 * @param {string} quality - Compression quality: 'screen', 'ebook', 'printer', 'prepress' (default: 'ebook')
 * @returns {Promise<Buffer>} - Compressed PDF buffer
 */
export async function compressPdf(inputBuffer, quality = 'ebook') {
  const inputPath = getTempFilePath('pdf');
  const outputPath = getTempFilePath('pdf');

  try {
    // Validate input buffer
    if (!inputBuffer || inputBuffer.length === 0) {
      throw new Error('Input buffer is empty');
    }

    console.log(`[Ghostscript] Starting PDF compression with quality: ${quality} (${inputBuffer.length} bytes)`);

    // Write input PDF
    await writeFileBuffer(inputPath, inputBuffer);

    // Ghostscript compression command
    // Format: gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=out.pdf in.pdf
    // -sDEVICE=pdfwrite: Output device
    // -dCompatibilityLevel=1.4: PDF version
    // -dPDFSETTINGS: Compression level
    //   /screen: 72 dpi (lowest quality, smallest size)
    //   /ebook: 150 dpi (good balance) - default
    //   /printer: 300 dpi (high quality)
    //   /prepress: 300 dpi (highest quality)
    // -dNOPAUSE: Don't pause between pages
    // -dBATCH: Exit after processing
    // -dQUIET: Suppress output
    const args = [
      '-sDEVICE=pdfwrite',
      '-dCompatibilityLevel=1.4',
      `-dPDFSETTINGS=/${quality}`,
      '-dNOPAUSE',
      '-dQUIET',
      '-dBATCH',
      '-sOutputFile=' + outputPath,
      inputPath
    ];

    console.log(`[Ghostscript] Running: ${GS_CMD} ${args.join(' ')}`);

    await new Promise((resolve, reject) => {
      const gs = spawn(GS_CMD, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      gs.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      gs.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      gs.on('close', (code) => {
        console.log(`[Ghostscript] Process exited with code ${code}`);
        if (stdout) console.log(`[Ghostscript] stdout: ${stdout}`);
        if (stderr) console.log(`[Ghostscript] stderr: ${stderr}`);
        
        // Ghostscript may return non-zero codes even on success
        // We'll check file existence after the promise resolves
        resolve();
      });

      gs.on('error', (error) => {
        console.error(`[Ghostscript] Spawn error:`, error);
        reject(new Error(`Failed to spawn Ghostscript: ${error.message}`));
      });
    });

    // Wait for file system to sync
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if output file was created (Ghostscript may return non-zero even on success)
    if (!(await fileExists(outputPath))) {
      throw new Error(`Compressed PDF not found at ${outputPath}. Ghostscript may have failed.`);
    }

    const outputBuffer = await readFileBuffer(outputPath);
    
    if (!outputBuffer || outputBuffer.length === 0) {
      throw new Error(`Compressed PDF is empty at ${outputPath}`);
    }

    console.log(`[Ghostscript] Successfully read output file (${outputBuffer.length} bytes)`);

    // Cleanup
    await deleteFile(inputPath);
    await deleteFile(outputPath);

    return outputBuffer;
  } catch (error) {
    console.error(`[Ghostscript] Compression error:`, error);
    // Cleanup on error
    await deleteFile(inputPath);
    await deleteFile(outputPath);
    throw error;
  }
}

