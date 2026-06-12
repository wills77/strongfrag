/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Droplet, 
  Compass, 
  MapPin, 
  Instagram, 
  X, 
  ChevronRight, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';

// Sub components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import InteractiveNotes from './components/InteractiveNotes';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import GallerySection from './components/GallerySection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showConsultant, setShowConsultant] = useState(false);
  const [consultantStep, setConsultantStep] = useState(1);
  const [surveyGender, setSurveyGender] = useState<'homme' | 'femme' | 'huile' | null>(null);
  const [surveyVibe, setSurveyVibe] = useState<'intense' | 'floral' | 'solaire' | null>(null);
  const [legalModal, setLegalModal] = useState<'mentions' | 'privacy' | null>(null);

  // Navigation click hander
  const handleNavigation = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Scroll spy to highlight current section in navigation bar
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['accueil', 'histoire', 'collections', 'notes', 'qualite', 'temoignages', 'faq', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Virtual Consultant Recommend logic
  const getRecommendation = () => {
    if (surveyGender === 'homme') {
      if (surveyVibe === 'intense') {
        return {
          name: 'Royal Elixir Extrait',
          desc: 'La quintessence du charisme. Un sillage puissant alliant la fraîcheur vive de la Calabre aux profondeurs du bois d’oud sauvage.',
          price: '185 €',
          image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400',
          targetId: 'h1'
        };
      } else if (surveyVibe === 'floral') {
        return {
          name: 'Noir Absolu Extrait',
          desc: 'Sombre et sophistiqué. Un jeu subtil d’encens d’Oman s’entourant de géranium d’Égypte et d’iris impérial.',
          price: '160 €',
          image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400',
          targetId: 'h2'
        };
      } else {
        return {
          name: 'Cuir Sauvage Extrait',
          desc: 'La liberté indomptable. L’accord cuir est adouci par la lavande de Provence de haute altitude et des embruns marins.',
          price: '150 €',
          image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=400',
          targetId: 'h3'
        };
      }
    } else if (surveyGender === 'femme') {
      if (surveyVibe === 'intense') {
        return {
          name: 'Opéra Rose Mystère',
          desc: 'Une tragédie amoureuse à Grasse. La rose de Damas est enveloppée d’un safran mystique et de patchouli originel.',
          price: '210 €',
          image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=400',
          targetId: 'f3'
        };
      } else if (surveyVibe === 'floral') {
        return {
          name: 'Santal Impérial',
          desc: 'Le ravissement de Grasse. Le bois de santal velouté fusionne avec de sublimes roses fraîches et de la vanille bourbon.',
          price: '190 €',
          image: 'https://images.unsplash.com/photo-1588405748373-122b2321bc31?auto=format&fit=crop&q=80&w=400',
          targetId: 'f1'
        };
      } else {
        return {
          name: 'Lumière d’Or Solaire',
          desc: 'Une parure d’or rayonnant. Notes poudrées d’orchidée dorée, d’iris florentin et de jasmin sous le soleil de la Côte d’Azur.',
          price: '175 €',
          image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400',
          targetId: 'f2'
        };
      }
    } else {
      // Huiles douces precious
      if (surveyVibe === 'intense') {
        return {
          name: 'Ambre Céleste Huile',
          desc: 'Hydratation d’or pur et relaxation d’aromathérapie. Des fragments de résines de benjoin réchauffés à la vanille bourbon.',
          price: '110 €',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400',
          targetId: 'o2'
        };
      } else if (surveyVibe === 'floral') {
        return {
          name: 'Nectar de Jasmin Pur',
          desc: 'L’éveil sensuel par excellence. L’huile d’avocat régénératrice infusée au distillat de jasmin nocturne.',
          price: '105 €',
          image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400',
          targetId: 'o3'
        };
      } else {
        return {
          name: 'L’Élixir de Soie',
          desc: 'Une huile sèche divinement soyeuse qui laisse un voile addictif de boutons de rose blanche et de lait de coco.',
          price: '95 €',
          image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=400',
          targetId: 'o1'
        };
      }
    }
  };

  const handleResetConsultant = () => {
    setSurveyGender(null);
    setSurveyVibe(null);
    setConsultantStep(1);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-gold-300 selection:text-black">
      
      {/* Absolute Ambient Background Lights */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-right" />
      <div className="ambient-glow-left" />

      {/* Decorative vertical editorial side elements from Immersive UI theme */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-14 text-[9px] uppercase tracking-[0.35em] text-gold-300/40 [writing-mode:vertical-rl] rotate-180 pointer-events-none">
        <span className="hover:text-gold-300 transition-colors">Instagram</span>
        <span className="hover:text-gold-300 transition-colors">Facebook</span>
        <span className="hover:text-gold-300 transition-colors">Journal d'art</span>
      </div>

      {/* 1. Header Luxurious Bar */}
      <Navbar onNavigate={handleNavigation} activeSection={activeSection} />

      {/* 2. Hero Presentation */}
      <Hero 
        onDiscoverClick={() => handleNavigation('collections')}
        onContactClick={() => handleNavigation('contact')}
      />

      {/* 3. Story & Heritage of Grasse */}
      <About />

      {/* 4. Collections and Products catalog (Homme, Femme, Huiles) */}
      <Products />

      {/* 5. Academy: Interactive Olfactory Pyramid explorer */}
      <InteractiveNotes />

      {/* 6. Values & Bento reasons of StrongFrag */}
      <WhyChooseUs />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Immersive Visual Grid Gallery */}
      <GallerySection />

      {/* 9. FAQs Section */}
      <FaqSection />

      {/* 10. Contact form & Place Vendôme Interactive map */}
      <ContactSection />

      {/* 11. Luxury Footer */}
      <footer id="footer" className="bg-[#020202] border-t border-white/[0.05] pt-16 pb-8 text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand & Logo */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-gold-300" />
                <span className="text-lg font-bold tracking-[0.2em] text-white font-serif-lux uppercase">
                  Strong<span className="text-gold-300">Frag</span>
                </span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed font-serif-lux">
                Créateurs d’empreintes olfactives intemporelles de haute tradition grassoise. Nos formulations allient pureté botanique absolue et sillage éternel pour votre prestance.
              </p>
              
              {/* Social handles */}
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 border border-white/10 text-gray-400 hover:text-gold-300 hover:border-gold-300 transition-colors"
                  aria-label="Instagram StrongFrag"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 border border-white/10 text-gray-400 hover:text-gold-300 hover:border-gold-300 transition-colors"
                  aria-label="Facebook StrongFrag"
                >
                  <Droplet className="h-4 w-4" />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 border border-white/10 text-gray-400 hover:text-gold-300 hover:border-gold-300 transition-colors"
                  aria-label="Pinterest StrongFrag"
                >
                  <Compass className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Rapide */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold pb-2 border-b border-white/[0.05]">
                La Grande Maison
              </h4>
              <ul className="space-y-2.5 font-mono text-[11px] text-gray-400">
                <li>
                  <button onClick={() => handleNavigation('accueil')} className="hover:text-gold-300 transition-colors block text-left uppercase">
                    Accueil Immersion
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('histoire')} className="hover:text-gold-300 transition-colors block text-left uppercase">
                    Notre Histoire d’Or
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('collections')} className="hover:text-gold-300 transition-colors block text-left uppercase">
                    Haute Collection
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('notes')} className="hover:text-gold-300 transition-colors block text-left uppercase">
                    Pyramide Olfactive
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Collections Privilège */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold pb-2 border-b border-white/[0.05]">
                Nos Signatures
              </h4>
              <ul className="space-y-2.5 font-light font-serif-lux text-gray-400">
                <li><span className="hover:text-gold-200 transition-colors block cursor-pointer">Royal Elixir — Bois d’Oud</span></li>
                <li><span className="hover:text-gold-200 transition-colors block cursor-pointer">Santal Impérial — Rose</span></li>
                <li><span className="hover:text-gold-200 transition-colors block cursor-pointer">Ambre Céleste — Huile Fine</span></li>
                <li><span className="hover:text-gold-200 transition-colors block cursor-pointer font-semibold text-gold-300">L’Atelier Sur-Mesure de Grasse</span></li>
              </ul>
            </div>

            {/* Column 4: Newsletters Subscriptions */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold pb-2 border-b border-white/[0.05]">
                Lettre D’Or Confidentielle
              </h4>
              <p className="text-gray-400 font-light leading-relaxed font-serif-lux">
                Inscrivez-vous pour être invité en avant-première à nos lancements de crus parfumés millésimés et recevoir nos invitations de prestige Place Vendôme.
              </p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="votre.email@luxe.com" 
                  className="flex-grow bg-white/[0.02] border border-white/10 p-2.5 focus:border-gold-300 focus:outline-none text-[11px] font-mono rounded-none"
                />
                <button 
                  onClick={() => alert("Lettre confidentielle : Votre courriel a été inscrit dans notre registre des initiés de prestige.")}
                  className="bg-gold-300 text-black px-3.5 hover:bg-gold-200 transition-colors uppercase tracking-widest font-bold font-mono text-[10px] cursor-pointer"
                >
                  Inviter
                </button>
              </div>
            </div>

          </div>

          {/* Legal statement and signatures */}
          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-serif-lux">
            
            <div className="mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} <strong>StrongFrag Paris</strong>. Tous droits réservés. L’essence de votre élégance.</span>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => setLegalModal('mentions')}
                className="hover:text-gold-300 transition-colors cursor-pointer uppercase tracking-wider text-[10px] bg-transparent border-none"
              >
                Mentions Légales
              </button>
              <button 
                onClick={() => setLegalModal('privacy')}
                className="hover:text-gold-300 transition-colors cursor-pointer uppercase tracking-wider text-[10px] bg-transparent border-none"
              >
                Charte de Confidentialité
              </button>
              <span className="text-[10px] text-gold-300/40">Grasse - Paris - Milan</span>
            </div>

          </div>

        </div>
      </footer>

      {/* 12. Floating Deluxe Virtual Scent Consultant Widget (The absolute cherry on top) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          id="scent-consultant-trigger"
          onClick={() => {
            setShowConsultant(true);
            handleResetConsultant();
          }}
          className="bg-zinc-950/90 text-white hover:text-[#050505] hover:bg-gold-300 border border-gold-300/40 hover:border-gold-300 p-3.5 transition-all duration-300 flex items-center space-x-2 shadow-[0_4px_30px_rgba(212,175,55,0.4)] group cursor-pointer"
        >
          <Compass className="h-4.5 w-4.5 text-gold-300 group-hover:text-[#050505] animate-spin duration-3000 shrink-0" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Consultant Olfactif</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold-300 group-hover:bg-[#050505] animate-pulse"></span>
        </button>
      </div>

      {/* Consultant Dialog Modal */}
      <AnimatePresence>
        {showConsultant && (
          <motion.div
            id="consultant-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              id="consultant-modal-card"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-zinc-950 border border-gold-300/30 p-6 sm:p-8 max-w-lg w-full relative overflow-hidden text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowConsultant(false)}
                className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gold-300 hover:border-gold-300 border border-transparent transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header decorative logo */}
              <div className="flex items-center space-x-2 text-gold-300 mb-6">
                <Compass className="w-5 h-5 animate-spin duration-5000" />
                <span className="text-[10px] font-mono tracking-widest uppercase">L’ATELIER D’ORIENTATION VIRTUEL</span>
              </div>

              {/* Step 1: Destination Gender */}
              {consultantStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light font-serif-lux text-white tracking-widest uppercase">
                      Pour qui recherchez-vous une fragrance ?
                    </h3>
                    <p className="text-xs text-gray-450 font-light mt-1.5 font-serif-lux leading-relaxed">
                      Nos jus réagissent différemment pour souligner le charisme ou exhaler la délicatesse naturelle.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    
                    {/* Option Homme */}
                    <button
                      onClick={() => {
                        setSurveyGender('homme');
                        setConsultantStep(2);
                      }}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-gold-350/5 border border-white/10 hover:border-gold-300 text-sm font-semibold tracking-widest uppercase text-white font-serif-lux flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <span>Pour Homme d’influence</span>
                      <ChevronRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Option Femme */}
                    <button
                      onClick={() => {
                        setSurveyGender('femme');
                        setConsultantStep(2);
                      }}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-gold-350/5 border border-white/10 hover:border-gold-300 text-sm font-semibold tracking-widest uppercase text-white font-serif-lux flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <span>Pour Femme d’élégance</span>
                      <ChevronRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Option Huile Douce */}
                    <button
                      onClick={() => {
                        setSurveyGender('huile');
                        setConsultantStep(2);
                      }}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-gold-350/5 border border-white/10 hover:border-gold-300 text-sm font-semibold tracking-widest uppercase text-white font-serif-lux flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <span>Huile douce & rituel sensoriel satiné</span>
                      <ChevronRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
                    </button>

                  </div>
                </div>
              )}

              {/* Step 2: Atmospheric Vibe */}
              {consultantStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light font-serif-lux text-white tracking-widest uppercase">
                      Quel univers olfactif vous définit ?
                    </h3>
                    <p className="text-xs text-gray-450 font-light mt-1.5 font-serif-lux leading-relaxed">
                      L’aura que vous projetez exprime une part confidentielle de votre histoire personnelle.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    
                    {/* Option Intense */}
                    <button
                      onClick={() => {
                        setSurveyVibe('intense');
                        setConsultantStep(3);
                      }}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-gold-350/5 border border-white/10 hover:border-gold-300 text-sm font-semibold tracking-widest uppercase text-white font-serif-lux flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <div>
                        Coupe sombre & intense
                        <span className="block text-[10px] text-gray-500 text-normal lowercase tracking-normal font-sans pt-1 mt-0.5">Bois d’Oud, Cuir, Encens mystique</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Option Floral */}
                    <button
                      onClick={() => {
                        setSurveyVibe('floral');
                        setConsultantStep(3);
                      }}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-gold-350/5 border border-white/10 hover:border-gold-300 text-sm font-semibold tracking-widest uppercase text-white font-serif-lux flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <div>
                        Floral pur & raffiné
                        <span className="block text-[10px] text-gray-500 text-normal lowercase tracking-normal font-sans pt-1 mt-0.5">Rose de Grasse, Jasmin doux, Lavande des cimes</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Option Solaire */}
                    <button
                      onClick={() => {
                        setSurveyVibe('solaire');
                        setConsultantStep(3);
                      }}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-gold-350/5 border border-white/10 hover:border-gold-300 text-sm font-semibold tracking-widest uppercase text-white font-serif-lux flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <div>
                        Chaleureux & Solaire poudré
                        <span className="block text-[10px] text-gray-500 text-normal lowercase tracking-normal font-sans pt-1 mt-0.5">Ambre précieux, Vanille bourbon, Muscs blancs</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
                    </button>

                  </div>

                  <button
                    onClick={() => setConsultantStep(1)}
                    className="text-[10px] tracking-widest uppercase text-gray-500 hover:text-white underline block"
                  >
                    Retour à l'étape précédente
                  </button>
                </div>
              )}

              {/* Step 3: Recommendation Results */}
              {consultantStep === 3 && (() => {
                const rec = getRecommendation();
                return (
                  <div className="space-y-6">
                    <div className="text-center pb-2 border-b border-white/[0.05]">
                      <span className="text-[9px] font-mono tracking-widest text-gold-300 uppercase">&#10024; VOTRE ALLIÉ OLFACTIF IDÉAL</span>
                      <h3 className="text-2xl font-light font-serif-lux text-white tracking-widest mt-1 uppercase">
                        {rec.name}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-white/[0.02] border border-white/[0.05]">
                      <img
                        src={rec.image}
                        alt="Recommandé"
                        className="w-24 h-24 object-cover border border-gold-300/20"
                      />
                      <div className="space-y-2 text-center sm:text-left">
                        <span className="text-[10px] text-gold-300 font-bold uppercase tracking-wider block font-mono">
                          {rec.price} — Concentré Noble de Grasse
                        </span>
                        <p className="text-xs text-gray-300 font-light font-serif-lux leading-relaxed">
                          {rec.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      
                      <button
                        onClick={handleResetConsultant}
                        className="flex-1 bg-transparent hover:bg-white/[0.04] text-white hover:text-gold-300 border border-white/20 hover:border-gold-300/40 text-xs font-semibold tracking-widest uppercase py-3.5 transition-colors cursor-pointer"
                      >
                        Recommencer
                      </button>

                      <button
                        onClick={() => {
                          setShowConsultant(false);
                          handleNavigation('collections');
                        }}
                        className="flex-1 bg-gold-300 hover:bg-gold-200 text-black text-xs font-semibold tracking-widest uppercase py-3.5 transition-colors font-mono flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>VOIR CE FLACON</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                );
              })()}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legal Dialog Modals (Prerendered elegant popups for legal texts requested by footer links) */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-zinc-950 border border-gold-300/20 p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative text-left">
              
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gold-300 border border-transparent cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {legalModal === 'mentions' ? (
                <div id="legal-mentions-content" className="space-y-4">
                  <div className="flex items-center space-x-2 text-gold-300">
                    <ShieldAlert className="w-5 h-5" />
                    <h3 className="text-lg font-bold tracking-widest uppercase font-serif-lux">MENTIONS LÉGALES</h3>
                  </div>
                  <div className="accent-gold-line !m-0 !mt-2"></div>
                  <div className="text-xs text-gray-400 leading-relaxed space-y-3 font-serif-lux font-light mt-4">
                    <p><strong>1. Éditeur du Site :</strong> Le site vitrine StrongFrag est édité par la société fictive StrongFrag Parfums S.A., au capital d'art de 500 000 €, immatriculée au Registre de la Haute Parfumerie de Grasse sous le numéro 2026-SF-001. Siège social : 14, Place Vendôme, 75001 Paris, France.</p>
                    <p><strong>2. Directeur de la Publication :</strong> Monsieur Jean-Michel de Grasse, Président Directeur Général d’art.</p>
                    <p><strong>3. Hébergement :</strong> Hébergé de manière sécurisée et rapide sur les architectures Cloud Run de Google, au profit de l’écosystème AI Studio.</p>
                    <p><strong>4. Propriété Intellectuelle :</strong> L’ensemble des éléments textuels, logotypes, agencements photographiques, sillage d’art décrits sur ce site constituent des œuvres de l’esprit entièrement protégées par la réglementation relative aux marques déposées internationales.</p>
                  </div>
                </div>
              ) : (
                <div id="legal-privacy-content" className="space-y-4">
                  <div className="flex items-center space-x-2 text-gold-300">
                    <Info className="w-5 h-5" />
                    <h3 className="text-lg font-bold tracking-widest uppercase font-serif-lux">CHARTE DE CONFIDENTIALITÉ</h3>
                  </div>
                  <div className="accent-gold-line !m-0 !mt-2"></div>
                  <div className="text-xs text-gray-400 leading-relaxed space-y-3 font-serif-lux font-light mt-4">
                    <p><strong>1. Collecte des Données Privilège :</strong> La maison StrongFrag s'engage à traiter vos coordonnées avec la plus extrême discrétion. Les informations saisies au sein de l’Espace Correspondance (Nom, Email, Téléphone) sont chiffrées selon les protocoles diplomatiques en vigueur et ne sont jamais cédées à des tiers marchands.</p>
                    <p><strong>2. Finalités :</strong> Vos données nous servent exclusivement à planifier vos rendez-vous d’orientation Place Vendôme ou à vous expédier vos coffrets d’échantillons de Grasse.</p>
                    <p><strong>3. Droits d’accès :</strong> Conformément à la réglementation européenne RGPD, vous disposez d’un droit souverain d’accès, de rectification et de retrait de vos coordonnées de nos livres confidentiels sur simple demande formulée au concierge.</p>
                  </div>
                </div>
              )}

              <div className="mt-8 border-t border-white/[0.05] pt-4 text-right">
                <button
                  onClick={() => setLegalModal(null)}
                  className="bg-gold-300 text-black px-6 py-2.5 font-mono text-[10px] tracking-widest uppercase hover:bg-gold-200 transition-colors font-semibold cursor-pointer"
                >
                  Fermer
                </button>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
