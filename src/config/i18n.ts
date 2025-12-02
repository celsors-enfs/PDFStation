export type Language = 'en' | 'pt-BR' | 'es' | 'fr' | 'it';

export interface Translations {
  // Common UI
  'drag.drop': string;
  'click.browse': string;
  'select.files': string;
  'convert': string;
  'compress': string;
  'merge': string;
  'download': string;
  'upload.queue': string;
  'converting': string;
  'ready': string;
  'completed': string;
  
  // Homepage Hero
  'home.hero.title': string;
  'home.hero.subtitle': string;
  'home.hero.description': string;
  'home.hero.cta.choose': string;
  'home.hero.cta.explore': string;
  
  // Trust Section
  'trust.thousands': string;
  'trust.active.users': string;
  'trust.no.files': string;
  'trust.ssl.encrypted': string;
  'trust.files.converted': string;
  'trust.every.month': string;
  
  // Supported Formats
  'supported.formats.title': string;
  'supported.formats.description': string;
  
  // Popular Conversions
  'popular.conversions.title': string;
  'popular.conversions.description': string;
  'popular.converters.title': string;
  'popular.converters.subtitle': string;
  'popular.compress.title': string;
  'popular.compress.description': string;
  'popular.compress.cta': string;
  'popular.convert.cta': string;
  'tool.images-to-pdf.name': string;
  'tool.images-to-pdf.description': string;
  'tool.word-to-pdf.name': string;
  'tool.word-to-pdf.description': string;
  'tool.pdf-compress.name': string;
  'tool.pdf-compress.description': string;
  'tool.pdf-merge.name': string;
  'tool.pdf-merge.description': string;
  
  // Features Grid
  'features.title': string;
  'features.fast.title': string;
  'features.fast.description': string;
  'features.secure.title': string;
  'features.secure.description': string;
  'features.no.watermarks.title': string;
  'features.no.watermarks.description': string;
  'features.works.everywhere.title': string;
  'features.works.everywhere.description': string;
  
  // Security & Privacy
  'security.title': string;
  'security.description': string;
  
  // Upload Box
  'upload.choose.files': string;
  'upload.from.device': string;
  'upload.from.dropbox': string;
  'upload.from.google.drive': string;
  'upload.from.url': string;
  'upload.limit': string;
  'upload.cloud.coming.soon': string;
  'upload.url.prompt': string;
  'upload.url.placeholder': string;
  'upload.url.submit': string;
  'upload.url.cancel': string;
  
  // About Page
  'about.title': string;
  'about.subtitle': string;
  'about.paragraph1': string;
  'about.paragraph2': string;
  'about.paragraph3': string;
  'about.values.title': string;
  'about.mission.title': string;
  'about.mission.description': string;
  'about.innovation.title': string;
  'about.innovation.description': string;
  'about.user.focused.title': string;
  'about.user.focused.description': string;
  'about.privacy.first.title': string;
  'about.privacy.first.description': string;
  
  // FAQ
  'faq.title': string;
  'faq.convert.question': string;
  'faq.convert.answer': string;
  'faq.formats.question': string;
  'faq.formats.answer': string;
  'faq.security.question': string;
  'faq.security.answer': string;
  'faq.size.limit.question': string;
  'faq.size.limit.answer': string;
  'faq.multiple.question': string;
  'faq.multiple.answer': string;
  'faq.account.question': string;
  'faq.account.answer': string;
  'faq.failure.question': string;
  'faq.failure.answer': string;
  'faq.commercial.question': string;
  'faq.commercial.answer': string;
  'faq.images.question': string;
  'faq.images.answer': string;
  'faq.word.question': string;
  'faq.word.answer': string;
  'faq.compress.question': string;
  'faq.compress.answer': string;
  'faq.merge.question': string;
  'faq.merge.answer': string;
  
  // Tool Page
  'tool.how.to.title': string;
  'tool.how.to.step1': string;
  'tool.how.to.step2': string;
  'tool.how.to.step3': string;
  'tool.how.to.step4': string;
  'tool.why.title': string;
  'tool.why.reason1': string;
  'tool.why.reason2': string;
  'tool.why.reason3': string;
  'tool.why.reason4': string;
  'tool.tips.title': string;
  'tool.tips.tip1': string;
  'tool.tips.tip2': string;
  'tool.tips.tip3': string;
  'tool.tips.tip4': string;
  'tool.tips.tip5': string;
  'tool.formats.title': string;
  'tool.formats.input': string;
  'tool.formats.output': string;
  'tool.formats.files': string;
  'tool.faq.title': string;
  'tool.faq.size.question': string;
  'tool.faq.size.answer': string;
  'tool.faq.time.question': string;
  'tool.faq.time.answer': string;
  'tool.faq.data.question': string;
  'tool.faq.data.answer': string;
  'tool.more.info.title': string;
  'tool.more.info.paragraph1': string;
  'tool.more.info.paragraph2': string;
  'tool.other.popular': string;
  'tool.not.found.title': string;
  'tool.not.found.description': string;
  'tool.not.found.cta': string;
  'category.tools.title': string;
  'category.word': string;
  'category.excel': string;
  'category.images': string;
  'category.pdf': string;
  'category.compress': string;
  'category.merge': string;
  'convert.to': string;
  'convert.to.format': string;
  'format.pdf': string;
  'format.word': string;
  'format.excel': string;
  'format.jpg': string;
  'format.png': string;
  'format.webp': string;
  
  // Login/Signup
  'auth.login.title': string;
  'auth.login.description': string;
  'auth.login.email': string;
  'auth.login.password': string;
  'auth.login.submit': string;
  'auth.login.submitting': string;
  'auth.login.or': string;
  'auth.login.no.account': string;
  'auth.login.signup.link': string;
  'auth.login.invalid': string;
  'auth.login.error': string;
  'auth.login.google.error': string;
  'auth.login.facebook.error': string;
  'auth.disabled.title': string;
  'auth.disabled.message': string;
  'auth.disabled.go.home': string;
  
  'auth.signup.title': string;
  'auth.signup.description': string;
  'auth.signup.name': string;
  'auth.signup.name.placeholder': string;
  'auth.signup.email': string;
  'auth.signup.email.placeholder': string;
  'auth.signup.password': string;
  'auth.signup.password.placeholder': string;
  'auth.signup.submit': string;
  'auth.signup.submitting': string;
  'auth.signup.has.account': string;
  'auth.signup.login.link': string;
  'auth.signup.error': string;
  'auth.signup.google.error': string;
  'auth.signup.facebook.error': string;
  
  // Navbar
  'nav.home': string;
  'nav.tools': string;
  'nav.faq': string;
  'nav.about': string;
  'nav.login': string;
  'nav.signup': string;
  'nav.account': string;
  'nav.logout': string;
  
  // Footer
  'footer.tagline': string;
  'footer.tools.title': string;
  'footer.tools.pdf-to-word': string;
  'footer.tools.word-to-pdf': string;
  'footer.tools.pdf-to-excel': string;
  'footer.tools.compress-pdf': string;
  'footer.company.title': string;
  'footer.legal.title': string;
  'footer.legal.privacy': string;
  'footer.legal.terms': string;
  'footer.legal.cookies': string;
  'footer.copyright': string;
  
  // Legal pages
  'legal.back': string;
  'legal.last.updated': string;
  
  // Privacy Policy
  'privacy.title': string;
  'privacy.intro.title': string;
  'privacy.intro.text': string;
  'privacy.collect.title': string;
  'privacy.collect.intro': string;
  'privacy.collect.item1': string;
  'privacy.collect.item2': string;
  'privacy.collect.item3': string;
  'privacy.collect.item4': string;
  'privacy.use.title': string;
  'privacy.use.intro': string;
  'privacy.use.item1': string;
  'privacy.use.item2': string;
  'privacy.use.item3': string;
  'privacy.use.item4': string;
  'privacy.use.item5': string;
  'privacy.security.title': string;
  'privacy.security.intro': string;
  'privacy.security.item1': string;
  'privacy.security.item2': string;
  'privacy.security.item3': string;
  'privacy.security.item4': string;
  'privacy.retention.title': string;
  'privacy.retention.text': string;
  'privacy.thirdparty.title': string;
  'privacy.thirdparty.text1': string;
  'privacy.thirdparty.text2': string;
  'privacy.rights.title': string;
  'privacy.rights.intro': string;
  'privacy.rights.item1': string;
  'privacy.rights.item2': string;
  'privacy.rights.item3': string;
  'privacy.rights.item4': string;
  'privacy.contact.title': string;
  'privacy.contact.text': string;
  
  // Terms of Service
  'terms.title': string;
  'terms.accept.title': string;
  'terms.accept.text': string;
  'terms.service.title': string;
  'terms.service.text1': string;
  'terms.service.text2': string;
  'terms.responsibilities.title': string;
  'terms.responsibilities.intro': string;
  'terms.responsibilities.item1': string;
  'terms.responsibilities.item2': string;
  'terms.responsibilities.item3': string;
  'terms.responsibilities.item4': string;
  'terms.responsibilities.item5': string;
  'terms.limitations.title': string;
  'terms.limitations.text': string;
  'terms.data.title': string;
  'terms.data.text': string;
  'terms.availability.title': string;
  'terms.availability.text': string;
  'terms.disclaimer.title': string;
  'terms.disclaimer.text': string;
  'terms.liability.title': string;
  'terms.liability.text': string;
  'terms.changes.title': string;
  'terms.changes.text': string;
  'terms.contact.title': string;
  'terms.contact.text': string;
  
  // Cookie Policy
  'cookie.title': string;
  'cookie.what.title': string;
  'cookie.what.text': string;
  'cookie.how.title': string;
  'cookie.how.intro': string;
  'cookie.how.item1': string;
  'cookie.how.item2': string;
  'cookie.how.item3': string;
  'cookie.how.item4': string;
  'cookie.types.title': string;
  'cookie.types.session': string;
  'cookie.types.persistent': string;
  'cookie.thirdparty.title': string;
  'cookie.thirdparty.intro': string;
  'cookie.thirdparty.item1': string;
  'cookie.thirdparty.item2': string;
  'cookie.thirdparty.item3': string;
  'cookie.thirdparty.text': string;
  'cookie.manage.title': string;
  'cookie.manage.intro': string;
  'cookie.manage.item1': string;
  'cookie.manage.item2': string;
  'cookie.manage.item3': string;
  'cookie.updates.title': string;
  'cookie.updates.text': string;
  'cookie.contact.title': string;
  'cookie.contact.text': string;
  
  // Free messaging
  'free.forever': string;
  'free.online': string;
  'free.converter': string;
  'free.tools': string;
  'free.no.signup': string;
  'free.up.to': string;
  
  // Error messages
  'error.rate.limit.exceeded': string;
  'error.rate.limit.retry': string;
  'error.upload.failed': string;
  'error.conversion.failed': string;
  'error.conversion.service.unavailable': string;
  'error.file.too.large': string;
  'error.invalid.file': string;
  'error.too.many.requests': string;
  'error.request.timeout': string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Common UI
    'drag.drop': 'Drag and drop your files here',
    'click.browse': 'or click to browse from your computer',
    'select.files': 'Select Files',
    'convert.to': 'Convert to:',
    'convert': 'Convert',
    'compress': 'Compress',
    'merge': 'Merge',
    'download': 'Download',
    'upload.queue': 'Upload Queue',
    'converting': 'Converting',
    'ready': 'Ready',
    'completed': 'Completed',
    
    // Homepage Hero
    'home.hero.title': 'Online PDF Converter – JPG/PNG to PDF, Word to PDF, Compress & Merge',
    'home.hero.subtitle': 'Free online PDF converter and tools. Convert images, Word documents, compress and merge PDFs instantly.',
    'home.hero.description': 'Convert JPG and PNG images to PDF, Word documents to PDF, compress PDF files, and merge multiple PDFs into one. Fast, secure, and completely free up to 100MB per file. No signup required.',
    'home.hero.cta.choose': 'Choose files',
    'home.hero.cta.explore': 'Explore tools',
    
    // Trust Section
    'trust.thousands': 'Trusted by thousands',
    'trust.active.users': 'Active users worldwide',
    'trust.no.files': 'No files stored',
    'trust.ssl.encrypted': 'SSL encrypted',
    'trust.files.converted': '10,000+ files converted',
    'trust.every.month': 'Every month',
    
    // Supported Formats
    'supported.formats.title': 'Supported File Formats',
    'supported.formats.description': 'PDFStation supports PDF, DOCX, JPG, and PNG file formats. Convert images to PDF, Word to PDF, compress and merge PDFs online.',
    
    // Popular Conversions
    'popular.conversions.title': 'Popular PDF Conversions',
    'popular.conversions.description': 'Convert JPG and PNG images to PDF, Word documents to PDF, compress PDF files, and merge multiple PDFs into one document.',
    'popular.converters.title': 'Free PDF Conversion Tools',
    'popular.converters.subtitle': 'Convert images to PDF, Word to PDF, compress and merge PDFs online for free',
    'popular.compress.title': 'Compress PDF',
    'popular.compress.description': 'Reduce your PDF file size while keeping excellent quality',
    'popular.compress.cta': 'Click to compress →',
    'popular.convert.cta': 'Click to convert →',
    'tool.images-to-pdf.name': 'JPG/PNG to PDF Converter',
    'tool.images-to-pdf.description': 'Convert JPG and PNG images to PDF online for free. Fast, secure image to PDF converter with no watermarks.',
    'tool.word-to-pdf.name': 'Word to PDF Converter',
    'tool.word-to-pdf.description': 'Convert Word documents (DOCX, DOC) to PDF format online. Free Word to PDF converter with high quality output.',
    'tool.pdf-compress.name': 'Compress PDF Online',
    'tool.pdf-compress.description': 'Reduce PDF file size online for free. Compress PDF files without losing quality. Fast PDF compressor tool.',
    'tool.pdf-merge.name': 'Merge PDF Files Online',
    'tool.pdf-merge.description': 'Combine multiple PDF files into one document online. Free PDF merger tool. Join PDFs quickly and securely.',
    
    // Features Grid
    'features.title': 'Why PDFStation?',
    'features.fast.title': 'Lightning Fast',
    'features.fast.description': 'Convert files in seconds with our optimized processing engine. Free forever.',
    'features.secure.title': 'Secure & Private',
    'features.secure.description': 'Your files are processed securely and deleted automatically after conversion.',
    'features.no.watermarks.title': 'No Watermarks',
    'features.no.watermarks.description': 'Get clean, professional conversions without any branding or watermarks. 100% free.',
    'features.works.everywhere.title': 'Works Everywhere',
    'features.works.everywhere.description': 'Access PDFStation from any device, anywhere in the world. No signup required.',
    
    // Security & Privacy
    'security.title': 'Security & Privacy',
    'security.description': 'Your files are processed securely using industry-standard encryption. All files are automatically deleted from our servers within 24 hours of conversion. We never share your data with third parties. Free forever for core conversions.',
    
    // Upload Box
    'upload.choose.files': 'Choose files',
    'upload.from.device': 'From device',
    'upload.from.dropbox': 'From Dropbox',
    'upload.from.google.drive': 'From Google Drive',
    'upload.from.url': 'From URL',
    'upload.limit': 'Convert files up to 100MB. Free forever.',
    'upload.cloud.coming.soon': 'Cloud upload is coming soon. For now, please upload from your device.',
    'upload.url.prompt': 'Enter file URL',
    'upload.url.placeholder': 'https://example.com/file.pdf',
    'upload.url.submit': 'Add file',
    'upload.url.cancel': 'Cancel',
    
    // About Page
    'about.title': 'About PDFStation',
    'about.subtitle': 'Smart file conversion in one simple place.',
    'about.paragraph1': 'PDFStation was founded with a simple goal: to make file conversion as easy and accessible as possible. We understand that converting files between different formats can be frustrating, especially when you need to do it quickly or don\'t have the right software installed.',
    'about.paragraph2': 'Our platform is built on modern technology that ensures fast, reliable conversions without compromising on quality. Whether you\'re a student, professional, or business, PDFStation provides the tools you need to work with your files efficiently. Best of all, our core conversion tools are free forever.',
    'about.paragraph3': 'We\'re committed to maintaining the highest standards of security and privacy. Your files are processed securely and automatically deleted from our servers, so you can convert with confidence.',
    'about.values.title': 'Our Values',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To make file conversion simple, fast, and accessible to everyone, regardless of technical expertise. Free forever.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'We continuously improve our technology to provide the fastest and most reliable conversion experience.',
    'about.user.focused.title': 'User-Focused',
    'about.user.focused.description': 'Every feature we build is designed with our users in mind, prioritizing ease of use and reliability.',
    'about.privacy.first.title': 'Privacy First',
    'about.privacy.first.description': 'We believe your data belongs to you. That\'s why we automatically delete all files after processing.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.convert.question': 'How do I convert a file?',
    'faq.convert.answer': 'Simply drag and drop your file into the upload box, select your desired output format, and click convert. Your file will be processed and ready for download in seconds. Free forever, up to 100MB per file.',
    'faq.formats.question': 'What file formats are supported?',
    'faq.formats.answer': 'PDFStation supports PDF, DOCX (Word), JPG, and PNG file formats. You can convert JPG and PNG images to PDF, Word documents to PDF, compress PDF files, and merge multiple PDFs into one. All tools are free forever.',
    'faq.images.question': 'How do I convert JPG or PNG images to PDF?',
    'faq.images.answer': 'Upload your JPG or PNG image file using the drag-and-drop box, and click convert. Your image will be converted to PDF format instantly. Free forever, up to 100MB per file. No signup required.',
    'faq.word.question': 'How do I convert Word documents to PDF?',
    'faq.word.answer': 'Upload your Word document (DOCX or DOC format), and click convert to PDF. Your document will be converted to PDF format while preserving formatting. Free forever, up to 100MB per file.',
    'faq.compress.question': 'How do I compress a PDF file?',
    'faq.compress.answer': 'Upload your PDF file and click compress. Our PDF compressor will reduce the file size while maintaining quality. Free forever, up to 100MB per file. No watermarks added.',
    'faq.merge.question': 'How do I merge multiple PDF files?',
    'faq.merge.answer': 'Upload two or more PDF files, and click merge. All PDFs will be combined into a single document in the order you uploaded them. Free forever, up to 100MB per file.',
    'faq.security.question': 'Is my data secure?',
    'faq.security.answer': 'Yes, absolutely. All files are processed securely using encrypted connections. Files are automatically deleted from our servers after conversion, typically within 24 hours.',
    'faq.size.limit.question': 'Are there any file size limits?',
    'faq.size.limit.answer': 'You can convert files up to 100MB per file. PDFStation is free forever for core conversions, with no signup required.',
    'faq.multiple.question': 'Can I convert multiple files at once?',
    'faq.multiple.answer': 'Yes! You can upload and convert multiple files simultaneously. All conversions are free forever.',
    'faq.account.question': 'Do I need to create an account?',
    'faq.account.answer': 'No account is required. PDFStation is completely free to use with no signup required. You can start converting files immediately.',
    'faq.failure.question': 'What happens if my conversion fails?',
    'faq.failure.answer': 'If a conversion fails, you can try again at no cost. Our service is free forever, so you can retry as many times as needed.',
    'faq.commercial.question': 'Can I use PDFStation for commercial purposes?',
    'faq.commercial.answer': 'Yes! PDFStation is free forever and can be used for both personal and commercial purposes.',
    
