# PDFStation

**Smart file conversion in one simple place.**

A modern, production-ready front-end application for file uploads and mock file conversions, built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
PDFStation/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AdPlaceholder.tsx
│   │   ├── Hero.tsx
│   │   ├── UploadBox.tsx
│   │   ├── PopularToolsGrid.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── PricingTable.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── layouts/             # Layout components
│   │   └── Layout.tsx
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx
│   │   ├── ToolPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── FAQPage.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useFileUpload.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── config/              # Configuration files
│   │   └── tools.ts
│   ├── styles/              # Global styles
│   │   └── globals.css
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── components.json          # shadcn/ui config
```

## 🛣️ Routes

- `/` - Home page with upload box and popular tools
- `/tools/:slug` - Individual tool pages (e.g., `/tools/pdf-to-word`)
- `/pricing` - Pricing plans page
- `/about` - About page
- `/faq` - Frequently asked questions

## 📍 Ad Placeholders

Each page contains 4 Google Ad placeholders with the following IDs:

1. **`ad-top-banner`** - Top banner ad (appears below navbar)
2. **`ad-right-rail`** - Right sidebar ad (sticky on desktop)
3. **`ad-in-content`** - In-content ad (within page content)
4. **`ad-footer-banner`** - Footer banner ad (above footer)

### Ad Placeholder Locations by Page

#### Home Page (`/`)
- `ad-top-banner` - Below navbar
- `ad-right-rail` - Right side of upload box section
- `ad-in-content` - Between upload box and popular tools
- `ad-footer-banner` - Above footer

#### Tool Page (`/tools/:slug`)
- `ad-top-banner` - Below navbar
- `ad-right-rail` - Right sidebar (sticky)
- `ad-in-content` - Below tool tabs
- `ad-footer-banner` - Above footer

#### Pricing Page (`/pricing`)
- `ad-top-banner` - Below navbar
- `ad-right-rail` - Right sidebar (sticky)
- `ad-in-content` - Below pricing table
- `ad-footer-banner` - Above footer

#### About Page (`/about`)
- `ad-top-banner` - Below navbar
- `ad-right-rail` - Right sidebar (sticky)
- `ad-in-content` - Below values section
- `ad-footer-banner` - Above footer

#### FAQ Page (`/faq`)
- `ad-top-banner` - Below navbar
- `ad-right-rail` - Right sidebar (sticky)
- `ad-in-content` - Below FAQ accordion
- `ad-footer-banner` - Above footer

## 🎨 Features

- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **File Upload**: Drag-and-drop file upload with mock conversion
- **Routing**: React Router for navigation
- **TypeScript**: Full type safety throughout the application
- **Mock Conversions**: Simulated file conversion with progress indicators

## 🛠️ Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **Lucide React** - Icons

## 📝 Notes

- All file conversions are **mocked** - no actual backend processing
- Files are processed in-memory only (not uploaded to a server)
- Conversion status updates after 1.5 seconds
- Login/Signup buttons are placeholders (no authentication implemented)

## 🔧 Configuration

### shadcn/ui

The project uses shadcn/ui components. Configuration is in `components.json`.

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with custom color scheme matching the PDFStation brand.

### TypeScript

TypeScript configuration is in `tsconfig.json` with path aliases set up for `@/*` imports.

## 📄 License

This project is created for demonstration purposes.




