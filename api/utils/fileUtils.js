/**
 * File utilities for temporary file management
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create temp directory if it doesn't exist
// Use /app/temp in Docker, fallback to process.cwd()/temp for local dev
const TEMP_DIR = process.env.TEMP_DIR || (process.platform === 'linux' && process.cwd() === '/app' ? '/app/temp' : path.join(process.cwd(), 'temp'));

export async function ensureTempDir() {
  try {
    await fs.mkdir(TEMP_DIR, { recursive: true });
  } catch (error) {
    console.error('Failed to create temp directory:', error);
  }
}

/**
 * Generate a unique temporary file path
 */
export function getTempFilePath(extension = '') {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  const filename = `temp_${timestamp}_${random}${extension ? '.' + extension : ''}`;
  return path.join(TEMP_DIR, filename);
}

/**
 * Delete a file (used for cleanup)
 */
export async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    // File might not exist, ignore error
    console.warn(`Failed to delete file ${filePath}:`, error.message);
  }
}

/**
 * Delete multiple files
 */
export async function deleteFiles(filePaths) {
  await Promise.all(filePaths.map(deleteFile));
}

/**
 * Read file as buffer
 */
export async function readFileBuffer(filePath) {
  return await fs.readFile(filePath);
}

/**
 * Write buffer to file
 */
export async function writeFileBuffer(filePath, buffer) {
  await fs.writeFile(filePath, buffer);
}

/**
 * Check if file exists
 */
export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Initialize temp directory on module load
ensureTempDir().catch(err => {
  console.error('Failed to initialize temp directory:', err);
});

// Also ensure temp dir exists before each operation
export async function ensureTempDirExists() {
  await ensureTempDir();
}

