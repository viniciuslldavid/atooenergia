import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { projects, Project } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import { Zap, Leaf } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <Link
    to={`/projetos/${project.slug}`}
    state={{ from: '/servicos/residencial' }}
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group overflow-hidden hover:scale-[1.02] animate-fade-in"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {project.description}
      </p>
      <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
        Ver projeto
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

const ResidentialInstallationsPage: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const residentialProjects = projects.filter(p => p.category === 'residencial');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0 } // Alterado de 0.1 para 0
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="max-w-6xl mx-auto py-24 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out min-h-[50vh]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Projetos Residenciais
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos residenciais de clientes realizados com excelência e precisão técnica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialProjects.length > 0 ? (
            residentialProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              Nenhum projeto residencial encontrado.
            </p>
          )}
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">Transformação Sustentável</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Pronto para Começar sua Jornada Solar?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Nossos especialistas estão prontos para analisar sua situação e criar uma solução personalizada com máximo potencial de economia e sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-32 h-32 text-yellow-300 opacity-30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialInstallationsPage;