import React from 'react';
import { BARBERSHOP_DATA } from '../data/barbershop';

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#0C1322] border-t border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] text-ice-subtle font-semibold block mb-3">
            02. Tradição &amp; Mestria
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-ice tracking-tight">
            Sobre Nós
          </h2>
        </div>

        {/* Editorial 2-column layout: Story + Craft Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl text-ice font-medium leading-snug">
              Mais do que um corte, um compromisso inabalável com a sua presença.
            </h3>
            <p className="text-ice-muted text-base leading-relaxed font-light">
              Nascida com a proposta de resgatar o respeito pelo corte de cabelo clássico e pelo barbear tradicional com toalha quente, a <strong className="text-ice font-normal">Jhosef Barbearia</strong> consolidou-se como referência indiscutível em Reduto e região.
            </p>
            <p className="text-ice-muted text-base leading-relaxed font-light">
              Aqui o tempo desacelera. Cada detalhe do nosso espaço foi arquitetado para proporcionar conforto, discrição e uma execução impecável por profissionais que dominam a fundo a geometria facial masculina.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-dark-surface overflow-hidden group">
              <img
                src={BARBERSHOP_DATA.craftImage}
                alt="Instrumentos artesanais da Jhosef Barbearia: navalhetes, tesouras e produtos selecionados"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F172A]/90 backdrop-blur-md border border-subtle">
                <p className="text-xs tracking-widest uppercase text-ice font-medium">
                  Rigor Técnico · Higiene Absoluta · Acabamento Fino
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid (Tabular Numerals, Unboxed Elegance) */}
        <div className="pt-12 border-t border-subtle">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {BARBERSHOP_DATA.stats.map((stat, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-ice tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-ice">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-ice-subtle font-light leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
