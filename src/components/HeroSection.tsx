import React from 'react';
import { SITE_DATA } from '../data/content';
import { SafeImage } from './SafeImage';
import { Instagram, MessageCircle, MapPin, ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle organic background accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#F2EAE0]/70 via-[#FAF7F2]/40 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-70"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Official Logo */}
        <div className="flex justify-center mb-8">
          <div className="p-2 bg-white rounded-2xl shadow-sm border border-[#E8DFD5] inline-block transition-transform hover:scale-[1.02] duration-300">
            <SafeImage
              src={SITE_DATA.logoUrl}
              alt="Logo Oficial Dra. Daniela Borges"
              className="w-32 sm:w-40 md:w-44 h-auto object-contain rounded-xl"
              fallbackText="Dra. Daniela Borges"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#2D2520] mb-5 leading-[1.15]">
          {SITE_DATA.hero.title}
        </h1>

        {/* Presentation Phrase */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-[26px] text-[#4A3E38] max-w-2xl mx-auto mb-4 leading-relaxed font-normal">
          “{SITE_DATA.hero.presentation}”
        </p>

        {/* Complementary Phrase */}
        <p className="text-sm sm:text-base text-[#6B5E55] max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          {SITE_DATA.hero.complementary}
        </p>

        {/* 3 Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-xl mx-auto mb-12">
          {/* WhatsApp - Highlighted button */}
          <a
            href={SITE_DATA.links.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 sm:order-2 flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold text-sm sm:text-base tracking-wide bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg active:scale-[0.98] transition-all group"
            aria-label="Conversar pelo WhatsApp com Dra. Daniela Borges"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>

          {/* Instagram Button */}
          <a
            href={SITE_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 sm:order-1 flex-1 inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-[#2D2520] font-medium text-sm sm:text-base bg-white hover:bg-[#F7F3EE] border border-[#E8DFD5] hover:border-[#D5C6B7] shadow-sm hover:shadow transition-all group active:scale-[0.98]"
            aria-label="Acessar o perfil de Dra. Daniela Borges no Instagram"
          >
            <div className="w-7 h-7 rounded-full bg-[#FAF3F0] flex items-center justify-center text-[#C13584] group-hover:scale-110 transition-transform">
              <Instagram className="w-4 h-4" />
            </div>
            <span className="whitespace-nowrap">Instagram</span>
          </a>

          {/* Minha Localização Button */}
          <a
            href={SITE_DATA.links.location}
            target="_blank"
            rel="noopener noreferrer"
            className="order-3 flex-1 inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-[#2D2520] font-medium text-sm sm:text-base bg-white hover:bg-[#F7F3EE] border border-[#E8DFD5] hover:border-[#D5C6B7] shadow-sm hover:shadow transition-all group active:scale-[0.98]"
            aria-label="Ver localização da Dra. Daniela Borges no Google Maps"
          >
            <div className="w-7 h-7 rounded-full bg-[#F3ECE4] flex items-center justify-center text-[#8C6D58] group-hover:scale-110 transition-transform">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="whitespace-nowrap">Minha localização</span>
          </a>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="flex justify-center">
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#8C6D58] hover:text-[#4A3E38] transition-colors py-2 px-3 rounded-full hover:bg-white/60"
            aria-label="Ir para a história da Dra. Daniela Borges"
          >
            <span>Conheça a história</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
