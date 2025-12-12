import React, { useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Hero } from '@/components/Hero';
import { UploadBox } from '@/components/UploadBox';
import { GoogleAd } from '@/components/GoogleAd';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getToolBySlug, Tool } from '@/config/tools';
import { FileText, Table, Image, Minimize2, FileStack } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Table,
  Image,
  Minimize2,
  FileStack,
};

export const ToolPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const tool = slug ? getToolBySlug(slug) : null;
  
  // Get only the 4 active tools
  const activeTools = [
    getToolBySlug('images-to-pdf'),
    getToolBySlug('word-to-pdf'),
    getToolBySlug('pdf-compress'),
    getToolBySlug('pdf-merge'),
  ].filter(Boolean) as Tool[];
  const popularTools = activeTools.filter(t => t.slug !== slug);

  // Helper function to translate file format names
  const translateFormat = useCallback((format: string | undefined): string => {
    if (!format) return format || '';
    try {
      const formatKey = `format.${format.toLowerCase()}` as any;
      const translated = t(formatKey);
      return (translated && translated !== formatKey) ? translated : format;
    } catch (error) {
      return format;
    }
  }, [t]);

  // Generate SEO data
  const seoData = useMemo(() => {
    if (!tool) return null;
    
    // Get translated tool name
    const toolNameKey = `tool.${tool.slug}.name` as any;
    const translatedName = t(toolNameKey);
    const toolName = (translatedName && translatedName !== toolNameKey) ? translatedName : tool.name;
    
    // Custom SEO for image tools
    if (tool.category === 'images') {
      if (tool.inputType === 'PDF') {
        // PDF to Image tools
        return {
          title: `${toolName} – Free Online PDF to ${translateFormat(tool.outputType)} Converter | PDFStation`,
          description: `Convert PDF pages to ${translateFormat(tool.outputType)} images online for free. High quality, up to 100MB, no signup required. Fast, secure, and easy to use.`,
          canonical: `/tools/${tool.slug}`,
        };
      } else {
        // Image to PDF tools (JPG/PNG to PDF)
        return {
          title: `${toolName} – Free Online Image to PDF Converter | PDFStation`,
          description: `Convert JPG and PNG images to PDF online for free. Fast, secure image to PDF converter. Up to 100MB per file, no watermark, no signup required. Free forever.`,
          canonical: `/tools/${tool.slug}`,
        };
      }
    }
    
    // Default SEO for other tools (Word to PDF, Compress, Merge)
    if (tool.slug === 'word-to-pdf') {
      return {
        title: `${toolName} – Free Online Word to PDF Converter | PDFStation`,
        description: `Convert Word documents (DOCX, DOC) to PDF online for free. Fast, secure Word to PDF converter. Up to 100MB per file, no watermark, preserves formatting. Free forever.`,
        canonical: `/tools/${tool.slug}`,
      };
    } else if (tool.slug === 'pdf-compress') {
      return {
        title: `${toolName} – Free Online PDF Compressor | PDFStation`,
        description: `Compress PDF files online for free. Reduce PDF file size without losing quality. Fast PDF compressor tool. Up to 100MB per file, no watermark. Free forever.`,
        canonical: `/tools/${tool.slug}`,
      };
    } else if (tool.slug === 'pdf-merge') {
      return {
        title: `${toolName} – Free Online PDF Merger | PDFStation`,
        description: `Merge multiple PDF files into one document online for free. Combine PDFs quickly and securely. Up to 100MB per file, no watermark. Free forever.`,
        canonical: `/tools/${tool.slug}`,
      };
    }
    
    // Fallback
    return {
      title: `${toolName} – Free Online Converter | PDFStation`,
      description: `Convert files online for free with PDFStation. Fast, secure, up to 100MB per file. No watermark, no signup required. Free forever.`,
      canonical: `/tools/${tool.slug}`,
    };
  }, [tool, t, translateFormat]);

  // Generate Schema.org JSON-LD
  const schemaData = useMemo(() => {
    if (!tool) return null;
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://pdfstation.com';
    
    // Get translated tool name and description
    const toolNameKey = `tool.${tool.slug}.name` as any;
    const toolDescKey = `tool.${tool.slug}.description` as any;
    const translatedName = t(toolNameKey);
    const translatedDesc = t(toolDescKey);
    const toolName = (translatedName && translatedName !== toolNameKey) ? translatedName : tool.name;
    const toolDescription = (translatedDesc && translatedDesc !== toolDescKey) ? translatedDesc : tool.description;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: `${toolName} Converter`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      url: `${siteUrl}/tools/${tool.slug}`,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: toolDescription,
    };
  }, [tool, t, translateFormat]);

  if (!tool) {
    return (
      <Layout>
        <Seo
          title="Tool Not Found | PDFStation"
          description="The requested conversion tool was not found."
          noIndex
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">{t('tool.not.found.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('tool.not.found.description')}</p>
          <Button onClick={() => navigate('/')}>{t('tool.not.found.cta')}</Button>
        </div>
      </Layout>
    );
  }

  // Get tools for submenu

  return (
    <Layout>
      {seoData && (
        <Seo
          title={seoData.title}
          description={seoData.description}
          canonical={seoData.canonical}
        />
      )}

      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {/* TOOL_HEADER ad removed per AdSense policy: Ads must not render before H1 title */}
      {/* Ads will only render after editorial content sections below */}
      
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          items={[
            { label: t('nav.home'), href: '/' },
            { label: t('nav.tools'), href: '/tools/images-to-pdf' },
            { label: (() => {
                if (!tool?.slug) return '';
                const toolNameKey = `tool.${tool.slug}.name` as any;
                const translatedName = t(toolNameKey);
                return (translatedName && translatedName !== toolNameKey) ? translatedName : (tool?.name || '');
              })() },
          ]}
        />
      </div>

      <Hero
        title={(() => {
          if (!tool?.slug) return '';
          const toolNameKey = `tool.${tool.slug}.name` as any;
          const translatedName = t(toolNameKey);
          return (translatedName && translatedName !== toolNameKey) ? translatedName : (tool?.name || '');
        })()}
        subtitle={(() => {
          if (!tool?.slug) return '';
          const toolDescKey = `tool.${tool.slug}.description` as any;
          const translatedDesc = t(toolDescKey);
          return (translatedDesc && translatedDesc !== toolDescKey) ? translatedDesc : (tool?.description || '');
        })()}
        showCTAs={false}
      />

      {/* Tools Navigation Tabs - Fixed 4 tools */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={tool?.slug === 'images-to-pdf' ? 'default' : 'outline'}
              size="sm"
              onClick={() => navigate('/tools/images-to-pdf')}
              aria-label="JPG/PNG to PDF converter"
            >
              {t('tool.nav.images-to-pdf')}
            </Button>
            <Button
              variant={tool?.slug === 'word-to-pdf' ? 'default' : 'outline'}
              size="sm"
              onClick={() => navigate('/tools/word-to-pdf')}
              aria-label="Word to PDF converter"
            >
              {t('tool.nav.word-to-pdf')}
            </Button>
            <Button
              variant={tool?.slug === 'pdf-compress' ? 'default' : 'outline'}
              size="sm"
              onClick={() => navigate('/tools/pdf-compress')}
              aria-label="Compress PDF"
            >
              {t('tool.nav.compress')}
            </Button>
            <Button
              variant={tool?.slug === 'pdf-merge' ? 'default' : 'outline'}
              size="sm"
              onClick={() => navigate('/tools/pdf-merge')}
              aria-label="Merge PDF"
            >
              {t('tool.nav.merge')}
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <UploadBox
              compact
              defaultTargetFormat={tool?.defaultTargetFormat}
              outputLabel={tool?.category === 'compress' || tool?.category === 'merge' 
                ? undefined 
                : tool?.category === 'images' && tool?.inputType !== 'PDF'
                  ? t('convert.to.format', { format: translateFormat(tool?.outputType) })
                  : tool?.category === 'images' && tool?.inputType === 'PDF'
                    ? t('convert.to.format', { format: translateFormat(tool?.outputType) })
                    : tool?.category === 'pdf' && tool?.inputType !== 'PDF'
                      ? t('convert.to.format', { format: translateFormat(tool?.outputType) })
                      : t('convert.to')}
              outputType={tool?.outputType}
              tool={tool}
              mode={tool?.category === 'compress' ? 'compress' : tool?.category === 'merge' ? 'merge' : 'convert'}
            />

            {/* Detailed Tool Explanation Section */}
            {tool?.slug === 'images-to-pdf' && (
              <section className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('tool.images-to-pdf.detail.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground mb-4">
                        {t('tool.images-to-pdf.detail.paragraph1')}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t('tool.images-to-pdf.detail.paragraph2')}
                      </p>
                      <p className="text-muted-foreground">
                        {t('tool.images-to-pdf.detail.paragraph3')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {tool?.slug === 'word-to-pdf' && (
              <section className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('tool.word-to-pdf.detail.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground mb-4">
                        {t('tool.word-to-pdf.detail.paragraph1')}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t('tool.word-to-pdf.detail.paragraph2')}
                      </p>
                      <p className="text-muted-foreground">
                        {t('tool.word-to-pdf.detail.paragraph3')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {tool?.slug === 'pdf-compress' && (
              <section className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('tool.pdf-compress.detail.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground mb-4">
                        {t('tool.pdf-compress.detail.paragraph1')}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t('tool.pdf-compress.detail.paragraph2')}
                      </p>
                      <p className="text-muted-foreground">
                        {t('tool.pdf-compress.detail.paragraph3')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {tool?.slug === 'pdf-merge' && (
              <section className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('tool.pdf-merge.detail.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground mb-4">
                        {t('tool.pdf-merge.detail.paragraph1')}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {t('tool.pdf-merge.detail.paragraph2')}
                      </p>
                      <p className="text-muted-foreground">
                        {t('tool.pdf-merge.detail.paragraph3')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* How to convert section */}
            <section className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t('tool.how.to.title', { inputType: translateFormat(tool?.inputType), outputType: translateFormat(tool?.outputType) })}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>{t('tool.how.to.step1', { inputType: translateFormat(tool?.inputType) })}</li>
                    <li>{t('tool.how.to.step2', { outputType: translateFormat(tool?.outputType), format: translateFormat(tool?.defaultTargetFormat) })}</li>
                    <li>{t('tool.how.to.step3')}</li>
                    <li>{t('tool.how.to.step4', { outputType: translateFormat(tool?.outputType) })}</li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Why convert section */}
            <section className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t('tool.why.title', { inputType: translateFormat(tool?.inputType), outputType: translateFormat(tool?.outputType) })}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t('tool.why.reason1')}</li>
                    <li>{t('tool.why.reason2')}</li>
                    <li>{t('tool.why.reason3')}</li>
                    <li>{t('tool.why.reason4')}</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Tips section */}
            <section className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t('tool.tips.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t('tool.tips.tip1', { inputType: translateFormat(tool?.inputType) })}</li>
                    <li>{t('tool.tips.tip2')}</li>
                    <li>{t('tool.tips.tip3')}</li>
                    <li>{t('tool.tips.tip4')}</li>
                    <li>{t('tool.tips.tip5')}</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Supported formats */}
            <section className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t('tool.formats.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">{t('tool.formats.input')}</p>
                    <p className="text-sm text-muted-foreground">{translateFormat(tool?.inputType)} {t('tool.formats.files')}</p>
                    <p className="text-sm font-semibold mt-4">{t('tool.formats.output')}</p>
                    <p className="text-sm text-muted-foreground">{translateFormat(tool?.outputType)} ({translateFormat(tool?.defaultTargetFormat)})</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Tool-specific FAQ */}
            <section className="mt-8">
              <Tabs defaultValue="faq" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="faq">{t('tool.faq.title')}</TabsTrigger>
                  <TabsTrigger value="more-info">{t('tool.more.info.title')}</TabsTrigger>
                </TabsList>
                <TabsContent value="faq" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('tool.faq.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">{t('tool.faq.size.question')}</h4>
                          <p className="text-sm text-muted-foreground">
                            {t('tool.faq.size.answer')}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{t('tool.faq.time.question')}</h4>
                          <p className="text-sm text-muted-foreground">
                            {t('tool.faq.time.answer', { inputType: translateFormat(tool?.inputType), outputType: translateFormat(tool?.outputType) })}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{t('tool.faq.data.question')}</h4>
                          <p className="text-sm text-muted-foreground">
                            {t('tool.faq.data.answer')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="more-info" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('tool.more.info.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          {t('tool.more.info.paragraph1', { toolName: (() => {
                              const toolNameKey = `tool.${tool.slug}.name` as any;
                              const translatedName = t(toolNameKey);
                              return (translatedName && translatedName !== toolNameKey) ? translatedName : tool.name;
                            })() })}
                        </p>
                        <p>
                          {t('tool.more.info.paragraph2')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Sidebar ads disabled globally per AdSense policy compliance */}
              {/* Sidebar ads can create "empty screen + ad" scenarios on mobile/tablet */}

              <Card>
                <CardHeader>
                  <CardTitle>{t('tool.other.popular')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {popularTools.map(popularTool => {
                    const PopularIcon = iconMap[popularTool.icon] || FileText;
                    const toolNameKey = `tool.${popularTool.slug}.name` as any;
                    const translatedName = t(toolNameKey);
                    const toolName = (translatedName && translatedName !== toolNameKey) ? translatedName : popularTool.name;
                    return (
                      <button
                        key={popularTool.slug}
                        onClick={() => navigate(`/tools/${popularTool.slug}`)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                      >
                        <PopularIcon className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{toolName}</p>
                        </div>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="IN_CONTENT" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="FOOTER" />
      </div>
    </Layout>
  );
};
