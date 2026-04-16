export default function Brands() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 border-y border-brand-light/50 bg-white/30">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <h3 className="text-2xl font-serif font-bold tracking-widest text-brand-gray">HAIRSTORY</h3>
        <h3 className="text-2xl font-bold tracking-tighter text-brand-gray">theguardian</h3>
        <h3 className="text-3xl font-serif italic font-bold text-brand-gray">cuttly</h3>
        <h3 className="text-2xl font-bold tracking-widest text-brand-gray">salon</h3>
        <h3 className="text-2xl font-bold text-brand-gray">Bloomberg</h3>
      </div>
    </section>
  );
}
