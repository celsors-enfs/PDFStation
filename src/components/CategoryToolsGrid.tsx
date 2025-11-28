import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { FileText, Table, Image, Minimize2, FileStack } from 'lucide-react';
import { Tool, getToolsByCategory } from '@/config/tools';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Table,
  Image,
  Minimize2,
  FileStack,
};

interface CategoryToolsGridProps {
  category: Tool['category'];
  currentToolSlug?: string;
}

export const CategoryToolsGrid: React.FC<CategoryToolsGridProps> = ({
  category,
  currentToolSlug,
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const categoryTools = getToolsByCategory(category);

  if (categoryTools.length === 0) return null;

  const handleCardClick = (toolSlug: string) => {
    navigate(`/tools/${toolSlug}`);
    // Scroll to top is handled by ScrollToTop component
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">
          {t('category.tools.title', { category: t(`category.${category}` as any) || (category === 'images' ? 'Images' : category.charAt(0).toUpperCase() + category.slice(1)) })}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.map(tool => {
            const Icon = iconMap[tool.icon] || FileText;
            const isCurrent = tool.slug === currentToolSlug;
            
            // Get translated name and description
            const toolNameKey = `tool.${tool.slug}.name` as any;
            const toolDescKey = `tool.${tool.slug}.description` as any;
            
            // Try to get translations, fallback to default if not found
            const translatedName = t(toolNameKey);
            const translatedDesc = t(toolDescKey);
            
            // Use translation if it's different from the key (meaning it was found)
            const toolName = (translatedName && translatedName !== toolNameKey) ? translatedName : tool.name;
            const toolDescription = (translatedDesc && translatedDesc !== toolDescKey) ? translatedDesc : tool.description;
            
            return (
              <Card
                key={tool.slug}
                className={`cursor-pointer hover:shadow-lg transition-shadow ${
                  isCurrent ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleCardClick(tool.slug)}
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
        </div>
      </div>
    </section>
  );
};

