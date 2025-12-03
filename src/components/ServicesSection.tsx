import React from 'react';
import { Home, Building2, Sprout, Zap, ArrowRight } from 'lucide-react';
import HarmonyBackground from './HarmonyBackground';

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  stat: string;
  statLabel: string;
  color: string;
}

function ServicesSection() {
  const services: ServiceCard[] = [
    {
      id: 'residencial',
      icon: <Home className="w-8 h-8" />,
      title: 'Residencial',
      subtitle: 'Economia e sustentabilidade para sua casa',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stat: '15.000+',
      statLabel: 'Casas Alimentadas',
      color: 'from-blue-500',
    },
    {
      id: 'comercial',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Comercial',
      subtitle: 'Reduza custos e impulsione seu negócio',
      image: 'https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stat: '500+',
      statLabel: 'Empresas Parceiras',
      color: 'from-green-500',
    },
    {
      id: 'agro',
      icon: <Sprout className="w-8 h-8" />,
      title: 'Agro',
      subtitle: 'Potencialize a produção sustentável',
      image: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stat: '250+',
      statLabel: 'Propriedades Rurais',
      color: 'from-yellow-500',
    },
    {
      id: 'usinas',
      icon: <Zap className="w-8 h-8" />,
      title: 'Usinas',
      subtitle: 'Projetos de grande impacto energético',
      image: 'https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stat: '50MW+',
      statLabel: 'Potência Instalada',
      color: 'from-orange-500',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1c2f58] to-[#40959b] text-white py-20">
      <HarmonyBackground variant="secondary" />

      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-80 z-20">
        <img
          src="https://res.cloudinary.com/duzbjndww/image/upload/v1764573566/20251201_0417_Bolinhas_Amarelas_Vibrantes_remix_01kbcc9q2xfsw8k5t0tszzr3n8-removebg-preview_exfdmi.png"
          alt="Decorative"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Nossos Serviços</h2>
          <p className="text-white/70 text-lg">Soluções de energia solar para todos os segmentos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {services.map((service) => (
            <a
              key={service.id}
              href={`/servicos/${service.id}`}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ffed00] flex items-center justify-center text-[#1c2f58]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-xs text-white/70">{service.subtitle}</p>
                  </div>
                </div>
                <div className="mb-4 p-4 rounded-lg bg-white/5">
                  <p className="text-2xl font-bold text-[#ffed00]">{service.stat}</p>
                  <p className="text-xs text-white/80 mt-1">{service.statLabel}</p>
                </div>
                <div className="flex items-center gap-2 text-[#ffed00] font-semibold text-sm group-hover:gap-3 transition-all">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/servicos"
            className="inline-flex items-center gap-3 bg-white text-[#1c2f58] px-8 py-4 rounded-full font-bold text-base hover:bg-[#ffed00] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Ver Todos os Serviços
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
