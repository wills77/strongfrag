import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, Layers, CheckCircle } from 'lucide-react';

interface OlfactoryNote {
  name: string;
  category: 'tete' | 'coeur' | 'fond';
  origin: string;
  description: string;
  feeling: string;
  products: string[];
}

const NOTES_LIST: OlfactoryNote[] = [
  // Notes de Tête
  {
    name: 'Bergamote',
    category: 'tete',
    origin: 'Calabre, Italie',
    description: 'Une fraîcheur zestée pétillante, florale et légèrement poivrée. Notre bergamote est récoltée sous le soleil ardent calabrais entre novembre et février.',
    feeling: 'Clarté immédiate, éveil solaire, fraîcheur aristocratique.',
    products: ['Royal Elixir', 'Lumière d’Or', 'Nectar de Jasmin']
  },
  {
    name: 'Citron',
    category: 'tete',
    origin: 'Sicile, Italie',
    description: 'Une vibration acide et lumineuse qui apporte un éclat immédiat à la vaporisation. Nous utilisons le citron de variété "Femminello" aux huiles essentielles pures.',
    feeling: 'Dyna-stimulation, pureté cristalline, éveil aromatique sauvage.',
    products: ['Noir Absolu', 'Cuir Sauvage']
  },
  {
    name: 'Mandarine',
    category: 'tete',
    origin: 'Sicile',
    description: 'Une note fruitée juteuse, douce et ensoleillée dotée d’une légère facette verte aromatique, libérée par expression du zeste mûr.',
    feeling: 'Douceur apaisante, joie étincelante, réconfort immédiat.',
    products: ['Santal Impérial', 'Cuir Sauvage', 'Lumière d’Or']
  },
  
  // Notes de Coeur
  {
    name: 'Jasmin',
    category: 'coeur',
    origin: 'Grasse, France / Égypte',
    description: 'Une opulence florale noble aux accents cireux et chaleureux. Ramassées à l’aube pour éviter que la chaleur n’en altère le parfum céleste.',
    feeling: 'Féminité suprême, sensualité mystique, harmonie romantique.',
    products: ['Royal Elixir', 'Santal Impérial', 'Nectar de Jasmin', 'Lumière d’Or']
  },
  {
    name: 'Rose de Damas',
    category: 'coeur',
    origin: 'Bulgarie, Vallée des Roses',
    description: 'La souveraine des fleurs. Fragrance complexe, poudrée, mielleuse, obtenue par distillation à la vapeur de millions de pétales frais.',
    feeling: 'Passion dramatique, prestige universel, douceur veloutée sacrée.',
    products: ['Santal Impérial', 'Opéra Rose', 'L’Élixir de Soie']
  },
  {
    name: 'Lavande',
    category: 'coeur',
    origin: 'Provence, France (Haute Altitude)',
    description: 'Une vibration aromatique fraîche, herbacée et apaisante. Notre lavande vraie pousse à plus de 1100 mètres d’altitude pour conserver une pureté parfaite.',
    feeling: 'Calme souverain, sérénité éternelle, fraîcheur herbacée noble.',
    products: ['Cuir Sauvage']
  },

  // Notes de Fond
  {
    name: 'Bois de Santal',
    category: 'fond',
    origin: 'Nouvelle-Calédonie / Australie',
    description: 'Une note boisée crémeuse, lactée et d’un confort protecteur irrésistible. Elle ancre fermement les notes florales volatiles.',
    feeling: 'Chaleur sacrée, charisme enveloppant, profondeur réconfortante.',
    products: ['Royal Elixir', 'Santal Impérial', 'Ambre Céleste']
  },
  {
    name: 'Ambre',
    category: 'fond',
    origin: 'Moyen-Orient',
    description: 'Un accord sensuel de baumes précieux, de benjoin de Siam et de vanille. L’ambre confère au sillage sa tenue éternelle.',
    feeling: 'Mystère insondable, chaleur voluptueuse, pouvoir d’attraction.',
    products: ['Lumière d’Or', 'Opéra Rose', 'Ambre Céleste', 'Royal Elixir']
  },
  {
    name: 'Musc',
    category: 'fond',
    origin: 'Savoir-Faire Moléculaire de Grasse',
    description: 'Un dôme de coton blanc de synthèse vertueuse, poudré et infiniment propre, qui entoure la peau d’une caresse céleste.',
    feeling: 'Effet "seconde peau", propreté luxueuse, intimité subtile.',
    products: ['Santal Impérial', 'Opéra Rose', 'L’Élixir de Soie', 'Nectar de Jasmin', 'Lumière d’Or']
  },
  {
    name: 'Vanille',
    category: 'fond',
    origin: 'Madagascar (Gousse Bourbon)',
    description: 'La douceur suave par excellence, à la fois cuirée, épicée et gourmande. Nos gousses noires sont longuement affinées pour libérer leur parfum originel.',
    feeling: 'Addiction suprême, sensualité poudrée, indulgence enveloppante.',
    products: ['Santal Impérial', 'Opéra Rose', 'Ambre Céleste', 'Noir Absolu']
  }
];

