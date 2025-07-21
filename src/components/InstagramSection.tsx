import { FaInstagram, FaHeart, FaRegComment } from 'react-icons/fa';

const InstagramSection = () => {
  const instagramPosts = [
    {
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1753107182/517565624_733492789441282_722328339883343156_n_kmixz1.jpg',
      date: 'Nov 28, 2024',
      caption: 'Tem gente economizando mais de R$700 por mês com energia solar. Já pensou o que dá pra fazer com isso? Foi o caso do Fábio, do...',
    },
    {
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1753107182/Voc%C3%AA_sabia_que_d%C3%A1_pra_acompanhar_a_gera%C3%A7%C3%A3o_de_energia_solar_direto_do_celular_E_o_melhor-_sem_fidhe5.jpg',
      link: 'https://www.instagram.com/ato.energia',
      date: 'Nov 26, 2024',
      caption: '📱 Você sabia que dá pra acompanhar a geração de energia solar direto do celular? E o melhor: sem pagar nada a mais por isso...',
    },
    {
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1753107182/Ato._significa_a%C3%A7%C3%A3o_trabalho_e_otimismo.Nossa_empresa_representa_atitude_comprometimento_movi_dwqqcn.jpg',
      link: 'https://www.instagram.com/ato.energia',
      date: 'Nov 21, 2024',
      caption: 'Ato. significa ação, trabalho e otimismo. Nossa empresa representa atitude, comprometimento, movimento e ENERGIA ⚡... ',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Conheça mais do nosso trabalho no Instagram
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow rounded-xl overflow-hidden max-w-[320px] w-full"
            >
              {/* Cabeçalho estilo Instagram */}
              <div className="flex items-center justify-between px-4 py-3 border-b text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaInstagram className="text-pink-500" />
                  <span className="font-bold">ato.energia</span>
                </div>
                <span>{post.date}</span>
              </div>

              {/* Imagem do post */}
              <div className="w-full h-[320px] bg-gray-200">
                <img
                  src={post.image}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ações e legenda */}
              <div className="px-4 py-3 text-sm text-gray-700">
                <div className="flex gap-4 mb-1">
                  <FaHeart className="text-gray-700" />
                  <FaRegComment className="text-gray-700" />
                </div>
                {post.caption && (
                  <p>
                    <span className="font-bold">ato.energia </span>
                    {post.caption}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
