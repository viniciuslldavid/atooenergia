import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, Facebook, Instagram } from 'lucide-react';
import HarmonyBackground from './HarmonyBackground';

const Footer: React.FC = () => {
  const paymentMethods = [
    { name: 'Visa Débito', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653054/visa_bwic4u.png' },
    { name: 'Visa Crédito', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653054/visa_bwic4u.png' },
    { name: 'Mastercard Débito', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653054/mastercard_qjl4hr.png' },
    { name: 'Mastercard Crédito', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653054/mastercard_qjl4hr.png' },
    { name: 'Boleto', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653053/boleto_mfmdel.png' },
    { name: 'Dinheiro', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653053/dinheiro_iy0wt7.png' },
    { name: 'Financiamento', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653054/financiamento_ufbh3m.png' },
    { name: 'Pix', url: 'https://res.cloudinary.com/dzk36cfdq/image/upload/v1753653053/pix_ur0vl2.png' },
  ];

  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Contato', path: '/contato' },
  ];

  const services = [
    { name: 'Energia Solar', path: '/servicos/energia-solar' },
    { name: 'Comercial', path: '/servicos/comercial' },
    { name: 'Residencial', path: '/servicos/residencial' },
    { name: 'Comissionamento', path: '/servicos/comissionamentousinas' },
    { name: 'Limpeza e Manutenção', path: '/servicos/maintenanceservicePage' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1c355f] to-[#0f1d35] text-white">
      <HarmonyBackground variant="primary" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ffed00]">ATO Energia</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Transformando o futuro energético do Brasil com soluções inteligentes e sustentáveis para residências e empresas.
            </p>

            <div>
              <h4 className="text-sm font-bold mb-3 text-white">Formas de Pagamento</h4>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={method.url}
                      alt={method.name}
                      className="w-8 h-auto hover:scale-110 transform transition-transform duration-200 opacity-80 hover:opacity-100"
                    />
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-10 bg-[#1c355f] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                      {method.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/Ato-Energia-104205685677135/photos/?ref=page_internal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#ffed00] hover:text-[#1c355f] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#ffed00] hover:text-[#1c355f] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ffed00]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-[#ffed00] transition-colors duration-200 flex items-center text-sm group"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ffed00]">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-[#ffed00] transition-colors duration-200 flex items-center text-sm group"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ffed00]">Contato</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#ffed00] shrink-0 mt-1" />
                <span>
                  Avenida Belarmino Cotta Pacheco, 411,
                  Santa Mônica, Uberlândia, MG
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[#ffed00] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+553498214728" className="hover:text-[#ffed00] transition-colors">
                    (34) 98421-4728
                  </a>
                  <a href="tel:+553430451053" className="hover:text-[#ffed00] transition-colors">
                    (34) 3045-1053
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-[#ffed00] shrink-0 mt-1" />
                <a href="mailto:contato@atoenergia.com" className="hover:text-[#ffed00] transition-colors">
                  contato@atoenergia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ATO Energia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#ffed00] transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-[#ffed00] transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