    // Tool Page
    'tool.how.to.title': 'How to convert {inputType} to {outputType}',
    'tool.how.to.step1': 'Upload your {inputType} file using the drag-and-drop box above',
    'tool.how.to.step2': 'Select {outputType} ({format}) as your output format',
    'tool.how.to.step3': 'Click convert and wait for the processing to complete (usually takes just a few seconds)',
    'tool.how.to.step4': 'Download your converted {outputType} file',
    'tool.why.title': 'Why convert {inputType} to {outputType}?',
    'tool.why.reason1': 'Edit and modify your content with ease',
    'tool.why.reason2': 'Compatible with all major software and platforms',
    'tool.why.reason3': 'Maintain formatting and structure during conversion',
    'tool.why.reason4': 'No software installation required - works in your browser. Free forever.',
    'tool.tips.title': 'Tips for better conversions',
    'tool.tips.tip1': 'Ensure your {inputType} file is not password-protected',
    'tool.tips.tip2': 'For best quality, use high-resolution source files',
    'tool.tips.tip3': 'Keep file sizes under 100MB for faster processing',
    'tool.tips.tip4': 'Check that your file format is supported before uploading',
    'tool.tips.tip5': 'For complex documents, conversion may take slightly longer',
    'tool.formats.title': 'Supported Formats',
    'tool.formats.input': 'Input formats:',
    'tool.formats.output': 'Output formats:',
    'tool.formats.files': 'files',
    'tool.faq.title': 'Frequently Asked Questions',
    'tool.faq.size.question': 'What file sizes are supported?',
    'tool.faq.size.answer': 'You can convert files up to 100MB. PDFStation is free forever with no signup required.',
    'tool.faq.time.question': 'How long does conversion take?',
    'tool.faq.time.answer': 'Most {inputType} to {outputType} conversions complete in under 30 seconds, depending on file size and complexity.',
    'tool.faq.data.question': 'Is my data secure?',
    'tool.faq.data.answer': 'Yes, all files are processed securely using SSL encryption and automatically deleted from our servers within 24 hours after conversion.',
    'tool.more.info.title': 'Additional Information',
    'tool.more.info.paragraph1': 'Our {toolName} converter uses advanced algorithms to ensure accurate conversion while preserving the original formatting and structure of your documents.',
    'tool.more.info.paragraph2': 'All conversions are performed in the cloud, so you don\'t need to install any software. Simply upload your file and download the converted result. Free forever.',
    'tool.other.popular': 'Other Popular Tools',
    'category.tools.title': '{category} Tools',
    'category.word': 'Word',
    'category.excel': 'Excel',
    'category.images': 'Images',
    'category.pdf': 'PDF',
    'category.compress': 'Compress',
    'category.merge': 'Merge',
    'convert.to.format': 'Convert to {format}:',
    'format.pdf': 'PDF',
    'format.word': 'Word',
    'format.excel': 'Excel',
    'format.jpg': 'JPG',
    'format.png': 'PNG',
    'format.webp': 'WebP',
    'tool.not.found.title': 'Tool Not Found',
    'tool.not.found.description': 'The tool you\'re looking for doesn\'t exist.',
    'tool.not.found.cta': 'Go Home',
    
    // Login/Signup
    'auth.login.title': 'Login',
    'auth.login.description': 'Enter your credentials to access your account',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.submit': 'Login',
    'auth.login.submitting': 'Logging in...',
    'auth.login.or': 'Or continue with',
    'auth.login.no.account': 'Don\'t have an account?',
    'auth.login.signup.link': 'Sign up',
    'auth.login.invalid': 'Invalid email or password',
    'auth.login.error': 'An error occurred. Please try again.',
    'auth.login.google.error': 'Failed to login with Google',
    'auth.login.facebook.error': 'Failed to login with Facebook',
    'auth.disabled.title': 'Accounts Disabled',
    'auth.disabled.message': 'Accounts are currently disabled on PDFStation. All features are available without an account.',
    'auth.disabled.go.home': 'Go to Home',
    
    'auth.signup.title': 'Create Account',
    'auth.signup.description': 'Enter your information to create an account',
    'auth.signup.name': 'Name',
    'auth.signup.name.placeholder': 'Enter your name',
    'auth.signup.email': 'Email',
    'auth.signup.email.placeholder': 'Enter your email',
    'auth.signup.password': 'Password',
    'auth.signup.password.placeholder': 'Enter your password',
    'auth.signup.submit': 'Create account',
    'auth.signup.submitting': 'Creating account...',
    'auth.signup.has.account': 'Already have an account?',
    'auth.signup.login.link': 'Login',
    'auth.signup.error': 'An error occurred. Please try again.',
    'auth.signup.google.error': 'Failed to sign up with Google',
    'auth.signup.facebook.error': 'Failed to sign up with Facebook',
    
    // Navbar
    'nav.home': 'Home',
    'nav.tools': 'Tools',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.account': 'My Account',
    'nav.logout': 'Logout',
    
    // Footer
    'footer.tagline': 'Smart file conversion in one simple place.',
    'footer.tools.title': 'Tools',
    'footer.tools.pdf-to-word': 'PDF to Word',
    'footer.tools.word-to-pdf': 'Word to PDF',
    'footer.tools.pdf-to-excel': 'PDF to Excel',
    'footer.tools.compress-pdf': 'Compress PDF',
    'footer.company.title': 'Company',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.cookies': 'Cookie Policy',
    'footer.copyright': '© {year} PDFStation. All rights reserved.',
    
    // Legal pages
    'legal.back': 'Go Back',
    'legal.last.updated': 'Last updated:',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.intro.title': '1. Introduction',
    'privacy.intro.text': 'PDFStation ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our file conversion service.',
    'privacy.collect.title': '2. Information We Collect',
    'privacy.collect.intro': 'We collect minimal information necessary to provide our service. No account or signup is required. We collect:',
    'privacy.collect.item1': 'Files you upload for conversion (temporarily stored and automatically deleted within 24 hours)',
    'privacy.collect.item2': 'IP address and device information for rate limiting and security (ephemeral, not permanently stored)',
    'privacy.collect.item3': 'Usage data and analytics to improve our service (anonymized)',
    'privacy.collect.item4': 'Cookie data for analytics and advertising (see Cookie Policy)',
    'privacy.use.title': '3. How We Use Your Information',
    'privacy.use.intro': 'We use the information we collect to:',
    'privacy.use.item1': 'Process and convert your files (temporary processing only)',
    'privacy.use.item2': 'Provide and maintain our free service',
    'privacy.use.item3': 'Implement rate limiting to prevent abuse (IP-based)',
    'privacy.use.item4': 'Display relevant advertisements (via Google Ads) to support our free service',
    'privacy.use.item5': 'Improve our service and user experience through anonymized analytics',
    'privacy.security.title': '4. Data Security',
    'privacy.security.intro': 'We implement industry-standard security measures to protect your files:',
    'privacy.security.item1': 'SSL encryption for all data transfers',
    'privacy.security.item2': 'Automatic deletion of files within 24 hours of conversion',
    'privacy.security.item3': 'Secure server infrastructure',
    'privacy.security.item4': 'No permanent storage of your files',
    'privacy.retention.title': '5. Data Retention',
    'privacy.retention.text': 'Your uploaded files are automatically deleted from our servers within 24 hours of conversion. We do not retain your files permanently. IP address logs are kept only for rate limiting purposes and are automatically purged after 5 minutes. We do not store account information as accounts are not required or available.',
    'privacy.thirdparty.title': '6. Third-Party Services & Advertising',
    'privacy.thirdparty.text1': 'PDFStation is supported by Google Ads. We use Google\'s advertising services to display relevant ads, which helps us provide the service free of charge. Google may use cookies and similar technologies to serve personalized ads based on your browsing activity. These services are bound by their own privacy policies and do not have access to your uploaded files.',
    'privacy.thirdparty.text2': 'We also use third-party analytics services to understand how visitors use our website. These services collect anonymized usage data and do not have access to your uploaded files.',
    'privacy.rights.title': '7. Your Rights',
    'privacy.rights.intro': 'Since PDFStation does not require accounts, you have the right to:',
    'privacy.rights.item1': 'Use our service anonymously without providing personal information',
    'privacy.rights.item2': 'Control cookie settings through your browser',
    'privacy.rights.item3': 'Opt out of personalized advertising through Google Ads settings',
    'privacy.rights.item4': 'Request information about what data we collect (minimal: IP for rate limiting, cookies for ads/analytics)',
    'privacy.contact.title': '8. Contact Us',
    'privacy.contact.text': 'If you have questions about this Privacy Policy, please contact us through our website.',
    
    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.accept.title': '1. Acceptance of Terms',
    'terms.accept.text': 'By accessing and using PDFStation, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.',
    'terms.service.title': '2. Service Description',
    'terms.service.text1': 'PDFStation provides a free online file conversion service. No signup, login, or account is required. We allow users to convert files between various formats, including PDF, Word, and image formats. Our service is free forever, supported by Google Ads, with a file size limit of 100MB per file.',
    'terms.service.text2': 'To prevent abuse, we implement IP-based rate limiting (maximum 5 uploads per IP address per 5 minutes). If you exceed this limit, you will receive a 429 error and must wait before uploading again.',
    'terms.responsibilities.title': '3. User Responsibilities',
    'terms.responsibilities.intro': 'You agree to:',
    'terms.responsibilities.item1': 'Use the service only for lawful purposes',
    'terms.responsibilities.item2': 'Not upload files containing malicious code, viruses, or illegal content',
    'terms.responsibilities.item3': 'Respect intellectual property rights',
    'terms.responsibilities.item4': 'Not attempt to abuse or overload our systems',
    'terms.responsibilities.item5': 'Not use the service for any commercial resale purposes without permission',
    'terms.limitations.title': '4. File Size and Format Limitations',
    'terms.limitations.text': 'Our service supports files up to 100MB in size. We support various file formats as listed on our website. We reserve the right to modify these limitations at any time.',
    'terms.data.title': '5. Data and Privacy',
    'terms.data.text': 'Your files are processed securely and automatically deleted within 24 hours. We do not store your files permanently. Please refer to our Privacy Policy for more information.',
    'terms.availability.title': '6. Service Availability',
    'terms.availability.text': 'We strive to provide reliable service but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability.',
    'terms.disclaimer.title': '7. Disclaimer of Warranties',
    'terms.disclaimer.text': 'The service is provided "as is" without warranties of any kind. We do not guarantee that conversions will be perfect or error-free. You use the service at your own risk.',
    'terms.liability.title': '8. Limitation of Liability',
    'terms.liability.text': 'PDFStation shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.',
    'terms.changes.title': '9. Changes to Terms',
    'terms.changes.text': 'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.',
    'terms.contact.title': '10. Contact',
    'terms.contact.text': 'If you have questions about these Terms of Service, please contact us through our website.',
    
    // Cookie Policy
    'cookie.title': 'Cookie Policy',
    'cookie.what.title': '1. What Are Cookies',
    'cookie.what.text': 'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
    'cookie.how.title': '2. How We Use Cookies',
    'cookie.how.intro': 'PDFStation uses cookies for the following purposes:',
    'cookie.how.item1': 'Essential Cookies: Required for the service to function properly, such as maintaining your session and language preferences',
    'cookie.how.item2': 'Analytics Cookies: Help us understand how visitors use our website to improve our service (anonymized data)',
    'cookie.how.item3': 'Advertising Cookies: Used by Google Ads to display relevant advertisements and support our free service. These cookies track your browsing activity across sites to show personalized ads',
    'cookie.how.item4': 'Preference Cookies: Remember your settings and preferences, such as language selection',
    'cookie.types.title': '3. Types of Cookies We Use',
    'cookie.types.session': 'Session Cookies: Temporary cookies that are deleted when you close your browser. These are essential for the service to work.',
    'cookie.types.persistent': 'Persistent Cookies: Remain on your device for a set period or until you delete them. We use these to remember your preferences.',
    'cookie.thirdparty.title': '4. Third-Party Cookies & Google Ads',
    'cookie.thirdparty.intro': 'PDFStation is supported by Google Ads. Google sets cookies on your device to:',
    'cookie.thirdparty.item1': 'Display relevant advertisements based on your browsing history',
    'cookie.thirdparty.item2': 'Measure ad performance and effectiveness',
    'cookie.thirdparty.item3': 'Prevent fraud and abuse',
    'cookie.thirdparty.text': 'We also use analytics services (such as Google Analytics) that set cookies to help us understand website usage. These third parties have their own privacy policies. You can opt out of personalized advertising through Google Ads settings.',
    'cookie.manage.title': '5. Managing Cookies',
    'cookie.manage.intro': 'You can control and manage cookies in various ways:',
    'cookie.manage.item1': 'Browser settings allow you to refuse or delete cookies',
    'cookie.manage.item2': 'Note that blocking essential cookies may affect website functionality',
    'cookie.manage.item3': 'You can delete cookies from your browser at any time',
    'cookie.updates.title': '6. Updates to This Policy',
    'cookie.updates.text': 'We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.',
    'cookie.contact.title': '7. Contact Us',
    'cookie.contact.text': 'If you have questions about our use of cookies, please contact us through our website.',
    
    // Free messaging
    'free.forever': 'Free forever',
    'free.online': 'Free online',
    'free.converter': 'Free PDF converter',
    'free.tools': 'Free online PDF tools',
    'free.no.signup': 'No signup required',
    'free.up.to': 'Up to 100MB',
    
