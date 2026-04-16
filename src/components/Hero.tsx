import { Play, Star, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative pt-12 pb-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
      {/* Clearer Background Image Without Ugly Box */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/50 md:bg-white/40 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/70 lg:to-transparent z-10" />
        <img 
          src="https://res.cloudinary.com/ddfazkkij/image/upload/q_auto/f_auto/v1776348357/Gemini_Generated_Image_9t70939t70939t70_pvqhia.png" 
          alt="Barber background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Left Content */}
      <div className="flex-1 z-20 relative pt-12 lg:pt-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-brand-dark">
          {t('hero.weAreLooking')} <br />
          {t('hero.toMakeYou')} <br />
          <span className="text-brand-accent font-serif italic">{t('hero.handsome')}</span>
        </h1>
        <p className="text-brand-gray text-lg max-w-md mb-8 leading-relaxed font-medium">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <a href="https://wa.me/212645551833" target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-3.5 rounded-md font-medium transition-colors inline-block text-center">
            {t('hero.getStarted')}
          </a>
          <button className="flex items-center gap-3 font-medium hover:text-brand-accent transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow cursor-pointer">
              <Play size={20} className="text-brand-dark ml-1" fill="currentColor" />
            </div>
            {t('hero.watchVideo')}
          </button>
        </div>

        {/* Badge - Best Barber */}
        <div className="mt-12 flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl inline-flex shadow-sm border border-brand-light">
          <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
            B
          </div>
          <div>
            <p className="font-bold text-sm text-brand-dark">{t('hero.bestBarber')}</p>
            <p className="text-xs text-brand-gray">{t('hero.awards')}</p>
            <div className="flex items-center gap-1 mt-1 text-brand-accent">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} className="text-gray-300" fill="currentColor" />
              <span className="text-xs text-brand-gray ml-1">(750 {t('hero.voters')})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Media Area */}
      <div className="flex-1 relative z-20 w-full max-w-lg lg:max-w-none mx-auto mt-12 lg:mt-0">
        <div className="relative rounded-t-full overflow-hidden border-8 border-brand-bg bg-brand-light aspect-[3/4] lg:aspect-auto lg:h-[600px] group shadow-xl">
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776345380/SaveClip.App_AQMxIdjQm5fmvSKaj3NAV7CP5NOqaM_Rx5CjYdAYAMXwv9xDnqpmj9U3racMu9EwtKdXyFltyhAVnCWe_tTIGadm5sL8nen0-leGXhI_vauqn9.mp4" 
            className="w-full h-full object-cover object-top"
            autoPlay 
            loop 
            muted 
            playsInline
          />
          {/* Mute/Unmute Toggle */}
          <button 
            onClick={toggleMute}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
          >
            {isMuted ? (
              <>
                <VolumeX size={18} />
                <span className="text-xs font-bold">{t('hero.unmute')}</span>
              </>
            ) : (
              <>
                <Volume2 size={18} />
                <span className="text-xs font-bold">{t('hero.mute')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
