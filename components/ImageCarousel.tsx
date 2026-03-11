import React from 'react';
import { CAROUSEL_IMAGES } from '../constants';

export const ImageCarousel: React.FC = () => {
  // Duplicamos o array para garantir o loop infinito sem buracos
  const marqueeImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <section className="w-full bg-white py-6 md:py-12 overflow-hidden relative select-none">
      
      {/* Gradient Overlays para suavizar a entrada/saída nas bordas */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

      {/* Container do Trilho */}
      <div className="relative w-full flex overflow-hidden pointer-events-none">
         {/* Trilho Animado */}
         <div className="flex animate-scroll-fast md:animate-scroll-right w-max min-w-full items-center">
            {marqueeImages.map((src, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center mx-4 md:mx-6 flex-shrink-0"
              >
                <img 
                  src={src} 
                  alt={`Produto JCN ${index}`} 
                  className="h-24 md:h-32 w-auto object-contain drop-shadow-sm transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width="128"
                  height="128"
                />
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};