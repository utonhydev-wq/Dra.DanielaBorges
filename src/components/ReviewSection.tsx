import React from 'react';
import { SITE_DATA } from '../data/content';
import { Star, ArrowUpRight } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#E8DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD5] shadow-xs hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 text-center group">
          {/* Review Star Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F7F3EE] text-[#C29B38] mb-6 border border-[#E8DFD5] group-hover:scale-110 transition-transform duration-300">
            <Star className="w-7 h-7 fill-[#C29B38]" />
          </div>

          <span className="block text-xs font-semibold uppercase tracking-widest text-[#8C6D58] mb-2">
            Feedback & Avaliações
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#2D2520] mb-4">
            {SITE_DATA.reviewSection.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5A4E45] leading-relaxed max-w-2xl mx-auto mb-8">
            {SITE_DATA.reviewSection.text}
          </p>

          <a
            href={SITE_DATA.links.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-[#2D2520] font-medium text-base bg-[#F6F1EA] hover:bg-[#EFE8DE] border border-[#D5C6B7] shadow-xs hover:shadow transition-all active:scale-[0.98] group"
            aria-label="Avaliar Dra. Daniela Borges no Google"
          >
            {/* Minimal Google G SVG icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{SITE_DATA.reviewSection.buttonLabel}</span>
            <ArrowUpRight className="w-4 h-4 text-[#8C6D58] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
