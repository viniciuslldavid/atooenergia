import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Award, Leaf, Users } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  duration: number;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, duration, icon }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / 60;
    const stepTime = Math.abs(Math.floor(duration / 60));

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div
      ref={countRef}
      className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <div style={{ color: '#ffed00' }}>
            {icon}
          </div>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          <span>{count.toLocaleString('pt-BR')}</span>
          <span>{suffix}</span>
        </div>
        <p className="text-gray-600 font-medium text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
};

const AboutAndStats: React.FC = () => {
  return (
    <>
            <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  Somos a <span className="font-bold border-b-4" style={{ borderColor: '#ffed00' }}>ATO</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Uma empresa privada de geração de energia fruto de uma joint venture entre a Prumo Logística, bp, Siemens Energy, Siemens AG e SPIC Brasil. Acreditamos e investimos no desenvolvimento do mercado de gás e energia do Brasil.
              </p>

              <a
                href="/sobre-nos"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-white text-[#1c2f58] border-2 border-gray-300 group"
                style={{ borderColor: 'rgb(209, 213, 219)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffed00'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(209, 213, 219)'}
              >
                <span>VEJA MAIS</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#ffed00' }}></div>
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Equipe ATO Energia"
                  className="rounded-xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0YzEuMTA1IDAgMiAuODk1IDIgMnMtLjg5NSAyLTIgMi0yLS44OTUtMi0yIC44OTUtMiAyLTJ6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <img
          src="https://res.cloudinary.com/duzbjndww/image/upload/v1764572250/20251201_0356_Gradiente_Amarelo_Vivo_remix_01kbcb3sbxf259qbp8y0h4ascc-removebg-preview_bkfrq9.png"
          alt="Decoração"
          className="absolute bottom-0 left-0 w-96 h-96 object-contain pointer-events-none overflow-hidden"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa Jornada em Números
            </h2>
            <div className="w-24 h-1 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#ffed00' }}></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Transformando energia solar em resultados concretos para nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem
              value={500}
              suffix="+"
              label="Sistemas Instalados"
              duration={2500}
              icon={<Zap size={32} />}
            />
            <StatItem
              value={15000}
              suffix="+"
              label="MWh Gerados"
              duration={2500}
              icon={<Award size={32} />}
            />
            <StatItem
              value={8500}
              suffix="+"
              label="Toneladas de CO₂ Evitadas"
              duration={2500}
              icon={<Leaf size={32} />}
            />
            <StatItem
              value={450}
              suffix="+"
              label="Clientes Atendidos"
              duration={2500}
              icon={<Users size={32} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndStats;
