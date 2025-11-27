import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <Link
    to={`/projetos/${project.slug}`}
    state={{ from: '/servicos/comercial' }}
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

const ComercialInstallationsPage: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const commercialProjects = projects.filter(p => p.category === 'comercial');

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
            Projetos Comerciais
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos comerciais de clientes realizados com excelência e precisão técnica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialProjects.length > 0 ? (
            commercialProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              Nenhum projeto comercial encontrado.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Pronto para transformar seu negócio com energia solar?"
        buttonText="Solicitar Orçamento"
        buttonLink="/contato"
      />
    </div>
  );
};

export default ComercialInstallationsPage;
