# AdSense Fix Plan - PDFStation

## Project Structure

This is a **Vite + React** project (not Next.js), using React Router for client-side routing.

### Routes Structure

**Tool Routes:**
- `/tools/images-to-pdf` - JPG/PNG to PDF converter
- `/tools/word-to-pdf` - Word to PDF converter
- `/tools/pdf-compress` - PDF compressor
- `/tools/pdf-merge` - PDF merger

**Legal/Trust Routes:**
- `/privacy-policy` - Privacy Policy page (exists, needs enhancement)
- `/terms-of-service` - Terms of Service page (exists, needs enhancement)
- `/about` - About page (exists)
- `/contact` - Contact page (exists)
- `/cookie-policy` - Cookie Policy page (exists)
- `/copyright` - Copyright/DMCA page (TO BE CREATED)

**Other Routes:**
- `/` - Homepage (needs more descriptive content)
- `/faq` - FAQ page (exists)

### Components to Update

1. **`src/components/editorial/ToolEditorial.tsx`** - NEW: Reusable editorial component
2. **`src/pages/ToolPage.tsx`** - UPDATE: Add editorial content BEFORE upload box
3. **`src/pages/HomePage.tsx`** - ENHANCE: Add more descriptive content above fold
4. **`src/pages/PrivacyPolicyPage.tsx`** - VERIFY: Already substantial
5. **`src/pages/TermsOfServicePage.tsx`** - VERIFY: Already substantial
6. **`src/pages/ContactPage.tsx`** - VERIFY: Already has email/contact info
7. **`src/pages/CopyrightPage.tsx`** - NEW: Create copyright/DMCA page
8. **`src/components/GoogleAd.tsx`** - UPDATE: Ensure ads only render after content

### Content Files to Create

- **`src/content/tools/en.ts`** - NEW: Editorial content for all tools in English
- (Localized versions can be added later)

### Static Files to Create

- **`public/sitemap.xml`** - Static sitemap for SEO
- **`public/robots.txt`** - Robots.txt for crawling

## Implementation Plan

### Phase 1: Content Structure
- [x] Create this plan document
- [ ] Create ToolEditorial component
- [ ] Create content files with editorial copy
- [ ] Add copyright/DMCA page

### Phase 2: Tool Pages Enhancement
- [ ] Update ToolPage to show editorial content BEFORE upload box
- [ ] Ensure each tool has unique editorial content
- [ ] Add "How it works" section (3 steps)
- [ ] Add "Quality & privacy" bullets
- [ ] Add tool-specific FAQ (3-6 Q&As)

### Phase 3: Homepage Enhancement
- [ ] Add descriptive content above the fold
- [ ] Add "Common use cases" section with internal links

### Phase 4: Legal Pages
- [ ] Verify/Enhance privacy policy
- [ ] Verify/Enhance terms of service
- [ ] Create copyright/DMCA page with removal contact

### Phase 5: SEO & Technical
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Verify metadata on all pages
- [ ] Ensure canonical URLs are correct

### Phase 6: Ad Implementation
- [ ] Ensure ads only render after editorial content
- [ ] Remove ads from empty/upload-only screens
- [ ] Add guards for ad rendering

## Notes

- Current project uses React Router, not Next.js App Router
- SEO is handled via `react-helmet-async` (Seo component)
- i18n system exists but will focus on English first
- Only 4 tools currently exist (may need to add more or adapt 10-tool content to 4)

