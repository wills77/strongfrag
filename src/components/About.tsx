import { motion } from 'motion/react';
import { Award, Compass, ShieldCheck, Sparkles, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Expertise Grassoise',
      description: 'Chaque essence StrongFrag prend naissance à Grasse, la sainte patrie des fragrances éternelles. Nos maîtres parfumeurs y perpétuent un savoir-faire séculaire hérité d’artisans du XVIIe siècle.'
    },
    {
      icon: Compass,
      title: 'Ingrédients de Légende',
      description: 'Nous parcourons le globe pour récolter des absolues de Rose de Damas récoltées à la main à l’aube, de la bergamote de Calabre ou du Vétiver de Haïti d’une pureté incomparable.'
    },
    {
      icon: ShieldCheck,
      title: 'Pureté Sans Compromis',
      description: 'Nos huiles parfumées sont 100% sans alcool, conçues sur des bases d’Argan et de Jojoba pressées à froid. Elles respectent intensément l’intégrité cutanée tout en projetant un sillage royal.'
    },
    {
      icon: Sparkles,
      title: 'Luxe Éco-Responsable',
      description: 'Le flaconnage en verre fondu sombre et les coffrets d’art recyclables illustrent notre philosophie : un raffinement intemporel qui préserve jalousement l’écosystème terrestre.'
    }
  ];

  return (
    <section
      id="histoire"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* Background ambient glow nodes */}
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-gold-300/[0.024] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-gold-300/[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            Notre héritage de prestige
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            L’Histoire de <span className="text-gold-300-gradient italic">StrongFrag</span>
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Née de la rencontre insolite entre l’artisanat traditionnel grassois et l’exigence moderne de la haute parfumerie de luxe, StrongFrag repousse les frontières olfactives.
          </p>
        </div>

        {/* Narrative columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Exquisite Photo Presentation */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-300/10 to-gold-400/5 rounded-none blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative border border-gold-300/25 p-3 bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800"
                alt="StrongFrag Scent Artisanry"
                className="w-full h-[380px] sm:h-[450px] object-cover filter saturate-[0.8] contrast-[1.05] grayscale-[15%]"
              />
              {/* Absolue Quality stamp */}
              <div className="absolute bottom-6 right-6 glass-panel border-gold-300/20 px-4 py-3 text-center">
                <span className="block text-xl font-serif-lux font-bold text-gold-300">100%</span>
                <span className="text-[8px] tracking-widest text-gray-400 uppercase">Grasse, France</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Passionate Detail */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-light font-serif-lux tracking-widest text-white leading-snug">
              Une passion sacrée pour <br />
              <span className="text-gold-300 italic font-serif-lux">l’excellence sensorielle</span>
            </h3>
            
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Nous pensons qu’un parfum n’est pas simplement une fragrance fugace. C’est une empreinte invisible, la déclaration d’un caractère suprême, l’armure intime de celui ou celle qui le porte. StrongFrag s’est donné pour mission de capturer l’esprit des plus nobles essences naturelles pour sculpter des œuvres d’art liquides.
            </p>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              En écartant méthodiquement les additifs industriels et synthétiques agressifs, nous façonnons des extraits de parfums puissants et des huiles parfumées divinement douces. Notre méthode de macération à froid de 6 semaines libère la quintessence absolue de chaque note olfactive pour une fusion magique avec votre épiderme.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 border border-gold-300/20 rounded-none bg-gold-400/5">
                  <Sparkles className="w-4 h-4 text-gold-300" />
                </div>
                <div>
                  <h4 className="text-xs tracking-widest text-white uppercase font-semibold">Durée Majestueuse</h4>
                  <span className="text-[10px] text-gray-500">Tenue jusqu’à 24 heures</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 border border-gold-300/20 rounded-none bg-gold-400/5">
                  <Heart className="w-4 h-4 text-gold-300" />
                </div>
                <div>
                  <h4 className="text-xs tracking-widest text-white uppercase font-semibold">Hypoallergénique</h4>
                  <span className="text-[10px] text-gray-500">Huiles sans alcool</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-6 border-gold-300/10 hover:border-gold-300/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="inline-flex p-3 border border-gold-300/20 rounded-none bg-gold-300/5 group-hover:bg-gold-300/10 mb-4 transition-colors">
                <v.icon className="w-5 h-5 text-gold-300 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-2 group-hover:text-gold-300 transition-colors">
                {v.title}
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
