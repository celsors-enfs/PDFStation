/**
 * External Conversion API Client
 * 
 * This module abstracts communication with an external file conversion API.
 * It's designed to be provider-agnostic - you can plug in any conversion service
 * by implementing the HTTP calls according to that provider's API specification.
 * 
 * Provider-specific mapping should be done in the individual conversion functions
 * (convertFile, compressFile, mergeFiles) based on the external API's requirements.
 */

import { getEnvConfig, isMockMode } from '../config/env.js';

export interface ConversionOptions {
  inputBuffer: Buffer;
  fromFormat: string;
  toFormat: string;
  filename?: string;
}

export interface CompressionOptions {
  inputBuffer: Buffer;
  filename?: string;
}

export interface MergeOptions {
  inputBuffers: Buffer[];
  filenames?: string[];
}

export interface ConversionResult {
  buffer: Buffer;
  mimeType: string;
  fileExtension: string;
}

export class ConversionError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public detail?: string
  ) {
    super(message);
    this.name = 'ConversionError';
  }
}

/**
 * Create a dummy PDF for development/testing when API is not configured
 */
function createDummyPdf(): Buffer {
  // Minimal valid PDF structure
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
>>
>>
>>
endobj
4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(Converted File) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000314 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
398
%%EOF`;
  return Buffer.from(pdfContent);
}

/**
 * Create a dummy image for development/testing
 */
function createDummyImage(format: 'jpg' | 'png' | 'webp'): Buffer {
  // For testing, return a minimal placeholder
  // In real implementation, this would be a proper image buffer
  const placeholder = `Placeholder ${format.toUpperCase()} image`;
  return Buffer.from(placeholder);
}

/**
 * Convert a file using the external conversion API
 * 
 * @param options Conversion options
 * @returns Promise with converted file buffer and metadata
 */
export async function convertFile(
  options: ConversionOptions
): Promise<ConversionResult> {
  const config = getEnvConfig();

  // Mock mode for development/testing
  if (isMockMode()) {
    console.warn('[MOCK MODE] Returning dummy converted file');
    
    if (options.toFormat === 'pdf') {
      return {
        buffer: createDummyPdf(),
        mimeType: 'application/pdf',
        fileExtension: 'pdf',
      };
    }
    
    if (['jpg', 'jpeg', 'png', 'webp'].includes(options.toFormat.toLowerCase())) {
      return {
        buffer: createDummyImage(options.toFormat.toLowerCase() as 'jpg' | 'png' | 'webp'),
        mimeType: `image/${options.toFormat.toLowerCase()}`,
        fileExtension: options.toFormat.toLowerCase(),
      };
    }
    
    // Default: return dummy PDF
    return {
      buffer: createDummyPdf(),
      mimeType: 'application/pdf',
      fileExtension: 'pdf',
    };
  }

  try {
    // Build FormData for multipart/form-data request
    const FormData = (await import('form-data')).default;
    const formData = new FormData();
    
    // Add file buffer
    formData.append('file', options.inputBuffer, {
      filename: options.filename || `input.${options.fromFormat}`,
      contentType: 'application/octet-stream',
    });
    
    // Add conversion parameters
    formData.append('fromFormat', options.fromFormat);
    formData.append('toFormat', options.toFormat);

    // Make request to external API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.converterApiTimeoutMs);

    const response = await fetch(`${config.converterApiBaseUrl}/convert`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.converterApiKey}`,
        // FormData will set Content-Type with boundary automatically
        ...formData.getHeaders(),
      },
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Handle rate limiting
    if (response.status === 429) {
      throw new ConversionError(
        'Rate limit exceeded. Please try again later.',
        429
      );
    }

    // Handle other errors
    if (!response.ok) {
      const errorText = await response.text();
      let errorDetail: string | undefined;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorDetail = errorJson.message || errorJson.error || errorText;
      } catch {
        errorDetail = errorText;
      }

      throw new ConversionError(
        'Conversion service failed',
        response.status,
        errorDetail
      );
    }

    // Get converted file
    const buffer = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') || 
      `application/${options.toFormat}`;
    
    // Extract file extension from content-type or use toFormat
    let fileExtension = options.toFormat.toLowerCase();
    if (contentType.includes('pdf')) fileExtension = 'pdf';
    else if (contentType.includes('wordprocessingml')) fileExtension = 'docx';
    else if (contentType.includes('spreadsheetml')) fileExtension = 'xlsx';
    else if (contentType.includes('jpeg')) fileExtension = 'jpg';
    else if (contentType.includes('png')) fileExtension = 'png';
    else if (contentType.includes('webp')) fileExtension = 'webp';

    return {
      buffer,
      mimeType: contentType,
      fileExtension,
    };
  } catch (error: any) {
    if (error instanceof ConversionError) {
      throw error;
    }
    
    if (error.name === 'AbortError') {
      throw new ConversionError(
        'Conversion request timed out',
        504,
        'The conversion service did not respond in time'
      );
    }

    throw new ConversionError(
      'Conversion request failed',
      500,
      error.message || 'Unknown error'
    );
  }
}

