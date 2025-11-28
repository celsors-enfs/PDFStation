/**
 * Frontend Conversion Client
 * 
 * Handles communication with the internal PDFStation API
 * for file conversion, compression, and merging operations
 */

import { API_BASE_URL } from '@/config/api';

export interface ConversionOptions {
  toolSlug: string;
  fromFormat?: string;
  toFormat?: string;
}

export interface ConversionResult {
  downloadUrl: string;
  filename: string;
  mimeType: string;
}

export class ConversionClientError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public detail?: string
  ) {
    super(message);
    this.name = 'ConversionClientError';
  }
}

/**
 * Convert a file using the internal API
 */
export async function convert(
  file: File,
  options: ConversionOptions
): Promise<ConversionResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('toolSlug', options.toolSlug);
  
  if (options.fromFormat) {
    formData.append('fromFormat', options.fromFormat);
  }
  
  if (options.toFormat) {
    formData.append('toFormat', options.toFormat);
  }

  let response: Response;
  try {
    const url = `${API_BASE_URL}/api/convert`;
    console.log('[ConversionClient] Sending request to:', url);
    
    response = await fetch(url, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header - let browser set it with boundary for multipart/form-data
    });
    
    console.log('[ConversionClient] Response status:', response.status, response.statusText);
  } catch (error: any) {
    // Network error (backend not running, CORS, etc.)
    console.error('[ConversionClient] Network error:', error);
    console.error('[ConversionClient] API_BASE_URL:', API_BASE_URL);
    console.error('[ConversionClient] Full URL:', `${API_BASE_URL}/api/convert`);
    
    const errorMessage = error.message || 'Unable to connect to conversion service';
    let detail = errorMessage;
    
    if (errorMessage.includes('CORS')) {
      detail = 'Erro de CORS: O backend não está configurado para aceitar requisições desta origem.';
    } else if (errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')) {
      detail = `Falha na conexão: Não foi possível conectar ao servidor em ${API_BASE_URL}. Verifique se o backend está rodando e acessível.`;
    } else if (errorMessage.includes('ERR_CONNECTION_REFUSED') || errorMessage.includes('ECONNREFUSED')) {
      detail = `Conexão recusada: O servidor em ${API_BASE_URL} não está respondendo. Verifique se o backend está rodando.`;
    }
    
    throw new ConversionClientError(
      'Connection failed',
      0,
      detail
    );
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      error: 'Unknown error',
      detail: `HTTP ${response.status}`,
    }));

    throw new ConversionClientError(
      errorData.error || 'Conversion failed',
      response.status,
      errorData.detail
    );
  }

  // Get the converted file as a blob
  const blob = await response.blob();
  const downloadUrl = URL.createObjectURL(blob);

  // Extract filename from Content-Disposition header
  const contentDisposition = response.headers.get('Content-Disposition');
  let filename = 'converted_file';
  
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
    if (filenameMatch) {
      filename = filenameMatch[1];
    }
  } else {
    // Fallback: use original filename with new extension
    const originalName = file.name.replace(/\.[^/.]+$/, '');
    const mimeType = response.headers.get('Content-Type') || '';
    let extension = 'pdf';
    
    if (mimeType.includes('wordprocessingml')) extension = 'docx';
    else if (mimeType.includes('spreadsheetml')) extension = 'xlsx';
    else if (mimeType.includes('jpeg')) extension = 'jpg';
    else if (mimeType.includes('png')) extension = 'png';
    else if (mimeType.includes('webp')) extension = 'webp';
    
    filename = `${originalName}_converted.${extension}`;
  }

  return {
    downloadUrl,
    filename,
    mimeType: response.headers.get('Content-Type') || 'application/octet-stream',
  };
}

/**
 * Compress a PDF file using the internal API
 */
export async function compress(
  file: File,
  toolSlug: string = 'pdf-compress'
): Promise<ConversionResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('toolSlug', toolSlug);

  let response: Response;
  try {
    const url = `${API_BASE_URL}/api/compress`;
    console.log('[ConversionClient] Sending compress request to:', url);
    
    response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    
    console.log('[ConversionClient] Compress response status:', response.status);
  } catch (error: any) {
    console.error('[ConversionClient] Network error:', error);
    const errorMessage = error.message || 'Unable to connect to conversion service';
    const detail = errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')
      ? `Falha na conexão: Não foi possível conectar ao servidor em ${API_BASE_URL}.`
      : errorMessage;
    
    throw new ConversionClientError(
      'Connection failed',
      0,
      detail
    );
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      error: 'Unknown error',
      detail: `HTTP ${response.status}`,
    }));

    throw new ConversionClientError(
      errorData.error || 'Compression failed',
      response.status,
      errorData.detail
    );
  }

  const blob = await response.blob();
  const downloadUrl = URL.createObjectURL(blob);

  const contentDisposition = response.headers.get('Content-Disposition');
  let filename = 'compressed_file.pdf';
  
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
    if (filenameMatch) {
      filename = filenameMatch[1];
    }
  }

  return {
    downloadUrl,
    filename,
    mimeType: response.headers.get('Content-Type') || 'application/pdf',
  };
}

/**
 * Merge multiple PDF files using the internal API
 */
export async function merge(
  files: File[],
  toolSlug: string = 'pdf-merge'
): Promise<ConversionResult> {
  if (files.length < 2) {
    throw new ConversionClientError(
      'Insufficient files',
      400,
      'At least 2 PDF files are required for merging'
    );
  }

  const formData = new FormData();
  files.forEach(file => {
    formData.append('files', file);
  });
  formData.append('toolSlug', toolSlug);

  let response: Response;
  try {
    const url = `${API_BASE_URL}/api/merge`;
    console.log('[ConversionClient] Sending merge request to:', url);
    
    response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    
    console.log('[ConversionClient] Merge response status:', response.status);
  } catch (error: any) {
    console.error('[ConversionClient] Network error:', error);
    const errorMessage = error.message || 'Unable to connect to conversion service';
    const detail = errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')
      ? `Falha na conexão: Não foi possível conectar ao servidor em ${API_BASE_URL}.`
      : errorMessage;
    
    throw new ConversionClientError(
      'Connection failed',
      0,
      detail
    );
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      error: 'Unknown error',
      detail: `HTTP ${response.status}`,
    }));

    throw new ConversionClientError(
      errorData.error || 'Merge failed',
      response.status,
      errorData.detail
    );
  }

  const blob = await response.blob();
  const downloadUrl = URL.createObjectURL(blob);

  const contentDisposition = response.headers.get('Content-Disposition');
  let filename = `merged_${Date.now()}.pdf`;
  
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
    if (filenameMatch) {
      filename = filenameMatch[1];
    }
  }

  return {
    downloadUrl,
    filename,
    mimeType: response.headers.get('Content-Type') || 'application/pdf',
  };
}

/**
 * Download a file from a blob URL
 */
export function downloadFile(downloadUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Revoke a blob URL to free memory
 */
export function revokeDownloadUrl(downloadUrl: string): void {
  URL.revokeObjectURL(downloadUrl);
}