export default function InteractiveNotes() {
  const [selectedLevel, setSelectedLevel] = useState<'tete' | 'coeur' | 'fond'>('tete');
  const [selectedNote, setSelectedNote] = useState<OlfactoryNote>(NOTES_LIST[0]);

  const levelDetails = {
    tete: {
      title: 'Notes de Tête',
      timing: 'Les 15 premières minutes',
      description: 'L’envolée olfactive immédiate. Ce sont des essences très volatiles, généralement des agrumes ou des aromates frais, créant la première impression physique de l’œuvre d’art.',
    },
    coeur: {
      title: 'Notes de Cœur',
      timing: 'De 15 minutes à 4 heures',
      description: 'La personnalité profonde du jus. Ces notes percent lorsque la première fraîcheur s’estompe. Elles sont dominées par des alliances florales nobles ou épicées durables.',
    },
    fond: {
      title: 'Notes de Fond',
      timing: 'Jusqu’à 24 heures et plus',
      description: 'L’ancre absolue du parfum. Renfermant des molécules lourdes, les notes résineuses, boisées et musquées fixent l’incarnation du parfum sur la surface cutanée.',
    }
  };

  const currentNotes = NOTES_LIST.filter(note => note.category === selectedLevel);

  const handleLevelChange = (level: 'tete' | 'coeur' | 'fond') => {
    setSelectedLevel(level);
    // Auto select first note in that category
    const firstNoteOfLevel = NOTES_LIST.find(n => n.category === level);
    if (firstNoteOfLevel) {
      setSelectedNote(firstNoteOfLevel);
    }
  };

  return (
    <section id="notes" className="py-24 bg-[#030303] relative overflow-hidden border-t border-b border-gold-300/10">
      
      {/* Visual glowing particle drops representative of oil extraction */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-gold-300/[0.04] to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            Académie des Fragrances
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Architecture Olfactive
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Un grand parfum vit et se déploie selon une alliance sacrée en trois mouvements : la pyramide olfactive. Cliquez sur chaque niveau pour explorer nos matières d’exception.
          </p>
        </div>

        {/* 1. Main Pyramide Controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left Panel: Pyramide Visual layout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="glass-panel p-6 border-gold-300/10 h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-sm font-semibold tracking-widest text-gold-300 uppercase mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  La Pyramide Interactive
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  Nos maîtres créateurs sculptent nos jus avec une ferveur obsessionnelle de l’équilibre. En jouant sur les taux de volatilité, ils permettent au parfum de raconter une histoire différente à chaque étape de la journée.
                </p>
              </div>

              {/* Graphical representation of the pyramid */}
              <div id="pyramid-graphic-container" className="space-y-4 relative">
                
                {/* Note de tête button block */}
                <button
                  id="level-btn-tete"
                  onClick={() => handleLevelChange('tete')}
                  className={`w-full group relative transition-all duration-300 text-left cursor-pointer ${
                    selectedLevel === 'tete' 
                    ? 'border-l-2 border-gold-300 bg-gold-400/10 pl-4 py-3' 
                    : 'border-l border-white/10 hover:border-l-2 hover:border-gold-300/50 hover:bg-white/[0.01] pl-3 py-3'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono tracking-widest text-gold-300/85 uppercase">Volatilité Ultime</span>
                      <h4 className="text-sm font-semibold tracking-wider text-white uppercase mt-0.5">Note de Tête</h4>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">0 - 15 min</span>
                  </div>
                </button>

                {/* Note de coeur button block */}
                <button
                  id="level-btn-coeur"
                  onClick={() => handleLevelChange('coeur')}
                  className={`w-full group relative transition-all duration-300 text-left cursor-pointer ${
                    selectedLevel === 'coeur' 
                    ? 'border-l-2 border-gold-300 bg-gold-400/10 pl-4 py-3' 
                    : 'border-l border-white/10 hover:border-l-2 hover:border-gold-300/50 hover:bg-white/[0.01] pl-3 py-3'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono tracking-widest text-gold-300/85 uppercase">Le Cœur et l’âme</span>
                      <h4 className="text-sm font-semibold tracking-wider text-white uppercase mt-0.5">Note de Cœur</h4>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">15 min - 4 h</span>
                  </div>
                </button>

                {/* Note de fond button block */}
                <button
                  id="level-btn-fond"
                  onClick={() => handleLevelChange('fond')}
                  className={`w-full group relative transition-all duration-300 text-left cursor-pointer ${
                    selectedLevel === 'fond' 
                    ? 'border-l-2 border-gold-300 bg-gold-400/10 pl-4 py-3' 
                    : 'border-l border-white/10 hover:border-l-2 hover:border-gold-300/50 hover:bg-white/[0.01] pl-3 py-3'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono tracking-widest text-gold-300/85 uppercase">L’Empreinte éternelle</span>
                      <h4 className="text-sm font-semibold tracking-wider text-white uppercase mt-0.5">Note de Fond</h4>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">4 h - 24 h+</span>
                  </div>
                </button>
              </div>

              {/* Informative timing tooltip */}
              <div className="mt-8 border-t border-white/[0.06] pt-4 text-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">PRODUITS ISSUS DE CETTE ARCHITECTURE</span>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                  <span className="text-[9px] bg-white/[0.03] border border-white/[0.06] text-gold-300 px-2.5 py-1">Extraits Parfums</span>
                  <span className="text-[9px] bg-white/[0.03] border border-white/[0.06] text-gold-300 px-2.5 py-1">Huiles Douces</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Panel: Selected Level Notes list and Individual Note Details Box */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* 1. Level Description & Active list */}
            <div className="glass-panel p-6 border-gold-300/10">
              <div className="border-b border-white/[0.06] pb-4 mb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-light font-serif-lux text-white tracking-widest uppercase">
                    {levelDetails[selectedLevel].title}
                  </h3>
                  <span className="text-xs text-gold-300 font-mono tracking-wide bg-gold-400/10 px-2.5 py-1 uppercase">
                    {levelDetails[selectedLevel].timing}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                  {levelDetails[selectedLevel].description}
                </p>
              </div>

              {/* List of notes in this category as clickable items */}
              <div className="space-y-2">
                <h4 className="text-[9px] font-mono tracking-widest text-gray-500 uppercase font-bold mb-3">
                  SÉLECTIONNEZ UNE NATURE OLFACTIVE :
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {currentNotes.map((note) => {
                    const isSelected = selectedNote.name === note.name;
                    return (
                      <button
                        key={note.name}
                        id={`note-chip-${note.name}`}
                        onClick={() => setSelectedNote(note)}
                        className={`px-4 py-2.5 text-xs transition-all duration-300 border rounded-none tracking-widest uppercase flex items-center space-x-2 cursor-pointer ${
                          isSelected
                            ? 'border-gold-300 bg-gold-400/5 text-gold-300 glow-gold shadow-md font-medium'
                            : 'border-white/[0.08] bg-transparent text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-gold-300' : 'bg-gray-500'}`} />
                        <span>{note.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Interactive Detail Card representing the selected ingredient */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNote.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 border-gold-300/15 relative overflow-hidden group"
              >
                {/* Decorative glow node inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-300/[0.04] rounded-full filter blur-xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/[0.05] pb-4 mb-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-[0.25em] text-gold-350 uppercase">MATIÈRE PREMIÈRE NOBLE</span>
                    <h4 className="text-xl font-light font-serif-lux text-white tracking-widest mt-0.5">
                      {selectedNote.name}
                    </h4>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="text-[10px] tracking-widest uppercase text-gray-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1">
                      Provenance : {selectedNote.origin}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Detailed Description */}
                  <div>
                    <h5 className="text-[9px] font-mono tracking-widest text-gold-300 uppercase font-bold mb-1">PROGÉLIES ET TRADITION</h5>
                    <p className="text-xs text-gray-300 font-light leading-relaxed font-serif-lux">
                      {selectedNote.description}
                    </p>
                  </div>

                  {/* Feeling */}
                  <div className="p-3 bg-white/[0.015] border border-white/[0.03] rounded-none">
                    <span className="text-[9px] font-mono tracking-widest text-gold-300 uppercase font-bold">EMPREINTE SENSORIELLE</span>
                    <p className="text-xs text-indigo-100 font-light italic mt-0.5">
                      " {selectedNote.feeling} "
                    </p>
                  </div>

                  {/* Present in products list */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase font-bold block mb-2">Présente dans les créations StrongFrag :</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedNote.products.map((pName) => (
                        <span
                          key={pName}
                          className="inline-flex items-center gap-1.5 text-[10px] bg-gold-300/10 text-gold-200 border border-gold-300/15 py-1 px-2.5 font-mono"
                        >
                          <CheckCircle className="w-3 h-3 text-gold-300 shrink-0" />
                          <span>{pName}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
