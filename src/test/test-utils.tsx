import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';

/**
 * Custom render function that includes all necessary providers
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

/**
 * Create a mock file for testing
 */
export function createMockFile(
  name: string,
  size: number = 1024,
  type: string = 'application/pdf',
): File {
  const file = new File([''], name, { type });
  Object.defineProperty(file, 'size', {
    value: size,
    writable: false,
  });
  return file;
}

/**
 * Wait for async operations to complete
 */
export async function waitForAsync() {
  await new Promise(resolve => setTimeout(resolve, 0));
}

