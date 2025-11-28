import React, { useRef, useState } from 'react';
import { Upload, X, CheckCircle2, Loader2, Download, ChevronDown, AlertCircle } from 'lucide-react';
import { useFileConversion } from '@/hooks/useFileConversion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Tool } from '@/config/tools';

interface UploadBoxProps {
  compact?: boolean;
  defaultFormat?: string;
  defaultTargetFormat?: string;
  outputLabel?: string;
  outputType?: string;
  tool?: Tool;
  mode?: 'convert' | 'compress' | 'merge';
}

export const UploadBox: React.FC<UploadBoxProps> = ({
  compact = false,
  defaultFormat,
  defaultTargetFormat,
  outputLabel,
  outputType,
  tool,
}) => {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlDialogOpen, setUrlDialogOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Determine action mode based on tool category
  const actionMode = tool?.category === 'compress' ? 'compress' 
    : tool?.category === 'merge' ? 'merge' 
    : 'convert';

  const {
    files,
    isProcessing,
    addFile,
    removeFile,
    startConversion,
    downloadFileById,
  } = useFileConversion({
    tool: tool || undefined,
    mode: actionMode,
  });

  // Determine if we should show dropdown or button
  const showDropdown = tool && !['compress', 'merge'].includes(tool.category) && 
    !(tool.category === 'pdf' && tool.inputType !== 'PDF') &&
    !(tool.category === 'images' && tool.inputType !== 'PDF'); // Images to PDF: no dropdown (only PDF output)

  // Get action label
  const getActionLabel = () => {
    if (actionMode === 'compress') return t('compress');
    if (actionMode === 'merge') return t('merge');
    if (tool?.outputType === 'PDF') return `Convert to ${tool.outputType}`;
    return t('convert');
  };

  // Get accepted file types based on input type
  const getAcceptedFileTypes = (): string => {
    if (!tool) return '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp';
    const inputType = tool.inputType.toLowerCase();
    switch (inputType) {
      case 'jpg':
      case 'jpeg':
        return '.jpg,.jpeg';
      case 'png':
        return '.png';
      case 'webp':
        return '.webp';
      case 'pdf':
        return '.pdf';
      case 'word':
        return '.doc,.docx';
      case 'excel':
        return '.xls,.xlsx,.csv';
      default:
        return '';
    }
  };

  // Get available formats based on output type
  const getAvailableFormats = () => {
    if (outputType === 'Excel') {
      return [
        { value: 'xlsx', label: 'XLSX' },
        { value: 'xls', label: 'XLS' },
        { value: 'csv', label: 'CSV' },
      ];
    }
    if (outputType === 'Word') {
      return [
        { value: 'docx', label: 'DOCX' },
        { value: 'doc', label: 'DOC' },
        { value: 'rtf', label: 'RTF' },
      ];
    }
    if (outputType === 'JPG') {
      return [
        { value: 'jpg', label: 'JPG' },
        { value: 'png', label: 'PNG' },
        { value: 'webp', label: 'WebP' },
      ];
    }
    if (outputType === 'PNG') {
      return [
        { value: 'png', label: 'PNG' },
        { value: 'jpg', label: 'JPG' },
        { value: 'webp', label: 'WebP' },
      ];
    }
    if (outputType === 'WebP') {
      return [
        { value: 'webp', label: 'WebP' },
        { value: 'jpg', label: 'JPG' },
        { value: 'png', label: 'PNG' },
      ];
    }
    if (outputType === 'Image') {
      return [
        { value: 'jpg', label: 'JPG' },
        { value: 'png', label: 'PNG' },
        { value: 'webp', label: 'WebP' },
      ];
    }
    return [
      { value: 'pdf', label: 'PDF' },
      { value: 'word', label: 'Word' },
      { value: 'excel', label: 'Excel' },
      { value: 'jpg', label: 'JPG' },
      { value: 'png', label: 'PNG' },
    ];
  };

  const formats = getAvailableFormats();
  const formatToUse = defaultTargetFormat || defaultFormat || formats[0]?.value || 'pdf';
  const defaultFormatValue = formatToUse.toLowerCase();

  // Check if any file is ready for action (idle status means ready to convert)
  const hasReadyFiles = files.some(f => f.status === 'idle');
  // Disable action if no tool is specified (e.g., on homepage)
  const canAction = hasReadyFiles && !isProcessing && !!tool;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(file => addFile(file));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    selectedFiles.forEach(file => addFile(file));
  };

  const handleAction = () => {
    // If no tool is specified, show a message or redirect
    if (!tool) {
      console.warn('No tool specified. Please select a conversion tool first.');
      return;
    }
    
    // Start conversion for all ready files
    files.forEach(file => {
      if (file.status === 'idle') {
        startConversion(file.id);
      }
    });
  };

  const handleDownload = (fileId: string) => {
    downloadFileById(fileId);
  };

  const handleFromDevice = () => {
    fileInputRef.current?.click();
  };

  const handleFromDropbox = () => {
    // Mock: Show message that cloud upload is coming soon
    alert(t('upload.cloud.coming.soon'));
  };

  const handleFromGoogleDrive = () => {
    // Mock: Show message that cloud upload is coming soon
    alert(t('upload.cloud.coming.soon'));
  };

  const handleFromUrl = () => {
    setUrlDialogOpen(true);
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      // Mock: Add file from URL
      const fileName = urlInput.split('/').pop() || 'file_from_url';
      const mockFile = new File([''], fileName, { type: 'application/octet-stream' });
      addFile(mockFile);
      setUrlInput('');
      setUrlDialogOpen(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  // Get label for convert to dropdown
  const getConvertToLabel = () => {
    if (outputLabel) return outputLabel;
    if (tool?.outputType && !showDropdown) return `Convert to ${tool.outputType}`;
    return t('convert.to');
  };

  return (
    <div id="upload-box" className="w-full">
      <Card className={`${compact ? 'p-4' : 'p-6'}`}>
        <CardContent className="p-0">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-lg p-8 md:p-12 text-center transition-colors
              ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'}
              ${compact ? 'p-6 md:p-8' : ''}
            `}
          >
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {t('drag.drop')}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('click.browse')}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {t('upload.limit')}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={getAcceptedFileTypes()}
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" className="gap-2">
                    {t('upload.choose.files')}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem onClick={handleFromDevice}>
                    {t('upload.from.device')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleFromDropbox}>
                    {t('upload.from.dropbox')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleFromGoogleDrive}>
                    {t('upload.from.google.drive')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleFromUrl}>
                    {t('upload.from.url')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {showDropdown ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{getConvertToLabel()}</span>
                  <Select defaultValue={defaultFormatValue}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {formats.map(format => (
                        <SelectItem key={format.value} value={format.value}>
                          {format.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
              <Button
                onClick={handleAction}
                disabled={!canAction || isProcessing}
              >
                {isProcessing ? t('converting') : getActionLabel()}
              </Button>
              )}
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-semibold mb-3">{t('upload.queue')}</h4>
              {files.map(file => (
                <div
                  key={file.id}
                  className="flex flex-col gap-3 p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {file.status === 'ready' ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : file.status === 'converting' || file.status === 'compressing' || file.status === 'merging' ? (
                        <Loader2 className="h-5 w-5 text-primary animate-spin flex-shrink-0" />
                      ) : file.status === 'idle' ? (
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      ) : file.status === 'error' ? (
                        <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                      ) : (
                        <Loader2 className="h-5 w-5 text-muted-foreground animate-spin flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className={`text-xs ${file.status === 'error' ? 'text-destructive' : 'text-muted-foreground'}`}>
                          {file.status === 'error' 
                            ? (file.errorCode === 429 
                                ? t('error.too.many.requests')
                                : file.error || t('error.conversion.failed'))
                            : `${formatFileSize(file.size)} • ${
                                file.status === 'idle' ? t('ready') 
                                : file.status === 'converting' ? t('converting')
                                : file.status === 'compressing' ? t('compress')
                                : file.status === 'merging' ? t('merge')
                                : file.status === 'ready' ? t('ready')
                                : file.status
                              }`}
                        </p>
                      </div>
                    </div>
                    {(file.status === 'ready' || file.status === 'error' || file.status === 'idle') && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(file.id)}
                        className="flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {/* Progress bar for converting/compressing/merging */}
                  {(file.status === 'converting' || file.status === 'compressing' || file.status === 'merging') && (
                    <div className="space-y-1">
                      <Progress value={file.progress || 0} className="h-2" />
                      <p className="text-xs text-muted-foreground text-right">
                        {file.progress || 0}%
                      </p>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    {file.status === 'idle' && (
                      <Button
                        size="sm"
                        onClick={() => startConversion(file.id)}
                        className="flex-1"
                        disabled={isProcessing}
                      >
                        {actionMode === 'compress' ? t('compress') : actionMode === 'merge' ? t('merge') : t('convert')}
                      </Button>
                    )}
                    {file.status === 'ready' && (
                      <Button
                        size="sm"
                        onClick={() => handleDownload(file.id)}
                        className="flex-1"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {t('download')}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* URL Input Dialog */}
      <Dialog open={urlDialogOpen} onOpenChange={setUrlDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('upload.url.prompt')}</DialogTitle>
            <DialogDescription>
              {t('upload.cloud.coming.soon')}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="url"
              placeholder={t('upload.url.placeholder')}
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleUrlSubmit();
                }
              }}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUrlDialogOpen(false)}>
              {t('upload.url.cancel')}
            </Button>
            <Button onClick={handleUrlSubmit} disabled={!urlInput.trim()}>
              {t('upload.url.submit')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
