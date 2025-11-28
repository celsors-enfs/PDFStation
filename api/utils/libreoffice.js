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

    // Log expected output path before execution
    const inputBaseName = path.basename(inputPath, path.extname(inputPath));
    const expectedOutputPath = path.join(outputDir, `${inputBaseName}.${outputExtension}`);
    console.log(`[LibreOffice] Expected output file: ${expectedOutputPath}`);
    console.log(`[LibreOffice] Running command: ${SOFFICE_CMD} ${args.join(' ')}`);
    console.log(`[LibreOffice] Working directory: ${outputDir}`);
    console.log(`[LibreOffice] Input file exists: ${await fileExists(inputPath)}`);

    await new Promise((resolve, reject) => {
      const soffice = spawn(SOFFICE_CMD, args, {
        stdio: ['ignore', 'pipe', 'pipe'],
        cwd: outputDir, // Set working directory explicitly
      });

      let stdout = '';
      let stderr = '';

      soffice.stdout.on('data', (data) => {
        const text = data.toString();
        stdout += text;
        // Log stdout in real-time if verbose
        if (process.env.DEBUG) {
          console.log(`[LibreOffice] stdout: ${text}`);
        }
      });

      soffice.stderr.on('data', (data) => {
        const text = data.toString();
        stderr += text;
        // Log stderr in real-time (LibreOffice often writes to stderr even on success)
        console.log(`[LibreOffice] stderr: ${text}`);
      });

      soffice.on('close', async (code) => {
        console.log(`[LibreOffice] Process exited with code: ${code}`);
        
        // Log all output
        if (stdout.trim()) {
          console.log(`[LibreOffice] Full stdout:\n${stdout}`);
        }
        if (stderr.trim()) {
          console.log(`[LibreOffice] Full stderr:\n${stderr}`);
        }
        
        // Check if output file exists regardless of exit code
        // LibreOffice may return non-zero codes even on success
        const outputExists = await fileExists(expectedOutputPath);
        console.log(`[LibreOffice] Output file exists after conversion: ${outputExists}`);
        
        if (outputExists) {
          // File exists, check its size
          try {
            const stats = await fs.stat(expectedOutputPath);
            console.log(`[LibreOffice] Output file size: ${stats.size} bytes`);
            if (stats.size === 0) {
              reject(new Error(`LibreOffice generated empty file at ${expectedOutputPath}`));
              return;
            }
          } catch (statError) {
            console.error(`[LibreOffice] Failed to stat output file:`, statError);
          }
          resolve();
        } else if (code === 0) {
          // Exit code 0 but file doesn't exist - this is an error
          reject(new Error(`LibreOffice exited with code 0 but output file not found at ${expectedOutputPath}. stderr: ${stderr || 'none'}`));
        } else {
          // Non-zero exit code and file doesn't exist
          reject(new Error(`LibreOffice conversion failed with code ${code}. Output file not found at ${expectedOutputPath}. stderr: ${stderr || stdout || 'none'}`));
        }
      });

      soffice.on('error', (error) => {
        console.error(`[LibreOffice] Spawn error:`, error);
        console.error(`[LibreOffice] Command attempted: ${SOFFICE_CMD}`);
        console.error(`[LibreOffice] Args:`, args);
        reject(new Error(`Failed to spawn LibreOffice: ${error.message}. Make sure '${SOFFICE_CMD}' is installed and in PATH.`));
      });
    });

    // Read converted file
    // LibreOffice outputs to the same directory with the input filename (without extension) + output extension
    const actualOutputPath = expectedOutputPath;

    console.log(`[LibreOffice] Verifying output file at: ${actualOutputPath}`);

    // Wait a bit for file system to sync (especially important in Docker)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verify file exists and get stats
    if (!(await fileExists(actualOutputPath))) {
      // Try alternative path (LibreOffice sometimes uses different naming)
      const altPath = path.join(outputDir, path.basename(inputPath, path.extname(inputPath)) + '.' + outputExtension);
      console.log(`[LibreOffice] Primary path not found, trying alternative: ${altPath}`);
      
      if (await fileExists(altPath)) {
        const stats = await fs.stat(altPath);
        console.log(`[LibreOffice] Found output file at alternative path (${stats.size} bytes)`);
        const outputBuffer = await readFileBuffer(altPath);
        console.log(`[LibreOffice] Successfully read output file (${outputBuffer.length} bytes)`);
        await deleteFile(inputPath);
        await deleteFile(altPath);
        return outputBuffer;
      }

      // List all files in output directory for debugging
      try {
        const files = await fs.readdir(outputDir);
        console.log(`[LibreOffice] All files in output directory (${outputDir}):`, files);
        console.log(`[LibreOffice] Looking for files matching pattern: *${outputExtension}`);
        const matchingFiles = files.filter(f => f.endsWith('.' + outputExtension));
        if (matchingFiles.length > 0) {
          console.log(`[LibreOffice] Found ${matchingFiles.length} file(s) with extension .${outputExtension}:`, matchingFiles);
        }
      } catch (e) {
        console.error(`[LibreOffice] Failed to list directory:`, e);
      }

      throw new Error(`Converted file not found at ${actualOutputPath}. Checked paths: ${actualOutputPath}, ${altPath}. Please check LibreOffice logs above.`);
    }

    // File exists, verify it's not empty
    const stats = await fs.stat(actualOutputPath);
    console.log(`[LibreOffice] Output file found: ${actualOutputPath} (${stats.size} bytes)`);
    
    if (stats.size === 0) {
      throw new Error(`Converted file is empty (0 bytes) at ${actualOutputPath}`);
    }

    const outputBuffer = await readFileBuffer(actualOutputPath);
    
    if (!outputBuffer || outputBuffer.length === 0) {
      throw new Error(`Failed to read output file or file is empty at ${actualOutputPath}`);
    }

    console.log(`[LibreOffice] ✅ Successfully read output file: ${actualOutputPath} (${outputBuffer.length} bytes)`);

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
