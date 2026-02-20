import React, { useState } from 'react';
import { signatureCollections } from '../data/mock';
import Lightbox from './Lightbox';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const openLightbox = (collection) => {
    setSelectedCollection(collection);
    setSelectedImage(collection.image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedCollection(null);
  };

  return (
    <section id="collections" className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-6">
            Signature Collections
          </h2>
          <div className="w-20 h-0.5 bg-stone-900 mb-6"></div>
          <p className="text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
            Explore our curated collection of bespoke marble portraits and mosaic reinterpretations, where Roman heritage meets contemporary design.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {signatureCollections.map((collection) => (
            <div 
              key={collection.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(collection)}
            >
              {/* Image Container - FIXED: Using object-contain to fit images properly */}
              <div className="relative aspect-square overflow-hidden bg-stone-100 mb-6 flex items-center justify-center p-4">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-all duration-500"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center gap-2">
                    <span className="text-sm font-light tracking-wide text-stone-900">View Details</span>
                    <ArrowRight size={18} className="text-stone-900" />
                  </div>
                </div>
              </div>

              {/* Collection Info */}
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-light text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-base font-light text-stone-600 leading-relaxed line-clamp-2">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedCollection && (
        <Lightbox 
          image={selectedImage}
          collection={selectedCollection}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Collections;
