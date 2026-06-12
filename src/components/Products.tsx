import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_DATA } from '../data';
import { Product, ProductCategory } from '../types';
import { Star, Clock, Droplet, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Layers, Info } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  const [activeDetailTab, setActiveDetailTab] = useState<'notes' | 'conseils' | 'composition'>('notes');

  // Filter products based on selected tab
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  const toggleExpandProduct = (id: string) => {
    if (expandedProductId === id) {
      setExpandedProductId(null);
    } else {
      setExpandedProductId(id);
      setActiveDetailTab('notes'); // reset active tab
    }
  };

  const categoriesList: { label: string; value: ProductCategory | 'all' }[] = [
    { label: 'Tous Nos Trésors', value: 'all' },
    { label: 'Pour Homme', value: 'homme' },
    { label: 'Pour Femme', value: 'femme' },
    { label: 'Huiles Douces', value: 'huile' },
  ];

  return (
    <section id="collections" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Visual backgrounds */}
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-gold-300/[0.012] rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-300/[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            La Haute Collection
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Nos Créations Parfumées
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Parcourez nos flacons de prestige. Que vous recherchiez l’empreinte boisée d’un grand extrait de parfum pour homme, la parure florale de Grasse pour femme ou la douceur satinée de nos huiles parfumées divines.
          </p>
        </div>

        {/* Elegant Filtres Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16 max-w-xl mx-auto bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-none">
          {categoriesList.map((cat) => {
            const isSelected = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                id={`product-filter-${cat.value}`}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setExpandedProductId(null); // Close expanded details on tab switch
                }}
                className={`px-4 py-2.5 text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gold-300 text-black font-semibold shadow-[0_4px_15px_rgba(212,175,55,0.15)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isExpanded = expandedProductId === product.id;

              return (
                <motion.div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-zinc-950/40 border border-gold-300/10 hover:border-gold-300/25 transition-all duration-500 overflow-hidden group hover:shadow-[0_10px_35px_rgba(212,175,55,0.06)] relative flex flex-col justify-between ${
                    isExpanded ? 'md:col-span-2 lg:col-span-3 border-gold-300/45 ring-1 ring-gold-300/20' : ''
                  }`}
                >
                  
                  {/* Ribbon Label for New items */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gold-300 text-black text-[8px] font-mono tracking-widest uppercase py-1 px-2.5 font-bold shadow-md">
                        Nouveauté d’art
                      </span>
                    </div>
                  )}

                  {/* Layout condition based on expansion */}
                  <div className={`p-4 sm:p-6 ${isExpanded ? 'lg:grid lg:grid-cols-12 lg:gap-10 items-stretch' : ''}`}>
                    
                    {/* Bottle/Product HD Image Container */}
                    <div className={`relative overflow-hidden bg-black/30 border border-white/[0.04] flex items-center justify-center ${
                      isExpanded ? 'lg:col-span-5 h-[280px] sm:h-[400px]' : 'h-[250px] sm:h-[300px]'
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-700 brightness-95 saturate-90 filter ${
                          isExpanded ? 'scale-100' : 'group-hover:scale-105 group-hover:brightness-105 group-hover:saturate-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40"></div>
                      
                      {/* Premium rating tag */}
                      <div className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1.5 border border-gold-300/15 flex items-center space-x-1">
                        <Star className="w-3.5 h-3.5 text-gold-300 fill-gold-300" />
                        <span className="text-xs text-white font-semibold font-mono">{product.rating}</span>
                      </div>
                    </div>

                    {/* Basic details section */}
                    <div className={`mt-6 ${isExpanded ? 'lg:col-span-7 lg:mt-0 flex flex-col justify-between h-full' : 'flex flex-col justify-between flex-grow'}`}>
                      
                      <div>
                        {/* Category & Duration Row */}
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gold-300 mb-2 font-mono">
                          <span>
                            {product.category === 'homme' && 'Extrait De Parfum Homme'}
                            {product.category === 'femme' && 'Extrait De Parfum Femme'}
                            {product.category === 'huile' && 'Huile Douce Précieuse'}
                          </span>
                          <span className="flex items-center space-x-1 text-gray-400">
                            <Clock className="w-3 h-3 text-gold-300/70" />
                            <span>{product.duration.split(' ')[0]}</span>
                          </span>
                        </div>

                        {/* Title & Price Row */}
                        <div className="flex items-baseline justify-between mb-4">
                          <h3 className="text-2xl font-light font-serif-lux text-white tracking-widest">
                            {product.name}
                          </h3>
                          <span className="text-lg font-serif-lux font-medium text-gold-300">
                            {product.price}
                          </span>
                        </div>

                        {/* Concept Description */}
                        <p className="text-xs text-gray-400 font-light leading-relaxed mb-6 font-serif-lux">
                          {product.description}
                        </p>

                        {/* In-Card Olfactory notes list (only visible when collapsed) */}
                        {!isExpanded && (
                          <div className="border-t border-white/[0.06] pt-4 mb-4">
                            <h4 className="text-[9px] tracking-widest uppercase text-gray-500 font-bold mb-2 flex items-center gap-1">
                              <Layers className="w-3 h-3 text-gold-300" />
                              Architecture Olfactive
                            </h4>
                            <div className="space-y-1 text-[11px] text-gray-300 bg-white/[0.01] p-2.5 border border-white/[0.03]">
                              <p className="font-light truncate"><strong className="text-gold-200">Tête :</strong> {product.notes.head.join(', ')}</p>
                              <p className="font-light truncate"><strong className="text-gold-200">Cœur :</strong> {product.notes.heart.join(', ')}</p>
                              <p className="font-light truncate"><strong className="text-gold-200">Fond :</strong> {product.notes.base.join(', ')}</p>
                            </div>
                          </div>
                        )}

                        {/* Expanded details container (Renders tabs requested by user) */}
                        {isExpanded && (
                          <div className="mt-4 border-t border-white/[0.08] pt-6 flex-grow">
                            
                            {/* Detail Sub Tabs */}
                            <div className="flex border-b border-white/[0.06] mb-4 gap-4 pb-2">
                              {/* Tab 1: Olfactory Notes */}
                              <button
                                onClick={() => setActiveDetailTab('notes')}
                                className={`text-[10px] tracking-widest uppercase pb-1.5 transition-all relative ${
                                  activeDetailTab === 'notes' ? 'text-gold-300 font-bold' : 'text-gray-400'
                                }`}
                              >
                                Notes d'art
                                {activeDetailTab === 'notes' && (
                                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-300" />
                                )}
                              </button>

                              {/* Tab 2: Composition & Formulation */}
                              <button
                                onClick={() => setActiveDetailTab('composition')}
                                className={`text-[10px] tracking-widest uppercase pb-1.5 transition-all relative ${
                                  activeDetailTab === 'composition' ? 'text-gold-300 font-bold' : 'text-gray-400'
                                }`}
                              >
                                Composition noble
                                {activeDetailTab === 'composition' && (
                                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-300" />
                                )}
                              </button>

                              {/* Tab 3: Usage / Ritual of beauty */}
                              <button
                                onClick={() => setActiveDetailTab('conseils')}
                                className={`text-[10px] tracking-widest uppercase pb-1.5 transition-all relative ${
                                  activeDetailTab === 'conseils' ? 'text-gold-300 font-bold' : 'text-gray-400'
                                }`}
                              >
                                Rituel d'usage
                                {activeDetailTab === 'conseils' && (
                                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-300" />
                                )}
                              </button>
                            </div>

                            {/* Tab content rendering */}
                            <div className="min-h-[160px] text-xs leading-relaxed text-gray-350">
                              
                              {/* 1. Architecture Olfactive Tab */}
                              {activeDetailTab === 'notes' && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                >
                                  {/* Note de tête */}
                                  <div className="p-3 bg-white/[0.02] border border-white/[0.04]">
                                    <div className="flex items-center space-x-1 mb-2">
                                      <span className="p-1 rounded bg-gold-300/10 text-gold-300 text-[8px] font-bold">TOP</span>
                                      <h5 className="text-[10px] text-white uppercase tracking-widest font-bold">Note de tête</h5>
                                    </div>
                                    <p className="text-[11px] text-gray-400 font-light mb-1">Volatile & immédiate</p>
                                    <ul className="space-y-1">
                                      {product.notes.head.map((n, i) => (
                                        <li key={i} className="text-[11px] font-serif-lux text-white flex items-center space-x-1.5">
                                          <span className="h-1 w-1 bg-gold-350 rounded-full"></span>
                                          <span>{n}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Note de coeur */}
                                  <div className="p-3 bg-white/[0.02] border border-white/[0.04]">
                                    <div className="flex items-center space-x-1 mb-2">
                                      <span className="p-1 rounded bg-gold-300/10 text-gold-300 text-[8px] font-bold">HEART</span>
                                      <h5 className="text-[10px] text-white uppercase tracking-widest font-bold">Note de cœur</h5>
                                    </div>
                                    <p className="text-[11px] text-gray-400 font-light mb-1">Âme du sillage</p>
                                    <ul className="space-y-1">
                                      {product.notes.heart.map((n, i) => (
                                        <li key={i} className="text-[11px] font-serif-lux text-white flex items-center space-x-1.5">
                                          <span className="h-1 w-1 bg-gold-350 rounded-full"></span>
                                          <span>{n}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Note de fond */}
                                  <div className="p-3 bg-white/[0.02] border border-white/[0.04]">
                                    <div className="flex items-center space-x-1 mb-2">
                                      <span className="p-1 rounded bg-gold-300/10 text-gold-300 text-[8px] font-bold">BASE</span>
                                      <h5 className="text-[10px] text-white uppercase tracking-widest font-bold">Note de fond</h5>
                                    </div>
                                    <p className="text-[11px] text-gray-400 font-light mb-1">Ancre durable</p>
                                    <ul className="space-y-1">
                                      {product.notes.base.map((n, i) => (
                                        <li key={i} className="text-[11px] font-serif-lux text-white flex items-center space-x-1.5">
                                          <span className="h-1 w-1 bg-gold-300 rounded-full"></span>
                                          <span>{n}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </motion.div>
                              )}

                              {/* 2. Composition / Ingrédients Tab */}
                              {activeDetailTab === 'composition' && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="space-y-4"
                                >
                                  <div>
                                    <h5 className="text-[10px] text-gold-300 uppercase tracking-widest font-semibold mb-1">
                                      {product.category === 'huile' ? 'Ingrédients Actifs Bio' : 'Filière d’ingrédients'}
                                    </h5>
                                    <p className="text-[11px] text-gray-300 font-light font-serif-lux">
                                      {product.composition || 'Concentré pur d’extraits fabriqué à Grasse, macéré durant 6 semaines. Notre formulation exclut le phtalate, le parabène et le colorant synthétique pour préserver le jus de manière irréprochable.'}
                                    </p>
                                  </div>

                                  {/* Specific Oil benefits requested */}
                                  {product.category === 'huile' && product.benefits && (
                                    <div>
                                      <h5 className="text-[10px] text-gold-300 uppercase tracking-widest font-semibold mb-2">
                                        Bienfaits Exceptionnels
                                      </h5>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {product.benefits.map((b, i) => (
                                          <div key={i} className="flex items-center space-x-2 text-[11px] text-white font-light">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-300 shrink-0" />
                                            <span>{b}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              )}

                              {/* 3. Rituel d'usage / Conseils Tab */}
                              {activeDetailTab === 'conseils' && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="space-y-3"
                                >
                                  <div>
                                    <h5 className="text-[10px] text-gold-300 uppercase tracking-widest font-semibold mb-1">
                                      Conseils d’application
                                    </h5>
                                    <p className="text-[11px] text-gray-300 font-light font-serif-lux">
                                      {product.usage || 'Vaporisez à environ 20 centimètres des zones de pulsation cutanée : intérieur des poignets, cou, base du crâne et derrière les genoux. La circulation sanguine de ces zones optimisera le sillage.'}
                                    </p>
                                  </div>

                                  <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-none flex items-start space-x-3">
                                    <Info className="w-4 h-4 text-gold-300 shrink-0 mt-0.5" />
                                    <div>
                                      <h6 className="text-[10px] text-white uppercase tracking-widest font-bold">Recommandation du Parfumeur</h6>
                                      <p className="text-[11px] text-gray-400 font-light mt-0.5">
                                        Ne jamais frotter le parfum sur la peau (par exemple, poignet contre poignet) après application. Cela brise inutilement les molécules olfactives fragiles et altère la pyramide olfactive originelle.
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}

                            </div>
                          </div>
                        )}

                      </div>

                      {/* Expanding Accordion Trigger button */}
                      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                        <span className="text-xs text-gray-500 font-mono tracking-widest">
                          {isExpanded ? 'RÉTRACTER' : 'INFOS SENSORIELLES'}
                        </span>
                        
                        <button
                          id={`product-expand-btn-${product.id}`}
                          onClick={() => toggleExpandProduct(product.id)}
                          className="flex items-center space-x-2 border border-gold-300/30 hover:border-gold-300 px-4 py-2 hover:bg-gold-300 hover:text-black transition-colors rounded-none text-[10px] tracking-widest uppercase font-semibold cursor-pointer"
                        >
                          <span>{isExpanded ? 'Fermer' : 'Dévoiler les secrets'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
