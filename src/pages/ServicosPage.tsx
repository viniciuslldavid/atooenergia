import React, { useEffect } from 'react';
import { Sun, Home, Building2, Droplet, Gauge, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const ServiceItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  reverse?: boolean;
  index: number;
}> = ({ icon, title, description, benefits, image, reverse = false, index }) => {
  return (
    <div className="py-16 border-b border-gray-200 last:border-0">
      <div className={`container mx-auto px-4`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`animate-on-scroll opacity-0 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                {icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            <p className="text-xl text-gray-600 mb-6">{description}</p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link
              to="/contato"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Solicitar Orçamento
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className={`animate-on-scroll opacity-0 ${reverse ? 'lg:order-1' : ''}`}>
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Serviços | ATO Energia';
    
    const addAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach(el => observer.observe(el));
      
      return () => {
        animatedElements.forEach(el => observer.unobserve(el));
      };
    };
    
    addAnimations();
    
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: 'Energia Solar',
      description: 'Sistemas de energia solar fotovoltaica para residências, comércios e indústrias, reduzindo drasticamente os custos com eletricidade.',
      benefits: [
        'Redução imediata na conta de energia elétrica',
        'Retorno do investimento em médio prazo',
        'Valorização do imóvel',
        'Tecnologia limpa com baixa manutenção',
        'Garantia de 25 anos nos painéis solares'
      ],
      image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-500" />,
      title: 'Soluções Residenciais',
      description: 'Projetos personalizados para residências, melhorando a eficiência energética e reduzindo o consumo sem perder o conforto.',
      benefits: [
        'Projetos sob medida para cada tipo de residência',
        'Diagnóstico completo de consumo energético',
        'Instalação profissional com equipe especializada',
        'Monitoramento remoto do sistema',
        'Suporte técnico permanente'
      ],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-500" />,
      title: 'Soluções Comerciais',
      description: 'Sistemas energéticos otimizados para empresas, reduzindo custos operacionais e aumentando a competitividade do seu negócio.',
      benefits: [
        'Diagnóstico especializado para empresas',
        'Redução significativa de despesas operacionais',
        'Soluções escaláveis que crescem com seu negócio',
        'Melhoria na imagem corporativa sustentável',
        'Aproveitamento de incentivos fiscais'
      ],
      image: 'https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: <Gauge className="w-8 h-8 text-purple-500" />,
      title: 'Comissionamento de Usinas',
      description: 'Executamos todas as etapas finais antes da ativação de usinas solares, garantindo que os sistemas estejam corretamente instalados, testados e prontos para operar com segurança e eficiência.',
      benefits: [
        'Testes de desempenho e segurança elétrica',
        'Validação de componentes e integrações do sistema',
        'Configuração de sistemas de monitoramento remoto',
        'Documentação técnica de entrega e conformidade',
        'Pronto para funcionamento imediato com alta eficiência'
      ],
      image: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_files/62b31950-8c24-4af2-b5ab-79a7ac1e09ff/642d8606-1718-4e33-8285-5500ac1e09ff.jpg'
    },
    {
      icon: <Droplet className="w-8 h-8 text-purple-500" />,
      title: 'Limpeza e manutenção de sistemas fotovoltaicos',
      description: 'Realizamos a limpeza profissional dos módulos solares e manutenção técnica preventiva para manter a performance ideal do sistema e evitar falhas futuras.',
      benefits: [
        'Remoção de sujeira que reduz a eficiência dos painéis',
        'Inspeção de cabos, conexões e estrutura de suporte',
        'Detecção de falhas com termografia e análise técnica',
        'Substituição de componentes danificados ou desgastados',
        'Aumento da vida útil e geração de energia do sistema'
      ],
      image: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_files/62b31950-8c24-4af2-b5ab-79a7ac1e09ff/63235b16-9284-447b-8fa7-1683ac1e0fec.jpg'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluções completas e personalizadas para atender todas as suas necessidades energéticas.
            </p>
          </div>
        </div>
      </div>

      {/* Serviços */}
      <div>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            image={service.image}
            reverse={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>

      <CTASection />
    </div>
  );
};

export default ServicosPage;