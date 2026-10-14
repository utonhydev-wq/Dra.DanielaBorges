import React from 'react';
import { SITE_DATA } from '../data/content';
import { SafeImage } from './SafeImage';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8DFD5] pt-14 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#E8DFD5]">
          {/* Logo & Brand Name */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-2 bg-white rounded-2xl border border-[#E8DFD5] shadow-2xs hover:shadow-xs transition-shadow">
              <SafeImage
                src={SITE_DATA.logoUrl}
                alt="Logo Dra. Daniela Borges"
                className="w-18 sm:w-20 h-auto object-contain rounded-xl"
                fallbackText="Dra. Daniela Borges"
              />
            </div>
            <div>
              <p className="font-serif text-xl font-medium tracking-tight text-[#2D2520]">
                {SITE_DATA.name}
              </p>
              <p className="text-xs text-[#8C6D58] mt-0.5">
                Presença Digital Oficial
              </p>
            </div>
          </div>

          {/* Quick External Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#6B5E55]">
            <a
              href={SITE_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D2520] transition-colors"
            >
              Instagram
            </a>
            <a
              href={SITE_DATA.links.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D2520] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={SITE_DATA.links.location}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D2520] transition-colors"
            >
              Localização
            </a>
            <a
              href={SITE_DATA.links.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D2520] transition-colors"
            >
              Avaliar no Google
            </a>
          </nav>
        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C6D58]">
          <p className="text-center sm:text-left">
            © {currentYear} Dra. Daniela Borges. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#8C6D58] hover:text-[#2D2520] transition-colors py-1 px-2 rounded-md hover:bg-white/50"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
