import React, { useState } from 'react';
import { X, Download, CheckCircle, Loader2 } from 'lucide-react';
import { useCatalogModal } from '../context/CatalogContext';
import { CATALOG_URL } from '../constants';
import { Button } from './ui/Button';

export const LeadModal: React.FC = () => {
  const { isOpen, closeModal } = useCatalogModal();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    whatsapp: '',
    cnpj: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // URL do Webhook do Make
  const WEBHOOK_URL = "https://hook.us2.make.com/6vrpyb1ztt3njl9qhk9jmkebburqtjyr";

  if (!isOpen) return null;

  const handlePhoneMask = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo o que não é dígito
      .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
      .replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
  };

  const handleCnpjMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substring(0, 18);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Limpa erro do campo ao digitar
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, [name]: handlePhoneMask(value) }));
    } else if (name === 'cnpj') {
      setFormData(prev => ({ ...prev, [name]: handleCnpjMask(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Função auxiliar para validar CNPJ (Algoritmo oficial)
  const isValidCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') return true; // Aceita vazio pois não é obrigatório, validação feita fora
    if (cnpj.length !== 14) return false;

    // Elimina CNPJs invalidos conhecidos (sequências repetidas)
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const email = formData.email.toLowerCase().trim();
    const whatsappRaw = formData.whatsapp.replace(/\D/g, '');
    const cnpjRaw = formData.cnpj.replace(/\D/g, '');

    // Validação de E-mail (Anti-Spam)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
    } else {
      const blockedDomains = ['teste.com', 'exemplo.com', 'email.com', 'naotem.com'];
      if (blockedDomains.some(domain => email.endsWith(domain))) {
        newErrors.email = "Por favor, use um e-mail corporativo ou pessoal válido.";
      }
      const userPart = email.split('@')[0];
      if (/(.)\1{4,}/.test(userPart)) {
        newErrors.email = "Este e-mail parece incorreto. Verifique, por favor.";
      }
      if (/^01234/.test(userPart) || /^12345/.test(userPart)) {
        newErrors.email = "Insira um e-mail válido para receber o catálogo.";
      }
    }

    // Validação de WhatsApp
    if (whatsappRaw.length < 10) {
      newErrors.whatsapp = "O número de telefone parece incompleto.";
    } else {
      if (/^(\d)\1+$/.test(whatsappRaw)) {
        newErrors.whatsapp = "Número de telefone inválido.";
      }
      if ('0123456789012345'.includes(whatsappRaw) || '9876543210987654'.includes(whatsappRaw)) {
        newErrors.whatsapp = "Por favor, informe um número de WhatsApp válido.";
      }
    }

    // Validação de CNPJ (Se preenchido)
    if (cnpjRaw.length > 0) {
      if (!isValidCNPJ(cnpjRaw)) {
        newErrors.cnpj = "CNPJ inválido. Verifique os números digitados.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (loading) return; 

    setLoading(true);

    const payload = {
      name: formData.name,
      company: formData.companyName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      cnpj: formData.cnpj, // Envia vazio se não preenchido
      submittedAt: new Date().toISOString(),
      origin: window.location.origin
    };

    let hasFired = false;

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    } finally {
      if (!hasFired && typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'submit_forms',
          user_data: {
             email: formData.email, 
             phone: formData.whatsapp
          }
        });
        hasFired = true;
      }

      setLoading(false);
      setStep('success');
    }
  };

  const handleFinalDownload = () => {
    window.open(CATALOG_URL, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop com Glassmorphism e Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-primary p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">
            {step === 'form' ? 'Baixar Catálogo Completo' : 'Tudo Pronto!'}
          </h3>
          <button onClick={closeModal} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 text-sm mb-4">
                Preencha seus dados abaixo para liberar o download imediato do nosso catálogo técnico com preços.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Nome da sua loja ou distribuidora"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CNPJ
                </label>
                <input
                  type="text"
                  name="cnpj"
                  maxLength={18}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 outline-none transition-all ${errors.cnpj ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'}`}
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={handleChange}
                />
                {errors.cnpj && <p className="text-red-500 text-xs mt-1 ml-1">{errors.cnpj}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'}`}
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  maxLength={15}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 outline-none transition-all ${errors.whatsapp ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'}`}
                  placeholder="(00) 00000-0000"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
                {errors.whatsapp && <p className="text-red-500 text-xs mt-1 ml-1">{errors.whatsapp}</p>}
              </div>

              <Button 
                id="btn-modal-submit"
                type="submit" 
                fullWidth 
                disabled={loading}
                variant="primary"
                className="font-bold py-4 text-lg shadow-lg shadow-orange-900/20 mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} /> Processando...
                  </span>
                ) : (
                  'Liberar Download Agora'
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Cadastro Confirmado!</h4>
                <p className="text-gray-600">
                  Obrigado, {formData.name.split(' ')[0]}.<br/>
                  Seu catálogo já está pronto para download.
                </p>
              </div>

              <Button 
                id="btn-modal-download-pdf"
                onClick={handleFinalDownload} 
                fullWidth 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg shadow-lg shadow-green-900/20 animate-pulse"
              >
                <Download className="mr-2" />
                Clique aqui para Baixar PDF
              </Button>
              
              <p className="text-xs text-gray-400 mt-4">
                O download iniciará em uma nova aba.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};