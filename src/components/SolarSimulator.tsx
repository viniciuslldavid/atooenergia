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
  image: string;
  description: string;
}

const solarKits: SolarKit[] = [
  {
    id: 1,
    name: 'Kit Solar Residencial Básico',
    minConsumption: 100,
    maxConsumption: 200,
    microInverters: 1,
    panels: 4,
    power: '1,6 kWp',
    price: 8500,
    image: 'https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    price: 15800,
    image: 'https://images.pexels.com/photos/9875454/pexels-photo-9875454.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    price: 22500,
    image: 'https://images.pexels.com/photos/9875463/pexels-photo-9875463.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    price: 32000,
    image: 'https://images.pexels.com/photos/9875467/pexels-photo-9875467.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Adequado para estabelecimentos comerciais'
  },
  {
    id: 5,
    name: 'Kit Solar Industrial',
    minConsumption: 800,
    maxConsumption: 1200,
    microInverters: 6,
    panels: 24,
    power: '9,6 kWp',
    price: 45000,
    image: 'https://images.pexels.com/photos/9875471/pexels-photo-9875471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Para indústrias e grandes consumidores'
  }
];

const SolarSimulator = () => {
  const [consumption, setConsumption] = useState<string>('');
  const [recommendedKit, setRecommendedKit] = useState<SolarKit | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (consumption) {
      const consumptionValue = parseInt(consumption);
      const kit = solarKits.find(
        kit => consumptionValue >= kit.minConsumption && consumptionValue <= kit.maxConsumption
      );
      
      if (kit) {
        setRecommendedKit(kit);
        setShowResult(true);
      } else if (consumptionValue > 1200) {
        // Para consumos muito altos, mostrar o kit maior
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
  }, [consumption]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const calculateMonthlyPayment = (totalPrice: number) => {
    // Simulação de parcela em 60 meses com juros
    const monthlyPayment = totalPrice * 0.025;
    return formatPrice(monthlyPayment);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
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
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
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
                          {formatPrice(recommendedKit.price)}
                        </div>
                        <div className="text-sm text-gray-600">
                          ou {calculateMonthlyPayment(recommendedKit.price)}/mês
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <a
                      href={`https://api.whatsapp.com/send?phone=5534984214728&text=Olá! Gostaria de mais informações sobre o ${recommendedKit.name} para um consumo de ${consumption}kWh. Valor: ${formatPrice(recommendedKit.price)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
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