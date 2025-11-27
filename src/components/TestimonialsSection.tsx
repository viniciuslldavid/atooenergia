import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TestimonialsSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Certifique-se de que o Trustmary foi carregado
    if (window.Trustmary && location.pathname === '/') {
      window.Trustmary.init();
    }
  }, [location]);

  if (location.pathname !== '/') return null;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div data-trustmary-widget="uVOnoGz8E"></div>
    </div>
  );
};

export default TestimonialsSection;
