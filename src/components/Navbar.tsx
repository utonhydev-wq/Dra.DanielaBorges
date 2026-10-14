import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#inicio"
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#2D2520] hover:text-[#8C6D58] transition-colors whitespace-nowrap shrink-0"
        >
          {SITE_DATA.name}
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B5E55]">
          <a href="#inicio" className="hover:text-[#2D2520] transition-colors whitespace-nowrap shrink-0">
            Início
          </a>
          <a href="#sobre" className="hover:text-[#2D2520] transition-colors whitespace-nowrap shrink-0">
            Sobre
          </a>
          <a href="#galeria" className="hover:text-[#2D2520] transition-colors whitespace-nowrap shrink-0">
            Galeria
          </a>
          <a href="#localizacao" className="hover:text-[#2D2520] transition-colors whitespace-nowrap shrink-0">
            Localização
          </a>
          <a href="#contato" className="hover:text-[#2D2520] transition-colors whitespace-nowrap shrink-0">
            Contato
          </a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={SITE_DATA.links.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            aria-label="Falar com Dra. Daniela Borges no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#6B5E55] hover:text-[#2D2520] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD5] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2D2520] hover:bg-[#EFE8DE] rounded-md transition-colors"
          >
            Início
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2D2520] hover:bg-[#EFE8DE] rounded-md transition-colors"
          >
            Sobre
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2D2520] hover:bg-[#EFE8DE] rounded-md transition-colors"
          >
            Galeria
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2D2520] hover:bg-[#EFE8DE] rounded-md transition-colors"
          >
            Localização
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2D2520] hover:bg-[#EFE8DE] rounded-md transition-colors"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
};
