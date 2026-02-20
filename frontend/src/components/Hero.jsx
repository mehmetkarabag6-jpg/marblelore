import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/products/image1.png" 
          alt="Luxury Marble Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/60 to-stone-50/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Brand Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-widest text-stone-900 mb-4">
              MARBLELORE
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-stone-600">
              Bespoke Marble Portraits
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-stone-800 max-w-4xl mx-auto pt-8">
            Stone Reimagined for Contemporary Spaces
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Bespoke marble portraits and mosaic reinterpretations inspired by Roman heritage and shaped by modern technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button 
              onClick={() => scrollToSection('collections')}
              className="px-10 py-4 bg-stone-900 text-white text-base lg:text-lg font-light tracking-wide hover:bg-stone-700 transition-all duration-300 min-w-[220px]"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => scrollToSection('commission')}
              className="px-10 py-4 border-2 border-stone-900 text-stone-900 text-base lg:text-lg font-light tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 min-w-[220px]"
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

export default Hero;
