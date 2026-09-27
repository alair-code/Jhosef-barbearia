import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { ContactBooking } from './components/ContactBooking';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { BARBERSHOP_DATA, ServiceItem } from './data/barbershop';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedServiceForModal(service);
    } else {
      setSelectedServiceForModal(null);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleSelectServiceFromList = (service: ServiceItem) => {
    handleOpenBooking(service);
  };

  return (
    <div className="min-h-screen bg-dark-primary text-ice selection:bg-white/20 selection:text-white">
      {/* Top Navigation Bar adhering to the Top Bar Contract */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero: Fullscreen impact with dominant focal image & responsive clamp typography */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Services: Rhythmic alternating editorial layout (Corte R$60, Barba R$45, Tratamento R$80) */}
        <Services onSelectService={handleSelectServiceFromList} />

        {/* 3. About: Heritage, craft imagery & 4 quantitative rigor stats */}
        <About />

        {/* 4. Gallery: Asymmetric atmosphere and precision craftsmanship */}
        <Gallery />

        {/* 5. Contact & Interactive Lead Generation: Scheduler + Direct WhatsApp + Real Address */}
        <ContactBooking selectedServicePreset={selectedServiceForModal} />
      </main>

      {/* 6. Footer: Clean wordmark, links, legal and back to top */}
      <Footer />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        presetService={selectedServiceForModal}
      />

      {/* Discrete Floating WhatsApp Action (Compact, respects mobile sticky cap) */}
      <a
        href={`https://wa.me/${BARBERSHOP_DATA.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar um horário na Jhosef Barbearia.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#0F172A] border border-ice-light hover:border-ice text-ice shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-semibold">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
