import { MapPin, Phone, Clock, Star, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const reviews = [
  {
    name: "Yassine B.",
    text: "Mchitt l 3ndhom, saraha top ! The best barbershop in Azrou without a doubt. Very professional, highly detailed, and great atmosphere.",
    date: "1 month ago",
    rating: 5
  },
  {
    name: "Ayoub T.",
    text: "Un service exceptionnel. The team is very welcoming and they know exactly what they are doing. The fade was incredibly clean. Recommend 100%.",
    date: "2 months ago",
    rating: 5
  },
  {
    name: "Othmane K.",
    text: "Nadi kan nseh fih. I've been coming here for a year. The Big Family truly feels like a family. Quality cuts, great music, and friendly staff.",
    date: "3 months ago",
    rating: 5
  }
];

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-24">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Contact Info & Location */}
        <div className="flex-1 bg-brand-dark text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          <svg className="absolute bottom-0 right-0 h-full w-2/3 opacity-5 pointer-events-none text-brand-accent" viewBox="0 0 400 300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 150 L50 100 L100 200 L150 50 L200 250 L250 100 L300 200 L350 50 L400 150"/>
          </svg>
          
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-4">{t('cta.visitUs')}</p>
            <h2 className="text-4xl font-bold mb-8 font-serif italic text-white">
              The Big Family
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('cta.location')}</h4>
                  <a href="https://maps.app.goo.gl/zdCyrVaWrqbVrHQk9" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-accent transition-colors text-sm leading-relaxed">
                    {t('cta.address')} <br/>
                    {t('cta.directions')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('cta.workingHours')}</h4>
                  <p className="text-white/70 text-sm">
                    {t('cta.days')}<br/>
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('cta.contactBook')}</h4>
                  <p className="text-white/70 text-sm mb-4">
                    {t('cta.getInTouch')}
                  </p>
                  <a href="https://wa.me/212645551833" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg">
                    <MessageCircle size={20} />
                    WhatsApp: 06 45 55 18 33
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Reviews */}
        <div className="flex-1 lg:pl-6 flex flex-col justify-center">
          <p className="text-xs font-bold tracking-widest text-brand-gray uppercase mb-4">{t('cta.testimonials')}</p>
          <h2 className="text-4xl font-bold mb-8 text-brand-dark">
            {t('cta.whatClientsSay1')} <span className="text-brand-accent font-serif italic">{t('cta.whatClientsSay2')}</span>
          </h2>
          
          <div className="space-y-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center font-bold text-brand-dark">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-dark">{review.name}</h4>
                      <p className="text-xs text-brand-gray">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-brand-gray text-sm italic">"{review.text}"</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <a href="https://maps.app.goo.gl/zdCyrVaWrqbVrHQk9" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-accent hover:text-brand-accent-dark transition-colors text-sm flex items-center gap-2">
              {t('cta.readMore')} <MapPin size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
