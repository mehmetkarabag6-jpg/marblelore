import React from 'react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-stone-900 text-white py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-light tracking-widest">
              MARBLELORE
            </h3>
            <p className="text-sm font-light text-white/70 leading-relaxed">
              Bespoke marble portraits bridging Roman heritage with contemporary design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-wide uppercase text-white/50">
              Explore
            </h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-base font-light text-white/80 hover:text-white transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block text-base font-light text-white/80 hover:text-white transition-colors duration-300"
              >
                Signature Collections
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-base font-light text-white/80 hover:text-white transition-colors duration-300"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('commission')}
                className="block text-base font-light text-white/80 hover:text-white transition-colors duration-300"
              >
                Commission
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-wide uppercase text-white/50">
              Services
            </h4>
            <nav className="space-y-3 text-base font-light text-white/80">
              <p>Bespoke Portraits</p>
              <p>Custom Mosaics</p>
              <p>Architectural Panels</p>
              <p>Design Consultation</p>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-wide uppercase text-white/50">
              Contact
            </h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="block text-base font-light text-white/80 hover:text-white transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
              <a 
                href={contactInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-light text-white/80 hover:text-white transition-colors duration-300"
              >
                {contactInfo.instagram.handle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light text-white/60">
              © {currentYear} MARBLELORE. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-light text-white/60">
              <button className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
