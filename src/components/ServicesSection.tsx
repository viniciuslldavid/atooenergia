import React, { useEffect, useRef } from 'react';
import { Home, Building2, ArrowUpRight, Gauge, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.ts'; // Importando os dados de projects.ts

interface ServiceExample {
  title: string;
  imageUrl: string;
  linkTo: string;
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  examples: ServiceExample[];
}

interface ServiceCardProps {
  service: ServiceItemProps;
  delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  return (
    <div
      className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-8 group animate-on-scroll opacity-0 mb-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Main Service Image */}
        <div className="lg:w-1/3">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-72 lg:h-64 rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Service Content */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
            {service.icon}
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed flex-1">{service.description}</p>

          {/* Service Examples */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Exemplos de Projetos Realizados:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.examples.map((example, index) => (
                <Link
                  key={index}
                  to={example.linkTo}
                  className="group/example relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={example.imageUrl}
                    alt={example.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover/example:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/example:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover/example:translate-y-0 transition-transform duration-300">
                    <h5 className="font-semibold text-lg">{example.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Service Link */}
          <Link
            to={service.linkTo}
            className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors w-fit group-hover:translate-x-2 transition-transform duration-300"
          >
            Ver Todos os Serviços
            <ArrowUpRight
              size={20}
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Substituindo os dados de exemplo com os dados do arquivo projects.ts
export const services: ServiceItemProps[] = [
  {
    icon: <Home className="w-10 h-10 text-blue-500" />,
    title: 'Residencial',
    description:
      'Soluções personalizadas para reduzir o consumo e otimizar a eficiência energética da sua casa. Sistemas solares fotovoltaicos dimensionados especificamente para o seu perfil de consumo, com tecnologia de ponta e garantia de performance.',
    imageUrl: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkTo: '/servicos/residencial',
    examples: projects
      .filter(project => project.category === 'residencial') // Filtra pela categoria 'residencial'
      .filter(project => project.id === 1 || project.id === 2) // Filtra pelos IDs específicos
      .map(project => ({
        title: project.title,
        imageUrl: project.imageUrl,
        linkTo: `/projetos/${project.slug}`,
      }))
  },
  {
    icon: <Building2 className="w-10 h-10 text-green-500" />,
    title: 'Comercial',
    description:
      'Reduza seus custos operacionais e aumente a competitividade do seu negócio com nossas soluções energéticas. Projetos escaláveis para empresas de todos os portes, com sistemas de monitoramento avançado e máximo retorno sobre investimento.',
    imageUrl: 'https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkTo: '/servicos/comercial',
    examples: projects
      .filter(project => project.category === 'comercial') // Filtra pela categoria 'comercial'
      .filter(project => project.id === 3 || project.id === 4) // Filtra pelos IDs específicos
      .map(project => ({
        title: project.title,
        imageUrl: project.imageUrl,
        linkTo: `/projetos/${project.slug}`,
      }))
  },
  {
    icon: <Gauge className="w-10 h-10 text-purple-500" />,
    title: 'Comissionamento de Usinas',
    description:
      'Realizamos testes e calibrações técnicas para garantir que sua usina solar opere com segurança, eficiência e dentro dos parâmetros projetados. Certificação completa do sistema com relatórios detalhados de performance e conformidade técnica.',
    imageUrl: 'https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkTo: '/servicos/comissionamentousinas',
    examples: projects
      .filter(project => project.category === 'comissionamento') // Filtra pela categoria 'comissionamento'
      .filter(project => project.id === 5 || project.id === 6) // Filtra pelos IDs específicos
      .map(project => ({
        title: project.title,
        imageUrl: project.imageUrl,
        linkTo: `/projetos/${project.slug}`,
      }))
  },
  {
    icon: <Droplet className="w-10 h-10 text-cyan-500" />,
    title: 'Limpeza e Manutenção',
    description:
      'Serviços especializados de limpeza e manutenção preventiva para garantir a performance ideal dos sistemas solares. Mantenha sua eficiência energética sempre no máximo com nossa equipe técnica especializada e equipamentos de última geração.',
    imageUrl: 'https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkTo: '/servicos/maintenanceservicePage',
    examples: projects
      .filter(project => project.category === 'limpezaemanutencao') // Filtra pela categoria 'limpezaemanutencao'
      .filter(project => project.id === 7 || project.id === 8) // Filtra pelos IDs específicos
      .map(project => ({
        title: project.title,
        imageUrl: project.imageUrl,
        linkTo: `/projetos/${project.slug}`,
      }))
  },
];

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

  return (
    <div ref={sectionRef} className="py-8 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-1 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 m b-3">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Oferecemos um conjunto completo de serviços em energia solar para atender às suas necessidades específicas.
            Desde instalações residenciais até grandes projetos comerciais e industriais, nossa equipe especializada
            garante soluções eficientes e sustentáveis para cada tipo de cliente.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
