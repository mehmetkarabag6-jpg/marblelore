import React from 'react';
import { ChevronDown } from 'lucide-react';

// OPTION 1: Split Screen with Featured Marble Image
const HeroOption1 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Split Layout */}
      <div className="container mx-auto px-6 lg:px-12 h-full">
        <div className="grid lg:grid-cols-2 gap-0 h-full items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-white z-10">
            <div className="space-y-2">
              <p className="text-sm tracking-widest uppercase text-stone-300">Bespoke Marble Portraits</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                Stone Reimagined for Contemporary Spaces
              </h1>
            </div>

            <p className="text-lg lg:text-xl font-light text-stone-300 max-w-xl leading-relaxed">
              Mosaic reinterpretations inspired by Roman heritage and shaped by modern technology
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('collections')}
                className="px-8 py-4 bg-white text-stone-900 hover:bg-stone-100 transition-all duration-300 text-base font-light tracking-wide"
              >
                Explore Collection
              </button>
              <button 
                onClick={() => scrollToSection('commission')}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 text-base font-light tracking-wide"
              >
                Commission a Piece
              </button>
            </div>
          </div>

          {/* Right: Featured Image */}
          <div className="relative h-full hidden lg:flex items-center justify-end">
            <div className="relative w-full h-[80vh]">
              <img 
                src="/images/products/signature_1.png"
                alt="Featured Marble Artwork"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent"></div>
            </div>
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

export default HeroOption1;
