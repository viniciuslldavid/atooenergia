import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Contato', path: '/contato' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/your-profile' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/your-profile' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/your-profile' },
  ];

  return (
    <>
      <header className="fixed w-full z-50 bg-gradient-to-r from-[#040c6c] via-[#0a1c49] to-[#183d74] text-white shadow-md py-2 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              aria-label="ATO Energia - Página inicial"
            >
              <img
                src='https://res.cloudinary.com/duzbjndww/image/upload/v1763356622/313118866_145266914904345_2579202774967658784_n-removebg-preview_dqvl0p.png'
                alt="Logo ATO Energia"
                className="h-20 md:h-20 w-auto drop-shadow-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-base font-medium hover:text-[#fcec04] transition duration-200 ${location.pathname === link.path ? 'text-[#fcec04]' : 'text-gray-700'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-gray-700 hover:text-[#fcec04] transition duration-200"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
                <Link
                  to="/contato"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#fcec04] text-[#040c6c] hover:bg-[#fcec04] hover:text-[#040c6c] transition-all duration-200"
                >
                  <Phone size={16} />
                  <span>Fale Conosco</span>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-800" />
              ) : (
                <Menu size={28} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2 text-lg ${location.pathname === link.path ? 'text-[#fcec04] font-medium' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="flex space-x-4 py-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-gray-700 hover:text-[#fcec04] transition duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </li>
              <li>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-[#fcec04] to-[#fcec04] hover:from-[#fcec04] hover:to-[#fcec04] text-[#040c6c]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Conteúdo abaixo da navbar */}
      <div className="mt-[80px]"> {/* Adicionando margem superior ao conteúdo */} 
        {/* Aqui vai o seu conteúdo principal */}
      </div>
    </>
  );
};

export default Header;
