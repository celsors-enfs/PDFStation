import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTAs?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  showCTAs = true,
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title || t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {subtitle || t('home.hero.subtitle')}
          </p>
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  // Scroll to upload box or trigger file input
                  const uploadBox = document.getElementById('upload-box');
                  uploadBox?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('home.hero.cta.choose')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/tools/images-to-pdf')}
              >
                {t('home.hero.cta.explore')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


