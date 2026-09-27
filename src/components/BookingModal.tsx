import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Send, Sparkles } from 'lucide-react';
import { BARBERSHOP_DATA, ServiceItem } from '../data/barbershop';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  presetService
}) => {
  const [selectedService, setSelectedService] = useState<string>('combo-master');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('tarde');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (presetService) {
      setSelectedService(presetService.id);
    }
  }, [presetService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMessage('Por favor, informe seu nome.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 8) {
      setErrorMessage('Por favor, informe um número de contato válido.');
      return;
    }

    setErrorMessage('');

    const serviceObj = BARBERSHOP_DATA.services.find(s => s.id === selectedService);
    const serviceName = serviceObj ? `${serviceObj.name} (${serviceObj.price})` : 'Serviço da Barbearia';

    const periodLabels: Record<string, string> = {
      manha: 'Manhã (09h - 12h)',
      tarde: 'Tarde (13h - 17h)',
      noite: 'Fim de tarde (17h - 19h)'
    };

    const messageText = [
      `*Olá, Jhosef Barbearia!*`,
      `Gostaria de agendar pelo site:`,
      `✂️ *Serviço:* ${serviceName}`,
      preferredDate ? `📅 *Data:* ${preferredDate}` : '',
      `⏰ *Horário:* ${periodLabels[preferredTime] || preferredTime}`,
      `👤 *Nome:* ${clientName.trim()}`,
      `📱 *Contato:* ${clientPhone.trim()}`
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${BARBERSHOP_DATA.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0F172A] border border-subtle p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-subtle mb-6">
          <div className="flex items-center gap-3 text-ice">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-ice/30 p-0.5 bg-[#0F172A] shrink-0">
              <img
                src={BARBERSHOP_DATA.logoImage}
                alt="Logo Jhosef Barbearia"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold">Agendar Horário</h3>
              <p className="text-[11px] text-ice-subtle">Jhosef Barbearia · Reduto - MG</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-1.5 text-ice-muted hover:text-ice hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMessage && (
          <div className="p-3 mb-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Picker */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-2">
              Serviço Desejado
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {BARBERSHOP_DATA.services.map((service) => {
                const active = selectedService === service.id;
                return (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-2.5 text-left border text-xs transition-all ${
                      active
                        ? 'bg-ice text-dark-primary border-ice font-semibold'
                        : 'bg-dark-surface border-subtle text-ice-muted hover:border-ice-light hover:text-ice'
                    }`}
                  >
                    <div>{service.name}</div>
                    <div className={`mt-0.5 tabular-nums ${active ? 'text-dark-primary' : 'text-ice font-medium'}`}>
                      {service.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date & Period */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-1.5">
                Data Pretendida
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-dark-surface border border-subtle px-3 py-2 text-sm text-ice focus:outline-none focus:border-ice-active"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-1.5">
                Período
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-dark-surface border border-subtle px-3 py-2 text-sm text-ice focus:outline-none focus:border-ice-active"
              >
                <option value="manha" className="bg-[#0F172A] text-ice">Manhã (09h - 12h)</option>
                <option value="tarde" className="bg-[#0F172A] text-ice">Tarde (13h - 17h)</option>
                <option value="noite" className="bg-[#0F172A] text-ice">Fim de tarde (17h - 19h)</option>
              </select>
            </div>
          </div>

          {/* Name & Phone */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-1.5">
              Seu Nome *
            </label>
            <input
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-dark-surface border border-subtle px-3 py-2 text-sm text-ice placeholder:text-ice-subtle focus:outline-none focus:border-ice-active"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-1.5">
              WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="(31) 90000-0000"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full bg-dark-surface border border-subtle px-3 py-2 text-sm text-ice placeholder:text-ice-subtle focus:outline-none focus:border-ice-active"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-widest font-semibold bg-ice text-dark-primary hover:bg-white transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Agendar via WhatsApp</span>
            </button>
            <p className="text-[11px] text-ice-subtle text-center mt-2">
              Você será direcionado diretamente para o WhatsApp oficial da barbearia.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
