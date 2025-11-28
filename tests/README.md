# PDFStation Test Suite

This directory contains comprehensive tests for all PDFStation conversion, compression, and merge tools.

## Test Structure

### Unit/Integration Tests (Vitest)
Located in `src/test/__tests__/`:
- **ToolPage.test.tsx**: Tests for tool page rendering and routing
- **UploadBox.test.tsx**: Tests for file upload, conversion flow, and UI interactions
- **toolsMap.test.ts**: Tests for tool configuration and mapping

### E2E Tests (Playwright)
Located in `tests/e2e/`:
- **tools.spec.ts**: End-to-end tests for all tools, testing complete user flows

## Running Tests

### Unit/Integration Tests

```bash
# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

### E2E Tests

```bash
# Run E2E tests (starts dev server automatically)
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed mode (see browser)
npm run test:e2e:headed
```

### Run All Tests

```bash
npm run test:all
```

## Test Coverage

The test suite covers all 12 tools:

### Converters (10 tools)
- PDF to Word
- Word to PDF
- PDF to Excel
- Excel to PDF
- JPG to PDF
- PNG to PDF
- WebP to PDF
- PDF to JPG
- PDF to PNG
- PDF to WebP

### Utilities (2 tools)
- Compress PDF
- Merge PDF

## What Each Test Validates

### Tool Page Tests
1. ✅ Route exists and renders without runtime errors
2. ✅ Upload box renders correctly
3. ✅ Breadcrumbs are displayed
4. ✅ Tool name appears in hero section
5. ✅ No console errors

### Upload Box Tests
1. ✅ Correct file input accept attributes
2. ✅ Format dropdown appears when applicable
3. ✅ Convert button is initially disabled
4. ✅ Convert button enables after file upload
5. ✅ Progress bar appears during conversion
6. ✅ Download button appears after conversion completes
7. ✅ File size validation (500MB limit)
8. ✅ Upload limit messaging

### E2E Tests
1. ✅ Page loads without errors
2. ✅ Complete upload flow
3. ✅ Conversion flow with progress
4. ✅ Download functionality
5. ✅ UI messaging and limits
6. ✅ Error handling

## Diagnostics

Run diagnostics to verify tool configuration:

```bash
npm run test:run -- src/test/diagnostics.ts
```

This will check:
- All tools are in toolsMap
- Routes are correctly configured
- File types are properly set
- Format dropdowns are configured correctly

## Test Configuration

### Vitest
Configuration: `vitest.config.ts`
- Environment: jsdom
- Setup file: `src/test/setup.ts`
- Coverage provider: v8

### Playwright
Configuration: `playwright.config.ts`
- Base URL: http://localhost:5173
- Browsers: Chromium (can be extended to Firefox/WebKit)
- Auto-starts dev server

## Writing New Tests

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '../test-utils';
import { MyComponent } from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test';

test('should do something', async ({ page }) => {
  await page.goto('/my-page');
  await expect(page.locator('h1')).toBeVisible();
});
```

## Notes

- All backend conversion is mocked/stubbed
- Tests focus on frontend logic and UI flows
- File uploads use mock files created by test utilities
- Conversion progress is simulated with timeouts

