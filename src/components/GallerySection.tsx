import { motion } from 'motion/react';
import { Eye, Heart, Compass, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800',
      title: 'Flaconnage d’Art',
      category: 'Design flacon',
      size: 'md:col-span-1 md:row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
      title: 'Pétales de Rose Céleste',
      category: 'Ingrédients nobles',
      size: 'md:col-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      title: 'Nectar Solaire Liquide',
      category: 'Macération lente',
      size: 'md:col-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600',
      title: 'Rituel Sacré',
      category: 'Huiles Parfumées',
      size: 'md:col-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600',
      title: 'Bergamote de Calabre',
      category: 'Récolte d’aube',
      size: 'md:col-span-1'
    }
  ];

  return (
    <section id="galerie" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background glow shadow node */}
      <div className="absolute top-[50%] right-[10%] w-[350px] h-[350px] bg-gold-300/[0.015] rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            La vision StrongFrag
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Galerie Immersive
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Pénétrez dans l’atmosphère secrète de notre maison de parfumerie. De la sélection attentive des absolues végétales au design architectural de nos précieux flacons en verre sombre.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((item, index) => (
            <motion.div
              key={index}
              id={`gallery-item-${index}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative overflow-hidden group border border-white/[0.04] bg-zinc-950/40 ${item.size || ''}`}
            >
              
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 saturate-75 contrast-105 group-hover:saturate-100"
              />

              {/* Black Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

              {/* Hover icons & captions content */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end h-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                
                <span className="text-[8px] font-mono tracking-[0.25em] text-gold-300 uppercase block mb-1">
                  {item.category}
                </span>

                <div className="flex items-center justify-between">
                  <h3 className="text-base font-light font-serif-lux text-white tracking-widest uppercase">
                    {item.title}
                  </h3>
                  
                  {/* Premium indicator icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gold-300 text-black p-1.5 rounded-none shrink-0 ml-2">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
