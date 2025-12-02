/**
 * Hook for file conversion operations
 * Integrates with the PDFStation API for real file conversions
 * 
 * Uses pdfstationClient.ts for all API calls with automatic download
 */

import { useState, useCallback } from 'react';
import { convertFile, compressPdf, mergePdfs } from '@/lib/pdfstationClient';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tool } from '@/config/tools';

export interface ConversionFile {
  id: string;
  name: string;
  size: number;
  file: File;
  status: 'idle' | 'converting' | 'compressing' | 'merging' | 'ready' | 'error';
  progress?: number;
  error?: string;
  errorCode?: number;
}

interface UseFileConversionOptions {
  tool?: Tool;
  mode?: 'convert' | 'compress' | 'merge';
}

export function useFileConversion(options: UseFileConversionOptions = {}) {
  const { t } = useLanguage();
  const [files, setFiles] = useState<ConversionFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  /**
   * Get error message from error object
   */
  const getErrorMessage = useCallback((error: Error): string => {
    const message = error.message || t('error.conversion.failed');
    
    // Map common error messages
    if (message.includes('CORS')) {
      return 'Erro de CORS: O backend não está configurado para aceitar requisições desta origem.';
    }
    if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
      return 'Falha na conexão: Não foi possível conectar ao servidor. Verifique se o backend está rodando.';
    }
    if (message.includes('status 400')) {
      return t('error.invalid.file');
    }
    if (message.includes('status 413')) {
      return t('error.file.too.large');
    }
    if (message.includes('status 429')) {
      return t('error.too.many.requests');
    }
    if (message.includes('status 502') || message.includes('status 503')) {
      return t('error.conversion.service.unavailable');
    }
    if (message.includes('status 504')) {
      return t('error.request.timeout');
    }
    
    return message;
  }, [t]);

  /**
   * Add a file to the conversion queue
   */
  const addFile = useCallback((file: File) => {
    // Check file size (100MB limit)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      const errorFile: ConversionFile = {
        id: `${Date.now()}-${Math.random()}`,
        name: file.name,
        size: file.size,
        file,
        status: 'error',
        error: t('error.file.too.large'),
        errorCode: 413,
      };
      setFiles(prev => [...prev, errorFile]);
      return;
    }

    const newFile: ConversionFile = {
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size,
      file,
      status: 'idle',
    };

    setFiles(prev => [...prev, newFile]);
  }, [t]);

  /**
   * Remove a file from the queue
   */
  const removeFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  }, []);

  /**
   * Start conversion for a single file
   * Automatically downloads the result when successful
   */
  const startConversion = useCallback(async (id: string) => {
    if (!options.tool) {
      console.warn('No tool specified for conversion');
      return;
    }

    const file = files.find(f => f.id === id);
    if (!file || file.status !== 'idle') {
      return;
    }

    setIsProcessing(true);
    setFiles(prev => prev.map(f => 
      f.id === id ? { ...f, status: 'converting', progress: 0 } : f
    ));

    try {
      const toolSlug = options.tool.slug;
      const originalName = file.name.replace(/\.[^/.]+$/, '');

      if (options.mode === 'compress') {
        // Compress operation
        setFiles(prev => prev.map(f => 
          f.id === id ? { ...f, status: 'compressing', progress: 50 } : f
        ));
        
        await compressPdf({
          file: file.file,
          outputFileName: `${originalName}_compressed.pdf`,
        });
        
        // Success - file was automatically downloaded
        setFiles(prev => prev.map(f => 
          f.id === id ? { ...f, status: 'ready', progress: 100 } : f
        ));
      } else if (options.mode === 'merge') {
        // Merge operation - collect all files
        const allFiles = files.filter(f => f.status === 'idle').map(f => f.file);
        if (allFiles.length < 2) {
          throw new Error('Selecione pelo menos 2 PDFs para mesclar.');
        }
        
        setFiles(prev => prev.map(f => 
          f.status === 'idle' ? { ...f, status: 'merging', progress: 50 } : f
        ));
        
        await mergePdfs({
          files: allFiles,
          outputFileName: `merged_${Date.now()}.pdf`,
        });
        
        // Success - file was automatically downloaded
        setFiles(prev => prev.map(f => 
          f.status === 'merging' ? { ...f, status: 'ready', progress: 100 } : f
        ));
        setIsProcessing(false);
        return;
      } else {
        // Convert operation
        // Determine toolSlug for backend and output extension
        let backendToolSlug = toolSlug;
        let outputExtension = 'pdf';
        
        // Handle unified images-to-pdf: determine backend slug based on file type
        if (toolSlug === 'images-to-pdf') {
          const fileExtension = file.name.split('.').pop()?.toLowerCase();
          if (fileExtension === 'jpg' || fileExtension === 'jpeg') {
            backendToolSlug = 'jpg-to-pdf';
          } else if (fileExtension === 'png') {
            backendToolSlug = 'png-to-pdf';
          } else {
            backendToolSlug = 'jpg-to-pdf'; // default fallback
          }
        }
        
        // All active tools output PDF
        outputExtension = 'pdf';
        
        await convertFile({
          file: file.file,
          toolSlug: backendToolSlug,
          outputFileName: `${originalName}_converted.${outputExtension}`,
        });
        
        // Success - file was automatically downloaded, remove from queue after a short delay
        setFiles(prev => prev.map(f => 
          f.id === id ? { ...f, status: 'ready', progress: 100 } : f
        ));
        
        // Remove file from queue after download (3 seconds delay)
        setTimeout(() => {
          setFiles(prev => prev.filter(f => f.id !== id));
        }, 3000);
      }
    } catch (error: any) {
      const errorMessage = getErrorMessage(error);
      const statusCode = errorMessage.includes('status 400') ? 400 :
                         errorMessage.includes('status 413') ? 413 :
                         errorMessage.includes('status 429') ? 429 :
                         errorMessage.includes('status 502') ? 502 :
                         errorMessage.includes('status 503') ? 503 :
                         errorMessage.includes('status 504') ? 504 : 500;

      setFiles(prev => prev.map(f => 
        f.id === id ? {
          ...f,
          status: 'error',
          error: errorMessage,
          errorCode: statusCode,
        } : f
      ));
    } finally {
      setIsProcessing(false);
    }
  }, [files, options.tool, options.mode, getErrorMessage]);

  /**
   * Download a converted file (legacy - files are now auto-downloaded)
   * Kept for backward compatibility with UploadBox
   */
  const downloadFileById = useCallback((id: string) => {
    const file = files.find(f => f.id === id);
    if (file?.status === 'ready') {
      // File was already downloaded automatically
      console.log('File already downloaded automatically');
    }
  }, [files]);

  /**
   * Clear all files
   */
  const clearFiles = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    isProcessing,
    addFile,
    removeFile,
    startConversion,
    downloadFileById,
    clearFiles,
  };
}

