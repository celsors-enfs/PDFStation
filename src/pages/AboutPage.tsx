import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { GoogleAd } from '@/components/GoogleAd';
import { Seo } from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.description'),
    },
    {
      icon: Zap,
      title: t('about.innovation.title'),
      description: t('about.innovation.description'),
    },
    {
      icon: Users,
      title: t('about.user.focused.title'),
      description: t('about.user.focused.description'),
    },
    {
      icon: Heart,
      title: t('about.privacy.first.title'),
      description: t('about.privacy.first.description'),
    },
  ];

  return (
    <Layout>
      <Seo
        title="About Us – PDFStation | Free File Conversion"
        description="Learn about PDFStation's mission to make file conversion simple, fast, and accessible. Free forever, up to 100MB per file. We're committed to security, privacy, and providing the best conversion experience."
        canonical="/about"
      />

      <div className="container mx-auto px-4 py-4">
        <GoogleAd slotKey="TOOL_HEADER" />
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              {t('about.subtitle')}
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground mb-4">
                {t('about.paragraph1')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('about.paragraph2')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('about.paragraph3')}
              </p>
              <p className="text-muted-foreground">
                {t('about.paragraph4')}{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  {t('about.contact.link.label')}
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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

