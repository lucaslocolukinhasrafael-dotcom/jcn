import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';
import { useCatalogModal } from '../context/CatalogContext';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useCatalogModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleDownloadCatalog = () => {
    openModal();
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className={`font-black text-2xl tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
          JCN <span className="font-light">GOURMET</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-semibold hover:text-secondary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            id="btn-header-catalog"
            variant={isScrolled ? "primary" : "secondary"} 
            className="px-4 py-2 text-sm"
            onClick={handleDownloadCatalog}
          >
            <FileText className="w-4 h-4 mr-2" />
            Baixar Catálogo
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#01308b' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-primary font-medium py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <Button 
              id="btn-header-mobile-budget"
              fullWidth 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth'});
              }}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};