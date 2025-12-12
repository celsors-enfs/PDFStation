import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo
        title="Privacy Policy | PDFStation"
        description="Read PDFStation's privacy policy to understand how we collect, use, and protect your data. Your privacy is important to us."
        canonical="/privacy-policy"
      />

      {/* Ads removed from Privacy Policy page per AdSense policy: "Ads served on screens without publisher content" */}
      {/* Legal pages are primarily navigation/functional, so ads are disabled */}
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('legal.back')}
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('privacy.title')}</h1>
          <p className="text-muted-foreground mb-8">
            {t('legal.last.updated')} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.intro.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.intro.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.files.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.files.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.new.files.item1')}</li>
                <li>{t('privacy.new.files.item2')}</li>
                <li>{t('privacy.new.files.item3')}</li>
                <li>{t('privacy.new.files.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.usage.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.usage.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.new.usage.item1')}</li>
                <li>{t('privacy.new.usage.item2')}</li>
                <li>{t('privacy.new.usage.item3')}</li>
                <li>{t('privacy.new.usage.item4')}</li>
                <li>{t('privacy.new.usage.item5')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.cookies.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.cookies.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.new.cookies.item1')}</li>
                <li>{t('privacy.new.cookies.item2')}</li>
                <li>{t('privacy.new.cookies.item3')}</li>
                <li>{t('privacy.new.cookies.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.advertising.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.advertising.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.personal.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.personal.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.retention.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.retention.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.rights.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.rights.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.new.rights.item1')}</li>
                <li>{t('privacy.new.rights.item2')}</li>
                <li>{t('privacy.new.rights.item3')}</li>
                <li>{t('privacy.new.rights.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.changes.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.changes.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.new.contact.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.new.contact.text')}
              </p>
              <p className="text-muted-foreground">
                <a href={`mailto:${t('privacy.new.contact.email')}`} className="text-primary hover:underline">
                  {t('privacy.new.contact.email')}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* All ads removed from Privacy Policy page per AdSense policy compliance */}
    </Layout>
  );
};
