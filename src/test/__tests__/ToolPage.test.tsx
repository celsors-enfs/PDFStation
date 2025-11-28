import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../../test/test-utils';
import { ToolPage } from '@/pages/ToolPage';
import { toolsMap } from '@/config/toolsMap';
import { MemoryRouter } from 'react-router-dom';

describe('ToolPage', () => {
  // Test each tool route
  toolsMap.forEach(toolConfig => {
    describe(`${toolConfig.name} (${toolConfig.slug})`, () => {
      it('should render without errors', async () => {
        const { container } = render(
          <MemoryRouter initialEntries={[toolConfig.route]}>
            <ToolPage />
          </MemoryRouter>
        );

        // Wait for component to render
        await waitFor(() => {
          expect(container).toBeTruthy();
        }, { timeout: 3000 });

        // Check that no error boundary was triggered
        expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
      });

      it('should display the tool name in the hero section', async () => {
        render(
          <MemoryRouter initialEntries={[toolConfig.route]}>
            <ToolPage />
          </MemoryRouter>
        );

        // Wait for hero to render - tool name should be visible
        await waitFor(() => {
          // The hero should contain some text related to the tool
          const hero = screen.queryByRole('heading', { level: 1 });
          expect(hero).toBeInTheDocument();
        }, { timeout: 3000 });
      });

      it('should render the upload box', async () => {
        render(
          <MemoryRouter initialEntries={[toolConfig.route]}>
            <ToolPage />
          </MemoryRouter>
        );

        await waitFor(() => {
          // Upload box should be present (identified by id or text)
          const uploadBox = document.getElementById('upload-box');
          expect(uploadBox).toBeInTheDocument();
        }, { timeout: 3000 });
      });

      it('should display breadcrumbs', async () => {
        render(
          <MemoryRouter initialEntries={[toolConfig.route]}>
            <ToolPage />
          </MemoryRouter>
        );

        await waitFor(() => {
          // Breadcrumbs should be present
          const breadcrumbs = screen.queryByRole('navigation');
          expect(breadcrumbs).toBeInTheDocument();
        }, { timeout: 3000 });
      });

      it('should not produce console errors', async () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
        const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

        render(
          <MemoryRouter initialEntries={[toolConfig.route]}>
            <ToolPage />
          </MemoryRouter>
        );

        await waitFor(() => {
          expect(document.getElementById('upload-box')).toBeInTheDocument();
        }, { timeout: 3000 });

        // Check for console errors (excluding React warnings that are expected in tests)
        const errors = consoleError.mock.calls.filter(
          call => !call[0]?.toString().includes('Warning:')
        );
        const warnings = consoleWarn.mock.calls.filter(
          call => !call[0]?.toString().includes('Warning:')
        );

        expect(errors.length).toBe(0);
        // Allow some warnings but log them
        if (warnings.length > 0) {
          console.log(`Warnings for ${toolConfig.slug}:`, warnings);
        }

        consoleError.mockRestore();
        consoleWarn.mockRestore();
      });
    });
  });

  describe('Error handling', () => {
    it('should handle invalid tool slug gracefully', () => {
      render(
        <MemoryRouter initialEntries={['/tools/invalid-tool-slug']}>
          <ToolPage />
        </MemoryRouter>
      );

      // Should show "not found" message
      expect(screen.getByText(/not found|não encontrado|no encontrado/i)).toBeInTheDocument();
    });
  });
});

