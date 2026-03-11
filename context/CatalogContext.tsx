import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CatalogContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

export const CatalogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CatalogContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalogModal = () => {
  const context = useContext(CatalogContext);
  if (context === undefined) {
    throw new Error('useCatalogModal must be used within a CatalogProvider');
  }
  return context;
};