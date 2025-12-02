import React, { useState, useEffect } from 'react';
import { Calculator, Sun, ChevronRight, Clock } from 'lucide-react';
import HarmonyBackground from './HarmonyBackground';

interface SolarKit {
  id: number;
  name: string;
  minConsumption: number;
  maxConsumption: number;
  microInverters: number;
  panels: number;
  power: string;
  price: number;
  financedPrice: number;
  image: string;
  description: string;
}

const solarKits: SolarKit[] = [
  {
    id: 1,
    name: 'Kit Solar Residencial Básico',
    minConsumption: 1,
    maxConsumption: 200,
    microInverters: 1,
    panels: 4,
    power: '1,6 kWp',
    price: 8154.50,
    financedPrice: 7372.30,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ideal para casas pequenas com baixo consumo'
  },
  {
    id: 2,
    name: 'Kit Solar Residencial Médio',
    minConsumption: 200,
    maxConsumption: 350,
    microInverters: 2,
    panels: 8,
    power: '3,2 kWp',
    price: 9267.92,
    financedPrice: 8378.92,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfeito para residências de médio porte'
  },
  {
    id: 3,
    name: 'Kit Solar Residencial Grande',
    minConsumption: 350,
    maxConsumption: 500,
    microInverters: 3,
    panels: 12,
    power: '4,8 kWp',
    price: 12620.82,
    financedPrice: 11410.20,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ideal para casas grandes ou pequenos comércios'
  },
  {
    id: 4,
    name: 'Kit Solar Comercial',
    minConsumption: 500,
    maxConsumption: 800,
    microInverters: 4,
    panels: 16,
    power: '6,4 kWp',
    price: 14888.50,
    financedPrice: 13460.35,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Adequado para estabelecimentos comerciais'
  },
  {
    id: 5,
    name: 'Kit Solar Industrial',
    minConsumption: 800,
    maxConsumption: 1200,
    microInverters: 6,
    panels: 20,
    power: '8 kWp',
    price: 16437.80,
    financedPrice: 15041.86,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para indústrias e grandes consumidores'
  },
  {
    id: 6,
    name: 'Kit Solar Residencial Extra Grande',
    minConsumption: 1200,
    maxConsumption: 1500,
    microInverters: 6,
    panels: 22,
    power: '10,4 kWp',
    price: 19405.16,
    financedPrice: 17543.76,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para residências muito grandes ou com alto consumo'
  },
  {
    id: 7,
    name: 'Kit Solar Empresarial',
    minConsumption: 1500,
    maxConsumption: 2000,
    microInverters: 7,
    panels: 24,
    power: '12 kWp',
    price: 21705.06,
    financedPrice: 19623.06,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ideal para empresas de pequeno porte'
  },
  {
    id: 8,
    name: 'Kit Solar Comercial Plus',
    minConsumption: 2000,
    maxConsumption: 2500,
    microInverters: 7,
    panels: 28,
    power: '14 kWp',
    price: 21857.47,
    financedPrice: 19760.84,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para grandes estabelecimentos comerciais'
  },
  {
    id: 9,
    name: 'Kit Solar Industrial Plus',
    minConsumption: 2500,
    maxConsumption: 3000,
    microInverters: 8,
    panels: 30,
    power: '16 kWp',
    price: 24518.71,
    financedPrice: 22166.81,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para grandes indústrias'
  },
  {
    id: 10,
    name: 'Kit Solar Comercial Extra',
    minConsumption: 3000,
    maxConsumption: 3500,
    microInverters: 8,
    panels: 32,
    power: '18 kWp',
    price: 26572.45,
    financedPrice: 24023.55,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para comércios de grande porte ou áreas de grande consumo'
  },
  {
    id: 11,
    name: 'Kit Solar Residencial Ultra Grande',
    minConsumption: 3500,
    maxConsumption: 4000,
    microInverters: 9,
    panels: 34,
    power: '20 kWp',
    price: 28924.76,
    financedPrice: 26240.63,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para residências ultra grandes com altíssimo consumo'
  },
  {
    id: 12,
    name: 'Kit Solar Empresarial Ultra',
    minConsumption: 4000,
    maxConsumption: 4500,
    microInverters: 9,
    panels: 36,
    power: '22,4 kWp',
    price: 33799.27,
    financedPrice: 30902.24,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para empresas de grande porte com altíssimo consumo'
  },
  {
    id: 13,
    name: 'Kit Solar Comercial Plus Ultra',
    minConsumption: 4500,
    maxConsumption: 5000,
    microInverters: 10,
    panels: 40,
    power: '24 kWp',
    price: 36192.73,
    financedPrice: 32721.02,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para grandes redes comerciais ou indústria de grande porte'
  },
  {
    id: 14,
    name: 'Kit Solar Industrial Ultra',
    minConsumption: 5000,
    maxConsumption: 5500,
    microInverters: 10,
    panels: 42,
    power: '26,4 kWp',
    price: 40843.12,
    financedPrice: 36925.34,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para grandes fábricas ou indústrias com consumo altíssimo'
  },
  {
    id: 15,
    name: 'Kit Solar Ultra Comercial',
    minConsumption: 5500,
    maxConsumption: 6000,
    microInverters: 11,
    panels: 44,
    power: '28,8 kWp',
    price: 45095.88,
    financedPrice: 41032.02,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para comércios e indústrias gigantes'
  },
  {
    id: 16,
    name: 'Kit Solar Mega Comercial',
    minConsumption: 6000,
    maxConsumption: 6500,
    microInverters: 11,
    panels: 46,
    power: '31,2 kWp',
    price: 48715.48,
    financedPrice: 44132.97,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ideal para grandes indústrias com consumo superior'
  },
  {
    id: 17,
    name: 'Kit Solar Comercial Gigante',
    minConsumption: 6500,
    maxConsumption: 7000,
    microInverters: 12,
    panels: 48,
    power: '33,6 kWp',
    price: 52281.81,
    financedPrice: 48173.52,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para indústrias de consumo massivo de energia'
  },
  {
    id: 18,
    name: 'Kit Solar Industrial Gigante',
    minConsumption: 7000,
    maxConsumption: 7500,
    microInverters: 12,
    panels: 50,
    power: '36 kWp',
    price: 56192.96,
    financedPrice: 51518.80,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para grandes indústrias ou grandes parques comerciais'
  },
  {
    id: 19,
    name: 'Kit Solar Plus',
    minConsumption: 7500,
    maxConsumption: 8000,
    microInverters: 13,
    panels: 52,
    power: '38,4 kWp',
    price: 59226.02,
    financedPrice: 54001.92,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para consumidores comerciais muito grandes'
  }
];

