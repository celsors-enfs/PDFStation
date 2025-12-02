/**
 * Mapping from PDFStation tool slugs to conversion operations
 * This maps the frontend tool identifiers to backend conversion parameters
 */

/**
 * Get conversion config by tool slug
 */
export function getConversionConfig(toolSlug) {
  return toolConversions[toolSlug];
}

/**
 * Get MIME type from file extension
 */
export function getMimeTypeFromExtension(ext) {
  const mimeMap = {
    pdf: 'application/pdf',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xls: 'application/vnd.ms-excel',
    csv: 'text/csv',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
  };

  return mimeMap[ext.toLowerCase()] || 'application/octet-stream';
}

/**
 * Map of all tool conversions
 */
export const toolConversions = {
  // PDF to Word
  'pdf-to-word': {
    toolSlug: 'pdf-to-word',
    fromFormat: 'pdf',
    toFormat: 'docx',
    operationType: 'convert',
    suggestedOutputExtension: 'docx',
    suggestedOutputMime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },

  // Word to PDF
  'word-to-pdf': {
    toolSlug: 'word-to-pdf',
    fromFormat: 'docx',
    toFormat: 'pdf',
    operationType: 'convert',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },

  // PDF to Excel
  'pdf-to-excel': {
    toolSlug: 'pdf-to-excel',
    fromFormat: 'pdf',
    toFormat: 'xlsx',
    operationType: 'convert',
    suggestedOutputExtension: 'xlsx',
    suggestedOutputMime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },

  // Excel to PDF
  'excel-to-pdf': {
    toolSlug: 'excel-to-pdf',
    fromFormat: 'xlsx',
    toFormat: 'pdf',
    operationType: 'convert',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },

  // JPG to PDF
  'jpg-to-pdf': {
    toolSlug: 'jpg-to-pdf',
    fromFormat: 'jpg',
    toFormat: 'pdf',
    operationType: 'convert',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },

  // PNG to PDF
  'png-to-pdf': {
    toolSlug: 'png-to-pdf',
    fromFormat: 'png',
    toFormat: 'pdf',
    operationType: 'convert',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },

  // WebP to PDF
  'webp-to-pdf': {
    toolSlug: 'webp-to-pdf',
    fromFormat: 'webp',
    toFormat: 'pdf',
    operationType: 'convert',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },

  // PDF to JPG
  'pdf-to-jpg': {
    toolSlug: 'pdf-to-jpg',
    fromFormat: 'pdf',
    toFormat: 'jpg',
    operationType: 'convert',
    suggestedOutputExtension: 'jpg',
    suggestedOutputMime: 'image/jpeg',
  },

  // PDF to PNG
  'pdf-to-png': {
    toolSlug: 'pdf-to-png',
    fromFormat: 'pdf',
    toFormat: 'png',
    operationType: 'convert',
    suggestedOutputExtension: 'png',
    suggestedOutputMime: 'image/png',
  },

  // PDF to WebP
  'pdf-to-webp': {
    toolSlug: 'pdf-to-webp',
    fromFormat: 'pdf',
    toFormat: 'webp',
    operationType: 'convert',
    suggestedOutputExtension: 'webp',
    suggestedOutputMime: 'image/webp',
  },

  // Compress PDF
  'pdf-compress': {
    toolSlug: 'pdf-compress',
    fromFormat: 'pdf',
    toFormat: 'pdf',
    operationType: 'compress',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },

  // Merge PDF
  'pdf-merge': {
    toolSlug: 'pdf-merge',
    fromFormat: 'pdf',
    toFormat: 'pdf',
    operationType: 'merge',
    suggestedOutputExtension: 'pdf',
    suggestedOutputMime: 'application/pdf',
  },
};

