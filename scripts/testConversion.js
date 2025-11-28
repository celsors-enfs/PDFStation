/**
 * Test PDF → DOCX conversion using LibreOffice
 * 
 * This script tests the conversion pipeline inside a Docker container
 * without requiring the frontend or API server.
 * 
 * Usage: node scripts/testConversion.js
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { convertWithLibreOffice } from '../api/utils/libreoffice.js';
import { ensureTempDirExists } from '../api/utils/fileUtils.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_PDF_PATH = path.join(__dirname, '../test-assets/sample.pdf');
const OUTPUT_DOCX_PATH = path.join(__dirname, '../test-output/output.docx');

async function testConversion() {
  console.log('🧪 Starting PDF → DOCX conversion test...\n');

  try {
    // Ensure temp directory exists
    await ensureTempDirExists();
    console.log('✅ Temp directory ready\n');

    // Check if test PDF exists
    if (!existsSync(TEST_PDF_PATH)) {
      console.error(`❌ Test PDF not found at: ${TEST_PDF_PATH}`);
      console.log('💡 Generating test PDF...');
      // Try to generate it
      const { execSync } = await import('child_process');
      try {
        execSync('node scripts/generateTestPdf.js', { cwd: path.join(__dirname, '..') });
      } catch (e) {
        console.error('❌ Failed to generate test PDF. Please create test-assets/sample.pdf manually.');
        process.exit(1);
      }
    }

    // Read test PDF
    console.log(`📄 Reading test PDF: ${TEST_PDF_PATH}`);
    const pdfBuffer = readFileSync(TEST_PDF_PATH);
    console.log(`   PDF size: ${pdfBuffer.length} bytes\n`);

    // Perform conversion
    console.log('🔄 Starting conversion: PDF → DOCX');
    console.log('   Using LibreOffice (soffice)...\n');

    const startTime = Date.now();
    const docxBuffer = await convertWithLibreOffice(
      pdfBuffer,
      'pdf',
      'docx',
      'sample.pdf'
    );
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Verify output
    if (!docxBuffer || docxBuffer.length === 0) {
      throw new Error('Conversion returned empty buffer');
    }

    console.log(`\n✅ Conversion successful!`);
    console.log(`   Output size: ${docxBuffer.length} bytes`);
    console.log(`   Duration: ${duration}s\n`);

    // Save output file for inspection
    const outputDir = path.dirname(OUTPUT_DOCX_PATH);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(OUTPUT_DOCX_PATH, docxBuffer);
    console.log(`💾 Output saved to: ${OUTPUT_DOCX_PATH}`);

    // Verify it's a valid DOCX (should start with PK, which is ZIP signature)
    const isZip = docxBuffer[0] === 0x50 && docxBuffer[1] === 0x4B; // PK
    if (isZip) {
      console.log('✅ Output file is valid DOCX (ZIP format detected)\n');
    } else {
      console.warn('⚠️  Warning: Output file does not appear to be valid DOCX\n');
    }

    console.log('🎉 Test completed successfully!');
    console.log(`\n📋 Summary:`);
    console.log(`   Input:  ${TEST_PDF_PATH} (${pdfBuffer.length} bytes)`);
    console.log(`   Output: ${OUTPUT_DOCX_PATH} (${docxBuffer.length} bytes)`);
    console.log(`   Time:   ${duration}s`);

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Test failed!');
    console.error('Error:', error.message);
    console.error('\nStack trace:');
    console.error(error.stack);
    process.exit(1);
  }
}

// Run test
testConversion();

