import { describe, it, expect } from 'vitest';
import { 
  toolsMap, 
  getToolConfigBySlug, 
  getConverterTools, 
  getUtilityTools 
} from '@/config/toolsMap';
import { tools } from '@/config/tools';

describe('toolsMap', () => {
  it('should contain all 12 tools', () => {
    expect(toolsMap).toHaveLength(12);
  });

  it('should have correct tool slugs', () => {
    const expectedSlugs = [
      'pdf-to-word',
      'word-to-pdf',
      'pdf-to-excel',
      'excel-to-pdf',
      'jpg-to-pdf',
      'png-to-pdf',
      'webp-to-pdf',
      'pdf-to-jpg',
      'pdf-to-png',
      'pdf-to-webp',
      'pdf-compress',
      'pdf-merge',
    ];

    const actualSlugs = toolsMap.map(tool => tool.slug);
    expectedSlugs.forEach(slug => {
      expect(actualSlugs).toContain(slug);
    });
  });

  it('should have correct routes for all tools', () => {
    toolsMap.forEach(tool => {
      expect(tool.route).toBe(`/tools/${tool.slug}`);
    });
  });

  it('should have accepted file types for all tools', () => {
    toolsMap.forEach(tool => {
      expect(tool.acceptedFileTypes.length).toBeGreaterThan(0);
    });
  });

  it('should correctly identify converter tools', () => {
    const converterTools = getConverterTools();
    expect(converterTools.length).toBe(10); // 10 converter tools
    converterTools.forEach(tool => {
      expect(tool.mode).toBe('convert');
    });
  });

  it('should correctly identify utility tools', () => {
    const utilityTools = getUtilityTools();
    expect(utilityTools.length).toBe(2); // compress and merge
    utilityTools.forEach(tool => {
      expect(['compress', 'merge']).toContain(tool.mode);
    });
  });

  it('should get tool config by slug', () => {
    const tool = getToolConfigBySlug('pdf-to-word');
    expect(tool).toBeDefined();
    expect(tool?.slug).toBe('pdf-to-word');
  });

  it('should return undefined for invalid slug', () => {
    const tool = getToolConfigBySlug('invalid-slug');
    expect(tool).toBeUndefined();
  });

  describe('Format dropdown configuration', () => {
    it('should not show dropdown for compress tool', () => {
      const compressTool = getToolConfigBySlug('pdf-compress');
      expect(compressTool?.hasFormatDropdown).toBe(false);
    });

    it('should not show dropdown for merge tool', () => {
      const mergeTool = getToolConfigBySlug('pdf-merge');
      expect(mergeTool?.hasFormatDropdown).toBe(false);
    });

    it('should show dropdown for PDF to Word', () => {
      const tool = getToolConfigBySlug('pdf-to-word');
      expect(tool?.hasFormatDropdown).toBe(true);
      expect(tool?.expectedFormats).toContain('docx');
    });

    it('should show dropdown for PDF to Excel', () => {
      const tool = getToolConfigBySlug('pdf-to-excel');
      expect(tool?.hasFormatDropdown).toBe(true);
      expect(tool?.expectedFormats).toContain('xlsx');
    });
  });
});

