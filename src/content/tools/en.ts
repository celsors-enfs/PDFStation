// Editorial content for tool pages
// This content is displayed ABOVE the upload box to provide value and context

export interface ToolEditorialContent {
  introP1: string;
  introP2: string;
  howItWorksSteps: string[];
  qualityPrivacyBullets: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const toolEditorialContent: Record<string, ToolEditorialContent> = {
  'pdf-to-word': {
    introP1: 'Convert a PDF into an editable Word document while keeping your content readable and easy to work with.',
    introP2: 'Use this when you need to update text, reuse sections in a report, or collaborate in Word without rewriting from scratch.',
    howItWorksSteps: [
      'Upload your PDF.',
      'We convert it into a Word (.docx) file.',
      'Download and edit in Microsoft Word, Google Docs, or LibreOffice.',
    ],
    qualityPrivacyBullets: [
      'Layout fidelity may vary depending on fonts and complex formatting.',
      'Scanned PDFs may need OCR to become editable text.',
      'Your files are processed automatically; you keep ownership of your content.',
    ],
    faqs: [
      {
        q: 'Will the formatting be identical to my PDF?',
        a: 'Simple layouts usually convert well. Complex designs (multi-columns, custom fonts) may shift slightly.',
      },
      {
        q: 'Why is my Word file not editable?',
        a: 'If your PDF is scanned, it\'s an image. OCR is needed to extract text.',
      },
      {
        q: 'Do you store my files?',
        a: 'Only as needed to complete the conversion (follow the site\'s retention policy).',
      },
    ],
  },
  
  'word-to-pdf': {
    introP1: 'Turn your Word document into a clean PDF that looks consistent on any device.',
    introP2: 'Perfect for sharing resumes, proposals, and documents that should not change formatting when opened elsewhere.',
    howItWorksSteps: [
      'Upload your .doc or .docx file.',
      'We export it as a PDF.',
      'Download your PDF and share confidently.',
    ],
    qualityPrivacyBullets: [
      'Embedded fonts help preserve layout across devices.',
      'Large images can increase file size.',
      'Your document remains yours; conversion is automated.',
    ],
    faqs: [
      {
        q: 'Will my fonts look the same?',
        a: 'PDFs preserve layout well, especially when fonts are embedded. Some rare fonts may be substituted.',
      },
      {
        q: 'Can I convert a Google Docs file?',
        a: 'Download it as .docx first, then upload it here.',
      },
      {
        q: 'Is the output print-ready?',
        a: 'For most documents, yes. Always check margins if you need strict print specs.',
      },
    ],
  },

  'images-to-pdf': {
    introP1: 'Combine one or multiple JPG images into a single PDF, ideal for printing or sharing as one file.',
    introP2: 'Great for scanned receipts, handwritten notes, or photo-based documents you want in a standard format.',
    howItWorksSteps: [
      'Upload one or more JPG images.',
      'Arrange order if available.',
      'Download a single PDF.',
    ],
    qualityPrivacyBullets: [
      'Image quality depends on the original photos.',
      'PDFs can be optimized for size if compression is enabled.',
      'Files are processed automatically; ownership stays with you.',
    ],
    faqs: [
      {
        q: 'Can I merge multiple images into one PDF?',
        a: 'Yes—upload multiple JPGs and we\'ll assemble them.',
      },
      {
        q: 'Will it keep the same image quality?',
        a: 'It will be close to the original; some compression may apply based on settings.',
      },
      {
        q: 'Can I add margins?',
        a: 'If supported, adjust page fit/scale; otherwise you can print with margins from your viewer.',
      },
    ],
  },

  'pdf-compress': {
    introP1: 'Reduce PDF file size so it\'s easier to email, upload, and share—without unnecessary quality loss.',
    introP2: 'Use compression for large PDFs with images, scanned pages, or heavy graphics.',
    howItWorksSteps: [
      'Upload your PDF.',
      'Choose a compression level (if available).',
      'Download the smaller PDF.',
    ],
    qualityPrivacyBullets: [
      'Higher compression reduces size more but may soften images.',
      'Text stays crisp in most cases.',
      'We process your file automatically; your content remains yours.',
    ],
    faqs: [
      {
        q: 'How much will it compress?',
        a: 'It depends on what\'s inside the PDF. Image-heavy files compress more.',
      },
      {
        q: 'Will my text become blurry?',
        a: 'Text usually remains sharp; images are most affected.',
      },
      {
        q: 'Is compression reversible?',
        a: 'No—keep the original if you may need maximum quality later.',
      },
    ],
  },

  'pdf-merge': {
    introP1: 'Combine multiple PDFs into a single file in the order you choose.',
    introP2: 'Ideal for bundling contracts, invoices, chapters, or project documents into one shareable PDF.',
    howItWorksSteps: [
      'Upload multiple PDF files.',
      'Arrange them in the desired order.',
      'Download one merged PDF.',
    ],
    qualityPrivacyBullets: [
      'Original page quality is preserved.',
      'Large merges may take longer depending on file size.',
      'Your files are processed automatically; you keep ownership.',
    ],
    faqs: [
      {
        q: 'Can I reorder files before merging?',
        a: 'Yes—drag and drop if the interface supports it.',
      },
      {
        q: 'Will it change page quality?',
        a: 'No—merging keeps original pages intact.',
      },
      {
        q: 'Is there a file limit?',
        a: 'Limits depend on server configuration; check the upload limits shown in the UI.',
      },
    ],
  },

  // Additional tools that may be added later
  'pdf-to-jpg': {
    introP1: 'Convert PDF pages into JPG images for quick sharing, previews, or inserting into slides.',
    introP2: 'Useful when recipients need images instead of documents, or when you want a lightweight visual snapshot.',
    howItWorksSteps: [
      'Upload your PDF.',
      'Choose pages (or convert all).',
      'Download JPG images.',
    ],
    qualityPrivacyBullets: [
      'Higher resolution preserves sharp text but increases file size.',
      'Photos convert beautifully; small text benefits from higher DPI.',
      'Processing is automatic; you keep ownership.',
    ],
    faqs: [
      {
        q: 'Can I export only one page?',
        a: 'Yes—select a page range if the tool supports it.',
      },
      {
        q: 'Will the text be readable?',
        a: 'Increase resolution for documents with small fonts.',
      },
      {
        q: 'Are images compressed?',
        a: 'JPG uses compression; for lossless output use PDF to PNG.',
      },
    ],
  },

  'split-pdf': {
    introP1: 'Split a PDF into smaller files—extract specific pages or separate into individual pages.',
    introP2: 'Useful for sharing only the pages needed, removing extras, or organizing documents.',
    howItWorksSteps: [
      'Upload your PDF.',
      'Choose split mode (range / single pages).',
      'Download the separated PDFs.',
    ],
    qualityPrivacyBullets: [
      'Pages remain unchanged.',
      'Large PDFs may take longer to process.',
      'Processing is automatic; you keep ownership.',
    ],
    faqs: [
      {
        q: 'Can I extract only pages 3–5?',
        a: 'Yes—use a page range split option.',
      },
      {
        q: 'Will the split files keep the same quality?',
        a: 'Yes—pages are preserved.',
      },
      {
        q: 'Can I split into individual pages?',
        a: 'If supported, you can export each page as its own PDF.',
      },
    ],
  },

  'pdf-to-png': {
    introP1: 'Export PDF pages as PNG images when you need crisp, lossless quality.',
    introP2: 'PNG is ideal for graphics, UI screenshots, and documents where sharp edges matter.',
    howItWorksSteps: [
      'Upload your PDF.',
      'Convert pages to PNG.',
      'Download PNG images.',
    ],
    qualityPrivacyBullets: [
      'PNG files are larger than JPG but preserve quality.',
      'Best for text, diagrams, and flat-color graphics.',
      'You keep ownership; processing is automatic.',
    ],
    faqs: [
      {
        q: 'Why choose PNG over JPG?',
        a: 'PNG is lossless and keeps text/lines sharper.',
      },
      {
        q: 'Are PNG files bigger?',
        a: 'Usually yes—especially for photo-heavy pages.',
      },
      {
        q: 'Can I export a specific page?',
        a: 'Yes—select pages if supported.',
      },
    ],
  },

  'png-to-pdf': {
    introP1: 'Convert one or multiple PNG images into a single PDF, preserving sharpness and transparency where possible.',
    introP2: 'Useful for design assets, diagrams, and screenshots you want in a standard shareable format.',
    howItWorksSteps: [
      'Upload PNG images.',
      'Arrange order (if available).',
      'Download a combined PDF.',
    ],
    qualityPrivacyBullets: [
      'PNG quality remains sharp; transparency may flatten depending on PDF output.',
      'Large images increase PDF size.',
      'Files are processed automatically; you keep ownership.',
    ],
    faqs: [
      {
        q: 'Will transparency be preserved?',
        a: 'It depends on the export pipeline; some outputs may flatten transparency.',
      },
      {
        q: 'Can I combine multiple PNGs?',
        a: 'Yes—upload multiple and generate one PDF.',
      },
      {
        q: 'Will the PDF be print-ready?',
        a: 'Usually yes; verify page fit and scaling for exact print needs.',
      },
    ],
  },

  'protect-pdf': {
    introP1: 'Add a password to your PDF to help prevent unauthorized opening or editing.',
    introP2: 'Ideal for sensitive documents, client files, or anything you share via email or public links.',
    howItWorksSteps: [
      'Upload your PDF.',
      'Set a password and protection options (if available).',
      'Download the protected PDF.',
    ],
    qualityPrivacyBullets: [
      'Passwords are applied during processing; do not reuse passwords you use elsewhere.',
      'Some PDF viewers handle permissions differently.',
      'You keep ownership of your content.',
    ],
    faqs: [
      {
        q: 'Can I remove a password later?',
        a: 'Only if you know the password and use an unlock tool.',
      },
      {
        q: 'Does password protection stop screenshots?',
        a: 'No—protection limits access but cannot prevent all capture methods.',
      },
      {
        q: 'Is it secure?',
        a: 'It improves access control; for high-security needs, use additional encryption practices.',
      },
    ],
  },
};

// Map tool slugs to content keys
export const toolSlugToContentKey: Record<string, string> = {
  'images-to-pdf': 'images-to-pdf',
  'word-to-pdf': 'word-to-pdf',
  'pdf-compress': 'pdf-compress',
  'pdf-merge': 'pdf-merge',
  // Future tools
  'pdf-to-word': 'pdf-to-word',
  'pdf-to-jpg': 'pdf-to-jpg',
  'split-pdf': 'split-pdf',
  'pdf-to-png': 'pdf-to-png',
  'png-to-pdf': 'png-to-pdf',
  'protect-pdf': 'protect-pdf',
};

