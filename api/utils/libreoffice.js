/**
 * LibreOffice (soffice) utilities
 * 
 * Handles conversions:
 * - PDF → Word (.docx)
 * - Word (.docx) → PDF
 * - Excel (.xlsx) → PDF
 * - PowerPoint (.pptx) → PDF
 */

import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { getTempFilePath, deleteFile, readFileBuffer, fileExists, writeFileBuffer, ensureTempDirExists } from './fileUtils.js';

const SOFFICE_CMD = process.env.SOFFICE_CMD || 'soffice';

/**
 * Convert file using LibreOffice
 * 
 * @param {Buffer} inputBuffer - Input file buffer
 * @param {string} inputExtension - Input file extension (e.g., 'pdf', 'docx')
 * @param {string} outputExtension - Output file extension (e.g., 'docx', 'pdf')
 * @param {string} inputFilename - Original filename (for context)
 * @returns {Promise<Buffer>} - Converted file buffer
 */
export async function convertWithLibreOffice(
  inputBuffer,
  inputExtension,
  outputExtension,
  inputFilename = 'input'
) {
  const inputPath = getTempFilePath(inputExtension);
  const outputDir = path.dirname(inputPath);

  try {
    // Ensure temp directory exists
    await ensureTempDirExists();

    // Validate input buffer
    if (!inputBuffer || inputBuffer.length === 0) {
      throw new Error('Input buffer is empty');
    }

    console.log(`[LibreOffice] Starting conversion: ${inputExtension} → ${outputExtension}`);
    console.log(`[LibreOffice] Input file: ${inputPath} (${inputBuffer.length} bytes)`);
    console.log(`[LibreOffice] Output directory: ${outputDir}`);

    // Write input file
    await writeFileBuffer(inputPath, inputBuffer);
    console.log(`[LibreOffice] Input file written successfully`);

    // LibreOffice conversion command
    // --headless: Run without GUI
    // --convert-to: Target format
    // --outdir: Output directory
    const args = [
      '--headless',
      '--nodefault',
      '--nolockcheck',
      '--nologo',
      '--norestore',
      '--convert-to',
      outputExtension,
      '--outdir',
      outputDir,
      inputPath
    ];

    console.log(`[LibreOffice] Running: ${SOFFICE_CMD} ${args.join(' ')}`);

    await new Promise((resolve, reject) => {
      const soffice = spawn(SOFFICE_CMD, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      soffice.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      soffice.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      soffice.on('close', (code) => {
        console.log(`[LibreOffice] Process exited with code ${code}`);
        if (stdout) console.log(`[LibreOffice] stdout: ${stdout}`);
        if (stderr) console.log(`[LibreOffice] stderr: ${stderr}`);
        
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`LibreOffice conversion failed with code ${code}: ${stderr || stdout}`));
        }
      });

      soffice.on('error', (error) => {
        console.error(`[LibreOffice] Spawn error:`, error);
        reject(new Error(`Failed to spawn LibreOffice: ${error.message}`));
      });
    });

    // Read converted file
    // LibreOffice outputs to the same directory with the input filename (without extension) + output extension
    const inputBaseName = path.basename(inputPath, path.extname(inputPath));
    const actualOutputPath = path.join(outputDir, `${inputBaseName}.${outputExtension}`);

    console.log(`[LibreOffice] Looking for output file at: ${actualOutputPath}`);

    // Wait a bit for file system to sync
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!(await fileExists(actualOutputPath))) {
      // Try alternative path (LibreOffice sometimes uses different naming)
      const altPath = path.join(outputDir, path.basename(inputPath, path.extname(inputPath)) + '.' + outputExtension);
      console.log(`[LibreOffice] Trying alternative path: ${altPath}`);
      
      if (await fileExists(altPath)) {
        const outputBuffer = await readFileBuffer(altPath);
        console.log(`[LibreOffice] Found output file at alternative path (${outputBuffer.length} bytes)`);
        await deleteFile(inputPath);
        await deleteFile(altPath);
        return outputBuffer;
      }

      // List files in output directory for debugging
      try {
        const files = await fs.readdir(outputDir);
        console.log(`[LibreOffice] Files in output directory:`, files);
      } catch (e) {
        console.error(`[LibreOffice] Failed to list directory:`, e);
      }

      throw new Error(`Converted file not found at ${actualOutputPath}. Checked: ${actualOutputPath}, ${altPath}`);
    }

    const outputBuffer = await readFileBuffer(actualOutputPath);
    
    if (!outputBuffer || outputBuffer.length === 0) {
      throw new Error(`Converted file is empty at ${actualOutputPath}`);
    }

    console.log(`[LibreOffice] Successfully read output file (${outputBuffer.length} bytes)`);

    // Cleanup
    await deleteFile(inputPath);
    await deleteFile(actualOutputPath);

    return outputBuffer;
  } catch (error) {
    console.error(`[LibreOffice] Conversion error:`, error);
    // Cleanup on error
    await deleteFile(inputPath);
    throw error;
  }
}
