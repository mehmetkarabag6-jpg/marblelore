import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/images/logo.png" 
              alt="MARBLELORE" 
              className="h-14 lg:h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('collections')}
              className="text-sm lg:text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-sm lg:text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('commission')}
              className="text-sm lg:text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              Commission
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-stone-900 text-white text-sm lg:text-base font-light tracking-wide hover:bg-stone-700 transition-all duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-900 hover:text-stone-600 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-stone-200 bg-white">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('collections')}
              className="block w-full text-left py-2 text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left py-2 text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('commission')}
              className="block w-full text-left py-2 text-base font-light tracking-wide text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              Request a Quote
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-6 py-3 bg-stone-900 text-white text-base font-light tracking-wide hover:bg-stone-700 transition-all duration-300"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
