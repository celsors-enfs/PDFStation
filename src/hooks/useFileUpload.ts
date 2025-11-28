import { useState, useCallback } from 'react';

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  status: 'uploading' | 'processing' | 'uploaded' | 'converting' | 'ready' | 'error';
  progress: number;
  conversionProgress?: number;
  error?: string;
  errorCode?: number; // HTTP status code (e.g., 429)
}

export function useFileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const addFile = useCallback(async (file: File) => {
    // Check file size (500MB limit)
    const maxSize = 500 * 1024 * 1024; // 500MB in bytes
    if (file.size > maxSize) {
      const errorFile: UploadedFile = {
        id: `${Date.now()}-${Math.random()}`,
        name: file.name,
        size: file.size,
        status: 'error',
        progress: 0,
        error: 'File size exceeds 500MB limit',
        errorCode: 413,
      };
      setFiles(prev => [...prev, errorFile]);
      return;
    }

    const newFile: UploadedFile = {
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size,
      status: 'uploading',
      progress: 0,
    };

    setFiles(prev => [...prev, newFile]);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/upload', { method: 'POST', body: formData });
      // if (response.status === 429) {
      //   throw new Error('RATE_LIMIT_EXCEEDED');
      // }
      // if (!response.ok) {
      //   throw new Error('UPLOAD_FAILED');
      // }

      // Simulate upload progress
      const interval = setInterval(() => {
        setFiles(prev => prev.map(f => {
          if (f.id === newFile.id) {
            const newProgress = Math.min(f.progress + 20, 100);
            return {
              ...f,
              progress: newProgress,
              status: newProgress === 100 ? 'processing' : 'uploading',
            };
          }
          return f;
        }));
      }, 300);

      // Simulate processing completion after 1.5 seconds
      setTimeout(() => {
        clearInterval(interval);
        setFiles(prev => prev.map(f => {
          if (f.id === newFile.id) {
            return {
              ...f,
              status: 'uploaded',
              progress: 100,
              conversionProgress: 0,
            };
          }
          return f;
        }));
      }, 1500);
    } catch (error: any) {
      // Handle errors (including 429 rate limit)
      setFiles(prev => prev.map(f => {
        if (f.id === newFile.id) {
          return {
            ...f,
            status: 'error',
            error: error.message || 'Upload failed',
            errorCode: error.status || 500,
          };
        }
        return f;
      }));
    }
  }, []);

  const startConversion = useCallback((id: string) => {
    setFiles(prev => prev.map(f => {
      if (f.id === id && f.status === 'uploaded') {
        return {
          ...f,
          status: 'converting',
          conversionProgress: 0,
        };
      }
      return f;
    }));

    // Simulate conversion progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setFiles(prev => prev.map(f => {
        if (f.id === id && f.status === 'converting') {
          if (progress >= 100) {
            clearInterval(interval);
            return {
              ...f,
              status: 'ready',
              conversionProgress: 100,
            };
          }
          return {
            ...f,
            conversionProgress: progress,
          };
        }
        return f;
      }));
    }, 200);
  }, []);

  const removeFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  }, []);

  const clearFiles = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    isDragging,
    setIsDragging,
    addFile,
    removeFile,
    clearFiles,
    startConversion,
  };
}

