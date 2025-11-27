import { Home, Building2, Sprout, Zap, ArrowRight, Lightbulb, TrendingUp, Shield, Leaf } from 'lucide-react';
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
  accentColor: 'blue' | 'yellow';
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
    accentColor: 'blue',
    stat: '15.000+',
    statLabel: 'Casas Alimentadas'
  },
  {
    id: 'comercial',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Comercial',
    subtitle: 'Reduce custos e impulsione seu negócio',
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
    accentColor: 'yellow',
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
    accentColor: 'blue',
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
    accentColor: 'yellow',
    stat: '50MW+',
    statLabel: 'Potência Instalada'
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="mb-24 last:mb-0">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven && 'lg:grid-cols-2'}`}>

        <div className={`relative group overflow-hidden rounded-3xl shadow-2xl ${!isEven && 'lg:order-2'}`}>
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className={`${!isEven && 'lg:order-1'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
              service.accentColor === 'blue'
                ? 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600'
                : 'bg-gradient-to-br from-yellow-100 to-yellow-50 text-yellow-600'
            }`}>
              {service.icon}
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {service.title}
              </h2>
              <p className={`text-sm font-semibold ${
                service.accentColor === 'blue' ? 'text-blue-600' : 'text-yellow-600'
              }`}>
                {service.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className={`mb-8 p-6 rounded-2xl ${
            service.accentColor === 'blue'
              ? 'bg-blue-50 border border-blue-100'
              : 'bg-yellow-50 border border-yellow-100'
          }`}>
            <p className={`text-3xl font-bold ${
              service.accentColor === 'blue' ? 'text-blue-600' : 'text-yellow-600'
            }`}>
              {service.stat}
            </p>
            <p className="text-gray-600 font-medium">{service.statLabel}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className={`w-5 h-5 ${
                  service.accentColor === 'blue' ? 'text-blue-600' : 'text-yellow-600'
                }`} />
                <h3 className="text-lg font-bold text-gray-900">Características</h3>
              </div>
              <ul className="space-y-3">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      service.accentColor === 'blue' ? 'bg-blue-600' : 'bg-yellow-600'
                    }`}></span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className={`w-5 h-5 ${
                  service.accentColor === 'blue' ? 'text-blue-600' : 'text-yellow-600'
                }`} />
                <h3 className="text-lg font-bold text-gray-900">Benefícios</h3>
              </div>
              <ul className="space-y-3">
                {service.benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      service.accentColor === 'blue' ? 'bg-blue-600' : 'bg-yellow-600'
                    }`}></span>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to={`/servicos/${service.id}`}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 ${
              service.accentColor === 'blue'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900'
            }`}
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
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Oferecemos soluções completas em energia solar para cada necessidade, desde residências até grandes usinas comerciais.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">Transformação Sustentável</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Pronto para Começar sua Jornada Solar?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Nossos especialistas estão prontos para analisar sua situação e criar uma solução personalizada com máximo potencial de economia e sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-32 h-32 text-yellow-300 opacity-30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
