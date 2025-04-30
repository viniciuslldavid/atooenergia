import bdmg from '../assets/images/logo/bdmg.png';
import meusolar from '../assets/images/logo/meusolar.png';




const banks = [
    { name: 'BDMG', logo: bdmg },
    { name: 'Meu Financiamento Solar', logo: meusolar },
    { name: 'Bradesco', logo: '/logos/bradesco.png' },
    { name: 'Sicoob', logo: '/logos/sicoob.png' },
    { name: 'Itaú', logo: '/logos/itau.png' },
    { name: 'Solfácil', logo: '/logos/solfacil.png' },
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
  
          <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
            {banks.map((bank, index) => (
              <div key={index} className="w-[120px] h-[60px] flex items-center justify-center">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
  
          <a
            href="#"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-medium tracking-wide shadow hover:bg-blue-800 transition duration-300"
          >
            Simular Agora
          </a>
        </div>
      </section>
    );
  };
  
  export default FinancingSection;
  