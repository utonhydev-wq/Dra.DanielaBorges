import React from 'react';
import { SITE_DATA } from '../data/content';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-16 md:py-20 bg-[#F5EFE8]/70 border-t border-[#E8DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD5] shadow-xs hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 text-center relative overflow-hidden group">
          {/* Subtle decorative radial tint */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FBECEB]/80 via-transparent to-transparent -z-0 rounded-full blur-2xl pointer-events-none group-hover:scale-105 transition-transform duration-700"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Instagram Icon Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FD1D1D]/15 via-[#E1306C]/15 to-[#405DE6]/15 text-[#C13584] mb-6 shadow-xs">
              <Instagram className="w-7 h-7" />
            </div>

            <span className="block text-xs font-semibold uppercase tracking-widest text-[#8C6D58] mb-2">
              Instagram Oficial
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2D2520] mb-4">
              {SITE_DATA.instagramSection.title}
            </h2>

            <p className="text-base sm:text-lg text-[#5A4E45] leading-relaxed mb-8">
              {SITE_DATA.instagramSection.text}
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-medium text-base bg-gradient-to-r from-[#C13584] to-[#E1306C] hover:from-[#B02874] hover:to-[#CF285E] shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
                aria-label="Acessar o perfil oficial da Dra. Daniela Borges no Instagram"
              >
                <span>{SITE_DATA.instagramSection.buttonLabel}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-sm font-medium text-[#8C6D58]">
                {SITE_DATA.links.instagramHandle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
