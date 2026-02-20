import React, { useState } from 'react';
import HeroOption1 from './HeroOption1';
import HeroOption2 from './HeroOption2';
import HeroOption3 from './HeroOption3';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HeroShowcase = () => {
  const [currentOption, setCurrentOption] = useState(1);

  const options = [
    { id: 1, name: 'Option 1: Split Screen with Featured Artwork', component: HeroOption1 },
    { id: 2, name: 'Option 2: Full Background with Dark Overlay', component: HeroOption2 },
    { id: 3, name: 'Option 3: Multi-Image Gallery Background', component: HeroOption3 }
  ];

  const CurrentHero = options[currentOption - 1].component;

  return (
    <div className="relative">
      {/* Hero Display */}
      <CurrentHero />

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md shadow-lg px-6 py-4 rounded-full">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setCurrentOption(prev => prev === 1 ? 3 : prev - 1)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-300"
          >
            <ArrowLeft size={24} className="text-stone-900" />
          </button>
          
          <div className="text-center min-w-[280px]">
            <p className="text-sm font-light text-stone-900">{options[currentOption - 1].name}</p>
            <div className="flex gap-2 justify-center mt-2">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setCurrentOption(opt.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentOption === opt.id ? 'bg-stone-900 w-8' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentOption(prev => prev === 3 ? 1 : prev + 1)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-300"
          >
            <ArrowRight size={24} className="text-stone-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
