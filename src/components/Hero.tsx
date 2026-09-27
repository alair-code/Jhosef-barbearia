import React from 'react';
import { Calendar, ChevronDown, MessageSquare } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershop';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-dark-primary overflow-hidden"
    >
      {/* Background cinematic imagery with measured dark gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={BARBERSHOP_DATA.heroImage}
          alt="Interior luxuoso da Jhosef Barbearia com cadeiras clássicas de barbeiro e iluminação intimista"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.08] scale-[1.02] transform transition-transform duration-1000"
        />
        {/* Measured scrims to guarantee WCAG AAA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0F172A]/40 to-[#0F172A]/90" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto text-center flex flex-col items-center">
        {/* Round Badge Logo */}
        <div className="mb-6 relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-ice/40 p-1 bg-[#0F172A] shadow-2xl shadow-black/80 transition-transform duration-300 group-hover:scale-105 group-hover:border-ice">
            <img
              src={BARBERSHOP_DATA.logoImage}
              alt="Logo Jhosef Barbearia"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-ice/5 blur-md -z-10 group-hover:bg-ice/15 transition-colors" />
        </div>

        {/* Subtitle / Kicker (Clean unboxed text) */}
        <div className="flex items-center gap-3 text-xs md:text-sm tracking-[0.25em] uppercase text-ice-muted font-medium mb-4">
          <span>Barbearia de Alto Padrão</span>
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-ice/40" />
          <span>Reduto · MG</span>
        </div>

        {/* Oversized Confident Headline (Playfair Display) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-ice tracking-tight leading-[1.05] max-w-4xl text-balance">
          Estilo &amp; Tradição
        </h1>

        {/* Supporting sentence (maximum 1 short sentence, restrained, elegant) */}
        <p className="mt-6 md:mt-8 text-base md:text-xl text-ice-muted font-light max-w-2xl leading-relaxed text-balance">
          {BARBERSHOP_DATA.headline}. A maestria do corte e da navalha em um ambiente pensado para o cavalheiro contemporâneo.
        </p>

        {/* Primary CTA and Secondary Action */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs md:text-sm uppercase tracking-widest font-semibold bg-ice text-dark-primary hover:bg-white transition-all duration-200 active:scale-[0.98] shadow-2xl shadow-black/60 group"
          >
            <Calendar className="w-4 h-4 text-dark-primary transition-transform group-hover:scale-110" />
            <span className="whitespace-nowrap">Agende seu Horário</span>
          </button>

          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs md:text-sm uppercase tracking-widest font-medium text-ice border border-ice-light hover:border-ice-active hover:bg-ice/5 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-ice-muted" />
            <span className="whitespace-nowrap">Entrar em Contato</span>
          </a>
        </div>
      </div>

      {/* Peek to invite scrolling down to the next section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-ice-subtle">
        <a
          href="#servicos"
          aria-label="Rolar para serviços"
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-ice-muted hover:text-ice transition-colors group"
        >
          <span className="text-[11px] font-medium tracking-[0.2em]">Conheça os Serviços</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-ice-muted group-hover:text-ice" />
        </a>
      </div>
    </section>
  );
};
