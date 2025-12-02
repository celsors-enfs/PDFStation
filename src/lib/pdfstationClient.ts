/**
 * PDFStation API Client
 * 
 * Centralized client for all PDFStation backend API operations.
 * Handles file conversion, compression, and merging with automatic download.
 * 
 * Location: src/lib/pdfstationClient.ts
 * 
 * Components using this client:
 * - UploadBox.tsx → convertFile, compressPdf, mergePdfs
 * - useFileConversion.ts → (via UploadBox)
 */

/**
 * Ensure API base URL is configured and properly formatted
 */
function ensureApiBase(): string {
  const API_BASE = import.meta.env.VITE_PDFSTATION_API_URL;
  
  if (!API_BASE) {
    console.error('VITE_PDFSTATION_API_URL não está definida');
    throw new Error(
      "API base URL não configurada. " +
      "Configure VITE_PDFSTATION_API_URL no arquivo .env.local ou nas variáveis de ambiente da Vercel."
    );
  }
  
  // Remove trailing slash if present
  return API_BASE.replace(/\/$/, '');
}

/**
 * Download a blob as a file
 */
function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/**
 * Convert a file using the PDFStation API
 * 
 * @param options.file - File to convert
 * @param options.toolSlug - Tool slug (e.g., 'jpg-to-pdf', 'png-to-pdf', 'pdf-to-word', 'pdf-to-excel')
 * @param options.outputFileName - Name for the downloaded file
 * @throws Error if conversion fails
 */
export async function convertFile(options: {
  file: File;
  toolSlug: string;
  outputFileName: string;
}): Promise<void> {
  const API_BASE = ensureApiBase();
  const formData = new FormData();
  formData.append('file', options.file);
  formData.append('toolSlug', options.toolSlug);

  const url = `${API_BASE}/api/convert`;
  console.log('[PDFStation Client] Converting file:', { toolSlug: options.toolSlug, fileName: options.file.name, url });

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
  } catch (error: any) {
    // Network error (CORS, connection refused, etc.)
    console.error('[PDFStation Client] Network error:', { error: error.message, url });
    const errorMessage = error.message || 'Network error';
    
    if (error instanceof TypeError && errorMessage.includes('Failed to fetch')) {
      throw new Error('Não foi possível conectar ao servidor de conversão. Verifique sua conexão ou tente novamente em alguns instantes.');
    }
    if (errorMessage.includes('CORS')) {
      throw new Error('Erro de CORS: O servidor não está configurado para aceitar requisições desta origem.');
    }
    throw new Error(`Erro de rede: ${errorMessage}`);
  }

  if (!response.ok) {
    // Try to read error as JSON
    const errorText = await response.text();
    console.error('[PDFStation Client] Conversion failed:', { status: response.status, statusText: response.statusText, body: errorText, url });
    
    let errorMessage = `Erro na conversão (status ${response.status})`;
    
    try {
      const errorJson = JSON.parse(errorText);
      errorMessage = errorJson.error || errorJson.detail || errorMessage;
    } catch {
      // If not JSON, use the text as error message
      errorMessage = errorText || errorMessage;
    }
    
    throw new Error(errorMessage);
  }

  // Get the converted file as blob
  const blob = await response.blob();
  
  // Automatically download the file
  downloadBlob(blob, options.outputFileName);
}

/**
 * Compress a PDF file using the PDFStation API
 * 
 * @param options.file - PDF file to compress
 * @param options.outputFileName - Name for the downloaded file
 * @throws Error if compression fails
 */
export async function compressPdf(options: {
  file: File;
  outputFileName: string;
}): Promise<void> {
  const API_BASE = ensureApiBase();
  const formData = new FormData();
  formData.append('file', options.file);

  const url = `${API_BASE}/api/compress`;
  console.log('[PDFStation Client] Compressing PDF:', { fileName: options.file.name, url });

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
  } catch (error: any) {
    console.error('[PDFStation Client] Network error:', { error: error.message, url });
    const errorMessage = error.message || 'Network error';
    
    if (error instanceof TypeError && errorMessage.includes('Failed to fetch')) {
      throw new Error('Não foi possível conectar ao servidor de conversão. Verifique sua conexão ou tente novamente em alguns instantes.');
    }
    if (errorMessage.includes('CORS')) {
      throw new Error('Erro de CORS: O servidor não está configurado para aceitar requisições desta origem.');
    }
    throw new Error(`Erro de rede: ${errorMessage}`);
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[PDFStation Client] Compression failed:', { status: response.status, statusText: response.statusText, body: errorText, url });
    
    let errorMessage = `Erro na compressão (status ${response.status})`;
    
    try {
      const errorJson = JSON.parse(errorText);
      errorMessage = errorJson.error || errorJson.detail || errorMessage;
    } catch {
      errorMessage = errorText || errorMessage;
    }
    
    throw new Error(errorMessage);
  }

  // Get the compressed file as blob
  const blob = await response.blob();
  
  // Automatically download the file
  downloadBlob(blob, options.outputFileName);
}

/**
 * Merge multiple PDF files using the PDFStation API
 * 
 * @param options.files - Array of PDF files to merge (minimum 2)
 * @param options.outputFileName - Name for the downloaded file
 * @throws Error if merge fails or insufficient files
 */
export async function mergePdfs(options: {
  files: File[];
  outputFileName: string;
}): Promise<void> {
  if (options.files.length < 2) {
    throw new Error("Selecione pelo menos 2 PDFs para mesclar.");
  }

  const API_BASE = ensureApiBase();
  const formData = new FormData();
  
  // Append all files with field name "file" (backend accepts both "file" and "files" via upload.fields())
  options.files.forEach(file => {
    formData.append('file', file);
  });

  const url = `${API_BASE}/api/merge`;
  console.log('[PDFStation Client] Merging PDFs:', { fileCount: options.files.length, url });

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
  } catch (error: any) {
    console.error('[PDFStation Client] Network error:', { error: error.message, url });
    const errorMessage = error.message || 'Network error';
    
    if (error instanceof TypeError && errorMessage.includes('Failed to fetch')) {
      throw new Error('Não foi possível conectar ao servidor de conversão. Verifique sua conexão ou tente novamente em alguns instantes.');
    }
    if (errorMessage.includes('CORS')) {
      throw new Error('Erro de CORS: O servidor não está configurado para aceitar requisições desta origem.');
    }
    throw new Error(`Erro de rede: ${errorMessage}`);
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[PDFStation Client] Merge failed:', { status: response.status, statusText: response.statusText, body: errorText, url });
    
    let errorMessage = `Erro no merge (status ${response.status})`;
    
    try {
      const errorJson = JSON.parse(errorText);
      errorMessage = errorJson.error || errorJson.detail || errorMessage;
    } catch {
      errorMessage = errorText || errorMessage;
    }
    
    throw new Error(errorMessage);
  }

  // Get the merged file as blob
  const blob = await response.blob();
  
  // Automatically download the file
  downloadBlob(blob, options.outputFileName);
}

