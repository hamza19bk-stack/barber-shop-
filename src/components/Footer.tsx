import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-bg pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-brand-light">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-dark flex flex-col md:flex-row md:gap-1.5 leading-none">
              <span>The Big</span>
              <span className="text-brand-accent italic">Family</span>
            </span>
          </div>
          <p className="text-brand-gray text-sm mb-8 max-w-xs leading-relaxed">
            {t('footer.desc')}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/the_bigfamilly_barbershop/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-light flex items-center justify-center text-brand-gray hover:text-brand-accent hover:border-brand-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-light flex items-center justify-center text-brand-gray hover:text-brand-accent hover:border-brand-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-light flex items-center justify-center text-brand-gray hover:text-brand-accent hover:border-brand-accent transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-bold mb-6">{t('footer.about')}</h4>
          <ul className="space-y-4 text-sm text-brand-gray">
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.aboutUs')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.gallery')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.news')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.menu')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">{t('footer.services')}</h4>
          <ul className="space-y-4 text-sm text-brand-gray">
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.ourServices')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.features')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.member')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">{t('footer.support')}</h4>
          <ul className="space-y-4 text-sm text-brand-gray">
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.account')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.supportCenter')}</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">{t('footer.contactUs')}</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-brand-light text-xs text-brand-gray">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-dark transition-colors">{t('footer.terms')}</a>
          <a href="#" className="hover:text-brand-dark transition-colors">{t('footer.privacy')}</a>
        </div>
      </div>
    </footer>
  );
}
