import React from 'react';
import { SITE_DATA } from '../data/content';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 md:py-20 bg-[#F5EFE8]/70 border-t border-[#E8DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD5] shadow-xs hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 text-center relative overflow-hidden group">
          {/* Map Pin Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F7F3EE] text-[#8C6D58] mb-6 border border-[#E8DFD5] group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-7 h-7" />
          </div>

          <span className="block text-xs font-semibold uppercase tracking-widest text-[#8C6D58] mb-2">
            Localização
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2D2520] mb-4">
            {SITE_DATA.locationSection.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5A4E45] leading-relaxed max-w-xl mx-auto mb-8">
            {SITE_DATA.locationSection.text}
          </p>

          {/* Interactive Card / Action */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href={SITE_DATA.links.location}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-medium text-base bg-[#8C6D58] hover:bg-[#785C49] shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
              aria-label="Abrir localização no Google Maps"
            >
              <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>{SITE_DATA.locationSection.buttonLabel}</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
