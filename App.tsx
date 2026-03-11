import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { FutureVision } from './components/FutureVision';
import { Products } from './components/Products';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { DeliveryInfo } from './components/DeliveryInfo';
import { Credibility } from './components/Credibility';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ImageCarousel } from './components/ImageCarousel';
import { CatalogProvider } from './context/CatalogContext';
import { LeadModal } from './components/LeadModal';

function App() {
  return (
    <CatalogProvider>
      <div className="antialiased text-gray-800 bg-white">
        <Header />
        
        <main>
          <Hero />
          <ImageCarousel />
          <PainPoints />
          <About />
          <Differentials />
          <FutureVision />
          <Products />
          <Process />
          <FAQ />
          <DeliveryInfo />
          <Credibility />
          <ContactForm />
        </main>

        <Footer />
        <WhatsAppButton />
        <LeadModal />
      </div>
    </CatalogProvider>
  );
}

export default App;