import React from 'react';
import { Shield, Zap, Lock, Globe } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const FeaturesGrid: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.description'),
    },
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
    },
    {
      icon: Lock,
      title: t('features.no.watermarks.title'),
      description: t('features.no.watermarks.description'),
    },
    {
      icon: Globe,
      title: t('features.works.everywhere.title'),
      description: t('features.works.everywhere.description'),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

