import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { PopularToolsGrid } from '@/components/PopularToolsGrid';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { GoogleAd } from '@/components/GoogleAd';
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

      {/* Hero Section - H1 title must appear before any ads per AdSense policy */}
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('home.hero.subtitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              {t('home.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Popular Converters Grid - without title/subtitle, positioned directly below hero */}
      <div className="container mx-auto px-4 pb-8">
        <PopularToolsGrid showTitle={false} />
      </div>

      {/* Common Use Cases Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t('home.useCases.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">📄 {t('home.useCases.wordToPdf.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.useCases.wordToPdf.description')}
                  {' '}
                  <Link to="/tools/word-to-pdf" className="text-primary hover:underline ml-1">{t('home.useCases.wordToPdf.cta')}</Link>
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">📷 {t('home.useCases.imagesToPdf.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.useCases.imagesToPdf.description')}
                  {' '}
                  <Link to="/tools/images-to-pdf" className="text-primary hover:underline ml-1">{t('home.useCases.imagesToPdf.cta')}</Link>
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">🗜️ {t('home.useCases.compressPdf.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.useCases.compressPdf.description')}
                  {' '}
                  <Link to="/tools/pdf-compress" className="text-primary hover:underline ml-1">{t('home.useCases.compressPdf.cta')}</Link>
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">📚 {t('home.useCases.mergePdf.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.useCases.mergePdf.description')}
                  {' '}
                  <Link to="/tools/pdf-merge" className="text-primary hover:underline ml-1">{t('home.useCases.mergePdf.cta')}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ad Banner - positioned AFTER substantial editorial content */}
      <div className="container mx-auto px-4 py-4">
        <GoogleAd slotKey="IN_CONTENT" />
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
        <GoogleAd slotKey="IN_CONTENT" />
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

      {/* What is PDFStation Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('home.what.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                {t('home.what.paragraph1')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('home.what.paragraph2')}
              </p>
              <p className="text-muted-foreground">
                {t('home.what.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why use PDFStation Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('home.why.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                {t('home.why.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-4">
                <li><strong>{t('home.why.noInstallation.title')}:</strong> {t('home.why.noInstallation.body')}</li>
                <li><strong>{t('home.why.worksAnyDevice.title')}:</strong> {t('home.why.worksAnyDevice.body')}</li>
                <li><strong>{t('home.why.privacy.title')}:</strong> {t('home.why.privacy.body')}</li>
                <li><strong>{t('home.why.speed.title')}:</strong> {t('home.why.speed.body')}</li>
                <li><strong>{t('home.why.upToDate.title')}:</strong> {t('home.why.upToDate.body')}</li>
                <li><strong>{t('home.why.free.title')}:</strong> {t('home.why.free.body')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Files Are Handled Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('home.filesHandled.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                {t('home.filesHandled.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-4">
                <li><strong>{t('home.filesHandled.secureUpload.title')}:</strong> {t('home.filesHandled.secureUpload.body')}</li>
                <li><strong>{t('home.filesHandled.temporaryProcessing.title')}:</strong> {t('home.filesHandled.temporaryProcessing.body')}</li>
                <li><strong>{t('home.filesHandled.automaticDeletion.title')}:</strong> {t('home.filesHandled.automaticDeletion.body')}</li>
                <li><strong>{t('home.filesHandled.noManualInspection.title')}:</strong> {t('home.filesHandled.noManualInspection.body')}</li>
                <li><strong>{t('home.filesHandled.noSharing.title')}:</strong> {t('home.filesHandled.noSharing.body')}</li>
              </ul>
              <p className="text-muted-foreground">
                {t('home.filesHandled.privacyLink.text')}{' '}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  {t('home.filesHandled.privacyLink.label')}
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('home.faq.title')}</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('home.faq.q1.question')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.faq.q1.answer')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('home.faq.q2.question')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.faq.q2.answer')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('home.faq.q3.question')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.faq.q3.answer')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('home.faq.q4.question')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.faq.q4.answer')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t('home.faq.q5.question')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.faq.q5.answer')}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Link to="/faq" className="text-primary hover:underline font-medium">
                {t('home.faq.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </section>

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
        <GoogleAd slotKey="FOOTER" />
      </div>
    </Layout>
  );
};

