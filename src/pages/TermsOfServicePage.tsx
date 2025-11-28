import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const TermsOfServicePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo
        title="Terms of Service | PDFStation"
        description="Read PDFStation's terms of service to understand the rules and guidelines for using our free file conversion service."
        canonical="/terms-of-service"
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('terms.title')}</h1>
          <p className="text-muted-foreground mb-8">
            {t('legal.last.updated')} {new Date().toLocaleDateString()}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.accept.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.accept.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.service.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.service.text1')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('terms.service.text2')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.responsibilities.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.responsibilities.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t('terms.responsibilities.item1')}</li>
                <li>{t('terms.responsibilities.item2')}</li>
                <li>{t('terms.responsibilities.item3')}</li>
                <li>{t('terms.responsibilities.item4')}</li>
                <li>{t('terms.responsibilities.item5')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.limitations.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.limitations.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.data.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.data.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.availability.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.availability.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.disclaimer.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.disclaimer.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.liability.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.liability.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.changes.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.changes.text')}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.contact.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.contact.text')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

