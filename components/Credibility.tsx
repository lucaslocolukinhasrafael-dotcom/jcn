import React from 'react';

export const Credibility: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Parceiros Que Crescem Com a JCN</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Ao longo dos anos, construímos relacionamentos sólidos com centenas de lojistas e distribuidores em SP e MG.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Entregas no prazo", "Produtos duráveis", "Atendimento que resolve", "Parceria verdadeira"].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm font-bold text-primary border border-gray-200">
                    {item}
                </div>
            ))}
        </div>
        
        <p className="mt-12 text-xl font-bold text-secondary">Você pode ser o próximo parceiro de sucesso.</p>
      </div>
    </section>
  );
};