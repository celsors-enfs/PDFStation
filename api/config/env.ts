/**
 * Environment configuration for PDFStation API
 * Reads and validates required environment variables
 */

interface EnvConfig {
  converterApiBaseUrl: string;
  converterApiKey: string;
  converterApiTimeoutMs: number;
  port: number;
  nodeEnv: string;
}

let envConfig: EnvConfig | null = null;

/**
 * Get environment configuration
 * Throws error if required variables are missing
 */
export function getEnvConfig(): EnvConfig {
  if (envConfig) {
    return envConfig;
  }

  const converterApiBaseUrl = process.env.CONVERTER_API_BASE_URL;
  const converterApiKey = process.env.CONVERTER_API_KEY;
  const converterApiTimeoutMs = parseInt(
    process.env.CONVERTER_API_TIMEOUT_MS || '120000',
    10
  );
  const port = parseInt(process.env.PORT || '3001', 10);
  const nodeEnv = process.env.NODE_ENV || 'development';

  // Validate required environment variables
  if (!converterApiBaseUrl) {
    throw new Error(
      'CONVERTER_API_BASE_URL is required. Please set it in your .env file.'
    );
  }

  if (!converterApiKey) {
    throw new Error(
      'CONVERTER_API_KEY is required. Please set it in your .env file.'
    );
  }

  // Validate URL format
  try {
    new URL(converterApiBaseUrl);
  } catch {
    throw new Error(
      `CONVERTER_API_BASE_URL must be a valid URL. Got: ${converterApiBaseUrl}`
    );
  }

  envConfig = {
    converterApiBaseUrl,
    converterApiKey,
    converterApiTimeoutMs,
    port,
    nodeEnv,
  };

  return envConfig;
}

/**
 * Check if we're in development mode with mock enabled
 */
export function isMockMode(): boolean {
  return process.env.USE_MOCK_CONVERSION === 'true';
}

