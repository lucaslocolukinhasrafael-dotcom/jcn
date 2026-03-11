import React from 'react';
import { FileText, Phone, FileCheck, Package, TrendingUp } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { icon: FileText, title: "1. Solicite o Catálogo", desc: "Baixe o catálogo completo com especificações técnicas." },
    { icon: Phone, title: "2. Entre em Contato", desc: "Fale via WhatsApp ou formulário. Entendemos sua necessidade e tiramos dúvidas." },
    { icon: FileCheck, title: "3. Receba sua Cotação", desc: "Orçamento personalizado. Condições claras, sem surpresas." },
    { icon: Package, title: "4. Faça seu Pedido", desc: "Processo simples. Acompanhamento em tempo real." },
    { icon: TrendingUp, title: "5. Receba e Revenda", desc: "Entrega ágil em SP e MG. Conte com nosso suporte sempre." }
  ];

  return (
    <section id="parceria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como Funciona a Parceria</h2>
          <p className="text-gray-600">Simples, Direto e Sem Complicação.</p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};