import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, BarChart2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const backgroundImages = [
  'https://res.cloudinary.com/dlthukrz8/image/upload/v1746617440/fundo1_nbqsuq.webp',
  'https://res.cloudinary.com/dlthukrz8/image/upload/v1746617441/fundo2_csbmru.webp',
  'https://res.cloudinary.com/duzbjndww/image/upload/v1751983304/IMG_20201031_174653-_2__1_lla3uk.webp'
];

const backgroundVideos = [
  {
    sources: [
      { src: 'https://drive.google.com/file/d/1Vs35QWuWTYEc49WLMQoliqJYIDKCd269/view?usp=sharing', type: 'video/mp4' }, // Vídeo de exemplo 1 (amostra gratuita)
      // Adicione WebM se disponível para otimização
    ],
    poster: backgroundImages[0]
  },

];

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [bgIndex, setBgIndex] = useState(0);

  // Intervalo para trocar de vídeo a cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundVideos.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Controla play/pause dos vídeos baseado no índice atual
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === bgIndex) {
          // Reinicia o vídeo para um loop mais limpo (opcional: remova se preferir continuidade)
          video.currentTime = 0;
          video.play().catch((e) => {
            console.log('Autoplay bloqueado para vídeo', index, e);
          });
        } else {
          video.pause();
          video.currentTime = 0; // Reset para próximo ciclo
        }
      }
    });

    // Cleanup: pausa todos os vídeos ao desmontar
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
    };
  }, [bgIndex]);

  return (
    <div ref={heroRef} className="relative min-h-screen text-white overflow-hidden">
      {/* Carrossel de vídeos de fundo */}
      <div className="absolute inset-0 z-0">
        {backgroundVideos.map((videoData, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: index === bgIndex ? 1 : 0,
            }}
            loop
            muted
            playsInline
            preload={index === 0 ? 'auto' : 'metadata'} // Carrega completo o primeiro, metadados nos outros para performance
            poster={videoData.poster} // Imagem de fallback durante carregamento
          >
            {videoData.sources.map((source, sIndex) => (
              <source key={sIndex} {...source} />
            ))}
            {/* Fallback para imagem se vídeo não suportar */}
            <img
              src={videoData.poster}
              alt={`Fundo hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </video>
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
              Soluções energéticas inteligentes e sustentáveis para residências e empresas. Reduza seus custos com energia.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Botão "Conheça Nossos Serviços" */}
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center bg-[#fcec04] hover:bg-[#f9e800] text-[#040c6c] py-3 px-6 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Conheça Nossos Serviços
                <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              {/* Botão "Fale Conosco" */}
              <a
                href="#contatowhatsapp"
                className="inline-flex items-center justify-center border-2 border-[#fcec04] text-[#fcec04] hover:bg-[#fcec04] hover:text-[#040c6c] py-3 px-6 rounded-lg font-medium transition-all duration-200"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Economia", description: "Reduza sua conta de energia." },
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
            <div className="absolute -bottom-4 -right-4 bg-[#fcec04] hover:bg-[#f9e800] px-6 py-3 rounded-lg shadow-lg">
              <p className="text-[#040c6c] font-medium text-sm">Mais de 100+ clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;