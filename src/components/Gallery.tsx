import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function VideoPlayer({ src, className }: { src: string, className: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden group bg-brand-light ${className}`}>
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const videos = [
    "https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776345695/SaveClip.App_AQOjpSByub_Rlf0fUGwQMZ9dD75i3JMV3u8DSVVjnIlAMSlAilRhKlRHHdGJ3TZY5vmy6Zd54LzvemulUPJGO2Ok_lokcgj.mp4",
    "https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776345380/SaveClip.App_AQMxIdjQm5fmvSKaj3NAV7CP5NOqaM_Rx5CjYdAYAMXwv9xDnqpmj9U3racMu9EwtKdXyFltyhAVnCWe_tTIGadm5sL8nen0-leGXhI_vauqn9.mp4",
    "https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776345937/SaveClip.App_AQOyqXY-SvNJOngqk8S2ZPFeyDZpXG3AWFleCiamtL07-7q-mE7DC_ANv0uCZdCAnDYF_LZ2kE4uekIun3mwodtc_hly1ve.mp4",
    "https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776345937/SaveClip.App_AQNQKSB1WJb9ZJVd-IPMAL0R4bbcffm3P_ZVWjneN3w1tpC5IdcwB3r1UjnB6JkjEtSxGJAxMz7v-hf6J87mnXeIj1vE06qmRG-gNls_ornh6u.mp4",
    "https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1776345936/SaveClip.App_AQO-l-URbSB2Anlue81WaaL-wnOenja_XSavudI2YkQQxIb-dTnm6T15qkiWJz4sbq_n2yquw69R7ukM_eBjBhA__nzf1ow.mp4"
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 text-center z-10 relative">
      <p className="text-xs font-bold tracking-widest text-brand-gray uppercase mb-4">{t('gallery.subtitle')}</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        {t('gallery.title1')} <span className="text-brand-accent font-serif italic">{t('gallery.title2')}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <VideoPlayer src={videos[0]} className="h-[350px]" />
          <VideoPlayer src={videos[3]} className="h-[450px]" />
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-6 mt-0 lg:mt-12">
          <VideoPlayer src={videos[1]} className="h-[450px]" />
          <VideoPlayer src={videos[4]} className="h-[350px]" />
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-6 lg:mt-0 md:col-span-2 lg:col-span-1">
          <VideoPlayer src={videos[2]} className="h-[400px] md:h-[600px] lg:h-[400px]" />
        </div>
      </div>
    </section>
  );
}
