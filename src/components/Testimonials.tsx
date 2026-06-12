import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="temoignages" className="py-24 bg-[#030303] relative overflow-hidden border-t border-b border-white/[0.05]">
      
      {/* Background glowing light ray node */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-gold-300/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            La voix de nos initiés
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Témoignages D’Exception
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Ceux qui portent StrongFrag en parlent avec passion. Découvrez les impressions olfactives et la fidélité de notre cercle d’ambassadeurs à travers l’Europe.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="max-w-4xl mx-auto relative px-6 md:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -20 }}
              transition={{ duration: 0.55 }}
              className="glass-panel p-8 md:p-12 border border-gold-300/10 text-center relative overflow-hidden"
            >
              {/* Giant elegant background quotation mark */}
              <Quote className="absolute -top-4 -left-4 w-32 h-32 text-gold-300/[0.025] pointer-events-none" />
              
              {/* Star Rating indicators */}
              <div id="stars-row" className="flex items-center justify-center space-x-1.5 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-300 fill-gold-300" />
                ))}
              </div>

              {/* Absolute Quote Text */}
              <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed font-serif-lux italic mb-8 max-w-3xl mx-auto px-2 sm:px-6">
                " {current.comment} "
              </p>

              {/* Author profiles and signatures */}
              <div className="flex flex-col items-center justify-center space-y-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-300/30 p-0.5 filter saturate-75"
                />
                <div>
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                    {current.name}
                  </h4>
                  <span className="text-[10px] tracking-widest text-gold-300/80 uppercase block mt-1">
                    {current.role}
                  </span>
                </div>

                {/* Scent highlight */}
                <div className="inline-flex items-center space-x-1.5 bg-gold-300/5 px-2.5 py-1 mt-2 border border-gold-300/10">
                  <Sparkles className="w-3 h-3 text-gold-300" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gold-100/90">
                    Fragrance préférée : {current.favoriteFragrance}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={prevSlide}
              className="p-3 border border-gold-300/20 hover:border-gold-300 rounded-none bg-gold-300/5 hover:bg-gold-300 hover:text-black text-gold-300 transition-all cursor-pointer"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? 'w-6 bg-gold-300' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={nextSlide}
              className="p-3 border border-gold-300/20 hover:border-gold-300 rounded-none bg-gold-300/5 hover:bg-gold-300 hover:text-black text-gold-300 transition-all cursor-pointer"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
