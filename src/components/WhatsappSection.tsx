import { useState } from "react";
import backgroundcontato from '../assets/images/background/backgroundcontato.jpg';

const WhatsappSection = () => {
  const [message, setMessage] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("5534984214728");

  const phoneNumbers = [
    { label: "Ato Energia - (34) 9842-14728", number: "5534984214728" },
  ];

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(
      message || "Olá! Gostaria de saber mais sobre o financiamento solar ☀️"
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${selectedNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contatowhatsapp"
      className="bg-cover bg-center py-40"
      style={{ backgroundImage: `url(${backgroundcontato})` }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Mande mensagem pelo WhatsApp
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <select
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(e.target.value)}
            className="px-6 py-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {phoneNumbers.map(({ label, number }) => (
              <option key={number} value={number}>
                {label}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Escreva sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-6 py-3 rounded-md w-80 md:w-96 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            onClick={handleSendMessage}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            ENVIAR
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 3.5C18.47 1.47 15.53 1 13 1S7.53 1.47 5.5 3.5 1 8.47 1 11c0 1.33.53 2.67 1.5 3.5l-1.5 5 5-1.5c.83.97 2.17 1.5 3.5 1.5 2.53 0 5.47-.47 7.5-2.5s2.5-5.47 2.5-7.5c0-2.53-.47-5.47-2.5-7.5z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsappSection;
