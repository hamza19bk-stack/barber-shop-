import { Scissors, Sparkles, Droplets, SprayCan as Spray } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Scissors size={32} className="text-brand-accent" />,
      title: t('services.mensHaircut'),
      description: t('services.mensHaircutDesc')
    },
    {
      icon: <Spray size={32} className="text-brand-accent" />,
      title: t('services.beardTrim'),
      description: t('services.beardTrimDesc')
    },
    {
      icon: <Sparkles size={32} className="text-brand-accent" />,
      title: t('services.treatment'),
      description: t('services.treatmentDesc')
    },
    {
      icon: <Droplets size={32} className="text-brand-accent" />,
      title: t('services.wash'),
      description: t('services.washDesc')
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
      <p className="text-xs font-bold tracking-widest text-brand-gray uppercase mb-4">{t('services.subtitle')}</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        {t('services.title1')} <span className="text-brand-accent font-serif italic">{t('services.title2')}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 ${
              index === 1 ? 'bg-white shadow-xl shadow-brand-accent/10' : 'hover:bg-white hover:shadow-lg'
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-brand-bg flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-brand-gray text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
