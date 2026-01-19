import { Zap, Sun, Gauge, Shield, TrendingUp, Award, CheckCircle, ArrowRight, Thermometer, Camera, Ruler, Target, Activity, Radio } from 'lucide-react';

interface Technology {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight: string;
}

const technologies: Technology[] = [
  {
    icon: <Gauge className="w-12 h-12" />,
    title: 'Alicate Amperímetro Fluke',
    description: 'Utilizado para medir a corrente elétrica do sistema solar sem desligamento, garantindo que placas e inversores estejam gerando energia corretamente.',
    features: [
      'Medição sem interrupção do sistema',
      'Alta precisão nas leituras',
      'Verificação de geração em tempo real',
      'Diagnóstico rápido de performance',
      'Certificação Fluke de qualidade'
    ],
    highlight: 'Medição profissional sem desligamento'
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: 'Câmera Térmica Fluke',
    description: 'Permite identificar aquecimentos anormais em módulos, cabos e inversores, prevenindo perdas de eficiência e falhas no sistema.',
    features: [
      'Detecção de pontos quentes',
      'Prevenção de falhas',
      'Inspeção não invasiva',
      'Imagens térmicas de alta resolução',
      'Identificação de problemas invisíveis'
    ],
    highlight: 'Previne falhas antes que aconteçam'
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: 'Fotocélula (Medição de Irradiância)',
    description: 'Utilizada para medir a radiação solar no momento dos ensaios, garantindo que as condições estejam adequadas para avaliações confiáveis do desempenho.',
    features: [
      'Medição precisa de radiação solar',
      'Validação das condições de teste',
      'Calibração certificada',
      'Dados para análise de performance',
      'Garantia de ensaios confiáveis'
    ],
    highlight: 'Ensaios em condições certificadas'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Luva Isolada',
    description: 'Equipamento de segurança essencial para proteger os técnicos durante inspeções e medições em sistemas solares energizados.',
    features: [
      'Proteção contra choques elétricos',
      'Certificação de segurança',
      'Material isolante de alta qualidade',
      'Conformidade com normas NR-10',
      'Testes periódicos de isolamento'
    ],
    highlight: 'Segurança certificada NR-10'
  },
  {
    icon: <Activity className="w-12 h-12" />,
    title: 'Megômetro',
    description: 'Verifica o isolamento elétrico do sistema solar, identificando possíveis fugas de corrente e garantindo segurança e durabilidade da instalação.',
    features: [
      'Teste de isolamento elétrico',
      'Detecção de fugas de corrente',
      'Garantia de segurança',
      'Prevenção de falhas',
      'Conformidade com normas técnicas'
    ],
    highlight: 'Segurança e durabilidade garantidas'
  },
  {
    icon: <Ruler className="w-12 h-12" />,
    title: 'Microhmímetro',
    description: 'Utilizado para avaliar a qualidade das conexões elétricas, evitando aquecimentos e perdas de energia.',
    features: [
      'Avaliação de conexões elétricas',
      'Prevenção de aquecimentos',
      'Redução de perdas energéticas',
      'Medições de alta precisão',
      'Otimização do sistema'
    ],
    highlight: 'Conexões perfeitas, zero perdas'
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Miliohmímetro',
    description: 'Mede a resistência de contato em cabos e conexões, assegurando eficiência na condução da energia gerada.',
    features: [
      'Medição de resistência de contato',
      'Eficiência na condução',
      'Identificação de conexões defeituosas',
      'Otimização de performance',
      'Alta precisão nas medições'
    ],
    highlight: 'Máxima eficiência de condução'
  },
  {
    icon: <Thermometer className="w-12 h-12" />,
    title: 'Termohigrômetro',
    description: 'Mede temperatura e umidade ambiente, auxiliando na análise do desempenho do sistema solar.',
    features: [
      'Medição de temperatura',
      'Medição de umidade',
      'Análise de condições ambientais',
      'Dados para relatórios técnicos',
      'Calibração certificada'
    ],
    highlight: 'Análise completa das condições ambientais'
  },
  {
    icon: <Radio className="w-12 h-12" />,
    title: 'Terrômetro',
    description: 'Utilizado para verificar a eficiência do aterramento, garantindo proteção contra descargas elétricas.',
    features: [
      'Verificação de aterramento',
      'Proteção contra descargas',
      'Segurança do sistema',
      'Conformidade com normas',
      'Testes periódicos certificados'
    ],
    highlight: 'Proteção total contra descargas'
  },
  {
    icon: <Gauge className="w-12 h-12" />,
    title: 'Torquímetro',
    description: 'Assegura o aperto correto de conexões elétricas e mecânicas, prevenindo falhas e aquecimentos.',
    features: [
      'Aperto certificado de conexões',
      'Prevenção de falhas mecânicas',
      'Evita aquecimentos',
      'Calibração de precisão',
      'Conformidade técnica'
    ],
    highlight: 'Conexões seguras e duráveis'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Equipamento HIPOT (Alta Tensão)',
    description: 'Realiza testes de isolamento sob alta tensão, garantindo conformidade técnica e segurança do sistema solar.',
    features: [
      'Testes de alta tensão',
      'Verificação de isolamento',
      'Conformidade técnica',
      'Segurança certificada',
      'Prevenção de falhas críticas'
    ],
    highlight: 'Testes de isolamento certificados'
  },
  {
    icon: <Activity className="w-12 h-12" />,
    title: 'TTR (Transformer Turns Ratio)',
    description: 'Verifica o funcionamento correto dos transformadores utilizados no sistema solar.',
    features: [
      'Teste de transformadores',
      'Verificação de relação de espiras',
      'Diagnóstico de funcionamento',
      'Prevenção de falhas',
      'Conformidade técnica'
    ],
    highlight: 'Transformadores operando perfeitamente'
  },
  {
    icon: <Activity className="w-12 h-12" />,
    title: 'Traçador de Curva IV',
    description: 'Avalia o desempenho real das placas solares, identificando falhas, sombreamento ou degradação.',
    features: [
      'Análise de curva IV completa',
      'Identificação de falhas',
      'Detecção de sombreamento',
      'Avaliação de degradação',
      'Relatórios técnicos detalhados'
    ],
    highlight: 'Diagnóstico preciso de performance'
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: 'Drone Termográfico DJI Mavic 3T',
    description: 'Utilizado para inspeções aéreas com imagens térmicas, identificando falhas em módulos e strings de forma rápida e segura.',
    features: [
      'Inspeção aérea termográfica',
      'Imagens de alta resolução',
      'Identificação rápida de falhas',
      'Segurança na inspeção',
      'Cobertura de grandes áreas'
    ],
    highlight: 'Inspeção aérea de última geração'
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
    value: '14+',
    label: 'Equipamentos de Precisão'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: '100%',
    label: 'Segurança Certificada'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: '99.9%',
    label: 'Precisão nas Medições'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 'Fluke',
    label: 'Equipamentos Premium'
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
              <Gauge className="w-5 h-5 text-[#ffed00]" />
              <span className="text-[#ffed00] font-bold text-sm uppercase tracking-wide">Equipamentos de Precisão</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Tecnologias Aplicadas
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Utilizamos os equipamentos mais avançados para medição, inspeção e análise de sistemas de energia solar, garantindo máxima precisão e segurança.
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
            Equipamentos de Medição e Inspeção
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada equipamento é utilizado para garantir a máxima performance, segurança e durabilidade do seu sistema de energia solar.
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
                  <span className="text-[#ffed00] font-bold text-sm uppercase tracking-wide">Equipamentos Profissionais</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Pronto para uma Inspeção Profissional?
                </h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  Entre em contato e descubra como nossos equipamentos de última geração podem garantir máxima performance do seu sistema solar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 bg-[#ffed00] hover:bg-[#ffd700] text-[#1c355f] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Solicitar Inspeção
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
                  >
                    Ver Serviços
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
