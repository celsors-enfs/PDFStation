# PDFStation Testing & Diagnostics

This document describes the comprehensive test and diagnostics layer for PDFStation.

## Overview

The test suite validates that all 12 conversion, compression, and merge tools work correctly from a UI perspective. The tests cover:

- **10 Converter Tools**: PDF↔Word, PDF↔Excel, Image↔PDF conversions
- **2 Utility Tools**: PDF Compress, PDF Merge

## Test Stack

### Unit/Integration Tests
- **Vitest**: Fast unit test runner
- **@testing-library/react**: React component testing
- **@testing-library/jest-dom**: DOM matchers
- **@testing-library/user-event**: User interaction simulation
- **jsdom**: Browser environment simulation

### E2E Tests
- **Playwright**: End-to-end browser testing
- Supports Chromium, Firefox, and WebKit
- Auto-starts dev server for testing

## Quick Start

```bash
# Run all unit/integration tests
npm run test

# Run E2E tests (starts dev server automatically)
npm run test:e2e

# Run everything
npm run test:all

# Run diagnostics
npm run test:diagnostics
```

## Test Structure

```
src/test/
├── setup.ts              # Test environment setup
├── test-utils.tsx        # Test utilities and helpers
├── diagnostics.ts        # Tool configuration diagnostics
└── __tests__/
    ├── ToolPage.test.tsx    # Tool page rendering tests
    ├── UploadBox.test.tsx   # Upload and conversion flow tests
    └── toolsMap.test.ts     # Tool configuration tests

tests/e2e/
└── tools.spec.ts         # E2E tests for all tools
```

## What Gets Tested

### For Each Tool

1. **Route & Rendering**
   - ✅ Route exists and is accessible
   - ✅ Page renders without runtime errors
   - ✅ No console errors
   - ✅ Breadcrumbs display correctly
   - ✅ Tool name appears in hero section

2. **Upload Box**
   - ✅ Upload box renders correctly
   - ✅ Correct file input accept attributes
   - ✅ Format dropdown appears when applicable
   - ✅ Upload limit messaging (500MB)

3. **File Upload Flow**
   - ✅ Convert button is initially disabled
   - ✅ Convert button enables after file upload
   - ✅ File appears in upload queue
   - ✅ File size validation (rejects >500MB)

4. **Conversion Flow**
   - ✅ Progress bar appears during conversion
   - ✅ Progress updates correctly
   - ✅ Download button appears after completion
   - ✅ Download functionality works

5. **UI Messaging**
   - ✅ Upload limit displayed
   - ✅ Status messages appear correctly
   - ✅ Error messages display properly

## Test Commands

| Command | Description |
|---------|-------------|
| `npm run test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:e2e` | Run E2E tests |
| `npm run test:e2e:ui` | Run E2E tests with Playwright UI |
| `npm run test:e2e:headed` | Run E2E tests in headed mode |
| `npm run test:diagnostics` | Run tool configuration diagnostics |
| `npm run test:all` | Run all tests (unit + E2E) |

## Tool Configuration

All tools are centrally configured in `src/config/toolsMap.ts`. This file provides:

- Tool metadata (slug, name, route)
- Accepted file types
- Expected output formats
- Format dropdown configuration
- Tool mode (convert/compress/merge)

## Diagnostics

The diagnostics script (`src/test/diagnostics.ts`) verifies:

- ✅ All tools are in toolsMap
- ✅ Routes are correctly configured
- ✅ File types are properly set
- ✅ Format dropdowns are configured correctly

Run diagnostics:
```bash
npm run test:diagnostics
```

## Test Coverage

### Unit/Integration Tests
- **ToolPage.test.tsx**: Tests all 12 tool pages
- **UploadBox.test.tsx**: Tests upload flow for all tools
- **toolsMap.test.ts**: Tests tool configuration

### E2E Tests
- **tools.spec.ts**: Complete E2E flows for all 12 tools

## Writing New Tests

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
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

## Mocking

- **Backend conversion**: All backend calls are mocked/stubbed
- **File uploads**: Uses mock files created by test utilities
- **Conversion progress**: Simulated with timeouts and intervals

## Notes

- Tests focus on **frontend logic and UI flows**
- Backend conversion is mocked (no actual API calls)
- File uploads use mock files
- Conversion progress is simulated
- All tests are designed to run quickly and reliably

## Troubleshooting

### Tests fail with "Cannot find module"
- Ensure all dependencies are installed: `npm install`
- Check that paths in `vitest.config.ts` are correct

### E2E tests fail to start
- Ensure dev server can start: `npm run dev`
- Check that port 5173 is available
- Verify Playwright browsers are installed: `npx playwright install`

### Tests timeout
- Increase timeout in test files if needed
- Check that mock file creation is working
- Verify that components are rendering correctly

## CI/CD Integration

The test suite is designed to run in CI/CD pipelines:

```yaml
# Example GitHub Actions
- run: npm run test:run
- run: npm run test:e2e
```

## Future Enhancements

Potential additions:
- Visual regression testing
- Performance testing
- Accessibility testing
- Cross-browser compatibility matrix
- Mobile device testing

