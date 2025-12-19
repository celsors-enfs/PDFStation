import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ToolEditorialProps {
  toolSlug: string;
  showSection?: 'intro' | 'howItWorks' | 'qualityPrivacy' | 'faq' | 'all';
}

export const ToolEditorial: React.FC<ToolEditorialProps> = ({ 
  toolSlug, 
  showSection = 'all' 
}) => {
  const { t } = useLanguage();

  // Get translated content based on tool slug
  const getIntroP1 = () => {
    try {
      return t(`tool.editorial.${toolSlug}.introP1` as any);
    } catch {
      return null;
    }
  };

  const getIntroP2 = () => {
    try {
      return t(`tool.editorial.${toolSlug}.introP2` as any);
    } catch {
      return null;
    }
  };

  const getHowItWorksSteps = () => {
    const steps = [];
    for (let i = 1; i <= 3; i++) {
      try {
        const step = t(`tool.editorial.${toolSlug}.howItWorks.step${i}` as any);
        if (step && step !== `tool.editorial.${toolSlug}.howItWorks.step${i}`) {
          steps.push(step);
        }
      } catch {
        break;
      }
    }
    return steps;
  };

  const getQualityBullets = () => {
    const bullets = [];
    for (let i = 1; i <= 3; i++) {
      try {
        const bullet = t(`tool.editorial.${toolSlug}.quality.bullet${i}` as any);
        if (bullet && bullet !== `tool.editorial.${toolSlug}.quality.bullet${i}`) {
          bullets.push(bullet);
        }
      } catch {
        break;
      }
    }
    return bullets;
  };

  const getFaqs = () => {
    const faqs = [];
    for (let i = 1; i <= 3; i++) {
      try {
        const q = t(`tool.editorial.${toolSlug}.faq${i}.q` as any);
        const a = t(`tool.editorial.${toolSlug}.faq${i}.a` as any);
        if (q && a && q !== `tool.editorial.${toolSlug}.faq${i}.q` && a !== `tool.editorial.${toolSlug}.faq${i}.a`) {
          faqs.push({ q, a });
        }
      } catch {
        break;
      }
    }
    return faqs;
  };

  const introP1 = getIntroP1();
  const introP2 = getIntroP2();
  const howItWorksSteps = getHowItWorksSteps();
  const qualityBullets = getQualityBullets();
  const faqs = getFaqs();

  // If no content found, return null
  if (!introP1 && !introP2 && howItWorksSteps.length === 0 && qualityBullets.length === 0 && faqs.length === 0) {
    return null;
  }

  const showIntro = (showSection === 'all' || showSection === 'intro') && (introP1 || introP2);
  const showHowItWorks = (showSection === 'all' || showSection === 'howItWorks') && howItWorksSteps.length > 0;
  const showQualityPrivacy = (showSection === 'all' || showSection === 'qualityPrivacy') && qualityBullets.length > 0;
  const showFaq = (showSection === 'all' || showSection === 'faq') && faqs.length > 0;

  return (
    <div className="space-y-6 mb-8">
      {/* Intro Paragraphs */}
      {showIntro && (
        <div className="prose prose-lg max-w-none">
          {introP1 && (
            <p className="text-muted-foreground mb-4">
              {introP1}
            </p>
          )}
          {introP2 && (
            <p className="text-muted-foreground mb-6">
              {introP2}
            </p>
          )}
        </div>
      )}

      {/* How It Works */}
      {showHowItWorks && (
        <Card>
          <CardHeader>
            <CardTitle>{t('tool.editorial.howItWorks')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-3">
              {howItWorksSteps.map((step, index) => (
                <li key={index} className="text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      {/* Quality & Privacy */}
      {showQualityPrivacy && (
        <Card>
          <CardHeader>
            <CardTitle>{t('tool.editorial.qualityPrivacy')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {qualityBullets.map((bullet, index) => (
                <li key={index} className="text-muted-foreground">
                  {bullet}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Tool-specific FAQ */}
      {showFaq && (
        <Card>
          <CardHeader>
            <CardTitle>{t('tool.editorial.faq')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

