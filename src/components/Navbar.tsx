import { Scissors, Globe } from 'lucide-react';
import { useLanguage, Language } from '../i18n/LanguageContext';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="w-full py-4 md:py-6 px-4 md:px-12 lg:px-24 flex flex-wrap items-center justify-between gap-y-4 z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 order-1">
        <a href="#" className="font-serif text-xl md:text-3xl font-bold tracking-tight text-brand-dark flex gap-1.5 leading-none">
          <span>The Big</span>
          <span className="text-brand-accent italic">Family</span>
        </a>
      </div>

      {/* Desktop Links (Now visible on mobile too) */}
      <div className="flex items-center justify-center gap-4 md:gap-8 font-medium text-xs md:text-sm order-3 md:order-2 w-full md:w-auto mt-2 md:mt-0">
        <a href="#" className="hover:text-brand-accent transition-colors">{t('nav.home')}</a>
        <a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-1">
          {t('nav.services')}
          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-2.5 md:h-1.5">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-1">
          {t('nav.about')}
          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-2.5 md:h-1.5">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#" className="hover:text-brand-accent transition-colors">{t('nav.contact')}</a>
      </div>

      <div className="flex items-center gap-3 md:gap-4 order-2 md:order-3">
        {/* Language Switcher */}
        <div className="relative group cursor-pointer flex items-center gap-1 text-xs md:text-sm font-medium text-brand-dark hover:text-brand-accent">
          <Globe size={16} className="md:w-[18px] md:h-[18px]" />
          <span className="uppercase">{language}</span>
          <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden border border-brand-light z-50">
            <button onClick={() => setLanguage('en')} className={`px-4 py-2 text-sm text-left hover:bg-brand-light ${language === 'en' ? 'font-bold text-brand-accent' : ''}`}>English</button>
            <button onClick={() => setLanguage('fr')} className={`px-4 py-2 text-sm text-left hover:bg-brand-light ${language === 'fr' ? 'font-bold text-brand-accent' : ''}`}>Français</button>
            <button onClick={() => setLanguage('ar')} className={`px-4 py-2 text-sm text-left hover:bg-brand-light font-arabic ${language === 'ar' ? 'font-bold text-brand-accent' : ''}`}>العربية</button>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://wa.me/212645551833" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-brand-accent hover:bg-brand-accent-dark text-white px-4 py-2 md:px-6 md:py-2.5 rounded-md font-medium text-xs md:text-sm transition-colors whitespace-nowrap">
          {t('nav.book')}
        </a>
      </div>
    </nav>
  );
}
