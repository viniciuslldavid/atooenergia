import React, { useEffect } from 'react';

const TestimonialsSection: React.FC = () => {
  useEffect(() => {
    // Certifique-se de que o Trustmary foi carregado
    if (window.Trustmary) {
      window.Trustmary.init();
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div data-trustmary-widget="uVOnoGz8E"></div>
    </div>
  );
};

export default TestimonialsSection;
