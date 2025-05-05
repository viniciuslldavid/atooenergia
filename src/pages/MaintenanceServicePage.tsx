// src/pages/MaintenanceServicePage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const MaintenanceServicePage: React.FC = () => {
  const serviceProjects = projects.filter(p => p.category === 'limpezaemanutencao');
  const images = serviceProjects.flatMap(p => p.gallery || []);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-40 px-6 sm:px-10 bg-cover bg-center overflow-hidden animate-fade-in"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dlthukrz8/image/upload/v1746328204/fundo2_kf4wkm.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/30 backdrop-blur-[2px] z-0" />
        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-800">
            Limpeza e Manutenção de Usinas
          </h1>
          <div className="max-w-3xl mx-auto md:mx-0 space-y-6 text-gray-800 text-lg md:text-xl">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-10 h-10  text-white rounded-full mr-3 shadow-md">🧽</span>
              <span>
                Limpeza especializada de painéis, <span className="font-semibold text-blue-800">inspeção técnica</span> e manutenção preventiva.
              </span>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-10 h-10  text-white rounded-full mr-3 shadow-md">🛠️</span>
              <span>
                Equipe qualificada, equipamentos modernos e atendimento com foco em <span className="font-semibold text-blue-800">performance</span>.
              </span>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-10 h-10  text-white rounded-full mr-3 shadow-md">📈</span>
              <span>
                Eficiência garantida, aumento da geração e maior durabilidade do sistema fotovoltaico.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fotos de Limpeza e Manutenção
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos registros de manutenção preventiva e limpeza de usinas realizados com cuidado e eficiência pela nossa equipe.
          </p>
        </div>
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
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiSearch className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
          plugins={[Thumbnails]}
        />
      </section>

      {/* Botão de Voltar */}
      <div className="text-center pb-16">
        <Link
          to="/servicos"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Voltar aos Serviços
        </Link>
      </div>
    </div>
  );
};

export default MaintenanceServicePage;