import React from 'react';
import { Layout } from '@/layouts/Layout';
import { GoogleAd } from '@/components/GoogleAd';
import { Seo } from '@/components/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Bug, Lightbulb, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <Seo
        title="Contact Us – PDFStation | Get in Touch"
        description="Have questions, suggestions, or feedback about PDFStation? Contact us by email. We read all messages and do our best to reply as soon as possible."
        canonical="/contact"
      />

      <div className="container mx-auto px-4 py-4">
        <GoogleAd slotKey="TOOL_HEADER" />
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              {t('contact.subtitle')}
            </p>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {t('contact.email.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('contact.email.description')}
                </p>
                <a
                  href="mailto:hi@pdfstation.app"
                  className="text-primary hover:underline font-medium text-lg"
                >
                  hi@pdfstation.app
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Bug className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('contact.bug.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.bug.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('contact.feature.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.feature.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('contact.translation.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.translation.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('contact.inquiry.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.inquiry.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">{t('contact.response.title')}</h2>
                <p className="text-muted-foreground mb-4">
                  {t('contact.response.paragraph1')}
                </p>
                <p className="text-muted-foreground">
                  {t('contact.response.paragraph2')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <GoogleAd slotKey="IN_CONTENT" />
          </div>
          <div className="lg:col-span-1">
            <GoogleAd slotKey="SIDEBAR" className="sticky top-20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="FOOTER" />
      </div>
    </Layout>
  );
};