    // Error messages
    'error.rate.limit.exceeded': 'Upload limit reached for your IP. Please try again later.',
    'error.rate.limit.retry': 'Please wait {seconds} seconds before trying again.',
    'error.upload.failed': 'Upload failed. Please try again.',
    'error.conversion.failed': 'Conversion failed. Please try again.',
    'error.conversion.service.unavailable': 'Conversion service is temporarily unavailable. Please try again later.',
    'error.file.too.large': 'File too large. Maximum allowed size is 100MB.',
    'error.invalid.file': 'Invalid file or parameters.',
    'error.too.many.requests': 'Too many conversions from your IP. Please try again later.',
    'error.request.timeout': 'Request timed out. Please try again.',
  },
  'pt-BR': {
    // Common UI
    'drag.drop': 'Arraste e solte seus arquivos aqui',
    'click.browse': 'ou clique para procurar no seu computador',
    'select.files': 'Selecionar Arquivos',
    'convert.to': 'Converter para:',
    'convert': 'Converter',
    'compress': 'Comprimir',
    'merge': 'Mesclar',
    'download': 'Baixar',
    'upload.queue': 'Fila de Upload',
    'converting': 'Convertendo',
    'ready': 'Pronto',
    'completed': 'Concluído',
    
    // Homepage Hero
    'home.hero.title': 'Conversor de PDF Online – JPG/PNG para PDF, Word para PDF, Comprimir e Unir',
    'home.hero.subtitle': 'Conversor de PDF online gratuito e ferramentas. Converta imagens, documentos Word, comprima e una PDFs instantaneamente.',
    'home.hero.description': 'Converta imagens JPG e PNG para PDF, documentos Word para PDF, comprima arquivos PDF e una vários PDFs em um. Rápido, seguro e completamente gratuito até 100MB por arquivo. Sem necessidade de cadastro.',
    'home.hero.cta.choose': 'Escolher arquivos',
    'home.hero.cta.explore': 'Explorar ferramentas',
    
    // Trust Section
    'trust.thousands': 'Confiado por milhares',
    'trust.active.users': 'Usuários ativos em todo o mundo',
    'trust.no.files': 'Nenhum arquivo armazenado',
    'trust.ssl.encrypted': 'Criptografado SSL',
    'trust.files.converted': 'Mais de 10.000 arquivos convertidos',
    'trust.every.month': 'Todo mês',
    
    // Supported Formats
    'supported.formats.title': 'Formatos de Arquivo Suportados',
    'supported.formats.description': 'O PDFStation suporta formatos PDF, DOCX, JPG e PNG. Converta imagens para PDF, Word para PDF, comprima e una PDFs online.',
    
    // Popular Conversions
    'popular.conversions.title': 'Conversões de PDF Populares',
    'popular.conversions.description': 'Converta imagens JPG e PNG para PDF, documentos Word para PDF, comprima arquivos PDF e una vários PDFs em um documento.',
    'popular.converters.title': 'Ferramentas de Conversão de PDF Gratuitas',
    'popular.converters.subtitle': 'Converta imagens para PDF, Word para PDF, comprima e una PDFs online gratuitamente',
    'popular.compress.title': 'Comprimir PDF',
    'popular.compress.description': 'Reduza o tamanho do seu arquivo PDF mantendo excelente qualidade',
    'popular.compress.cta': 'Clique para comprimir →',
    'popular.convert.cta': 'Clique para converter →',
    'tool.images-to-pdf.name': 'Conversor de JPG/PNG para PDF',
    'tool.images-to-pdf.description': 'Converta imagens JPG e PNG para PDF online gratuitamente. Conversor rápido e seguro de imagem para PDF sem marcas d\'água.',
    'tool.word-to-pdf.name': 'Conversor de Word para PDF',
    'tool.word-to-pdf.description': 'Converta documentos Word (DOCX, DOC) para formato PDF online. Conversor gratuito de Word para PDF com saída de alta qualidade.',
    'tool.pdf-compress.name': 'Comprimir PDF Online',
    'tool.pdf-compress.description': 'Reduza o tamanho de arquivos PDF online gratuitamente. Comprima PDFs sem perder qualidade. Ferramenta rápida de compressão de PDF.',
    'tool.pdf-merge.name': 'Unir Arquivos PDF Online',
    'tool.pdf-merge.description': 'Combine vários arquivos PDF em um documento online. Ferramenta gratuita de união de PDFs. Una PDFs rapidamente e com segurança.',
    
    // Features Grid
    'features.title': 'Por que PDFStation?',
    'features.fast.title': 'Super Rápido',
    'features.fast.description': 'Converta arquivos em segundos com nosso motor de processamento otimizado. Grátis para sempre.',
    'features.secure.title': 'Seguro e Privado',
    'features.secure.description': 'Seus arquivos são processados com segurança e excluídos automaticamente após a conversão.',
    'features.no.watermarks.title': 'Sem Marcas d\'Água',
    'features.no.watermarks.description': 'Obtenha conversões limpas e profissionais sem qualquer marca ou marca d\'água. 100% gratuito.',
    'features.works.everywhere.title': 'Funciona em Qualquer Lugar',
    'features.works.everywhere.description': 'Acesse o PDFStation de qualquer dispositivo, em qualquer lugar do mundo. Sem necessidade de cadastro.',
    
    // Security & Privacy
    'security.title': 'Segurança e Privacidade',
    'security.description': 'Seus arquivos são processados com segurança usando criptografia padrão da indústria. Todos os arquivos são automaticamente excluídos de nossos servidores em até 24 horas após a conversão. Nunca compartilhamos seus dados com terceiros. Grátis para sempre para conversões principais.',
    
    // Upload Box
    'upload.choose.files': 'Escolher arquivos',
    'upload.from.device': 'Do dispositivo',
    'upload.from.dropbox': 'Do Dropbox',
    'upload.from.google.drive': 'Do Google Drive',
    'upload.from.url': 'Da URL',
    'upload.limit': 'Converta arquivos de até 100MB. Grátis para sempre.',
    'upload.cloud.coming.soon': 'Upload na nuvem em breve. Por enquanto, faça upload do seu dispositivo.',
    'upload.url.prompt': 'Digite a URL do arquivo',
    'upload.url.placeholder': 'https://exemplo.com/arquivo.pdf',
    'upload.url.submit': 'Adicionar arquivo',
    'upload.url.cancel': 'Cancelar',
    
    // About Page
    'about.title': 'Sobre o PDFStation',
    'about.subtitle': 'Conversão inteligente de arquivos em um só lugar.',
    'about.paragraph1': 'O PDFStation foi fundado com um objetivo simples: tornar a conversão de arquivos o mais fácil e acessível possível. Entendemos que converter arquivos entre diferentes formatos pode ser frustrante, especialmente quando você precisa fazer isso rapidamente ou não tem o software certo instalado.',
    'about.paragraph2': 'Nossa plataforma é construída com tecnologia moderna que garante conversões rápidas e confiáveis sem comprometer a qualidade. Seja você um estudante, profissional ou empresa, o PDFStation fornece as ferramentas necessárias para trabalhar com seus arquivos com eficiência. O melhor de tudo, nossas ferramentas de conversão principais são gratuitas para sempre.',
    'about.paragraph3': 'Estamos comprometidos em manter os mais altos padrões de segurança e privacidade. Seus arquivos são processados com segurança e automaticamente excluídos de nossos servidores, para que você possa converter com confiança.',
    'about.values.title': 'Nossos Valores',
    'about.mission.title': 'Nossa Missão',
    'about.mission.description': 'Tornar a conversão de arquivos simples, rápida e acessível para todos, independentemente da experiência técnica. Grátis para sempre.',
    'about.innovation.title': 'Inovação',
    'about.innovation.description': 'Melhoramos continuamente nossa tecnologia para fornecer a experiência de conversão mais rápida e confiável.',
    'about.user.focused.title': 'Focado no Usuário',
    'about.user.focused.description': 'Cada recurso que construímos é projetado pensando em nossos usuários, priorizando facilidade de uso e confiabilidade.',
    'about.privacy.first.title': 'Privacidade em Primeiro',
    'about.privacy.first.description': 'Acreditamos que seus dados pertencem a você. É por isso que excluímos automaticamente todos os arquivos após o processamento.',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.convert.question': 'Como converto um arquivo?',
    'faq.convert.answer': 'Simplesmente arraste e solte seu arquivo na caixa de upload, selecione o formato de saída desejado e clique em converter. Seu arquivo será processado e estará pronto para download em segundos. Grátis para sempre, até 100MB por arquivo.',
    'faq.formats.question': 'Quais formatos de arquivo são suportados?',
    'faq.formats.answer': 'O PDFStation suporta formatos PDF, DOCX (Word), JPG e PNG. Você pode converter imagens JPG e PNG para PDF, documentos Word para PDF, comprimir arquivos PDF e unir vários PDFs em um. Todas as ferramentas são gratuitas para sempre.',
    'faq.images.question': 'Como converto imagens JPG ou PNG para PDF?',
    'faq.images.answer': 'Faça upload da sua imagem JPG ou PNG usando a caixa de arrastar e soltar e clique em converter. Sua imagem será convertida para formato PDF instantaneamente. Grátis para sempre, até 100MB por arquivo. Sem necessidade de cadastro.',
    'faq.word.question': 'Como converto documentos Word para PDF?',
    'faq.word.answer': 'Faça upload do seu documento Word (formato DOCX ou DOC) e clique em converter para PDF. Seu documento será convertido para formato PDF preservando a formatação. Grátis para sempre, até 100MB por arquivo.',
    'faq.compress.question': 'Como comprimo um arquivo PDF?',
    'faq.compress.answer': 'Faça upload do seu arquivo PDF e clique em comprimir. Nosso compressor de PDF reduzirá o tamanho do arquivo mantendo a qualidade. Grátis para sempre, até 100MB por arquivo. Sem marcas d\'água adicionadas.',
    'faq.merge.question': 'Como uno vários arquivos PDF?',
    'faq.merge.answer': 'Faça upload de dois ou mais arquivos PDF e clique em unir. Todos os PDFs serão combinados em um único documento na ordem em que você os enviou. Grátis para sempre, até 100MB por arquivo.',
    'faq.security.question': 'Meus dados estão seguros?',
    'faq.security.answer': 'Sim, absolutamente. Todos os arquivos são processados com segurança usando conexões criptografadas. Os arquivos são automaticamente excluídos de nossos servidores após a conversão, geralmente em até 24 horas.',
    'faq.size.limit.question': 'Existem limites de tamanho de arquivo?',
    'faq.size.limit.answer': 'Você pode converter arquivos de até 100MB por arquivo. O PDFStation é gratuito para sempre para conversões principais, sem necessidade de cadastro.',
    'faq.multiple.question': 'Posso converter vários arquivos de uma vez?',
    'faq.multiple.answer': 'Sim! Você pode fazer upload e converter vários arquivos simultaneamente. Todas as conversões são gratuitas para sempre.',
    'faq.account.question': 'Preciso criar uma conta?',
    'faq.account.answer': 'Nenhuma conta é necessária. O PDFStation é completamente gratuito para usar sem necessidade de cadastro. Você pode começar a converter arquivos imediatamente.',
    'faq.failure.question': 'O que acontece se minha conversão falhar?',
    'faq.failure.answer': 'Se uma conversão falhar, você pode tentar novamente sem custo. Nosso serviço é gratuito para sempre, então você pode tentar novamente quantas vezes precisar.',
    'faq.commercial.question': 'Posso usar o PDFStation para fins comerciais?',
    'faq.commercial.answer': 'Sim! O PDFStation é gratuito para sempre e pode ser usado para fins pessoais e comerciais.',
    
    // Tool Page
    'tool.how.to.title': 'Como converter {inputType} para {outputType}',
    'tool.how.to.step1': 'Faça upload do seu arquivo {inputType} usando a caixa de arrastar e soltar acima',
    'tool.how.to.step2': 'Selecione {outputType} ({format}) como seu formato de saída',
    'tool.how.to.step3': 'Clique em converter e aguarde o processamento ser concluído (geralmente leva apenas alguns segundos)',
    'tool.how.to.step4': 'Baixe seu arquivo {outputType} convertido',
    'tool.why.title': 'Por que converter {inputType} para {outputType}?',
    'tool.why.reason1': 'Edite e modifique seu conteúdo com facilidade',
    'tool.why.reason2': 'Compatível com todos os principais softwares e plataformas',
    'tool.why.reason3': 'Mantenha a formatação e estrutura durante a conversão',
    'tool.why.reason4': 'Nenhuma instalação de software necessária - funciona no seu navegador. Grátis para sempre.',
    'tool.tips.title': 'Dicas para melhores conversões',
    'tool.tips.tip1': 'Certifique-se de que seu arquivo {inputType} não está protegido por senha',
    'tool.tips.tip2': 'Para melhor qualidade, use arquivos de origem de alta resolução',
    'tool.tips.tip3': 'Mantenha os tamanhos de arquivo abaixo de 100MB para processamento mais rápido',
    'tool.tips.tip4': 'Verifique se o formato do seu arquivo é suportado antes de fazer upload',
    'tool.tips.tip5': 'Para documentos complexos, a conversão pode levar um pouco mais de tempo',
    'tool.formats.title': 'Formatos Suportados',
    'tool.formats.input': 'Formatos de entrada:',
    'tool.formats.output': 'Formatos de saída:',
    'tool.formats.files': 'arquivos',
    'tool.faq.title': 'Perguntas Frequentes',
    'tool.faq.size.question': 'Quais tamanhos de arquivo são suportados?',
    'tool.faq.size.answer': 'Você pode converter arquivos de até 100MB. O PDFStation é gratuito para sempre, sem necessidade de cadastro.',
    'tool.faq.time.question': 'Quanto tempo leva a conversão?',
    'tool.faq.time.answer': 'A maioria das conversões de {inputType} para {outputType} é concluída em menos de 30 segundos, dependendo do tamanho e complexidade do arquivo.',
    'tool.faq.data.question': 'Meus dados estão seguros?',
    'tool.faq.data.answer': 'Sim, todos os arquivos são processados com segurança usando criptografia SSL e automaticamente excluídos de nossos servidores em até 24 horas após a conversão.',
    'tool.more.info.title': 'Informações Adicionais',
    'tool.more.info.paragraph1': 'Nosso conversor {toolName} usa algoritmos avançados para garantir conversão precisa, preservando a formatação e estrutura originais de seus documentos.',
    'tool.more.info.paragraph2': 'Todas as conversões são realizadas na nuvem, então você não precisa instalar nenhum software. Simplesmente faça upload do seu arquivo e baixe o resultado convertido. Grátis para sempre.',
    'tool.other.popular': 'Outras Ferramentas Populares',
    'category.tools.title': 'Ferramentas {category}',
    'category.word': 'Word',
    'category.excel': 'Excel',
    'category.images': 'Imagens',
    'category.pdf': 'PDF',
    'category.compress': 'Comprimir',
    'category.merge': 'Mesclar',
    'convert.to.format': 'Converter para {format}:',
    'format.pdf': 'PDF',
    'format.word': 'Word',
    'format.excel': 'Excel',
    'format.jpg': 'JPG',
    'format.png': 'PNG',
    'format.webp': 'WebP',
    'tool.not.found.title': 'Ferramenta Não Encontrada',
    'tool.not.found.description': 'A ferramenta que você está procurando não existe.',
    'tool.not.found.cta': 'Ir para Início',
    
    // Login/Signup
    'auth.login.title': 'Entrar',
    'auth.login.description': 'Digite suas credenciais para acessar sua conta',
    'auth.login.email': 'E-mail',
    'auth.login.password': 'Senha',
    'auth.login.submit': 'Entrar',
    'auth.login.submitting': 'Entrando...',
    'auth.login.or': 'Ou continue com',
    'auth.login.no.account': 'Não tem uma conta?',
    'auth.login.signup.link': 'Cadastre-se',
    'auth.login.invalid': 'E-mail ou senha inválidos',
    'auth.login.error': 'Ocorreu um erro. Tente novamente.',
    'auth.login.google.error': 'Falha ao entrar com Google',
    'auth.login.facebook.error': 'Falha ao entrar com Facebook',
    'auth.disabled.title': 'Contas Desabilitadas',
    'auth.disabled.message': 'As contas estão atualmente desabilitadas no PDFStation. Todos os recursos estão disponíveis sem uma conta.',
    'auth.disabled.go.home': 'Ir para Início',
    
    'auth.signup.title': 'Criar Conta',
    'auth.signup.description': 'Digite suas informações para criar uma conta',
    'auth.signup.name': 'Nome',
    'auth.signup.name.placeholder': 'Digite seu nome',
    'auth.signup.email': 'E-mail',
    'auth.signup.email.placeholder': 'Digite seu e-mail',
    'auth.signup.password': 'Senha',
    'auth.signup.password.placeholder': 'Digite sua senha',
    'auth.signup.submit': 'Criar conta',
    'auth.signup.submitting': 'Criando conta...',
    'auth.signup.has.account': 'Já tem uma conta?',
    'auth.signup.login.link': 'Entrar',
    'auth.signup.error': 'Ocorreu um erro. Tente novamente.',
    'auth.signup.google.error': 'Falha ao se cadastrar com Google',
    'auth.signup.facebook.error': 'Falha ao se cadastrar com Facebook',
    
    // Navbar
    'nav.home': 'Início',
    'nav.tools': 'Ferramentas',
    'nav.faq': 'FAQ',
    'nav.about': 'Sobre',
    'nav.login': 'Entrar',
    'nav.signup': 'Cadastrar',
    'nav.account': 'Minha Conta',
    'nav.logout': 'Sair',
    
    // Footer
    'footer.tagline': 'Conversão inteligente de arquivos em um só lugar.',
    'footer.tools.title': 'Ferramentas',
    'footer.tools.pdf-to-word': 'PDF para Word',
    'footer.tools.word-to-pdf': 'Word para PDF',
    'footer.tools.pdf-to-excel': 'PDF para Excel',
    'footer.tools.compress-pdf': 'Comprimir PDF',
    'footer.company.title': 'Empresa',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Política de Privacidade',
    'footer.legal.terms': 'Termos de Serviço',
    'footer.legal.cookies': 'Política de Cookies',
    'footer.copyright': '© {year} PDFStation. Todos os direitos reservados.',
    
    // Legal pages
    'legal.back': 'Voltar',
    'legal.last.updated': 'Última atualização:',
    
    // Privacy Policy
    'privacy.title': 'Política de Privacidade',
    'privacy.intro.title': '1. Introdução',
    'privacy.intro.text': 'O PDFStation ("nós", "nosso" ou "nos") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso serviço de conversão de arquivos.',
    'privacy.collect.title': '2. Informações que Coletamos',
    'privacy.collect.intro': 'Coletamos informações mínimas necessárias para fornecer nosso serviço. Nenhuma conta ou cadastro é necessário. Coletamos:',
    'privacy.collect.item1': 'Arquivos que você faz upload para conversão (armazenados temporariamente e excluídos automaticamente em 24 horas)',
    'privacy.collect.item2': 'Endereço IP e informações do dispositivo para limitação de taxa e segurança (efêmeras, não armazenadas permanentemente)',
    'privacy.collect.item3': 'Dados de uso e análises para melhorar nosso serviço (anonimizados)',
    'privacy.collect.item4': 'Dados de cookies para análises e publicidade (consulte a Política de Cookies)',
    'privacy.use.title': '3. Como Usamos Suas Informações',
    'privacy.use.intro': 'Usamos as informações que coletamos para:',
    'privacy.use.item1': 'Processar e converter seus arquivos (apenas processamento temporário)',
    'privacy.use.item2': 'Fornecer e manter nosso serviço gratuito',
    'privacy.use.item3': 'Implementar limitação de taxa para prevenir abuso (baseado em IP)',
    'privacy.use.item4': 'Exibir anúncios relevantes (via Google Ads) para apoiar nosso serviço gratuito',
    'privacy.use.item5': 'Melhorar nosso serviço e experiência do usuário através de análises anonimizadas',
    'privacy.security.title': '4. Segurança de Dados',
    'privacy.security.intro': 'Implementamos medidas de segurança padrão da indústria para proteger seus arquivos:',
    'privacy.security.item1': 'Criptografia SSL para todas as transferências de dados',
    'privacy.security.item2': 'Exclusão automática de arquivos em 24 horas após a conversão',
    'privacy.security.item3': 'Infraestrutura de servidor segura',
    'privacy.security.item4': 'Nenhum armazenamento permanente de seus arquivos',
    'privacy.retention.title': '5. Retenção de Dados',
    'privacy.retention.text': 'Seus arquivos enviados são automaticamente excluídos de nossos servidores em 24 horas após a conversão. Não retemos seus arquivos permanentemente. Os logs de endereço IP são mantidos apenas para fins de limitação de taxa e são automaticamente removidos após 5 minutos. Não armazenamos informações de conta, pois contas não são necessárias ou disponíveis.',
    'privacy.thirdparty.title': '6. Serviços de Terceiros e Publicidade',
    'privacy.thirdparty.text1': 'O PDFStation é suportado pelo Google Ads. Usamos os serviços de publicidade do Google para exibir anúncios relevantes, o que nos ajuda a fornecer o serviço gratuitamente. O Google pode usar cookies e tecnologias semelhantes para exibir anúncios personalizados com base na sua atividade de navegação. Esses serviços estão vinculados às suas próprias políticas de privacidade e não têm acesso aos seus arquivos enviados.',
    'privacy.thirdparty.text2': 'Também usamos serviços de análise de terceiros para entender como os visitantes usam nosso site. Esses serviços coletam dados de uso anonimizados e não têm acesso aos seus arquivos enviados.',
    'privacy.rights.title': '7. Seus Direitos',
    'privacy.rights.intro': 'Como o PDFStation não requer contas, você tem o direito de:',
    'privacy.rights.item1': 'Usar nosso serviço anonimamente sem fornecer informações pessoais',
    'privacy.rights.item2': 'Controlar as configurações de cookies através do seu navegador',
    'privacy.rights.item3': 'Optar por não receber publicidade personalizada através das configurações do Google Ads',
    'privacy.rights.item4': 'Solicitar informações sobre quais dados coletamos (mínimos: IP para limitação de taxa, cookies para anúncios/análises)',
    'privacy.contact.title': '8. Entre em Contato',
    'privacy.contact.text': 'Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do nosso site.',
    
    // Terms of Service
    'terms.title': 'Termos de Serviço',
    'terms.accept.title': '1. Aceitação dos Termos',
    'terms.accept.text': 'Ao acessar e usar o PDFStation, você aceita e concorda em estar vinculado aos termos e disposições deste acordo. Se você não concordar com estes termos, por favor, não use nosso serviço.',
    'terms.service.title': '2. Descrição do Serviço',
    'terms.service.text1': 'O PDFStation fornece um serviço gratuito de conversão de arquivos online. Nenhum cadastro, login ou conta é necessário. Permitimos que os usuários convertam arquivos entre vários formatos, incluindo PDF, Word, Excel e formatos de imagem. Nosso serviço é gratuito para sempre, suportado pelo Google Ads, com um limite de tamanho de arquivo de 100MB por arquivo.',
    'terms.service.text2': 'Para prevenir abuso, implementamos limitação de taxa baseada em IP (máximo de 5 uploads por endereço IP a cada 5 minutos). Se você exceder este limite, receberá um erro 429 e deve aguardar antes de fazer upload novamente.',
    'terms.responsibilities.title': '3. Responsabilidades do Usuário',
    'terms.responsibilities.intro': 'Você concorda em:',
    'terms.responsibilities.item1': 'Usar o serviço apenas para fins legais',
    'terms.responsibilities.item2': 'Não fazer upload de arquivos contendo código malicioso, vírus ou conteúdo ilegal',
    'terms.responsibilities.item3': 'Respeitar os direitos de propriedade intelectual',
    'terms.responsibilities.item4': 'Não tentar abusar ou sobrecarregar nossos sistemas',
    'terms.responsibilities.item5': 'Não usar o serviço para fins comerciais de revenda sem permissão',
    'terms.limitations.title': '4. Limitações de Tamanho e Formato de Arquivo',
    'terms.limitations.text': 'Nosso serviço suporta arquivos de até 100MB. Suportamos vários formatos de arquivo conforme listado em nosso site. Reservamo-nos o direito de modificar essas limitações a qualquer momento.',
    'terms.data.title': '5. Dados e Privacidade',
    'terms.data.text': 'Seus arquivos são processados com segurança e excluídos automaticamente em 24 horas. Não armazenamos seus arquivos permanentemente. Consulte nossa Política de Privacidade para mais informações.',
    'terms.availability.title': '6. Disponibilidade do Serviço',
    'terms.availability.text': 'Nos esforçamos para fornecer um serviço confiável, mas não garantimos acesso ininterrupto. Podemos realizar manutenção, atualizações ou modificações que afetem temporariamente a disponibilidade do serviço.',
    'terms.disclaimer.title': '7. Isenção de Garantias',
    'terms.disclaimer.text': 'O serviço é fornecido "como está" sem garantias de qualquer tipo. Não garantimos que as conversões serão perfeitas ou livres de erros. Você usa o serviço por sua própria conta e risco.',
    'terms.liability.title': '8. Limitação de Responsabilidade',
    'terms.liability.text': 'O PDFStation não será responsável por quaisquer danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso do serviço.',
    'terms.changes.title': '9. Alterações nos Termos',
    'terms.changes.text': 'Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.',
    'terms.contact.title': '10. Contato',
    'terms.contact.text': 'Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco através do nosso site.',
    
    // Cookie Policy
    'cookie.title': 'Política de Cookies',
    'cookie.what.title': '1. O que São Cookies',
    'cookie.what.text': 'Cookies são pequenos arquivos de texto que são colocados em seu dispositivo quando você visita um site. Eles são amplamente usados para fazer os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários dos sites.',
    'cookie.how.title': '2. Como Usamos Cookies',
    'cookie.how.intro': 'O PDFStation usa cookies para os seguintes propósitos:',
    'cookie.how.item1': 'Cookies Essenciais: Necessários para o serviço funcionar corretamente, como manter sua sessão e preferências de idioma',
    'cookie.how.item2': 'Cookies de Análise: Nos ajudam a entender como os visitantes usam nosso site para melhorar nosso serviço (dados anonimizados)',
    'cookie.how.item3': 'Cookies de Publicidade: Usados pelo Google Ads para exibir anúncios relevantes e apoiar nosso serviço gratuito. Esses cookies rastreiam sua atividade de navegação em sites para mostrar anúncios personalizados',
    'cookie.how.item4': 'Cookies de Preferência: Lembram suas configurações e preferências, como seleção de idioma',
    'cookie.types.title': '3. Tipos de Cookies que Usamos',
    'cookie.types.session': 'Cookies de Sessão: Cookies temporários que são excluídos quando você fecha seu navegador. Esses são essenciais para o serviço funcionar.',
    'cookie.types.persistent': 'Cookies Persistentes: Permanecem em seu dispositivo por um período determinado ou até você excluí-los. Usamos esses para lembrar suas preferências.',
    'cookie.thirdparty.title': '4. Cookies de Terceiros e Google Ads',
    'cookie.thirdparty.intro': 'O PDFStation é suportado pelo Google Ads. O Google define cookies em seu dispositivo para:',
    'cookie.thirdparty.item1': 'Exibir anúncios relevantes com base no seu histórico de navegação',
    'cookie.thirdparty.item2': 'Medir o desempenho e a eficácia dos anúncios',
    'cookie.thirdparty.item3': 'Prevenir fraudes e abusos',
    'cookie.thirdparty.text': 'Também usamos serviços de análise (como o Google Analytics) que definem cookies para nos ajudar a entender o uso do site. Esses terceiros têm suas próprias políticas de privacidade. Você pode optar por não receber publicidade personalizada através das configurações do Google Ads.',
    'cookie.manage.title': '5. Gerenciando Cookies',
    'cookie.manage.intro': 'Você pode controlar e gerenciar cookies de várias formas:',
    'cookie.manage.item1': 'As configurações do navegador permitem que você recuse ou exclua cookies',
    'cookie.manage.item2': 'Observe que bloquear cookies essenciais pode afetar a funcionalidade do site',
    'cookie.manage.item3': 'Você pode excluir cookies do seu navegador a qualquer momento',
    'cookie.updates.title': '6. Atualizações desta Política',
    'cookie.updates.text': 'Podemos atualizar esta Política de Cookies de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página.',
    'cookie.contact.title': '7. Entre em Contato',
    'cookie.contact.text': 'Se você tiver dúvidas sobre nosso uso de cookies, entre em contato conosco através do nosso site.',
    
    // Free messaging
    'free.forever': 'Grátis para sempre',
    'free.online': 'Gratuito online',
    'free.converter': 'Conversor PDF gratuito',
    'free.tools': 'Ferramentas PDF online gratuitas',
    'free.no.signup': 'Sem necessidade de cadastro',
    'free.up.to': 'Até 100MB',
    
    // Error messages
    'error.rate.limit.exceeded': 'Limite de upload atingido para seu IP. Por favor, tente novamente mais tarde.',
    'error.rate.limit.retry': 'Por favor, aguarde {seconds} segundos antes de tentar novamente.',
    'error.upload.failed': 'Upload falhou. Por favor, tente novamente.',
    'error.conversion.failed': 'Conversão falhou. Por favor, tente novamente.',
    'error.conversion.service.unavailable': 'Serviço de conversão temporariamente indisponível. Por favor, tente novamente mais tarde.',
    'error.file.too.large': 'Arquivo muito grande. Tamanho máximo permitido é 100MB.',
    'error.invalid.file': 'Arquivo ou parâmetros inválidos.',
    'error.too.many.requests': 'Muitas conversões do seu IP. Por favor, tente novamente mais tarde.',
    'error.request.timeout': 'Tempo de requisição esgotado. Por favor, tente novamente.',
  },
  es: {
    // Common UI
    'drag.drop': 'Arrastra y suelta tus archivos aquí',
    'click.browse': 'o haz clic para buscar en tu computadora',
    'select.files': 'Seleccionar Archivos',
    'convert.to': 'Convertir a:',
    'convert': 'Convertir',
    'compress': 'Comprimir',
    'merge': 'Combinar',
    'download': 'Descargar',
    'upload.queue': 'Cola de Carga',
    'converting': 'Convirtiendo',
    'ready': 'Listo',
    'completed': 'Completado',
    
    // Homepage Hero
    'home.hero.title': 'Conversor de PDF Online – JPG/PNG a PDF, Word a PDF, Comprimir y Combinar',
    'home.hero.subtitle': 'Conversor de PDF online gratuito y herramientas. Convierte imágenes, documentos Word, comprime y combina PDFs al instante.',
    'home.hero.description': 'Convierte imágenes JPG y PNG a PDF, documentos Word a PDF, comprime archivos PDF y combina varios PDFs en uno. Rápido, seguro y completamente gratuito hasta 100MB por archivo. Sin necesidad de registro.',
    'home.hero.cta.choose': 'Elegir archivos',
    'home.hero.cta.explore': 'Explorar herramientas',
    
    // Trust Section
    'trust.thousands': 'Confiado por miles',
    'trust.active.users': 'Usuarios activos en todo el mundo',
    'trust.no.files': 'No se almacenan archivos',
    'trust.ssl.encrypted': 'Cifrado SSL',
    'trust.files.converted': 'Más de 10.000 archivos convertidos',
    'trust.every.month': 'Cada mes',
    
    // Supported Formats
    'supported.formats.title': 'Formatos de Archivo Soportados',
    'supported.formats.description': 'PDFStation admite formatos PDF, DOCX, JPG y PNG. Convierte imágenes a PDF, Word a PDF, comprime y combina PDFs online.',
    
    // Popular Conversions
    'popular.conversions.title': 'Conversiones de PDF Populares',
    'popular.conversions.description': 'Convierte imágenes JPG y PNG a PDF, documentos Word a PDF, comprime archivos PDF y combina varios PDFs en un documento.',
    'popular.converters.title': 'Herramientas de Conversión de PDF Gratuitas',
    'popular.converters.subtitle': 'Convierte imágenes a PDF, Word a PDF, comprime y combina PDFs online gratuitamente',
    'popular.compress.title': 'Comprimir PDF',
    'popular.compress.description': 'Reduce el tamaño de tu archivo PDF manteniendo excelente calidad',
    'popular.compress.cta': 'Haz clic para comprimir →',
    'popular.convert.cta': 'Haz clic para convertir →',
    'tool.images-to-pdf.name': 'Conversor de JPG/PNG a PDF',
    'tool.images-to-pdf.description': 'Convierte imágenes JPG y PNG a PDF online gratuitamente. Conversor rápido y seguro de imagen a PDF sin marcas de agua.',
    'tool.word-to-pdf.name': 'Conversor de Word a PDF',
    'tool.word-to-pdf.description': 'Convierte documentos Word (DOCX, DOC) a formato PDF online. Conversor gratuito de Word a PDF con salida de alta calidad.',
    'tool.pdf-compress.name': 'Comprimir PDF Online',
    'tool.pdf-compress.description': 'Reduce el tamaño de archivos PDF online gratuitamente. Comprime PDFs sin perder calidad. Herramienta rápida de compresión de PDF.',
    'tool.pdf-merge.name': 'Combinar Archivos PDF Online',
    'tool.pdf-merge.description': 'Combina varios archivos PDF en un documento online. Herramienta gratuita de combinación de PDFs. Combina PDFs rápidamente y con seguridad.',
    
    // Features Grid
    'features.title': '¿Por qué PDFStation?',
    'features.fast.title': 'Súper Rápido',
    'features.fast.description': 'Convierte archivos en segundos con nuestro motor de procesamiento optimizado. Gratis para siempre.',
    'features.secure.title': 'Seguro y Privado',
    'features.secure.description': 'Tus archivos se procesan de forma segura y se eliminan automáticamente después de la conversión.',
    'features.no.watermarks.title': 'Sin Marcas de Agua',
    'features.no.watermarks.description': 'Obtén conversiones limpias y profesionales sin ninguna marca o marca de agua. 100% gratuito.',
    'features.works.everywhere.title': 'Funciona en Cualquier Lugar',
    'features.works.everywhere.description': 'Accede a PDFStation desde cualquier dispositivo, en cualquier parte del mundo. No se requiere registro.',
    
    // Security & Privacy
    'security.title': 'Seguridad y Privacidad',
    'security.description': 'Tus archivos se procesan de forma segura usando cifrado estándar de la industria. Todos los archivos se eliminan automáticamente de nuestros servidores en un plazo de 24 horas después de la conversión. Nunca compartimos tus datos con terceros. Gratis para siempre para conversiones principales.',
    
    // Upload Box
    'upload.choose.files': 'Elegir archivos',
    'upload.from.device': 'Desde dispositivo',
    'upload.from.dropbox': 'Desde Dropbox',
    'upload.from.google.drive': 'Desde Google Drive',
    'upload.from.url': 'Desde URL',
    'upload.limit': 'Convierte archivos de hasta 100MB. Gratis para siempre.',
    'upload.cloud.coming.soon': 'La carga en la nube llegará pronto. Por ahora, sube desde tu dispositivo.',
    'upload.url.prompt': 'Ingresa la URL del archivo',
    'upload.url.placeholder': 'https://ejemplo.com/archivo.pdf',
    'upload.url.submit': 'Agregar archivo',
    'upload.url.cancel': 'Cancelar',
    
    // About Page
    'about.title': 'Acerca de PDFStation',
    'about.subtitle': 'Conversión inteligente de archivos en un solo lugar.',
    'about.paragraph1': 'PDFStation fue fundado con un objetivo simple: hacer que la conversión de archivos sea lo más fácil y accesible posible. Entendemos que convertir archivos entre diferentes formatos puede ser frustrante, especialmente cuando necesitas hacerlo rápidamente o no tienes el software adecuado instalado.',
    'about.paragraph2': 'Nuestra plataforma está construida con tecnología moderna que garantiza conversiones rápidas y confiables sin comprometer la calidad. Ya seas estudiante, profesional o empresa, PDFStation proporciona las herramientas que necesitas para trabajar con tus archivos de manera eficiente. Lo mejor de todo, nuestras herramientas de conversión principales son gratuitas para siempre.',
    'about.paragraph3': 'Estamos comprometidos a mantener los más altos estándares de seguridad y privacidad. Tus archivos se procesan de forma segura y se eliminan automáticamente de nuestros servidores, para que puedas convertir con confianza.',
    'about.values.title': 'Nuestros Valores',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Hacer que la conversión de archivos sea simple, rápida y accesible para todos, independientemente de la experiencia técnica. Gratis para siempre.',
    'about.innovation.title': 'Innovación',
    'about.innovation.description': 'Mejoramos continuamente nuestra tecnología para proporcionar la experiencia de conversión más rápida y confiable.',
    'about.user.focused.title': 'Enfocado en el Usuario',
    'about.user.focused.description': 'Cada característica que construimos está diseñada pensando en nuestros usuarios, priorizando la facilidad de uso y la confiabilidad.',
    'about.privacy.first.title': 'Privacidad Primero',
    'about.privacy.first.description': 'Creemos que tus datos te pertenecen. Por eso eliminamos automáticamente todos los archivos después del procesamiento.',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.convert.question': '¿Cómo convierto un archivo?',
    'faq.convert.answer': 'Simplemente arrastra y suelta tu archivo en la caja de carga, selecciona el formato de salida deseado y haz clic en convertir. Tu archivo se procesará y estará listo para descargar en segundos. Gratis para siempre, hasta 100MB por archivo.',
    'faq.formats.question': '¿Qué formatos de archivo son compatibles?',
    'faq.formats.answer': 'PDFStation admite formatos PDF, DOCX (Word), JPG y PNG. Puedes convertir imágenes JPG y PNG a PDF, documentos Word a PDF, comprimir archivos PDF y combinar varios PDFs en uno. Todas las herramientas son gratuitas para siempre.',
    'faq.images.question': '¿Cómo convierto imágenes JPG o PNG a PDF?',
    'faq.images.answer': 'Sube tu imagen JPG o PNG usando la caja de arrastrar y soltar y haz clic en convertir. Tu imagen se convertirá a formato PDF al instante. Gratis para siempre, hasta 100MB por archivo. Sin necesidad de registro.',
    'faq.word.question': '¿Cómo convierto documentos Word a PDF?',
    'faq.word.answer': 'Sube tu documento Word (formato DOCX o DOC) y haz clic en convertir a PDF. Tu documento se convertirá a formato PDF preservando el formato. Gratis para siempre, hasta 100MB por archivo.',
    'faq.compress.question': '¿Cómo comprimo un archivo PDF?',
    'faq.compress.answer': 'Sube tu archivo PDF y haz clic en comprimir. Nuestro compresor de PDF reducirá el tamaño del archivo manteniendo la calidad. Gratis para siempre, hasta 100MB por archivo. Sin marcas de agua añadidas.',
    'faq.merge.question': '¿Cómo combino varios archivos PDF?',
    'faq.merge.answer': 'Sube dos o más archivos PDF y haz clic en combinar. Todos los PDFs se combinarán en un solo documento en el orden en que los subiste. Gratis para siempre, hasta 100MB por archivo.',
    'faq.security.question': '¿Están seguros mis datos?',
    'faq.security.answer': 'Sí, absolutamente. Todos los archivos se procesan de forma segura usando conexiones cifradas. Los archivos se eliminan automáticamente de nuestros servidores después de la conversión, generalmente en un plazo de 24 horas.',
    'faq.size.limit.question': '¿Hay límites de tamaño de archivo?',
    'faq.size.limit.answer': 'Puedes convertir archivos de hasta 100MB por archivo. PDFStation es gratuito para siempre para conversiones principales, sin necesidad de registro.',
    'faq.multiple.question': '¿Puedo convertir varios archivos a la vez?',
    'faq.multiple.answer': '¡Sí! Puedes subir y convertir varios archivos simultáneamente. Todas las conversiones son gratuitas para siempre.',
    'faq.account.question': '¿Necesito crear una cuenta?',
    'faq.account.answer': 'No se requiere cuenta. PDFStation es completamente gratuito de usar sin necesidad de registro. Puedes comenzar a convertir archivos inmediatamente.',
    'faq.failure.question': '¿Qué pasa si mi conversión falla?',
    'faq.failure.answer': 'Si una conversión falla, puedes intentar nuevamente sin costo. Nuestro servicio es gratuito para siempre, por lo que puedes reintentar tantas veces como necesites.',
    'faq.commercial.question': '¿Puedo usar PDFStation para fines comerciales?',
    'faq.commercial.answer': '¡Sí! PDFStation es gratuito para siempre y puede usarse para fines personales y comerciales.',
    
    // Tool Page
    'tool.how.to.title': 'Cómo convertir {inputType} a {outputType}',
    'tool.how.to.step1': 'Sube tu archivo {inputType} usando la caja de arrastrar y soltar arriba',
    'tool.how.to.step2': 'Selecciona {outputType} ({format}) como tu formato de salida',
    'tool.how.to.step3': 'Haz clic en convertir y espera a que se complete el procesamiento (generalmente toma solo unos segundos)',
    'tool.how.to.step4': 'Descarga tu archivo {outputType} convertido',
    'tool.why.title': '¿Por qué convertir {inputType} a {outputType}?',
    'tool.why.reason1': 'Edita y modifica tu contenido con facilidad',
    'tool.why.reason2': 'Compatible con todos los principales softwares y plataformas',
    'tool.why.reason3': 'Mantén el formato y la estructura durante la conversión',
    'tool.why.reason4': 'No se requiere instalación de software - funciona en tu navegador. Gratis para siempre.',
    'tool.tips.title': 'Consejos para mejores conversiones',
    'tool.tips.tip1': 'Asegúrate de que tu archivo {inputType} no esté protegido con contraseña',
    'tool.tips.tip2': 'Para la mejor calidad, usa archivos de origen de alta resolución',
    'tool.tips.tip3': 'Mantén los tamaños de archivo por debajo de 100MB para un procesamiento más rápido',
    'tool.tips.tip4': 'Verifica que el formato de tu archivo sea compatible antes de subirlo',
    'tool.tips.tip5': 'Para documentos complejos, la conversión puede tomar un poco más de tiempo',
    'tool.formats.title': 'Formatos Soportados',
    'tool.formats.input': 'Formatos de entrada:',
    'tool.formats.output': 'Formatos de salida:',
    'tool.formats.files': 'archivos',
    'tool.faq.title': 'Preguntas Frecuentes',
    'tool.faq.size.question': '¿Qué tamaños de archivo son compatibles?',
    'tool.faq.size.answer': 'Puedes convertir archivos de hasta 100MB. PDFStation es gratuito para siempre, sin necesidad de registro.',
    'tool.faq.time.question': '¿Cuánto tiempo tarda la conversión?',
    'tool.faq.time.answer': 'La mayoría de las conversiones de {inputType} a {outputType} se completan en menos de 30 segundos, dependiendo del tamaño y la complejidad del archivo.',
    'tool.faq.data.question': '¿Están seguros mis datos?',
    'tool.faq.data.answer': 'Sí, todos los archivos se procesan de forma segura usando cifrado SSL y se eliminan automáticamente de nuestros servidores en un plazo de 24 horas después de la conversión.',
    'tool.more.info.title': 'Información Adicional',
    'tool.more.info.paragraph1': 'Nuestro conversor {toolName} usa algoritmos avanzados para garantizar una conversión precisa mientras preserva el formato y la estructura originales de tus documentos.',
    'tool.more.info.paragraph2': 'Todas las conversiones se realizan en la nuvem, por lo que no necesitas instalar ningún software. Simplemente sube tu archivo y descarga el resultado convertido. Gratis para siempre.',
    'tool.other.popular': 'Otras Herramientas Populares',
    'category.tools.title': 'Herramientas {category}',
    'category.word': 'Word',
    'category.excel': 'Excel',
    'category.images': 'Imágenes',
    'category.pdf': 'PDF',
    'category.compress': 'Comprimir',
    'category.merge': 'Combinar',
    'convert.to.format': 'Convertir a {format}:',
    'format.pdf': 'PDF',
    'format.word': 'Word',
    'format.excel': 'Excel',
    'format.jpg': 'JPG',
    'format.png': 'PNG',
    'format.webp': 'WebP',
    'tool.not.found.title': 'Herramienta No Encontrada',
    'tool.not.found.description': 'La herramienta que buscas no existe.',
    'tool.not.found.cta': 'Ir a Inicio',
    
    // Login/Signup
    'auth.login.title': 'Iniciar Sesión',
    'auth.login.description': 'Ingresa tus credenciales para acceder a tu cuenta',
    'auth.login.email': 'Correo electrónico',
    'auth.login.password': 'Contraseña',
    'auth.login.submit': 'Iniciar Sesión',
    'auth.login.submitting': 'Iniciando sesión...',
    'auth.login.or': 'O continúa con',
    'auth.login.no.account': '¿No tienes una cuenta?',
    'auth.login.signup.link': 'Regístrate',
    'auth.login.invalid': 'Correo electrónico o contraseña inválidos',
    'auth.login.error': 'Ocurrió un error. Intenta nuevamente.',
    'auth.login.google.error': 'Error al iniciar sesión con Google',
    'auth.login.facebook.error': 'Error al iniciar sesión con Facebook',
    'auth.disabled.title': 'Cuentas Deshabilitadas',
    'auth.disabled.message': 'Las cuentas están actualmente deshabilitadas en PDFStation. Todas las funciones están disponibles sin una cuenta.',
    'auth.disabled.go.home': 'Ir a Inicio',
    
    'auth.signup.title': 'Crear Cuenta',
    'auth.signup.description': 'Ingresa tu información para crear una cuenta',
    'auth.signup.name': 'Nombre',
    'auth.signup.name.placeholder': 'Ingresa tu nombre',
    'auth.signup.email': 'Correo electrónico',
    'auth.signup.email.placeholder': 'Ingresa tu correo electrónico',
    'auth.signup.password': 'Contraseña',
    'auth.signup.password.placeholder': 'Ingresa tu contraseña',
    'auth.signup.submit': 'Crear cuenta',
    'auth.signup.submitting': 'Creando cuenta...',
    'auth.signup.has.account': '¿Ya tienes una cuenta?',
    'auth.signup.login.link': 'Iniciar Sesión',
    'auth.signup.error': 'Ocurrió un error. Intenta nuevamente.',
    'auth.signup.google.error': 'Error al registrarse con Google',
    'auth.signup.facebook.error': 'Error al registrarse con Facebook',
    
    // Navbar
    'nav.home': 'Inicio',
    'nav.tools': 'Herramientas',
    'nav.faq': 'FAQ',
    'nav.about': 'Acerca de',
    'nav.login': 'Iniciar Sesión',
    'nav.signup': 'Registrarse',
    'nav.account': 'Mi Cuenta',
    'nav.logout': 'Cerrar Sesión',
    
    // Footer
    'footer.tagline': 'Conversión inteligente de archivos en un solo lugar.',
    'footer.tools.title': 'Herramientas',
    'footer.tools.pdf-to-word': 'PDF a Word',
    'footer.tools.word-to-pdf': 'Word a PDF',
    'footer.tools.pdf-to-excel': 'PDF a Excel',
    'footer.tools.compress-pdf': 'Comprimir PDF',
    'footer.company.title': 'Empresa',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Política de Privacidad',
    'footer.legal.terms': 'Términos de Servicio',
    'footer.legal.cookies': 'Política de Cookies',
    'footer.copyright': '© {year} PDFStation. Todos los derechos reservados.',
    
    // Legal pages
    'legal.back': 'Volver',
    'legal.last.updated': 'Última actualización:',
    
    // Privacy Policy
    'privacy.title': 'Política de Privacidad',
    'privacy.intro.title': '1. Introducción',
    'privacy.intro.text': 'PDFStation ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestro servicio de conversión de archivos.',
    'privacy.collect.title': '2. Información que Recopilamos',
    'privacy.collect.intro': 'Recopilamos información mínima necesaria para proporcionar nuestro servicio. No se requiere cuenta ni registro. Recopilamos:',
    'privacy.collect.item1': 'Archivos que sube para conversión (almacenados temporalmente y eliminados automáticamente en 24 horas)',
    'privacy.collect.item2': 'Dirección IP e información del dispositivo para limitación de tasa y seguridad (efímera, no almacenada permanentemente)',
    'privacy.collect.item3': 'Datos de uso y análisis para mejorar nuestro servicio (anonimizados)',
    'privacy.collect.item4': 'Datos de cookies para análisis y publicidad (consulte la Política de Cookies)',
    'privacy.use.title': '3. Cómo Usamos Su Información',
    'privacy.use.intro': 'Usamos la información que recopilamos para:',
    'privacy.use.item1': 'Procesar y convertir sus archivos (solo procesamiento temporal)',
    'privacy.use.item2': 'Proporcionar y mantener nuestro servicio gratuito',
    'privacy.use.item3': 'Implementar limitación de tasa para prevenir abusos (basado en IP)',
    'privacy.use.item4': 'Mostrar anuncios relevantes (a través de Google Ads) para apoyar nuestro servicio gratuito',
    'privacy.use.item5': 'Mejorar nuestro servicio y experiencia del usuario a través de análisis anonimizados',
    'privacy.security.title': '4. Seguridad de Datos',
    'privacy.security.intro': 'Implementamos medidas de seguridad estándar de la industria para proteger sus archivos:',
    'privacy.security.item1': 'Cifrado SSL para todas las transferencias de datos',
    'privacy.security.item2': 'Eliminación automática de archivos en 24 horas después de la conversión',
    'privacy.security.item3': 'Infraestructura de servidor segura',
    'privacy.security.item4': 'Sin almacenamiento permanente de sus archivos',
    'privacy.retention.title': '5. Retención de Datos',
    'privacy.retention.text': 'Sus archivos subidos se eliminan automáticamente de nuestros servidores en 24 horas después de la conversión. No conservamos sus archivos permanentemente. Los registros de dirección IP se mantienen solo para fines de limitación de tasa y se purgan automáticamente después de 5 minutos. No almacenamos información de cuenta ya que las cuentas no son necesarias ni están disponibles.',
    'privacy.thirdparty.title': '6. Servicios de Terceros y Publicidad',
    'privacy.thirdparty.text1': 'PDFStation está respaldado por Google Ads. Utilizamos los servicios publicitarios de Google para mostrar anuncios relevantes, lo que nos ayuda a proporcionar el servicio de forma gratuita. Google puede usar cookies y tecnologías similares para mostrar anuncios personalizados basados en su actividad de navegación. Estos servicios están sujetos a sus propias políticas de privacidad y no tienen acceso a sus archivos subidos.',
    'privacy.thirdparty.text2': 'También utilizamos servicios de análisis de terceros para entender cómo los visitantes usan nuestro sitio web. Estos servicios recopilan datos de uso anonimizados y no tienen acceso a sus archivos subidos.',
    'privacy.rights.title': '7. Sus Derechos',
    'privacy.rights.intro': 'Dado que PDFStation no requiere cuentas, tiene derecho a:',
    'privacy.rights.item1': 'Usar nuestro servicio de forma anónima sin proporcionar información personal',
    'privacy.rights.item2': 'Controlar la configuración de cookies a través de su navegador',
    'privacy.rights.item3': 'Optar por no recibir publicidad personalizada a través de la configuración de Google Ads',
    'privacy.rights.item4': 'Solicitar información sobre qué datos recopilamos (mínimos: IP para limitación de tasa, cookies para anuncios/análisis)',
    'privacy.contact.title': '8. Contáctenos',
    'privacy.contact.text': 'Si tiene preguntas sobre esta Política de Privacidad, contáctenos a través de nuestro sitio web.',
    
    // Terms of Service
    'terms.title': 'Términos de Servicio',
    'terms.accept.title': '1. Aceptación de los Términos',
    'terms.accept.text': 'Al acceder y usar PDFStation, acepta y acuerda estar sujeto a los términos y disposiciones de este acuerdo. Si no está de acuerdo con estos términos, por favor no use nuestro servicio.',
    'terms.service.title': '2. Descripción del Servicio',
    'terms.service.text1': 'PDFStation proporciona un servicio gratuito de conversión de archivos en línea. No se requiere registro, inicio de sesión ni cuenta. Permitimos a los usuarios convertir archivos entre varios formatos, incluidos PDF, Word, Excel y formatos de imagen. Nuestro servicio es gratuito para siempre, respaldado por Google Ads, con un límite de tamaño de archivo de 100MB por archivo.',
    'terms.service.text2': 'Para prevenir abusos, implementamos limitación de tasa basada en IP (máximo 5 cargas por dirección IP cada 5 minutos). Si excede este límite, recibirá un error 429 y debe esperar antes de cargar nuevamente.',
    'terms.responsibilities.title': '3. Responsabilidades del Usuario',
    'terms.responsibilities.intro': 'Usted acepta:',
    'terms.responsibilities.item1': 'Usar el servicio solo para fines legales',
    'terms.responsibilities.item2': 'No subir archivos que contengan código malicioso, virus o contenido ilegal',
    'terms.responsibilities.item3': 'Respetar los derechos de propiedad intelectual',
    'terms.responsibilities.item4': 'No intentar abusar o sobrecargar nuestros sistemas',
    'terms.responsibilities.item5': 'No usar el servicio para fines comerciales de reventa sin permiso',
    'terms.limitations.title': '4. Limitaciones de Tamaño y Formato de Archivo',
    'terms.limitations.text': 'Nuestro servicio admite archivos de hasta 100MB. Admitimos varios formatos de archivo según se enumeran en nuestro sitio web. Nos reservamos el derecho de modificar estas limitaciones en cualquier momento.',
    'terms.data.title': '5. Datos y Privacidad',
    'terms.data.text': 'Sus archivos se procesan de forma segura y se eliminan automáticamente en 24 horas. No almacenamos sus archivos permanentemente. Consulte nuestra Política de Privacidad para más información.',
    'terms.availability.title': '6. Disponibilidad del Servicio',
    'terms.availability.text': 'Nos esforzamos por proporcionar un servicio confiable, pero no garantizamos acceso ininterrumpido. Podemos realizar mantenimiento, actualizaciones o modificaciones que afecten temporalmente la disponibilidad del servicio.',
    'terms.disclaimer.title': '7. Exención de Garantías',
    'terms.disclaimer.text': 'El servicio se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos que las conversiones serán perfectas o libres de errores. Usted usa el servicio bajo su propio riesgo.',
    'terms.liability.title': '8. Limitación de Responsabilidad',
    'terms.liability.text': 'PDFStation no será responsable de ningún daño indirecto, incidental, especial o consecuente derivado del uso del servicio.',
    'terms.changes.title': '9. Cambios en los Términos',
    'terms.changes.text': 'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del servicio después de los cambios constituye la aceptación de los nuevos términos.',
    'terms.contact.title': '10. Contacto',
    'terms.contact.text': 'Si tiene preguntas sobre estos Términos de Servicio, contáctenos a través de nuestro sitio web.',
    
    // Cookie Policy
    'cookie.title': 'Política de Cookies',
    'cookie.what.title': '1. Qué Son las Cookies',
    'cookie.what.text': 'Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita un sitio web. Se usan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionar información a los propietarios de sitios web.',
    'cookie.how.title': '2. Cómo Usamos las Cookies',
    'cookie.how.intro': 'PDFStation usa cookies para los siguientes propósitos:',
    'cookie.how.item1': 'Cookies Esenciales: Necesarias para que el servicio funcione correctamente, como mantener su sesión y preferencias de idioma',
    'cookie.how.item2': 'Cookies de Análisis: Nos ayudan a entender cómo los visitantes usan nuestro sitio web para mejorar nuestro servicio (datos anonimizados)',
    'cookie.how.item3': 'Cookies de Publicidad: Utilizadas por Google Ads para mostrar anuncios relevantes y apoyar nuestro servicio gratuito. Estas cookies rastrean su actividad de navegación en sitios para mostrar anuncios personalizados',
    'cookie.how.item4': 'Cookies de Preferencia: Recuerdan su configuración y preferencias, como la selección de idioma',
    'cookie.types.title': '3. Tipos de Cookies que Usamos',
    'cookie.types.session': 'Cookies de Sesión: Cookies temporales que se eliminan cuando cierra su navegador. Estas son esenciales para que el servicio funcione.',
    'cookie.types.persistent': 'Cookies Persistentes: Permanecen en su dispositivo por un período determinado o hasta que las elimine. Usamos estas para recordar sus preferencias.',
    'cookie.thirdparty.title': '4. Cookies de Terceros y Google Ads',
    'cookie.thirdparty.intro': 'PDFStation está respaldado por Google Ads. Google establece cookies en su dispositivo para:',
    'cookie.thirdparty.item1': 'Mostrar anuncios relevantes basados en su historial de navegación',
    'cookie.thirdparty.item2': 'Medir el rendimiento y la efectividad de los anuncios',
    'cookie.thirdparty.item3': 'Prevenir fraudes y abusos',
    'cookie.thirdparty.text': 'También utilizamos servicios de análisis (como Google Analytics) que establecen cookies para ayudarnos a entender el uso del sitio web. Estos terceros tienen sus propias políticas de privacidad. Puede optar por no recibir publicidad personalizada a través de la configuración de Google Ads.',
    'cookie.manage.title': '5. Gestión de Cookies',
    'cookie.manage.intro': 'Puede controlar y gestionar cookies de varias formas:',
    'cookie.manage.item1': 'La configuración del navegador le permite rechazar o eliminar cookies',
    'cookie.manage.item2': 'Tenga en cuenta que bloquear cookies esenciales puede afectar la funcionalidad del sitio web',
    'cookie.manage.item3': 'Puede eliminar cookies de su navegador en cualquier momento',
    'cookie.updates.title': '6. Actualizaciones de esta Política',
    'cookie.updates.text': 'Podemos actualizar esta Política de Cookies de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva política en esta página.',
    'cookie.contact.title': '7. Contáctenos',
    'cookie.contact.text': 'Si tiene preguntas sobre nuestro uso de cookies, contáctenos a través de nuestro sitio web.',
    
    // Free messaging
    'free.forever': 'Gratis para siempre',
    'free.online': 'Gratuito online',
    'free.converter': 'Conversor PDF gratuito',
    'free.tools': 'Herramientas PDF online gratuitas',
    'free.no.signup': 'No se requiere registro',
    'free.up.to': 'Hasta 100MB',
    
    // Error messages
    'error.rate.limit.exceeded': 'Límite de carga alcanzado para tu IP. Por favor, intenta de nuevo más tarde.',
    'error.rate.limit.retry': 'Por favor, espera {seconds} segundos antes de intentar de nuevo.',
    'error.upload.failed': 'La carga falló. Por favor, intenta de nuevo.',
    'error.conversion.failed': 'La conversión falló. Por favor, intenta de nuevo.',
    'error.conversion.service.unavailable': 'El servicio de conversión no está disponible temporalmente. Por favor, intenta de nuevo más tarde.',
    'error.file.too.large': 'Archivo demasiado grande. El tamaño máximo permitido es 100MB.',
    'error.invalid.file': 'Archivo o parámetros inválidos.',
    'error.too.many.requests': 'Demasiadas conversiones desde tu IP. Por favor, intenta de nuevo más tarde.',
    'error.request.timeout': 'Tiempo de solicitud agotado. Por favor, intenta de nuevo.',
  },
  fr: {
    // Common UI
    'drag.drop': 'Glissez-déposez vos fichiers ici',
    'click.browse': 'ou cliquez pour parcourir votre ordinateur',
    'select.files': 'Sélectionner les Fichiers',
    'convert.to': 'Convertir en:',
    'convert': 'Convertir',
    'compress': 'Compresser',
    'merge': 'Fusionner',
    'download': 'Télécharger',
    'upload.queue': 'File d\'Attente',
    'converting': 'Conversion',
    'ready': 'Prêt',
    'completed': 'Terminé',
    
    // Homepage Hero
    'home.hero.title': 'Converseur de PDF en Ligne – JPG/PNG en PDF, Word en PDF, Compresser et Fusionner',
    'home.hero.subtitle': 'Converseur de PDF en ligne gratuit et outils. Convertissez des images, documents Word, compressez et fusionnez des PDFs instantanément.',
    'home.hero.description': 'Convertissez des images JPG et PNG en PDF, documents Word en PDF, compressez des fichiers PDF et fusionnez plusieurs PDFs en un. Rapide, sécurisé et entièrement gratuit jusqu\'à 100MB par fichier. Aucune inscription requise.',
    'home.hero.cta.choose': 'Choisir des fichiers',
    'home.hero.cta.explore': 'Explorer les outils',
    
    // Trust Section
    'trust.thousands': 'Fait confiance par des milliers',
    'trust.active.users': 'Utilisateurs actifs dans le monde entier',
    'trust.no.files': 'Aucun fichier stocké',
    'trust.ssl.encrypted': 'Chiffré SSL',
    'trust.files.converted': 'Plus de 10 000 fichiers convertis',
    'trust.every.month': 'Chaque mois',
    
    // Supported Formats
    'supported.formats.title': 'Formats de Fichier Pris en Charge',
    'supported.formats.description': 'PDFStation prend en charge les formats PDF, DOCX, JPG et PNG. Convertissez des images en PDF, Word en PDF, compressez et fusionnez des PDFs en ligne.',
    
    // Popular Conversions
    'popular.conversions.title': 'Conversions de PDF Populaires',
    'popular.conversions.description': 'Convertissez des images JPG et PNG en PDF, documents Word en PDF, compressez des fichiers PDF et fusionnez plusieurs PDFs en un document.',
    'popular.converters.title': 'Outils de Conversion PDF Gratuits',
    'popular.converters.subtitle': 'Convertissez des images en PDF, Word en PDF, compressez et fusionnez des PDFs en ligne gratuitement',
    'popular.compress.title': 'Compresser PDF',
    'popular.compress.description': 'Réduisez la taille de votre fichier PDF tout en conservant une excellente qualité',
    'popular.compress.cta': 'Cliquez pour compresser →',
    'popular.convert.cta': 'Cliquez pour convertir →',
    'tool.images-to-pdf.name': 'Converseur JPG/PNG en PDF',
    'tool.images-to-pdf.description': 'Convertissez des images JPG et PNG en PDF en ligne gratuitement. Converseur rapide et sécurisé d\'image en PDF sans filigrane.',
    'tool.word-to-pdf.name': 'Converseur Word en PDF',
    'tool.word-to-pdf.description': 'Convertissez des documents Word (DOCX, DOC) au format PDF en ligne. Converseur gratuit Word en PDF avec sortie de haute qualité.',
    'tool.pdf-compress.name': 'Compresser PDF en Ligne',
    'tool.pdf-compress.description': 'Réduisez la taille des fichiers PDF en ligne gratuitement. Compressez des PDFs sans perdre en qualité. Outil rapide de compression PDF.',
    'tool.pdf-merge.name': 'Fusionner Fichiers PDF en Ligne',
    'tool.pdf-merge.description': 'Combinez plusieurs fichiers PDF en un document en ligne. Outil gratuit de fusion PDF. Fusionnez des PDFs rapidement et en toute sécurité.',
    
    // Features Grid
    'features.title': 'Pourquoi PDFStation?',
    'features.fast.title': 'Ultra Rapide',
    'features.fast.description': 'Convertissez des fichiers en quelques secondes avec notre moteur de traitement optimisé. Gratuit pour toujours.',
    'features.secure.title': 'Sécurisé et Privé',
    'features.secure.description': 'Vos fichiers sont traités en toute sécurité et supprimés automatiquement après la conversion.',
    'features.no.watermarks.title': 'Sans Filigranes',
    'features.no.watermarks.description': 'Obtenez des conversions propres et professionnelles sans aucune marque ou filigrane. 100% gratuit.',
    'features.works.everywhere.title': 'Fonctionne Partout',
    'features.works.everywhere.description': 'Accédez à PDFStation depuis n\'importe quel appareil, n\'importe où dans le monde. Aucune inscription requise.',
    
    // Security & Privacy
    'security.title': 'Sécurité et Confidentialité',
    'security.description': 'Vos fichiers sont traités en toute sécurité en utilisant un chiffrement standard de l\'industrie. Tous les fichiers sont automatiquement supprimés de nos serveurs dans les 24 heures suivant la conversion. Nous ne partageons jamais vos données avec des tiers. Gratuit pour toujours pour les conversions principales.',
    
    // Upload Box
    'upload.choose.files': 'Choisir des fichiers',
    'upload.from.device': 'Depuis l\'appareil',
    'upload.from.dropbox': 'Depuis Dropbox',
    'upload.from.google.drive': 'Depuis Google Drive',
    'upload.from.url': 'Depuis l\'URL',
    'upload.limit': 'Convertissez des fichiers jusqu\'à 100MB. Gratuit pour toujours.',
    'upload.cloud.coming.soon': 'Le téléchargement cloud arrive bientôt. Pour l\'instant, veuillez télécharger depuis votre appareil.',
    'upload.url.prompt': 'Entrez l\'URL du fichier',
    'upload.url.placeholder': 'https://exemple.com/fichier.pdf',
    'upload.url.submit': 'Ajouter le fichier',
    'upload.url.cancel': 'Annuler',
    
    // About Page
    'about.title': 'À Propos de PDFStation',
    'about.subtitle': 'Conversion intelligente de fichiers en un seul endroit.',
    'about.paragraph1': 'PDFStation a été fondé avec un objectif simple: rendre la conversion de fichiers aussi simple et accessible que possible. Nous comprenons que convertir des fichiers entre différents formats peut être frustrant, surtout lorsque vous devez le faire rapidement ou que vous n\'avez pas le bon logiciel installé.',
    'about.paragraph2': 'Notre plateforme est construite avec une technologie moderne qui garantit des conversions rapides et fiables sans compromettre la qualité. Que vous soyez étudiant, professionnel ou entreprise, PDFStation fournit les outils dont vous avez besoin pour travailler efficacement avec vos fichiers. Le meilleur de tout, nos outils de conversion principaux sont gratuits pour toujours.',
    'about.paragraph3': 'Nous nous engageons à maintenir les plus hauts standards de sécurité et de confidentialité. Vos fichiers sont traités en toute sécurité et automatiquement supprimés de nos serveurs, vous pouvez donc convertir en toute confiance.',
    'about.values.title': 'Nos Valeurs',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Rendre la conversion de fichiers simple, rapide et accessible à tous, quelle que soit l\'expertise technique. Gratuit pour toujours.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'Nous améliorons continuellement notre technologie pour fournir l\'expérience de conversion la plus rapide et la plus fiable.',
    'about.user.focused.title': 'Centré sur l\'Utilisateur',
    'about.user.focused.description': 'Chaque fonctionnalité que nous construisons est conçue en pensant à nos utilisateurs, en priorisant la facilité d\'utilisation et la fiabilité.',
    'about.privacy.first.title': 'Confidentialité d\'Abord',
    'about.privacy.first.description': 'Nous croyons que vos données vous appartiennent. C\'est pourquoi nous supprimons automatiquement tous les fichiers après le traitement.',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.convert.question': 'Comment convertir un fichier?',
    'faq.convert.answer': 'Glissez-déposez simplement votre fichier dans la zone de téléchargement, sélectionnez le format de sortie souhaité et cliquez sur convertir. Votre fichier sera traité et prêt à être téléchargé en quelques secondes. Gratuit pour toujours, jusqu\'à 100MB par fichier.',
    'faq.formats.question': 'Quels formats de fichiers sont pris en charge?',
    'faq.formats.answer': 'PDFStation prend en charge les formats PDF, DOCX (Word), JPG et PNG. Vous pouvez convertir des images JPG et PNG en PDF, documents Word en PDF, comprimer des fichiers PDF et fusionner plusieurs PDFs en un. Tous les outils sont gratuits pour toujours.',
    'faq.images.question': 'Comment convertir des images JPG ou PNG en PDF?',
    'faq.images.answer': 'Téléchargez votre image JPG ou PNG en utilisant la zone de glisser-déposer et cliquez sur convertir. Votre image sera convertie au format PDF instantanément. Gratuit pour toujours, jusqu\'à 100MB par fichier. Aucune inscription requise.',
    'faq.word.question': 'Comment convertir des documents Word en PDF?',
    'faq.word.answer': 'Téléchargez votre document Word (format DOCX ou DOC) et cliquez sur convertir en PDF. Votre document sera converti au format PDF en préservant le formatage. Gratuit pour toujours, jusqu\'à 100MB par fichier.',
    'faq.compress.question': 'Comment compresser un fichier PDF?',
    'faq.compress.answer': 'Téléchargez votre fichier PDF et cliquez sur compresser. Notre compresseur PDF réduira la taille du fichier tout en maintenant la qualité. Gratuit pour toujours, jusqu\'à 100MB par fichier. Aucun filigrane ajouté.',
    'faq.merge.question': 'Comment fusionner plusieurs fichiers PDF?',
    'faq.merge.answer': 'Téléchargez deux fichiers PDF ou plus et cliquez sur fusionner. Tous les PDFs seront combinés en un seul document dans l\'ordre où vous les avez téléchargés. Gratuit pour toujours, jusqu\'à 100MB par fichier.',
    'faq.security.question': 'Mes données sont-elles sécurisées?',
    'faq.security.answer': 'Oui, absolument. Tous les fichiers sont traités en toute sécurité en utilisant des connexions chiffrées. Les fichiers sont automatiquement supprimés de nos serveurs après la conversion, généralement dans les 24 heures.',
    'faq.size.limit.question': 'Y a-t-il des limites de taille de fichier?',
    'faq.size.limit.answer': 'Vous pouvez convertir des fichiers jusqu\'à 100MB par fichier. PDFStation est gratuit pour toujours pour les conversions principales, aucune inscription requise.',
    'faq.multiple.question': 'Puis-je convertir plusieurs fichiers à la fois?',
    'faq.multiple.answer': 'Oui! Vous pouvez télécharger et convertir plusieurs fichiers simultanément. Toutes les conversions sont gratuites pour toujours.',
    'faq.account.question': 'Dois-je créer un compte?',
    'faq.account.answer': 'Aucun compte n\'est requis. PDFStation est entièrement gratuit à utiliser sans inscription requise. Vous pouvez commencer à convertir des fichiers immédiatement.',
    'faq.failure.question': 'Que se passe-t-il si ma conversion échoue?',
    'faq.failure.answer': 'Si une conversion échoue, vous pouvez réessayer sans frais. Notre service est gratuit pour toujours, vous pouvez donc réessayer autant de fois que nécessaire.',
    'faq.commercial.question': 'Puis-je utiliser PDFStation à des fins commerciales?',
    'faq.commercial.answer': 'Oui! PDFStation est gratuit pour toujours et peut être utilisé à des fins personnelles et commerciales.',
    
    // Tool Page
    'tool.how.to.title': 'Comment convertir {inputType} en {outputType}',
    'tool.how.to.step1': 'Téléchargez votre fichier {inputType} en utilisant la zone de glisser-déposer ci-dessus',
    'tool.how.to.step2': 'Sélectionnez {outputType} ({format}) comme format de sortie',
    'tool.how.to.step3': 'Cliquez sur convertir et attendez que le traitement soit terminé (généralement cela ne prend que quelques secondes)',
    'tool.how.to.step4': 'Téléchargez votre fichier {outputType} converti',
    'tool.why.title': 'Pourquoi convertir {inputType} en {outputType}?',
    'tool.why.reason1': 'Modifiez et modifiez votre contenu en toute simplicité',
    'tool.why.reason2': 'Compatible avec tous les principaux logiciels et plateformes',
    'tool.why.reason3': 'Maintenez le formatage et la structure pendant la conversion',
    'tool.why.reason4': 'Aucune installation de logiciel requise - fonctionne dans votre navigateur. Gratuit pour toujours.',
    'tool.tips.title': 'Conseils pour de meilleures conversions',
    'tool.tips.tip1': 'Assurez-vous que votre fichier {inputType} n\'est pas protégé par mot de passe',
    'tool.tips.tip2': 'Pour une meilleure qualité, utilisez des fichiers source haute résolution',
    'tool.tips.tip3': 'Gardez les tailles de fichier sous 100MB pour un traitement plus rapide',
    'tool.tips.tip4': 'Vérifiez que le format de votre fichier est pris en charge avant de le télécharger',
    'tool.tips.tip5': 'Pour les documents complexes, la conversion peut prendre un peu plus de temps',
    'tool.formats.title': 'Formats Pris en Charge',
    'tool.formats.input': 'Formats d\'entrée:',
    'tool.formats.output': 'Formats de sortie:',
    'tool.formats.files': 'fichiers',
    'tool.faq.title': 'Questions Fréquemment Posées',
    'tool.faq.size.question': 'Quelles tailles de fichier sont prises en charge?',
    'tool.faq.size.answer': 'Vous pouvez convertir des fichiers jusqu\'à 100MB. PDFStation est gratuit pour toujours, aucune inscription requise.',
    'tool.faq.time.question': 'Combien de temps prend la conversion?',
    'tool.faq.time.answer': 'La plupart des conversions de {inputType} en {outputType} se terminent en moins de 30 secondes, selon la taille et la complexité du fichier.',
    'tool.faq.data.question': 'Mes données sont-elles sécurisées?',
    'tool.faq.data.answer': 'Oui, tous les fichiers sont traités en toute sécurité en utilisant le chiffrement SSL et sont automatiquement supprimés de nos serveurs dans les 24 heures suivant la conversion.',
    'tool.more.info.title': 'Informations Supplémentaires',
    'tool.more.info.paragraph1': 'Notre convertisseur {toolName} utilise des algorithmes avancés pour garantir une conversion précise tout en préservant le formatage et la structure originaux de vos documents.',
    'tool.more.info.paragraph2': 'Toutes les conversions sont effectuées dans le cloud, vous n\'avez donc pas besoin d\'installer de logiciel. Téléchargez simplement votre fichier et téléchargez le résultat converti. Gratuit pour toujours.',
    'tool.other.popular': 'Autres Outils Populaires',
    'category.tools.title': 'Outils {category}',
    'category.word': 'Word',
    'category.excel': 'Excel',
    'category.images': 'Images',
    'category.pdf': 'PDF',
    'category.compress': 'Compresser',
    'category.merge': 'Fusionner',
    'convert.to.format': 'Convertir en {format}:',
    'format.pdf': 'PDF',
    'format.word': 'Word',
    'format.excel': 'Excel',
    'format.jpg': 'JPG',
    'format.png': 'PNG',
    'format.webp': 'WebP',
    'tool.not.found.title': 'Outil Non Trouvé',
    'tool.not.found.description': 'L\'outil que vous recherchez n\'existe pas.',
    'tool.not.found.cta': 'Aller à l\'Accueil',
    
    // Login/Signup
    'auth.login.title': 'Connexion',
    'auth.login.description': 'Entrez vos identifiants pour accéder à votre compte',
    'auth.login.email': 'E-mail',
    'auth.login.password': 'Mot de passe',
    'auth.login.submit': 'Se connecter',
    'auth.login.submitting': 'Connexion...',
    'auth.login.or': 'Ou continuer avec',
    'auth.login.no.account': 'Vous n\'avez pas de compte?',
    'auth.login.signup.link': 'S\'inscrire',
    'auth.login.invalid': 'E-mail ou mot de passe invalide',
    'auth.login.error': 'Une erreur s\'est produite. Veuillez réessayer.',
    'auth.login.google.error': 'Échec de la connexion avec Google',
    'auth.login.facebook.error': 'Échec de la connexion avec Facebook',
    'auth.disabled.title': 'Comptes Désactivés',
    'auth.disabled.message': 'Les comptes sont actuellement désactivés sur PDFStation. Toutes les fonctionnalités sont disponibles sans compte.',
    'auth.disabled.go.home': 'Aller à l\'Accueil',
    
    'auth.signup.title': 'Créer un Compte',
    'auth.signup.description': 'Entrez vos informations pour créer un compte',
    'auth.signup.name': 'Nom',
    'auth.signup.name.placeholder': 'Entrez votre nom',
    'auth.signup.email': 'E-mail',
    'auth.signup.email.placeholder': 'Entrez votre e-mail',
    'auth.signup.password': 'Mot de passe',
    'auth.signup.password.placeholder': 'Entrez votre mot de passe',
    'auth.signup.submit': 'Créer un compte',
    'auth.signup.submitting': 'Création du compte...',
    'auth.signup.has.account': 'Vous avez déjà un compte?',
    'auth.signup.login.link': 'Se connecter',
    'auth.signup.error': 'Une erreur s\'est produite. Veuillez réessayer.',
    'auth.signup.google.error': 'Échec de l\'inscription avec Google',
    'auth.signup.facebook.error': 'Échec de l\'inscription avec Facebook',
    
    // Navbar
    'nav.home': 'Accueil',
    'nav.tools': 'Outils',
    'nav.faq': 'FAQ',
    'nav.about': 'À Propos',
    'nav.login': 'Connexion',
    'nav.signup': 'S\'inscrire',
    'nav.account': 'Mon Compte',
    'nav.logout': 'Déconnexion',
    
    // Footer
    'footer.tagline': 'Conversion intelligente de fichiers en un seul endroit.',
    'footer.tools.title': 'Outils',
    'footer.tools.pdf-to-word': 'PDF en Word',
    'footer.tools.word-to-pdf': 'Word en PDF',
    'footer.tools.pdf-to-excel': 'PDF en Excel',
    'footer.tools.compress-pdf': 'Compresser PDF',
    'footer.company.title': 'Entreprise',
    'footer.legal.title': 'Légal',
    'footer.legal.privacy': 'Politique de Confidentialité',
    'footer.legal.terms': 'Conditions d\'Utilisation',
    'footer.legal.cookies': 'Politique des Cookies',
    'footer.copyright': '© {year} PDFStation. Tous droits réservés.',
    
    // Legal pages
    'legal.back': 'Retour',
    'legal.last.updated': 'Dernière mise à jour:',
    
    // Privacy Policy
    'privacy.title': 'Politique de Confidentialité',
    'privacy.intro.title': '1. Introduction',
    'privacy.intro.text': 'PDFStation ("nous", "notre" ou "nos") s\'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre service de conversion de fichiers.',
    'privacy.collect.title': '2. Informations que Nous Collectons',
    'privacy.collect.intro': 'Nous collectons des informations minimales nécessaires pour fournir notre service. Aucun compte ou inscription n\'est requis. Nous collectons:',
    'privacy.collect.item1': 'Fichiers que vous téléchargez pour conversion (stockés temporairement et supprimés automatiquement dans les 24 heures)',
    'privacy.collect.item2': 'Adresse IP et informations sur l\'appareil pour la limitation de débit et la sécurité (éphémères, non stockées en permanence)',
    'privacy.collect.item3': 'Données d\'utilisation et analyses pour améliorer notre service (anonymisées)',
    'privacy.collect.item4': 'Données de cookies pour les analyses et la publicité (voir la Politique des Cookies)',
    'privacy.use.title': '3. Comment Nous Utilisons Vos Informations',
    'privacy.use.intro': 'Nous utilisons les informations que nous collectons pour:',
    'privacy.use.item1': 'Traiter et convertir vos fichiers (traitement temporaire uniquement)',
    'privacy.use.item2': 'Fournir et maintenir notre service gratuit',
    'privacy.use.item3': 'Mettre en œuvre la limitation de débit pour prévenir les abus (basée sur l\'IP)',
    'privacy.use.item4': 'Afficher des publicités pertinentes (via Google Ads) pour soutenir notre service gratuit',
    'privacy.use.item5': 'Améliorer notre service et l\'expérience utilisateur grâce à des analyses anonymisées',
    'privacy.security.title': '4. Sécurité des Données',
    'privacy.security.intro': 'Nous mettons en œuvre des mesures de sécurité standard de l\'industrie pour protéger vos fichiers:',
    'privacy.security.item1': 'Chiffrement SSL pour tous les transferts de données',
    'privacy.security.item2': 'Suppression automatique des fichiers dans les 24 heures suivant la conversion',
    'privacy.security.item3': 'Infrastructure de serveur sécurisée',
    'privacy.security.item4': 'Aucun stockage permanent de vos fichiers',
    'privacy.retention.title': '5. Conservation des Données',
    'privacy.retention.text': 'Vos fichiers téléchargés sont automatiquement supprimés de nos serveurs dans les 24 heures suivant la conversion. Nous ne conservons pas vos fichiers de manière permanente. Les journaux d\'adresse IP sont conservés uniquement à des fins de limitation de débit et sont automatiquement purgés après 5 minutes. Nous ne stockons pas d\'informations de compte car les comptes ne sont pas nécessaires ou disponibles.',
    'privacy.thirdparty.title': '6. Services Tiers et Publicité',
    'privacy.thirdparty.text1': 'PDFStation est soutenu par Google Ads. Nous utilisons les services publicitaires de Google pour afficher des publicités pertinentes, ce qui nous aide à fournir le service gratuitement. Google peut utiliser des cookies et des technologies similaires pour diffuser des publicités personnalisées basées sur votre activité de navigation. Ces services sont liés par leurs propres politiques de confidentialité et n\'ont pas accès à vos fichiers téléchargés.',
    'privacy.thirdparty.text2': 'Nous utilisons également des services d\'analyse tiers pour comprendre comment les visiteurs utilisent notre site web. Ces services collectent des données d\'utilisation anonymisées et n\'ont pas accès à vos fichiers téléchargés.',
    'privacy.rights.title': '7. Vos Droits',
    'privacy.rights.intro': 'Étant donné que PDFStation ne nécessite pas de comptes, vous avez le droit de:',
    'privacy.rights.item1': 'Utiliser notre service de manière anonyme sans fournir d\'informations personnelles',
    'privacy.rights.item2': 'Contrôler les paramètres de cookies via votre navigateur',
    'privacy.rights.item3': 'Vous désinscrire de la publicité personnalisée via les paramètres Google Ads',
    'privacy.rights.item4': 'Demander des informations sur les données que nous collectons (minimales: IP pour la limitation de débit, cookies pour les publicités/analyses)',
    'privacy.contact.title': '8. Contactez-Nous',
    'privacy.contact.text': 'Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter via notre site web.',
    
    // Terms of Service
    'terms.title': 'Conditions d\'Utilisation',
    'terms.accept.title': '1. Acceptation des Conditions',
    'terms.accept.text': 'En accédant et en utilisant PDFStation, vous acceptez et acceptez d\'être lié par les termes et dispositions de cet accord. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre service.',
    'terms.service.title': '2. Description du Service',
    'terms.service.text1': 'PDFStation fournit un service gratuit de conversion de fichiers en ligne. Aucune inscription, connexion ou compte n\'est requis. Nous permettons aux utilisateurs de convertir des fichiers entre divers formats, notamment PDF, Word, Excel et formats d\'image. Notre service est gratuit pour toujours, soutenu par Google Ads, avec une limite de taille de fichier de 100MB par fichier.',
    'terms.service.text2': 'Pour prévenir les abus, nous mettons en œuvre une limitation de débit basée sur l\'IP (maximum 5 téléchargements par adresse IP toutes les 5 minutes). Si vous dépassez cette limite, vous recevrez une erreur 429 et devrez attendre avant de télécharger à nouveau.',
    'terms.responsibilities.title': '3. Responsabilités de l\'Utilisateur',
    'terms.responsibilities.intro': 'Vous acceptez de:',
    'terms.responsibilities.item1': 'Utiliser le service uniquement à des fins légales',
    'terms.responsibilities.item2': 'Ne pas télécharger de fichiers contenant du code malveillant, des virus ou du contenu illégal',
    'terms.responsibilities.item3': 'Respecter les droits de propriété intellectuelle',
    'terms.responsibilities.item4': 'Ne pas tenter d\'abuser ou de surcharger nos systèmes',
    'terms.responsibilities.item5': 'Ne pas utiliser le service à des fins de revente commerciale sans autorisation',
    'terms.limitations.title': '4. Limitations de Taille et Format de Fichier',
    'terms.limitations.text': 'Notre service prend en charge les fichiers jusqu\'à 100MB. Nous prenons en charge divers formats de fichiers comme indiqué sur notre site web. Nous nous réservons le droit de modifier ces limitations à tout moment.',
    'terms.data.title': '5. Données et Confidentialité',
    'terms.data.text': 'Vos fichiers sont traités en toute sécurité et supprimés automatiquement dans les 24 heures. Nous ne stockons pas vos fichiers de manière permanente. Veuillez consulter notre Politique de Confidentialité pour plus d\'informations.',
    'terms.availability.title': '6. Disponibilité du Service',
    'terms.availability.text': 'Nous nous efforçons de fournir un service fiable mais ne garantissons pas un accès ininterrompu. Nous pouvons effectuer une maintenance, des mises à jour ou des modifications qui affectent temporairement la disponibilité du service.',
    'terms.disclaimer.title': '7. Avertissement sur les Garanties',
    'terms.disclaimer.text': 'Le service est fourni "tel quel" sans garanties d\'aucune sorte. Nous ne garantissons pas que les conversions seront parfaites ou sans erreur. Vous utilisez le service à vos propres risques.',
    'terms.liability.title': '8. Limitation de Responsabilité',
    'terms.liability.text': 'PDFStation ne sera pas responsable de tout dommage indirect, accessoire, spécial ou consécutif résultant de votre utilisation du service.',
    'terms.changes.title': '9. Modifications des Conditions',
    'terms.changes.text': 'Nous nous réservons le droit de modifier ces conditions à tout moment. L\'utilisation continue du service après les modifications constitue l\'acceptation des nouvelles conditions.',
    'terms.contact.title': '10. Contact',
    'terms.contact.text': 'Si vous avez des questions concernant ces Conditions d\'Utilisation, veuillez nous contacter via notre site web.',
    
    // Cookie Policy
    'cookie.title': 'Politique des Cookies',
    'cookie.what.title': '1. Qu\'est-ce qu\'un Cookie',
    'cookie.what.text': 'Les cookies sont de petits fichiers texte qui sont placés sur votre appareil lorsque vous visitez un site web. Ils sont largement utilisés pour faire fonctionner les sites web plus efficacement et fournir des informations aux propriétaires de sites web.',
    'cookie.how.title': '2. Comment Nous Utilisons les Cookies',
    'cookie.how.intro': 'PDFStation utilise des cookies aux fins suivantes:',
    'cookie.how.item1': 'Cookies Essentiels: Nécessaires au bon fonctionnement du service, comme maintenir votre session et vos préférences linguistiques',
    'cookie.how.item2': 'Cookies d\'Analyse: Nous aident à comprendre comment les visiteurs utilisent notre site web pour améliorer notre service (données anonymisées)',
    'cookie.how.item3': 'Cookies Publicitaires: Utilisés par Google Ads pour afficher des publicités pertinentes et soutenir notre service gratuit. Ces cookies suivent votre activité de navigation sur les sites pour afficher des publicités personnalisées',
    'cookie.how.item4': 'Cookies de Préférence: Se souviennent de vos paramètres et préférences, comme la sélection de langue',
    'cookie.types.title': '3. Types de Cookies que Nous Utilisons',
    'cookie.types.session': 'Cookies de Session: Cookies temporaires qui sont supprimés lorsque vous fermez votre navigateur. Ceux-ci sont essentiels au fonctionnement du service.',
    'cookie.types.persistent': 'Cookies Persistants: Restent sur votre appareil pendant une période déterminée ou jusqu\'à ce que vous les supprimiez. Nous les utilisons pour nous souvenir de vos préférences.',
    'cookie.thirdparty.title': '4. Cookies Tiers et Google Ads',
    'cookie.thirdparty.intro': 'PDFStation est soutenu par Google Ads. Google définit des cookies sur votre appareil pour:',
    'cookie.thirdparty.item1': 'Afficher des publicités pertinentes basées sur votre historique de navigation',
    'cookie.thirdparty.item2': 'Mesurer les performances et l\'efficacité des publicités',
    'cookie.thirdparty.item3': 'Prévenir la fraude et les abus',
    'cookie.thirdparty.text': 'Nous utilisons également des services d\'analyse (tels que Google Analytics) qui définissent des cookies pour nous aider à comprendre l\'utilisation du site web. Ces tiers ont leurs propres politiques de confidentialité. Vous pouvez vous désinscrire de la publicité personnalisée via les paramètres Google Ads.',
    'cookie.manage.title': '5. Gestion des Cookies',
    'cookie.manage.intro': 'Vous pouvez contrôler et gérer les cookies de diverses manières:',
    'cookie.manage.item1': 'Les paramètres du navigateur vous permettent de refuser ou de supprimer les cookies',
    'cookie.manage.item2': 'Notez que le blocage des cookies essentiels peut affecter la fonctionnalité du site web',
    'cookie.manage.item3': 'Vous pouvez supprimer les cookies de votre navigateur à tout moment',
    'cookie.updates.title': '6. Mises à Jour de cette Politique',
    'cookie.updates.text': 'Nous pouvons mettre à jour cette Politique des Cookies de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.',
    'cookie.contact.title': '7. Contactez-Nous',
    'cookie.contact.text': 'Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter via notre site web.',
    
    // Free messaging
    'free.forever': 'Gratuit pour toujours',
    'free.online': 'Gratuit en ligne',
    'free.converter': 'Convertisseur PDF gratuit',
    'free.tools': 'Outils PDF en ligne gratuits',
    'free.no.signup': 'Aucune inscription requise',
    'free.up.to': 'Jusqu\'à 100MB',
    
    // Error messages
    'error.rate.limit.exceeded': 'Limite de téléchargement atteint pour votre IP. Veuillez réessayer plus tard.',
    'error.rate.limit.retry': 'Veuillez attendre {seconds} secondes avant de réessayer.',
    'error.upload.failed': 'Le téléchargement a échoué. Veuillez réessayer.',
    'error.conversion.failed': 'La conversion a échoué. Veuillez réessayer.',
    'error.conversion.service.unavailable': 'Le service de conversion est temporairement indisponible. Veuillez réessayer plus tard.',
    'error.file.too.large': 'Fichier trop volumineux. La taille maximale autorisée est de 500 Mo.',
    'error.invalid.file': 'Fichier ou paramètres invalides.',
    'error.too.many.requests': 'Trop de conversions depuis votre IP. Veuillez réessayer plus tard.',
    'error.request.timeout': 'Délai d\'attente de la requête dépassé. Veuillez réessayer.',
  },
  it: {
    // Common UI
    'drag.drop': 'Trascina e rilascia i tuoi file qui',
    'click.browse': 'o clicca per cercare nel tuo computer',
    'select.files': 'Seleziona File',
    'convert.to': 'Converti in:',
    'convert': 'Converti',
    'compress': 'Comprimi',
    'merge': 'Unisci',
    'download': 'Scarica',
    'upload.queue': 'Coda di Caricamento',
    'converting': 'Conversione',
    'ready': 'Pronto',
    'completed': 'Completato',
    
    // Homepage Hero
    'home.hero.title': 'Convertitore PDF Online – JPG/PNG in PDF, Word in PDF, Comprimi e Unisci',
    'home.hero.subtitle': 'Convertitore PDF online gratuito e strumenti. Converti immagini, documenti Word, comprimi e unisci PDF all\'istante.',
    'home.hero.description': 'Converti immagini JPG e PNG in PDF, documenti Word in PDF, comprimi file PDF e unisci più PDF in uno. Veloce, sicuro e completamente gratuito fino a 100MB per file. Nessuna registrazione richiesta.',
    'home.hero.cta.choose': 'Scegli file',
    'home.hero.cta.explore': 'Esplora strumenti',
    
    // Trust Section
    'trust.thousands': 'Fidato da migliaia',
    'trust.active.users': 'Utenti attivi in tutto il mondo',
    'trust.no.files': 'Nessun file memorizzato',
    'trust.ssl.encrypted': 'Crittografato SSL',
    'trust.files.converted': 'Più di 10.000 file convertiti',
    'trust.every.month': 'Ogni mese',
    
    // Supported Formats
    'supported.formats.title': 'Formati di File Supportati',
    'supported.formats.description': 'PDFStation supporta i formati PDF, DOCX, JPG e PNG. Converti immagini in PDF, Word in PDF, comprimi e unisci PDF online.',
    
    // Popular Conversions
    'popular.conversions.title': 'Conversioni PDF Popolari',
    'popular.conversions.description': 'Converti immagini JPG e PNG in PDF, documenti Word in PDF, comprimi file PDF e unisci più PDF in un documento.',
    'popular.converters.title': 'Strumenti di Conversione PDF Gratuiti',
    'popular.converters.subtitle': 'Converti immagini in PDF, Word in PDF, comprimi e unisci PDF online gratuitamente',
    'popular.compress.title': 'Comprimi PDF',
    'popular.compress.description': 'Riduci la dimensione del tuo file PDF mantenendo un\'eccellente qualità',
    'popular.compress.cta': 'Clicca per comprimere →',
    'popular.convert.cta': 'Clicca per convertire →',
    'tool.images-to-pdf.name': 'Convertitore JPG/PNG in PDF',
    'tool.images-to-pdf.description': 'Converti immagini JPG e PNG in PDF online gratuitamente. Convertitore rapido e sicuro da immagine a PDF senza filigrane.',
    'tool.word-to-pdf.name': 'Convertitore Word in PDF',
    'tool.word-to-pdf.description': 'Converti documenti Word (DOCX, DOC) in formato PDF online. Convertitore gratuito Word in PDF con output di alta qualità.',
    'tool.pdf-compress.name': 'Comprimi PDF Online',
    'tool.pdf-compress.description': 'Riduci la dimensione dei file PDF online gratuitamente. Comprimi PDF senza perdere qualità. Strumento rapido di compressione PDF.',
    'tool.pdf-merge.name': 'Unisci File PDF Online',
    'tool.pdf-merge.description': 'Combina più file PDF in un documento online. Strumento gratuito di unione PDF. Unisci PDF rapidamente e in sicurezza.',
    
    // Features Grid
    'features.title': 'Perché PDFStation?',
    'features.fast.title': 'Velocissimo',
    'features.fast.description': 'Converti file in secondi con il nostro motore di elaborazione ottimizzato. Gratuito per sempre.',
    'features.secure.title': 'Sicuro e Privato',
    'features.secure.description': 'I tuoi file vengono elaborati in modo sicuro ed eliminati automaticamente dopo la conversione.',
    'features.no.watermarks.title': 'Senza Filigrane',
    'features.no.watermarks.description': 'Ottieni conversioni pulite e professionali senza alcun marchio o filigrana. 100% gratuito.',
    'features.works.everywhere.title': 'Funziona Ovunque',
    'features.works.everywhere.description': 'Accedi a PDFStation da qualsiasi dispositivo, ovunque nel mondo. Nessuna registrazione richiesta.',
    
    // Security & Privacy
    'security.title': 'Sicurezza e Privacy',
    'security.description': 'I tuoi file vengono elaborati in modo sicuro utilizzando la crittografia standard del settore. Tutti i file vengono automaticamente eliminati dai nostri server entro 24 ore dalla conversione. Non condividiamo mai i tuoi dati con terze parti. Gratuito per sempre per le conversioni principali.',
    
    // Upload Box
    'upload.choose.files': 'Scegli file',
    'upload.from.device': 'Dal dispositivo',
    'upload.from.dropbox': 'Da Dropbox',
    'upload.from.google.drive': 'Da Google Drive',
    'upload.from.url': 'Dall\'URL',
    'upload.limit': 'Converti file fino a 100MB. Gratuito per sempre.',
    'upload.cloud.coming.soon': 'Il caricamento cloud arriverà presto. Per ora, carica dal tuo dispositivo.',
    'upload.url.prompt': 'Inserisci l\'URL del file',
    'upload.url.placeholder': 'https://esempio.com/file.pdf',
    'upload.url.submit': 'Aggiungi file',
    'upload.url.cancel': 'Annulla',
    
    // About Page
    'about.title': 'Informazioni su PDFStation',
    'about.subtitle': 'Conversione intelligente di file in un unico posto.',
    'about.paragraph1': 'PDFStation è stato fondato con un obiettivo semplice: rendere la conversione di file il più semplice e accessibile possibile. Capiamo che convertire file tra diversi formati può essere frustrante, soprattutto quando devi farlo rapidamente o non hai il software giusto installato.',
    'about.paragraph2': 'La nostra piattaforma è costruita con tecnologia moderna che garantisce conversioni rapide e affidabili senza compromettere la qualità. Che tu sia uno studente, un professionista o un\'azienda, PDFStation fornisce gli strumenti necessari per lavorare in modo efficiente con i tuoi file. Il meglio di tutto, i nostri strumenti di conversione principali sono gratuiti per sempre.',
    'about.paragraph3': 'Siamo impegnati a mantenere i più alti standard di sicurezza e privacy. I tuoi file vengono elaborati in modo sicuro ed eliminati automaticamente dai nostri server, quindi puoi convertire con fiducia.',
    'about.values.title': 'I Nostri Valori',
    'about.mission.title': 'La Nostra Missione',
    'about.mission.description': 'Rendere la conversione di file semplice, veloce e accessibile a tutti, indipendentemente dall\'esperienza tecnica. Gratuito per sempre.',
    'about.innovation.title': 'Innovazione',
    'about.innovation.description': 'Miglioriamo continuamente la nostra tecnologia per fornire l\'esperienza di conversione più veloce e affidabile.',
    'about.user.focused.title': 'Centrato sull\'Utente',
    'about.user.focused.description': 'Ogni funzionalità che costruiamo è progettata pensando ai nostri utenti, dando priorità alla facilità d\'uso e all\'affidabilità.',
    'about.privacy.first.title': 'Privacy Prima',
    'about.privacy.first.description': 'Crediamo che i tuoi dati ti appartengano. Ecco perché eliminiamo automaticamente tutti i file dopo l\'elaborazione.',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.convert.question': 'Come converto un file?',
    'faq.convert.answer': 'Trascina e rilascia semplicemente il tuo file nella casella di caricamento, seleziona il formato di output desiderato e fai clic su converti. Il tuo file verrà elaborato e sarà pronto per il download in pochi secondi. Gratuito per sempre, fino a 100MB per file.',
    'faq.formats.question': 'Quali formati di file sono supportati?',
    'faq.formats.answer': 'PDFStation supporta i formati PDF, DOCX (Word), JPG e PNG. Puoi convertire immagini JPG e PNG in PDF, documenti Word in PDF, comprimere file PDF e unire più PDF in uno. Tutti gli strumenti sono gratuiti per sempre.',
    'faq.images.question': 'Come converto immagini JPG o PNG in PDF?',
    'faq.images.answer': 'Carica la tua immagine JPG o PNG usando la casella di trascinamento e rilascio e fai clic su converti. La tua immagine verrà convertita in formato PDF all\'istante. Gratuito per sempre, fino a 100MB per file. Nessuna registrazione richiesta.',
    'faq.word.question': 'Come converto documenti Word in PDF?',
    'faq.word.answer': 'Carica il tuo documento Word (formato DOCX o DOC) e fai clic su converti in PDF. Il tuo documento verrà convertito in formato PDF preservando la formattazione. Gratuito per sempre, fino a 100MB per file.',
    'faq.compress.question': 'Come comprimo un file PDF?',
    'faq.compress.answer': 'Carica il tuo file PDF e fai clic su comprimi. Il nostro compressore PDF ridurrà la dimensione del file mantenendo la qualità. Gratuito per sempre, fino a 100MB per file. Nessuna filigrana aggiunta.',
    'faq.merge.question': 'Come unisco più file PDF?',
    'faq.merge.answer': 'Carica due o più file PDF e fai clic su unisci. Tutti i PDF verranno combinati in un unico documento nell\'ordine in cui li hai caricati. Gratuito per sempre, fino a 100MB per file.',
    'faq.security.question': 'I miei dati sono sicuri?',
    'faq.security.answer': 'Sì, assolutamente. Tutti i file vengono elaborati in modo sicuro utilizzando connessioni crittografate. I file vengono automaticamente eliminati dai nostri server dopo la conversione, generalmente entro 24 ore.',
    'faq.size.limit.question': 'Ci sono limiti di dimensione del file?',
    'faq.size.limit.answer': 'Puoi convertire file fino a 100MB per file. PDFStation è gratuito per sempre per le conversioni principali, nessuna registrazione richiesta.',
    'faq.multiple.question': 'Posso convertire più file contemporaneamente?',
    'faq.multiple.answer': 'Sì! Puoi caricare e convertire più file contemporaneamente. Tutte le conversioni sono gratuite per sempre.',
    'faq.account.question': 'Devo creare un account?',
    'faq.account.answer': 'Nessun account è richiesto. PDFStation è completamente gratuito da usare senza registrazione richiesta. Puoi iniziare a convertire file immediatamente.',
    'faq.failure.question': 'Cosa succede se la mia conversione fallisce?',
    'faq.failure.answer': 'Se una conversione fallisce, puoi riprovare senza costi. Il nostro servizio è gratuito per sempre, quindi puoi riprovare tutte le volte che vuoi.',
    'faq.commercial.question': 'Posso usare PDFStation per scopi commerciali?',
    'faq.commercial.answer': 'Sì! PDFStation è gratuito per sempre e può essere utilizzato per scopi personali e commerciali.',
    
    // Tool Page
    'tool.how.to.title': 'Come convertire {inputType} in {outputType}',
    'tool.how.to.step1': 'Carica il tuo file {inputType} usando la casella di trascinamento sopra',
    'tool.how.to.step2': 'Seleziona {outputType} ({format}) come formato di output',
    'tool.how.to.step3': 'Fai clic su converti e attendi che l\'elaborazione sia completata (di solito richiede solo pochi secondi)',
    'tool.how.to.step4': 'Scarica il tuo file {outputType} convertito',
    'tool.why.title': 'Perché convertire {inputType} in {outputType}?',
    'tool.why.reason1': 'Modifica e modifica il tuo contenuto con facilità',
    'tool.why.reason2': 'Compatibile con tutti i principali software e piattaforme',
    'tool.why.reason3': 'Mantieni la formattazione e la struttura durante la conversione',
    'tool.why.reason4': 'Nessuna installazione di software richiesta - funziona nel tuo browser. Gratuito per sempre.',
    'tool.tips.title': 'Suggerimenti per conversioni migliori',
    'tool.tips.tip1': 'Assicurati che il tuo file {inputType} non sia protetto da password',
    'tool.tips.tip2': 'Per la migliore qualità, usa file sorgente ad alta risoluzione',
    'tool.tips.tip3': 'Mantieni le dimensioni dei file sotto 100MB per un elaborazione più veloce',
    'tool.tips.tip4': 'Verifica che il formato del tuo file sia supportato prima di caricarlo',
    'tool.tips.tip5': 'Per documenti complessi, la conversione potrebbe richiedere un po\' più di tempo',
    'tool.formats.title': 'Formati Supportati',
    'tool.formats.input': 'Formati di input:',
    'tool.formats.output': 'Formati di output:',
    'tool.formats.files': 'file',
    'tool.faq.title': 'Domande Frequenti',
    'tool.faq.size.question': 'Quali dimensioni di file sono supportate?',
    'tool.faq.size.answer': 'Puoi convertire file fino a 100MB. PDFStation è gratuito per sempre, nessuna registrazione richiesta.',
    'tool.faq.time.question': 'Quanto tempo richiede la conversione?',
    'tool.faq.time.answer': 'La maggior parte delle conversioni da {inputType} a {outputType} si completano in meno di 30 secondi, a seconda delle dimensioni e della complessità del file.',
    'tool.faq.data.question': 'I miei dati sono sicuri?',
    'tool.faq.data.answer': 'Sì, tutti i file vengono elaborati in modo sicuro utilizzando la crittografia SSL e vengono automaticamente eliminati dai nostri server entro 24 ore dalla conversione.',
    'tool.more.info.title': 'Informazioni Aggiuntive',
    'tool.more.info.paragraph1': 'Il nostro convertitore {toolName} utilizza algoritmi avanzati per garantire una conversione accurata preservando la formattazione e la struttura originali dei tuoi documenti.',
    'tool.more.info.paragraph2': 'Tutte le conversioni vengono eseguite nel cloud, quindi non è necessario installare alcun software. Carica semplicemente il tuo file e scarica il risultato convertito. Gratuito per sempre.',
    'tool.other.popular': 'Altri Strumenti Popolari',
    'category.tools.title': 'Strumenti {category}',
    'category.word': 'Word',
    'category.excel': 'Excel',
    'category.images': 'Immagini',
    'category.pdf': 'PDF',
    'category.compress': 'Comprimi',
    'category.merge': 'Unisci',
    'convert.to.format': 'Converti in {format}:',
    'format.pdf': 'PDF',
    'format.word': 'Word',
    'format.excel': 'Excel',
    'format.jpg': 'JPG',
    'format.png': 'PNG',
    'format.webp': 'WebP',
    'tool.not.found.title': 'Strumento Non Trovato',
    'tool.not.found.description': 'Lo strumento che stai cercando non esiste.',
    'tool.not.found.cta': 'Vai alla Home',
    
    // Login/Signup
    'auth.login.title': 'Accedi',
    'auth.login.description': 'Inserisci le tue credenziali per accedere al tuo account',
    'auth.login.email': 'E-mail',
    'auth.login.password': 'Password',
    'auth.login.submit': 'Accedi',
    'auth.login.submitting': 'Accesso in corso...',
    'auth.login.or': 'Oppure continua con',
    'auth.login.no.account': 'Non hai un account?',
    'auth.login.signup.link': 'Registrati',
    'auth.login.invalid': 'E-mail o password non validi',
    'auth.login.error': 'Si è verificato un errore. Riprova.',
    'auth.login.google.error': 'Accesso con Google fallito',
    'auth.login.facebook.error': 'Accesso con Facebook fallito',
    'auth.disabled.title': 'Account Disabilitati',
    'auth.disabled.message': 'Gli account sono attualmente disabilitati su PDFStation. Tutte le funzionalità sono disponibili senza un account.',
    'auth.disabled.go.home': 'Vai alla Home',
    
    'auth.signup.title': 'Crea Account',
    'auth.signup.description': 'Inserisci le tue informazioni per creare un account',
    'auth.signup.name': 'Nome',
    'auth.signup.name.placeholder': 'Inserisci il tuo nome',
    'auth.signup.email': 'E-mail',
    'auth.signup.email.placeholder': 'Inserisci la tua e-mail',
    'auth.signup.password': 'Password',
    'auth.signup.password.placeholder': 'Inserisci la tua password',
    'auth.signup.submit': 'Crea account',
    'auth.signup.submitting': 'Creazione account...',
    'auth.signup.has.account': 'Hai già un account?',
    'auth.signup.login.link': 'Accedi',
    'auth.signup.error': 'Si è verificato un errore. Riprova.',
    'auth.signup.google.error': 'Registrazione con Google fallita',
    'auth.signup.facebook.error': 'Registrazione con Facebook fallita',
    
    // Navbar
    'nav.home': 'Home',
    'nav.tools': 'Strumenti',
    'nav.faq': 'FAQ',
    'nav.about': 'Chi Siamo',
    'nav.login': 'Accedi',
    'nav.signup': 'Registrati',
    'nav.account': 'Il Mio Account',
    'nav.logout': 'Esci',
    
    // Footer
    'footer.tagline': 'Conversione intelligente di file in un unico posto.',
    'footer.tools.title': 'Strumenti',
    'footer.tools.pdf-to-word': 'PDF in Word',
    'footer.tools.word-to-pdf': 'Word in PDF',
    'footer.tools.pdf-to-excel': 'PDF in Excel',
    'footer.tools.compress-pdf': 'Comprimi PDF',
    'footer.company.title': 'Azienda',
    'footer.legal.title': 'Legale',
    'footer.legal.privacy': 'Informativa sulla Privacy',
    'footer.legal.terms': 'Termini di Servizio',
    'footer.legal.cookies': 'Informativa sui Cookie',
    'footer.copyright': '© {year} PDFStation. Tutti i diritti riservati.',
    
    // Legal pages
    'legal.back': 'Indietro',
    'legal.last.updated': 'Ultimo aggiornamento:',
    
    // Privacy Policy
    'privacy.title': 'Informativa sulla Privacy',
    'privacy.intro.title': '1. Introduzione',
    'privacy.intro.text': 'PDFStation ("noi", "nostro" o "ci") si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi il nostro servizio di conversione file.',
    'privacy.collect.title': '2. Informazioni che Raccogliamo',
    'privacy.collect.intro': 'Raccogliamo informazioni minime necessarie per fornire il nostro servizio. Non è richiesto alcun account o registrazione. Raccogliamo:',
    'privacy.collect.item1': 'File che carichi per la conversione (memorizzati temporaneamente ed eliminati automaticamente entro 24 ore)',
    'privacy.collect.item2': 'Indirizzo IP e informazioni sul dispositivo per limitazione della velocità e sicurezza (effimere, non memorizzate permanentemente)',
    'privacy.collect.item3': 'Dati di utilizzo e analisi per migliorare il nostro servizio (anonimizzati)',
    'privacy.collect.item4': 'Dati dei cookie per analisi e pubblicità (vedi Informativa sui Cookie)',
    'privacy.use.title': '3. Come Utilizziamo le Tue Informazioni',
    'privacy.use.intro': 'Utilizziamo le informazioni che raccogliamo per:',
    'privacy.use.item1': 'Elaborare e convertire i tuoi file (solo elaborazione temporanea)',
    'privacy.use.item2': 'Fornire e mantenere il nostro servizio gratuito',
    'privacy.use.item3': 'Implementare la limitazione della velocità per prevenire abusi (basata su IP)',
    'privacy.use.item4': 'Visualizzare annunci pertinenti (tramite Google Ads) per supportare il nostro servizio gratuito',
    'privacy.use.item5': 'Migliorare il nostro servizio e l\'esperienza utente attraverso analisi anonimizzate',
    'privacy.security.title': '4. Sicurezza dei Dati',
    'privacy.security.intro': 'Implementiamo misure di sicurezza standard del settore per proteggere i tuoi file:',
    'privacy.security.item1': 'Crittografia SSL per tutti i trasferimenti di dati',
    'privacy.security.item2': 'Eliminazione automatica dei file entro 24 ore dalla conversione',
    'privacy.security.item3': 'Infrastruttura server sicura',
    'privacy.security.item4': 'Nessun archivio permanente dei tuoi file',
    'privacy.retention.title': '5. Conservazione dei Dati',
    'privacy.retention.text': 'I tuoi file caricati vengono eliminati automaticamente dai nostri server entro 24 ore dalla conversione. Non conserviamo i tuoi file permanentemente. I log degli indirizzi IP vengono conservati solo per scopi di limitazione della velocità e vengono automaticamente eliminati dopo 5 minuti. Non memorizziamo informazioni sull\'account poiché gli account non sono necessari o disponibili.',
    'privacy.thirdparty.title': '6. Servizi di Terze Parti e Pubblicità',
    'privacy.thirdparty.text1': 'PDFStation è supportato da Google Ads. Utilizziamo i servizi pubblicitari di Google per visualizzare annunci pertinenti, il che ci aiuta a fornire il servizio gratuitamente. Google può utilizzare cookie e tecnologie simili per servire annunci personalizzati basati sulla tua attività di navigazione. Questi servizi sono vincolati dalle proprie politiche sulla privacy e non hanno accesso ai tuoi file caricati.',
    'privacy.thirdparty.text2': 'Utilizziamo anche servizi di analisi di terze parti per capire come i visitatori utilizzano il nostro sito web. Questi servizi raccolgono dati di utilizzo anonimizzati e non hanno accesso ai tuoi file caricati.',
    'privacy.rights.title': '7. I Tuoi Diritti',
    'privacy.rights.intro': 'Poiché PDFStation non richiede account, hai il diritto di:',
    'privacy.rights.item1': 'Utilizzare il nostro servizio in modo anonimo senza fornire informazioni personali',
    'privacy.rights.item2': 'Controllare le impostazioni dei cookie tramite il tuo browser',
    'privacy.rights.item3': 'Rinunciare alla pubblicità personalizzata tramite le impostazioni di Google Ads',
    'privacy.rights.item4': 'Richiedere informazioni sui dati che raccogliamo (minimi: IP per limitazione della velocità, cookie per annunci/analisi)',
    'privacy.contact.title': '8. Contattaci',
    'privacy.contact.text': 'Se hai domande su questa Informativa sulla Privacy, contattaci tramite il nostro sito web.',
    
    // Terms of Service
    'terms.title': 'Termini di Servizio',
    'terms.accept.title': '1. Accettazione dei Termini',
    'terms.accept.text': 'Accedendo e utilizzando PDFStation, accetti e accetti di essere vincolato dai termini e dalle disposizioni di questo accordo. Se non sei d\'accordo con questi termini, per favore non utilizzare il nostro servizio.',
    'terms.service.title': '2. Descrizione del Servizio',
    'terms.service.text1': 'PDFStation fornisce un servizio gratuito di conversione file online. Non è richiesta registrazione, accesso o account. Consentiamo agli utenti di convertire file tra vari formati, inclusi PDF, Word, Excel e formati immagine. Il nostro servizio è gratuito per sempre, supportato da Google Ads, con un limite di dimensione file di 100MB per file.',
    'terms.service.text2': 'Per prevenire abusi, implementiamo una limitazione della velocità basata su IP (massimo 5 caricamenti per indirizzo IP ogni 5 minuti). Se superi questo limite, riceverai un errore 429 e dovrai attendere prima di caricare nuovamente.',
    'terms.responsibilities.title': '3. Responsabilità dell\'Utente',
    'terms.responsibilities.intro': 'Accetti di:',
    'terms.responsibilities.item1': 'Utilizzare il servizio solo per scopi legali',
    'terms.responsibilities.item2': 'Non caricare file contenenti codice dannoso, virus o contenuti illegali',
    'terms.responsibilities.item3': 'Rispettare i diritti di proprietà intellettuale',
    'terms.responsibilities.item4': 'Non tentare di abusare o sovraccaricare i nostri sistemi',
    'terms.responsibilities.item5': 'Non utilizzare il servizio per scopi commerciali di rivendita senza autorizzazione',
    'terms.limitations.title': '4. Limitazioni di Dimensione e Formato File',
    'terms.limitations.text': 'Il nostro servizio supporta file fino a 100MB. Supportiamo vari formati di file come elencato sul nostro sito web. Ci riserviamo il diritto di modificare queste limitazioni in qualsiasi momento.',
    'terms.data.title': '5. Dati e Privacy',
    'terms.data.text': 'I tuoi file vengono elaborati in modo sicuro ed eliminati automaticamente entro 24 ore. Non archiviamo i tuoi file permanentemente. Consulta la nostra Informativa sulla Privacy per maggiori informazioni.',
    'terms.availability.title': '6. Disponibilità del Servizio',
    'terms.availability.text': 'Ci sforziamo di fornire un servizio affidabile ma non garantiamo l\'accesso ininterrotto. Possiamo eseguire manutenzione, aggiornamenti o modifiche che influenzano temporaneamente la disponibilità del servizio.',
    'terms.disclaimer.title': '7. Esclusione di Garanzie',
    'terms.disclaimer.text': 'Il servizio è fornito "così com\'è" senza garanzie di alcun tipo. Non garantiamo che le conversioni saranno perfette o prive di errori. Utilizzi il servizio a tuo rischio.',
    'terms.liability.title': '8. Limitazione di Responsabilità',
    'terms.liability.text': 'PDFStation non sarà responsabile per eventuali danni indiretti, incidentali, speciali o consequenziali derivanti dall\'utilizzo del servizio.',
    'terms.changes.title': '9. Modifiche ai Termini',
    'terms.changes.text': 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. L\'uso continuato del servizio dopo le modifiche costituisce l\'accettazione dei nuovi termini.',
    'terms.contact.title': '10. Contatto',
    'terms.contact.text': 'Se hai domande su questi Termini di Servizio, contattaci tramite il nostro sito web.',
    
    // Cookie Policy
    'cookie.title': 'Informativa sui Cookie',
    'cookie.what.title': '1. Cosa Sono i Cookie',
    'cookie.what.text': 'I cookie sono piccoli file di testo che vengono posizionati sul tuo dispositivo quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web in modo più efficiente e fornire informazioni ai proprietari dei siti web.',
    'cookie.how.title': '2. Come Utilizziamo i Cookie',
    'cookie.how.intro': 'PDFStation utilizza i cookie per i seguenti scopi:',
    'cookie.how.item1': 'Cookie Essenziali: Necessari per il corretto funzionamento del servizio, come mantenere la tua sessione e le preferenze linguistiche',
    'cookie.how.item2': 'Cookie di Analisi: Ci aiutano a capire come i visitatori utilizzano il nostro sito web per migliorare il nostro servizio (dati anonimizzati)',
    'cookie.how.item3': 'Cookie Pubblicitari: Utilizzati da Google Ads per visualizzare annunci pertinenti e supportare il nostro servizio gratuito. Questi cookie tracciano la tua attività di navigazione sui siti per mostrare annunci personalizzati',
    'cookie.how.item4': 'Cookie di Preferenza: Ricordano le tue impostazioni e preferenze, come la selezione della lingua',
    'cookie.types.title': '3. Tipi di Cookie che Utilizziamo',
    'cookie.types.session': 'Cookie di Sessione: Cookie temporanei che vengono eliminati quando chiudi il browser. Questi sono essenziali per il funzionamento del servizio.',
    'cookie.types.persistent': 'Cookie Persistenti: Rimangono sul tuo dispositivo per un periodo determinato o fino a quando non li elimini. Li utilizziamo per ricordare le tue preferenze.',
    'cookie.thirdparty.title': '4. Cookie di Terze Parti e Google Ads',
    'cookie.thirdparty.intro': 'PDFStation è supportato da Google Ads. Google imposta cookie sul tuo dispositivo per:',
    'cookie.thirdparty.item1': 'Visualizzare annunci pertinenti basati sulla tua cronologia di navigazione',
    'cookie.thirdparty.item2': 'Misurare le prestazioni e l\'efficacia degli annunci',
    'cookie.thirdparty.item3': 'Prevenire frodi e abusi',
    'cookie.thirdparty.text': 'Utilizziamo anche servizi di analisi (come Google Analytics) che impostano cookie per aiutarci a capire l\'utilizzo del sito web. Queste terze parti hanno le proprie politiche sulla privacy. Puoi rinunciare alla pubblicità personalizzata tramite le impostazioni di Google Ads.',
    'cookie.manage.title': '5. Gestione dei Cookie',
    'cookie.manage.intro': 'Puoi controllare e gestire i cookie in vari modi:',
    'cookie.manage.item1': 'Le impostazioni del browser ti consentono di rifiutare o eliminare i cookie',
    'cookie.manage.item2': 'Nota che il blocco dei cookie essenziali può influenzare la funzionalità del sito web',
    'cookie.manage.item3': 'Puoi eliminare i cookie dal tuo browser in qualsiasi momento',
    'cookie.updates.title': '6. Aggiornamenti a Questa Informativa',
    'cookie.updates.text': 'Possiamo aggiornare questa Informativa sui Cookie di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova informativa su questa pagina.',
    'cookie.contact.title': '7. Contattaci',
    'cookie.contact.text': 'Se hai domande sul nostro utilizzo dei cookie, contattaci tramite il nostro sito web.',
    
    // Free messaging
    'free.forever': 'Gratuito per sempre',
    'free.online': 'Gratuito online',
    'free.converter': 'Convertitore PDF gratuito',
    'free.tools': 'Strumenti PDF online gratuiti',
    'free.no.signup': 'Nessuna registrazione richiesta',
    'free.up.to': 'Fino a 100MB',
    
    // Error messages
    'error.rate.limit.exceeded': 'Limite di caricamento raggiunto per il tuo IP. Riprova più tardi.',
    'error.rate.limit.retry': 'Attendi {seconds} secondi prima di riprovare.',
    'error.upload.failed': 'Caricamento fallito. Riprova.',
    'error.conversion.failed': 'Conversione fallita. Riprova.',
    'error.conversion.service.unavailable': 'Servizio di conversione temporaneamente non disponibile. Riprova più tardi.',
    'error.file.too.large': 'File troppo grande. La dimensione massima consentita è 100MB.',
    'error.invalid.file': 'File o parametri non validi.',
    'error.too.many.requests': 'Troppe conversioni dal tuo IP. Riprova più tardi.',
    'error.request.timeout': 'Timeout della richiesta. Riprova.',
  },
};

export function getTranslation(language: Language, key: keyof Translations, params?: Record<string, string>): string {
  const translation = translations[language]?.[key] || translations.en[key] || key;
  
  if (params) {
    return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey] || match;
    });
  }
  
  return translation;
}

export default translations;