function SolarSimulator() {
  const [generation, setGeneration] = useState<string>('');
  const [recommendedKit, setRecommendedKit] = useState<SolarKit | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (generation) {
      const generationValue = parseInt(generation);
      const kit = solarKits.find(
        kit => generationValue >= kit.minConsumption && generationValue <= kit.maxConsumption
      );

      if (kit) {
        setRecommendedKit(kit);
        setShowResult(true);
      } else if (generationValue > 8000) {
        setRecommendedKit(solarKits[solarKits.length - 1]);
        setShowResult(true);
      } else {
        setShowResult(false);
        setRecommendedKit(null);
      }
    } else {
      setShowResult(false);
      setRecommendedKit(null);
    }
  }, [generation]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const calculateMonthlyPayment = (totalPrice: number) => {
    const monthlyPayment = totalPrice * 0.025;
    return formatPrice(monthlyPayment);
  };

  const [selectedDay, setSelectedDay] = useState<string>('');

  const days = [
    { day: 'Domingo', hours: 'Fechado' },
    { day: 'Segunda-feira', hours: '08:00 às 18:00' },
    { day: 'Terça-feira', hours: '08:00 às 18:00' },
    { day: 'Quarta-feira', hours: '08:00 às 18:00' },
    { day: 'Quinta-feira', hours: '08:00 às 18:00' },
    { day: 'Sexta-feira', hours: '08:00 às 18:00' },
    { day: 'Sábado', hours: 'Fechado' },
  ];

  useEffect(() => {
    const todayIndex = new Date().getDay();
    const todayName = days[todayIndex].day;
    setSelectedDay(todayName);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#1c355f] to-[#1c2f58] py-12 px-4 md:px-8 relative overflow-hidden">
      <HarmonyBackground variant="primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#ffed00] to-[#ffe34d] p-6 md:p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1c355f] rounded-xl mb-4 shadow-lg">
                  <Calculator className="w-8 h-8 text-[#ffed00]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1c355f] mb-2">
                  Simule seu Sistema
                </h3>
                <p className="text-[#1c355f]/70 text-sm mb-6">
                  Qual é seu consumo mensal?
                </p>

                <div className="max-w-xs mx-auto">
                  <div className="relative">
                    <input
                      type="number"
                      value={generation}
                      onChange={(e) => setGeneration(e.target.value)}
                      placeholder="Ex: 250"
                      className="w-full px-6 py-4 text-2xl font-bold text-center border-3 border-[#1c355f] rounded-xl focus:border-[#1c355f] focus:ring-3 focus:ring-[#1c355f]/20 focus:outline-none transition-all duration-300 text-[#1c355f] placeholder:text-[#1c355f]/30"
                    />
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#1c355f]/60 font-bold">
                      kWh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {showResult && recommendedKit && (
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src={recommendedKit.image}
                      alt={recommendedKit.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c355f] via-[#1c355f]/40 to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
                        <h4 className="font-bold text-sm mb-1">{recommendedKit.name}</h4>
                        <p className="text-[#ffed00] font-bold">{recommendedKit.power}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1c355f]/5 p-4 rounded-xl border border-[#1c355f]/10">
                    <p className="text-[#1c355f]/70 text-xs text-center">
                      {recommendedKit.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#1c355f] p-3 rounded-lg text-white text-center">
                      <div className="text-xs text-white/70">Inversores</div>
                      <div className="font-bold text-lg text-[#ffed00]">{recommendedKit.microInverters}</div>
                    </div>
                    <div className="bg-[#1c355f] p-3 rounded-lg text-white text-center">
                      <div className="text-xs text-white/70">Painéis</div>
                      <div className="font-bold text-lg text-[#ffed00]">{recommendedKit.panels}</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#ffed00] to-[#ffe34d] p-4 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-[#1c355f]/70 text-xs font-bold mb-1">
                        Investimento
                      </div>
                      <div className="text-3xl font-bold text-[#1c355f] mb-2">
                        {formatPrice(recommendedKit.financedPrice)}
                      </div>
                      <div className="text-[#1c355f] text-xs font-bold">
                        ou {calculateMonthlyPayment(recommendedKit.financedPrice)}/mês
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=5534984214728&text=Olá! Gostaria de mais informações sobre o ${recommendedKit.name} para um consumo de ${generation}kWh. Valor: ${formatPrice(recommendedKit.financedPrice)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-[#1c355f] text-white group"
                  >
                    <span>Orçamento</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )}

            {!showResult && (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1c355f]/5 rounded-full mb-4">
                  <Sun className="w-8 h-8 text-[#1c355f]/30" />
                </div>
                <p className="text-[#1c355f]/50 text-sm">
                  Digite seu consumo para ver o kit ideal
                </p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#1c355f] to-[#2a4575] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-[#ffed00]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Atendimento
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                Confira nossos horários e agende sua visita
              </p>
            </div>

            <div className="p-6 md:p-8">
              <ul className="space-y-3">
                {days.map((item) => {
                  const isSelected = item.day === selectedDay;
                  return (
                    <li
                      key={item.day}
                      onClick={() => setSelectedDay(item.day)}
                      className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-300 border-l-4 ${
                        isSelected
                          ? 'bg-[#1c355f] text-white border-l-[#ffed00]'
                          : 'bg-[#f5f5f5] text-[#1c355f] border-l-transparent hover:bg-[#efefef]'
                      }`}
                    >
                      <span className="font-semibold text-sm">{item.day}</span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-[#ffed00]' : 'text-[#1c355f]'}`}>
                        {item.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contato"
                className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-[#ffed00] to-[#ffe34d] text-[#1c355f] group"
              >
                <span>Agendar Horário</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SolarSimulator;
