import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { COMPANY_INFO } from '../constants';
import { useCatalogModal } from '../context/CatalogContext';

export const Hero: React.FC = () => {
  const { openModal } = useCatalogModal();

  const handleDownloadCatalog = () => {
    openModal();
  };

  const handleWhatsAppClick = () => {
    // Abre o link
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, gostaria de fazer um orçamento.`, '_blank');
  };

  return (
    <section className="relative md:min-h-screen flex items-center pt-24 pb-6 md:pt-32 md:pb-20 bg-primary overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm font-medium border border-white/20 animate-float mb-4">
            <CheckCircle2 size={16} className="text-secondary" />
            <span>Fabricação Própria | Garantia Real | Suporte que Funciona</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Fogões Industriais que Seus Clientes <span className="text-secondary">Realmente Confiam</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            Revenda produtos JCN e entregue tranquilidade, durabilidade e a certeza de um bom investimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              id="btn-hero-catalog"
              className="text-lg px-8" 
              onClick={handleDownloadCatalog}
            >
              Baixar Catálogo Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              id="btn-hero-whatsapp"
              variant="whatsapp"
              onClick={handleWhatsAppClick}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Orçamento via WhatsApp
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-gray-300">
             {/* Additional trust signals if needed */}
          </div>
        </div>

        <div className="hidden md:flex relative h-full min-h-[500px] items-center justify-center">
           {/* Visual representation of kitchen equipment */}
           <div className="relative z-10 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-500 bg-white/5 backdrop-blur-sm">
             <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-0"></div>
             {/* PERFORMANCE FIX: Added fetchPriority, eager loading, and explicit sizes */}
             <img 
               src="https://i.imgur.com/FxcqCZy.png" 
               alt="Cozinha Profissional JCN" 
               className="w-full h-full object-cover relative z-10"
               loading="eager"
               fetchPriority="high"
               width="500"
               height="500"
             />
             <div className="absolute bottom-6 left-6 text-white pointer-events-none z-20">
                <p className="font-bold text-2xl drop-shadow-md">Alta Performance</p>
                <p className="drop-shadow-md">Para cozinhas exigentes</p>
             </div>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20 -z-10"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};