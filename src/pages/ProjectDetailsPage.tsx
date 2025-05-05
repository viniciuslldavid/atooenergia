import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const from = location.state?.from as string || '/servicos';
  const project = projects.find(p => p.slug === slug);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!project) {
    return (
      <div className="pt-32 text-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Projeto não encontrado</h2>
        <Link
          to={from}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 px-4 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Imagem principal */}
        <img
          src={project.imageUrl}
          alt={`Projeto ${project.title}`}
          className="w-full rounded-md mb-6 object-cover max-h-96"
        />

        {/* Descrição */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Descrição do Projeto</h2>
          <div className="text-gray-800 space-y-2 text-base leading-relaxed">
            {project.description?.split('\n').map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Galeria */}
        {project.gallery?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Fotos do Projeto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md aspect-square"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <img
                    src={img}
                    alt={`Imagem ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiSearch className="text-white text-3xl mb-1" />
                    <span className="text-white text-sm font-medium tracking-wide">Visualizar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botão Voltar */}
        <div className="mt-10">
          <Link
            to={from}
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Voltar aos Serviços
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={project.gallery?.map((img) => ({ src: img })) || []}
        plugins={[Thumbnails]}
      />
    </div>
  );
};

export default ProjectDetailsPage;
