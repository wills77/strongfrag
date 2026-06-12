import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Compass, Shield, Award } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onContactClick: () => void;
}

const HERO_SLIDES = [
  {
    title: 'L’ÉLIXIR ROYAL',
    subtitle: 'La puissance originelle du Bois d’Oud & d’Ambre précieux',
    tagline: 'UNE SIGNATURE OLFACTIVE SANS COMPROMIS POUR L’HOMME SOLAIRE',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200',
    accentColor: 'border-gold-300',
    modelName: 'Royal Elixir Extrait de Parfum',
    duration: '24h sillage exceptionnel',
    notes: {
      head: ['Bergamote sauvage', 'Pamplemousse'],
      heart: ['Jasmin Absolu', 'Cardamome'],
      base: ['Bois d’Oud', 'Santal d’Australie']
    }
  },
  {
    title: 'SANTAL IMPÉRIAL',
    subtitle: 'L’harmonie divine entre Rose de Damas & Muscs Velours',
    tagline: 'UNE PARURE DE SOIE POUR LA FEMME D’ÉLÉGANCE ABSOLUE',
    image: 'https://images.unsplash.com/photo-1588405748373-122b2321bc31?auto=format&fit=crop&q=80&w=1200',
    accentColor: 'border-rose-400/40',
    modelName: 'Santal Impérial Prestige',
    duration: '20h sillage majestueux',
    notes: {
      head: ['Mandarine verte', 'Poire Williams'],
      heart: ['Rose de Damas', 'Jasmin Sambac'],
      base: ['Bois de Santal', 'Vanille Bourbon']
    }
  },
  {
    title: 'HUILES PRÉCIEUSES',
    subtitle: 'Une texture satinée divine infusée d’extraits botaniques purs',
    tagline: 'LE SECRET SENSUEL POUR UNE HYDRATATION ENVOÛTANTE',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200',
    accentColor: 'border-amber-500/40',
    modelName: 'Collection Élixirs de Soie',
    duration: '48h nutrition & parfum',
    notes: {
      head: ['Fleur d’Amandier', 'Nectar de Pêche'],
      heart: ['Rose Blanche céleste', 'Héliotrope poudré'],
      base: ['Muscs soyeux', 'Lait de coco']
    }
  }
];

