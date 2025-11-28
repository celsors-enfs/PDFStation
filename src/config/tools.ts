// Tool configuration data
export interface Tool {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  icon: string;
  category: 'pdf' | 'word' | 'excel' | 'images' | 'compress' | 'merge';
  inputType: string;
  outputType: string;
  defaultTargetFormat: string;
}

export const tools: Tool[] = [
  {
    slug: 'pdf-to-word',
    name: 'PDF to Word',
    shortLabel: 'PDF → Word',
    description: 'Convert PDF documents to editable Word files',
    icon: 'FileText',
    category: 'word',
    inputType: 'PDF',
    outputType: 'Word',
    defaultTargetFormat: 'DOCX',
  },
  {
    slug: 'word-to-pdf',
    name: 'Word to PDF',
    shortLabel: 'Word → PDF',
    description: 'Convert Word documents to PDF format',
    icon: 'FileText',
    category: 'pdf',
    inputType: 'Word',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
  {
    slug: 'pdf-to-excel',
    name: 'PDF to Excel',
    shortLabel: 'PDF → Excel',
    description: 'Extract tables from PDF to Excel spreadsheets',
    icon: 'Table',
    category: 'excel',
    inputType: 'PDF',
    outputType: 'Excel',
    defaultTargetFormat: 'XLSX',
  },
  {
    slug: 'excel-to-pdf',
    name: 'Excel to PDF',
    shortLabel: 'Excel → PDF',
    description: 'Convert Excel spreadsheets to PDF',
    icon: 'Table',
    category: 'pdf',
    inputType: 'Excel',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
  {
    slug: 'jpg-to-pdf',
    name: 'JPG to PDF',
    shortLabel: 'JPG → PDF',
    description: 'Convert JPG images to PDF documents',
    icon: 'Image',
    category: 'images',
    inputType: 'JPG',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
  {
    slug: 'png-to-pdf',
    name: 'PNG to PDF',
    shortLabel: 'PNG → PDF',
    description: 'Convert PNG images to PDF documents',
    icon: 'Image',
    category: 'images',
    inputType: 'PNG',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
  {
    slug: 'webp-to-pdf',
    name: 'WebP to PDF',
    shortLabel: 'WebP → PDF',
    description: 'Convert WebP images to PDF documents',
    icon: 'Image',
    category: 'images',
    inputType: 'WebP',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
  {
    slug: 'pdf-to-jpg',
    name: 'PDF to JPG',
    shortLabel: 'PDF → JPG',
    description: 'Convert PDF pages to JPG images',
    icon: 'Image',
    category: 'images',
    inputType: 'PDF',
    outputType: 'JPG',
    defaultTargetFormat: 'JPG',
  },
  {
    slug: 'pdf-to-png',
    name: 'PDF to PNG',
    shortLabel: 'PDF → PNG',
    description: 'Convert PDF pages to PNG images',
    icon: 'Image',
    category: 'images',
    inputType: 'PDF',
    outputType: 'PNG',
    defaultTargetFormat: 'PNG',
  },
  {
    slug: 'pdf-to-webp',
    name: 'PDF to WebP',
    shortLabel: 'PDF → WebP',
    description: 'Convert PDF pages to WebP images',
    icon: 'Image',
    category: 'images',
    inputType: 'PDF',
    outputType: 'WebP',
    defaultTargetFormat: 'WebP',
  },
  {
    slug: 'pdf-compress',
    name: 'Compress PDF',
    shortLabel: 'Compress PDF',
    description: 'Reduce PDF file size without losing quality',
    icon: 'Minimize2',
    category: 'compress',
    inputType: 'PDF',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
  {
    slug: 'pdf-merge',
    name: 'Merge PDF',
    shortLabel: 'Merge PDF',
    description: 'Combine multiple PDF files into one',
    icon: 'FileStack',
    category: 'merge',
    inputType: 'PDF',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getPopularTools(limit: number = 4): Tool[] {
  return tools.slice(0, limit);
}

export function getToolsByCategory(category: Tool['category']): Tool[] {
  return tools.filter(tool => tool.category === category);
}

export function getAllCategories(): Tool['category'][] {
  return Array.from(new Set(tools.map(tool => tool.category)));
}

