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

      {/* Top Banner Ad - positioned before hero section */}
      <div className="pt-4">
        <GoogleAd slotKey="TOP_BANNER" className="w-full flex justify-center" />
      </div>

      {/* Hero Section */}
      <section className="py-4 md:py-8">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What is PDFStation?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                PDFStation is a free online platform designed to simplify document management and file conversion. Whether you need to convert images to PDF, transform Word documents into PDF format, compress large files, or merge multiple PDFs into one document, PDFStation provides all these tools in one convenient place.
              </p>
              <p className="text-muted-foreground mb-4">
                Our mission is to make everyday file tasks fast, intuitive, and accessible from any device. You don't need to install software, create an account, or worry about complex settings. Just upload your file, choose your desired format, and download the result in seconds.
              </p>
              <p className="text-muted-foreground">
                PDFStation was created as an independent project to provide a clean, ad-light alternative to heavy desktop software. We focus on simplicity, security, and performance, ensuring that your files are processed quickly and safely without unnecessary complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why use PDFStation Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Use PDFStation Instead of Desktop Software?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                While desktop software has its place, online tools like PDFStation offer several advantages that make them ideal for quick file conversions and document management tasks.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-4">
                <li><strong>No Installation Required:</strong> Access PDFStation from any device with a web browser. No need to download, install, or update software. This is especially convenient when you're using a shared computer or need to convert files on the go.</li>
                <li><strong>Works on Any Device:</strong> Whether you're on Windows, Mac, Linux, or a mobile device, PDFStation works the same way. Your operating system doesn't matter.</li>
                <li><strong>Privacy and Security:</strong> Files are processed securely and deleted automatically after conversion. We don't store your files permanently or use them for any purpose other than the conversion you requested.</li>
                <li><strong>Speed and Convenience:</strong> Most conversions complete in seconds. No need to wait for software to load or navigate through complex menus. Just upload, convert, and download.</li>
                <li><strong>Always Up-to-Date:</strong> Online tools are automatically updated with the latest features and improvements. You always have access to the most recent version without manual updates.</li>
                <li><strong>Free Forever:</strong> All core tools are free to use, with no hidden costs or subscription fees. We may display ads to keep the service sustainable, but the tools themselves remain free.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Files Are Handled Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">How Your Files Are Handled</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Your privacy and security are our top priorities. When you upload a file to PDFStation, here's what happens:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-4">
                <li><strong>Secure Upload:</strong> Files are uploaded over an encrypted connection (HTTPS) to ensure your data is protected during transmission.</li>
                <li><strong>Temporary Processing:</strong> Your files are kept on our servers only for the time needed to complete the conversion, typically just a few minutes.</li>
                <li><strong>Automatic Deletion:</strong> Once processing is complete and you've downloaded your file, it's automatically deleted from our servers. We don't store your files permanently.</li>
                <li><strong>No Manual Inspection:</strong> We don't manually view, read, or inspect the content of your files. The conversion process is fully automated.</li>
                <li><strong>No Sharing:</strong> We never sell, share, or distribute your files to third parties. Your files remain private and confidential.</li>
              </ul>
              <p className="text-muted-foreground">
                For more detailed information about our privacy practices, please read our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Are my files stored permanently?</h3>
                  <p className="text-muted-foreground">
                    No. Files are kept only for the time needed to process your request and are deleted automatically afterwards. We don't store your files permanently or use them for any purpose other than the conversion you requested.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Is PDFStation free to use?</h3>
                  <p className="text-muted-foreground">
                    Yes. The core tools are completely free. We may display ads to keep the project sustainable, but all conversion tools remain free to use without any subscription or payment required.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Is there a file size limit?</h3>
                  <p className="text-muted-foreground">
                    Yes, there are technical limits depending on the tool and server configuration. Currently, we support files up to 100MB. If a file is too large, we will show an error message and you can try compressing it locally before uploading.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Do I need to create an account?</h3>
                  <p className="text-muted-foreground">
                    No. You can use all the main tools without registering or logging in. Simply upload your file, convert it, and download the result. No account creation is required.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Which formats are supported?</h3>
                  <p className="text-muted-foreground">
                    Common formats include JPG, PNG, PDF, and DOCX (for Word to PDF conversion). Support may expand over time based on user feedback and demand. Check each tool's page for specific format requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Link to="/faq" className="text-primary hover:underline font-medium">
                View all FAQs →
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

