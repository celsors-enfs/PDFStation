/**
 * API Configuration
 * 
 * Central configuration for all API endpoints.
 * Supports both development (local) and production environments.
 */

// Use environment variable if set, otherwise use production URL
// For local development, set VITE_API_BASE_URL=http://localhost:3000 in .env
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://pdfstation-production.up.railway.app';

// Log the API URL being used (only in development)
if (import.meta.env.DEV) {
  console.log('[API Config] Using API_BASE_URL:', API_BASE_URL);
}

/**
 * Get the full API endpoint URL
 * @param endpoint - API endpoint path (e.g., '/api/convert')
 * @returns Full URL to the endpoint
 */
export function getApiUrl(endpoint: string): string {
  // Ensure endpoint starts with /
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${normalizedEndpoint}`;
}

