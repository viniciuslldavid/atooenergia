import React from 'react';
import HarmonyBackground from './HarmonyBackground';

function InstagramSection() {
  const instagramPosts = [
    {
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1753107182/517565624_733492789441282_722328339883343156_n_kmixz1.jpg',
      date: 'Nov 28, 2024',
      caption: 'Tem gente economizando mais de R$700 por mês com energia solar. Já pensou o que dá pra fazer com isso? Foi o caso do Fábio, do...',
    },
    {
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1753107182/Voc%C3%AA_sabia_que_d%C3%A1_pra_acompanhar_a_gera%C3%A7%C3%A3o_de_energia_solar_direto_do_celular_E_o_melhor-_sem_fidhe5.jpg',
      date: 'Nov 26, 2024',
      caption: '📱 Você sabia que dá pra acompanhar a geração de energia solar direto do celular? E o melhor: sem pagar nada a mais por isso...',
    },
    {
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1753107182/Ato._significa_a%C3%A7%C3%A3o_trabalho_e_otimismo.Nossa_empresa_representa_atitude_comprometimento_movi_dwqqcn.jpg',
      date: 'Nov 21, 2024',
      caption: 'Ato. significa ação, trabalho e otimismo. Nossa empresa representa atitude, comprometimento, movimento e ENERGIA ⚡... ',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#40959b] to-[#1c2f58] text-white py-20">
      <HarmonyBackground variant="secondary" />

      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-80 z-20">
        <img
          src="https://res.cloudinary.com/duzbjndww/image/upload/v1764573566/20251201_0417_Bolinhas_Amarelas_Vibrantes_remix_01kbcc9q2xfsw8k5t0tszzr3n8-removebg-preview_exfdmi.png"
          alt="Decorative"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">Acompanhe nossas novidades</h2>
          <p className="text-white/70 text-lg">Fique por dentro das últimas notícias e projetos de energia solar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest text-[#ffed00] mb-3 uppercase">
                  {post.date}
                </p>
                <p className="text-sm text-white/95 leading-relaxed line-clamp-4">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/ato.energia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#40959b] px-8 py-4 rounded-full font-bold text-base hover:bg-[#ffed00] hover:text-[#1c355f] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            Acesse nosso Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
