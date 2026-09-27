import bannerCombo from '../assets/images/banner_combo_barboterapia_1790467392260.jpg';
import bannerCorteBarba from '../assets/images/banner_corte_barba_1790467417281.jpg';
import bannerCorteSobrancelha from '../assets/images/banner_corte_sombrancelha_1790467406909.jpg';
import bannerPesinho from '../assets/images/banner_pesinho_navalha_1790467426720.jpg';
import tabelaPrecos from '../assets/images/tabela_precos_jhosef_1790467437054.jpg';
import logoJhosef from '../assets/images/jhosef_barbearia_logo_1790466156362.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  duration: string;
  description: string;
  image: string;
  badge?: string;
  highlight?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export const BARBERSHOP_DATA = {
  name: "Jhosef Barbearia",
  headline: "Estilo, Tradição e Excelência no Corte",
  subheadline: "Cortes modernos, barboterapia relaxante com toalha quente e acabamento de precisão no centro de Reduto - MG.",
  phone: "(31) 9 9935-1715",
  whatsappNumber: "5531999351715",
  address: "Rua João Batista, N° 10 - Centro, Reduto - MG, 36920-000",
  businessHours: "Segunda a Sábado | 09h às 19h",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+Batista%2C+N%C2%B0+10+-+Centro%2C+Reduto+-+MG",
  
  // Real service list matching the official Jhosef Barbearia price board & banners
  services: [
    {
      id: "combo-master",
      name: "Combo Completo: Corte + Barba + Barboterapia",
      price: "R$ 25",
      numericPrice: 25,
      duration: "50 min",
      description: "O combo mais procurado: corte completo alinhado, barba desenhada e tratamento revitalizante com toalha quente a vapor.",
      image: bannerCombo,
      badge: "Mais Pedido",
      highlight: true
    },
    {
      id: "corte-barba",
      name: "Corte & Barba",
      price: "R$ 15",
      numericPrice: 15,
      duration: "40 min",
      description: "Corte na tesoura e máquina com alinhamento milimétrico, acompanhado de desenho e acabamento de barba.",
      image: bannerCorteBarba
    },
    {
      id: "corte-sombrancelha",
      name: "Corte & Sobrancelha",
      price: "R$ 15",
      numericPrice: 15,
      duration: "35 min",
      description: "Corte masculino adulto ou infantil trabalhado com degradê e listras na régua + alinhamento fino de sobrancelha.",
      image: bannerCorteSobrancelha
    },
    {
      id: "pezinho-navalha",
      name: "Pezinho na Navalha",
      price: "R$ 5",
      numericPrice: 5,
      duration: "15 min",
      description: "Acabamento no navalhete do contorno do pescoço e costeletas, deixando o visual sempre limpo e impecável.",
      image: bannerPesinho
    },
    {
      id: "sobrancelha",
      name: "Design de Sobrancelha",
      price: "R$ 5",
      numericPrice: 5,
      duration: "15 min",
      description: "Alinhamento e limpeza simétrica da sobrancelha na lâmina descartável para harmonização do olhar.",
      image: bannerCorteSobrancelha
    },
    {
      id: "barba-simples",
      name: "Barba & Contorno",
      price: "R$ 5",
      numericPrice: 5,
      duration: "20 min",
      description: "Aparo de volume, desenho das linhas faciais e finalização pós-barba.",
      image: bannerCorteBarba
    }
  ] as ServiceItem[],

  stats: [
    {
      value: "15+",
      label: "Anos de Experiência",
      detail: "Dominando a técnica do corte clássico, degradê e navalha."
    },
    {
      value: "10.000+",
      label: "Clientes Atendidos",
      detail: "Clientes satisfeitos que confiam na qualidade e pontualidade."
    },
    {
      value: "09h - 19h",
      label: "Atendimento Seg a Sáb",
      detail: "Horários flexíveis para você agendar com total conveniência."
    },
    {
      value: "4.9",
      label: "Avaliação Média",
      detail: "Reconhecimento máximo pelo acolhimento, agilidade e precisão."
    }
  ] as StatItem[],

  // Primary assets from the uploaded banners
  heroImage: bannerCombo,
  bannerCombo: bannerCombo,
  bannerCorteBarba: bannerCorteBarba,
  bannerCorteSobrancelha: bannerCorteSobrancelha,
  bannerPesinho: bannerPesinho,
  priceTableImage: tabelaPrecos,
  craftImage: bannerCorteBarba,
  logoImage: logoJhosef
};
