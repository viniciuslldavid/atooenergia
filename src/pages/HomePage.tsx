import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import InstagramSection from '../components/InstagramSection.tsx';
import SolarSimulator from '../components/SolarSimulator.tsx';
import { WorkingHours } from '../components/WorkingHours';
import WhatsappSection from '../components/WhatsappSection';
import LocationSection from '../components/LocationSection';
import FABExpand from '../components/FABExpand';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ATO Energia - Soluções Energéticas para o Brasil';

    // Adiciona o script do Trustmary apenas se estiver na HomePage
    const loadTrustmaryScript = () => {
      const script = document.createElement('script');
     // script.src = 'https://widget.trustmary.com/uVOnoGz8E';
      script.async = true;
      script.onload = () => {
        if (window.Trustmary) {
          window.Trustmary.init();
        }
      };
      document.body.appendChild(script);

      // Limpeza: Remover o script quando o componente for desmontado
      return () => {
        document.body.removeChild(script);
      };
    };

    // Chama a função apenas se for a HomePage
    loadTrustmaryScript();

    // Adiciona a classe de animação para os elementos
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
  }, []);

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <ServicesSection />
      <SolarSimulator />
      <InstagramSection />
      <WorkingHours />
      <ContactSection />
      <FABExpand />
    </div>
  );
};

export default HomePage;
