import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQs_DATA } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#030303] relative overflow-hidden border-t border-b border-white/[0.05]">
      
      {/* Glow node */}
      <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] bg-gold-300/[0.012] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            Des réponses à vos désirs
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Questions Fréquentes
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Consultez les orientations de notre concierge pour connaître les secrets de tenue de nos créations et commander nos coffrets en toute sérénité.
          </p>
        </div>

        {/* Faq accordions list */}
        <div className="space-y-4">
          {FAQs_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-zinc-950/40 border border-gold-300/10 hover:border-gold-300/20 transition-all duration-300"
              >
                {/* Header Switch trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-4 h-4 text-gold-300 shrink-0 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-medium tracking-wide text-white group-hover:text-gold-200 transition-colors font-serif-lux">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 border border-white/10 text-gold-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Expanded Answer wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-white/[0.04] text-xs leading-relaxed text-gray-350 font-serif-lux font-light bg-gold-300/[0.015]">
                        <p className="mb-2 leading-relaxed text-gray-300">
                          {faq.answer}
                        </p>
                        
                        {/* Little luxury note */}
                        <div className="flex items-center space-x-1 mt-4 text-[10px] text-gold-300 font-mono tracking-wider">
                          <Sparkles className="w-3 h-3" />
                          <span>Avis de la Maison StrongFrag</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Lower Banner: Private Assistance indicator */}
        <div className="mt-12 text-center text-xs text-gray-400">
          <span>Vous ne trouvez pas la réponse à vos interrogations ? </span>
          <a 
            href="#contact" 
            className="text-gold-300 underline font-semibold tracking-wider hover:text-gold-200 ml-1 block sm:inline-block mt-2 sm:mt-0"
          >
            Contacter directement notre Concierge Privilège
          </a>
        </div>

      </div>
    </section>
  );
}
