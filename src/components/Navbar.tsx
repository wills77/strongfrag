import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Phone, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Histoire', id: 'histoire' },
    { label: 'Collections', id: 'collections' },
    { label: 'Notes Olfactives', id: 'notes' },
    { label: 'Exquise Qualité', id: 'qualite' },
    { label: 'Témoignages', id: 'temoignages' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-md py-4 border-b border-gold-300/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            id="brand-logo-container"
            onClick={() => handleItemClick('accueil')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold-300/20 blur-sm rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <Sparkles className="h-6 w-6 text-gold-300 relative z-10 transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-semibold tracking-[0.25em] text-white font-serif-lux transition-colors duration-300 group-hover:text-gold-200 uppercase">
                Strong<span className="text-gold-300 font-serif-lux">Frag</span>
              </span>
              <span className="text-[7px] tracking-[0.45em] text-gold-300/70 uppercase">
                Grasse - Paris
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div id="desktop-menu" className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative py-1 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                      isActive ? 'text-gold-300 font-medium' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-300"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Exclusive CTA */}
            <button
              id="header-cta"
              onClick={() => handleItemClick('contact')}
              className="flex items-center space-x-2 bg-gradient-to-r from-gold-800/60 to-gold-600/60 border border-gold-300/40 hover:from-gold-300 hover:to-gold-200 hover:text-black text-gold-100 text-[10px] uppercase tracking-widest font-semibold px-4 py-2 transition-all duration-500 rounded-none shimmer shadow-[0_0_15px_rgba(212,175,55,0.1)] cursor-pointer"
            >
              <Phone className="h-3 w-3" />
              <span>Privilège Concierge</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              id="concierge-pulse"
              onClick={() => handleItemClick('collections')}
              className="p-1.5 text-gold-300 relative border border-gold-300/30 rounded-none hover:bg-gold-300/10 cursor-pointer"
              title="Découvrir"
            >
              <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-gold-300 animate-ping"></span>
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-gray-300 hover:text-gold-300 hover:border-gold-300/40 border border-transparent transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-[#080808] border-b border-gold-300/15 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left px-3 py-2 text-xs tracking-widest uppercase transition-colors rounded-none ${
                      isActive
                        ? 'bg-gold-700/20 text-gold-300 border-l border-gold-300 font-medium'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-3">
                <button
                  id="mobile-concierge-cta"
                  onClick={() => handleItemClick('contact')}
                  className="w-full flex items-center justify-center space-x-2 bg-gold-300 text-black text-[11px] tracking-widest font-semibold py-3 font-mono cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>CONTACTER NOTRE CONCIERGE</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
