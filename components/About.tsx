import React from 'react';
import { Users, Target, TrendingUp, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative background number */}
      <div className="absolute top-0 right-0 text-[300px] font-bold text-gray-200/50 leading-none select-none -z-10 -mr-20">JCN</div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Fabricamos Equipamentos Pensando em Quem Usa Todo Dia
            </h2>
            <div className="prose text-gray-600 mb-8">
              <p className="mb-4 text-lg">
                A JCN nasceu do desafio de criar equipamentos com tecnologia real, não promessas. Cada produto passa por testes rigorosos porque vai trabalhar pesado em cozinhas profissionais.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Nosso Compromisso</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Users className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Parcerias de longo prazo</h4>
                  <p className="text-sm text-gray-600">Queremos crescer junto com você.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Target className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Cumprimos o que prometemos</h4>
                  <p className="text-sm text-gray-600">Prazos reais, produtos conforme especificado.</p>
                </div>
              </div>
               <div className="flex gap-4">
                <TrendingUp className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Melhoria contínua</h4>
                  <p className="text-sm text-gray-600">Ouvimos o mercado e aprimoramos constantemente.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Integridade total</h4>
                  <p className="text-sm text-gray-600">Transparência em cada negociação.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};