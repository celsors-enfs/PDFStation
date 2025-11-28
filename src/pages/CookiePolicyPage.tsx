import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const CookiePolicyPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo
        title="Cookie Policy | PDFStation"
        description="Learn about how PDFStation uses cookies to improve your experience and provide our free file conversion service."
        canonical="/cookie-policy"
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('cookie.title')}</h1>
          <p className="text-muted-foreground mb-8">
            {t('legal.last.updated')} {new Date().toLocaleDateString()}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.what.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.what.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.how.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.how.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('cookie.how.item1')}</li>
                <li>{t('cookie.how.item2')}</li>
                <li>{t('cookie.how.item3')}</li>
                <li>{t('cookie.how.item4')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.types.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.types.session')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('cookie.types.persistent')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.thirdparty.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.thirdparty.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('cookie.thirdparty.item1')}</li>
                <li>{t('cookie.thirdparty.item2')}</li>
                <li>{t('cookie.thirdparty.item3')}</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                {t('cookie.thirdparty.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.manage.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.manage.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('cookie.manage.item1')}</li>
                <li>{t('cookie.manage.item2')}</li>
                <li>{t('cookie.manage.item3')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.updates.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.updates.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('cookie.contact.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('cookie.contact.text')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

