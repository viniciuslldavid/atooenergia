import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { projects } from '../data/projects';

const ResidentialInstallationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24">
      {/* Seção sobre o serviço */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">Energia Solar Residencial</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Transforme sua casa em um modelo de sustentabilidade e economia. Nossas soluções em energia solar residencial oferecem tecnologia de ponta, instalação segura e suporte completo — desde o projeto até a manutenção.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Com anos de experiência no setor, entregamos projetos que reduzem sua conta de energia em até 95%, valorizam seu imóvel e contribuem para um futuro mais verde.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Se você busca independência energética, retorno financeiro e consciência ambiental, fale conosco. Estamos prontos para tornar seu projeto realidade.
          </p>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projetos Residenciais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projetos/${project.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow group overflow-hidden"
            >
              <div className="relative aspect-square">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Chamada para Ação */}
      <CTASection
        title="Pronto para transformar sua casa com energia solar?"
        buttonText="Solicitar Orçamento"
        buttonLink="/contato"
      />
    </div>
  );
};

export default ResidentialInstallationsPage;