/**
 * Compress a PDF file using the external conversion API
 * 
 * @param options Compression options
 * @returns Promise with compressed PDF buffer
 */
export async function compressFile(
  options: CompressionOptions
): Promise<ConversionResult> {
  const config = getEnvConfig();

  // Mock mode
  if (isMockMode()) {
    console.warn('[MOCK MODE] Returning dummy compressed PDF');
    return {
      buffer: createDummyPdf(),
      mimeType: 'application/pdf',
      fileExtension: 'pdf',
    };
  }

  try {
    const FormData = (await import('form-data')).default;
    const formData = new FormData();
    
    formData.append('file', options.inputBuffer, {
      filename: options.filename || 'input.pdf',
      contentType: 'application/pdf',
    });
    
    formData.append('operation', 'compress');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.converterApiTimeoutMs);

    const response = await fetch(`${config.converterApiBaseUrl}/compress`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.converterApiKey}`,
        ...formData.getHeaders(),
      },
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 429) {
      throw new ConversionError(
        'Rate limit exceeded. Please try again later.',
        429
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      let errorDetail: string | undefined;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorDetail = errorJson.message || errorJson.error || errorText;
      } catch {
        errorDetail = errorText;
      }

      throw new ConversionError(
        'Compression service failed',
        response.status,
        errorDetail
      );
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') || 'application/pdf';

    return {
      buffer,
      mimeType: contentType,
      fileExtension: 'pdf',
    };
  } catch (error: any) {
    if (error instanceof ConversionError) {
      throw error;
    }
    
    if (error.name === 'AbortError') {
      throw new ConversionError(
        'Compression request timed out',
        504,
        'The compression service did not respond in time'
      );
    }

    throw new ConversionError(
      'Compression request failed',
      500,
      error.message || 'Unknown error'
    );
  }
}

/**
 * Merge multiple PDF files using the external conversion API
 * 
 * @param options Merge options
 * @returns Promise with merged PDF buffer
 */
export async function mergeFiles(
  options: MergeOptions
): Promise<ConversionResult> {
  const config = getEnvConfig();

  // Mock mode
  if (isMockMode()) {
    console.warn('[MOCK MODE] Returning dummy merged PDF');
    return {
      buffer: createDummyPdf(),
      mimeType: 'application/pdf',
      fileExtension: 'pdf',
    };
  }

  try {
    const FormData = (await import('form-data')).default;
    const formData = new FormData();
    
    // Add all files
    options.inputBuffers.forEach((buffer, index) => {
      formData.append('files', buffer, {
        filename: options.filenames?.[index] || `file${index + 1}.pdf`,
        contentType: 'application/pdf',
      });
    });
    
    formData.append('operation', 'merge');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.converterApiTimeoutMs);

    const response = await fetch(`${config.converterApiBaseUrl}/merge`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.converterApiKey}`,
        ...formData.getHeaders(),
      },
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 429) {
      throw new ConversionError(
        'Rate limit exceeded. Please try again later.',
        429
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      let errorDetail: string | undefined;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorDetail = errorJson.message || errorJson.error || errorText;
      } catch {
        errorDetail = errorText;
      }

      throw new ConversionError(
        'Merge service failed',
        response.status,
        errorDetail
      );
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') || 'application/pdf';

    return {
      buffer,
      mimeType: contentType,
      fileExtension: 'pdf',
    };
  } catch (error: any) {
    if (error instanceof ConversionError) {
      throw error;
    }
    
    if (error.name === 'AbortError') {
      throw new ConversionError(
        'Merge request timed out',
        504,
        'The merge service did not respond in time'
      );
    }

    throw new ConversionError(
      'Merge request failed',
      500,
      error.message || 'Unknown error'
    );
  }
}

