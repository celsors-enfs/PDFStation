import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { FileText, Table, Image, Minimize2, FileStack } from 'lucide-react';
import { getPopularTools, getToolBySlug } from '@/config/tools';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Table,
  Image,
  Minimize2,
  FileStack,
};

interface PopularToolsGridProps {
  showTitle?: boolean;
}

export const PopularToolsGrid: React.FC<PopularToolsGridProps> = ({ showTitle = true }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const popularTools = getPopularTools(4);
  const compressTool = getToolBySlug('pdf-compress');

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {showTitle && (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">{t('popular.converters.title')}</h2>
            <p className="text-center text-muted-foreground mb-8">{t('popular.converters.subtitle')}</p>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map(tool => {
            const Icon = iconMap[tool.icon] || FileText;
            // Get translated name and description
            const toolNameKey = `tool.${tool.slug}.name` as any;
            const toolDescKey = `tool.${tool.slug}.description` as any;
            
            // Try to get translations, fallback to default if not found
            const translatedName = t(toolNameKey);
            const translatedDesc = t(toolDescKey);
            
            // Use translation if it's different from the key (meaning it was found)
            // getTranslation returns the key itself if translation not found
            const toolName = (translatedName && translatedName !== toolNameKey) ? translatedName : tool.name;
            const toolDescription = (translatedDesc && translatedDesc !== toolDescKey) ? translatedDesc : tool.description;
            
            return (
              <Card
                key={tool.slug}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/tools/${tool.slug}`)}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{toolName}</CardTitle>
                  <CardDescription>{toolDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('popular.convert.cta')}
                  </p>
                </CardContent>
              </Card>
            );
          })}
          {compressTool && (
            <Card
              key={compressTool.slug}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/tools/${compressTool.slug}`)}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Minimize2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t('popular.compress.title')}</CardTitle>
                <CardDescription>{t('popular.compress.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('popular.compress.cta')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

