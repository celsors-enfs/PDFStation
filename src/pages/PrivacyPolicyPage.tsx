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
            {t('legal.last.updated')} {new Date().toLocaleDateString()}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.intro.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.intro.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.collect.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.collect.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.collect.item1')}</li>
                <li>{t('privacy.collect.item2')}</li>
                <li>{t('privacy.collect.item3')}</li>
                <li>{t('privacy.collect.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.use.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.use.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.use.item1')}</li>
                <li>{t('privacy.use.item2')}</li>
                <li>{t('privacy.use.item3')}</li>
                <li>{t('privacy.use.item4')}</li>
                <li>{t('privacy.use.item5')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.security.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.security.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.security.item1')}</li>
                <li>{t('privacy.security.item2')}</li>
                <li>{t('privacy.security.item3')}</li>
                <li>{t('privacy.security.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.retention.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.retention.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.thirdparty.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.thirdparty.text1')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('privacy.thirdparty.text2')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.rights.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.rights.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('privacy.rights.item1')}</li>
                <li>{t('privacy.rights.item2')}</li>
                <li>{t('privacy.rights.item3')}</li>
                <li>{t('privacy.rights.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.contact.text')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

