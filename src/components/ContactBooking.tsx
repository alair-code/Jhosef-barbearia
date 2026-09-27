import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Calendar,
  Clock,
  Sparkles,
  Send
} from 'lucide-react';
import { BARBERSHOP_DATA, ServiceItem } from '../data/barbershop';

interface ContactBookingProps {
  selectedServicePreset?: ServiceItem | null;
}

export const ContactBooking: React.FC<ContactBookingProps> = ({ selectedServicePreset }) => {
  const [selectedService, setSelectedService] = useState<string>(
    selectedServicePreset ? selectedServicePreset.id : 'corte-masculino'
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('tarde');
  const [notes, setNotes] = useState('');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selectedService when preset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setSelectedService(selectedServicePreset.id);
    }
  }, [selectedServicePreset]);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BARBERSHOP_DATA.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 3000);
    } catch {
      // fallback
      setCopiedAddress(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMessage('Por favor, informe seu nome.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 8) {
      setErrorMessage('Por favor, informe um número de telefone válido.');
      return;
    }

    setErrorMessage('');

    const serviceObj = BARBERSHOP_DATA.services.find(s => s.id === selectedService);
    const serviceName = serviceObj ? `${serviceObj.name} (${serviceObj.price})` : 'Atendimento Personalizado';

    const periodLabels: Record<string, string> = {
      manha: 'Manhã (09h - 12h)',
      tarde: 'Tarde (13h - 17h)',
      noite: 'Fim de tarde (17h - 19h)'
    };

    const messageText = [
      `*Olá, Jhosef Barbearia!*`,
      `Gostaria de agendar um horário:`,
      `✂️ *Serviço:* ${serviceName}`,
      preferredDate ? `📅 *Data desejada:* ${preferredDate}` : '',
      `⏰ *Período preferido:* ${periodLabels[preferredTime] || preferredTime}`,
      `👤 *Cliente:* ${clientName.trim()}`,
      `📱 *Contato:* ${clientPhone.trim()}`,
      notes.trim() ? `💬 *Observações:* ${notes.trim()}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${BARBERSHOP_DATA.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    
    setFormSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#0C1322] border-t border-subtle relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] text-ice-subtle font-semibold block mb-3">
            04. Agendamento &amp; Localização
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-ice tracking-tight">
            Entrar em Contato
          </h2>
          <p className="mt-4 text-base text-ice-muted font-light leading-relaxed">
            Reserve o seu horário ou converse diretamente com nossa equipe. Atendimento personalizado e exclusivo.
          </p>
        </div>

        {/* 2-Column High-Converting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-10">
            {/* Address Block */}
            <div className="p-8 bg-dark-primary border border-subtle">
              <div className="flex items-center gap-3 text-ice mb-3">
                <MapPin className="w-5 h-5 text-ice" />
                <h3 className="font-display text-xl font-semibold">Endereço</h3>
              </div>
              <p className="text-ice-muted text-base leading-relaxed mb-6 font-light">
                {BARBERSHOP_DATA.address}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice-active hover:bg-white/5 transition-colors"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado com Sucesso</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-ice-muted" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <a
                  href={BARBERSHOP_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice-active hover:bg-white/5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-ice-muted" />
                  <span>Ver Rota no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Block */}
            <div className="p-8 bg-dark-primary border border-subtle">
              <div className="flex items-center gap-3 text-ice mb-3">
                <Phone className="w-5 h-5 text-ice" />
                <h3 className="font-display text-xl font-semibold">Telefone &amp; WhatsApp</h3>
              </div>
              <p className="text-ice-muted text-sm font-light leading-relaxed mb-6">
                Fale conosco instantaneamente pelo WhatsApp para dúvidas ou agendamentos rápidos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`https://wa.me/${BARBERSHOP_DATA.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de informações sobre agendamento na Jhosef Barbearia.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-ice text-dark-primary hover:bg-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-dark-primary" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <a
                  href={`tel:${BARBERSHOP_DATA.whatsappNumber}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs uppercase tracking-widest font-semibold border border-subtle text-ice hover:border-ice-active hover:bg-white/5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-ice-muted" />
                  <span>{BARBERSHOP_DATA.phone}</span>
                </a>
              </div>

              {/* Verified Working Hours from Banner */}
              <div className="pt-4 border-t border-subtle flex items-center gap-3 text-xs text-ice-muted">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Horários de Atendimento: <strong className="text-ice font-medium">{BARBERSHOP_DATA.businessHours}</strong></span>
              </div>
            </div>

            {/* Quality Promise */}
            <div className="p-6 border border-subtle bg-dark-surface/50 text-xs text-ice-muted leading-relaxed font-light">
              <span className="font-semibold text-ice block mb-1 uppercase tracking-wider">
                Pontualidade Rigorosa
              </span>
              Seu tempo é respeitado. Trabalhamos com agenda organizada para que você seja atendido no horário marcado, sem esperas desnecessárias.
            </div>
          </div>

          {/* Right Column: Lead Generation & Interactive Online Scheduler */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-dark-primary border border-subtle">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-ice/30 p-0.5 bg-[#0F172A] shrink-0">
                    <img
                      src={BARBERSHOP_DATA.logoImage}
                      alt="Logo Jhosef Barbearia"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ice">
                      Agendamento Online
                    </h3>
                    <p className="text-xs text-ice-muted font-light mt-0.5">
                      Preencha os dados e receba a confirmação imediata via WhatsApp.
                    </p>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-ice-muted hidden sm:block" />
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-ice/10 border border-ice-light flex items-center justify-center text-ice">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold text-ice">
                    Solicitação Encaminhada!
                  </h4>
                  <p className="text-sm text-ice-muted max-w-md mx-auto leading-relaxed font-light">
                    Abrimos o WhatsApp oficial da <strong className="text-ice font-normal">Jhosef Barbearia</strong> com todos os detalhes do seu agendamento prontos. Caso não tenha aberto, clique abaixo:
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <a
                      href={`https://wa.me/${BARBERSHOP_DATA.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold bg-ice text-dark-primary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir Conversa</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 text-xs uppercase tracking-wider font-semibold border border-subtle text-ice hover:border-ice-active"
                    >
                      Novo Agendamento
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* 1. Escolha do Serviço */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-3">
                      Selecione o Serviço
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {BARBERSHOP_DATA.services.map((service) => {
                        const isSelected = selectedService === service.id;
                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`p-3 text-left border transition-all duration-200 ${
                              isSelected
                                ? 'bg-ice text-dark-primary border-ice font-semibold shadow-md'
                                : 'bg-dark-surface border-subtle text-ice-muted hover:border-ice-light hover:text-ice'
                            }`}
                          >
                            <div className="text-sm">{service.name}</div>
                            <div className={`text-xs mt-1 tabular-nums ${isSelected ? 'text-dark-primary font-bold' : 'text-ice'}`}>
                              {service.price}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Preferência de Data e Período */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-2">
                        Data Pretendida
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full bg-dark-surface border border-subtle px-3 py-2.5 text-sm text-ice focus:outline-none focus:border-ice-active"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-2">
                        Período Preferido
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-dark-surface border border-subtle px-3 py-2.5 text-sm text-ice focus:outline-none focus:border-ice-active"
                      >
                        <option value="manha" className="bg-[#0F172A] text-ice">Manhã (09h - 12h)</option>
                        <option value="tarde" className="bg-[#0F172A] text-ice">Tarde (13h - 17h)</option>
                        <option value="noite" className="bg-[#0F172A] text-ice">Fim de tarde (17h - 19h)</option>
                      </select>
                    </div>
                  </div>

                  {/* 3. Dados do Cliente */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-2">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-dark-surface border border-subtle px-3 py-2.5 text-sm text-ice placeholder:text-ice-subtle focus:outline-none focus:border-ice-active"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(31) 90000-0000"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-dark-surface border border-subtle px-3 py-2.5 text-sm text-ice placeholder:text-ice-subtle focus:outline-none focus:border-ice-active"
                      />
                    </div>
                  </div>

                  {/* 4. Observações */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-ice mb-2">
                      Observação ou Barbeiro de Preferência (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Alguma preferência especial para o seu corte ou barba..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-dark-surface border border-subtle px-3 py-2 text-sm text-ice placeholder:text-ice-subtle focus:outline-none focus:border-ice-active resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold bg-ice text-dark-primary hover:bg-white transition-all duration-200 active:scale-[0.99] shadow-xl group"
                  >
                    <Send className="w-4 h-4 text-dark-primary transition-transform group-hover:translate-x-1" />
                    <span>Confirmar e Enviar via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-ice-subtle text-center">
                    Sem taxas antecipadas. O pagamento é realizado diretamente na barbearia.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
