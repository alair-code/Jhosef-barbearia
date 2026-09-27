import React from 'react';
import { ArrowUp, Phone, MapPin, MessageCircle } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershop';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0F1D] text-ice border-t border-subtle py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-subtle">
          {/* Brand & Proposition */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border border-ice/30 p-0.5 bg-[#0F172A] shadow-md group-hover:border-ice transition-colors shrink-0">
                <img
                  src={BARBERSHOP_DATA.logoImage}
                  alt="Logo Jhosef Barbearia"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-ice group-hover:opacity-90 transition-opacity">
                {BARBERSHOP_DATA.name}
              </span>
            </a>
            <p className="text-sm text-ice-muted font-light max-w-sm leading-relaxed">
              {BARBERSHOP_DATA.subheadline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ice-subtle font-semibold block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm text-ice-muted font-light">
              <li>
                <a href="#inicio" className="hover:text-ice transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-ice transition-colors">
                  Serviços &amp; Preços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-ice transition-colors">
                  Sobre Nós &amp; Tradição
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-ice transition-colors">
                  Galeria de Estilo
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-ice transition-colors">
                  Agendamento &amp; Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ice-subtle font-semibold block">
              Local &amp; Contato
            </span>
            <div className="space-y-2 text-xs text-ice-muted font-light leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-ice shrink-0 mt-0.5" />
                <span>{BARBERSHOP_DATA.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-ice shrink-0" />
                <a
                  href={`tel:${BARBERSHOP_DATA.whatsappNumber}`}
                  className="hover:text-ice transition-colors"
                >
                  {BARBERSHOP_DATA.phone}
                </a>
              </p>
              <p className="text-[11px] text-ice-subtle pt-1">
                {BARBERSHOP_DATA.businessHours}
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-ice shrink-0" />
                <a
                  href={`https://wa.me/${BARBERSHOP_DATA.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ice transition-colors"
                >
                  Atendimento WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ice-subtle">
          <p>© {new Date().getFullYear()} Jhosef Barbearia. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="inline-flex items-center gap-2 text-ice-muted hover:text-ice transition-colors group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
