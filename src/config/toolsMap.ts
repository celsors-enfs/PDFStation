/**
 * Central configuration for all PDFStation tools
 * Used for testing and diagnostics
 */
import { Tool } from './tools';
import { tools } from './tools';

export interface ToolTestConfig {
  slug: string;
  name: string;
  route: string;
  category: Tool['category'];
  inputType: string;
  outputType: string;
  acceptedFileTypes: string[];
  expectedFormats?: string[];
  mode: 'convert' | 'compress' | 'merge';
  hasFormatDropdown: boolean;
}

/**
 * Map of all tools with test configuration
 */
export const toolsMap: ToolTestConfig[] = tools.map(tool => {
  // Determine accepted file types based on input type
  const getAcceptedFileTypes = (): string[] => {
    const inputType = tool.inputType.toLowerCase();
    switch (inputType) {
      case 'jpg':
      case 'jpeg':
        return ['.jpg', '.jpeg'];
      case 'png':
        return ['.png'];
      case 'webp':
        return ['.webp'];
      case 'pdf':
        return ['.pdf'];
      case 'word':
        return ['.doc', '.docx'];
      case 'excel':
        return ['.xls', '.xlsx', '.csv'];
      default:
        return [];
    }
  };

  // Determine if tool has format dropdown
  const hasFormatDropdown = 
    tool.category !== 'compress' && 
    tool.category !== 'merge' &&
    !(tool.category === 'pdf' && tool.inputType !== 'PDF') &&
    !(tool.category === 'images' && tool.inputType !== 'PDF');

  // Determine expected output formats
  const getExpectedFormats = (): string[] => {
    if (tool.outputType === 'Excel') {
      return ['xlsx', 'xls', 'csv'];
    }
    if (tool.outputType === 'Word') {
      return ['docx', 'doc', 'rtf'];
    }
    if (tool.outputType === 'JPG' || tool.outputType === 'PNG' || tool.outputType === 'WebP') {
      return ['jpg', 'png', 'webp'];
    }
    if (tool.outputType === 'PDF') {
      return ['pdf'];
    }
    return [];
  };

  return {
    slug: tool.slug,
    name: tool.name,
    route: `/tools/${tool.slug}`,
    category: tool.category,
    inputType: tool.inputType,
    outputType: tool.outputType,
    acceptedFileTypes: getAcceptedFileTypes(),
    expectedFormats: hasFormatDropdown ? getExpectedFormats() : undefined,
    mode: tool.category === 'compress' ? 'compress' : tool.category === 'merge' ? 'merge' : 'convert',
    hasFormatDropdown,
  };
});

/**
 * Get tool config by slug
 */
export function getToolConfigBySlug(slug: string): ToolTestConfig | undefined {
  return toolsMap.find(tool => tool.slug === slug);
}

/**
 * Get all converter tools (excluding compress and merge)
 */
export function getConverterTools(): ToolTestConfig[] {
  return toolsMap.filter(tool => tool.mode === 'convert');
}

/**
 * Get all utility tools (compress and merge)
 */
export function getUtilityTools(): ToolTestConfig[] {
  return toolsMap.filter(tool => tool.mode !== 'convert');
}

/**
 * Get tools by category
 */
export function getToolsByCategory(category: Tool['category']): ToolTestConfig[] {
  return toolsMap.filter(tool => tool.category === category);
}

