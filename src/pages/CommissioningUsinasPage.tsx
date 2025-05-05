import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects, Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <Link
    to={`/projetos/${project.slug}`}
    state={{ from: '/servicos/comissionamentousinas' }}
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

const CommissioningUsinasPage: React.FC = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const commissioningProjects = projects.filter(p => p.category === 'comissionamento');

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
      { threshold: 0 }
    );

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }
    return () => {
      if (projectsSectionRef.current) {
        observer.unobserve(projectsSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      {/* Projects Section */}
      <section
        ref={projectsSectionRef}
        className="max-w-6xl mx-auto py-24 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Projetos de Comissionamento
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos de comissionamento de
            usinas solares realizados com excelência e precisão técnica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commissioningProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommissioningUsinasPage;
