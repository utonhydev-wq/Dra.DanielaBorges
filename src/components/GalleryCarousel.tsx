import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SITE_DATA, GalleryItem } from '../data/content';
import { SafeImage } from './SafeImage';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export const GalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  // Touch tracking for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const images = SITE_DATA.gallery;
  const total = images.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Gentle auto-transition every 6s when not hovering or in lightbox
  useEffect(() => {
    if (isHovered || lightboxOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, lightboxOpen, handleNext]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleLightboxPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleLightboxNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Touch handlers for carousel swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') handleLightboxPrev();
        if (e.key === 'ArrowRight') handleLightboxNext();
      } else {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, handleLightboxPrev, handleLightboxNext, handlePrev, handleNext]);

  return (
    <section id="galeria" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58] block mb-2">
            Momentos & Registros
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D2520] mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E55]">
            Clique nas imagens para ampliar e navegue pelas publicações e momentos da Dra. Daniela Borges.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative bg-white rounded-3xl p-3 sm:p-5 border border-[#E8DFD5] shadow-md transition-shadow duration-300 hover:shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Visual Display */}
          <div
            className="relative overflow-hidden rounded-2xl bg-[#EDE5DA] aspect-[4/3] sm:aspect-[16/10] max-h-[540px] cursor-pointer group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => openLightbox(currentIndex)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') openLightbox(currentIndex);
            }}
            aria-label={`Ver foto ${currentIndex + 1} ampliada`}
          >
            {images.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isCurrent ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                  aria-hidden={!isCurrent}
                >
                  <SafeImage
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover sm:object-contain bg-[#1F1915]/5"
                    containerClassName="w-full h-full flex items-center justify-center"
                    fallbackText={item.alt}
                  />

                  {/* Gradient Overlay for Hover Action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 sm:p-6 text-white">
                    <p className="text-xs sm:text-sm font-medium drop-shadow-sm line-clamp-1">{item.caption}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between mt-4 px-2 sm:px-4">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 sm:p-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#EFE8DE] border border-[#E8DFD5] text-[#2D2520] transition-colors active:scale-95 flex items-center justify-center"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Position Indicators & Counter */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono font-medium text-[#8C6D58] tabular-nums">
                {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-6 bg-[#8C6D58]' : 'w-2 bg-[#D5C6B7] hover:bg-[#A89078]'
                    }`}
                    aria-label={`Ir para a imagem ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="p-2 sm:p-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#EFE8DE] border border-[#E8DFD5] text-[#2D2520] transition-colors active:scale-95 flex items-center justify-center"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail preview strip */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-4 pt-4 border-t border-[#E8DFD5]/70">
            {images.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  idx === currentIndex
                    ? 'border-[#8C6D58] ring-2 ring-[#8C6D58]/30 scale-[1.02]'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`Selecionar foto ${idx + 1}`}
              >
                <SafeImage
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  fallbackText={`${idx + 1}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem em tela cheia"
        >
          {/* Top Bar inside modal */}
          <div className="flex items-center justify-between text-white z-10 w-full max-w-6xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="text-sm font-medium">
              <span className="text-white/70">Foto</span> {lightboxIndex + 1} de {total}
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fechar visualizador"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image with arrows */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev arrow in modal */}
            <button
              type="button"
              onClick={handleLightboxPrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Modal Image */}
            <div className="max-h-[75vh] max-w-full flex items-center justify-center">
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next arrow in modal */}
            <button
              type="button"
              onClick={handleLightboxNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption footer */}
          <div className="text-center text-white/80 text-sm max-w-md mx-auto py-2 z-10" onClick={(e) => e.stopPropagation()}>
            <p>{images[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};
