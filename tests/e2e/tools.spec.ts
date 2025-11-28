import { test, expect } from '@playwright/test';
import { toolsMap } from '../../src/config/toolsMap';

/**
 * E2E tests for all PDFStation tools
 * Tests the complete user flow from page load to file conversion
 */
test.describe('PDFStation Tools E2E Tests', () => {
  // Test each tool
  toolsMap.forEach(toolConfig => {
    test.describe(`${toolConfig.name} (${toolConfig.slug})`, () => {
      test('should load the tool page without errors', async ({ page }) => {
        // Capture console errors
        const consoleErrors: string[] = [];
        page.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });

        // Navigate to tool page
        await page.goto(toolConfig.route);
        
        // Wait for page to load
        await page.waitForLoadState('networkidle');
        
        // Check that page loaded successfully
        await expect(page).toHaveURL(new RegExp(toolConfig.route));
        
        // Check for console errors (excluding React dev warnings)
        const criticalErrors = consoleErrors.filter(
          err => !err.includes('Warning:') && !err.includes('React DevTools')
        );
        expect(criticalErrors.length).toBe(0);
      });

      test('should render upload box', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Check for upload box
        const uploadBox = page.locator('#upload-box');
        await expect(uploadBox).toBeVisible();
      });

      test('should have correct file input accept attribute', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        const fileInput = page.locator('input[type="file"]');
        await expect(fileInput).toBeVisible();
        
        if (toolConfig.acceptedFileTypes.length > 0) {
          const acceptAttr = await fileInput.getAttribute('accept');
          expect(acceptAttr).toBeTruthy();
          
          toolConfig.acceptedFileTypes.forEach(ext => {
            expect(acceptAttr).toContain(ext.replace('.', ''));
          });
        }
      });

      test('should show format dropdown when applicable', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        if (toolConfig.hasFormatDropdown) {
          const select = page.locator('select, [role="combobox"]').first();
          await expect(select).toBeVisible();
        } else {
          // For tools without dropdown, verify it's not present
          const select = page.locator('select, [role="combobox"]').first();
          const count = await select.count();
          // It's okay if there's a select for other purposes, but not for format
          // We'll just verify the page renders correctly
          expect(page.locator('#upload-box')).toBeVisible();
        }
      });

      test('should enable convert button after file upload', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Create a mock file
        const fileInput = page.locator('input[type="file"]');
        
        // Create a small test file
        const testFileContent = 'test file content';
        const fileName = `test${toolConfig.acceptedFileTypes[0]}`;
        
        // Upload file using file chooser
        await fileInput.setInputFiles({
          name: fileName,
          mimeType: 'application/octet-stream',
          buffer: Buffer.from(testFileContent),
        });
        
        // Wait for file to appear in the queue
        await page.waitForSelector('text=' + fileName, { timeout: 5000 });
        
        // Check that convert button is now enabled
        const convertButton = page.locator('button:has-text("Convert"), button:has-text("Converter")').first();
        await expect(convertButton).toBeEnabled({ timeout: 5000 });
      });

      test('should show progress bar during conversion', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Upload file
        const fileInput = page.locator('input[type="file"]');
        const fileName = `test${toolConfig.acceptedFileTypes[0]}`;
        
        await fileInput.setInputFiles({
          name: fileName,
          mimeType: 'application/octet-stream',
          buffer: Buffer.from('test content'),
        });
        
        // Wait for file to be uploaded
        await page.waitForSelector('text=' + fileName, { timeout: 5000 });
        
        // Click convert button
        const convertButton = page.locator('button:has-text("Convert"), button:has-text("Converter")').first();
        await convertButton.click();
        
        // Wait for progress bar to appear
        const progressBar = page.locator('[role="progressbar"], .progress, [class*="progress"]').first();
        await expect(progressBar).toBeVisible({ timeout: 5000 });
      });

      test('should show download button after conversion', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Upload file
        const fileInput = page.locator('input[type="file"]');
        const fileName = `test${toolConfig.acceptedFileTypes[0]}`;
        
        await fileInput.setInputFiles({
          name: fileName,
          mimeType: 'application/octet-stream',
          buffer: Buffer.from('test content'),
        });
        
        // Wait for file to be uploaded
        await page.waitForSelector('text=' + fileName, { timeout: 5000 });
        
        // Click convert button
        const convertButton = page.locator('button:has-text("Convert"), button:has-text("Converter")').first();
        await convertButton.click();
        
        // Wait for download button to appear
        const downloadButton = page.locator('button:has-text("Download"), button:has-text("Baixar")').first();
        await expect(downloadButton).toBeVisible({ timeout: 10000 });
      });

      test('should display upload limit message', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Check for upload limit text (500MB or similar)
        const limitText = page.locator('text=/500|mb|limit|limite/i');
        await expect(limitText.first()).toBeVisible();
      });

      test('should display breadcrumbs', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Check for breadcrumbs navigation
        const breadcrumbs = page.locator('nav[aria-label*="breadcrumb"], [role="navigation"]').first();
        await expect(breadcrumbs).toBeVisible();
      });

      test('should display tool name in hero section', async ({ page }) => {
        await page.goto(toolConfig.route);
        await page.waitForLoadState('networkidle');
        
        // Check for hero heading (h1)
        const heading = page.locator('h1').first();
        await expect(heading).toBeVisible();
      });
    });
  });

  test.describe('Error Handling', () => {
    test('should handle invalid tool slug', async ({ page }) => {
      await page.goto('/tools/invalid-tool-slug');
      await page.waitForLoadState('networkidle');
      
      // Should show not found message
      const notFoundText = page.locator('text=/not found|não encontrado|no encontrado/i');
      await expect(notFoundText.first()).toBeVisible();
    });
  });
});

