import React, { useState } from 'react';
import { massProducedProducts } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-6">
            Mass-Produced Collections
          </h2>
          <div className="w-20 h-0.5 bg-stone-900 mb-6"></div>
          <p className="text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
            Scalable mosaic designs and sculpted marble shapes for interior and architectural projects. Our mass-production collections include both intricate mosaics and refined marble elements suitable for contemporary spaces.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {massProducedProducts.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              {/* Product Image - FIXED: Using object-contain to fit images properly */}
              <div className="relative aspect-square overflow-hidden bg-stone-50 mb-4 flex items-center justify-center p-4">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-all duration-500"></div>
                
                {/* Hover Icon */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white p-2">
                    <ArrowRight size={20} className="text-stone-900" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-base lg:text-lg font-light text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm font-light text-stone-600 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeProductModal}
        >
          <div 
            className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 transition-colors duration-300"
            >
              <span className="text-2xl text-stone-900">×</span>
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image - FIXED: Using object-contain */}
              <div className="aspect-square bg-stone-50 flex items-center justify-center p-8">
                <img 
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-8 lg:p-12 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-stone-900">
                    {selectedProduct.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-stone-900"></div>
                </div>

                <p className="text-base lg:text-lg font-light text-stone-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="space-y-3 pt-4">
                  <p className="text-sm font-light text-stone-500 tracking-wide uppercase">
                    Product Specifications
                  </p>
                  <div className="space-y-2 text-sm font-light text-stone-600">
                    <p>Material: Natural Marble & Mosaic</p>
                    <p>Finish: Polished / Honed</p>
                    <p>Application: Interior Walls, Feature Panels</p>
                    <p>Customization: Size and pattern variations available</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    closeProductModal();
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 300);
                  }}
                  className="w-full mt-8 px-8 py-4 bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span className="text-base font-light tracking-wide">Request Information</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
