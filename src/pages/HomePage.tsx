import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { PopularToolsGrid } from '@/components/PopularToolsGrid';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Seo } from '@/components/Seo';
import { Shield, Lock, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const supportedFormats = ['PDF', 'DOCX', 'JPG', 'PNG'];

  return (
    <Layout>
      <Seo
        title={t('home.hero.title')}
        description={t('home.hero.description')}
        canonical="/"
      />

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              {t('home.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Popular Converters Grid - without title/subtitle, positioned directly below hero */}
      <div className="container mx-auto px-4 pb-8">
        <PopularToolsGrid showTitle={false} />
      </div>

      {/* Google Ad Banner - positioned directly below converters grid */}
      <div className="container mx-auto px-4 py-4">
        <AdPlaceholder id="ad-top-banner-below-tools" position="top-banner" />
      </div>

      {/* Trust Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold mb-1">{t('trust.thousands')}</p>
                <p className="text-xs text-muted-foreground">{t('trust.active.users')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold mb-1">{t('trust.no.files')}</p>
                <p className="text-xs text-muted-foreground">{t('trust.ssl.encrypted')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold mb-1">{t('trust.files.converted')}</p>
                <p className="text-xs text-muted-foreground">{t('trust.every.month')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">{t('supported.formats.title')}</h2>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('supported.formats.description')}
          </p>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {supportedFormats.map(format => (
              <span
                key={format}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder id="ad-in-content" position="in-content" />
      </div>

      {/* Popular Conversions Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">{t('popular.conversions.title')}</h2>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('popular.conversions.description')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              to="/tools/images-to-pdf"
              className="text-sm text-muted-foreground hover:text-primary transition-colors text-center"
            >
              JPG/PNG → PDF
            </Link>
            <Link
              to="/tools/word-to-pdf"
              className="text-sm text-muted-foreground hover:text-primary transition-colors text-center"
            >
              Word → PDF
            </Link>
            <Link
              to="/tools/pdf-compress"
              className="text-sm text-muted-foreground hover:text-primary transition-colors text-center"
            >
              Compress PDF
            </Link>
            <Link
              to="/tools/pdf-merge"
              className="text-sm text-muted-foreground hover:text-primary transition-colors text-center"
            >
              Merge PDF
            </Link>
          </div>
        </div>
      </section>

      <FeaturesGrid />

      <section className="py-8 md:py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{t('security.title')}</h2>
            <p className="text-muted-foreground">
              {t('security.description')}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder id="ad-footer-banner" position="footer-banner" />
      </div>
    </Layout>
  );
};

