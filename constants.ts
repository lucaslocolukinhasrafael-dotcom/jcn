import { Clock, ShieldCheck, Truck, BarChart3, Star, Zap, Search } from 'lucide-react';
import { Differential, FaqItem, ProductParam } from './types';

export const COMPANY_INFO = {
  name: "JCN Indústria e Comércio Ltda.",
  address: "Rua Araraquara, 710 - Vila Rodrigues, Catanduva - SP, CEP: 15801-360",
  phone: "17 352223666",
  whatsapp: "5517991519932",
  email: "contato@jcngourmet.com.br"
};

export const CATALOG_URL = "https://drive.usercontent.google.com/u/7/uc?id=1x6s6_50BDDyno3Rk03KeDD0G0TfMIkzy&export=download";

export const CAROUSEL_IMAGES = [
  "https://i.imgur.com/vJ9AUSV.png",
  "https://i.imgur.com/LL1Erq1.png",
  "https://i.imgur.com/Df4njs9.png",
  "https://i.imgur.com/OoD4k27.jpeg",
  "https://i.imgur.com/CXZ1Mrd.jpeg",
  "https://i.imgur.com/MoFXVFh.png",
  "https://i.imgur.com/yYc0ssM.png",
  "https://i.imgur.com/BavlFBH.png",
  "https://i.imgur.com/aZgLNao.png",
  "https://i.imgur.com/PjAoGXW.png",
  "https://i.imgur.com/kIoyvvl.png",
  "https://i.imgur.com/80EE2tv.png",
  "https://i.imgur.com/ZF5FfQm.png",
  "https://i.imgur.com/fKJkETS.png",
  "https://i.imgur.com/1pclla0.png",
  "https://i.imgur.com/dQQa6e7.png",
  "https://i.imgur.com/glJMJbv.png"
];

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Parceria', href: '#parceria' },
  { label: 'Contato', href: '#contato' },
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Produtos que Seus Clientes Recomendam",
    description: "Venda um fogão e meses depois receba ligação do cliente pedindo mais unidades ou indicando você. Isso acontece quando o produto entrega resultado.",
    icon: Star
  },
  {
    title: "Atendimento que Funciona",
    description: "Seg-Sex, 07:00 às 18:00 - Atendemos de Verdade. Informação urgente? Nossa equipe responde. Dúvidas sobre produtos, prazos, especificações - estamos preparados.",
    icon: Clock
  },
  {
    title: "Seu Cliente Precisa, Você Entrega",
    description: "Estoque e logística eficiente em SP e MG. Processamos pedidos com agilidade e mantemos você informado em cada etapa.",
    icon: Truck
  },
  {
    title: "Transparência Total",
    description: "Sem Surpresas, Sem Enrolação. Prazos realistas, políticas claras, valores justos. Você repassa ao cliente com segurança.",
    icon: Search
  }
];

export const PRODUCTS: ProductParam[] = [
  {
    id: 'fogoes',
    title: 'Fogões Industriais',
    description: 'A Base de Toda Cozinha Profissional. Robustos, eficientes e projetados para uso intenso.',
    features: ['Restaurantes', 'Hotéis', 'Cozinhas Industriais', 'Buffets'],
    image: 'https://i.imgur.com/5M8ovjO.png'
  },
  {
    id: 'chapeiras',
    title: 'Chapeiras Profissionais',
    description: 'Versatilidade que Aumenta o Cardápio. Aquecimento uniforme, controle preciso, alta durabilidade.',
    features: ['Lanchonetes', 'Hamburguerias', 'Food Trucks', 'Padarias'],
    image: 'https://i.imgur.com/gcPTwSH.png'
  },
  {
    id: 'sanduicheiras',
    title: 'Sanduicheiras Industriais',
    description: 'Produtividade que Gera Lucro. Alto volume, resultado consistente, fácil manutenção.',
    features: ['Cafeterias', 'Lanchonetes', 'Bares', 'Cafés Corporativos'],
    image: 'https://i.imgur.com/Gl5ofVW.png'
  },
  {
    id: 'fornos',
    title: 'Fornos Profissionais',
    description: 'Precisão e Uniformidade. Controle térmico profissional para resultados consistentes.',
    features: ['Pizzarias', 'Padarias', 'Confeitarias', 'Restaurantes'],
    image: 'https://i.imgur.com/WkdffQJ.png'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Qual o pedido mínimo?",
    answer: "Pode começar com 1 unidade. Para parcerias recorrentes, conversamos sobre volume."
  },
  {
    question: "Quanto tempo demora a entrega?",
    answer: "Geralmente 5 a 10 dias úteis em SP e MG após confirmação de pagamento. Prazo exato na cotação."
  },
  {
    question: "Vocês oferecem garantia?",
    answer: "Sim. Todos os produtos têm garantia de fábrica. Detalhes no catálogo e nota fiscal."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Segunda a sexta, 07:00 às 18:00 via WhatsApp, telefone e e-mail."
  },
  {
    question: "Posso revender para todo Brasil?",
    answer: "Atendemos SP e MG. Para outras regiões, consulte nossa equipe."
  },
  {
    question: "Preciso ter CNPJ?",
    answer: "Sim, trabalhamos B2B (pessoa jurídica): lojistas, distribuidores e revendedores."
  }
];