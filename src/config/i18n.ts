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
  
  // Common Use Cases
  'home.useCases.title': string;
  'home.useCases.wordToPdf.title': string;
  'home.useCases.wordToPdf.description': string;
  'home.useCases.wordToPdf.cta': string;
  'home.useCases.imagesToPdf.title': string;
  'home.useCases.imagesToPdf.description': string;
  'home.useCases.imagesToPdf.cta': string;
  'home.useCases.compressPdf.title': string;
  'home.useCases.compressPdf.description': string;
  'home.useCases.compressPdf.cta': string;
  'home.useCases.mergePdf.title': string;
  'home.useCases.mergePdf.description': string;
  'home.useCases.mergePdf.cta': string;
  
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
  'about.paragraph4': string;
  'about.contact.link.text': string;
  'about.contact.link.label': string;
  'about.values.title': string;
  'about.mission.title': string;
  'about.mission.description': string;
  'about.innovation.title': string;
  'about.innovation.description': string;
  'about.user.focused.title': string;
  'about.user.focused.description': string;
  'about.privacy.first.title': string;
  'about.privacy.first.description': string;
  
  // Contact Page
  'contact.title': string;
  'contact.subtitle': string;
  'contact.email.title': string;
  'contact.email.description': string;
  'contact.bug.title': string;
  'contact.bug.description': string;
  'contact.feature.title': string;
  'contact.feature.description': string;
  'contact.translation.title': string;
  'contact.translation.description': string;
  'contact.inquiry.title': string;
  'contact.inquiry.description': string;
  'contact.response.title': string;
  'contact.response.paragraph1': string;
  'contact.response.paragraph2': string;
  
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
  'tool.editorial.howItWorks': string;
  'tool.editorial.qualityPrivacy': string;
  'tool.editorial.faq': string;
  // Editorial content for tools
  'tool.editorial.images-to-pdf.introP1': string;
  'tool.editorial.images-to-pdf.introP2': string;
  'tool.editorial.images-to-pdf.howItWorks.step1': string;
  'tool.editorial.images-to-pdf.howItWorks.step2': string;
  'tool.editorial.images-to-pdf.howItWorks.step3': string;
  'tool.editorial.images-to-pdf.quality.bullet1': string;
  'tool.editorial.images-to-pdf.quality.bullet2': string;
  'tool.editorial.images-to-pdf.quality.bullet3': string;
  'tool.editorial.images-to-pdf.faq1.q': string;
  'tool.editorial.images-to-pdf.faq1.a': string;
  'tool.editorial.images-to-pdf.faq2.q': string;
  'tool.editorial.images-to-pdf.faq2.a': string;
  'tool.editorial.images-to-pdf.faq3.q': string;
  'tool.editorial.images-to-pdf.faq3.a': string;
  'tool.editorial.word-to-pdf.introP1': string;
  'tool.editorial.word-to-pdf.introP2': string;
  'tool.editorial.word-to-pdf.howItWorks.step1': string;
  'tool.editorial.word-to-pdf.howItWorks.step2': string;
  'tool.editorial.word-to-pdf.howItWorks.step3': string;
  'tool.editorial.word-to-pdf.quality.bullet1': string;
  'tool.editorial.word-to-pdf.quality.bullet2': string;
  'tool.editorial.word-to-pdf.quality.bullet3': string;
  'tool.editorial.word-to-pdf.faq1.q': string;
  'tool.editorial.word-to-pdf.faq1.a': string;
  'tool.editorial.word-to-pdf.faq2.q': string;
  'tool.editorial.word-to-pdf.faq2.a': string;
  'tool.editorial.word-to-pdf.faq3.q': string;
  'tool.editorial.word-to-pdf.faq3.a': string;
  'tool.editorial.pdf-compress.introP1': string;
  'tool.editorial.pdf-compress.introP2': string;
  'tool.editorial.pdf-compress.howItWorks.step1': string;
  'tool.editorial.pdf-compress.howItWorks.step2': string;
  'tool.editorial.pdf-compress.howItWorks.step3': string;
  'tool.editorial.pdf-compress.quality.bullet1': string;
  'tool.editorial.pdf-compress.quality.bullet2': string;
  'tool.editorial.pdf-compress.quality.bullet3': string;
  'tool.editorial.pdf-compress.faq1.q': string;
  'tool.editorial.pdf-compress.faq1.a': string;
  'tool.editorial.pdf-compress.faq2.q': string;
  'tool.editorial.pdf-compress.faq2.a': string;
  'tool.editorial.pdf-compress.faq3.q': string;
  'tool.editorial.pdf-compress.faq3.a': string;
  'tool.editorial.pdf-merge.introP1': string;
  'tool.editorial.pdf-merge.introP2': string;
  'tool.editorial.pdf-merge.howItWorks.step1': string;
  'tool.editorial.pdf-merge.howItWorks.step2': string;
  'tool.editorial.pdf-merge.howItWorks.step3': string;
  'tool.editorial.pdf-merge.quality.bullet1': string;
  'tool.editorial.pdf-merge.quality.bullet2': string;
  'tool.editorial.pdf-merge.quality.bullet3': string;
  'tool.editorial.pdf-merge.faq1.q': string;
  'tool.editorial.pdf-merge.faq1.a': string;
  'tool.editorial.pdf-merge.faq2.q': string;
  'tool.editorial.pdf-merge.faq2.a': string;
  'tool.editorial.pdf-merge.faq3.q': string;
  'tool.editorial.pdf-merge.faq3.a': string;
  'tool.faq.size.question': string;
  'tool.faq.size.answer': string;
  'tool.faq.time.question': string;
  'tool.faq.time.answer': string;
  'tool.faq.data.question': string;
  'tool.faq.data.answer': string;
  'tool.more.info.title': string;
  'tool.more.info.paragraph1': string;
  'tool.more.info.paragraph2': string;
  'tool.nav.images-to-pdf': string;
  'tool.nav.word-to-pdf': string;
  'tool.nav.compress': string;
  'tool.nav.merge': string;
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
  'nav.contact': string;
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
  
  // HomePage new sections
  'home.what.title': string;
  'home.what.paragraph1': string;
  'home.what.paragraph2': string;
  'home.what.paragraph3': string;
  'home.why.title': string;
  'home.why.intro': string;
  'home.why.noInstallation.title': string;
  'home.why.noInstallation.body': string;
  'home.why.worksAnyDevice.title': string;
  'home.why.worksAnyDevice.body': string;
  'home.why.privacy.title': string;
  'home.why.privacy.body': string;
  'home.why.speed.title': string;
  'home.why.speed.body': string;
  'home.why.upToDate.title': string;
  'home.why.upToDate.body': string;
  'home.why.free.title': string;
  'home.why.free.body': string;
  'home.filesHandled.title': string;
  'home.filesHandled.intro': string;
  'home.filesHandled.secureUpload.title': string;
  'home.filesHandled.secureUpload.body': string;
  'home.filesHandled.temporaryProcessing.title': string;
  'home.filesHandled.temporaryProcessing.body': string;
  'home.filesHandled.automaticDeletion.title': string;
  'home.filesHandled.automaticDeletion.body': string;
  'home.filesHandled.noManualInspection.title': string;
  'home.filesHandled.noManualInspection.body': string;
  'home.filesHandled.noSharing.title': string;
  'home.filesHandled.noSharing.body': string;
  'home.filesHandled.privacyLink': string;
  'home.filesHandled.privacyLink.text': string;
  'home.filesHandled.privacyLink.label': string;
  'home.faq.title': string;
  'home.faq.q1.question': string;
  'home.faq.q1.answer': string;
  'home.faq.q2.question': string;
  'home.faq.q2.answer': string;
  'home.faq.q3.question': string;
  'home.faq.q3.answer': string;
  'home.faq.q4.question': string;
  'home.faq.q4.answer': string;
  'home.faq.q5.question': string;
  'home.faq.q5.answer': string;
  'home.faq.viewAll': string;
  
  // Privacy Policy new sections
  'privacy.new.intro.title': string;
  'privacy.new.intro.text': string;
  'privacy.new.files.title': string;
  'privacy.new.files.intro': string;
  'privacy.new.files.item1': string;
  'privacy.new.files.item2': string;
  'privacy.new.files.item3': string;
  'privacy.new.files.item4': string;
  'privacy.new.usage.title': string;
  'privacy.new.usage.intro': string;
  'privacy.new.usage.item1': string;
  'privacy.new.usage.item2': string;
  'privacy.new.usage.item3': string;
  'privacy.new.usage.item4': string;
  'privacy.new.usage.item5': string;
  'privacy.new.cookies.title': string;
  'privacy.new.cookies.intro': string;
  'privacy.new.cookies.item1': string;
  'privacy.new.cookies.item2': string;
  'privacy.new.cookies.item3': string;
  'privacy.new.cookies.item4': string;
  'privacy.new.advertising.title': string;
  'privacy.new.advertising.text': string;
  'privacy.new.personal.title': string;
  'privacy.new.personal.text': string;
  'privacy.new.retention.title': string;
  'privacy.new.retention.text': string;
  'privacy.new.rights.title': string;
  'privacy.new.rights.intro': string;
  'privacy.new.rights.item1': string;
  'privacy.new.rights.item2': string;
  'privacy.new.rights.item3': string;
  'privacy.new.rights.item4': string;
  'privacy.new.changes.title': string;
  'privacy.new.changes.text': string;
  'privacy.new.contact.title': string;
  'privacy.new.contact.text': string;
  'privacy.new.contact.email': string;
  
  // Tool page detailed explanations
  'tool.images-to-pdf.detail.title': string;
  'tool.images-to-pdf.detail.paragraph1': string;
  'tool.images-to-pdf.detail.paragraph2': string;
  'tool.images-to-pdf.detail.paragraph3': string;
  'tool.word-to-pdf.detail.title': string;
  'tool.word-to-pdf.detail.paragraph1': string;
  'tool.word-to-pdf.detail.paragraph2': string;
  'tool.word-to-pdf.detail.paragraph3': string;
  'tool.pdf-compress.detail.title': string;
  'tool.pdf-compress.detail.paragraph1': string;
  'tool.pdf-compress.detail.paragraph2': string;
  'tool.pdf-compress.detail.paragraph3': string;
  'tool.pdf-merge.detail.title': string;
  'tool.pdf-merge.detail.paragraph1': string;
  'tool.pdf-merge.detail.paragraph2': string;
  'tool.pdf-merge.detail.paragraph3': string;
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
    'home.hero.title': 'Free online PDF converter and tools. Convert images, Word documents, compress and merge PDFs instantly.',
    'home.hero.subtitle': 'What is PDFStation?',
    'home.hero.description': 'PDFStation is a free, secure online platform for converting and managing documents. Convert images to PDF, Word documents to PDF, compress large files, and merge multiple PDFs—all without installing software or creating an account. Our mission is to make file conversion simple, fast, and accessible to everyone. All tools are free forever, supported by ads, with a 100MB file size limit per file.',
    'home.hero.cta.choose': 'Choose files',
    'home.hero.cta.explore': 'Explore tools',
    
    // Common Use Cases
    'home.useCases.title': 'Common Use Cases',
    'home.useCases.wordToPdf.title': 'Convert Word to PDF',
    'home.useCases.wordToPdf.description': 'Need to share a resume or document? Convert Word files to PDF to ensure consistent formatting across devices.',
    'home.useCases.wordToPdf.cta': 'Try Word to PDF →',
    'home.useCases.imagesToPdf.title': 'Convert Images to PDF',
    'home.useCases.imagesToPdf.description': 'Turn photos, scanned receipts, or multiple images into a single PDF document. Perfect for organizing and sharing.',
    'home.useCases.imagesToPdf.cta': 'Try JPG/PNG to PDF →',
    'home.useCases.compressPdf.title': 'Compress PDF Files',
    'home.useCases.compressPdf.description': 'Reduce PDF file size without significant quality loss. Great for emailing large documents or saving storage space.',
    'home.useCases.compressPdf.cta': 'Try PDF Compressor →',
    'home.useCases.mergePdf.title': 'Merge Multiple PDFs',
    'home.useCases.mergePdf.description': 'Combine multiple PDF files into one document. Ideal for bundling contracts, reports, or project documents.',
    'home.useCases.mergePdf.cta': 'Try PDF Merger →',
    
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
    'about.paragraph1': 'PDFStation is a free online platform for converting and managing documents in a simple and secure way. Our goal is to make everyday file tasks – like converting images to PDF, turning Word documents into PDF, compressing large files, and merging multiple PDFs – fast, intuitive, and accessible from any device.',
    'about.paragraph2': 'PDFStation is an independent project created and maintained by Celso Silva, currently based in Canada. The idea came from a simple need: having a clean, ad-light, no-nonsense tool to handle files without installing heavy desktop software.',
    'about.paragraph3': 'We focus on simplicity, security, and performance. No complicated menus, just the tools you need. Files are processed only for the time needed to convert or compress, then removed automatically. Conversions are optimized so you don\'t waste time waiting.',
    'about.paragraph4': 'The platform is constantly evolving, and new tools and improvements are added over time based on real usage and feedback. If you have suggestions or find any issues, you\'re always welcome to reach out through our',
    'about.contact.link.text': 'contact page',
    'about.contact.link.label': 'contact page',
    'about.values.title': 'Our Values',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'We\'d love to hear from you. Get in touch with any questions, suggestions, or feedback.',
    'contact.email.title': 'Email Us',
    'contact.email.description': 'If you have questions, suggestions, or feedback about PDFStation, you can reach us by email:',
    'contact.bug.title': 'Report a Bug',
    'contact.bug.description': 'Found an issue with file conversion or noticed something not working as expected? Let us know and we\'ll fix it as soon as possible.',
    'contact.feature.title': 'Suggest a Feature',
    'contact.feature.description': 'Have an idea for a new tool or improvement? We\'re always looking to make PDFStation better based on user feedback.',
    'contact.translation.title': 'Translation Fix',
    'contact.translation.description': 'Spotted a typo or found a translation that doesn\'t make sense? Help us improve the multilingual experience.',
    'contact.inquiry.title': 'General Inquiry',
    'contact.inquiry.description': 'Have a question about how PDFStation works, our privacy practices, or anything else? We\'re here to help.',
    'contact.response.title': 'Response Time',
    'contact.response.paragraph1': 'We read all messages and do our best to reply as soon as possible. Typically, you can expect a response within 24-48 hours during business days.',
    'contact.response.paragraph2': 'For urgent matters related to file conversion issues or security concerns, please mention "URGENT" in your subject line, and we\'ll prioritize your message.',
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
    'tool.editorial.howItWorks': 'How it works',
    'tool.editorial.qualityPrivacy': 'Quality & privacy',
    'tool.editorial.faq': 'Frequently asked questions',
    // Editorial content - images-to-pdf
    'tool.editorial.images-to-pdf.introP1': 'Combine one or multiple JPG images into a single PDF, ideal for printing or sharing as one file.',
    'tool.editorial.images-to-pdf.introP2': 'Great for scanned receipts, handwritten notes, or photo-based documents you want in a standard format.',
    'tool.editorial.images-to-pdf.howItWorks.step1': 'Upload one or more JPG images.',
    'tool.editorial.images-to-pdf.howItWorks.step2': 'Arrange order if available.',
    'tool.editorial.images-to-pdf.howItWorks.step3': 'Download a single PDF.',
    'tool.editorial.images-to-pdf.quality.bullet1': 'Image quality depends on the original photos.',
    'tool.editorial.images-to-pdf.quality.bullet2': 'PDFs can be optimized for size if compression is enabled.',
    'tool.editorial.images-to-pdf.quality.bullet3': 'Files are processed automatically; ownership stays with you.',
    'tool.editorial.images-to-pdf.faq1.q': 'Can I merge multiple images into one PDF?',
    'tool.editorial.images-to-pdf.faq1.a': 'Yes—upload multiple JPGs and we\'ll assemble them.',
    'tool.editorial.images-to-pdf.faq2.q': 'Will it keep the same image quality?',
    'tool.editorial.images-to-pdf.faq2.a': 'It will be close to the original; some compression may apply based on settings.',
    'tool.editorial.images-to-pdf.faq3.q': 'Can I add margins?',
    'tool.editorial.images-to-pdf.faq3.a': 'If supported, adjust page fit/scale; otherwise you can print with margins from your viewer.',
    // Editorial content - word-to-pdf
    'tool.editorial.word-to-pdf.introP1': 'Turn your Word document into a clean PDF that looks consistent on any device.',
    'tool.editorial.word-to-pdf.introP2': 'Perfect for sharing resumes, proposals, and documents that should not change formatting when opened elsewhere.',
    'tool.editorial.word-to-pdf.howItWorks.step1': 'Upload your .doc or .docx file.',
    'tool.editorial.word-to-pdf.howItWorks.step2': 'We export it as a PDF.',
    'tool.editorial.word-to-pdf.howItWorks.step3': 'Download your PDF and share confidently.',
    'tool.editorial.word-to-pdf.quality.bullet1': 'Embedded fonts help preserve layout across devices.',
    'tool.editorial.word-to-pdf.quality.bullet2': 'Large images can increase file size.',
    'tool.editorial.word-to-pdf.quality.bullet3': 'Your document remains yours; conversion is automated.',
    'tool.editorial.word-to-pdf.faq1.q': 'Will my fonts look the same?',
    'tool.editorial.word-to-pdf.faq1.a': 'PDFs preserve layout well, especially when fonts are embedded. Some rare fonts may be substituted.',
    'tool.editorial.word-to-pdf.faq2.q': 'Can I convert a Google Docs file?',
    'tool.editorial.word-to-pdf.faq2.a': 'Download it as .docx first, then upload it here.',
    'tool.editorial.word-to-pdf.faq3.q': 'Is the output print-ready?',
    'tool.editorial.word-to-pdf.faq3.a': 'For most documents, yes. Always check margins if you need strict print specs.',
    // Editorial content - pdf-compress
    'tool.editorial.pdf-compress.introP1': 'Reduce PDF file size so it\'s easier to email, upload, and share—without unnecessary quality loss.',
    'tool.editorial.pdf-compress.introP2': 'Use compression for large PDFs with images, scanned pages, or heavy graphics.',
    'tool.editorial.pdf-compress.howItWorks.step1': 'Upload your PDF.',
    'tool.editorial.pdf-compress.howItWorks.step2': 'Choose a compression level (if available).',
    'tool.editorial.pdf-compress.howItWorks.step3': 'Download the smaller PDF.',
    'tool.editorial.pdf-compress.quality.bullet1': 'Higher compression reduces size more but may soften images.',
    'tool.editorial.pdf-compress.quality.bullet2': 'Text stays crisp in most cases.',
    'tool.editorial.pdf-compress.quality.bullet3': 'We process your file automatically; your content remains yours.',
    'tool.editorial.pdf-compress.faq1.q': 'How much will it compress?',
    'tool.editorial.pdf-compress.faq1.a': 'It depends on what\'s inside the PDF. Image-heavy files compress more.',
    'tool.editorial.pdf-compress.faq2.q': 'Will my text become blurry?',
    'tool.editorial.pdf-compress.faq2.a': 'Text usually remains sharp; images are most affected.',
    'tool.editorial.pdf-compress.faq3.q': 'Is compression reversible?',
    'tool.editorial.pdf-compress.faq3.a': 'No—keep the original if you may need maximum quality later.',
    // Editorial content - pdf-merge
    'tool.editorial.pdf-merge.introP1': 'Combine multiple PDFs into a single file in the order you choose.',
    'tool.editorial.pdf-merge.introP2': 'Ideal for bundling contracts, invoices, chapters, or project documents into one shareable PDF.',
    'tool.editorial.pdf-merge.howItWorks.step1': 'Upload multiple PDF files.',
    'tool.editorial.pdf-merge.howItWorks.step2': 'Arrange them in the desired order.',
    'tool.editorial.pdf-merge.howItWorks.step3': 'Download one merged PDF.',
    'tool.editorial.pdf-merge.quality.bullet1': 'Original page quality is preserved.',
    'tool.editorial.pdf-merge.quality.bullet2': 'Large merges may take longer depending on file size.',
    'tool.editorial.pdf-merge.quality.bullet3': 'Your files are processed automatically; you keep ownership.',
    'tool.editorial.pdf-merge.faq1.q': 'Can I reorder files before merging?',
    'tool.editorial.pdf-merge.faq1.a': 'Yes—drag and drop if the interface supports it.',
    'tool.editorial.pdf-merge.faq2.q': 'Will it change page quality?',
    'tool.editorial.pdf-merge.faq2.a': 'No—merging keeps original pages intact.',
    'tool.editorial.pdf-merge.faq3.q': 'Is there a file limit?',
    'tool.editorial.pdf-merge.faq3.a': 'Limits depend on server configuration; check the upload limits shown in the UI.',
    'tool.faq.size.question': 'What file sizes are supported?',
    'tool.faq.size.answer': 'You can convert files up to 100MB. PDFStation is free forever with no signup required.',
    'tool.faq.time.question': 'How long does conversion take?',
    'tool.faq.time.answer': 'Most {inputType} to {outputType} conversions complete in under 30 seconds, depending on file size and complexity.',
    'tool.faq.data.question': 'Is my data secure?',
    'tool.faq.data.answer': 'Yes, all files are processed securely using SSL encryption and automatically deleted from our servers within 24 hours after conversion.',
    'tool.more.info.title': 'Additional Information',
    'tool.more.info.paragraph1': 'Our {toolName} converter uses advanced algorithms to ensure accurate conversion while preserving the original formatting and structure of your documents.',
    'tool.more.info.paragraph2': 'All conversions are performed in the cloud, so you don\'t need to install any software. Simply upload your file and download the converted result. Free forever.',
    'tool.nav.images-to-pdf': 'JPG/PNG → PDF',
    'tool.nav.word-to-pdf': 'Word → PDF',
    'tool.nav.compress': 'Compress',
    'tool.nav.merge': 'Merge',
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
    'nav.contact': 'Contact',
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
    
    // HomePage new sections
    'home.what.title': 'What is PDFStation?',
    'home.what.paragraph1': 'PDFStation is a free online platform designed to simplify document management and file conversion. Whether you need to convert images to PDF, transform Word documents into PDF format, compress large files, or merge multiple PDFs into one document, PDFStation provides all these tools in one convenient place.',
    'home.what.paragraph2': 'Our mission is to make everyday file tasks fast, intuitive, and accessible from any device. You don\'t need to install software, create an account, or worry about complex settings. Just upload your file, choose your desired format, and download the result in seconds.',
    'home.what.paragraph3': 'PDFStation was created as an independent project to provide a clean, ad-light alternative to heavy desktop software. We focus on simplicity, security, and performance, ensuring that your files are processed quickly and safely without unnecessary complications.',
    'home.why.title': 'Why Use PDFStation Instead of Desktop Software?',
    'home.why.intro': 'While desktop software has its place, online tools like PDFStation offer several advantages that make them ideal for quick file conversions and document management tasks.',
    'home.why.noInstallation.title': 'No Installation Required',
    'home.why.noInstallation.body': 'Access PDFStation from any device with a web browser. No need to download, install, or update software. This is especially convenient when you\'re using a shared computer or need to convert files on the go.',
    'home.why.worksAnyDevice.title': 'Works on Any Device',
    'home.why.worksAnyDevice.body': 'Whether you\'re on Windows, Mac, Linux, or a mobile device, PDFStation works the same way. Your operating system doesn\'t matter.',
    'home.why.privacy.title': 'Privacy and Security',
    'home.why.privacy.body': 'Files are processed securely and deleted automatically after conversion. We don\'t store your files permanently or use them for any purpose other than the conversion you requested.',
    'home.why.speed.title': 'Speed and Convenience',
    'home.why.speed.body': 'Most conversions complete in seconds. No need to wait for software to load or navigate through complex menus. Just upload, convert, and download.',
    'home.why.upToDate.title': 'Always Up-to-Date',
    'home.why.upToDate.body': 'Online tools are automatically updated with the latest features and improvements. You always have access to the most recent version without manual updates.',
    'home.why.free.title': 'Free Forever',
    'home.why.free.body': 'All core tools are free to use, with no hidden costs or subscription fees. We may display ads to keep the service sustainable, but the tools themselves remain free.',
    'home.filesHandled.title': 'How Your Files Are Handled',
    'home.filesHandled.intro': 'Your privacy and security are our top priorities. When you upload a file to PDFStation, here\'s what happens:',
    'home.filesHandled.secureUpload.title': 'Secure Upload',
    'home.filesHandled.secureUpload.body': 'Files are uploaded over an encrypted connection (HTTPS) to ensure your data is protected during transmission.',
    'home.filesHandled.temporaryProcessing.title': 'Temporary Processing',
    'home.filesHandled.temporaryProcessing.body': 'Your files are kept on our servers only for the time needed to complete the conversion, typically just a few minutes.',
    'home.filesHandled.automaticDeletion.title': 'Automatic Deletion',
    'home.filesHandled.automaticDeletion.body': 'Once processing is complete and you\'ve downloaded your file, it\'s automatically deleted from our servers. We don\'t store your files permanently.',
    'home.filesHandled.noManualInspection.title': 'No Manual Inspection',
    'home.filesHandled.noManualInspection.body': 'We don\'t manually view, read, or inspect the content of your files. The conversion process is fully automated.',
    'home.filesHandled.noSharing.title': 'No Sharing',
    'home.filesHandled.noSharing.body': 'We never sell, share, or distribute your files to third parties. Your files remain private and confidential.',
    'home.filesHandled.privacyLink': 'For more detailed information about our privacy practices, please read our Privacy Policy.',
    'home.filesHandled.privacyLink.text': 'For more detailed information about our privacy practices, please read our',
    'home.filesHandled.privacyLink.label': 'Privacy Policy',
    'home.faq.title': 'Frequently Asked Questions',
    'home.faq.q1.question': 'Are my files stored permanently?',
    'home.faq.q1.answer': 'No. Files are kept only for the time needed to process your request and are deleted automatically afterwards. We don\'t store your files permanently or use them for any purpose other than the conversion you requested.',
    'home.faq.q2.question': 'Is PDFStation free to use?',
    'home.faq.q2.answer': 'Yes. The core tools are completely free. We may display ads to keep the project sustainable, but all conversion tools remain free to use without any subscription or payment required.',
    'home.faq.q3.question': 'Is there a file size limit?',
    'home.faq.q3.answer': 'Yes, there are technical limits depending on the tool and server configuration. Currently, we support files up to 100MB. If a file is too large, we will show an error message and you can try compressing it locally before uploading.',
    'home.faq.q4.question': 'Do I need to create an account?',
    'home.faq.q4.answer': 'No. You can use all the main tools without registering or logging in. Simply upload your file, convert it, and download the result. No account creation is required.',
    'home.faq.q5.question': 'Which formats are supported?',
    'home.faq.q5.answer': 'Common formats include JPG, PNG, PDF, and DOCX (for Word to PDF conversion). Support may expand over time based on user feedback and demand. Check each tool\'s page for specific format requirements.',
    'home.faq.viewAll': 'View all FAQs →',
    
    // Privacy Policy new sections
    'privacy.new.intro.title': 'Introduction',
    'privacy.new.intro.text': 'This Privacy Policy explains how PDFStation ("we", "our", "us") handles information when you use our website and tools. We are committed to protecting your privacy and ensuring the security of your data.',
    'privacy.new.files.title': '1. Files You Upload',
    'privacy.new.files.intro': 'Files you upload are used only to perform the requested operation (convert, compress, merge, etc.). Files are kept temporarily on our servers for processing and are deleted automatically after a short period.',
    'privacy.new.files.item1': 'Files are processed only for the time needed to complete your request',
    'privacy.new.files.item2': 'We do not sell, share, or manually inspect the content of your files',
    'privacy.new.files.item3': 'Files are automatically deleted from our servers after processing',
    'privacy.new.files.item4': 'We do not store your files permanently or use them for any purpose other than the conversion you requested',
    'privacy.new.usage.title': '2. Usage Data and Analytics',
    'privacy.new.usage.intro': 'We may collect anonymous usage data to understand how the site is used (for example, which tools are most popular, approximate location, device type). This may be done using third-party analytics tools such as Mixpanel or similar services.',
    'privacy.new.usage.item1': 'This data helps us improve performance, stability, and user experience',
    'privacy.new.usage.item2': 'We do not collect personally identifiable information without your consent',
    'privacy.new.usage.item3': 'Analytics data is aggregated and anonymized',
    'privacy.new.usage.item4': 'We use this information to fix bugs and optimize our tools',
    'privacy.new.usage.item5': 'You can opt out of analytics tracking through your browser settings',
    'privacy.new.cookies.title': '3. Cookies and Similar Technologies',
    'privacy.new.cookies.intro': 'We may use cookies or local storage to remember your language preference or improve loading performance. Advertising partners such as Google AdSense may use cookies to serve and personalize ads, according to their own policies.',
    'privacy.new.cookies.item1': 'Cookies are used to remember your preferences (like language selection)',
    'privacy.new.cookies.item2': 'We do not use cookies to track your browsing behavior across other websites',
    'privacy.new.cookies.item3': 'You can disable cookies in your browser settings, though this may affect some functionality',
    'privacy.new.cookies.item4': 'Third-party advertising networks may use their own cookies for ad personalization',
    'privacy.new.advertising.title': '4. Advertising',
    'privacy.new.advertising.text': 'PDFStation may display ads from third-party networks such as Google AdSense. These networks may use cookies or other identifiers to show relevant ads in line with their own advertising and privacy policies. We do not control the content of these ads, but we work only with reputable advertising partners.',
    'privacy.new.personal.title': '5. Personal Information',
    'privacy.new.personal.text': 'We do not require you to create an account to use the core tools. If you contact us by email, we will use your email address only to reply to your message. We do not share your email address with third parties.',
    'privacy.new.retention.title': '6. Data Retention',
    'privacy.new.retention.text': 'Files uploaded to PDFStation are deleted automatically after processing, typically within minutes. We do not retain your files for longer than necessary to complete the conversion. Analytics data may be retained in aggregated form for longer periods to help us improve the service.',
    'privacy.new.rights.title': '7. Your Rights',
    'privacy.new.rights.intro': 'You have the right to:',
    'privacy.new.rights.item1': 'Access any personal information we may have about you',
    'privacy.new.rights.item2': 'Request deletion of your data',
    'privacy.new.rights.item3': 'Opt out of analytics tracking',
    'privacy.new.rights.item4': 'Contact us with privacy concerns or questions',
    'privacy.new.changes.title': '8. Changes to This Policy',
    'privacy.new.changes.text': 'We may update this Privacy Policy from time to time. The latest version will always be available on this page. We will notify users of significant changes by updating the "Last updated" date at the top of this page.',
    'privacy.new.contact.title': '9. Contact',
    'privacy.new.contact.text': 'If you have questions about this Privacy Policy or how we handle your data, you can contact us at:',
    'privacy.new.contact.email': 'hi@pdfstation.app',
    
    // Tool page detailed explanations
    'tool.images-to-pdf.detail.title': 'Convert JPG and PNG to PDF Online',
    'tool.images-to-pdf.detail.paragraph1': 'PDFStation lets you convert images to high-quality PDF files directly in your browser. This is useful when you need to group multiple photos into a single document, send scans as a PDF, or prepare files for printing.',
    'tool.images-to-pdf.detail.paragraph2': 'The process is simple: upload one or more JPG or PNG images, arrange them in the desired order if needed, click convert, and download your PDF. All conversions happen over a secure connection. Files are kept only long enough to generate your PDF and are deleted automatically afterwards.',
    'tool.images-to-pdf.detail.paragraph3': 'Whether you\'re converting a single photo or combining multiple images into one PDF, our tool preserves image quality while creating a professional PDF document that\'s easy to share, print, or archive.',
    'tool.word-to-pdf.detail.title': 'Turn Word Documents into PDF with One Click',
    'tool.word-to-pdf.detail.paragraph1': 'With the Word to PDF tool, you can convert DOC and DOCX files into PDFs that preserve layout, fonts, and pagination. This is ideal for resumes, reports, contracts, and any document that should look the same on every device.',
    'tool.word-to-pdf.detail.paragraph2': 'Simply upload your Word file, wait a few seconds, and download a ready-to-share PDF. No installation, no registration. The conversion maintains your document\'s formatting, including headers, footers, tables, and images, ensuring that your PDF looks exactly as intended.',
    'tool.word-to-pdf.detail.paragraph3': 'This tool is perfect for professionals who need to share documents that must appear consistent across different devices and operating systems. PDF format ensures that your document will look the same whether viewed on a computer, tablet, or smartphone.',
    'tool.pdf-compress.detail.title': 'Compress Large PDF Files Without Losing Quality',
    'tool.pdf-compress.detail.paragraph1': 'The PDF compression tool reduces file size so it\'s easier to send documents by email, upload to platforms, or store them in the cloud. We apply smart compression that tries to keep text and images readable while cutting unnecessary weight.',
    'tool.pdf-compress.detail.paragraph2': 'You can use it for presentations, scanned documents, and multi-page reports. The compression algorithm analyzes your PDF and optimizes images, removes redundant data, and compresses content without significantly affecting visual quality.',
    'tool.pdf-compress.detail.paragraph3': 'This is especially useful when you need to meet file size limits for email attachments or online submissions. Compress your PDF once, and you\'ll have a smaller file that\'s easier to share while maintaining professional appearance.',
    'tool.pdf-merge.detail.title': 'Combine Multiple PDFs into a Single Document',
    'tool.pdf-merge.detail.paragraph1': 'The merge tool allows you to upload several PDF files and join them into one. This is useful for combining chapters, invoices, or scanned pages into a single file that\'s easier to share and organize.',
    'tool.pdf-merge.detail.paragraph2': 'You can choose the order of the files before merging and then download a consolidated PDF in just a few clicks. All pages from your selected PDFs will be combined in the order you specify, creating one seamless document.',
    'tool.pdf-merge.detail.paragraph3': 'This tool is perfect for students combining lecture notes, professionals merging reports, or anyone who needs to organize multiple PDF documents into a single, easy-to-manage file. The merged PDF maintains the quality and formatting of all original documents.',
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
    'home.hero.title': 'Conversor de PDF online gratuito e ferramentas. Converta imagens, documentos Word, comprima e una PDFs instantaneamente.',
    'home.hero.subtitle': 'O que é o PDFStation?',
    'home.hero.description': 'O PDFStation é uma plataforma online gratuita e segura para converter e gerenciar documentos. Converta imagens para PDF, documentos Word para PDF, comprima arquivos grandes e una vários PDFs em um—tudo sem instalar software ou criar uma conta. Nossa missão é tornar a conversão de arquivos simples, rápida e acessível para todos. Todas as ferramentas são gratuitas para sempre, suportadas por anúncios, com limite de tamanho de arquivo de 100MB por arquivo.',
    'home.hero.cta.choose': 'Escolher arquivos',
    'home.hero.cta.explore': 'Explorar ferramentas',
    
    // Common Use Cases
    'home.useCases.title': 'Casos de Uso Comuns',
    'home.useCases.wordToPdf.title': 'Converter Word para PDF',
    'home.useCases.wordToPdf.description': 'Precisa compartilhar um currículo ou documento? Converta arquivos Word para PDF para garantir formatação consistente em todos os dispositivos.',
    'home.useCases.wordToPdf.cta': 'Experimente Word para PDF →',
    'home.useCases.imagesToPdf.title': 'Converter Imagens para PDF',
    'home.useCases.imagesToPdf.description': 'Transforme fotos, recibos digitalizados ou múltiplas imagens em um único documento PDF. Perfeito para organizar e compartilhar.',
    'home.useCases.imagesToPdf.cta': 'Experimente JPG/PNG para PDF →',
    'home.useCases.compressPdf.title': 'Comprimir Arquivos PDF',
    'home.useCases.compressPdf.description': 'Reduza o tamanho do arquivo PDF sem perda significativa de qualidade. Ótimo para enviar documentos grandes por e-mail ou economizar espaço de armazenamento.',
    'home.useCases.compressPdf.cta': 'Experimente Compressor de PDF →',
    'home.useCases.mergePdf.title': 'Unir Múltiplos PDFs',
    'home.useCases.mergePdf.description': 'Combine vários arquivos PDF em um único documento. Ideal para agrupar contratos, relatórios ou documentos de projeto.',
    'home.useCases.mergePdf.cta': 'Experimente Unir PDFs →',
    
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
    'about.paragraph1': 'O PDFStation é uma plataforma online gratuita para converter e gerenciar documentos de forma simples e segura. Nosso objetivo é tornar as tarefas diárias com arquivos – como converter imagens para PDF, transformar documentos Word em PDF, comprimir arquivos grandes e unir vários PDFs – rápidas, intuitivas e acessíveis de qualquer dispositivo.',
    'about.paragraph2': 'O PDFStation é um projeto independente criado e mantido por Celso Silva, atualmente baseado no Canadá. A ideia surgiu de uma necessidade simples: ter uma ferramenta limpa, com poucos anúncios e direta para lidar com arquivos sem instalar software pesado no desktop.',
    'about.paragraph3': 'Focamos em simplicidade, segurança e desempenho. Sem menus complicados, apenas as ferramentas que você precisa. Os arquivos são processados apenas pelo tempo necessário para converter ou comprimir, depois removidos automaticamente. As conversões são otimizadas para que você não perca tempo esperando.',
    'about.paragraph4': 'A plataforma está em constante evolução, e novas ferramentas e melhorias são adicionadas ao longo do tempo com base no uso real e no feedback. Se você tiver sugestões ou encontrar algum problema, sempre será bem-vindo para entrar em contato através da nossa',
    'about.contact.link.text': 'página de contato',
    'about.contact.link.label': 'página de contato',
    'about.values.title': 'Nossos Valores',
    
    // Contact Page
    'contact.title': 'Contato',
    'contact.subtitle': 'Adoraríamos ouvir de você. Entre em contato com qualquer dúvida, sugestão ou feedback.',
    'contact.email.title': 'Envie-nos um Email',
    'contact.email.description': 'Se você tiver dúvidas, sugestões ou feedback sobre o PDFStation, pode nos contatar por email:',
    'contact.bug.title': 'Reportar um Bug',
    'contact.bug.description': 'Encontrou um problema com a conversão de arquivos ou notou algo que não está funcionando como esperado? Avise-nos e corrigiremos o mais rápido possível.',
    'contact.feature.title': 'Sugerir uma Funcionalidade',
    'contact.feature.description': 'Tem uma ideia para uma nova ferramenta ou melhoria? Estamos sempre procurando tornar o PDFStation melhor com base no feedback dos usuários.',
    'contact.translation.title': 'Correção de Tradução',
    'contact.translation.description': 'Encontrou um erro de digitação ou uma tradução que não faz sentido? Ajude-nos a melhorar a experiência multilíngue.',
    'contact.inquiry.title': 'Consulta Geral',
    'contact.inquiry.description': 'Tem uma pergunta sobre como o PDFStation funciona, nossas práticas de privacidade ou qualquer outra coisa? Estamos aqui para ajudar.',
    'contact.response.title': 'Tempo de Resposta',
    'contact.response.paragraph1': 'Lemos todas as mensagens e fazemos o nosso melhor para responder o mais rápido possível. Normalmente, você pode esperar uma resposta em 24-48 horas durante os dias úteis.',
    'contact.response.paragraph2': 'Para questões urgentes relacionadas a problemas de conversão de arquivos ou preocupações de segurança, por favor mencione "URGENTE" na linha de assunto, e priorizaremos sua mensagem.',
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
    'tool.editorial.howItWorks': 'Como funciona',
    'tool.editorial.qualityPrivacy': 'Qualidade e privacidade',
    'tool.editorial.faq': 'Perguntas frequentes',
    // Editorial content - images-to-pdf
    'tool.editorial.images-to-pdf.introP1': 'Combine uma ou múltiplas imagens JPG em um único PDF, ideal para impressão ou compartilhamento como um único arquivo.',
    'tool.editorial.images-to-pdf.introP2': 'Ótimo para recibos digitalizados, notas escritas à mão ou documentos baseados em fotos que você deseja em um formato padrão.',
    'tool.editorial.images-to-pdf.howItWorks.step1': 'Faça upload de uma ou mais imagens JPG.',
    'tool.editorial.images-to-pdf.howItWorks.step2': 'Organize a ordem, se disponível.',
    'tool.editorial.images-to-pdf.howItWorks.step3': 'Baixe um único PDF.',
    'tool.editorial.images-to-pdf.quality.bullet1': 'A qualidade da imagem depende das fotos originais.',
    'tool.editorial.images-to-pdf.quality.bullet2': 'Os PDFs podem ser otimizados para tamanho se a compactação estiver habilitada.',
    'tool.editorial.images-to-pdf.quality.bullet3': 'Os arquivos são processados automaticamente; você mantém a propriedade.',
    'tool.editorial.images-to-pdf.faq1.q': 'Posso combinar várias imagens em um PDF?',
    'tool.editorial.images-to-pdf.faq1.a': 'Sim—faça upload de vários JPGs e nós os montaremos.',
    'tool.editorial.images-to-pdf.faq2.q': 'Vai manter a mesma qualidade de imagem?',
    'tool.editorial.images-to-pdf.faq2.a': 'Ficará próximo do original; alguma compactação pode ser aplicada com base nas configurações.',
    'tool.editorial.images-to-pdf.faq3.q': 'Posso adicionar margens?',
    'tool.editorial.images-to-pdf.faq3.a': 'Se suportado, ajuste o ajuste/escala da página; caso contrário, você pode imprimir com margens do seu visualizador.',
    // Editorial content - word-to-pdf
    'tool.editorial.word-to-pdf.introP1': 'Transforme seu documento Word em um PDF limpo que parece consistente em qualquer dispositivo.',
    'tool.editorial.word-to-pdf.introP2': 'Perfeito para compartilhar currículos, propostas e documentos que não devem alterar a formatação quando abertos em outro lugar.',
    'tool.editorial.word-to-pdf.howItWorks.step1': 'Faça upload do seu arquivo .doc ou .docx.',
    'tool.editorial.word-to-pdf.howItWorks.step2': 'Exportamos como PDF.',
    'tool.editorial.word-to-pdf.howItWorks.step3': 'Baixe seu PDF e compartilhe com confiança.',
    'tool.editorial.word-to-pdf.quality.bullet1': 'Fontes incorporadas ajudam a preservar o layout entre dispositivos.',
    'tool.editorial.word-to-pdf.quality.bullet2': 'Imagens grandes podem aumentar o tamanho do arquivo.',
    'tool.editorial.word-to-pdf.quality.bullet3': 'Seu documento permanece seu; a conversão é automatizada.',
    'tool.editorial.word-to-pdf.faq1.q': 'Minhas fontes ficarão iguais?',
    'tool.editorial.word-to-pdf.faq1.a': 'Os PDFs preservam bem o layout, especialmente quando as fontes estão incorporadas. Algumas fontes raras podem ser substituídas.',
    'tool.editorial.word-to-pdf.faq2.q': 'Posso converter um arquivo do Google Docs?',
    'tool.editorial.word-to-pdf.faq2.a': 'Baixe como .docx primeiro, depois faça upload aqui.',
    'tool.editorial.word-to-pdf.faq3.q': 'A saída está pronta para impressão?',
    'tool.editorial.word-to-pdf.faq3.a': 'Para a maioria dos documentos, sim. Sempre verifique as margens se precisar de especificações de impressão rigorosas.',
    // Editorial content - pdf-compress
    'tool.editorial.pdf-compress.introP1': 'Reduza o tamanho do arquivo PDF para facilitar o envio por e-mail, upload e compartilhamento—sem perda desnecessária de qualidade.',
    'tool.editorial.pdf-compress.introP2': 'Use compactação para PDFs grandes com imagens, páginas digitalizadas ou gráficos pesados.',
    'tool.editorial.pdf-compress.howItWorks.step1': 'Faça upload do seu PDF.',
    'tool.editorial.pdf-compress.howItWorks.step2': 'Escolha um nível de compactação (se disponível).',
    'tool.editorial.pdf-compress.howItWorks.step3': 'Baixe o PDF menor.',
    'tool.editorial.pdf-compress.quality.bullet1': 'Maior compactação reduz mais o tamanho, mas pode suavizar imagens.',
    'tool.editorial.pdf-compress.quality.bullet2': 'O texto permanece nítido na maioria dos casos.',
    'tool.editorial.pdf-compress.quality.bullet3': 'Processamos seu arquivo automaticamente; seu conteúdo permanece seu.',
    'tool.editorial.pdf-compress.faq1.q': 'Quanto vai compactar?',
    'tool.editorial.pdf-compress.faq1.a': 'Depende do que está dentro do PDF. Arquivos com muitas imagens compactam mais.',
    'tool.editorial.pdf-compress.faq2.q': 'Meu texto ficará borrado?',
    'tool.editorial.pdf-compress.faq2.a': 'O texto geralmente permanece nítido; as imagens são mais afetadas.',
    'tool.editorial.pdf-compress.faq3.q': 'A compactação é reversível?',
    'tool.editorial.pdf-compress.faq3.a': 'Não—mantenha o original se precisar de qualidade máxima depois.',
    // Editorial content - pdf-merge
    'tool.editorial.pdf-merge.introP1': 'Combine vários PDFs em um único arquivo na ordem que você escolher.',
    'tool.editorial.pdf-merge.introP2': 'Ideal para agrupar contratos, faturas, capítulos ou documentos de projeto em um PDF compartilhável.',
    'tool.editorial.pdf-merge.howItWorks.step1': 'Faça upload de vários arquivos PDF.',
    'tool.editorial.pdf-merge.howItWorks.step2': 'Organize-os na ordem desejada.',
    'tool.editorial.pdf-merge.howItWorks.step3': 'Baixe um PDF mesclado.',
    'tool.editorial.pdf-merge.quality.bullet1': 'A qualidade original da página é preservada.',
    'tool.editorial.pdf-merge.quality.bullet2': 'Mesclagens grandes podem demorar mais, dependendo do tamanho do arquivo.',
    'tool.editorial.pdf-merge.quality.bullet3': 'Seus arquivos são processados automaticamente; você mantém a propriedade.',
    'tool.editorial.pdf-merge.faq1.q': 'Posso reordenar arquivos antes de mesclar?',
    'tool.editorial.pdf-merge.faq1.a': 'Sim—arraste e solte se a interface suportar.',
    'tool.editorial.pdf-merge.faq2.q': 'Vai mudar a qualidade da página?',
    'tool.editorial.pdf-merge.faq2.a': 'Não—a mesclagem mantém as páginas originais intactas.',
    'tool.editorial.pdf-merge.faq3.q': 'Há um limite de arquivos?',
    'tool.editorial.pdf-merge.faq3.a': 'Os limites dependem da configuração do servidor; verifique os limites de upload mostrados na interface.',
    'tool.faq.size.question': 'Quais tamanhos de arquivo são suportados?',
    'tool.faq.size.answer': 'Você pode converter arquivos de até 100MB. O PDFStation é gratuito para sempre, sem necessidade de cadastro.',
    'tool.faq.time.question': 'Quanto tempo leva a conversão?',
    'tool.faq.time.answer': 'A maioria das conversões de {inputType} para {outputType} é concluída em menos de 30 segundos, dependendo do tamanho e complexidade do arquivo.',
    'tool.faq.data.question': 'Meus dados estão seguros?',
    'tool.faq.data.answer': 'Sim, todos os arquivos são processados com segurança usando criptografia SSL e automaticamente excluídos de nossos servidores em até 24 horas após a conversão.',
    'tool.more.info.title': 'Informações Adicionais',
    'tool.more.info.paragraph1': 'Nosso conversor {toolName} usa algoritmos avançados para garantir conversão precisa, preservando a formatação e estrutura originais de seus documentos.',
    'tool.more.info.paragraph2': 'Todas as conversões são realizadas na nuvem, então você não precisa instalar nenhum software. Simplesmente faça upload do seu arquivo e baixe o resultado convertido. Grátis para sempre.',
    'tool.nav.images-to-pdf': 'JPG/PNG → PDF',
    'tool.nav.word-to-pdf': 'Word → PDF',
    'tool.nav.compress': 'Comprimir',
    'tool.nav.merge': 'Unir',
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
    'nav.contact': 'Contato',
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
    
    // HomePage new sections
    'home.what.title': 'O que é o PDFStation?',
    'home.what.paragraph1': 'O PDFStation é uma plataforma online gratuita projetada para simplificar o gerenciamento de documentos e a conversão de arquivos. Se você precisa converter imagens para PDF, transformar documentos Word em formato PDF, comprimir arquivos grandes ou mesclar vários PDFs em um documento, o PDFStation oferece todas essas ferramentas em um só lugar.',
    'home.what.paragraph2': 'Nossa missão é tornar as tarefas diárias de arquivos rápidas, intuitivas e acessíveis a partir de qualquer dispositivo. Você não precisa instalar software, criar uma conta ou se preocupar com configurações complexas. Basta fazer upload do seu arquivo, escolher o formato desejado e baixar o resultado em segundos.',
    'home.what.paragraph3': 'O PDFStation foi criado como um projeto independente para fornecer uma alternativa limpa e com poucos anúncios ao software pesado de desktop. Focamos em simplicidade, segurança e desempenho, garantindo que seus arquivos sejam processados rapidamente e com segurança, sem complicações desnecessárias.',
    'home.why.title': 'Por que usar o PDFStation em vez de software de desktop?',
    'home.why.intro': 'Embora o software de desktop tenha seu lugar, ferramentas online como o PDFStation oferecem várias vantagens que as tornam ideais para conversões rápidas de arquivos e tarefas de gerenciamento de documentos.',
    'home.why.noInstallation.title': 'Sem necessidade de instalação',
    'home.why.noInstallation.body': 'Acesse o PDFStation de qualquer dispositivo com um navegador da web. Não é necessário baixar, instalar ou atualizar software. Isso é especialmente conveniente quando você está usando um computador compartilhado ou precisa converter arquivos em movimento.',
    'home.why.worksAnyDevice.title': 'Funciona em qualquer dispositivo',
    'home.why.worksAnyDevice.body': 'Seja no Windows, Mac, Linux ou em um dispositivo móvel, o PDFStation funciona da mesma forma. Seu sistema operacional não importa.',
    'home.why.privacy.title': 'Privacidade e segurança',
    'home.why.privacy.body': 'Os arquivos são processados com segurança e excluídos automaticamente após a conversão. Não armazenamos seus arquivos permanentemente nem os usamos para qualquer finalidade que não seja a conversão solicitada.',
    'home.why.speed.title': 'Velocidade e conveniência',
    'home.why.speed.body': 'A maioria das conversões é concluída em segundos. Não é necessário esperar o software carregar ou navegar por menus complexos. Basta fazer upload, converter e baixar.',
    'home.why.upToDate.title': 'Sempre atualizado',
    'home.why.upToDate.body': 'As ferramentas online são atualizadas automaticamente com os recursos e melhorias mais recentes. Você sempre tem acesso à versão mais recente sem atualizações manuais.',
    'home.why.free.title': 'Grátis para sempre',
    'home.why.free.body': 'Todas as ferramentas principais são gratuitas, sem custos ocultos ou taxas de assinatura. Podemos exibir anúncios para manter o serviço sustentável, mas as ferramentas permanecem gratuitas.',
    'home.filesHandled.title': 'Como seus arquivos são tratados',
    'home.filesHandled.intro': 'Sua privacidade e segurança são nossas principais prioridades. Quando você faz upload de um arquivo para o PDFStation, eis o que acontece:',
    'home.filesHandled.secureUpload.title': 'Upload seguro',
    'home.filesHandled.secureUpload.body': 'Os arquivos são enviados por uma conexão criptografada (HTTPS) para garantir que seus dados estejam protegidos durante a transmissão.',
    'home.filesHandled.temporaryProcessing.title': 'Processamento temporário',
    'home.filesHandled.temporaryProcessing.body': 'Seus arquivos são mantidos em nossos servidores apenas pelo tempo necessário para concluir a conversão, geralmente apenas alguns minutos.',
    'home.filesHandled.automaticDeletion.title': 'Exclusão automática',
    'home.filesHandled.automaticDeletion.body': 'Após o processamento ser concluído e você baixar seu arquivo, ele é automaticamente excluído de nossos servidores. Não armazenamos seus arquivos permanentemente.',
    'home.filesHandled.noManualInspection.title': 'Sem inspeção manual',
    'home.filesHandled.noManualInspection.body': 'Não visualizamos, lemos ou inspecionamos manualmente o conteúdo de seus arquivos. O processo de conversão é totalmente automatizado.',
    'home.filesHandled.noSharing.title': 'Sem compartilhamento',
    'home.filesHandled.noSharing.body': 'Nunca vendemos, compartilhamos ou distribuímos seus arquivos para terceiros. Seus arquivos permanecem privados e confidenciais.',
    'home.filesHandled.privacyLink': 'Para obter informações mais detalhadas sobre nossas práticas de privacidade, leia nossa Política de Privacidade.',
    'home.filesHandled.privacyLink.text': 'Para obter informações mais detalhadas sobre nossas práticas de privacidade, leia nossa',
    'home.filesHandled.privacyLink.label': 'Política de Privacidade',
    'home.faq.title': 'Perguntas frequentes',
    'home.faq.q1.question': 'Meus arquivos são armazenados permanentemente?',
    'home.faq.q1.answer': 'Não. Os arquivos são mantidos apenas pelo tempo necessário para processar sua solicitação e são excluídos automaticamente depois. Não armazenamos seus arquivos permanentemente nem os usamos para qualquer finalidade que não seja a conversão solicitada.',
    'home.faq.q2.question': 'O PDFStation é gratuito para usar?',
    'home.faq.q2.answer': 'Sim. As ferramentas principais são completamente gratuitas. Podemos exibir anúncios para manter o projeto sustentável, mas todas as ferramentas de conversão permanecem gratuitas sem necessidade de assinatura ou pagamento.',
    'home.faq.q3.question': 'Há um limite de tamanho de arquivo?',
    'home.faq.q3.answer': 'Sim, existem limites técnicos dependendo da ferramenta e da configuração do servidor. Atualmente, suportamos arquivos de até 100MB. Se um arquivo for muito grande, mostraremos uma mensagem de erro e você pode tentar comprimi-lo localmente antes de fazer upload.',
    'home.faq.q4.question': 'Preciso criar uma conta?',
    'home.faq.q4.answer': 'Não. Você pode usar todas as ferramentas principais sem se registrar ou fazer login. Basta fazer upload do seu arquivo, convertê-lo e baixar o resultado. Não é necessária a criação de conta.',
    'home.faq.q5.question': 'Quais formatos são suportados?',
    'home.faq.q5.answer': 'Os formatos comuns incluem JPG, PNG, PDF e DOCX (para conversão de Word para PDF). O suporte pode expandir com o tempo com base no feedback e na demanda dos usuários. Verifique a página de cada ferramenta para requisitos específicos de formato.',
    'home.faq.viewAll': 'Ver todas as perguntas frequentes →',
    
    // Privacy Policy new sections
    'privacy.new.intro.title': 'Introdução',
    'privacy.new.intro.text': 'Esta Política de Privacidade explica como o PDFStation ("nós", "nosso", "nos") trata as informações quando você usa nosso site e ferramentas. Estamos comprometidos em proteger sua privacidade e garantir a segurança de seus dados.',
    'privacy.new.files.title': '1. Arquivos que você envia',
    'privacy.new.files.intro': 'Os arquivos que você envia são usados apenas para realizar a operação solicitada (converter, comprimir, mesclar, etc.). Os arquivos são mantidos temporariamente em nossos servidores para processamento e são excluídos automaticamente após um curto período.',
    'privacy.new.files.item1': 'Os arquivos são processados apenas pelo tempo necessário para concluir sua solicitação',
    'privacy.new.files.item2': 'Não vendemos, compartilhamos ou inspecionamos manualmente o conteúdo de seus arquivos',
    'privacy.new.files.item3': 'Os arquivos são automaticamente excluídos de nossos servidores após o processamento',
    'privacy.new.files.item4': 'Não armazenamos seus arquivos permanentemente nem os usamos para qualquer finalidade que não seja a conversão solicitada',
    'privacy.new.usage.title': '2. Dados de uso e análises',
    'privacy.new.usage.intro': 'Podemos coletar dados de uso anônimos para entender como o site é usado (por exemplo, quais ferramentas são mais populares, localização aproximada, tipo de dispositivo). Isso pode ser feito usando ferramentas de análise de terceiros, como Mixpanel ou serviços similares.',
    'privacy.new.usage.item1': 'Esses dados nos ajudam a melhorar o desempenho, a estabilidade e a experiência do usuário',
    'privacy.new.usage.item2': 'Não coletamos informações pessoalmente identificáveis sem seu consentimento',
    'privacy.new.usage.item3': 'Os dados de análise são agregados e anonimizados',
    'privacy.new.usage.item4': 'Usamos essas informações para corrigir bugs e otimizar nossas ferramentas',
    'privacy.new.usage.item5': 'Você pode optar por não participar do rastreamento de análise através das configurações do seu navegador',
    'privacy.new.cookies.title': '3. Cookies e tecnologias similares',
    'privacy.new.cookies.intro': 'Podemos usar cookies ou armazenamento local para lembrar sua preferência de idioma ou melhorar o desempenho de carregamento. Parceiros de publicidade, como o Google AdSense, podem usar cookies para veicular e personalizar anúncios, de acordo com suas próprias políticas.',
    'privacy.new.cookies.item1': 'Os cookies são usados para lembrar suas preferências (como a seleção de idioma)',
    'privacy.new.cookies.item2': 'Não usamos cookies para rastrear seu comportamento de navegação em outros sites',
    'privacy.new.cookies.item3': 'Você pode desabilitar cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades',
    'privacy.new.cookies.item4': 'Redes de publicidade de terceiros podem usar seus próprios cookies para personalização de anúncios',
    'privacy.new.advertising.title': '4. Publicidade',
    'privacy.new.advertising.text': 'O PDFStation pode exibir anúncios de redes de terceiros, como o Google AdSense. Essas redes podem usar cookies ou outros identificadores para mostrar anúncios relevantes de acordo com suas próprias políticas de publicidade e privacidade. Não controlamos o conteúdo desses anúncios, mas trabalhamos apenas com parceiros de publicidade respeitáveis.',
    'privacy.new.personal.title': '5. Informações pessoais',
    'privacy.new.personal.text': 'Não exigimos que você crie uma conta para usar as ferramentas principais. Se você entrar em contato conosco por e-mail, usaremos seu endereço de e-mail apenas para responder à sua mensagem. Não compartilhamos seu endereço de e-mail com terceiros.',
    'privacy.new.retention.title': '6. Retenção de dados',
    'privacy.new.retention.text': 'Os arquivos enviados para o PDFStation são excluídos automaticamente após o processamento, geralmente em minutos. Não retemos seus arquivos por mais tempo do que o necessário para concluir a conversão. Os dados de análise podem ser retidos em forma agregada por períodos mais longos para nos ajudar a melhorar o serviço.',
    'privacy.new.rights.title': '7. Seus direitos',
    'privacy.new.rights.intro': 'Você tem o direito de:',
    'privacy.new.rights.item1': 'Acessar quaisquer informações pessoais que possamos ter sobre você',
    'privacy.new.rights.item2': 'Solicitar a exclusão de seus dados',
    'privacy.new.rights.item3': 'Optar por não participar do rastreamento de análise',
    'privacy.new.rights.item4': 'Entrar em contato conosco com preocupações ou perguntas sobre privacidade',
    'privacy.new.changes.title': '8. Alterações nesta política',
    'privacy.new.changes.text': 'Podemos atualizar esta Política de Privacidade de tempos em tempos. A versão mais recente estará sempre disponível nesta página. Notificaremos os usuários sobre alterações significativas atualizando a data "Última atualização" no topo desta página.',
    'privacy.new.contact.title': '9. Contato',
    'privacy.new.contact.text': 'Se você tiver perguntas sobre esta Política de Privacidade ou como tratamos seus dados, pode entrar em contato conosco em:',
    'privacy.new.contact.email': 'hi@pdfstation.app',
    
    // Tool page detailed explanations
    'tool.images-to-pdf.detail.title': 'Converter JPG e PNG para PDF online',
    'tool.images-to-pdf.detail.paragraph1': 'O PDFStation permite converter imagens em arquivos PDF de alta qualidade diretamente no seu navegador. Isso é útil quando você precisa agrupar várias fotos em um único documento, enviar digitalizações como PDF ou preparar arquivos para impressão.',
    'tool.images-to-pdf.detail.paragraph2': 'O processo é simples: faça upload de uma ou mais imagens JPG ou PNG, organize-as na ordem desejada, se necessário, clique em converter e baixe seu PDF. Todas as conversões acontecem por uma conexão segura. Os arquivos são mantidos apenas o tempo suficiente para gerar seu PDF e são excluídos automaticamente depois.',
    'tool.images-to-pdf.detail.paragraph3': 'Seja convertendo uma única foto ou combinando várias imagens em um PDF, nossa ferramenta preserva a qualidade da imagem enquanto cria um documento PDF profissional que é fácil de compartilhar, imprimir ou arquivar.',
    'tool.word-to-pdf.detail.title': 'Transformar documentos Word em PDF com um clique',
    'tool.word-to-pdf.detail.paragraph1': 'Com a ferramenta Word para PDF, você pode converter arquivos DOC e DOCX em PDFs que preservam layout, fontes e paginação. Isso é ideal para currículos, relatórios, contratos e qualquer documento que deva parecer o mesmo em todos os dispositivos.',
    'tool.word-to-pdf.detail.paragraph2': 'Basta fazer upload do seu arquivo Word, aguardar alguns segundos e baixar um PDF pronto para compartilhar. Sem instalação, sem registro. A conversão mantém a formatação do seu documento, incluindo cabeçalhos, rodapés, tabelas e imagens, garantindo que seu PDF pareça exatamente como pretendido.',
    'tool.word-to-pdf.detail.paragraph3': 'Esta ferramenta é perfeita para profissionais que precisam compartilhar documentos que devem aparecer consistentes em diferentes dispositivos e sistemas operacionais. O formato PDF garante que seu documento pareça o mesmo, seja visualizado em um computador, tablet ou smartphone.',
    'tool.pdf-compress.detail.title': 'Comprimir arquivos PDF grandes sem perder qualidade',
    'tool.pdf-compress.detail.paragraph1': 'A ferramenta de compressão de PDF reduz o tamanho do arquivo para facilitar o envio de documentos por e-mail, upload para plataformas ou armazenamento na nuvem. Aplicamos compressão inteligente que tenta manter texto e imagens legíveis enquanto reduz peso desnecessário.',
    'tool.pdf-compress.detail.paragraph2': 'Você pode usá-la para apresentações, documentos digitalizados e relatórios de várias páginas. O algoritmo de compressão analisa seu PDF e otimiza imagens, remove dados redundantes e comprime o conteúdo sem afetar significativamente a qualidade visual.',
    'tool.pdf-compress.detail.paragraph3': 'Isso é especialmente útil quando você precisa atender limites de tamanho de arquivo para anexos de e-mail ou envios online. Comprima seu PDF uma vez e você terá um arquivo menor que é mais fácil de compartilhar, mantendo a aparência profissional.',
    'tool.pdf-merge.detail.title': 'Combinar vários PDFs em um único documento',
    'tool.pdf-merge.detail.paragraph1': 'A ferramenta de mesclagem permite fazer upload de vários arquivos PDF e uni-los em um. Isso é útil para combinar capítulos, faturas ou páginas digitalizadas em um único arquivo que é mais fácil de compartilhar e organizar.',
    'tool.pdf-merge.detail.paragraph2': 'Você pode escolher a ordem dos arquivos antes de mesclar e depois baixar um PDF consolidado com apenas alguns cliques. Todas as páginas dos PDFs selecionados serão combinadas na ordem que você especificar, criando um documento perfeito.',
    'tool.pdf-merge.detail.paragraph3': 'Esta ferramenta é perfeita para estudantes que combinam anotações de aula, profissionais que mesclam relatórios ou qualquer pessoa que precise organizar vários documentos PDF em um único arquivo fácil de gerenciar. O PDF mesclado mantém a qualidade e a formatação de todos os documentos originais.',
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
    'home.hero.title': 'Conversor de PDF online gratuito y herramientas. Convierte imágenes, documentos Word, comprime y combina PDFs al instante.',
    'home.hero.subtitle': '¿Qué es PDFStation?',
    'home.hero.description': 'PDFStation es una plataforma online gratuita y segura para convertir y gestionar documentos. Convierte imágenes a PDF, documentos Word a PDF, comprime archivos grandes y combina varios PDFs en uno—todo sin instalar software o crear una cuenta. Nuestra misión es hacer que la conversión de archivos sea simple, rápida y accesible para todos. Todas las herramientas son gratuitas para siempre, apoyadas por anuncios, con un límite de tamaño de archivo de 100MB por archivo.',
    'home.hero.cta.choose': 'Elegir archivos',
    'home.hero.cta.explore': 'Explorar herramientas',
    
    // Common Use Cases
    'home.useCases.title': 'Casos de Uso Comunes',
    'home.useCases.wordToPdf.title': 'Convertir Word a PDF',
    'home.useCases.wordToPdf.description': '¿Necesitas compartir un currículum o documento? Convierte archivos Word a PDF para asegurar un formato consistente en todos los dispositivos.',
    'home.useCases.wordToPdf.cta': 'Prueba Word a PDF →',
    'home.useCases.imagesToPdf.title': 'Convertir Imágenes a PDF',
    'home.useCases.imagesToPdf.description': 'Convierte fotos, recibos escaneados o múltiples imágenes en un único documento PDF. Perfecto para organizar y compartir.',
    'home.useCases.imagesToPdf.cta': 'Prueba JPG/PNG a PDF →',
    'home.useCases.compressPdf.title': 'Comprimir Archivos PDF',
    'home.useCases.compressPdf.description': 'Reduce el tamaño del archivo PDF sin pérdida significativa de calidad. Ideal para enviar documentos grandes por correo o ahorrar espacio de almacenamiento.',
    'home.useCases.compressPdf.cta': 'Prueba Compresor de PDF →',
    'home.useCases.mergePdf.title': 'Combinar Múltiples PDFs',
    'home.useCases.mergePdf.description': 'Combina varios archivos PDF en un solo documento. Ideal para agrupar contratos, informes o documentos de proyecto.',
    'home.useCases.mergePdf.cta': 'Prueba Combinar PDFs →',
    
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
    'about.paragraph1': 'PDFStation es una plataforma en línea gratuita para convertir y gestionar documentos de forma simple y segura. Nuestro objetivo es hacer que las tareas diarias con archivos – como convertir imágenes a PDF, transformar documentos Word a PDF, comprimir archivos grandes y unir varios PDFs – sean rápidas, intuitivas y accesibles desde cualquier dispositivo.',
    'about.paragraph2': 'PDFStation es un proyecto independiente creado y mantenido por Celso Silva, actualmente con base en Canadá. La idea surgió de una necesidad simple: tener una herramienta limpia, con pocos anuncios y directa para manejar archivos sin instalar software pesado en el escritorio.',
    'about.paragraph3': 'Nos enfocamos en simplicidad, seguridad y rendimiento. Sin menús complicados, solo las herramientas que necesitas. Los archivos se procesan solo el tiempo necesario para convertir o comprimir, luego se eliminan automáticamente. Las conversiones están optimizadas para que no pierdas tiempo esperando.',
    'about.paragraph4': 'La plataforma está en constante evolución, y se agregan nuevas herramientas y mejoras con el tiempo basadas en el uso real y los comentarios. Si tienes sugerencias o encuentras algún problema, siempre serás bienvenido a contactarnos a través de nuestra',
    'about.contact.link.text': 'página de contacto',
    'about.contact.link.label': 'página de contacto',
    'about.values.title': 'Nuestros Valores',
    
    // Contact Page
    'contact.title': 'Contacto',
    'contact.subtitle': 'Nos encantaría saber de ti. Ponte en contacto con cualquier pregunta, sugerencia o comentario.',
    'contact.email.title': 'Envíanos un Email',
    'contact.email.description': 'Si tienes preguntas, sugerencias o comentarios sobre PDFStation, puedes contactarnos por email:',
    'contact.bug.title': 'Reportar un Error',
    'contact.bug.description': '¿Encontraste un problema con la conversión de archivos o notaste algo que no funciona como se esperaba? Avísanos y lo corregiremos lo antes posible.',
    'contact.feature.title': 'Sugerir una Funcionalidad',
    'contact.feature.description': '¿Tienes una idea para una nueva herramienta o mejora? Siempre estamos buscando hacer PDFStation mejor basándonos en los comentarios de los usuarios.',
    'contact.translation.title': 'Corrección de Traducción',
    'contact.translation.description': '¿Encontraste un error tipográfico o una traducción que no tiene sentido? Ayúdanos a mejorar la experiencia multilingüe.',
    'contact.inquiry.title': 'Consulta General',
    'contact.inquiry.description': '¿Tienes una pregunta sobre cómo funciona PDFStation, nuestras prácticas de privacidad o cualquier otra cosa? Estamos aquí para ayudar.',
    'contact.response.title': 'Tiempo de Respuesta',
    'contact.response.paragraph1': 'Leemos todos los mensajes y hacemos nuestro mejor esfuerzo para responder lo antes posible. Típicamente, puedes esperar una respuesta en 24-48 horas durante los días laborables.',
    'contact.response.paragraph2': 'Para asuntos urgentes relacionados con problemas de conversión de archivos o preocupaciones de seguridad, por favor menciona "URGENTE" en la línea de asunto, y priorizaremos tu mensaje.',
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
    'tool.editorial.howItWorks': 'Cómo funciona',
    'tool.editorial.qualityPrivacy': 'Calidad y privacidad',
    'tool.editorial.faq': 'Preguntas frecuentes',
    // Editorial content - images-to-pdf
    'tool.editorial.images-to-pdf.introP1': 'Combina una o múltiples imágenes JPG en un único PDF, ideal para imprimir o compartir como un archivo.',
    'tool.editorial.images-to-pdf.introP2': 'Excelente para recibos escaneados, notas escritas a mano o documentos basados en fotos que desees en un formato estándar.',
    'tool.editorial.images-to-pdf.howItWorks.step1': 'Sube una o más imágenes JPG.',
    'tool.editorial.images-to-pdf.howItWorks.step2': 'Organiza el orden si está disponible.',
    'tool.editorial.images-to-pdf.howItWorks.step3': 'Descarga un único PDF.',
    'tool.editorial.images-to-pdf.quality.bullet1': 'La calidad de la imagen depende de las fotos originales.',
    'tool.editorial.images-to-pdf.quality.bullet2': 'Los PDFs pueden optimizarse para tamaño si la compresión está habilitada.',
    'tool.editorial.images-to-pdf.quality.bullet3': 'Los archivos se procesan automáticamente; mantienes la propiedad.',
    'tool.editorial.images-to-pdf.faq1.q': '¿Puedo combinar múltiples imágenes en un PDF?',
    'tool.editorial.images-to-pdf.faq1.a': 'Sí—sube múltiples JPGs y los ensamblaremos.',
    'tool.editorial.images-to-pdf.faq2.q': '¿Mantendrá la misma calidad de imagen?',
    'tool.editorial.images-to-pdf.faq2.a': 'Estará cerca del original; puede aplicarse algo de compresión según la configuración.',
    'tool.editorial.images-to-pdf.faq3.q': '¿Puedo agregar márgenes?',
    'tool.editorial.images-to-pdf.faq3.a': 'Si está soportado, ajusta el ajuste/escala de página; de lo contrario, puedes imprimir con márgenes desde tu visor.',
    // Editorial content - word-to-pdf
    'tool.editorial.word-to-pdf.introP1': 'Convierte tu documento Word en un PDF limpio que se ve consistente en cualquier dispositivo.',
    'tool.editorial.word-to-pdf.introP2': 'Perfecto para compartir currículos, propuestas y documentos que no deben cambiar de formato al abrirlos en otro lugar.',
    'tool.editorial.word-to-pdf.howItWorks.step1': 'Sube tu archivo .doc o .docx.',
    'tool.editorial.word-to-pdf.howItWorks.step2': 'Lo exportamos como PDF.',
    'tool.editorial.word-to-pdf.howItWorks.step3': 'Descarga tu PDF y comparte con confianza.',
    'tool.editorial.word-to-pdf.quality.bullet1': 'Las fuentes incrustadas ayudan a preservar el diseño entre dispositivos.',
    'tool.editorial.word-to-pdf.quality.bullet2': 'Las imágenes grandes pueden aumentar el tamaño del archivo.',
    'tool.editorial.word-to-pdf.quality.bullet3': 'Tu documento permanece tuyo; la conversión es automatizada.',
    'tool.editorial.word-to-pdf.faq1.q': '¿Se verán igual mis fuentes?',
    'tool.editorial.word-to-pdf.faq1.a': 'Los PDFs preservan bien el diseño, especialmente cuando las fuentes están incrustadas. Algunas fuentes raras pueden ser sustituidas.',
    'tool.editorial.word-to-pdf.faq2.q': '¿Puedo convertir un archivo de Google Docs?',
    'tool.editorial.word-to-pdf.faq2.a': 'Descárgalo como .docx primero, luego súbelo aquí.',
    'tool.editorial.word-to-pdf.faq3.q': '¿Está listo para imprimir?',
    'tool.editorial.word-to-pdf.faq3.a': 'Para la mayoría de documentos, sí. Siempre verifica los márgenes si necesitas especificaciones de impresión estrictas.',
    // Editorial content - pdf-compress
    'tool.editorial.pdf-compress.introP1': 'Reduce el tamaño del archivo PDF para facilitar el envío por correo, subida y compartición—sin pérdida innecesaria de calidad.',
    'tool.editorial.pdf-compress.introP2': 'Usa compresión para PDFs grandes con imágenes, páginas escaneadas o gráficos pesados.',
    'tool.editorial.pdf-compress.howItWorks.step1': 'Sube tu PDF.',
    'tool.editorial.pdf-compress.howItWorks.step2': 'Elige un nivel de compresión (si está disponible).',
    'tool.editorial.pdf-compress.howItWorks.step3': 'Descarga el PDF más pequeño.',
    'tool.editorial.pdf-compress.quality.bullet1': 'Mayor compresión reduce más el tamaño pero puede suavizar imágenes.',
    'tool.editorial.pdf-compress.quality.bullet2': 'El texto permanece nítido en la mayoría de los casos.',
    'tool.editorial.pdf-compress.quality.bullet3': 'Procesamos tu archivo automáticamente; tu contenido permanece tuyo.',
    'tool.editorial.pdf-compress.faq1.q': '¿Cuánto comprimirá?',
    'tool.editorial.pdf-compress.faq1.a': 'Depende de lo que hay dentro del PDF. Los archivos con muchas imágenes se comprimen más.',
    'tool.editorial.pdf-compress.faq2.q': '¿Mi texto se volverá borroso?',
    'tool.editorial.pdf-compress.faq2.a': 'El texto generalmente permanece nítido; las imágenes son las más afectadas.',
    'tool.editorial.pdf-compress.faq3.q': '¿La compresión es reversible?',
    'tool.editorial.pdf-compress.faq3.a': 'No—guarda el original si puedes necesitar calidad máxima después.',
    // Editorial content - pdf-merge
    'tool.editorial.pdf-merge.introP1': 'Combina múltiples PDFs en un único archivo en el orden que elijas.',
    'tool.editorial.pdf-merge.introP2': 'Ideal para agrupar contratos, facturas, capítulos o documentos de proyecto en un PDF compartible.',
    'tool.editorial.pdf-merge.howItWorks.step1': 'Sube múltiples archivos PDF.',
    'tool.editorial.pdf-merge.howItWorks.step2': 'Organízalos en el orden deseado.',
    'tool.editorial.pdf-merge.howItWorks.step3': 'Descarga un PDF combinado.',
    'tool.editorial.pdf-merge.quality.bullet1': 'Se preserva la calidad original de la página.',
    'tool.editorial.pdf-merge.quality.bullet2': 'Las combinaciones grandes pueden tardar más dependiendo del tamaño del archivo.',
    'tool.editorial.pdf-merge.quality.bullet3': 'Tus archivos se procesan automáticamente; mantienes la propiedad.',
    'tool.editorial.pdf-merge.faq1.q': '¿Puedo reordenar archivos antes de combinar?',
    'tool.editorial.pdf-merge.faq1.a': 'Sí—arrastra y suelta si la interfaz lo soporta.',
    'tool.editorial.pdf-merge.faq2.q': '¿Cambiará la calidad de la página?',
    'tool.editorial.pdf-merge.faq2.a': 'No—la combinación mantiene las páginas originales intactas.',
    'tool.editorial.pdf-merge.faq3.q': '¿Hay un límite de archivos?',
    'tool.editorial.pdf-merge.faq3.a': 'Los límites dependen de la configuración del servidor; verifica los límites de carga mostrados en la interfaz.',
    'tool.faq.size.question': '¿Qué tamaños de archivo son compatibles?',
    'tool.faq.size.answer': 'Puedes convertir archivos de hasta 100MB. PDFStation es gratuito para siempre, sin necesidad de registro.',
    'tool.faq.time.question': '¿Cuánto tiempo tarda la conversión?',
    'tool.faq.time.answer': 'La mayoría de las conversiones de {inputType} a {outputType} se completan en menos de 30 segundos, dependiendo del tamaño y la complejidad del archivo.',
    'tool.faq.data.question': '¿Están seguros mis datos?',
    'tool.faq.data.answer': 'Sí, todos los archivos se procesan de forma segura usando cifrado SSL y se eliminan automáticamente de nuestros servidores en un plazo de 24 horas después de la conversión.',
    'tool.more.info.title': 'Información Adicional',
    'tool.more.info.paragraph1': 'Nuestro conversor {toolName} usa algoritmos avanzados para garantizar una conversión precisa mientras preserva el formato y la estructura originales de tus documentos.',
    'tool.more.info.paragraph2': 'Todas las conversiones se realizan en la nuvem, por lo que no necesitas instalar ningún software. Simplemente sube tu archivo y descarga el resultado convertido. Gratis para siempre.',
    'tool.nav.images-to-pdf': 'JPG/PNG → PDF',
    'tool.nav.word-to-pdf': 'Word → PDF',
    'tool.nav.compress': 'Comprimir',
    'tool.nav.merge': 'Unir',
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
    'nav.contact': 'Contacto',
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
    
    // HomePage new sections
    'home.what.title': '¿Qué es PDFStation?',
    'home.what.paragraph1': 'PDFStation es una plataforma en línea gratuita diseñada para simplificar la gestión de documentos y la conversión de archivos. Ya sea que necesites convertir imágenes a PDF, transformar documentos Word al formato PDF, comprimir archivos grandes o fusionar varios PDF en un solo documento, PDFStation ofrece todas estas herramientas en un solo lugar conveniente.',
    'home.what.paragraph2': 'Nuestra misión es hacer que las tareas diarias de archivos sean rápidas, intuitivas y accesibles desde cualquier dispositivo. No necesitas instalar software, crear una cuenta o preocuparte por configuraciones complejas. Simplemente sube tu archivo, elige el formato deseado y descarga el resultado en segundos.',
    'home.what.paragraph3': 'PDFStation fue creado como un proyecto independiente para proporcionar una alternativa limpia y con pocos anuncios al software pesado de escritorio. Nos enfocamos en simplicidad, seguridad y rendimiento, garantizando que tus archivos se procesen rápidamente y de forma segura sin complicaciones innecesarias.',
    'home.why.title': '¿Por qué usar PDFStation en lugar de software de escritorio?',
    'home.why.intro': 'Aunque el software de escritorio tiene su lugar, las herramientas en línea como PDFStation ofrecen varias ventajas que las hacen ideales para conversiones rápidas de archivos y tareas de gestión de documentos.',
    'home.why.noInstallation.title': 'Sin instalación requerida',
    'home.why.noInstallation.body': 'Accede a PDFStation desde cualquier dispositivo con un navegador web. No es necesario descargar, instalar o actualizar software. Esto es especialmente conveniente cuando estás usando una computadora compartida o necesitas convertir archivos sobre la marcha.',
    'home.why.worksAnyDevice.title': 'Funciona en cualquier dispositivo',
    'home.why.worksAnyDevice.body': 'Ya sea en Windows, Mac, Linux o un dispositivo móvil, PDFStation funciona de la misma manera. Tu sistema operativo no importa.',
    'home.why.privacy.title': 'Privacidad y seguridad',
    'home.why.privacy.body': 'Los archivos se procesan de forma segura y se eliminan automáticamente después de la conversión. No almacenamos tus archivos de forma permanente ni los usamos para ningún propósito que no sea la conversión que solicitaste.',
    'home.why.speed.title': 'Velocidad y conveniencia',
    'home.why.speed.body': 'La mayoría de las conversiones se completan en segundos. No es necesario esperar a que el software se cargue o navegar por menús complejos. Simplemente sube, convierte y descarga.',
    'home.why.upToDate.title': 'Siempre actualizado',
    'home.why.upToDate.body': 'Las herramientas en línea se actualizan automáticamente con las últimas funciones y mejoras. Siempre tienes acceso a la versión más reciente sin actualizaciones manuales.',
    'home.why.free.title': 'Gratis para siempre',
    'home.why.free.body': 'Todas las herramientas principales son gratuitas, sin costos ocultos ni tarifas de suscripción. Podemos mostrar anuncios para mantener el servicio sostenible, pero las herramientas en sí permanecen gratuitas.',
    'home.filesHandled.title': 'Cómo se manejan tus archivos',
    'home.filesHandled.intro': 'Tu privacidad y seguridad son nuestras principales prioridades. Cuando subes un archivo a PDFStation, esto es lo que sucede:',
    'home.filesHandled.secureUpload.title': 'Carga segura',
    'home.filesHandled.secureUpload.body': 'Los archivos se suben a través de una conexión cifrada (HTTPS) para garantizar que tus datos estén protegidos durante la transmisión.',
    'home.filesHandled.temporaryProcessing.title': 'Procesamiento temporal',
    'home.filesHandled.temporaryProcessing.body': 'Tus archivos se mantienen en nuestros servidores solo durante el tiempo necesario para completar la conversión, normalmente unos pocos minutos.',
    'home.filesHandled.automaticDeletion.title': 'Eliminación automática',
    'home.filesHandled.automaticDeletion.body': 'Una vez que el procesamiento se ha completado y has descargado tu archivo, se elimina automáticamente de nuestros servidores. No almacenamos tus archivos de forma permanente.',
    'home.filesHandled.noManualInspection.title': 'Sin inspección manual',
    'home.filesHandled.noManualInspection.body': 'No vemos, leemos ni inspeccionamos manualmente el contenido de tus archivos. El proceso de conversión es totalmente automatizado.',
    'home.filesHandled.noSharing.title': 'Sin compartir',
    'home.filesHandled.noSharing.body': 'Nunca vendemos, compartimos ni distribuimos tus archivos a terceros. Tus archivos siguen siendo privados y confidenciales.',
    'home.filesHandled.privacyLink': 'Para obtener información más detallada sobre nuestras prácticas de privacidad, consulta nuestra Política de Privacidad.',
    'home.filesHandled.privacyLink.text': 'Para obtener información más detallada sobre nuestras prácticas de privacidad, consulta nuestra',
    'home.filesHandled.privacyLink.label': 'Política de Privacidad',
    'home.faq.title': 'Preguntas frecuentes',
    'home.faq.q1.question': '¿Se almacenan mis archivos de forma permanente?',
    'home.faq.q1.answer': 'No. Los archivos se mantienen solo durante el tiempo necesario para procesar tu solicitud y se eliminan automáticamente después. No almacenamos tus archivos de forma permanente ni los utilizamos para ningún propósito distinto de la conversión que solicitaste.',
    'home.faq.q2.question': '¿PDFStation es gratuito?',
    'home.faq.q2.answer': 'Sí. Las herramientas principales son completamente gratuitas. Podemos mostrar anuncios para mantener el proyecto sostenible, pero todas las herramientas de conversión siguen siendo gratuitas sin necesidad de suscripción o pago.',
    'home.faq.q3.question': '¿Existe un límite de tamaño de archivo?',
    'home.faq.q3.answer': 'Sí, existen límites técnicos según la herramienta y la configuración del servidor. Actualmente admitimos archivos de hasta 100 MB. Si un archivo es demasiado grande, mostraremos un mensaje de error y podrás intentar comprimirlo localmente antes de subirlo.',
    'home.faq.q4.question': '¿Necesito crear una cuenta?',
    'home.faq.q4.answer': 'No. Puedes utilizar todas las herramientas principales sin registrarte ni iniciar sesión. Simplemente sube tu archivo, conviértelo y descarga el resultado. No es necesario crear una cuenta.',
    'home.faq.q5.question': '¿Qué formatos son compatibles?',
    'home.faq.q5.answer': 'Los formatos habituales incluyen JPG, PNG, PDF y DOCX (para conversión de Word a PDF). Podemos añadir compatibilidad con más formatos con el tiempo en función de los comentarios de los usuarios y la demanda. Consulta la página de cada herramienta para ver los requisitos específicos de formato.',
    'home.faq.viewAll': 'Ver todas las preguntas frecuentes →',
    'privacy.new.intro.title': 'Introducción',
    'privacy.new.intro.text': 'Esta Política de Privacidad explica cómo PDFStation ("nosotros", "nuestro", "nos") maneja la información cuando utilizas nuestro sitio web y nuestras herramientas. Nos comprometemos a proteger tu privacidad y a garantizar la seguridad de tus datos.',
    'privacy.new.files.title': '1. Archivos que subes',
    'privacy.new.files.intro': 'Los archivos que subes se utilizan únicamente para realizar la operación solicitada (convertir, comprimir, fusionar, etc.). Los archivos se mantienen temporalmente en nuestros servidores para procesamiento y se eliminan automáticamente después de un corto período.',
    'privacy.new.files.item1': 'Los archivos se procesan solo durante el tiempo necesario para completar tu solicitud',
    'privacy.new.files.item2': 'No vendemos, compartimos ni inspeccionamos manualmente el contenido de tus archivos',
    'privacy.new.files.item3': 'Los archivos se eliminan automáticamente de nuestros servidores después del procesamiento',
    'privacy.new.files.item4': 'No almacenamos tus archivos de forma permanente ni los usamos para ningún propósito distinto de la conversión que solicitaste',
    'privacy.new.usage.title': '2. Datos de uso y análisis',
    'privacy.new.usage.intro': 'Podemos recopilar datos de uso anónimos para entender cómo se utiliza el sitio (por ejemplo, qué herramientas son más populares, ubicación aproximada, tipo de dispositivo). Esto puede hacerse utilizando herramientas de análisis de terceros como Mixpanel o servicios similares.',
    'privacy.new.usage.item1': 'Estos datos nos ayudan a mejorar el rendimiento, la estabilidad y la experiencia del usuario',
    'privacy.new.usage.item2': 'No recopilamos información personalmente identificable sin tu consentimiento',
    'privacy.new.usage.item3': 'Los datos de análisis se agregan y anonimizan',
    'privacy.new.usage.item4': 'Utilizamos esta información para corregir errores y optimizar nuestras herramientas',
    'privacy.new.usage.item5': 'Puedes optar por no participar en el seguimiento de análisis a través de la configuración de tu navegador',
    'privacy.new.cookies.title': '3. Cookies y tecnologías similares',
    'privacy.new.cookies.intro': 'Podemos usar cookies o almacenamiento local para recordar tu preferencia de idioma o mejorar el rendimiento de carga. Los socios publicitarios como Google AdSense pueden usar cookies para mostrar y personalizar anuncios, de acuerdo con sus propias políticas.',
    'privacy.new.cookies.item1': 'Las cookies se utilizan para recordar tus preferencias (como la selección de idioma)',
    'privacy.new.cookies.item2': 'No utilizamos cookies para rastrear tu comportamiento de navegación en otros sitios web',
    'privacy.new.cookies.item3': 'Puedes desactivar las cookies en la configuración de tu navegador, aunque esto puede afectar algunas funcionalidades',
    'privacy.new.cookies.item4': 'Las redes publicitarias de terceros pueden usar sus propias cookies para la personalización de anuncios',
    'privacy.new.advertising.title': '4. Publicidad',
    'privacy.new.advertising.text': 'PDFStation puede mostrar anuncios de redes de terceros como Google AdSense. Estas redes pueden usar cookies u otros identificadores para mostrar anuncios relevantes de acuerdo con sus propias políticas publicitarias y de privacidad. No controlamos el contenido de estos anuncios, pero trabajamos únicamente con socios publicitarios de confianza.',
    'privacy.new.personal.title': '5. Información personal',
    'privacy.new.personal.text': 'No requerimos que crees una cuenta para usar las herramientas principales. Si nos contactas por correo electrónico, usaremos tu dirección de correo electrónico únicamente para responder a tu mensaje. No compartimos tu dirección de correo electrónico con terceros.',
    'privacy.new.retention.title': '6. Conservación de datos',
    'privacy.new.retention.text': 'Los archivos subidos a PDFStation se eliminan automáticamente después del procesamiento, generalmente en minutos. No conservamos tus archivos por más tiempo del necesario para completar la conversión. Los datos de análisis pueden conservarse en forma agregada durante períodos más largos para ayudarnos a mejorar el servicio.',
    'privacy.new.rights.title': '7. Tus derechos',
    'privacy.new.rights.intro': 'Tienes derecho a:',
    'privacy.new.rights.item1': 'Acceder a cualquier información personal que podamos tener sobre ti',
    'privacy.new.rights.item2': 'Solicitar la eliminación de tus datos',
    'privacy.new.rights.item3': 'Optar por no participar en el seguimiento de análisis',
    'privacy.new.rights.item4': 'Contactarnos con inquietudes o preguntas sobre privacidad',
    'privacy.new.changes.title': '8. Cambios en esta política',
    'privacy.new.changes.text': 'Podemos actualizar esta Política de Privacidad de vez en cuando. La versión más reciente siempre estará disponible en esta página. Notificaremos a los usuarios sobre cambios significativos actualizando la fecha "Última actualización" en la parte superior de esta página.',
    'privacy.new.contact.title': '9. Contacto',
    'privacy.new.contact.text': 'Si tienes preguntas sobre esta Política de Privacidad o cómo manejamos tus datos, puedes contactarnos en:',
    'privacy.new.contact.email': 'hi@pdfstation.app',
    'tool.images-to-pdf.detail.title': 'Convertir JPG y PNG a PDF en Línea',
    'tool.images-to-pdf.detail.paragraph1': 'PDFStation te permite convertir imágenes en archivos PDF de alta calidad directamente en tu navegador. Esto es útil cuando necesitas agrupar varias fotos en un solo documento, enviar escaneos como PDF o preparar archivos para imprimir.',
    'tool.images-to-pdf.detail.paragraph2': 'El proceso es simple: sube una o más imágenes JPG o PNG, organízalas en el orden deseado si es necesario, haz clic en convertir y descarga tu PDF. Todas las conversiones se realizan a través de una conexión segura. Los archivos se mantienen solo el tiempo suficiente para generar tu PDF y se eliminan automáticamente después.',
    'tool.images-to-pdf.detail.paragraph3': 'Ya sea que estés convirtiendo una sola foto o combinando varias imágenes en un PDF, nuestra herramienta preserva la calidad de la imagen mientras crea un documento PDF profesional que es fácil de compartir, imprimir o archivar.',
    'tool.word-to-pdf.detail.title': 'Convertir Documentos Word a PDF con Un Clic',
    'tool.word-to-pdf.detail.paragraph1': 'Con la herramienta Word a PDF, puedes convertir archivos DOC y DOCX en PDFs que preservan el diseño, las fuentes y la paginación. Esto es ideal para currículums, informes, contratos y cualquier documento que deba verse igual en todos los dispositivos.',
    'tool.word-to-pdf.detail.paragraph2': 'Simplemente sube tu archivo Word, espera unos segundos y descarga un PDF listo para compartir. Sin instalación, sin registro. La conversión mantiene el formato de tu documento, incluyendo encabezados, pies de página, tablas e imágenes, asegurando que tu PDF se vea exactamente como se pretende.',
    'tool.word-to-pdf.detail.paragraph3': 'Esta herramienta es perfecta para profesionales que necesitan compartir documentos que deben aparecer consistentes en diferentes dispositivos y sistemas operativos. El formato PDF asegura que tu documento se verá igual ya sea visto en una computadora, tableta o smartphone.',
    'tool.pdf-compress.detail.title': 'Comprimir Archivos PDF Grandes Sin Perder Calidad',
    'tool.pdf-compress.detail.paragraph1': 'La herramienta de compresión de PDF reduce el tamaño del archivo para que sea más fácil enviar documentos por email, subirlos a plataformas o almacenarlos en la nube. Aplicamos compresión inteligente que intenta mantener el texto y las imágenes legibles mientras reduce el peso innecesario.',
    'tool.pdf-compress.detail.paragraph2': 'Puedes usarla para presentaciones, documentos escaneados e informes de varias páginas. El algoritmo de compresión analiza tu PDF y optimiza imágenes, elimina datos redundantes y comprime el contenido sin afectar significativamente la calidad visual.',
    'tool.pdf-compress.detail.paragraph3': 'Esto es especialmente útil cuando necesitas cumplir con límites de tamaño de archivo para adjuntos de email o envíos en línea. Comprime tu PDF una vez y tendrás un archivo más pequeño que es más fácil de compartir manteniendo la apariencia profesional.',
    'tool.pdf-merge.detail.title': 'Combinar Múltiples PDFs en un Solo Documento',
    'tool.pdf-merge.detail.paragraph1': 'La herramienta de unión te permite subir varios archivos PDF y unirlos en uno. Esto es útil para combinar capítulos, facturas o páginas escaneadas en un solo archivo que es más fácil de compartir y organizar.',
    'tool.pdf-merge.detail.paragraph2': 'Puedes elegir el orden de los archivos antes de unir y luego descargar un PDF consolidado con solo unos clics. Todas las páginas de tus PDFs seleccionados se combinarán en el orden que especifiques, creando un documento perfecto.',
    'tool.pdf-merge.detail.paragraph3': 'Esta herramienta es perfecta para estudiantes que combinan notas de clase, profesionales que unen informes o cualquiera que necesite organizar múltiples documentos PDF en un solo archivo fácil de gestionar. El PDF unido mantiene la calidad y el formato de todos los documentos originales.',
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
    'home.hero.title': 'Converseur de PDF en ligne gratuit et outils. Convertissez des images, documents Word, compressez et fusionnez des PDFs instantanément.',
    'home.hero.subtitle': 'Qu\'est-ce que PDFStation?',
    'home.hero.description': 'PDFStation est une plateforme en ligne gratuite et sécurisée pour convertir et gérer des documents. Convertissez des images en PDF, documents Word en PDF, compressez de gros fichiers et fusionnez plusieurs PDFs en un—tout sans installer de logiciel ou créer de compte. Notre mission est de rendre la conversion de fichiers simple, rapide et accessible à tous. Tous les outils sont gratuits à vie, pris en charge par des publicités, avec une limite de taille de fichier de 100MB par fichier.',
    'home.hero.cta.choose': 'Choisir des fichiers',
    'home.hero.cta.explore': 'Explorer les outils',
    
    // Common Use Cases
    'home.useCases.title': 'Cas d\'Usage Courants',
    'home.useCases.wordToPdf.title': 'Convertir Word en PDF',
    'home.useCases.wordToPdf.description': 'Besoin de partager un CV ou un document? Convertissez les fichiers Word en PDF pour garantir un formatage cohérent sur tous les appareils.',
    'home.useCases.wordToPdf.cta': 'Essayez Word en PDF →',
    'home.useCases.imagesToPdf.title': 'Convertir des Images en PDF',
    'home.useCases.imagesToPdf.description': 'Transformez des photos, des reçus scannés ou plusieurs images en un seul document PDF. Parfait pour organiser et partager.',
    'home.useCases.imagesToPdf.cta': 'Essayez JPG/PNG en PDF →',
    'home.useCases.compressPdf.title': 'Compresser des Fichiers PDF',
    'home.useCases.compressPdf.description': 'Réduisez la taille du fichier PDF sans perte significative de qualité. Idéal pour envoyer de gros documents par e-mail ou économiser de l\'espace de stockage.',
    'home.useCases.compressPdf.cta': 'Essayez Compresseur de PDF →',
    'home.useCases.mergePdf.title': 'Fusionner Plusieurs PDFs',
    'home.useCases.mergePdf.description': 'Combinez plusieurs fichiers PDF en un seul document. Idéal pour regrouper des contrats, rapports ou documents de projet.',
    'home.useCases.mergePdf.cta': 'Essayez Fusionner PDFs →',
    
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
    'about.paragraph1': 'PDFStation est une plateforme en ligne gratuite pour convertir et gérer des documents de manière simple et sécurisée. Notre objectif est de rendre les tâches quotidiennes avec les fichiers – comme convertir des images en PDF, transformer des documents Word en PDF, compresser de gros fichiers et fusionner plusieurs PDFs – rapides, intuitives et accessibles depuis n\'importe quel appareil.',
    'about.paragraph2': 'PDFStation est un projet indépendant créé et maintenu par Celso Silva, actuellement basé au Canada. L\'idée est venue d\'un besoin simple: avoir un outil propre, avec peu de publicités et direct pour gérer les fichiers sans installer de logiciel lourd sur le bureau.',
    'about.paragraph3': 'Nous nous concentrons sur la simplicité, la sécurité et les performances. Pas de menus compliqués, juste les outils dont vous avez besoin. Les fichiers sont traités uniquement le temps nécessaire pour convertir ou compresser, puis supprimés automatiquement. Les conversions sont optimisées pour que vous ne perdiez pas de temps à attendre.',
    'about.paragraph4': 'La plateforme évolue constamment, et de nouveaux outils et améliorations sont ajoutés au fil du temps en fonction de l\'utilisation réelle et des commentaires. Si vous avez des suggestions ou trouvez des problèmes, vous êtes toujours le bienvenu pour nous contacter via notre',
    'about.contact.link.text': 'page de contact',
    'about.contact.link.label': 'page de contact',
    'about.values.title': 'Nos Valeurs',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Nous serions ravis d\'avoir de vos nouvelles. Contactez-nous pour toute question, suggestion ou commentaire.',
    'contact.email.title': 'Envoyez-nous un Email',
    'contact.email.description': 'Si vous avez des questions, des suggestions ou des commentaires sur PDFStation, vous pouvez nous contacter par email:',
    'contact.bug.title': 'Signaler un Bug',
    'contact.bug.description': 'Vous avez trouvé un problème avec la conversion de fichiers ou remarqué que quelque chose ne fonctionne pas comme prévu? Faites-le nous savoir et nous le corrigerons dès que possible.',
    'contact.feature.title': 'Suggérer une Fonctionnalité',
    'contact.feature.description': 'Vous avez une idée pour un nouvel outil ou une amélioration? Nous cherchons toujours à améliorer PDFStation en fonction des commentaires des utilisateurs.',
    'contact.translation.title': 'Correction de Traduction',
    'contact.translation.description': 'Vous avez repéré une faute de frappe ou trouvé une traduction qui n\'a pas de sens? Aidez-nous à améliorer l\'expérience multilingue.',
    'contact.inquiry.title': 'Demande Générale',
    'contact.inquiry.description': 'Vous avez une question sur le fonctionnement de PDFStation, nos pratiques de confidentialité ou autre chose? Nous sommes là pour vous aider.',
    'contact.response.title': 'Délai de Réponse',
    'contact.response.paragraph1': 'Nous lisons tous les messages et faisons de notre mieux pour répondre dès que possible. En général, vous pouvez vous attendre à une réponse dans les 24-48 heures pendant les jours ouvrables.',
    'contact.response.paragraph2': 'Pour les questions urgentes liées aux problèmes de conversion de fichiers ou aux préoccupations de sécurité, veuillez mentionner "URGENT" dans la ligne d\'objet, et nous prioriserons votre message.',
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
    'tool.editorial.howItWorks': 'Comment ça marche',
    'tool.editorial.qualityPrivacy': 'Qualité et confidentialité',
    'tool.editorial.faq': 'Questions fréquemment posées',
    // Editorial content - images-to-pdf
    'tool.editorial.images-to-pdf.introP1': 'Combinez une ou plusieurs images JPG en un seul PDF, idéal pour l\'impression ou le partage comme un seul fichier.',
    'tool.editorial.images-to-pdf.introP2': 'Parfait pour les reçus scannés, notes manuscrites ou documents basés sur des photos que vous souhaitez dans un format standard.',
    'tool.editorial.images-to-pdf.howItWorks.step1': 'Téléchargez une ou plusieurs images JPG.',
    'tool.editorial.images-to-pdf.howItWorks.step2': 'Organisez l\'ordre si disponible.',
    'tool.editorial.images-to-pdf.howItWorks.step3': 'Téléchargez un seul PDF.',
    'tool.editorial.images-to-pdf.quality.bullet1': 'La qualité de l\'image dépend des photos originales.',
    'tool.editorial.images-to-pdf.quality.bullet2': 'Les PDFs peuvent être optimisés pour la taille si la compression est activée.',
    'tool.editorial.images-to-pdf.quality.bullet3': 'Les fichiers sont traités automatiquement; vous gardez la propriété.',
    'tool.editorial.images-to-pdf.faq1.q': 'Puis-je combiner plusieurs images en un PDF?',
    'tool.editorial.images-to-pdf.faq1.a': 'Oui—téléchargez plusieurs JPG et nous les assemblerons.',
    'tool.editorial.images-to-pdf.faq2.q': 'Conservera-t-il la même qualité d\'image?',
    'tool.editorial.images-to-pdf.faq2.a': 'Il sera proche de l\'original; une compression peut être appliquée selon les paramètres.',
    'tool.editorial.images-to-pdf.faq3.q': 'Puis-je ajouter des marges?',
    'tool.editorial.images-to-pdf.faq3.a': 'Si pris en charge, ajustez l\'ajustement/échelle de page; sinon, vous pouvez imprimer avec des marges depuis votre visualiseur.',
    // Editorial content - word-to-pdf
    'tool.editorial.word-to-pdf.introP1': 'Transformez votre document Word en un PDF propre qui semble cohérent sur n\'importe quel appareil.',
    'tool.editorial.word-to-pdf.introP2': 'Parfait pour partager des CV, propositions et documents qui ne doivent pas changer de formatage lorsqu\'ouverts ailleurs.',
    'tool.editorial.word-to-pdf.howItWorks.step1': 'Téléchargez votre fichier .doc ou .docx.',
    'tool.editorial.word-to-pdf.howItWorks.step2': 'Nous l\'exportons en PDF.',
    'tool.editorial.word-to-pdf.howItWorks.step3': 'Téléchargez votre PDF et partagez en toute confiance.',
    'tool.editorial.word-to-pdf.quality.bullet1': 'Les polices intégrées aident à préserver la mise en page entre les appareils.',
    'tool.editorial.word-to-pdf.quality.bullet2': 'Les grandes images peuvent augmenter la taille du fichier.',
    'tool.editorial.word-to-pdf.quality.bullet3': 'Votre document reste le vôtre; la conversion est automatisée.',
    'tool.editorial.word-to-pdf.faq1.q': 'Mes polices auront-elles le même aspect?',
    'tool.editorial.word-to-pdf.faq1.a': 'Les PDFs préservent bien la mise en page, surtout lorsque les polices sont intégrées. Certaines polices rares peuvent être substituées.',
    'tool.editorial.word-to-pdf.faq2.q': 'Puis-je convertir un fichier Google Docs?',
    'tool.editorial.word-to-pdf.faq2.a': 'Téléchargez-le d\'abord en .docx, puis téléchargez-le ici.',
    'tool.editorial.word-to-pdf.faq3.q': 'La sortie est-elle prête à l\'impression?',
    'tool.editorial.word-to-pdf.faq3.a': 'Pour la plupart des documents, oui. Vérifiez toujours les marges si vous avez besoin de spécifications d\'impression strictes.',
    // Editorial content - pdf-compress
    'tool.editorial.pdf-compress.introP1': 'Réduisez la taille du fichier PDF pour faciliter l\'envoi par e-mail, le téléchargement et le partage—sans perte de qualité inutile.',
    'tool.editorial.pdf-compress.introP2': 'Utilisez la compression pour les PDFs volumineux avec images, pages scannées ou graphiques lourds.',
    'tool.editorial.pdf-compress.howItWorks.step1': 'Téléchargez votre PDF.',
    'tool.editorial.pdf-compress.howItWorks.step2': 'Choisissez un niveau de compression (si disponible).',
    'tool.editorial.pdf-compress.howItWorks.step3': 'Téléchargez le PDF plus petit.',
    'tool.editorial.pdf-compress.quality.bullet1': 'Une compression plus élevée réduit davantage la taille mais peut adoucir les images.',
    'tool.editorial.pdf-compress.quality.bullet2': 'Le texte reste net dans la plupart des cas.',
    'tool.editorial.pdf-compress.quality.bullet3': 'Nous traitons votre fichier automatiquement; votre contenu reste le vôtre.',
    'tool.editorial.pdf-compress.faq1.q': 'Combien comprimera-t-il?',
    'tool.editorial.pdf-compress.faq1.a': 'Cela dépend de ce qu\'il y a dans le PDF. Les fichiers avec beaucoup d\'images se compriment davantage.',
    'tool.editorial.pdf-compress.faq2.q': 'Mon texte deviendra-t-il flou?',
    'tool.editorial.pdf-compress.faq2.a': 'Le texte reste généralement net; les images sont les plus affectées.',
    'tool.editorial.pdf-compress.faq3.q': 'La compression est-elle réversible?',
    'tool.editorial.pdf-compress.faq3.a': 'Non—gardez l\'original si vous pouvez avoir besoin d\'une qualité maximale plus tard.',
    // Editorial content - pdf-merge
    'tool.editorial.pdf-merge.introP1': 'Combinez plusieurs PDFs en un seul fichier dans l\'ordre que vous choisissez.',
    'tool.editorial.pdf-merge.introP2': 'Idéal pour regrouper des contrats, factures, chapitres ou documents de projet en un PDF partageable.',
    'tool.editorial.pdf-merge.howItWorks.step1': 'Téléchargez plusieurs fichiers PDF.',
    'tool.editorial.pdf-merge.howItWorks.step2': 'Organisez-les dans l\'ordre souhaité.',
    'tool.editorial.pdf-merge.howItWorks.step3': 'Téléchargez un PDF fusionné.',
    'tool.editorial.pdf-merge.quality.bullet1': 'La qualité originale de la page est préservée.',
    'tool.editorial.pdf-merge.quality.bullet2': 'Les grandes fusions peuvent prendre plus de temps selon la taille du fichier.',
    'tool.editorial.pdf-merge.quality.bullet3': 'Vos fichiers sont traités automatiquement; vous gardez la propriété.',
    'tool.editorial.pdf-merge.faq1.q': 'Puis-je réorganiser les fichiers avant de fusionner?',
    'tool.editorial.pdf-merge.faq1.a': 'Oui—glissez-déposez si l\'interface le prend en charge.',
    'tool.editorial.pdf-merge.faq2.q': 'Cela changera-t-il la qualité de la page?',
    'tool.editorial.pdf-merge.faq2.a': 'Non—la fusion garde les pages originales intactes.',
    'tool.editorial.pdf-merge.faq3.q': 'Y a-t-il une limite de fichiers?',
    'tool.editorial.pdf-merge.faq3.a': 'Les limites dépendent de la configuration du serveur; vérifiez les limites de téléchargement affichées dans l\'interface.',
    'tool.faq.size.question': 'Quelles tailles de fichier sont prises en charge?',
    'tool.faq.size.answer': 'Vous pouvez convertir des fichiers jusqu\'à 100MB. PDFStation est gratuit pour toujours, aucune inscription requise.',
    'tool.faq.time.question': 'Combien de temps prend la conversion?',
    'tool.faq.time.answer': 'La plupart des conversions de {inputType} en {outputType} se terminent en moins de 30 secondes, selon la taille et la complexité du fichier.',
    'tool.faq.data.question': 'Mes données sont-elles sécurisées?',
    'tool.faq.data.answer': 'Oui, tous les fichiers sont traités en toute sécurité en utilisant le chiffrement SSL et sont automatiquement supprimés de nos serveurs dans les 24 heures suivant la conversion.',
    'tool.more.info.title': 'Informations Supplémentaires',
    'tool.more.info.paragraph1': 'Notre convertisseur {toolName} utilise des algorithmes avancés pour garantir une conversion précise tout en préservant le formatage et la structure originaux de vos documents.',
    'tool.more.info.paragraph2': 'Toutes les conversions sont effectuées dans le cloud, vous n\'avez donc pas besoin d\'installer de logiciel. Téléchargez simplement votre fichier et téléchargez le résultat converti. Gratuit pour toujours.',
    'tool.nav.images-to-pdf': 'JPG/PNG → PDF',
    'tool.nav.word-to-pdf': 'Word → PDF',
    'tool.nav.compress': 'Compresser',
    'tool.nav.merge': 'Fusionner',
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
    'nav.contact': 'Contact',
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
    
    // HomePage new sections
    'home.what.title': 'Qu\'est-ce que PDFStation?',
    'home.what.paragraph1': 'PDFStation est une plateforme en ligne gratuite conçue pour simplifier la gestion de documents et la conversion de fichiers. Que vous ayez besoin de convertir des images en PDF, transformer des documents Word en format PDF, compresser de gros fichiers ou fusionner plusieurs PDF en un seul document, PDFStation offre tous ces outils en un seul endroit pratique.',
    'home.what.paragraph2': 'Notre mission est de rendre les tâches quotidiennes de fichiers rapides, intuitives et accessibles depuis n\'importe quel appareil. Vous n\'avez pas besoin d\'installer de logiciel, de créer un compte ou de vous soucier de paramètres complexes. Il suffit de télécharger votre fichier, de choisir le format souhaité et de télécharger le résultat en quelques secondes.',
    'home.what.paragraph3': 'PDFStation a été créé comme un projet indépendant pour fournir une alternative propre et légère en publicités aux logiciels de bureau lourds. Nous nous concentrons sur la simplicité, la sécurité et les performances, garantissant que vos fichiers sont traités rapidement et en toute sécurité sans complications inutiles.',
    'home.why.title': 'Pourquoi utiliser PDFStation au lieu d\'un logiciel de bureau?',
    'home.why.intro': 'Bien que les logiciels de bureau aient leur place, les outils en ligne comme PDFStation offrent plusieurs avantages qui les rendent idéaux pour les conversions de fichiers rapides et les tâches de gestion de documents.',
    'home.why.noInstallation.title': 'Aucune installation requise',
    'home.why.noInstallation.body': 'Accédez à PDFStation depuis n\'importe quel appareil avec un navigateur Web. Pas besoin de télécharger, d\'installer ou de mettre à jour des logiciels. C\'est particulièrement pratique lorsque vous utilisez un ordinateur partagé ou devez convertir des fichiers en déplacement.',
    'home.why.worksAnyDevice.title': 'Fonctionne sur n\'importe quel appareil',
    'home.why.worksAnyDevice.body': 'Que vous soyez sur Windows, Mac, Linux ou un appareil mobile, PDFStation fonctionne de la même manière. Votre système d\'exploitation n\'a pas d\'importance.',
    'home.why.privacy.title': 'Confidentialité et sécurité',
    'home.why.privacy.body': 'Les fichiers sont traités en toute sécurité et supprimés automatiquement après la conversion. Nous ne stockons pas vos fichiers de manière permanente ni ne les utilisons à d\'autres fins que la conversion demandée.',
    'home.why.speed.title': 'Vitesse et commodité',
    'home.why.speed.body': 'La plupart des conversions se terminent en quelques secondes. Pas besoin d\'attendre le chargement du logiciel ou de naviguer dans des menus complexes. Il suffit de télécharger, convertir et télécharger.',
    'home.why.upToDate.title': 'Toujours à jour',
    'home.why.upToDate.body': 'Les outils en ligne sont automatiquement mis à jour avec les dernières fonctionnalités et améliorations. Vous avez toujours accès à la version la plus récente sans mises à jour manuelles.',
    'home.why.free.title': 'Gratuit pour toujours',
    'home.why.free.body': 'Tous les outils principaux sont gratuits, sans coûts cachés ni frais d\'abonnement. Nous pouvons afficher des publicités pour maintenir le service durable, mais les outils eux-mêmes restent gratuits.',
    'home.filesHandled.title': 'Comment vos fichiers sont traités',
    'home.filesHandled.intro': 'Votre confidentialité et votre sécurité sont nos priorités absolues. Lorsque vous téléchargez un fichier sur PDFStation, voici ce qui se passe:',
    'home.filesHandled.secureUpload.title': 'Téléchargement sécurisé',
    'home.filesHandled.secureUpload.body': 'Les fichiers sont téléchargés via une connexion cryptée (HTTPS) pour garantir que vos données sont protégées pendant la transmission.',
    'home.filesHandled.temporaryProcessing.title': 'Traitement temporaire',
    'home.filesHandled.temporaryProcessing.body': 'Vos fichiers sont conservés sur nos serveurs uniquement le temps nécessaire pour terminer la conversion, généralement quelques minutes seulement.',
    'home.filesHandled.automaticDeletion.title': 'Suppression automatique',
    'home.filesHandled.automaticDeletion.body': 'Une fois le traitement terminé et que vous avez téléchargé votre fichier, il est automatiquement supprimé de nos serveurs. Nous ne stockons pas vos fichiers de manière permanente.',
    'home.filesHandled.noManualInspection.title': 'Aucune inspection manuelle',
    'home.filesHandled.noManualInspection.body': 'Nous ne visualisons, ne lisons ni n\'inspectons manuellement le contenu de vos fichiers. Le processus de conversion est entièrement automatisé.',
    'home.filesHandled.noSharing.title': 'Aucun partage',
    'home.filesHandled.noSharing.body': 'Nous ne vendons, ne partageons ni ne distribuons jamais vos fichiers à des tiers. Vos fichiers restent privés et confidentiels.',
    'home.filesHandled.privacyLink': 'Pour plus d\'informations détaillées sur nos pratiques de confidentialité, veuillez lire notre Politique de confidentialité.',
    'home.filesHandled.privacyLink.text': 'Pour plus d\'informations détaillées sur nos pratiques de confidentialité, veuillez lire notre',
    'home.filesHandled.privacyLink.label': 'Politique de confidentialité',
    'home.faq.title': 'Questions fréquemment posées',
    'home.faq.q1.question': 'Mes fichiers sont-ils stockés de manière permanente?',
    'home.faq.q1.answer': 'Non. Les fichiers sont conservés uniquement le temps nécessaire pour traiter votre demande et sont supprimés automatiquement par la suite. Nous ne stockons pas vos fichiers de manière permanente ni ne les utilisons à d\'autres fins que la conversion demandée.',
    'home.faq.q2.question': 'PDFStation est-il gratuit?',
    'home.faq.q2.answer': 'Oui. Les outils principaux sont entièrement gratuits. Nous pouvons afficher des publicités pour maintenir le projet durable, mais tous les outils de conversion restent gratuits sans abonnement ni paiement requis.',
    'home.faq.q3.question': 'Y a-t-il une limite de taille de fichier?',
    'home.faq.q3.answer': 'Oui, il existe des limites techniques selon l\'outil et la configuration du serveur. Actuellement, nous prenons en charge les fichiers jusqu\'à 100 Mo. Si un fichier est trop volumineux, nous afficherons un message d\'erreur et vous pourrez essayer de le compresser localement avant de le télécharger.',
    'home.faq.q4.question': 'Dois-je créer un compte?',
    'home.faq.q4.answer': 'Non. Vous pouvez utiliser tous les outils principaux sans vous inscrire ou vous connecter. Il suffit de télécharger votre fichier, de le convertir et de télécharger le résultat. Aucune création de compte n\'est requise.',
    'home.faq.q5.question': 'Quels formats sont pris en charge?',
    'home.faq.q5.answer': 'Les formats courants incluent JPG, PNG, PDF et DOCX (pour la conversion Word en PDF). Le support peut s\'étendre au fil du temps en fonction des commentaires et de la demande des utilisateurs. Consultez la page de chaque outil pour les exigences de format spécifiques.',
    'home.faq.viewAll': 'Voir toutes les questions fréquentes →',
    
    // Privacy Policy new sections
    'privacy.new.intro.title': 'Introduction',
    'privacy.new.intro.text': 'Cette Politique de confidentialité explique comment PDFStation ("nous", "notre", "nos") traite les informations lorsque vous utilisez notre site Web et nos outils. Nous nous engageons à protéger votre confidentialité et à assurer la sécurité de vos données.',
    'privacy.new.files.title': '1. Fichiers que vous téléchargez',
    'privacy.new.files.intro': 'Les fichiers que vous téléchargez sont utilisés uniquement pour effectuer l\'opération demandée (convertir, compresser, fusionner, etc.). Les fichiers sont conservés temporairement sur nos serveurs pour traitement et sont supprimés automatiquement après une courte période.',
    'privacy.new.files.item1': 'Les fichiers sont traités uniquement le temps nécessaire pour terminer votre demande',
    'privacy.new.files.item2': 'Nous ne vendons, ne partageons ni n\'inspectons manuellement le contenu de vos fichiers',
    'privacy.new.files.item3': 'Les fichiers sont automatiquement supprimés de nos serveurs après traitement',
    'privacy.new.files.item4': 'Nous ne stockons pas vos fichiers de manière permanente ni ne les utilisons à d\'autres fins que la conversion demandée',
    'privacy.new.usage.title': '2. Données d\'utilisation et analyses',
    'privacy.new.usage.intro': 'Nous pouvons collecter des données d\'utilisation anonymes pour comprendre comment le site est utilisé (par exemple, quels outils sont les plus populaires, emplacement approximatif, type d\'appareil). Cela peut être fait en utilisant des outils d\'analyse tiers tels que Mixpanel ou des services similaires.',
    'privacy.new.usage.item1': 'Ces données nous aident à améliorer les performances, la stabilité et l\'expérience utilisateur',
    'privacy.new.usage.item2': 'Nous ne collectons pas d\'informations personnellement identifiables sans votre consentement',
    'privacy.new.usage.item3': 'Les données d\'analyse sont agrégées et anonymisées',
    'privacy.new.usage.item4': 'Nous utilisons ces informations pour corriger les bugs et optimiser nos outils',
    'privacy.new.usage.item5': 'Vous pouvez vous désinscrire du suivi d\'analyse via les paramètres de votre navigateur',
    'privacy.new.cookies.title': '3. Cookies et technologies similaires',
    'privacy.new.cookies.intro': 'Nous pouvons utiliser des cookies ou un stockage local pour mémoriser votre préférence de langue ou améliorer les performances de chargement. Les partenaires publicitaires tels que Google AdSense peuvent utiliser des cookies pour diffuser et personnaliser les publicités, conformément à leurs propres politiques.',
    'privacy.new.cookies.item1': 'Les cookies sont utilisés pour mémoriser vos préférences (comme la sélection de langue)',
    'privacy.new.cookies.item2': 'Nous n\'utilisons pas de cookies pour suivre votre comportement de navigation sur d\'autres sites Web',
    'privacy.new.cookies.item3': 'Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, bien que cela puisse affecter certaines fonctionnalités',
    'privacy.new.cookies.item4': 'Les réseaux publicitaires tiers peuvent utiliser leurs propres cookies pour la personnalisation des publicités',
    'privacy.new.advertising.title': '4. Publicité',
    'privacy.new.advertising.text': 'PDFStation peut afficher des publicités provenant de réseaux tiers tels que Google AdSense. Ces réseaux peuvent utiliser des cookies ou d\'autres identifiants pour afficher des publicités pertinentes conformément à leurs propres politiques publicitaires et de confidentialité. Nous ne contrôlons pas le contenu de ces publicités, mais nous travaillons uniquement avec des partenaires publicitaires réputés.',
    'privacy.new.personal.title': '5. Informations personnelles',
    'privacy.new.personal.text': 'Nous ne vous demandons pas de créer un compte pour utiliser les outils principaux. Si vous nous contactez par e-mail, nous utiliserons votre adresse e-mail uniquement pour répondre à votre message. Nous ne partageons pas votre adresse e-mail avec des tiers.',
    'privacy.new.retention.title': '6. Conservation des données',
    'privacy.new.retention.text': 'Les fichiers téléchargés sur PDFStation sont supprimés automatiquement après traitement, généralement en quelques minutes. Nous ne conservons pas vos fichiers plus longtemps que nécessaire pour terminer la conversion. Les données d\'analyse peuvent être conservées sous forme agrégée pendant de plus longues périodes pour nous aider à améliorer le service.',
    'privacy.new.rights.title': '7. Vos droits',
    'privacy.new.rights.intro': 'Vous avez le droit de:',
    'privacy.new.rights.item1': 'Accéder à toute information personnelle que nous pourrions avoir sur vous',
    'privacy.new.rights.item2': 'Demander la suppression de vos données',
    'privacy.new.rights.item3': 'Vous désinscrire du suivi d\'analyse',
    'privacy.new.rights.item4': 'Nous contacter avec des préoccupations ou questions de confidentialité',
    'privacy.new.changes.title': '8. Modifications de cette politique',
    'privacy.new.changes.text': 'Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. La dernière version sera toujours disponible sur cette page. Nous informerons les utilisateurs des modifications importantes en mettant à jour la date "Dernière mise à jour" en haut de cette page.',
    'privacy.new.contact.title': '9. Contact',
    'privacy.new.contact.text': 'Si vous avez des questions sur cette Politique de confidentialité ou sur la façon dont nous traitons vos données, vous pouvez nous contacter à:',
    'privacy.new.contact.email': 'hi@pdfstation.app',
    
    // Tool page detailed explanations
    'tool.images-to-pdf.detail.title': 'Convertir JPG et PNG en PDF en ligne',
    'tool.images-to-pdf.detail.paragraph1': 'PDFStation vous permet de convertir des images en fichiers PDF de haute qualité directement dans votre navigateur. C\'est utile lorsque vous devez regrouper plusieurs photos en un seul document, envoyer des scans en PDF ou préparer des fichiers pour l\'impression.',
    'tool.images-to-pdf.detail.paragraph2': 'Le processus est simple: téléchargez une ou plusieurs images JPG ou PNG, organisez-les dans l\'ordre souhaité si nécessaire, cliquez sur convertir et téléchargez votre PDF. Toutes les conversions se font via une connexion sécurisée. Les fichiers sont conservés juste assez longtemps pour générer votre PDF et sont supprimés automatiquement par la suite.',
    'tool.images-to-pdf.detail.paragraph3': 'Que vous convertissiez une seule photo ou combiniez plusieurs images en un PDF, notre outil préserve la qualité de l\'image tout en créant un document PDF professionnel facile à partager, imprimer ou archiver.',
    'tool.word-to-pdf.detail.title': 'Transformer des documents Word en PDF en un clic',
    'tool.word-to-pdf.detail.paragraph1': 'Avec l\'outil Word en PDF, vous pouvez convertir des fichiers DOC et DOCX en PDF qui préservent la mise en page, les polices et la pagination. C\'est idéal pour les CV, rapports, contrats et tout document qui doit avoir la même apparence sur tous les appareils.',
    'tool.word-to-pdf.detail.paragraph2': 'Il suffit de télécharger votre fichier Word, d\'attendre quelques secondes et de télécharger un PDF prêt à être partagé. Aucune installation, aucun enregistrement. La conversion maintient la mise en forme de votre document, y compris les en-têtes, pieds de page, tableaux et images, garantissant que votre PDF ressemble exactement à ce qui était prévu.',
    'tool.word-to-pdf.detail.paragraph3': 'Cet outil est parfait pour les professionnels qui doivent partager des documents qui doivent apparaître cohérents sur différents appareils et systèmes d\'exploitation. Le format PDF garantit que votre document aura la même apparence qu\'il soit visualisé sur un ordinateur, une tablette ou un smartphone.',
    'tool.pdf-compress.detail.title': 'Compresser de gros fichiers PDF sans perdre en qualité',
    'tool.pdf-compress.detail.paragraph1': 'L\'outil de compression PDF réduit la taille du fichier pour faciliter l\'envoi de documents par e-mail, le téléchargement sur des plateformes ou leur stockage dans le cloud. Nous appliquons une compression intelligente qui tente de garder le texte et les images lisibles tout en réduisant le poids inutile.',
    'tool.pdf-compress.detail.paragraph2': 'Vous pouvez l\'utiliser pour les présentations, documents scannés et rapports multi-pages. L\'algorithme de compression analyse votre PDF et optimise les images, supprime les données redondantes et compresse le contenu sans affecter significativement la qualité visuelle.',
    'tool.pdf-compress.detail.paragraph3': 'C\'est particulièrement utile lorsque vous devez respecter les limites de taille de fichier pour les pièces jointes e-mail ou les soumissions en ligne. Compressez votre PDF une fois et vous aurez un fichier plus petit plus facile à partager tout en maintenant une apparence professionnelle.',
    'tool.pdf-merge.detail.title': 'Combiner plusieurs PDF en un seul document',
    'tool.pdf-merge.detail.paragraph1': 'L\'outil de fusion vous permet de télécharger plusieurs fichiers PDF et de les joindre en un seul. C\'est utile pour combiner des chapitres, factures ou pages scannées en un seul fichier plus facile à partager et organiser.',
    'tool.pdf-merge.detail.paragraph2': 'Vous pouvez choisir l\'ordre des fichiers avant de fusionner puis télécharger un PDF consolidé en quelques clics. Toutes les pages de vos PDF sélectionnés seront combinées dans l\'ordre que vous spécifiez, créant un document fluide.',
    'tool.pdf-merge.detail.paragraph3': 'Cet outil est parfait pour les étudiants qui combinent des notes de cours, les professionnels qui fusionnent des rapports ou toute personne qui doit organiser plusieurs documents PDF en un seul fichier facile à gérer. Le PDF fusionné maintient la qualité et la mise en forme de tous les documents originaux.',
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
    'home.hero.title': 'Convertitore PDF online gratuito e strumenti. Converti immagini, documenti Word, comprimi e unisci PDF all\'istante.',
    'home.hero.subtitle': 'Cos\'è PDFStation?',
    'home.hero.description': 'PDFStation è una piattaforma online gratuita e sicura per convertire e gestire documenti. Converti immagini in PDF, documenti Word in PDF, comprimi file di grandi dimensioni e unisci più PDF in uno—tutto senza installare software o creare un account. La nostra missione è rendere la conversione di file semplice, veloce e accessibile a tutti. Tutti gli strumenti sono gratuiti per sempre, supportati da annunci, con un limite di dimensione file di 100MB per file.',
    'home.hero.cta.choose': 'Scegli file',
    'home.hero.cta.explore': 'Esplora strumenti',
    
    // Common Use Cases
    'home.useCases.title': 'Casi d\'Uso Comuni',
    'home.useCases.wordToPdf.title': 'Convertire Word in PDF',
    'home.useCases.wordToPdf.description': 'Devi condividere un curriculum o un documento? Converti file Word in PDF per garantire una formattazione coerente su tutti i dispositivi.',
    'home.useCases.wordToPdf.cta': 'Prova Word in PDF →',
    'home.useCases.imagesToPdf.title': 'Convertire Immagini in PDF',
    'home.useCases.imagesToPdf.description': 'Trasforma foto, ricevute scansionate o più immagini in un unico documento PDF. Perfetto per organizzare e condividere.',
    'home.useCases.imagesToPdf.cta': 'Prova JPG/PNG in PDF →',
    'home.useCases.compressPdf.title': 'Comprimere File PDF',
    'home.useCases.compressPdf.description': 'Riduci la dimensione del file PDF senza perdita significativa di qualità. Ottimo per inviare documenti grandi via email o risparmiare spazio di archiviazione.',
    'home.useCases.compressPdf.cta': 'Prova Compressore PDF →',
    'home.useCases.mergePdf.title': 'Unire Più PDF',
    'home.useCases.mergePdf.description': 'Combina più file PDF in un unico documento. Ideale per raggruppare contratti, report o documenti di progetto.',
    'home.useCases.mergePdf.cta': 'Prova Unire PDF →',
    
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
    'about.paragraph1': 'PDFStation è una piattaforma online gratuita per convertire e gestire documenti in modo semplice e sicuro. Il nostro obiettivo è rendere le attività quotidiane con i file – come convertire immagini in PDF, trasformare documenti Word in PDF, comprimere file grandi e unire più PDF – veloci, intuitive e accessibili da qualsiasi dispositivo.',
    'about.paragraph2': 'PDFStation è un progetto indipendente creato e mantenuto da Celso Silva, attualmente con base in Canada. L\'idea è nata da un bisogno semplice: avere uno strumento pulito, con pochi annunci e diretto per gestire i file senza installare software pesanti sul desktop.',
    'about.paragraph3': 'Ci concentriamo su semplicità, sicurezza e prestazioni. Nessun menu complicato, solo gli strumenti di cui hai bisogno. I file vengono elaborati solo per il tempo necessario per convertire o comprimere, poi rimossi automaticamente. Le conversioni sono ottimizzate per non farti perdere tempo ad aspettare.',
    'about.paragraph4': 'La piattaforma è in costante evoluzione, e nuovi strumenti e miglioramenti vengono aggiunti nel tempo in base all\'uso reale e ai feedback. Se hai suggerimenti o trovi problemi, sei sempre il benvenuto a contattarci tramite la nostra',
    'about.contact.link.text': 'pagina di contatto',
    'about.contact.link.label': 'pagina di contatto',
    'about.values.title': 'I Nostri Valori',
    
    // Contact Page
    'contact.title': 'Contatto',
    'contact.subtitle': 'Ci piacerebbe sentirti. Mettiti in contatto con qualsiasi domanda, suggerimento o feedback.',
    'contact.email.title': 'Inviaci un\'Email',
    'contact.email.description': 'Se hai domande, suggerimenti o feedback su PDFStation, puoi contattarci via email:',
    'contact.bug.title': 'Segnala un Bug',
    'contact.bug.description': 'Hai trovato un problema con la conversione di file o notato qualcosa che non funziona come previsto? Faccelo sapere e lo risolveremo il prima possibile.',
    'contact.feature.title': 'Suggerisci una Funzionalità',
    'contact.feature.description': 'Hai un\'idea per un nuovo strumento o miglioramento? Cerchiamo sempre di migliorare PDFStation in base al feedback degli utenti.',
    'contact.translation.title': 'Correzione Traduzione',
    'contact.translation.description': 'Hai trovato un errore di battitura o una traduzione che non ha senso? Aiutaci a migliorare l\'esperienza multilingue.',
    'contact.inquiry.title': 'Richiesta Generale',
    'contact.inquiry.description': 'Hai una domanda su come funziona PDFStation, le nostre pratiche sulla privacy o altro? Siamo qui per aiutare.',
    'contact.response.title': 'Tempo di Risposta',
    'contact.response.paragraph1': 'Leggiamo tutti i messaggi e facciamo del nostro meglio per rispondere il prima possibile. In genere, puoi aspettarti una risposta entro 24-48 ore durante i giorni lavorativi.',
    'contact.response.paragraph2': 'Per questioni urgenti relative a problemi di conversione di file o preoccupazioni di sicurezza, si prega di menzionare "URGENTE" nella riga dell\'oggetto, e daremo priorità al tuo messaggio.',
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
    'tool.editorial.howItWorks': 'Come funziona',
    'tool.editorial.qualityPrivacy': 'Qualità e privacy',
    'tool.editorial.faq': 'Domande frequenti',
    // Editorial content - images-to-pdf
    'tool.editorial.images-to-pdf.introP1': 'Combina una o più immagini JPG in un unico PDF, ideale per la stampa o la condivisione come un unico file.',
    'tool.editorial.images-to-pdf.introP2': 'Ottimo per ricevute scansionate, appunti scritti a mano o documenti basati su foto che desideri in un formato standard.',
    'tool.editorial.images-to-pdf.howItWorks.step1': 'Carica una o più immagini JPG.',
    'tool.editorial.images-to-pdf.howItWorks.step2': 'Organizza l\'ordine se disponibile.',
    'tool.editorial.images-to-pdf.howItWorks.step3': 'Scarica un singolo PDF.',
    'tool.editorial.images-to-pdf.quality.bullet1': 'La qualità dell\'immagine dipende dalle foto originali.',
    'tool.editorial.images-to-pdf.quality.bullet2': 'I PDF possono essere ottimizzati per la dimensione se la compressione è abilitata.',
    'tool.editorial.images-to-pdf.quality.bullet3': 'I file vengono elaborati automaticamente; mantieni la proprietà.',
    'tool.editorial.images-to-pdf.faq1.q': 'Posso combinare più immagini in un PDF?',
    'tool.editorial.images-to-pdf.faq1.a': 'Sì—carica più JPG e li assembleremo.',
    'tool.editorial.images-to-pdf.faq2.q': 'Conserverà la stessa qualità dell\'immagine?',
    'tool.editorial.images-to-pdf.faq2.a': 'Sarà vicino all\'originale; può essere applicata una compressione in base alle impostazioni.',
    'tool.editorial.images-to-pdf.faq3.q': 'Posso aggiungere margini?',
    'tool.editorial.images-to-pdf.faq3.a': 'Se supportato, regola l\'adattamento/scala della pagina; altrimenti puoi stampare con margini dal tuo visualizzatore.',
    // Editorial content - word-to-pdf
    'tool.editorial.word-to-pdf.introP1': 'Trasforma il tuo documento Word in un PDF pulito che appare coerente su qualsiasi dispositivo.',
    'tool.editorial.word-to-pdf.introP2': 'Perfetto per condividere curriculum, proposte e documenti che non devono cambiare formattazione quando aperti altrove.',
    'tool.editorial.word-to-pdf.howItWorks.step1': 'Carica il tuo file .doc o .docx.',
    'tool.editorial.word-to-pdf.howItWorks.step2': 'Lo esportiamo come PDF.',
    'tool.editorial.word-to-pdf.howItWorks.step3': 'Scarica il tuo PDF e condividi con fiducia.',
    'tool.editorial.word-to-pdf.quality.bullet1': 'I caratteri incorporati aiutano a preservare il layout tra i dispositivi.',
    'tool.editorial.word-to-pdf.quality.bullet2': 'Le immagini grandi possono aumentare la dimensione del file.',
    'tool.editorial.word-to-pdf.quality.bullet3': 'Il tuo documento rimane tuo; la conversione è automatizzata.',
    'tool.editorial.word-to-pdf.faq1.q': 'I miei caratteri avranno lo stesso aspetto?',
    'tool.editorial.word-to-pdf.faq1.a': 'I PDF preservano bene il layout, specialmente quando i caratteri sono incorporati. Alcuni caratteri rari possono essere sostituiti.',
    'tool.editorial.word-to-pdf.faq2.q': 'Posso convertire un file Google Docs?',
    'tool.editorial.word-to-pdf.faq2.a': 'Scaricalo prima come .docx, poi caricarlo qui.',
    'tool.editorial.word-to-pdf.faq3.q': 'L\'output è pronto per la stampa?',
    'tool.editorial.word-to-pdf.faq3.a': 'Per la maggior parte dei documenti, sì. Controlla sempre i margini se hai bisogno di specifiche di stampa rigorose.',
    // Editorial content - pdf-compress
    'tool.editorial.pdf-compress.introP1': 'Riduci la dimensione del file PDF per facilitare l\'invio via email, il caricamento e la condivisione—senza perdita di qualità inutile.',
    'tool.editorial.pdf-compress.introP2': 'Usa la compressione per PDF grandi con immagini, pagine scansionate o grafica pesante.',
    'tool.editorial.pdf-compress.howItWorks.step1': 'Carica il tuo PDF.',
    'tool.editorial.pdf-compress.howItWorks.step2': 'Scegli un livello di compressione (se disponibile).',
    'tool.editorial.pdf-compress.howItWorks.step3': 'Scarica il PDF più piccolo.',
    'tool.editorial.pdf-compress.quality.bullet1': 'Una compressione più alta riduce maggiormente la dimensione ma può ammorbidire le immagini.',
    'tool.editorial.pdf-compress.quality.bullet2': 'Il testo rimane nitido nella maggior parte dei casi.',
    'tool.editorial.pdf-compress.quality.bullet3': 'Elaboriamo il tuo file automaticamente; il tuo contenuto rimane tuo.',
    'tool.editorial.pdf-compress.faq1.q': 'Quanto comprimerà?',
    'tool.editorial.pdf-compress.faq1.a': 'Dipende da cosa c\'è dentro il PDF. I file con molte immagini si comprimono di più.',
    'tool.editorial.pdf-compress.faq2.q': 'Il mio testo diventerà sfocato?',
    'tool.editorial.pdf-compress.faq2.a': 'Il testo solitamente rimane nitido; le immagini sono le più colpite.',
    'tool.editorial.pdf-compress.faq3.q': 'La compressione è reversibile?',
    'tool.editorial.pdf-compress.faq3.a': 'No—tieni l\'originale se potresti aver bisogno di qualità massima in seguito.',
    // Editorial content - pdf-merge
    'tool.editorial.pdf-merge.introP1': 'Combina più PDF in un unico file nell\'ordine che scegli.',
    'tool.editorial.pdf-merge.introP2': 'Ideale per raggruppare contratti, fatture, capitoli o documenti di progetto in un PDF condivisibile.',
    'tool.editorial.pdf-merge.howItWorks.step1': 'Carica più file PDF.',
    'tool.editorial.pdf-merge.howItWorks.step2': 'Organizzali nell\'ordine desiderato.',
    'tool.editorial.pdf-merge.howItWorks.step3': 'Scarica un PDF unito.',
    'tool.editorial.pdf-merge.quality.bullet1': 'La qualità originale della pagina è preservata.',
    'tool.editorial.pdf-merge.quality.bullet2': 'Le unioni grandi possono richiedere più tempo a seconda della dimensione del file.',
    'tool.editorial.pdf-merge.quality.bullet3': 'I tuoi file vengono elaborati automaticamente; mantieni la proprietà.',
    'tool.editorial.pdf-merge.faq1.q': 'Posso riordinare i file prima di unire?',
    'tool.editorial.pdf-merge.faq1.a': 'Sì—trascina e rilascia se l\'interfaccia lo supporta.',
    'tool.editorial.pdf-merge.faq2.q': 'Cambierà la qualità della pagina?',
    'tool.editorial.pdf-merge.faq2.a': 'No—l\'unione mantiene le pagine originali intatte.',
    'tool.editorial.pdf-merge.faq3.q': 'C\'è un limite di file?',
    'tool.editorial.pdf-merge.faq3.a': 'I limiti dipendono dalla configurazione del server; controlla i limiti di caricamento mostrati nell\'interfaccia.',
    'tool.faq.size.question': 'Quali dimensioni di file sono supportate?',
    'tool.faq.size.answer': 'Puoi convertire file fino a 100MB. PDFStation è gratuito per sempre, nessuna registrazione richiesta.',
    'tool.faq.time.question': 'Quanto tempo richiede la conversione?',
    'tool.faq.time.answer': 'La maggior parte delle conversioni da {inputType} a {outputType} si completano in meno di 30 secondi, a seconda delle dimensioni e della complessità del file.',
    'tool.faq.data.question': 'I miei dati sono sicuri?',
    'tool.faq.data.answer': 'Sì, tutti i file vengono elaborati in modo sicuro utilizzando la crittografia SSL e vengono automaticamente eliminati dai nostri server entro 24 ore dalla conversione.',
    'tool.more.info.title': 'Informazioni Aggiuntive',
    'tool.more.info.paragraph1': 'Il nostro convertitore {toolName} utilizza algoritmi avanzati per garantire una conversione accurata preservando la formattazione e la struttura originali dei tuoi documenti.',
    'tool.more.info.paragraph2': 'Tutte le conversioni vengono eseguite nel cloud, quindi non è necessario installare alcun software. Carica semplicemente il tuo file e scarica il risultato convertito. Gratuito per sempre.',
    'tool.nav.images-to-pdf': 'JPG/PNG → PDF',
    'tool.nav.word-to-pdf': 'Word → PDF',
    'tool.nav.compress': 'Comprimi',
    'tool.nav.merge': 'Unisci',
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
    'nav.contact': 'Contatto',
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
    
    // HomePage new sections
    'home.what.title': 'Cos\'è PDFStation?',
    'home.what.paragraph1': 'PDFStation è una piattaforma online gratuita progettata per semplificare la gestione dei documenti e la conversione dei file. Che tu debba convertire immagini in PDF, trasformare documenti Word in formato PDF, comprimere file di grandi dimensioni o unire più PDF in un unico documento, PDFStation offre tutti questi strumenti in un unico posto conveniente.',
    'home.what.paragraph2': 'La nostra missione è rendere le attività quotidiane sui file veloci, intuitive e accessibili da qualsiasi dispositivo. Non è necessario installare software, creare un account o preoccuparsi di impostazioni complesse. Basta caricare il file, scegliere il formato desiderato e scaricare il risultato in pochi secondi.',
    'home.what.paragraph3': 'PDFStation è stato creato come un progetto indipendente per fornire un\'alternativa pulita e con pochi annunci al software pesante per desktop. Ci concentriamo su semplicità, sicurezza e prestazioni, garantendo che i tuoi file vengano elaborati rapidamente e in modo sicuro senza complicazioni inutili.',
    'home.why.title': 'Perché usare PDFStation invece di software desktop?',
    'home.why.intro': 'Sebbene il software desktop abbia il suo posto, gli strumenti online come PDFStation offrono diversi vantaggi che li rendono ideali per conversioni rapide di file e attività di gestione documenti.',
    'home.why.noInstallation.title': 'Nessuna installazione richiesta',
    'home.why.noInstallation.body': 'Accedi a PDFStation da qualsiasi dispositivo con un browser web. Non è necessario scaricare, installare o aggiornare software. Questo è particolarmente conveniente quando usi un computer condiviso o devi convertire file in movimento.',
    'home.why.worksAnyDevice.title': 'Funziona su qualsiasi dispositivo',
    'home.why.worksAnyDevice.body': 'Sia che tu sia su Windows, Mac, Linux o un dispositivo mobile, PDFStation funziona allo stesso modo. Il tuo sistema operativo non ha importanza.',
    'home.why.privacy.title': 'Privacy e sicurezza',
    'home.why.privacy.body': 'I file vengono elaborati in modo sicuro ed eliminati automaticamente dopo la conversione. Non archiviamo i tuoi file in modo permanente né li utilizziamo per scopi diversi dalla conversione richiesta.',
    'home.why.speed.title': 'Velocità e comodità',
    'home.why.speed.body': 'La maggior parte delle conversioni si completa in pochi secondi. Non è necessario attendere il caricamento del software o navigare attraverso menu complessi. Basta caricare, convertire e scaricare.',
    'home.why.upToDate.title': 'Sempre aggiornato',
    'home.why.upToDate.body': 'Gli strumenti online vengono aggiornati automaticamente con le ultime funzionalità e miglioramenti. Hai sempre accesso alla versione più recente senza aggiornamenti manuali.',
    'home.why.free.title': 'Gratuito per sempre',
    'home.why.free.body': 'Tutti gli strumenti principali sono gratuiti, senza costi nascosti o tariffe di abbonamento. Possiamo mostrare annunci per mantenere il servizio sostenibile, ma gli strumenti stessi rimangono gratuiti.',
    'home.filesHandled.title': 'Come vengono gestiti i tuoi file',
    'home.filesHandled.intro': 'La tua privacy e la tua sicurezza sono le nostre massime priorità. Quando carichi un file su PDFStation, ecco cosa succede:',
    'home.filesHandled.secureUpload.title': 'Caricamento sicuro',
    'home.filesHandled.secureUpload.body': 'I file vengono caricati tramite una connessione crittografata (HTTPS) per garantire che i tuoi dati siano protetti durante la trasmissione.',
    'home.filesHandled.temporaryProcessing.title': 'Elaborazione temporanea',
    'home.filesHandled.temporaryProcessing.body': 'I tuoi file vengono mantenuti sui nostri server solo per il tempo necessario a completare la conversione, di solito pochi minuti.',
    'home.filesHandled.automaticDeletion.title': 'Eliminazione automatica',
    'home.filesHandled.automaticDeletion.body': 'Una volta completata l\'elaborazione e dopo aver scaricato il file, questo viene eliminato automaticamente dai nostri server. Non archiviamo i tuoi file in modo permanente.',
    'home.filesHandled.noManualInspection.title': 'Nessuna ispezione manuale',
    'home.filesHandled.noManualInspection.body': 'Non visualizziamo, leggiamo o ispezioniamo manualmente il contenuto dei tuoi file. Il processo di conversione è completamente automatizzato.',
    'home.filesHandled.noSharing.title': 'Nessuna condivisione',
    'home.filesHandled.noSharing.body': 'Non vendiamo, condividiamo o distribuiamo i tuoi file a terze parti. I tuoi file rimangono privati e confidenziali.',
    'home.filesHandled.privacyLink': 'For more detailed information about our privacy practices, please read our Privacy Policy.',
    'home.filesHandled.privacyLink.text': 'Per maggiori dettagli sulle nostre pratiche relative alla privacy, leggi la nostra',
    'home.filesHandled.privacyLink.label': 'Informativa sulla Privacy',
    'home.faq.title': 'Domande frequenti',
    'home.faq.q1.question': 'I miei file vengono archiviati in modo permanente?',
    'home.faq.q1.answer': 'No. I file vengono conservati solo per il tempo necessario a elaborare la tua richiesta e vengono eliminati automaticamente in seguito. Non archiviamo i tuoi file in modo permanente e non li utilizziamo per scopi diversi dalla conversione che hai richiesto.',
    'home.faq.q2.question': 'PDFStation è gratuito?',
    'home.faq.q2.answer': 'Sì. Gli strumenti principali sono completamente gratuiti. Possiamo mostrare annunci per mantenere sostenibile il progetto, ma tutti gli strumenti di conversione rimangono gratuiti, senza abbonamenti o pagamenti.',
    'home.faq.q3.question': 'Esiste un limite di dimensione dei file?',
    'home.faq.q3.answer': 'Sì, esistono limiti tecnici a seconda dello strumento e della configurazione del server. Attualmente supportiamo file fino a 100 MB. Se un file è troppo grande, mostreremo un messaggio di errore e potrai provare a comprimerlo localmente prima di caricarlo.',
    'home.faq.q4.question': 'Devo creare un account?',
    'home.faq.q4.answer': 'No. Puoi usare tutti gli strumenti principali senza registrarti o effettuare l\'accesso. Ti basta caricare il file, convertirlo e scaricare il risultato. Non è richiesta la creazione di un account.',
    'home.faq.q5.question': 'Quali formati sono supportati?',
    'home.faq.q5.answer': 'I formati più comuni includono JPG, PNG, PDF e DOCX (per la conversione da Word a PDF). Potremmo aggiungere altri formati nel tempo in base ai feedback degli utenti e alla domanda. Controlla la pagina di ciascuno strumento per i requisiti specifici di formato.',
    'home.faq.viewAll': 'Visualizza tutte le domande frequenti →',
    'privacy.new.intro.title': 'Introduzione',
    'privacy.new.intro.text': 'La presente Informativa sulla Privacy spiega come PDFStation ("noi", "nostro", "ci") gestisce le informazioni quando utilizzi il nostro sito web e i nostri strumenti. Siamo impegnati a proteggere la tua privacy e a garantire la sicurezza dei tuoi dati.',
    'privacy.new.files.title': '1. File che carichi',
    'privacy.new.files.intro': 'I file che carichi vengono utilizzati esclusivamente per eseguire l\'operazione richiesta (convertire, comprimere, unire, ecc.). I file vengono conservati temporaneamente sui nostri server per l\'elaborazione e vengono eliminati automaticamente dopo un breve periodo.',
    'privacy.new.files.item1': 'I file vengono elaborati solo per il tempo necessario a completare la tua richiesta',
    'privacy.new.files.item2': 'Non vendiamo, condividiamo né ispezioniamo manualmente il contenuto dei tuoi file',
    'privacy.new.files.item3': 'I file vengono eliminati automaticamente dai nostri server dopo l\'elaborazione',
    'privacy.new.files.item4': 'Non conserviamo i tuoi file in modo permanente né li utilizziamo per scopi diversi dalla conversione che hai richiesto',
    'privacy.new.usage.title': '2. Dati di utilizzo e analisi',
    'privacy.new.usage.intro': 'Possiamo raccogliere dati di utilizzo anonimi per capire come viene utilizzato il sito (ad esempio, quali strumenti sono più popolari, posizione approssimativa, tipo di dispositivo). Questo può essere fatto utilizzando strumenti di analisi di terze parti come Mixpanel o servizi simili.',
    'privacy.new.usage.item1': 'Questi dati ci aiutano a migliorare le prestazioni, la stabilità e l\'esperienza utente',
    'privacy.new.usage.item2': 'Non raccogliamo informazioni personalmente identificabili senza il tuo consenso',
    'privacy.new.usage.item3': 'I dati di analisi sono aggregati e anonimizzati',
    'privacy.new.usage.item4': 'Utilizziamo queste informazioni per correggere errori e ottimizzare i nostri strumenti',
    'privacy.new.usage.item5': 'Puoi rinunciare al tracciamento delle analisi tramite le impostazioni del tuo browser',
    'privacy.new.cookies.title': '3. Cookie e tecnologie simili',
    'privacy.new.cookies.intro': 'Possiamo utilizzare cookie o archiviazione locale per ricordare la tua preferenza di lingua o migliorare le prestazioni di caricamento. I partner pubblicitari come Google AdSense possono utilizzare cookie per fornire e personalizzare gli annunci, secondo le loro stesse politiche.',
    'privacy.new.cookies.item1': 'I cookie vengono utilizzati per ricordare le tue preferenze (come la selezione della lingua)',
    'privacy.new.cookies.item2': 'Non utilizziamo cookie per tracciare il tuo comportamento di navigazione su altri siti web',
    'privacy.new.cookies.item3': 'Puoi disabilitare i cookie nelle impostazioni del tuo browser, sebbene ciò possa influire su alcune funzionalità',
    'privacy.new.cookies.item4': 'Le reti pubblicitarie di terze parti possono utilizzare i propri cookie per la personalizzazione degli annunci',
    'privacy.new.advertising.title': '4. Pubblicità',
    'privacy.new.advertising.text': 'PDFStation può visualizzare annunci di reti di terze parti come Google AdSense. Queste reti possono utilizzare cookie o altri identificatori per mostrare annunci pertinenti in linea con le loro stesse politiche pubblicitarie e sulla privacy. Non controlliamo il contenuto di questi annunci, ma lavoriamo solo con partner pubblicitari affidabili.',
    'privacy.new.personal.title': '5. Informazioni personali',
    'privacy.new.personal.text': 'Non richiediamo che tu crei un account per utilizzare gli strumenti principali. Se ci contatti via email, utilizzeremo il tuo indirizzo email solo per rispondere al tuo messaggio. Non condividiamo il tuo indirizzo email con terze parti.',
    'privacy.new.retention.title': '6. Conservazione dei dati',
    'privacy.new.retention.text': 'I file caricati su PDFStation vengono eliminati automaticamente dopo l\'elaborazione, generalmente entro pochi minuti. Non conserviamo i tuoi file più a lungo del necessario per completare la conversione. I dati di analisi possono essere conservati in forma aggregata per periodi più lunghi per aiutarci a migliorare il servizio.',
    'privacy.new.rights.title': '7. I tuoi diritti',
    'privacy.new.rights.intro': 'Hai il diritto di:',
    'privacy.new.rights.item1': 'Accedere a qualsiasi informazione personale che potremmo avere su di te',
    'privacy.new.rights.item2': 'Richiedere la cancellazione dei tuoi dati',
    'privacy.new.rights.item3': 'Rinunciare al tracciamento delle analisi',
    'privacy.new.rights.item4': 'Contattarci con domande o preoccupazioni sulla privacy',
    'privacy.new.changes.title': '8. Modifiche a questa informativa',
    'privacy.new.changes.text': 'Possiamo aggiornare questa Informativa sulla Privacy di tanto in tanto. La versione più recente sarà sempre disponibile su questa pagina. Informeremo gli utenti di modifiche significative aggiornando la data "Ultimo aggiornamento" nella parte superiore di questa pagina.',
    'privacy.new.contact.title': '9. Contatto',
    'privacy.new.contact.text': 'Se hai domande su questa Informativa sulla Privacy o su come gestiamo i tuoi dati, puoi contattarci a:',
    'privacy.new.contact.email': 'hi@pdfstation.app',
    'tool.images-to-pdf.detail.title': 'Converti JPG e PNG in PDF Online',
    'tool.images-to-pdf.detail.paragraph1': 'PDFStation ti permette di convertire immagini in file PDF di alta qualità direttamente nel tuo browser. Questo è utile quando devi raggruppare più foto in un unico documento, inviare scansioni come PDF o preparare file per la stampa.',
    'tool.images-to-pdf.detail.paragraph2': 'Il processo è semplice: carica una o più immagini JPG o PNG, organizza nell\'ordine desiderato se necessario, fai clic su converti e scarica il tuo PDF. Tutte le conversioni avvengono tramite una connessione sicura. I file vengono mantenuti solo il tempo necessario per generare il tuo PDF e vengono eliminati automaticamente dopo.',
    'tool.images-to-pdf.detail.paragraph3': 'Sia che tu stia convertendo una singola foto o combinando più immagini in un PDF, il nostro strumento preserva la qualità dell\'immagine mentre crea un documento PDF professionale facile da condividere, stampare o archiviare.',
    'tool.word-to-pdf.detail.title': 'Converti Documenti Word in PDF con Un Clic',
    'tool.word-to-pdf.detail.paragraph1': 'Con lo strumento Word a PDF, puoi convertire file DOC e DOCX in PDF che preservano layout, font e paginazione. Questo è ideale per curriculum, rapporti, contratti e qualsiasi documento che dovrebbe apparire uguale su ogni dispositivo.',
    'tool.word-to-pdf.detail.paragraph2': 'Basta caricare il tuo file Word, attendere alcuni secondi e scaricare un PDF pronto per la condivisione. Nessuna installazione, nessuna registrazione. La conversione mantiene la formattazione del tuo documento, inclusi intestazioni, piè di pagina, tabelle e immagini, assicurando che il tuo PDF appaia esattamente come previsto.',
    'tool.word-to-pdf.detail.paragraph3': 'Questo strumento è perfetto per i professionisti che devono condividere documenti che devono apparire coerenti su diversi dispositivi e sistemi operativi. Il formato PDF assicura che il tuo documento appaia uguale sia visualizzato su computer, tablet o smartphone.',
    'tool.pdf-compress.detail.title': 'Comprimi File PDF Grandi Senza Perdere Qualità',
    'tool.pdf-compress.detail.paragraph1': 'Lo strumento di compressione PDF riduce la dimensione del file per facilitare l\'invio di documenti via email, il caricamento su piattaforme o l\'archiviazione nel cloud. Applichiamo una compressione intelligente che cerca di mantenere testo e immagini leggibili riducendo il peso non necessario.',
    'tool.pdf-compress.detail.paragraph2': 'Puoi usarlo per presentazioni, documenti scansionati e rapporti multi-pagina. L\'algoritmo di compressione analizza il tuo PDF e ottimizza le immagini, rimuove dati ridondanti e comprime il contenuto senza influenzare significativamente la qualità visiva.',
    'tool.pdf-compress.detail.paragraph3': 'Questo è particolarmente utile quando devi rispettare i limiti di dimensione del file per allegati email o invii online. Comprimi il tuo PDF una volta e avrai un file più piccolo più facile da condividere mantenendo l\'aspetto professionale.',
    'tool.pdf-merge.detail.title': 'Combina Più PDF in un Unico Documento',
    'tool.pdf-merge.detail.paragraph1': 'Lo strumento di unione ti consente di caricare diversi file PDF e unirli in uno. Questo è utile per combinare capitoli, fatture o pagine scansionate in un unico file più facile da condividere e organizzare.',
    'tool.pdf-merge.detail.paragraph2': 'Puoi scegliere l\'ordine dei file prima di unire e poi scaricare un PDF consolidato con pochi clic. Tutte le pagine dei tuoi PDF selezionati saranno combinate nell\'ordine che specifichi, creando un documento perfetto.',
    'tool.pdf-merge.detail.paragraph3': 'Questo strumento è perfetto per studenti che combinano appunti di lezione, professionisti che uniscono rapporti o chiunque abbia bisogno di organizzare più documenti PDF in un unico file facile da gestire. Il PDF unito mantiene la qualità e la formattazione di tutti i documenti originali.',
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

