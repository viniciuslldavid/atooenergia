import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';

const ContatoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contato | ATO Energia';
    
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

  return (
    <div>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estamos prontos para responder todas as suas dúvidas e ajudar a transformar sua relação com a energia.
            </p>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-md animate-on-scroll opacity-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2217806279018!2d-48.25504568936946!3d-18.914728027402667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450733d53147%3A0x9a08000dfd3859c3!2sAto.Energia!5e0!3m2!1spt-BR!2sbr!4v1745951591180!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da ATO Energia"
            ></iframe>
          </div>
        </div>
      </div>

      <ContactSection />
 
    </div>
    
  );
};

export default ContatoPage;