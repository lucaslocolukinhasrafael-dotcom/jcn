import React from 'react';
import { MapPin, Calendar, Truck } from 'lucide-react';

export const DeliveryInfo: React.FC = () => {
  return (
    <section id="entrega" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Informações de Entrega</h2>
            <p className="text-gray-600 text-lg">Logística Clara e Transparente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary">
                    <Truck size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Como Funciona</h4>
                <p className="text-sm text-gray-600">Entregas de segunda a sexta, 07:00 às 18:00. Prazo conta após confirmação de pagamento, em dias úteis.</p>
             </div>

             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary">
                    <MapPin size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Área de Cobertura</h4>
                <p className="text-sm text-gray-600"><strong>SP e MG</strong><br/>Consulte prazos para sua cidade.</p>
             </div>

             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary">
                    <Calendar size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Importante Saber</h4>
                <ul className="text-sm text-gray-600 text-left list-disc list-inside space-y-1">
                    <li>Até 3 tentativas de entrega</li>
                    <li>Necessário pessoa autorizada</li>
                    <li>E-mail automático em cada etapa</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};