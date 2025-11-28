import React, { useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Hero } from '@/components/Hero';
import { UploadBox } from '@/components/UploadBox';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Seo } from '@/components/Seo';
import { CategoryToolsGrid } from '@/components/CategoryToolsGrid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getToolBySlug, getPopularTools, getAllCategories, getToolsByCategory } from '@/config/tools';
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
  const popularTools = getPopularTools(4).filter(t => t.slug !== slug);
  const categories = getAllCategories();

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
          description: `Convert PDF pages to ${translateFormat(tool.outputType)} images online for free. High quality, up to 500MB, no signup required. Fast, secure, and easy to use.`,
          canonical: `/tools/${tool.slug}`,
        };
      } else {
        // Image to PDF tools
        return {
          title: `${toolName} – Free Online ${translateFormat(tool.inputType)} to PDF Converter | PDFStation`,
          description: `Convert ${translateFormat(tool.inputType)} to PDF online for free. Fast, secure, up to 500MB per file, no watermark. Free forever.`,
          canonical: `/tools/${tool.slug}`,
        };
      }
    }
    
    // Default SEO for other tools
    return {
      title: `${toolName} – Free ${translateFormat(tool.inputType)} to ${translateFormat(tool.outputType)} Converter (up to 500MB) | PDFStation`,
      description: `Convert ${translateFormat(tool.inputType)} to ${translateFormat(tool.outputType)} (${translateFormat(tool.defaultTargetFormat)}) online for free with PDFStation. Free forever, up to 500MB per file. Get accurate, editable files with no watermarks. Fast, secure, and easy to use.`,
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

      <div className="container mx-auto px-4 py-4">
        <AdPlaceholder id="ad-top-banner" position="top-banner" />
      </div>

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          items={[
            { label: t('nav.home'), href: '/' },
            { label: t('nav.tools'), href: '/tools/pdf-to-word' },
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

      {/* Category Submenu */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="hidden md:flex gap-2 flex-wrap">
            {categories.map(category => {
              const categoryTools = getToolsByCategory(category);
              if (categoryTools.length === 0) return null;
              return (
                <Button
                  key={category}
                  variant={tool.category === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    navigate(`/tools/${categoryTools[0].slug}`);
                  }}
                >
                  {t(`category.${category}` as any) || category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              );
            })}
          </div>
          <div className="md:hidden">
            <Select
              value={tool.category}
              onValueChange={(value) => {
                const categoryTools = getToolsByCategory(value as any);
                if (categoryTools.length > 0) {
                  navigate(`/tools/${categoryTools[0].slug}`);
                }
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {t(`category.${category}` as any) || category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              <AdPlaceholder id="ad-right-rail" position="right-rail" />

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

      {/* Category Tools Grid */}
      {tool.category && (
        <CategoryToolsGrid category={tool.category} currentToolSlug={tool.slug} />
      )}

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder id="ad-in-content" position="in-content" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder id="ad-footer-banner" position="footer-banner" />
      </div>
    </Layout>
  );
};
