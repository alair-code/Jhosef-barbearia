import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershop';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-subtle shadow-xl shadow-black/20 py-3.5'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Brand with round logo badge */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-ice/30 p-0.5 bg-[#0F172A] shadow-md group-hover:border-ice transition-colors shrink-0">
            <img
              src={BARBERSHOP_DATA.logoImage}
              alt="Logo Jhosef Barbearia"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ice group-hover:opacity-90 transition-opacity">
            {BARBERSHOP_DATA.name}
          </span>
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ice-muted">
          <a
            href="#inicio"
            className="hover:text-ice transition-colors tracking-wide"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="hover:text-ice transition-colors tracking-wide"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="hover:text-ice transition-colors tracking-wide"
          >
            Sobre Nós
          </a>
          <a
            href="#galeria"
            className="hover:text-ice transition-colors tracking-wide"
          >
            Galeria
          </a>
          <a
            href="#contato"
            className="hover:text-ice transition-colors tracking-wide"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: Primary action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-ice text-dark-primary rounded-none hover:bg-white transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-ice/10"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Agende seu Horário</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden p-2 text-ice hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-subtle px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ice-muted hover:text-ice py-1"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ice-muted hover:text-ice py-1"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ice-muted hover:text-ice py-1"
            >
              Sobre Nós
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ice-muted hover:text-ice py-1"
            >
              Galeria
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ice-muted hover:text-ice py-1"
            >
              Contato
            </a>
            <div className="pt-4 border-t border-subtle flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold bg-ice text-dark-primary"
              >
                Agende seu Horário
              </button>
              <a
                href={`tel:${BARBERSHOP_DATA.whatsappNumber}`}
                className="flex items-center justify-center gap-2 py-2 text-xs text-ice-muted hover:text-ice"
              >
                <Phone className="w-3.5 h-3.5" />
                {BARBERSHOP_DATA.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
