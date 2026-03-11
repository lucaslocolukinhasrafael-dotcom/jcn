import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-gray-50">
              <button 
                className="w-full flex justify-between items-center p-6 hover:bg-gray-100 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === idx ? <Minus className="text-secondary" /> : <Plus className="text-gray-400" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};