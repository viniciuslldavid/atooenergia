import React, { useEffect } from 'react';
import { CheckCircle, Users, Clock, ChevronRight, Target, Heart, Lightbulb, Shield, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import LocationsMapSection from '../components/LocationsMapSection';

const SobreNosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sobre Nós | ATO Energia';

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

  const teamMembers = [
    {
      name: 'Wesley Santiago',
      role: 'CTO & Cofundador',
      image: '0',
      description: ''
    },
    {
      name: 'João Luiz Segatto',
      role: 'CEO & Cofundador',
      image: '',
      description: ''
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Transparência e compromisso em cada projeto, construindo relações duradouras com nossos clientes.',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Tecnologia de ponta e soluções criativas para maximizar eficiência energética e sustentabilidade.',
      color: 'yellow'
    },
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total à excelência, desde o planejamento até a entrega e acompanhamento pós-instalação.',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'Sustentabilidade',
      description: 'Impacto positivo no meio ambiente através de energia limpa e renovável para um futuro melhor.',
      color: 'emerald'
    }
  ];

  const benefits = [
    'Geração da própria energia limpa',
    'Redução significante com contas de energia',
    'Retorno rápido do investimento',
    'Alta durabilidade dos equipamentos',
    'Valorização do imóvel',
    'Benefícios dos seus serviços'
  ];

  return (
    <div className="bg-white">

      <section id="historia" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll opacity-0 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="História da ATO Energia"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-semibold">Nossa História</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quem Somos
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mb-6"></div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-gray-900">ATO Energia Solar</strong>, localizada na Avenida Belarmino Cotta Pacheco, 411, Santa Mônica, Uberlândia, MG, é uma referência em soluções de energia solar na região. Desde a nossa fundação, nos dedicamos a oferecer alternativas sustentáveis e eficientes para residências, comércios e áreas rurais.
                </p>

                <p>
                  Com uma equipe especializada e experiente, combinamos <strong className="text-gray-900">inovação e qualidade</strong> para atender às necessidades de nossos clientes, desde a instalação até a manutenção dos sistemas.
                </p>

                <p>
                  Oferecemos uma ampla gama de serviços, incluindo energia solar residencial, comercial, off grid, on grid e usinas solares. Também realizamos limpeza de painéis solares para garantir o desempenho ideal dos sistemas.
                </p>
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Por que escolher a ATO Energia?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Nossos Princípios</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>

            <p className="text-lg text-gray-600">
              Os princípios que guiam nossas ações e decisões todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-on-scroll opacity-0 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>

              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Comprometimento e Inovação</h4>
                  <p>Nosso compromisso é compreender, atender e superar suas necessidades, construindo relações duradouras baseadas em confiança e excelência.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Profissionais Capacitados</h4>
                  <p>Especialistas dedicados ao aprendizado contínuo, resolvendo problemas criativamente e garantindo resultados de alta qualidade.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Qualidade</h4>
                  <p>Superamos expectativas com padrões de excelência, oferecendo produtos e serviços confiáveis para fortalecer nossa reputação.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Satisfação do Cliente</h4>
                  <p>Prioridade máxima, com soluções personalizadas e processos ajustados às suas necessidades.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 animate-on-scroll opacity-0 border border-gray-100 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>

              <p className="text-gray-600 leading-relaxed">
                Se tornar uma empresa <strong className="text-gray-900">referência no mercado solar no Brasil</strong> no que se trata de qualidade de usinas fotovoltaicas. Buscamos ser reconhecidos como referência na qualificação de usinas fotovoltaicas, impulsionando o setor no nosso país.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4">
                Nossa meta é ampliar nossa presença no setor, aprimorar constantemente nossa tecnologia e estabelecer parcerias estratégicas que nos permitam alcançar um futuro onde a <strong className="text-gray-900">energia limpa e renovável</strong> seja uma realidade para todos.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nossos Valores</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                const colorClasses = {
                  blue: 'from-blue-500 to-blue-600',
                  yellow: 'from-yellow-500 to-yellow-600',
                  green: 'from-green-500 to-green-600',
                  emerald: 'from-emerald-500 to-emerald-600'
                };

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 animate-on-scroll opacity-0 border border-gray-100 hover:shadow-lg transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${colorClasses[value.color as keyof typeof colorClasses]} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                  <span className="text-white text-sm font-semibold">Credibilidade e Reconhecimento</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Única Empresa de Energia Solar de Uberlândia Associada à ABSolar
                </h2>

                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Nossa associação à ABSolar reforça nosso compromisso com a <strong className="text-white">legitimidade, transparência e conformidade técnica</strong> com os padrões nacionais do setor de energia solar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://absolar.org.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl"
                  >
                    Conheça a ABSolar
                    <ChevronRight size={20} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationsMapSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Conheça Nosso Time</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>

            <p className="text-lg text-gray-600">
              Conheça os profissionais dedicados a transformar o futuro energético do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden animate-on-scroll opacity-0 border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Única Empresa de Energia Solar de Uberlândia Associada à ABSolar
            </h2>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Nossa associação à ABSolar reforça nosso compromisso com a legitimidade e conformidade técnica com os padrões nacionais do setor.
            </p>

            <a
              href="https://absolar.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Conheça a ABSolar
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>



      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SobreNosPage;
