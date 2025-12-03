import { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    {
      name: 'Serviços',
      path: '/servicos',
      children: [
        { name: 'Residencial', path: '/servicos/residencial' },
        { name: 'Comercial', path: '/servicos/comercial' },
        { name: 'Agro', path: '/servicos/agro' },
        { name: 'Usinas', path: '/servicos/usinas' },
      ]
    },
    { name: 'Tecnologias', path: '/tecnologia' },
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
      <header className="fixed w-full z-50">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-[35rem] pointer-events-none z-10 overflow-hidden">
            <img
              src="https://res.cloudinary.com/duzbjndww/image/upload/v1764569378/20251201_0022_Bolinhas_Harmoniosas_Amarelas_remix_01kbbyvvw9fhg9ts8haqs3xkkd-removebg-preview_tjuxqs.png"
              alt=""
              className="h-full w-auto object-cover opacity-80"
            />
          </div>

          <div className="bg-gradient-to-b from-[#1c2f58] to-[#40959b] text-white shadow-md relative">
            <div className="container mx-auto px-4 md:px-6 py-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-12 relative z-30 ml-32">
                  <a
                    href="/"
                    className="flex items-center"
                    aria-label="ATO Energia - Página inicial"
                  >
                    <img
                      src='https://res.cloudinary.com/duzbjndww/image/upload/v1763356622/313118866_145266914904345_2579202774967658784_n-removebg-preview_dqvl0p.png'
                      alt="Logo ATO Energia"
                      className="h-28 w-auto drop-shadow-lg relative z-30"
                    />
                  </a>

                  <nav className="hidden md:block">
                    <ul className="flex items-center space-x-6">
                      {navLinks.map((link) => (
                        <li key={link.name} className="relative group">
                          <a
                            href={link.path}
                            className="flex items-center space-x-1 text-sm font-medium text-white/90 hover:text-[#fcec04] transition duration-200 py-2 px-2"
                            onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                          >
                            <span>{link.name}</span>
                            {link.children && (
                              <ChevronDown
                                size={14}
                                className={`ml-1 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                              />
                            )}
                          </a>
                          {link.children && openDropdown === link.name && (
                            <div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl rounded-lg py-2 w-56 z-50 border border-gray-200"
                              onMouseEnter={() => setOpenDropdown(link.name)}
                              onMouseLeave={() => setOpenDropdown(null)}
                            >
                              {link.children.map((child) => (
                                <a
                                  key={child.path}
                                  href={child.path}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1c2f58] transition duration-200 first:rounded-t-lg last:rounded-b-lg"
                                >
                                  {child.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div className="hidden md:flex items-center space-x-4 relative z-30">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-white/70 hover:text-[#fcec04] transition duration-200"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                  <a
                    href="/contato"
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#fcec04] text-[#1c2f58] font-medium hover:bg-yellow-300 transition-all duration-200 text-sm"
                  >
                    <Phone size={16} />
                    <span>Fale Conosco</span>
                  </a>
                </div>

                <button
                  className="md:hidden p-1 focus:outline-none relative z-30"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                  {isMenuOpen ? (
                    <X size={24} className="text-white" />
                  ) : (
                    <Menu size={24} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed top-[104px] left-0 w-full bg-white shadow-lg z-40 border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="block py-3 text-lg font-medium text-gray-800 hover:text-[#1c2f58] border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.children && (
                    <ul className="ml-6 space-y-2 border-l-2 border-gray-300 pl-4 py-2">
                      {link.children.map((child) => (
                        <li key={child.path}>
                          <a
                            href={child.path}
                            className="block py-2 text-base text-gray-600 hover:text-[#1c2f58] transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-6 mt-6 border-t border-gray-200">
                <div className="flex space-x-6 pb-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-gray-600 hover:text-[#fcec04] transition duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
                <a
                  href="/contato"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-[#fcec04] to-[#fcec04] text-[#1c2f58] w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={20} />
                  <span>Fale Conosco</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="h-[104px]" />
    </>
  );
};

export default Header;
