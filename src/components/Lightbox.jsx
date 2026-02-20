import React, { useEffect } from 'react';
import { X, Mail } from 'lucide-react';

const Lightbox = ({ image, collection, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
        >
          <X size={28} className="text-white" />
        </button>

        {/* Content Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-h-full overflow-y-auto">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img 
              src={image}
              alt={collection.title}
              className="max-w-full max-h-[70vh] lg:max-h-[80vh] object-contain"
            />
          </div>

          {/* Details */}
          <div className="text-white space-y-6 lg:space-y-8 px-4 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide">
                {collection.title}
              </h2>
              <div className="w-16 h-0.5 bg-white/50"></div>
            </div>

            <p className="text-lg lg:text-xl font-light text-white/90 leading-relaxed">
              {collection.description}
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-sm font-light text-white/70 tracking-wide uppercase">
                Collection Details
              </p>
              <div className="space-y-3 text-base font-light text-white/80">
                <p>Category: Signature Collection</p>
                <p>Material: Premium Natural Marble</p>
                <p>Technique: Contemporary Mosaic Reinterpretation</p>
                <p>Availability: Custom Commission</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-white text-stone-900 hover:bg-stone-100 transition-all duration-300 flex items-center gap-3"
              >
                <Mail size={20} />
                <span className="text-base font-light tracking-wide">Inquire About This Piece</span>
              </button>
            </div>

            <p className="text-sm font-light text-white/60 italic pt-4">
              Each piece is crafted to order and can be customized in size, material selection, and design details to perfectly suit your architectural space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
