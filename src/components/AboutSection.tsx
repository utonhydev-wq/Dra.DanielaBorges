import React from 'react';
import { SITE_DATA } from '../data/content';
import { SafeImage } from './SafeImage';
import { Quote } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5EFE8]/60 border-y border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo Column - 5 cols on lg */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle decorative framing */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-[#D5C6B7] -z-10 bg-white/40"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD5] bg-white">
                <SafeImage
                  src={SITE_DATA.aboutImageUrl}
                  alt="Dra. Daniela Borges - Fotografia de Apresentação"
                  className="w-full h-[380px] sm:h-[460px] md:h-[500px] object-cover object-top"
                  containerClassName="w-full"
                  fallbackText="Dra. Daniela Borges"
                />
              </div>
            </div>
          </div>

          {/* Text Column - 7 cols on lg */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              <span>Trajetória & Essência</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D2520] leading-[1.2]">
              {SITE_DATA.about.title}
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#3D332D] leading-relaxed font-normal">
              {SITE_DATA.about.paragraphs[0]}
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-[#4A3E38] leading-relaxed font-normal">
              {SITE_DATA.about.paragraphs[1]}
            </p>

            {/* Pull Quote Highlight */}
            <div className="my-6 p-6 sm:p-7 bg-white rounded-2xl border border-[#E8DFD5] shadow-xs relative">
              <Quote className="w-8 h-8 text-[#C4B09B]/40 absolute top-4 right-4" aria-hidden="true" />
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#2D2520] leading-snug">
                “{SITE_DATA.about.highlightQuote}”
              </blockquote>
            </div>

            {/* Paragraph 3 */}
            <p className="text-base sm:text-lg text-[#4A3E38] leading-relaxed font-normal">
              {SITE_DATA.about.paragraphs[2]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
