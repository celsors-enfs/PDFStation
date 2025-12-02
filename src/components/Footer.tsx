import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PDFStation</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.tools.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tools/images-to-pdf" className="text-muted-foreground hover:text-primary">
                  JPG/PNG → PDF
                </Link>
              </li>
              <li>
                <Link to="/tools/word-to-pdf" className="text-muted-foreground hover:text-primary">
                  Word → PDF
                </Link>
              </li>
              <li>
                <Link to="/tools/pdf-compress" className="text-muted-foreground hover:text-primary">
                  Compress PDF
                </Link>
              </li>
              <li>
                <Link to="/tools/pdf-merge" className="text-muted-foreground hover:text-primary">
                  Merge PDF
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  {t('footer.legal.terms')}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-muted-foreground hover:text-primary">
                  {t('footer.legal.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright', { year: new Date().getFullYear().toString() })}</p>
        </div>
      </div>
    </footer>
  );
};


