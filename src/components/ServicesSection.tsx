import { Home, Building2, Sprout, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Residencial',
    description: 'Economia e sustentabilidade para sua casa',
    gradient: 'from-orange-400 to-orange-600'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Comercial',
    description: 'Reduza custos operacionais do seu negócio',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: 'Agro',
    description: 'Soluções para o agronegócio',
    gradient: 'from-green-400 to-green-600'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Usinas',
    description: 'Grandes projetos de geração solar',
    gradient: 'from-yellow-400 to-yellow-600'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções personalizadas para cada tipo de necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >


              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/servicos"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-[#fcec04] to-[#fcec04] hover:from-[#fcec04] hover:to-[#fcec04] text-[#040c6c]"
          >
            Ver Todos os Serviços
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
