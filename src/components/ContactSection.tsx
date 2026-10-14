import React from 'react';
import { SITE_DATA } from '../data/content';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5] relative overflow-hidden">
      {/* Background glow with gentle animation */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-[#EFE5D8]/80 to-transparent -z-10 rounded-full blur-3xl pointer-events-none animate-subtle-pulse"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* WhatsApp Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] mb-6 shadow-sm animate-float-slow">
          <MessageCircle className="w-8 h-8 fill-[#25D366]" />
        </div>

        <span className="block text-xs font-semibold uppercase tracking-widest text-[#8C6D58] mb-2">
          Atendimento Direto
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D2520] mb-5">
          {SITE_DATA.contactSection.title}
        </h2>

        <p className="text-base sm:text-lg text-[#5A4E45] leading-relaxed max-w-xl mx-auto mb-10">
          {SITE_DATA.contactSection.text}
        </p>

        {/* Highlighted WhatsApp CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <a
            href={SITE_DATA.links.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3.5 px-9 py-5 rounded-2xl text-white font-semibold text-lg bg-[#25D366] hover:bg-[#20ba59] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0 active:scale-[0.98] group"
            aria-label="Abrir conversa no WhatsApp com Dra. Daniela Borges"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <span>{SITE_DATA.contactSection.buttonLabel}</span>
            <ArrowUpRight className="w-5 h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <p className="text-xs text-[#8C6D58] mt-4">
            Mensagem direta via WhatsApp oficial
          </p>
        </div>
      </div>
    </section>
  );
};
