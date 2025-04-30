import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react'; // Ícone bonito de relógio

const days = [
  { day: 'Domingo', hours: 'Fechado' },
  { day: 'Segunda-feira', hours: '08:00 às 12:00 • 14:00 às 18:00' },
  { day: 'Terça-feira', hours: '08:00 às 12:00 • 14:00 às 18:00' },
  { day: 'Quarta-feira', hours: '08:00 às 12:00 • 14:00 às 18:00' },
  { day: 'Quinta-feira', hours: '08:00 às 12:00 • 14:00 às 18:00' },
  { day: 'Sexta-feira', hours: '08:00 às 12:00 • 14:00 às 18:00' },
  { day: 'Sábado', hours: 'Fechado' },
];

export function WorkingHours() {
  const [selectedDay, setSelectedDay] = useState<string>('');

  useEffect(() => {
    // Ao carregar a página, seleciona o dia atual automaticamente
    const todayIndex = new Date().getDay(); // Domingo = 0, Segunda = 1, etc.
    const todayName = days[todayIndex].day;
    setSelectedDay(todayName);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 min-h-[400px] animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto lado esquerdo */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            Horário de Atendimento
          </h2>
          <p className="text-gray-600 text-lg">
            Confira nossos horários de funcionamento e agende sua visita!
          </p>
          <a
            href="#contato" // Link para sua seção de contato
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-medium tracking-wide shadow hover:bg-blue-800 hover:scale-105 transform transition duration-300"
          >
            Agendar Horário
          </a>
        </div>

        {/* Lista lado direito */}
        <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
          <ul className="space-y-4">
            {days.map((item) => {
              const isSelected = item.day === selectedDay;
              return (
                <li
                  key={item.day}
                  onClick={() => setSelectedDay(item.day)}
                  className={`flex justify-between items-center w-full p-4 rounded-2xl cursor-pointer
                    ${isSelected ? 'bg-blue-800 text-white' : 'bg-white text-gray-800'}
                    hover:bg-blue-600 hover:text-white transition-all duration-300
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">{item.day}</span>
                  </div>
                  <span className="text-sm">
                    {item.hours}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
