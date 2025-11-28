/**
 * Test PDF → DOCX conversion using LibreOffice
 * 
 * This script specifically tests PDF → DOCX conversion to verify
 * that LibreOffice export filters are properly installed.
 * 
 * Usage: node scripts/testPdfToDocx.js
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { convertWithLibreOffice } from '../api/utils/libreoffice.js';
import { ensureTempDirExists } from '../api/utils/fileUtils.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_PDF_PATH = path.join(__dirname, '../test-assets/sample.pdf');
const OUTPUT_DOCX_PATH = '/app/temp/test-docx-from-test.docx';

async function testPdfToDocx() {
  console.log('🧪 Testing PDF → DOCX conversion...\n');

  try {
    // Ensure temp directory exists
    await ensureTempDirExists();
    console.log('✅ Temp directory ready\n');

    // Check if test PDF exists
    if (!existsSync(TEST_PDF_PATH)) {
      console.error(`❌ Test PDF not found at: ${TEST_PDF_PATH}`);
      console.log('💡 Run: npm run test:generate-pdf');
      process.exit(1);
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
    writeFileSync(OUTPUT_DOCX_PATH, docxBuffer);
    console.log(`💾 Output saved to: ${OUTPUT_DOCX_PATH}`);

    // Verify it's a valid DOCX (should start with PK, which is ZIP signature)
    const isZip = docxBuffer[0] === 0x50 && docxBuffer[1] === 0x4B; // PK
    if (isZip) {
      console.log('✅ Output file is valid DOCX (ZIP format detected)\n');
    } else {
      console.warn('⚠️  Warning: Output file does not appear to be valid DOCX\n');
    }

    console.log('🎉 Test conversion OK!');
    console.log(`\n📋 Summary:`);
    console.log(`   Input:  ${TEST_PDF_PATH} (${pdfBuffer.length} bytes)`);
    console.log(`   Output: ${OUTPUT_DOCX_PATH} (${docxBuffer.length} bytes)`);
    console.log(`   Time:   ${duration}s`);

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Test failed!');
    console.error('Error:', error.message);
    
    // Check for specific error types
    if (error.message.includes('no export filter') || error.message.includes('export filter')) {
      console.error('\n🔍 DIAGNOSIS: LibreOffice DOCX export filter is missing.');
      console.error('   Solution: Install libreoffice-common and libreoffice-writer packages.');
      console.error('   Check Dockerfile and ensure these packages are installed.');
    }
    
    console.error('\nStack trace:');
    console.error(error.stack);
    process.exit(1);
  }
}

// Run test
testPdfToDocx();

