import React, { useEffect, useRef } from 'react';
import { Home, Building2, ArrowUpRight, Gauge, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import painelresidencial from '../assets/images/servicos/painelresidencial.png';
import painelcomercial from '../assets/images/servicos/painelcomercial.png';
import comissionamento from '../assets/images/servicos/comissionamento.png';
import limpezapainel from '../assets/images/servicos/limpezapainel.jpg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  imageUrl: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay,
  imageUrl,
  linkTo,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group animate-on-scroll opacity-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`w-full h-56 rounded-xl mb-5 ${
          title === 'Comercial' ? 'object-cover scale-[0.97]' : 'object-cover'
        }`}
      />
      <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
      >
        Veja nossos serviços.
        <ArrowUpRight
          size={16}
          className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
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
      icon: <Home className="w-8 h-8 text-blue-500" />,
      title: 'Residencial',
      description:
        'Soluções personalizadas para reduzir o consumo e otimizar a eficiência energética da sua casa.',
      imageUrl: painelresidencial,
      linkTo: '/servicos/residencial',
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-500" />,
      title: 'Comercial',
      description:
        'Reduza seus custos operacionais e aumente a competitividade do seu negócio com nossas soluções.',
      imageUrl: painelcomercial,
      linkTo: '/servicos/comercial',
    },
    {
      icon: <Gauge className="w-8 h-8 text-purple-500" />,
      title: 'Comissionamento de Usinas',
      description:
        'Realizamos testes e calibrações técnicas para garantir que sua usina solar opere com segurança, eficiência e dentro dos parâmetros projetados.',
      imageUrl: comissionamento,
      linkTo: '/servicos/comissionamentousinas',
    },
    {
      icon: <Droplet className="w-8 h-8 text-purple-500" />,
      title: 'Limpeza e manutenção',
      description:
        'Serviços especializados de limpeza e manutenção preventiva para garantir a performance ideal dos sistemas solares.',
      imageUrl: limpezapainel,
      linkTo: '/servicos/maintenanceservicePage',
    },
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
              imageUrl={service.imageUrl}
              linkTo={service.linkTo}
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
