import React, { useEffect } from 'react';
import { CheckCircle, Users, Award, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Leaf } from 'lucide-react';

import wesley from '../assets/images/equipe/wesley.png';
import joaoluiz from '../assets/images/equipe/joaoluiz.png';
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
      role: 'CEO & Fundador',
      image: wesley,
      description: 'experiência (vou colocar ainda)'
    },
    {
      name: 'Joao Luiz Segatto',
      role: 'CEO & Fundador',
      image: joaoluiz,
      description: 'experiência (vou colocar ainda)'
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a ATO Energia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Acreditamos no poder transformador da energia sustentável para criar um futuro melhor para todos.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900"
              >
                Fale Conosco
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Nossa História */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="História da ATO Energia"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Ato Energia Solar, localizada na Avenida Belarmino Cotta Pacheco, 411, Santa Mônica, Uberlândia, MG, é uma referência
                em soluções de energia solar na região. Desde a sua fundação, a empresa tem se dedicado a oferecer alternativas
                sustentáveis e eficientes para residências, comércios e áreas rurais. Com uma equipe especializada e experiente,
                a Ato Energia Solar combina inovação e qualidade para atender às necessidades de seus clientes, desde a instalação
                até a manutenção dos sistemas.
              </p>
              <p className="text-gray-600 mb-4">
                A Ato Energia Solar oferece uma ampla gama de serviços, incluindo energia solar residencial, energia solar comercial,
                energia solar off grid, energia solar on grid, e usinas solares. Também realizamos limpeza de painéis solares para
                garantir o desempenho ideal dos sistemas. Nosso compromisso é proporcionar soluções personalizadas e de alta
                eficiência, refletindo nossos valores de confiança, inovação e respeito ao meio ambiente.
              </p>
              <ul className="space-y-3">
                {[
                  'Geração da própria energia limpa',
                  'Redução significante com contas de energia',
                  'Retorno rápido do investimento',
                  'Alta durabilidade dos equipamentos',
                  'Valorização do imóvel',
                  'Benefícios dos seus serviços'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Missão e Visão */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Missão e Visão
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Os princípios que guiam nossas ações e decisões todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 animate-on-scroll opacity-0 transition-all duration-700 ease-out">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                <strong className="text-blue-600">Comprometimento e inovação</strong> Nosso compromisso é compreender, atender e superar suas necessidades, construindo relações duradouras baseadas em confiança e excelência. <br /><br />
                <strong className="text-blue-600">Profissionais capacitados</strong> Especialistas dedicados ao aprendizado contínuo, resolvendo problemas criativamente e garantindo resultados de alta qualidade. <br /><br />
                <strong className="text-blue-600">Qualidade</strong> Superamos expectativas com padrões de excelência, oferecendo produtos e serviços confiáveis para fortalecer nossa reputação. <br /><br />
                <strong className="text-blue-600">Satisfação do cliente</strong> Prioridade máxima, com soluções personalizadas e processos ajustados às suas necessidades.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 animate-on-scroll opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: '200ms' }}>
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Se tornar uma empresa referência no mercado solar no Brasil no que se trata de qualidade de usinas fotovoltaicas. Buscamos ser reconhecidos como referência na qualificação de usinas fotovoltaicas, impulsionando o setor no nosso país. Nossa meta é ampliar nossa presença no setor, aprimorar constantemente nossa tecnologia e estabelecer parcerias estratégicas que nos permitam alcançar um futuro onde a energia limpa e renovável seja uma realidade para todos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LocationsMapSection />
      </div>
      {/* Equipe */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Conheça os profissionais dedicados a transformar o futuro energético do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll opacity-0 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>


            ))}

          </div>
        </div>
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
};

export default SobreNosPage;