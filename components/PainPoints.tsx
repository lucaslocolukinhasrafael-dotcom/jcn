import React from 'react';
import { AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sabemos Como é o Dia a Dia de Quem Revende Equipamentos Profissionais
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: AlertTriangle,
              title: "O Cliente Insatisfeito Liga",
              text: "Equipamento com defeito, cliente parado, e quem resolve? Você. Se o fornecedor não dá suporte, o problema vira seu."
            },
            {
              icon: TrendingUp,
              title: "Você Precisa de Parceiros Confiáveis",
              text: "Para construir reputação, cada venda precisa ser um acerto. Isso exige fornecedores à altura."
            },
            {
              icon: DollarSign,
              title: "Margens Justas e Produtos que Vendem",
              text: "Você precisa de produtos com qualidade real, que justifiquem o valor e vendam pelo benefício, não só pelo preço."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xl font-bold text-primary mb-2">É por isso que a JCN existe.</p>
        </div>
      </div>
    </section>
  );
};