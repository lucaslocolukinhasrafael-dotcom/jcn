import React from 'react';
import { Button } from './ui/Button';
import { Check, Download } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { useCatalogModal } from '../context/CatalogContext';

export const ContactForm: React.FC = () => {
  const { openModal } = useCatalogModal();

  const handleDownloadCatalog = () => {
    openModal();
  };

  const handleWhatsAppClick = () => {
    // Abre o link
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, gostaria de fazer um orçamento.`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-primary relative">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-white space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Pronto Para Oferecer Equipamentos que Seus Clientes Vão Recomendar?</h2>
            <p className="text-blue-100 text-lg">
              Baixe o catálogo, conheça nossa linha e descubra como a parceria JCN transforma seu negócio.
            </p>
            
            <h3 className="font-bold text-xl text-white">Benefícios Destacados:</h3>
            <ul className="space-y-4">
              {[
                "Catálogo completo gratuito",
                "Atendimento consultivo",
                "Orçamento personalizado sem compromisso",
                "Suporte em horário estendido",
                "Entrega ágil em SP e MG"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-1 rounded-full">
                    <Check className="w-5 h-5 text-secondary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
               <Button 
                 id="btn-contact-catalog"
                 variant="outline" 
                 onClick={handleDownloadCatalog} 
                 className="w-full sm:w-auto"
               >
                 <Download className="w-5 h-5 mr-2" />
                 Baixar Catálogo Agora
               </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-2xl text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Fale Com Nossa Equipe Comercial</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Solicite contato agora.
            </p>
            
            <Button 
              id="btn-contact-whatsapp"
              variant="whatsapp" 
              className="w-full text-xl py-5"
              onClick={handleWhatsAppClick}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-3">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Solicitar Contato via WhatsApp
            </Button>

            <p className="text-sm text-gray-500 mt-6">
              Respondemos em até 2 horas úteis.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};