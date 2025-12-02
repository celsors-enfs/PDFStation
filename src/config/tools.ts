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
    slug: 'images-to-pdf',
    name: 'JPG/PNG to PDF',
    shortLabel: 'JPG/PNG → PDF',
    description: 'Convert JPG and PNG images to PDF documents',
    icon: 'Image',
    category: 'images',
    inputType: 'JPG/PNG',
    outputType: 'PDF',
    defaultTargetFormat: 'PDF',
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

