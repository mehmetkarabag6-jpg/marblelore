import React from 'react';
import { aboutText } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
                About MARBLELORE
              </h2>
              <div className="w-20 h-0.5 bg-stone-900"></div>
              <p className="text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
                {aboutText}
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="/images/products/image6.jpeg" 
                  alt="Marble Craftsmanship"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-stone-300 -z-10"></div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-light text-stone-900 tracking-wide">Roman Inspiration</h3>
              <p className="text-base font-light text-stone-600 leading-relaxed">
                Drawing from centuries of mosaic tradition and classical artistry
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-light text-stone-900 tracking-wide">Modern Technology</h3>
              <p className="text-base font-light text-stone-600 leading-relaxed">
                Precision craftsmanship enhanced by contemporary design tools
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-light text-stone-900 tracking-wide">Bespoke Artistry</h3>
              <p className="text-base font-light text-stone-600 leading-relaxed">
                Each piece uniquely tailored to contemporary architectural spaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