export default function Hero({ onDiscoverClick, onContactClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden pt-16"
    >
      {/* 1. Parallax Ambient Video/Image Background */}
      <div 
        id="hero-background-container" 
        className="absolute inset-0 transition-transform duration-100 ease-out z-0"
        style={{ transform: `translateY(${scrollY * 0.15}px) scale(1.05)` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            {/* Elegant Luxury Masking */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-[#050505]/80 z-10" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/50 to-transparent z-10" />
            
            {/* Visual background image representing luxury setting */}
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt="StrongFrag Scent Concept"
              className="w-full h-full object-cover opacity-60 filter saturate-75 brightness-[0.7] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Particle Light Sparkles Layer */}
      <div id="particle-overlay" className="absolute inset-0 pointer-events-none overflow-hidden z-2">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-gold-300/40 animate-pulse blur-[1px]"></div>
        <div className="absolute top-[40%] right-[15%] w-3 h-3 rounded-full bg-gold-300/20 animate-bounce duration-[15s]"></div>
        <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-gold-200/50 animate-pulse duration-[4s]"></div>
        <div className="absolute top-[75%] right-[35%] w-2 h-2 rounded-full bg-gold-300/30 animate-pulse duration-[6s] blur-[2px]"></div>
      </div>

      {/* Dynamic Gold Backlight Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[650px] bg-gold-300/[0.035] rounded-full filter blur-[120px] pointer-events-none z-1"></div>

      {/* 3. Main Immersive Content Block */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Prestigious Text Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Premium Label Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-gold-350/5 border border-gold-350/30 px-3 py-1.5 rounded-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-spin duration-1000" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-gold-300 uppercase">
                Haute Parfumerie Française
              </span>
            </motion.div>

            {/* Slogan & Immersive Title */}
            <div className="space-y-4">
              <motion.h4
                key={`tagline-${currentSlide}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-[10px] sm:text-xs tracking-[0.4em] text-gold-100/80 font-mono uppercase"
              >
                {HERO_SLIDES[currentSlide].tagline}
              </motion.h4>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif-lux tracking-wider leading-none text-white">
                L’essence de <br />
                <span className="text-gold-300 font-serif-lux italic font-normal text-gold-gradient tracking-tight block mt-1">
                  votre élégance.
                </span>
              </h1>
            </div>

            {/* Subtitle description */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl font-light font-serif-lux"
            >
              {HERO_SLIDES[currentSlide].subtitle}
            </motion.p>

            {/* Features Indicators (Interactive Micro-badges) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="grid grid-cols-3 gap-4 border-t border-b border-white/[0.08] py-4 w-full max-w-lg mt-2"
            >
              <div className="flex flex-col">
                <span className="text-gold-300 font-serif-lux text-lg tracking-normal font-medium">Grasse</span>
                <span className="text-[8px] tracking-widest text-gray-400 uppercase">Conception Noble</span>
              </div>
              <div className="flex flex-col border-l border-white/[0.08] pl-4">
                <span className="text-gold-300 font-serif-lux text-lg tracking-normal font-medium">24H+</span>
                <span className="text-[8px] tracking-widest text-gray-400 uppercase">Tenue et sillage</span>
              </div>
              <div className="flex flex-col border-l border-white/[0.08] pl-4">
                <span className="text-gold-300 font-serif-lux text-lg tracking-normal font-medium">100% Sûr</span>
                <span className="text-[8px] tracking-widest text-gray-400 uppercase">Huiles Sans Alcool</span>
              </div>
            </motion.div>

            {/* Premium Brand Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
            >
              <button
                id="hero-cta-discover"
                onClick={onDiscoverClick}
                className="group relative flex items-center justify-center space-x-3 bg-gold-300 hover:bg-gold-200 text-[#050505] text-xs font-semibold tracking-widest uppercase px-8 py-4 px-10 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_25px_rgba(212,175,55,0.2)] scroll-smooth cursor-pointer"
              >
                <span>Découvrir la collection</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              
              <button
                id="hero-cta-contact"
                onClick={onContactClick}
                className="group flex items-center justify-center space-x-2 bg-transparent hover:bg-white/[0.04] text-white hover:text-gold-300 border border-white/20 hover:border-gold-300/40 text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-300 cursor-pointer"
              >
                <span>Nous contacter</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Highlight Product Floating Panel representation of Immersive UI theme */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center lg:items-end z-10 w-full gap-6">
            <motion.div
              key={`product-stat-${currentSlide}`}
              initial={{ opacity: 0, x: 25, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="relative w-full max-w-[340px] bg-gradient-to-tr from-[#111] to-[#222] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden group"
            >
              {/* Radial Golden Aura Ambient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>

              {/* Sculpted Virtual Bottle Container */}
              <div className="w-40 h-64 bg-[#0a0a0a] border border-[#D4AF37]/40 relative flex flex-col shadow-[0_0_50px_rgba(212,175,55,0.15)] transition-transform duration-500 group-hover:scale-105">
                 {/* Gold Spray Atomizer Cap */}
                 <div className="w-full h-1/4 border-b border-[#D4AF37]/20 flex items-center justify-center bg-black/50">
                   <div className="w-12 h-2.5 bg-gradient-to-r from-gold-500 via-gold-200 to-gold-600 border border-gold-300/20"></div>
                 </div>
                 {/* Bottle Tag Labels */}
                 <div className="flex-1 flex flex-col items-center justify-center p-4">
                   <div className="text-[10px] tracking-[0.3em] uppercase text-gold-300 font-medium mb-1 font-mono text-center truncate max-w-full">
                     {HERO_SLIDES[currentSlide].title}
                   </div>
                   <div className="w-12 h-px bg-[#D4AF37]/40 mb-2"></div>
                   <div className="text-[8px] uppercase tracking-widest text-gray-500 font-mono">StrongFrag</div>
                 </div>
              </div>

              {/* Metadata titles */}
              <div className="mt-8 text-center w-full border-t border-white/[0.08] pt-4">
                <span className="block text-[8px] uppercase tracking-[0.4em] text-gold-300/80 mb-1 font-mono">
                  ÉDITION LIMITÉE • GRASSE
                </span>
                <span className="block text-lg tracking-widest font-serif-lux italic text-[#D4AF37]">
                  {HERO_SLIDES[currentSlide].modelName}
                </span>
                <p className="text-[11px] text-gray-400 font-light mt-1 text-center font-serif-lux leading-relaxed">
                  Conçu avec les huiles les plus pures et les plus rares au monde.
                </p>
              </div>

              {/* Sillage floating badge */}
              <div className="absolute bottom-4 right-4 bg-zinc-950/90 backdrop-blur-xl border border-white/10 p-3 flex flex-col gap-0.5 shadow-lg">
                <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] font-semibold">Sillage</span>
                <span className="text-[10px] text-white opacity-80 font-mono">{HERO_SLIDES[currentSlide].duration.split(' ')[0]}</span>
              </div>
            </motion.div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2.5 justify-center w-full max-w-[340px]">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  id={`hero-slide-dot-${idx}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                    currentSlide === idx ? 'w-10 bg-gold-300' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Glisser vers l'élément ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Feature Bar from Immersive UI theme */}
      <div className="absolute bottom-0 left-0 w-full bg-[#080808]/90 backdrop-blur-md border-t border-white/10 z-20 py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex-1 flex gap-12 text-left">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-mono block">Notes de Tête</span>
              <div className="flex gap-2 text-xs font-light text-white font-serif-lux">
                <span>{HERO_SLIDES[currentSlide].notes.head[0]}</span>
                <span className="opacity-30">/</span>
                <span>{HERO_SLIDES[currentSlide].notes.head[1]}</span>
              </div>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-6">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-mono block">Notes de Cœur</span>
              <div className="flex gap-2 text-xs font-light text-white font-serif-lux">
                <span>{HERO_SLIDES[currentSlide].notes.heart[0]}</span>
                <span className="opacity-30">/</span>
                <span>{HERO_SLIDES[currentSlide].notes.heart[1]}</span>
              </div>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-6">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-mono block">Notes de Fond</span>
              <div className="flex gap-2 text-xs font-light text-white font-serif-lux">
                <span>{HERO_SLIDES[currentSlide].notes.base[0]}</span>
                <span className="opacity-30">/</span>
                <span>{HERO_SLIDES[currentSlide].notes.base[1]}</span>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex items-center justify-end gap-6">
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-widest opacity-40 font-mono">Expertise Artisanale</p>
              <p className="text-xs text-white font-serif-lux">Grasse de Provence, France</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] transition-all duration-300">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
