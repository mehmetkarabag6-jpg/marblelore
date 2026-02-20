import React from 'react';
import { ChevronDown } from 'lucide-react';

// OPTION 2: Full Background Image with Overlay
const HeroOption2 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Marble Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/products/signature_2.png" 
          alt="Luxury Marble Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/70"></div>
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-sm md:text-base tracking-widest uppercase text-white/90 font-light">
              MARBLELORE • Bespoke Marble Portraits
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide text-white leading-tight">
              Stone Reimagined for Contemporary Spaces
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
            Mosaic reinterpretations inspired by Roman heritage and shaped by modern technology
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button 
              onClick={() => scrollToSection('collections')}
              className="px-10 py-4 bg-white text-stone-900 hover:bg-stone-100 transition-all duration-300 text-base lg:text-lg font-light tracking-wide min-w-[220px] shadow-lg"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => scrollToSection('commission')}
              className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 text-base lg:text-lg font-light tracking-wide min-w-[220px]"
            >
              Commission a Piece
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown size={40} className="text-white" />
      </button>
    </section>
  );
};

export default HeroOption2;
