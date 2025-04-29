import React, { useEffect, useRef } from 'react';
import { Sun, Home, Building2, ArrowUpRight, Gauge, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group animate-on-scroll opacity-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/servicos" 
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
      >
        Saiba mais
        <ArrowUpRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => {
              el.classList.add('animate-fade-in');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: 'Energia Solar',
      description: 'Instalação e manutenção de painéis solares para residências e empresas com garantia de 25 anos.'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-500" />,
      title: 'Residencial',
      description: 'Soluções personalizadas para reduzir o consumo e otimizar a eficiência energética da sua casa.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-500" />,
      title: 'Comercial',
      description: 'Reduza seus custos operacionais e aumente a competitividade do seu negócio com nossas soluções.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-purple-500" />,
      title: 'Comissionamento de Usinas',
      description: 'Realizamos testes e calibrações técnicas para garantir que sua usina solar opere com segurança, eficiência e dentro dos parâmetros projetados.'
    },
    {
      icon: <Droplet className="w-8 h-8 text-purple-500" />,
      title: 'Limpeza e manutenção de sistemas fotovoltaicos',
      description: 'Oferecemos serviços especializados de limpeza e manutenção preventiva para garantir a performance ideal dos seus sistemas solares.'
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Soluções Energéticas
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Oferecemos um conjunto completo de serviços em energia para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;