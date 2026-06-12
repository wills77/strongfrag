import { Clock, Shield, Star, Award, Compass, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Clock,
      title: 'Fragrances Longue Durée (16h-24h+)',
      description: 'Avec un taux de concentration élevé en Extrait de Parfum pur, nos sillage percent fièrement l’air toute la journée sans s’estomper.'
    },
    {
      icon: Compass,
      title: 'Ingrédients Sélectionnés et Purs',
      description: 'À Grasse ou en Calabre, nous cueillons au lever du jour des absolues naturelles uniques, préservées de tout additif synthétique nocif.'
    },
    {
      icon: Award,
      title: 'Qualité Premium Garantie',
      description: 'Chaque fiole fait l’objet de tests de stabilité et de tolérance extrême sous contrôle de nez certifiés de la haute société grassoise.'
    },
    {
      icon: Shield,
      title: 'Fabrication Extrêmement Soignée',
      description: 'Une macération lente de 6 semaines dans nos caves sombres permet l’épanouissement splendide de chaque accord olfactif.'
    },
    {
      icon: Star,
      title: 'Expérience Sensorielle Unique',
      description: 'Le flacon d’ébène épais filtre la lumière naturelle et dépose sur votre table de toilette un joyau d’art minimaliste moderne.'
    },
    {
      icon: HeartHandshake,
      title: 'Service Conciergerie 24/7',
      description: 'Un conseiller dédié répond à chacune de vos questions en privé par messagerie ou appel privilège pour vos désirs confidentiels.'
    }
  ];

  return (
    <section id="qualite" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background ambient gold aura */}
      <div className="absolute top-[40%] right-[-15%] w-[450px] h-[450px] bg-gold-300/[0.015] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[500px] h-[500px] bg-gold-300/[0.02] rounded-full filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            L’exigence sans compromis
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Pourquoi Choisir <span className="italic">StrongFrag ?</span>
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Nous ne créons pas de simples parfums. Nous sculptons votre signature charismatique invisible, en conjuguant rigueur scientifique de l’extraction et liberté de l’œuvre d’art.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              id={`why-card-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel p-6 sm:p-8 border border-gold-300/10 hover:border-gold-300/40 transition-all duration-500 rounded-none group hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                
                {/* Icon wrapper with glow effect */}
                <div className="p-3 bg-gold-300/5 group-hover:bg-gold-300/15 border border-gold-300/20 rounded-none transition-colors shrink-0">
                  <point.icon className="w-5 h-5 text-gold-300 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-2 group-hover:text-gold-200 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed font-serif-lux">
                    {point.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower branding banner */}
        <div className="mt-16 glass-panel-light border border-white/[0.04] p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-300/[0.015] pointer-events-none" />
          <p className="text-sm sm:text-lg text-gray-300 font-serif-lux italic font-light tracking-wide max-w-4xl mx-auto">
            "Le parfum est l’invisible parure de l’élégance, le messager secret de votre présence absolue."
          </p>
          <span className="block mt-4 text-[10px] tracking-[0.3em] text-gold-300 uppercase font-mono font-medium">
            StrongFrag — Grasse - Paris
          </span>
        </div>

      </div>
    </section>
  );
}
