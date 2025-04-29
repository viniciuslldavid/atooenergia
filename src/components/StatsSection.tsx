import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
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
    const increment = end / 40;
    const stepTime = Math.abs(Math.floor(duration / 40));

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
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 flex justify-center">
        <span ref={countRef}>{count}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                Nossa Trajetória em Números
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatItem value={100} suffix="+" label="Clientes" duration={2000} />
                <StatItem value={0} suffix="%" label="Economia média" duration={2000} />
                <StatItem value={0} suffix="kW" label="Capacidade instalada" duration={2000} />
                <StatItem value={99} suffix="%" label="Satisfação" duration={2000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;