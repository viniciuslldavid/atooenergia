import { Home, Building2, Sprout, Zap, ArrowRight, Lightbulb, TrendingUp, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  imageUrl: string;
  stat: string;
  statLabel: string;
}

const services: Service[] = [
  {
    id: 'residencial',
    icon: <Home className="w-8 h-8" />,
    title: 'Residencial',
    subtitle: 'Economia e sustentabilidade para sua casa',
    description: 'Transforme sua residência em um gerador de energia limpa. Nossos sistemas residenciais são dimensionados para maximizar a economia na sua conta de luz, com a tecnologia mais avançada do mercado.',
    features: [
      'Sistemas fotovoltaicos personalizados',
      'Redução de até 95% na conta de luz',
      'Instalação profissional e segura',
      'Garantia de 25 anos nos painéis',
      'App de monitoramento em tempo real',
      'Suporte técnico vitalício'
    ],
    benefits: [
      'Economia imediata na conta de energia',
      'Valorização do imóvel até 5%',
      'Sustentabilidade ambiental',
      'Proteção contra aumentos na tarifa',
      'Energia limpa para sua família'
    ],
    imageUrl: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stat: '15.000+',
    statLabel: 'Casas Alimentadas'
  },
  {
    id: 'comercial',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Comercial',
    subtitle: 'Reduza custos e impulsione seu negócio',
    description: 'Reduza custos operacionais e aumente a competitividade. Projetos escaláveis especificamente desenvolvidos para empresas, com retorno garantido e máximo controle operacional.',
    features: [
      'Projetos escaláveis para qualquer porte',
      'ROI de 3 a 5 anos comprovado',
      'Monitoramento avançado 24/7',
      'Suporte técnico especializado',
      'Manutenção preventiva incluída',
      'Relatórios detalhados mensais'
    ],
    benefits: [
      'Redução de 60-80% nos custos de energia',
      'Previsibilidade financeira de longo prazo',
      'Imagem sustentável e moderna',
      'Incentivos fiscais e financiamentos',
      'Diferencial competitivo no mercado'
    ],
    imageUrl: 'https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stat: '500+',
    statLabel: 'Empresas Parceiras'
  },
  {
    id: 'agro',
    icon: <Sprout className="w-8 h-8" />,
    title: 'Agro',
    subtitle: 'Potencialize a produção sustentável',
    description: 'Energize seu agronegócio com soluções solares robustas. Ideal para irrigação, bombeamento, armazenagem e processamento agrícola com máxima confiabilidade.',
    features: [
      'Sistemas para irrigação e bombeamento',
      'Soluções para armazenagem de grãos',
      'Energia para processamento agrícola',
      'Dimensionamento para alta demanda',
      'Resistência a condições climáticas extremas',
      'Compatível com máquinas agrícolas modernas'
    ],
    benefits: [
      'Redução de 70% nos custos de produção',
      'Independência energética total',
      'Operação sustentável e verde',
      'Aumento de produtividade',
      'Compliance com normas ambientais'
    ],
    imageUrl: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stat: '250+',
    statLabel: 'Propriedades Rurais'
  },
  {
    id: 'usinas',
    icon: <Zap className="w-8 h-8" />,
    title: 'Usinas',
    subtitle: 'Projetos de grande impacto energético',
    description: 'Desenvolva usinas solares de grande escala com nossa expertise em comissionamento técnico, testes rigorosos e operação otimizada para máxima geração.',
    features: [
      'Projetos de grande porte (10MW+)',
      'Comissionamento técnico completo',
      'Testes e calibrações rigorosas',
      'Certificação de performance',
      'Relatórios detalhados de operação',
      'Garantia de uptime 99.5%'
    ],
    benefits: [
      'Geração em larga escala',
      'Máxima eficiência energética',
      'Conformidade técnica garantida',
      'ROI otimizado e previsível',
      'Impacto ambiental positivo'
    ],
    imageUrl: 'https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stat: '50MW+',
    statLabel: 'Potência Instalada'
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="mb-32 last:mb-0">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven && 'lg:grid-cols-2'}`}>

        <div className={`relative group overflow-hidden rounded-3xl shadow-2xl ${!isEven && 'lg:order-2'}`}>
          <div className="absolute inset-0 bg-[#1c355f] opacity-10 z-10"></div>
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355f]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
        </div>

        <div className={`${!isEven && 'lg:order-1'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 bg-gradient-to-br from-[#ffed00] to-[#ffd700] text-[#1c355f]">
              {service.icon}
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1c355f]">
                {service.title}
              </h2>
              <p className="text-sm font-semibold text-[#1c355f]/70 mt-1">
                {service.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            {service.description}
          </p>

          <div className="mb-10 p-8 rounded-2xl bg-[#1c355f] shadow-xl">
            <p className="text-4xl font-bold text-[#ffed00]">
              {service.stat}
            </p>
            <p className="text-white/90 font-medium mt-1">{service.statLabel}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#ffed00] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[#1c355f]" />
                </div>
                <h3 className="text-lg font-bold text-[#1c355f]">Características</h3>
              </div>
              <ul className="space-y-3">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#ffed00]"></span>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#ffed00] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#1c355f]" />
                </div>
                <h3 className="text-lg font-bold text-[#1c355f]">Benefícios</h3>
              </div>
              <ul className="space-y-3">
                {service.benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#ffed00]"></span>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to={`/servicos/${service.id}`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-[#1c355f] to-[#1c355f]/90 hover:from-[#1c355f]/90 hover:to-[#1c355f] text-white border-2 border-[#ffed00]"
          >
            Explorar Serviço
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#1c355f] to-[#1c355f]/90 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffed00] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-[#ffed00]" />
                <span className="text-[#ffed00] font-bold text-sm uppercase tracking-wide">Transformação Sustentável</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto para Começar sua Jornada Solar?
              </h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                Nossos especialistas estão prontos para analisar sua situação e criar uma solução personalizada com máximo potencial de economia e sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-[#ffed00] hover:bg-[#ffd700] text-[#1c355f] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-[#ffed00] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-[#ffed00] rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-40 h-40 text-[#ffed00] opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
