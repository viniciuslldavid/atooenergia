
import React, { useState } from 'react';
import { MdSend, MdPhone, MdLocationOn, MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

// Definições de sub-opções para cada ação principal
const subActions: Record<string, Array<{ label: string; href: string; icon: React.ReactNode }>> = {
  whatsapp: [
    { label: 'WhatsApp Comercial', href: 'https://web.whatsapp.com/send?phone=55034984214728', icon: <FaWhatsapp size={20} /> },
  ],
  phone: [
    { label: '(34) 98421-4728', href: 'tel:+55(34) 98421-4728', icon: <MdPhone size={20} /> },
    { label: '(34) 3045-1053', href: 'tel:+55(34) 3045-1053', icon: <MdPhone size={20} /> },
  ],
  location: [
    { label: 'Uberlândia (Matriz)', href: 'https://maps.app.goo.gl/fiw4dWUj7jC64kL68', icon: <MdLocationOn size={20} /> },
  ],
  email: [
    { label: 'Contato Geral', href: 'mailto:contato@atoenergia.com', icon: <MdEmail size={20} /> },
  ],
};

const actions = [
  { key: 'whatsapp', icon: <FaWhatsapp size={20} />, label: 'WhatsApp' },
  { key: 'phone',    icon: <MdPhone size={20} />,    label: 'Telefone' },
  { key: 'location', icon: <MdLocationOn size={20} />, label: 'Localização' },
  { key: 'email',    icon: <MdEmail size={20} />,     label: 'E-mail' },
];

const FABExpand: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const handleActionClick = (key: string) => {
    // Se clicar na mesma abre/fecha o submenu
    setActiveAction(prev => (prev === key ? null : key));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Submenu para ação ativa */}
      {activeAction && (
        <div className="flex flex-col items-end space-y-2 mb-2">
          {subActions[activeAction].map((sub, idx) => (
            <a
              key={idx}
              href={sub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-transform transform hover:scale-105"
              onClick={() => {
                // ao clicar em sub-opção fecha tudo
                setOpen(false);
                setActiveAction(null);
              }}
            >
              <span className="text-blue-600">{sub.icon}</span>
              <span>{sub.label}</span>
            </a>
          ))}
          {/* Botão para voltar às ações principais */}
          <button
            onClick={() => setActiveAction(null)}
            className="flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            <span className="text-blue-600">🔙</span>
            <span>Voltar</span>
          </button>
        </div>
      )}

      {/* Ações principais */}
      {!activeAction && open && (
        <div className="flex flex-col items-end space-y-2 mb-2">
          {actions.map(action => (
            <button
              key={action.key}
              onClick={() => handleActionClick(action.key)}
              className="flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              <span className="text-blue-600">{action.icon}</span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={() => {
          setOpen(o => !o);
          setActiveAction(null);
        }}
        className="relative bg-gradient-to-br from-blue-500 to-blue-700 text-white p-7 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 focus:outline-none"
      >
        <MdSend
          size={24}
          className={
            `absolute inset-0 m-auto transform transition-transform duration-500
            ${open ? 'rotate-135' : 'rotate-45'} animate-pulse`
          }
        />
      </button>
    </div>
  );
};

export default FABExpand;

