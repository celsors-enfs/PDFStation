/**
 * Diagnostics script to verify all tools are properly configured
 * Run with: npm run test:run -- src/test/diagnostics.ts
 */

import { toolsMap, getToolConfigBySlug } from '@/config/toolsMap';
import { tools } from '@/config/tools';

interface DiagnosticResult {
  tool: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
}

const diagnostics: DiagnosticResult[] = [];

console.log('🔍 PDFStation Tool Diagnostics\n');
console.log('='.repeat(60));

// Check 1: All tools are in toolsMap
console.log('\n1. Checking tool coverage...');
tools.forEach(tool => {
  const config = getToolConfigBySlug(tool.slug);
  if (config) {
    diagnostics.push({
      tool: tool.slug,
      status: 'pass',
      message: '✓ Tool found in toolsMap',
    });
  } else {
    diagnostics.push({
      tool: tool.slug,
      status: 'fail',
      message: '✗ Tool missing from toolsMap',
    });
  }
});

// Check 2: All tools have routes
console.log('\n2. Checking route configuration...');
toolsMap.forEach(tool => {
  if (tool.route.startsWith('/tools/')) {
    diagnostics.push({
      tool: tool.slug,
      status: 'pass',
      message: `✓ Route configured: ${tool.route}`,
    });
  } else {
    diagnostics.push({
      tool: tool.slug,
      status: 'fail',
      message: `✗ Invalid route: ${tool.route}`,
    });
  }
});

// Check 3: All tools have accepted file types
console.log('\n3. Checking file type configuration...');
toolsMap.forEach(tool => {
  if (tool.acceptedFileTypes.length > 0) {
    diagnostics.push({
      tool: tool.slug,
      status: 'pass',
      message: `✓ File types: ${tool.acceptedFileTypes.join(', ')}`,
    });
  } else {
    diagnostics.push({
      tool: tool.slug,
      status: 'warning',
      message: '⚠ No accepted file types configured',
    });
  }
});

// Check 4: Format dropdown configuration
console.log('\n4. Checking format dropdown configuration...');
toolsMap.forEach(tool => {
  if (tool.hasFormatDropdown) {
    if (tool.expectedFormats && tool.expectedFormats.length > 0) {
      diagnostics.push({
        tool: tool.slug,
        status: 'pass',
        message: `✓ Format dropdown: ${tool.expectedFormats.join(', ')}`,
      });
    } else {
      diagnostics.push({
        tool: tool.slug,
        status: 'warning',
        message: '⚠ Format dropdown enabled but no formats configured',
      });
    }
  } else {
    diagnostics.push({
      tool: tool.slug,
      status: 'pass',
      message: '✓ No format dropdown (expected for this tool type)',
    });
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 Diagnostic Summary\n');

const passed = diagnostics.filter(d => d.status === 'pass').length;
const failed = diagnostics.filter(d => d.status === 'fail').length;
const warnings = diagnostics.filter(d => d.status === 'warning').length;

console.log(`✓ Passed: ${passed}`);
console.log(`✗ Failed: ${failed}`);
console.log(`⚠ Warnings: ${warnings}`);

if (failed > 0) {
  console.log('\n❌ Failures:');
  diagnostics
    .filter(d => d.status === 'fail')
    .forEach(d => {
      console.log(`  ${d.tool}: ${d.message}`);
    });
}

if (warnings > 0) {
  console.log('\n⚠ Warnings:');
  diagnostics
    .filter(d => d.status === 'warning')
    .forEach(d => {
      console.log(`  ${d.tool}: ${d.message}`);
    });
}

console.log('\n' + '='.repeat(60));
console.log(`\nTotal tools: ${toolsMap.length}`);
console.log(`Total checks: ${diagnostics.length}`);

// Exit with error code if there are failures
if (failed > 0) {
  process.exit(1);
}

