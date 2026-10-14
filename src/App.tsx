import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GalleryCarousel } from './components/GalleryCarousel';
import { InstagramSection } from './components/InstagramSection';
import { ReviewSection } from './components/ReviewSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2520] flex flex-col font-sans selection:bg-[#E2D5C8] selection:text-[#1A1614] overflow-x-hidden">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 1: Apresentação Principal */}
        <HeroSection />

        {/* Section 2: Quem é a Dra. Daniela Borges? */}
        <AboutSection />

        {/* Section 3: Galeria de Fotos e Carrossel */}
        <GalleryCarousel />

        {/* Section 4: Conheça mais pelo Instagram */}
        <InstagramSection />

        {/* Section 5: Avalie no Google */}
        <ReviewSection />

        {/* Section 6: Localização */}
        <LocationSection />

        {/* Section 7: Contato pelo WhatsApp */}
        <ContactSection />
      </main>

      {/* Section 8: Rodapé */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
