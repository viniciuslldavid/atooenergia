import React from 'react';
import { Link } from 'react-router-dom';
import logopreta from '../assets/images/logo/logo.png';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={logopreta}
                alt="Logo ATO Energia"
                className="h-20"
              />
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando o futuro energético do Brasil com soluções inteligentes e sustentáveis para residências e empresas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Ato-Energia-104205685677135/photos/?ref=page_internal"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
                target='_blank'
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="target='_blank'"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
                target='_blank'
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://br.linkedin.com/company/ato-energia-solu%C3%A7%C3%B5es"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
                target='_blank'
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', path: '/' },
                { name: 'Serviços', path: '/servicos' },
                { name: 'Sobre Nós', path: '/sobre-nos' },
                { name: 'Contato', path: '/contato' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {[
                { name: 'Energia Solar', path: '/servicos/energia-solar' },
                { name: 'Comercial', path: '/servicos/comercial' },
                { name: 'Residencial', path: '/servicos/residencial' },
                { name: 'Comissionamento', path: '/servicos/comissionamentousinas' },
                { name: 'Limpeza e Manutenção de Usinas', path: '/servicos/maintenanceservicePage' },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-1" />
                <span>
                  Avenida Belarmino Cotta Pacheco, 411,<br />
                  Santa Mônica, Uberlândia, MG, 38408-168<br />
                  Brasil
                </span>
              </li>

              <li className="flex">
                <Phone className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>(34) 98421-4728</span>
                  <span>(34) 3045-1053</span>
                </div>
              </li>

              <li className="flex">
                <svg className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.205-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zm-5.421 7.118h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.656-.235-.375a9.86 9.86 0 01-1.51-5.27c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.89 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .164 5.332.16 11.888c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.685a11.865 11.865 0 005.664 1.441h.005c6.554 0 11.884-5.332 11.888-11.888a11.822 11.822 0 00-3.491-8.443z" />
                </svg>
                <a
                  href="https://wa.me/5534984214728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (34) 98421-4728
                </a>
              </li>

              <li className="flex">
                <Mail className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-1" />
                <span>contato@atoenergia.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ATO Energia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;