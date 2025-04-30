import bdmg from '../assets/images/logo/bdmg.png';
import meusolar from '../assets/images/logo/meusolar.jpeg';
import bancobradesco from '../assets/images/logo/bancobradesco.jpg';
import sicooblogo from '../assets/images/logo/sicooblogo.png';
import itau from '../assets/images/logo/itau.svg';
import solfacil from '../assets/images/logo/solfacil.jpg';

const banks = [
  { name: 'BDMG', logo: bdmg },
  { name: 'Meu Financiamento Solar', logo: meusolar },
  { name: 'Bradesco', logo: bancobradesco },
  { name: 'Sicoob', logo: sicooblogo },
  { name: 'Itaú', logo: itau },
  { name: 'Solfácil', logo: solfacil },
];

const FinancingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Simule o seu financiamento
        </h2>
        <p className="text-gray-600 font-bold text-lg mb-10">
          Trabalhamos com os principais bancos e instituições financeiras
        </p>

        <div className="flex flex-wrap justify-center items-center gap-1 mb-12">
          {banks.map((bank, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${bank.name === 'BDMG' ? 'w-[150px] h-[80px]' : 'w-[200px] h-[110px]'
                }`}
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="max-h-full max-w-full object-contain transition duration-300"
              />
            </div>
          ))}
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5534984214728&text=Ol%C3%A1%2C%20tudo%20bem%3F%20%20%F0%9F%98%81%20%20Estou%20no%20site%20da%20Ato%20Solar%20e%20gostaria%20de%20saber%20como%20funciona%20o%20financiamento%20Solar%2C%20muito%20obrigada!%20%E2%98%80%EF%B8%8F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-medium tracking-wide shadow hover:bg-blue-800 hover:scale-105 transform transition duration-300"
        >
          Simular Agora
        </a>

      </div>
    </section>
  );
};

export default FinancingSection;
