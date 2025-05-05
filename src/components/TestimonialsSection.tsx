import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Vinicius',
      role: 'Proprietário',
      company: 'ronaldao inestimentos',
      content: 'teste.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  const [current, setCurrent] = useState(0);
  const maxVisibleItems = 2;
  const totalSlides = Math.ceil(testimonials.length / maxVisibleItems);
  const autoPlayRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  useEffect(() => {
    autoPlayRef.current = window.setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [current]);

  const visibleTestimonials = [];
  for (let i = 0; i < maxVisibleItems; i++) {
    const index = (current * maxVisibleItems + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            A satisfação dos nossos clientes é o nosso maior orgulho e motivação para continuar inovando.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-1 bg-blue-50 rounded-2xl p-6 shadow-md border border-blue-100 animate-on-scroll opacity-0 transition-all duration-700 ease-out"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === i ? 'bg-blue-600 w-6' : 'bg-blue-200'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-blue-600 hover:text-blue-800 hover:shadow-lg transition-all duration-200 focus:outline-none hidden md:block"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-blue-600 hover:text-blue-800 hover:shadow-lg transition-all duration-200 focus:outline-none hidden md:block"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
