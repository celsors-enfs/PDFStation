/**
 * Hook for file conversion operations
 * Integrates with the PDFStation API for real file conversions
 */

import { useState, useCallback } from 'react';
import { convert, compress, merge, ConversionClientError, downloadFile, revokeDownloadUrl, ConversionResult } from '@/services/conversionClient';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tool } from '@/config/tools';

export interface ConversionFile {
  id: string;
  name: string;
  size: number;
  file: File;
  status: 'idle' | 'converting' | 'compressing' | 'merging' | 'ready' | 'error';
  progress?: number;
  downloadUrl?: string;
  filename?: string;
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
   * Get error message based on status code
   */
  const getErrorMessage = useCallback((statusCode: number, detail?: string): string => {
    switch (statusCode) {
      case 0:
        // Network/connection error
        if (detail?.includes('CORS')) {
          return 'Erro de CORS: O backend não está configurado para aceitar requisições desta origem.';
        }
        if (detail?.includes('Failed to fetch')) {
          return 'Falha na conexão: Não foi possível conectar ao servidor. Verifique se o backend está rodando.';
        }
        return detail || 'Não foi possível conectar ao serviço de conversão. Verifique se o servidor backend está rodando.';
      case 400:
        return t('error.invalid.file');
      case 413:
        return t('error.file.too.large');
      case 429:
        return t('error.too.many.requests');
      case 502:
      case 503:
        return t('error.conversion.service.unavailable');
      case 504:
        return t('error.request.timeout');
      default:
        return detail || t('error.conversion.failed');
    }
  }, [t]);

  /**
   * Add a file to the conversion queue
   */
  const addFile = useCallback((file: File) => {
    // Check file size (500MB limit)
    const maxSize = 500 * 1024 * 1024;
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
    setFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file?.downloadUrl) {
        revokeDownloadUrl(file.downloadUrl);
      }
      return prev.filter(f => f.id !== id);
    });
  }, []);

  /**
   * Start conversion for a single file
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
      let result: ConversionResult;
      const toolSlug = options.tool.slug;

      if (options.mode === 'compress') {
        // Compress operation
        setFiles(prev => prev.map(f => 
          f.id === id ? { ...f, status: 'compressing' } : f
        ));
        result = await compress(file.file, toolSlug);
      } else if (options.mode === 'merge') {
        // Merge operation - collect all files
        const allFiles = files.filter(f => f.status === 'idle').map(f => f.file);
        if (allFiles.length < 2) {
          throw new ConversionClientError('Insufficient files', 400, 'At least 2 files required');
        }
        
        setFiles(prev => prev.map(f => 
          f.status === 'idle' ? { ...f, status: 'merging' } : f
        ));
        result = await merge(allFiles, toolSlug);
        
        // Update all merged files with the result
        setFiles(prev => prev.map(f => 
          f.status === 'merging' ? {
            ...f,
            status: 'ready',
            downloadUrl: result.downloadUrl,
            filename: result.filename,
            progress: 100,
          } : f
        ));
        setIsProcessing(false);
        return;
      } else {
        // Convert operation
        result = await convert(file.file, {
          toolSlug,
          fromFormat: options.tool.inputType.toLowerCase(),
          toFormat: options.tool.defaultTargetFormat.toLowerCase(),
        });
      }

      // Update file with result
      setFiles(prev => prev.map(f => 
        f.id === id ? {
          ...f,
          status: 'ready',
          downloadUrl: result.downloadUrl,
          filename: result.filename,
          progress: 100,
        } : f
      ));
    } catch (error: any) {
      const statusCode = error instanceof ConversionClientError ? error.statusCode : 500;
      const errorMessage = getErrorMessage(statusCode, error.detail);

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
   * Download a converted file
   */
  const downloadFileById = useCallback((id: string) => {
    const file = files.find(f => f.id === id);
    if (file?.downloadUrl && file?.filename) {
      downloadFile(file.downloadUrl, file.filename);
    }
  }, [files]);

  /**
   * Clear all files
   */
  const clearFiles = useCallback(() => {
    files.forEach(file => {
      if (file.downloadUrl) {
        revokeDownloadUrl(file.downloadUrl);
      }
    });
    setFiles([]);
  }, [files]);

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

