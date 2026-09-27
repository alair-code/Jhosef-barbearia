import React from 'react';
import { ArrowUpRight, Clock, Star, Sparkles } from 'lucide-react';
import { BARBERSHOP_DATA, ServiceItem } from '../data/barbershop';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicos"
      className="py-24 md:py-36 px-6 md:px-12 bg-dark-primary border-t border-subtle relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-ice-subtle font-semibold block mb-3">
              01. Tabela &amp; Banners Oficiais
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-ice tracking-tight">
              Nossos Serviços
            </h2>
          </div>
          <p className="text-sm md:text-base text-ice-muted font-light max-w-md leading-relaxed">
            Consulte nossos combos exclusivos e serviços individuais com preços transparentes e execução de excelência.
          </p>
        </div>

        {/* Highlight Feature Banner: Combo Barboterapia (R$ 25) */}
        <div className="mb-20 overflow-hidden border border-ice/20 bg-dark-surface relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
              <img
                src={BARBERSHOP_DATA.bannerCombo}
                alt="Combo Corte, Barba e Barboterapia com toalha quente na Jhosef Barbearia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F172A]/80 hidden lg:block" />
            </div>
            
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Destaque Exclusivo</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-ice leading-tight mb-3">
                  Combo: Corte, Barba &amp; Barboterapia
                </h3>
                <p className="text-ice-muted text-sm sm:text-base leading-relaxed font-light mb-6">
                  Corte milimétrico na tesoura e máquina + barba modelada com navalhete + o relaxamento absoluto da toalha quente aromática e vaporização.
                </p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="font-display text-4xl sm:text-5xl font-black text-amber-300 tabular-nums">
                    R$ 25,00
                  </span>
                  <span className="text-xs uppercase tracking-wider text-ice-subtle">
                    (Corte + Barba + Toalha Quente)
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectService(BARBERSHOP_DATA.services[0])}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold bg-ice text-dark-primary hover:bg-white transition-all duration-200 active:scale-[0.98] shadow-xl group/btn"
                >
                  <span>Agendar Este Combo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Banner Cards Grid for all Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Corte & Sobrancelha (R$ 15,00) */}
          <div className="flex flex-col bg-dark-surface border border-subtle group overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                src={BARBERSHOP_DATA.bannerCorteSobrancelha}
                alt="Corte & Sobrancelha R$ 15 na Jhosef Barbearia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 bg-[#0F172A]/90 backdrop-blur-sm border border-subtle text-amber-300 font-display font-bold text-lg">
                R$ 15,00
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xl font-bold text-ice mb-2">
                  Corte &amp; Sobrancelha
                </h4>
                <p className="text-xs sm:text-sm text-ice-muted font-light leading-relaxed mb-6">
                  Corte com degradê preciso, freestyle/risquinho na régua e alinhamento completo da sobrancelha na lâmina.
                </p>
              </div>
              <button
                onClick={() => onSelectService(BARBERSHOP_DATA.services[2])}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice-active hover:bg-ice hover:text-dark-primary transition-all duration-200"
              >
                <span>Agendar · R$ 15,00</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Corte & Barba (R$ 15,00) */}
          <div className="flex flex-col bg-dark-surface border border-subtle group overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                src={BARBERSHOP_DATA.bannerCorteBarba}
                alt="Corte & Barba R$ 15 na Jhosef Barbearia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 bg-[#0F172A]/90 backdrop-blur-sm border border-subtle text-amber-300 font-display font-bold text-lg">
                R$ 15,00
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xl font-bold text-ice mb-2">
                  Corte &amp; Barba
                </h4>
                <p className="text-xs sm:text-sm text-ice-muted font-light leading-relaxed mb-6">
                  O clássico essencial: cabelo cortado e alinhado por tesouras e máquinas + barba aparada e contornada.
                </p>
              </div>
              <button
                onClick={() => onSelectService(BARBERSHOP_DATA.services[1])}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice-active hover:bg-ice hover:text-dark-primary transition-all duration-200"
              >
                <span>Agendar · R$ 15,00</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Pesinho na Navalha (R$ 5,00) */}
          <div className="flex flex-col bg-dark-surface border border-subtle group overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                src={BARBERSHOP_DATA.bannerPesinho}
                alt="Pesinho R$ 5 na Jhosef Barbearia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 bg-[#0F172A]/90 backdrop-blur-sm border border-subtle text-amber-300 font-display font-bold text-lg">
                R$ 5,00
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xl font-bold text-ice mb-2">
                  Pezinho / Acabamento
                </h4>
                <p className="text-xs sm:text-sm text-ice-muted font-light leading-relaxed mb-6">
                  Alinhamento milimétrico na lâmina do contorno da nuca, costeletas e orelhas para manter o corte em dia.
                </p>
              </div>
              <button
                onClick={() => onSelectService(BARBERSHOP_DATA.services[3])}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice-active hover:bg-ice hover:text-dark-primary transition-all duration-200"
              >
                <span>Agendar · R$ 5,00</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Complete Price List Board Section (Cardápio Completo da Barbearia) */}
        <div className="mt-20 pt-16 border-t border-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Price Table Poster Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full border-2 border-amber-500/30 p-2 bg-[#080D17] shadow-2xl group">
                <img
                  src={BARBERSHOP_DATA.priceTableImage}
                  alt="Tabela de Preços Jhosef Barbearia"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 p-2 bg-black/80 backdrop-blur-md text-center border border-amber-500/40 text-[11px] text-amber-300 uppercase tracking-widest font-semibold">
                  Tabela Oficial de Preços
                </div>
              </div>
            </div>

            {/* Structured Interactive Price Menu with One-Click Booking */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold block mb-2">
                  Tabela Completa
                </span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ice">
                  Lista de Preços &amp; Combos
                </h3>
              </div>

              <div className="divide-y divide-subtle border-y border-subtle">
                {[
                  { name: "Combo Master (Corte + Barba + Sobrancelha + Barboterapia)", price: "R$ 30,00", id: "combo-master" },
                  { name: "Combo (Corte + Barba + Barboterapia com Toalha Quente)", price: "R$ 25,00", id: "combo-master" },
                  { name: "Corte e Sobrancelha", price: "R$ 15,00", id: "corte-sombrancelha" },
                  { name: "Cabelo e Barba", price: "R$ 15,00", id: "corte-barba" },
                  { name: "Sobrancelha (Design na Navalha)", price: "R$ 5,00", id: "sobrancelha" },
                  { name: "Pezinho (Acabamento e Nuca)", price: "R$ 5,00", id: "pezinho-navalha" },
                  { name: "Barba (Modelagem & Pós-barba)", price: "R$ 5,00", id: "barba-simples" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 flex items-center justify-between gap-4 group hover:bg-white/[0.02] px-2 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-ice-subtle">0{idx + 1}.</span>
                      <span className="text-sm sm:text-base font-medium text-ice group-hover:text-amber-200 transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-display text-base sm:text-lg font-bold text-amber-300 tabular-nums">
                        {item.price}
                      </span>
                      <button
                        onClick={() => {
                          const targetService = BARBERSHOP_DATA.services.find(s => s.id === item.id) || BARBERSHOP_DATA.services[0];
                          onSelectService(targetService);
                        }}
                        className="px-3 py-1 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice hover:bg-ice hover:text-dark-primary transition-colors"
                      >
                        Agendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs text-ice-muted font-light">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>Horário de Funcionamento: <strong>{BARBERSHOP_DATA.businessHours}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
