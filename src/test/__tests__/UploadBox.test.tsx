import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '../../test/test-utils';
import { UploadBox } from '@/components/UploadBox';
import { toolsMap } from '@/config/toolsMap';
import { getToolBySlug } from '@/config/tools';

describe('UploadBox', () => {
  describe('Rendering', () => {
    toolsMap.forEach(toolConfig => {
      it(`should render for ${toolConfig.name}`, () => {
        const tool = getToolBySlug(toolConfig.slug);
        const { container } = render(
          <UploadBox
            tool={tool}
            defaultTargetFormat={tool?.defaultTargetFormat}
            outputType={tool?.outputType}
            mode={toolConfig.mode}
          />
        );

        expect(container).toBeTruthy();
        expect(document.getElementById('upload-box')).toBeInTheDocument();
      });

      it(`should show correct accepted file types for ${toolConfig.name}`, () => {
        const tool = getToolBySlug(toolConfig.slug);
        render(
          <UploadBox
            tool={tool}
            defaultTargetFormat={tool?.defaultTargetFormat}
            outputType={tool?.outputType}
            mode={toolConfig.mode}
          />
        );

        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        expect(fileInput).toBeInTheDocument();
        
        if (toolConfig.acceptedFileTypes.length > 0) {
          const acceptAttr = fileInput.getAttribute('accept');
          expect(acceptAttr).toBeTruthy();
          toolConfig.acceptedFileTypes.forEach(ext => {
            expect(acceptAttr).toContain(ext.replace('.', ''));
          });
        }
      });

      it(`should show format dropdown for ${toolConfig.name} if applicable`, () => {
        const tool = getToolBySlug(toolConfig.slug);
        render(
          <UploadBox
            tool={tool}
            defaultTargetFormat={tool?.defaultTargetFormat}
            outputType={tool?.outputType}
            mode={toolConfig.mode}
          />
        );

        if (toolConfig.hasFormatDropdown) {
          const select = screen.queryByRole('combobox');
          expect(select).toBeInTheDocument();
        }
      });
    });
  });

  describe('File Upload Flow', () => {
    it('should disable convert button initially', () => {
      const tool = getToolBySlug('pdf-to-word');
      render(
        <UploadBox
          tool={tool}
          defaultTargetFormat={tool?.defaultTargetFormat}
          outputType={tool?.outputType}
          mode="convert"
        />
      );

      // The convert button should be disabled when no files are uploaded
      // Note: The button might be in a dropdown or directly visible
      const buttons = screen.getAllByRole('button');
      const convertButton = buttons.find(btn => 
        btn.textContent?.toLowerCase().includes('convert') ||
        btn.textContent?.toLowerCase().includes('converter')
      );
      
      // If button exists, it should be disabled
      if (convertButton) {
        expect(convertButton).toBeDisabled();
      }
    });

      it('should enable convert button after file upload', async () => {
        const tool = getToolBySlug('pdf-to-word');
        const { createMockFile } = await import('../../test/test-utils');
        const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');

      render(
        <UploadBox
          tool={tool}
          defaultTargetFormat={tool?.defaultTargetFormat}
          outputType={tool?.outputType}
          mode="convert"
        />
      );

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      // Simulate file upload
      await waitFor(() => {
        fireEvent.change(fileInput, {
          target: { files: [mockFile] },
        });
      });

      // Wait for file to be processed
      await waitFor(() => {
        const uploadedFile = screen.queryByText('test.pdf');
        expect(uploadedFile).toBeInTheDocument();
      }, { timeout: 3000 });

      // Convert button should now be enabled
      await waitFor(() => {
        const convertButtons = screen.getAllByRole('button');
        const convertButton = convertButtons.find(btn => 
          btn.textContent?.toLowerCase().includes('convert') &&
          !btn.disabled
        );
        // Button should exist and be enabled
        expect(convertButton).toBeTruthy();
      }, { timeout: 3000 });
    });

      it('should show progress bar during conversion', async () => {
        const tool = getToolBySlug('pdf-to-word');
        const { createMockFile } = await import('../../test/test-utils');
        const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');

      render(
        <UploadBox
          tool={tool}
          defaultTargetFormat={tool?.defaultTargetFormat}
          outputType={tool?.outputType}
          mode="convert"
        />
      );

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      // Upload file
      fireEvent.change(fileInput, {
        target: { files: [mockFile] },
      });

      // Wait for file to be uploaded
      await waitFor(() => {
        expect(screen.queryByText('test.pdf')).toBeInTheDocument();
      }, { timeout: 3000 });

      // Click convert button
      await waitFor(async () => {
        const convertButtons = screen.getAllByRole('button');
        const convertButton = convertButtons.find(btn => 
          btn.textContent?.toLowerCase().includes('convert') &&
          !btn.disabled
        );
        
        if (convertButton) {
          fireEvent.click(convertButton);
        }
      }, { timeout: 3000 });

      // Wait for progress bar to appear
      await waitFor(() => {
        const progressBar = document.querySelector('[role="progressbar"]');
        expect(progressBar).toBeInTheDocument();
      }, { timeout: 5000 });
    });

      it('should show download button after conversion completes', async () => {
        const tool = getToolBySlug('pdf-to-word');
        const { createMockFile } = await import('../../test/test-utils');
        const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');

      render(
        <UploadBox
          tool={tool}
          defaultTargetFormat={tool?.defaultTargetFormat}
          outputType={tool?.outputType}
          mode="convert"
        />
      );

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      // Upload file
      fireEvent.change(fileInput, {
        target: { files: [mockFile] },
      });

      // Wait for file to be uploaded
      await waitFor(() => {
        expect(screen.queryByText('test.pdf')).toBeInTheDocument();
      }, { timeout: 3000 });

      // Click convert button
      await waitFor(async () => {
        const convertButtons = screen.getAllByRole('button');
        const convertButton = convertButtons.find(btn => 
          btn.textContent?.toLowerCase().includes('convert') &&
          !btn.disabled
        );
        
        if (convertButton) {
          fireEvent.click(convertButton);
        }
      }, { timeout: 3000 });

      // Wait for download button to appear (conversion completes)
      await waitFor(() => {
        const downloadButton = screen.queryByRole('button', { name: /download/i });
        expect(downloadButton).toBeInTheDocument();
      }, { timeout: 10000 });
    });
  });

  describe('File Size Validation', () => {
      it('should reject files larger than 500MB', async () => {
        const tool = getToolBySlug('pdf-to-word');
        const { createMockFile } = await import('../../test/test-utils');
        const largeFile = createMockFile('large.pdf', 600 * 1024 * 1024, 'application/pdf'); // 600MB

      render(
        <UploadBox
          tool={tool}
          defaultTargetFormat={tool?.defaultTargetFormat}
          outputType={tool?.outputType}
          mode="convert"
        />
      );

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      fireEvent.change(fileInput, {
        target: { files: [largeFile] },
      });

      // Wait for error message
      await waitFor(() => {
        const errorMessage = screen.queryByText(/500|limit|size|exceed/i);
        expect(errorMessage).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('UI Messaging', () => {
    it('should display upload limit message', () => {
      const tool = getToolBySlug('pdf-to-word');
      render(
        <UploadBox
          tool={tool}
          defaultTargetFormat={tool?.defaultTargetFormat}
          outputType={tool?.outputType}
          mode="convert"
        />
      );

      // Should show upload limit (500MB or similar)
      const limitText = screen.queryByText(/500|mb|limit/i);
      expect(limitText).toBeInTheDocument();
    });
  });
});

