import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { useCatalogModal } from '../context/CatalogContext';

export const Footer: React.FC = () => {
  const { openModal } = useCatalogModal();

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCatalogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openModal();
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6">JCN Gourmet</h5>
            <p className="mb-4 text-sm">{COMPANY_INFO.name}</p>
            <p className="text-sm mb-4">CNPJ: {COMPANY_INFO.cnpj}</p>
            <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="mt-1 shrink-0" />
                <p>{COMPANY_INFO.address}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6">Atendimento</h5>
            <p className="mb-4 text-sm text-secondary">Segunda a Sexta: 07:00 às 18:00</p>
            <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={16} /> {COMPANY_INFO.phone}
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} /> {COMPANY_INFO.email}
                </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6">Links Rápidos</h5>
            <ul className="space-y-3 text-sm">
                <li><a href="#" id="link-footer-catalog" onClick={handleCatalogClick} className="hover:text-secondary transition-colors">Catálogo Completo</a></li>
                <li><a href="#contato" onClick={(e) => handleFooterLinkClick(e, 'contato')} className="hover:text-secondary transition-colors">Solicitar Orçamento</a></li>
                <li><a href="#entrega" onClick={(e) => handleFooterLinkClick(e, 'entrega')} className="hover:text-secondary transition-colors">Política de Entrega</a></li>
                <li><a href="#contato" onClick={(e) => handleFooterLinkClick(e, 'contato')} className="hover:text-secondary transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Social & Values */}
          <div>
             <h5 className="text-white font-bold text-lg mb-6">Redes Sociais</h5>
             <div className="flex gap-4 mb-8">
                <a 
                  href="https://www.facebook.com/p/JCN-Gourmet-61563590646495/?locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-white transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/jcn.gourmet/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-white transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  id="link-footer-whatsapp"
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, gostaria de fazer um orçamento.`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
             </div>
             <h5 className="text-white font-bold text-sm mb-2">Valores</h5>
             <p className="text-xs italic">Integridade • Comprometimento • Inovação • Resultados</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
            © {new Date().getFullYear()} JCN Gourmet - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};