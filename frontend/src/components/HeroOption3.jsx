import React from 'react';
import { ChevronDown } from 'lucide-react';

// OPTION 3: Multi-Image Gallery Hero
const HeroOption3 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-stone-50">
      {/* Background Grid of Images */}
      <div className="absolute inset-0 z-0 grid grid-cols-3 gap-0 opacity-20">
        <div className="relative h-full overflow-hidden">
          <img src="/images/products/signature_1.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full overflow-hidden">
          <img src="/images/products/signature_3.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full overflow-hidden">
          <img src="/images/products/signature_4.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-50/95 via-stone-50/90 to-stone-50/95"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-stone-900 mb-4">
              MARBLELORE
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-stone-600">
              Bespoke Marble Portraits
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 py-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-stone-800">
              Stone Reimagined for Contemporary Spaces
            </h2>
            <p className="text-lg md:text-xl font-light text-stone-600 leading-relaxed">
              Mosaic reinterpretations inspired by Roman heritage and shaped by modern technology
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={() => scrollToSection('collections')}
              className="px-10 py-4 bg-stone-900 text-white hover:bg-stone-700 transition-all duration-300 text-base lg:text-lg font-light tracking-wide min-w-[220px]"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => scrollToSection('commission')}
              className="px-10 py-4 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 text-base lg:text-lg font-light tracking-wide min-w-[220px]"
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
        <ChevronDown size={40} className="text-stone-400" />
      </button>
    </section>
  );
};

export default HeroOption3;
