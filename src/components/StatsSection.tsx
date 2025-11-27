import React, { useState, useEffect, useRef } from 'react';
import { Zap, Award, Leaf, Users } from 'lucide-react';

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
          <div className="text-yellow-400">
            {icon}
          </div>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-white mb-3">
          <span>{count.toLocaleString('pt-BR')}</span>
          <span>{suffix}</span>
        </div>
        <p className="text-blue-100 font-medium text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0YzEuMTA1IDAgMiAuODk1IDIgMnMtLjg5NSAyLTIgMi0yLS44OTUtMi0yIC44OTUtMiAyLTJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa Jornada em Números
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
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
  );
};

export default StatsSection;
