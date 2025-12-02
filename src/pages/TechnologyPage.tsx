import { Zap, Sun, Battery, Cpu, Shield, TrendingUp, Award, CheckCircle, ArrowRight, Gauge, Wifi, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Technology {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight: string;
}

const technologies: Technology[] = [
  {
    icon: <Sun className="w-12 h-12" />,
    title: 'Painéis Fotovoltaicos de Alta Eficiência',
    description: 'Utilizamos apenas painéis solares de última geração com células PERC e Half-Cell, garantindo máxima conversão de energia solar.',
    features: [
      'Eficiência superior a 21%',
      'Tecnologia PERC (Passivated Emitter Rear Cell)',
      'Células Half-Cell para redução de perdas',
      'Resistência a condições climáticas extremas',
      'Degradação anual inferior a 0.5%'
    ],
    highlight: 'Garantia de 25 anos com 85% de eficiência'
  },
  {
    icon: <Battery className="w-12 h-12" />,
    title: 'Inversores Inteligentes',
    description: 'Inversores de última geração com tecnologia MPPT avançada para otimização contínua da geração de energia.',
    features: [
      'Tecnologia MPPT de duplo rastreamento',
      'Eficiência de conversão acima de 98%',
      'Monitoramento em tempo real via Wi-Fi',
      'Proteção contra sobretensão e curto-circuito',
      'Compatível com baterias e sistemas híbridos'
    ],
    highlight: 'Garantia de 10 anos extensível a 20 anos'
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: 'Sistema de Monitoramento Inteligente',
    description: 'Plataforma completa de monitoramento com inteligência artificial para análise preditiva e otimização automática.',
    features: [
      'Dashboard intuitivo mobile e web',
      'Alertas em tempo real de performance',
      'Análise preditiva com IA',
      'Relatórios detalhados de geração',
      'Comparação de consumo e economia'
    ],
    highlight: 'Acesso 24/7 de qualquer dispositivo'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Estruturas de Fixação Premium',
    description: 'Estruturas robustas em alumínio aeronáutico e aço galvanizado, projetadas para suportar ventos de até 150 km/h.',
    features: [
      'Alumínio aeronáutico e aço galvanizado',
      'Sistema anti-corrosão avançado',
      'Certificação para ventos de até 150 km/h',
      'Instalação sem perfuração do telhado',
      'Adaptável a qualquer tipo de cobertura'
    ],
    highlight: 'Certificado para todas as normas brasileiras'
  },
  {
    icon: <Wifi className="w-12 h-12" />,
    title: 'Conectividade IoT',
    description: 'Integração total com Internet das Coisas para automação residencial e gestão energética inteligente.',
    features: [
      'Integração com automação residencial',
      'Controle via assistentes de voz',
      'API aberta para integrações customizadas',
      'Armazenamento em nuvem seguro',
      'Sincronização multi-dispositivos'
    ],
    highlight: 'Compatível com Alexa, Google Home e Apple HomeKit'
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Armazenamento em Baterias',
    description: 'Sistemas de armazenamento de energia com baterias de íon-lítio para independência energética total.',
    features: [
      'Baterias de íon-lítio de alta capacidade',
      'Ciclos de carga superior a 6.000',
      'Gerenciamento inteligente de carga',
      'Backup automático em quedas de energia',
      'Expansão modular conforme necessidade'
    ],
    highlight: 'Autonomia de até 3 dias sem sol'
  }
];

const certifications = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ISO 9001',
    description: 'Gestão de Qualidade'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'INMETRO',
    description: 'Certificação Nacional'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'IEC 61215',
    description: 'Padrão Internacional'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ABNT NBR',
    description: 'Normas Brasileiras'
  }
];

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '98.5%',
    label: 'Eficiência Média dos Sistemas'
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    value: '25+',
    label: 'Anos de Garantia'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: '99.2%',
    label: 'Uptime dos Sistemas'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: '100%',
    label: 'Certificações Atendidas'
  }
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#1c355f] via-[#1c355f] to-[#1c355f]/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#ffed00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffed00] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#ffed00]/20 backdrop-blur-sm border border-[#ffed00]/30 rounded-full px-6 py-3 mb-8">
              <Cpu className="w-5 h-5 text-[#ffed00]" />
              <span className="text-[#ffed00] font-bold text-sm uppercase tracking-wide">Inovação e Excelência</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Nossa Tecnologia
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Trabalhamos com os equipamentos mais avançados do mercado, garantindo máxima eficiência, durabilidade e retorno sobre o investimento.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffed00] to-[#ffd700] text-[#1c355f] mb-4 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#1c355f] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c355f] mb-6">
            Tecnologias de Ponta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada componente é cuidadosamente selecionado para garantir a melhor performance e durabilidade do seu sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#ffed00]"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ffed00] to-[#ffd700] flex items-center justify-center text-[#1c355f] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1c355f] mb-4">
                {tech.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {tech.description}
              </p>

              <div className="bg-[#1c355f] rounded-xl p-4 mb-6">
                <p className="text-[#ffed00] font-bold text-sm">
                  {tech.highlight}
                </p>
              </div>

              <ul className="space-y-3">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ffed00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c355f] mb-6">
              Certificações e Qualidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos os nossos equipamentos possuem as principais certificações nacionais e internacionais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#ffed00]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#ffed00] to-[#ffd700] text-[#1c355f] mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1c355f] mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1c355f] to-[#1c355f]/90 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffed00] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-[#ffed00]" />
                  <span className="text-[#ffed00] font-bold text-sm uppercase tracking-wide">Tecnologia de Ponta</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Pronto para Ter a Melhor Tecnologia Solar?
                </h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  Entre em contato e descubra como nossas soluções tecnológicas podem transformar seu consumo de energia.
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
                    to="/servicos"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
                  >
                    Ver Serviços
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
