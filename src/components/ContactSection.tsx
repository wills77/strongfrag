import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Star, Sparkles, Clock } from 'lucide-react';
import { ContactForm } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultation Privée Senteur',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Reset form save for name and subject
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Consultation Privée Senteur',
        message: ''
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background ambient nodes */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gold-300/[0.012] rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-300/[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold-300 uppercase font-mono font-medium block mb-2">
            Service conciergerie privée
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif-lux tracking-wider text-white">
            Prendre Contact
          </h2>
          <div className="accent-gold-line"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Pour toute demande d’échantillons, création sur-mesure pour mariages et réceptions de prestige, ou rendez-vous privé dans l’un de nos salons de dégustation olfactive.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Interactive Boutique Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* 1. Coordonnées de prestige */}
            <div className="glass-panel p-6 sm:p-8 border border-gold-300/10">
              <h3 className="text-lg font-light font-serif-lux text-white tracking-widest uppercase mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-300" />
                Maison Forte Grasse - Paris
              </h3>
              
              <div className="space-y-6">
                
                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 border border-gold-300/20 bg-gold-300/5 text-gold-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">LIGNE CONCIERGE VIP</h4>
                    <p className="text-sm font-semibold text-white mt-1 font-mono hover:text-gold-300 transition-colors">
                      +33 (0)1 47 20 88 99
                    </p>
                    <span className="text-[10px] text-gray-500 block">Appel sécurisé haut-débit</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 border border-gold-300/20 bg-gold-300/5 text-gold-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">COURRIEL DE PRESTIGE</h4>
                    <p className="text-sm font-semibold text-white mt-1 font-serif-lux lowercase hover:text-gold-200 transition-colors">
                      contact@strongfrag-luxe.com
                    </p>
                    <span className="text-[10px] text-gray-500 block">Réponse assurée sous 3h ouvrées</span>
                  </div>
                </div>

                {/* Boutique Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 border border-gold-300/20 bg-gold-300/5 text-gold-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">SALON PLACE VENDÔME</h4>
                    <p className="text-sm text-white mt-1 font-serif-lux leading-relaxed">
                      14, Place Vendôme, <br />
                      75001 Paris, France
                    </p>
                    <span className="text-[10px] text-gray-500 block">Présentation uniquement sur rendez-vous confidentiel</span>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start space-x-4 border-t border-white/[0.06] pt-6">
                  <div className="p-2.5 border border-gold-300/20 bg-gold-300/5 text-gold-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">HORAIRES DES SALONS</h4>
                    <p className="text-xs text-white mt-1 font-light font-serif-lux leading-relaxed">
                      Lundi ou Samedi : <strong className="text-gold-300 font-semibold font-mono">10:00 — 19:30</strong> <br />
                      Dimanche : <strong className="text-gold-300 font-semibold font-mono">14:00 — 18:00</strong> (Prestige d’or)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Interactive simulated map mockup requested */}
            <div id="simulated-map" className="glass-panel p-6 border-gold-300/10 flex-grow relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                
                {/* Map Grid graphic vectors */}
                <div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                
                {/* Simulated streets lines coordinates lines */}
                <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gold-300/20 rotate-12"></div>
                <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gold-300/15 -rotate-6"></div>
                <div className="absolute left-[40%] top-0 w-[1px] h-full bg-gold-300/20"></div>
                <div className="absolute left-[70%] top-0 w-[1px] h-full bg-gold-300/15"></div>

                {/* Simulated luxury River Seine or Landmark */}
                <div className="absolute bottom-[10%] left-0 w-full h-12 bg-gold-900/10 backdrop-blur-sm -rotate-2 border-t border-b border-gold-300/10 flex items-center justify-center">
                  <span className="text-[8px] font-mono tracking-[0.25em] text-gold-450/60 uppercase">SEINE - PARIS</span>
                </div>

                {/* Pulsing GPS locator pinpoint button */}
                <div className="absolute top-[45%] left-[42%] translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute block h-10 w-10 rounded-full bg-gold-300/30 animate-ping -top-3 -left-3"></span>
                    <MapPin className="w-5 h-5 text-gold-300 drop-shadow-[0_0_15px_#D4AF37]" />
                  </div>
                  <span className="mt-1 bg-black/90 text-[8px] font-mono font-bold tracking-widest text-gold-300 px-2 py-0.5 border border-gold-400/40 uppercase shadow-md whitespace-nowrap">
                    StrongFrag Vendôme
                  </span>
                </div>

                {/* Interactive map widget banner */}
                <div className="absolute inset-x-0 top-0 p-3 bg-black/85 backdrop-blur-md border-b border-white/[0.04] flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">GÉOLOCALISATION PRIVILÈGE</span>
                  <span className="text-[8px] font-mono text-gold-300 font-bold uppercase">&#9679; GPS ACTIF</span>
                </div>

                {/* Interactive map CTA overlays */}
                <div className="absolute inset-x-3 bottom-3 flex gap-2">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center bg-black/90 hover:bg-gold-300 hover:text-black border border-gold-300/30 hover:border-gold-300 text-[9px] font-mono font-semibold tracking-widest uppercase p-2 transition-colors"
                  >
                    Itinéraire GPS
                  </a>
                  <button 
                    onClick={() => alert("Réservations Concierge : Veuillez utiliser le formulaire de courriel de prestige à droite afin de planifier votre accueil privé Place Vendôme.")}
                    className="flex-1 bg-gold-300/10 hover:bg-gold-300/20 border border-gold-300/40 text-gold-300 text-[9px] font-mono font-semibold tracking-widest uppercase p-2 transition-colors cursor-pointer"
                  >
                    Prendre R.D.V
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 border border-gold-300/15 h-full relative">
              
              <div className="absolute top-0 right-12 w-20 h-1 bg-gold-300"></div>

              {/* Form header */}
              <div className="mb-8">
                <span className="text-[9px] tracking-[0.25em] text-gold-300 uppercase font-mono block">Formulaire de prestige</span>
                <h3 className="text-2xl font-light font-serif-lux text-white tracking-widest mt-1">Espace Correspondance</h3>
                <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                  Remplissez consciencieusement vos coordonnées. Nos intendants s'engagent à vous donner suite avec la déférence requise par votre requête.
                </p>
              </div>

              {/* Success Feedback layout */}
              {success ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 px-4 h-[350px]">
                  <div className="p-4 bg-gold-300/10 border border-gold-300/30 rounded-full animate-pulse-slow">
                    <CheckCircle2 className="w-12 h-12 text-gold-300" />
                  </div>
                  <h4 className="text-xl font-serif-lux font-light text-white tracking-widest">
                    Demande Enregistrée avec Succès
                  </h4>
                  <p className="text-xs text-gray-400 font-light max-w-md leading-relaxed font-serif-lux">
                    Votre message a été transmis à la direction du concierge de <strong className="text-gold-200">StrongFrag Paris</strong>. Un e-mail d'accusé de réception vous est adressé instantanément. Nous vous appellerons confidentiellement pour organiser le service s'il y a lieu.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-black transition-colors px-6 py-2.5 text-[10px] tracking-widest uppercase font-mono cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form id="correspondance-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Nom Complet */}
                    <div>
                      <label htmlFor="name" className="block text-[10px] tracking-widest uppercase text-gray-400 font-semibold mb-2">
                        NOM COMPLET *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: Éléonore de Valois"
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-gold-300 focus:outline-none p-3 text-xs text-white uppercase tracking-wider transition-colors placeholder-gray-600 rounded-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[10px] tracking-widest uppercase text-gray-400 font-semibold mb-2">
                        ADRESSE EMAIL D'CONTACT *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: eleonore@domaine.com"
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-gold-300 focus:outline-none p-3 text-xs text-white transition-colors placeholder-gray-600 rounded-none"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Téléphone */}
                    <div>
                      <label htmlFor="phone" className="block text-[10px] tracking-widest uppercase text-gray-400 font-semibold mb-2">
                        TÉLÉPHONE MOBILE (Sécurisé)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: +33 6 12 34 56 78"
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-gold-300 focus:outline-none p-3 text-xs text-white font-mono transition-colors placeholder-gray-600 rounded-none"
                      />
                    </div>

                    {/* Objet / Sujet */}
                    <div>
                      <label htmlFor="subject" className="block text-[10px] tracking-widest uppercase text-gray-400 font-semibold mb-2">
                        SUJET DE VOTRE VISITE
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-white/10 focus:border-gold-300 focus:outline-none p-3 text-xs text-white uppercase tracking-wider transition-colors rounded-none"
                      >
                        <option value="Consultation Privée Senteur">Consultation Privée Senteur</option>
                        <option value="Commande Spéciale Coffrets">Commande Spéciale Coffrets</option>
                        <option value="Échantillonnage et Découverte">Échantillonnage de Prestige</option>
                        <option value="Mariage & Célébration Sur Mesure">Création Événementielle</option>
                        <option value="Autre demande">Requête Spécifique</option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[10px] tracking-widest uppercase text-gray-400 font-semibold mb-2">
                      VOTRE DISCOURS CONFIANT *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Décrivez vos affinités aromatiques préférées (Oud, Rose, Ambre, Cuir...) ou le motif de votre consultation privée..."
                      className="w-full bg-white/[0.02] border border-white/10 focus:border-gold-300 focus:outline-none p-3 text-xs text-white leading-relaxed font-serif-lux transition-colors placeholder-gray-600 rounded-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="correspondance-submit-btn"
                      disabled={isSubmitting}
                      className="w-full bg-gold-300 hover:bg-gold-200 text-[#050505] p-4 text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-3 transition-colors shadow-[0_4px_20px_rgba(212,175,55,0.15)] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-[#050505] border-t-transparent rounded-full animate-spin"></div>
                          <span>Transmission diplomatique...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 shrink-0" />
                          <span>SOUMETTRE À LA CONCIERGERIE</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
