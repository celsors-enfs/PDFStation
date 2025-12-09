import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { Language, getTranslation, Translations } from '@/config/i18n';
import { trackLanguageChanged } from '@/lib/analytics/mixpanel';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('language') as Language;
      return saved && ['en', 'pt-BR', 'es', 'fr', 'it'].includes(saved) ? saved : 'en';
    }
    return 'en';
  });
  
  // Track initial language load (skip first render)
  const previousLanguage = useRef<Language | null>(null);

  const setLanguage = (lang: Language) => {
    const oldLang = language;
    setLanguageState(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', lang);
    }
    
    // Track language change (only if language actually changed)
    if (previousLanguage.current !== null && oldLang !== lang) {
      trackLanguageChanged({
        from_language: oldLang,
        to_language: lang,
      });
    }
    previousLanguage.current = lang;
  };
  
  // Set initial language on mount
  useEffect(() => {
    previousLanguage.current = language;
  }, []);

  const t = (key: keyof Translations, params?: Record<string, string>): string => {
    return getTranslation(language, key, params);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

