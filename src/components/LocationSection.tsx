import { MapPin, Phone, Mail } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-20">
        {/* Mapa do Google */}
        <div className="w-full max-w-xl h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            title="Localização Ato Energia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.578170010917!2d-48.25724292412926!3d-18.914728807960934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4456e39ec5f8d%3A0x6aa61cc0b2e41461!2sAv.%20Belarmino%20Cotta%20Pacheco%2C%20411%20-%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-168!5e0!3m2!1spt-BR!2sbr!4v1714821160736!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Informações */}
        <div className="w-full max-w-xl text-gray-800 space-y-8">
          <h2 className="text-4xl font-bold text-[#1C2C3A] text-center">Como nos encontrar</h2>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">ENDEREÇO</p>
              <p className="text-lg leading-snug">
                Av. Belarmino Cotta Pacheco, 411<br />
                Santa Mônica, Uberlândia - MG<br />
                38408-168
              </p>
              <a
                href="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d400.56998568955345!2d-48.25534390329891!3d-18.91484211343408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94a4450733d53147%3A0x9a08000dfd3859c3!2sAv.%20Belarmino%20Cotta%20Pacheco%2C%20411%20-%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-168!3m2!1d-18.9147064!2d-48.255041299999995!5e0!3m2!1spt-BR!2sbr!4v1746336208520!5m2!1spt-BR!2sbr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-blue-900 text-white px-5 py-2 rounded-full font-bold tracking-wide shadow hover:bg-blue-800 hover:scale-105 transform transition duration-300"
              >
                COMO CHEGAR
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">TELEFONE</p>
              <p className="text-lg">(34) 98421-4728 • (34) 3045-1053</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">EMAIL</p>
              <p className="text-lg">contato@atoenergia.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 mt-1 text-green-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.205-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zm-5.421 7.118h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.656-.235-.375a9.86 9.86 0 01-1.51-5.27c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.89 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .164 5.332.16 11.888c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.685a11.865 11.865 0 005.664 1.441h.005c6.554 0 11.884-5.332 11.888-11.888a11.822 11.822 0 00-3.491-8.443z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">WHATSAPP</p>
              <p className="text-lg">034 98421-4728</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
