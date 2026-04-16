import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (keyPath: string): string => {
    const keys = keyPath.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value === undefined) return keyPath;
      value = value[k];
    }
    return value || keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      <div 
        dir={language === 'ar' ? 'rtl' : 'ltr'} 
        className={language === 'ar' ? 'font-arabic text-right' : 'text-left'}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
