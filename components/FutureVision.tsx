import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const FutureVision: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Como Será Seu Negócio Quando Você Revende Produtos que Funcionam
            </h2>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 mb-8">
              <p className="text-lg italic text-blue-100">
                "Imagine: você vende uma chapeira. Três meses depois, o cliente te liga pedindo mais duas unidades e indica outro empresário. Seu WhatsApp tem mensagens positivas. Vendas se repetem. Você tem tempo para crescer ao invés de apagar incêndios."
              </p>
              <p className="mt-4 font-bold text-secondary">Isso é consequência de revender qualidade.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">O Que Você Ganha</h3>
              <ul className="space-y-3">
                {[
                  "Produtos com qualidade comprovada",
                  "Entrega ágil em SP e MG",
                  "Suporte em horário comercial estendido",
                  "Catálogo completo atualizado",
                  "Parceria transparente",
                  "Atendimento consultivo"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="bg-secondary rounded-full p-1">
                      <Check size={14} className="text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white text-gray-800 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">O Que Muda na Prática</h3>
            <div className="space-y-6">
              {[
                { title: "Seus Dias Ficam Mais Leves", text: "Menos reclamação, menos troca de produto com defeito, menos desgaste. Você vende tranquilo porque o produto entrega." },
                { title: "Suas Vendas Se Multiplicam", text: "Cliente satisfeito indica. Quem comprou fogão volta pro forno. Quem testou pequeno expande o pedido." },
                { title: "Sua Reputação Cresce", text: "Você vira referência local em equipamento profissional de qualidade." },
                { title: "Suas Margens Melhoram", text: "Produto bom justifica preço justo. Você trabalha com margens saudáveis entregando valor real." },
                { title: "Você Tem um Parceiro", text: "Atendimento 07:00 às 18:00. Entregas no prazo. Suporte que funciona." }
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                  {idx < 4 && <div className="w-full h-px bg-gray-200 mt-6"></div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
