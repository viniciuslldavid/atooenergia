import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const MaintenanceServicePage: React.FC = () => {
  const serviceProjects = projects.filter(
    p => p.category === 'limpezaemanutencao'
  );

  const images: string[] = serviceProjects.flatMap(
    p => p.gallery ?? []
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-5">

      {/* Galeria */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fotos de Limpeza e Manutenção
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos registros de manutenção preventiva e limpeza de usinas realizados com cuidado e eficiência pela nossa equipe.
          </p>
        </div>

        {images.length === 0 && (
          <p className="text-center text-gray-500">
            Nenhuma imagem disponível no momento.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md aspect-square"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FiSearch className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>

        {images.length > 0 && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map(src => ({ src }))}
            plugins={[Thumbnails]}
          />
        )}
      </section>

      {/* Voltar */}
      <div className="text-center pb-16">
        <Link
          to="/servicos"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Voltar aos Serviços
        </Link>
      </div>
    </div>
  );
};

export default MaintenanceServicePage;
