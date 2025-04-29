import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, BarChart2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import fundo1 from '../assets/images/background/fundo1.png';
import fundo2 from '../assets/images/background/fundo2.png';


const backgroundImages = [
  fundo1,
  fundo2
];

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // troca a cada 7s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* Imagens de fundo */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000`}
            style={{
              backgroundImage: `url(${url})`,
              opacity: index === bgIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              Transformando o <span className="text-blue-300">futuro energético</span> do Brasil
            </h1>
            <p className="text-xl leading-relaxed max-w-xl drop-shadow-md">
              Soluções energéticas inteligentes e sustentáveis para residências e empresas. 
              Economize até 30% nos seus custos com energia.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Conheça Nossos Serviços
                <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-800 py-3 px-6 rounded-lg font-medium transition-all duration-200"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Economia", description: "Reduza sua conta de energia em até 30%" },
                  { icon: <BarChart2 className="h-8 w-8 text-green-400" />, title: "Sustentabilidade", description: "Energia limpa e renovável para o planeta" },
                  { icon: <DollarSign className="h-8 w-8 text-blue-400" />, title: "Investimento", description: "Retorno garantido em médio prazo" },
                  { icon: <ArrowRight className="h-8 w-8 text-purple-400" />, title: "Futuro", description: "Tecnologia de ponta para sua energia" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                    <div className="flex flex-col space-y-3">
                      <div className="p-2 bg-blue-800/40 rounded-lg w-fit">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-blue-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-teal-400 px-6 py-3 rounded-lg shadow-lg">
              <p className="text-white font-medium text-sm">Mais de 100+ clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
