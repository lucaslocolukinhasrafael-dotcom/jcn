import React from 'react';
import { DIFFERENTIALS } from '../constants';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Muda Quando Você Revende JCN</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Diferenciais reais que impactam diretamente na sua lucratividade e reputação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <item.icon className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};