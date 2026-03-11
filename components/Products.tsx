import React from 'react';
import { PRODUCTS } from '../constants';
import { Button } from './ui/Button';
import { Download, ChevronRight } from 'lucide-react';
import { useCatalogModal } from '../context/CatalogContext';

export const Products: React.FC = () => {
  const { openModal } = useCatalogModal();

  const handleDownloadCatalog = () => {
    openModal();
  };

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Equipamentos Profissionais Para Toda Cozinha Comercial</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Do food truck à cozinha industrial. Linha completa para você atender qualquer perfil de cliente.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-surface">
              <div className="grid sm:grid-cols-2 h-full">
                <div className="relative h-64 sm:h-auto overflow-hidden bg-white flex items-center justify-center p-4">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="400"
                    />
                </div>
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{product.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                        <div className="mb-6">
                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Ideal para:</p>
                            <ul className="space-y-1">
                                {product.features.map((feat, i) => (
                                    <li key={i} className="text-xs font-semibold text-gray-500 flex items-center">
                                        <ChevronRight size={12} className="text-secondary mr-1" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Button 
                        id={`btn-product-catalog-${product.id}`}
                        variant="primary" 
                        fullWidth 
                        className="text-sm" 
                        onClick={handleDownloadCatalog}
                    >
                        Ver Modelos no Catálogo
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Products List */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12 text-center border border-blue-100">
            <h3 className="font-bold text-xl text-primary mb-4">OUTRAS LINHAS DISPONÍVEIS</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {['Engenho', 'Banquetas', 'Picadores de Legumes', 'Lança Chamas', 'Bifeteiras', 'Cabideiro', 'Tacho Fritador'].map((item) => (
                    <span key={item} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                        {item}
                    </span>
                ))}
            </div>
        </div>

        {/* Catalog CTA */}
        <div id="catalogo" className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Baixe o Catálogo Completo (PDF Gratuito)</h3>
                <Button 
                    id="btn-products-cta-catalog"
                    className="text-lg px-8 py-4 shadow-xl shadow-orange-900/20" 
                    onClick={handleDownloadCatalog}
                >
                    <Download className="mr-2" />
                    Baixar Catálogo
                </Button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
      </div>
    </section>
  );
};