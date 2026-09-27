import React from 'react';
import { BARBERSHOP_DATA } from '../data/barbershop';

export const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: "Combo Corte & Barboterapia",
      subtitle: "Relaxamento profundo com toalha quente",
      image: BARBERSHOP_DATA.bannerCombo,
      aspect: "aspect-[16/9] lg:col-span-2",
      badge: "R$ 25,00"
    },
    {
      title: "Corte & Sobrancelha",
      subtitle: "Degradê e alinhamento geométrico",
      image: BARBERSHOP_DATA.bannerCorteSobrancelha,
      aspect: "aspect-[4/3] lg:col-span-2",
      badge: "R$ 15,00"
    },
    {
      title: "Corte & Barba Tradicional",
      subtitle: "Mestria na tesoura e navalhete",
      image: BARBERSHOP_DATA.bannerCorteBarba,
      aspect: "aspect-[16/9] lg:col-span-2",
      badge: "R$ 15,00"
    },
    {
      title: "Pezinho & Acabamento",
      subtitle: "Linhas nítidas e precisão no contorno",
      image: BARBERSHOP_DATA.bannerPesinho,
      aspect: "aspect-[4/3] lg:col-span-1",
      badge: "R$ 5,00"
    },
    {
      title: "Tabela Oficial",
      subtitle: "Preços claros e atendimento com agendamento",
      image: BARBERSHOP_DATA.priceTableImage,
      aspect: "aspect-[3/4] lg:col-span-1",
      badge: "Preços Oficiais"
    }
  ];

  return (
    <section
      id="galeria"
      className="py-24 md:py-36 px-6 md:px-12 bg-dark-primary border-t border-subtle relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-ice-subtle font-semibold block mb-3">
              03. Portfólio &amp; Banners
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-ice tracking-tight">
              Galeria da Barbearia
            </h2>
          </div>
          <p className="text-sm md:text-base text-ice-muted font-light max-w-md leading-relaxed">
            Veja as fotos reais do nosso trabalho: acabamentos impecáveis, barboterapia de verdade e ambiente feito para você.
          </p>
        </div>

        {/* Asymmetrical Gallery Grid with Real Uploaded Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group bg-dark-surface border border-subtle ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent opacity-90 transition-opacity" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#0F172A]/80 backdrop-blur-sm border border-subtle text-amber-300 text-xs font-semibold">
                {item.badge}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <p className="text-xs tracking-widest uppercase text-ice-muted font-medium mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ice">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
