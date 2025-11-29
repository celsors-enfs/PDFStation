/**
 * qpdf utilities
 * 
 * Handles PDF merging
 */

import { spawn } from 'child_process';
import { getTempFilePath, deleteFile, readFileBuffer, fileExists, writeFileBuffer, deleteFiles } from './fileUtils.js';

const QPDF_CMD = process.env.QPDF_CMD || 'qpdf';

/**
 * Merge multiple PDFs using qpdf
 * 
 * @param {Buffer[]} inputBuffers - Array of PDF file buffers
 * @returns {Promise<Buffer>} - Merged PDF buffer
 */
export async function mergePdfs(inputBuffers) {
  if (inputBuffers.length < 2) {
    throw new Error('At least 2 PDF files are required for merging');
  }

  const inputPaths = [];
  const outputPath = getTempFilePath('pdf');

  try {
    // Validate input buffers
    for (let i = 0; i < inputBuffers.length; i++) {
      if (!inputBuffers[i] || inputBuffers[i].length === 0) {
        throw new Error(`Input buffer ${i + 1} is empty`);
      }
    }

    console.log(`[QPDF] Starting merge of ${inputBuffers.length} PDF files`);

    // Write all input PDFs to temporary files
    for (let i = 0; i < inputBuffers.length; i++) {
      const inputPath = getTempFilePath('pdf');
      await writeFileBuffer(inputPath, inputBuffers[i]);
      inputPaths.push(inputPath);
      console.log(`[QPDF] Written input file ${i + 1}: ${inputPath} (${inputBuffers[i].length} bytes)`);
    }

    // qpdf merge command
    // Format: qpdf --empty --pages file1.pdf file2.pdf ... -- out.pdf
    // --empty: Start with empty PDF
    // --pages: Specify pages from each file
    // file1.pdf file2.pdf ...: Input files
    // --: Separator before output
    // out.pdf: Output file
    const args = [
      '--empty',
      '--pages',
      ...inputPaths,
      '--',
      outputPath
    ];

    console.log(`[QPDF] Running: ${QPDF_CMD} ${args.join(' ')}`);
    console.log(`[QPDF] Input files:`, inputPaths);
    console.log(`[QPDF] Output file:`, outputPath);

    await new Promise((resolve, reject) => {
      const qpdf = spawn(QPDF_CMD, args, {
        stdio: ['ignore', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      qpdf.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      qpdf.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      qpdf.on('close', (code) => {
        console.log(`[QPDF] Process exited with code ${code}`);
        if (stdout) console.log(`[QPDF] stdout: ${stdout}`);
        if (stderr) console.log(`[QPDF] stderr: ${stderr}`);
        
        if (code === 0) {
          resolve();
        } else {
          const errorMsg = stderr || stdout || 'Unknown error';
          console.error(`[QPDF] Merge failed with exit code ${code}: ${errorMsg}`);
          reject(new Error(`qpdf merge failed with code ${code}: ${errorMsg}`));
        }
      });

      qpdf.on('error', (error) => {
        console.error(`[QPDF] Spawn error:`, error);
        console.error(`[QPDF] Attempted command: ${QPDF_CMD}`);
        console.error(`[QPDF] Error code: ${error.code}, syscall: ${error.syscall}, path: ${error.path}`);
        reject(new Error(`Failed to spawn qpdf: ${error.message}`));
      });
    });

    // Wait for file system to sync
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!(await fileExists(outputPath))) {
      throw new Error(`Merged PDF not found at ${outputPath}`);
    }

    const outputBuffer = await readFileBuffer(outputPath);
    
    if (!outputBuffer || outputBuffer.length === 0) {
      throw new Error(`Merged PDF is empty at ${outputPath}`);
    }

    console.log(`[QPDF] Successfully read output file (${outputBuffer.length} bytes)`);

    // Cleanup
    await deleteFiles(inputPaths);
    await deleteFile(outputPath);

    return outputBuffer;
  } catch (error) {
    console.error(`[QPDF] Merge error:`, error);
    // Cleanup on error
    await deleteFiles(inputPaths);
    await deleteFile(outputPath);
    throw error;
  }
}

