import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3"
      aria-label="Atendimento rápido por WhatsApp"
    >
      {/* Tooltip on desktop */}
      <span
        className={`hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-white text-[#2D2520] text-xs font-medium shadow-md border border-[#E8DFD5] transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Fale comigo no WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={SITE_DATA.links.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Abrir conversa no WhatsApp com Dra. Daniela Borges"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-6 transition-transform" />
      </a>
    </aside>
  );
};
