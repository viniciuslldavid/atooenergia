import React, { useState, useEffect } from 'react';
import { Calculator, Zap, Sun } from 'lucide-react';

interface SolarKit {
  id: number;
  name: string;
  minConsumption: number;
  maxConsumption: number;
  microInverters: number;
  panels: number;
  power: string;
  price: number;
  financedPrice: number;  // This is the "Financiado" price
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
    description: 'Para consumidores comerciais muito grandes'
  }
];


const SolarSimulator = () => {
  const [generation, setGeneration] = useState<string>(''); // User's input for Geração
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
      } else if (generationValue > 1200) {
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
    const monthlyPayment = totalPrice * 0.025; // Simulating payment over 60 months with a 2.5% monthly rate
    return formatPrice(monthlyPayment);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Simule seu Sistema Solar
          </h2>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            Descubra qual kit solar é ideal para você baseado no seu consumo mensal de energia
          </p>
        </div>

        {/* Simulador */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Qual é o seu consumo mensal?
              </h3>
              <p className="text-gray-600 mb-6">
                Informe o consumo em kWh que aparece na sua conta de luz
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="number"
                    value={generation}
                    onChange={(e) => setGeneration(e.target.value)}
                    placeholder="Ex: 250"
                    className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition duration-300"
                  />
                  <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    kWh
                  </span>
                </div>
              </div>
            </div>

            {/* Resultado da Simulação */}
            {showResult && recommendedKit && (
              <div className="border-t pt-8 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Imagem do Sistema */}
                  <div className="text-center">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={recommendedKit.image}
                        alt={recommendedKit.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h4 className="font-bold text-lg">{recommendedKit.name}</h4>
                          <p className="text-sm opacity-90">{recommendedKit.power}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detalhes do Sistema */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">
                        {recommendedKit.name}
                      </h4>
                    </div>

                    {/* Especificações */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Micro Inversores</div>
                        <div className="font-bold text-lg text-gray-800">
                          {recommendedKit.microInverters}
                        </div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <Sun className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Painéis Solares</div>
                        <div className="font-bold text-lg text-gray-800">
                          {recommendedKit.panels}
                        </div>
                      </div>
                    </div>

                    {/* Preços */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Investimento Total</div>
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {formatPrice(recommendedKit.financedPrice)}
                        </div>
                        <div className="text-sm text-gray-600">
                          ou {calculateMonthlyPayment(recommendedKit.financedPrice)}/mês
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <a
                      href={`https://api.whatsapp.com/send?phone=5534984214728&text=Olá! Gostaria de mais informações sobre o ${recommendedKit.name} para um consumo de ${generation}kWh. Valor: ${formatPrice(recommendedKit.financedPrice)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-[#fcec04] to-[#fcec04] hover:from-[#fcec04] hover:to-[#fcec04] text-[#040c6c]"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSimulator;
