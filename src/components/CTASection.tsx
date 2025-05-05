import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface CTASectionProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, buttonText, buttonLink }) => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Economize até 30% em sua conta de energia elétrica e contribua para um mundo mais sustentável com nossas soluções.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 py-3 px-8 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              {buttonText}
              <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>

          <p className="text-blue-200 mt-8 text-sm">
            Mais de 100 clientes já economizam com a ATO Energia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
