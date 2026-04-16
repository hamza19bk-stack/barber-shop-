import { Scissors } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
      {/* Left Images */}
      <div className="flex-1 relative z-10 w-full max-w-md mx-auto aspect-square md:aspect-auto md:h-[600px] mt-8 md:mt-0">
        <div className="absolute top-0 left-0 w-[65%] h-[80%] rounded-3xl overflow-hidden shadow-2xl z-10">
          <img 
            src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776345200/ddd_zhzjfi.jpg" 
            alt="The Big Family Barbershop Founder" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[65%] h-[80%] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-brand-bg md:translate-y-8">
          <img 
            src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776348357/Gemini_Generated_Image_9t70939t70939t70_pvqhia.png" 
            alt="The Big Family Barbershop" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 z-10 relative">
        <p className="text-xs font-bold tracking-widest text-brand-gray uppercase mb-4">{t('about.subtitle')}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {t('about.title1')} <span className="text-brand-accent font-serif italic">{t('about.title2')}</span> <br />
          {t('about.title3')}
        </h2>
        
        <div className="space-y-6 text-brand-gray leading-relaxed mb-8">
          <p className="text-brand-dark font-medium">
            {t('about.desc1')}
          </p>
          <p>
            {t('about.desc2')}
          </p>
        </div>

        <button className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-3 rounded-md font-medium transition-colors">
          {t('about.btn')}
        </button>
      </div>
    </section>
  );
}
