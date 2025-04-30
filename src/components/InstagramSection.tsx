import { FaInstagram, FaHeart, FaRegComment } from 'react-icons/fa';

const InstagramSection = () => {
  const instagramPosts = [
    {
      image: 'https://scontent.cdnsnapwidget.com/v/t51.71878-15/468572695_2921099301400051_5489167687277998555_n.jpg',
      link: 'https://www.instagram.com/ato.energia',
      date: 'Nov 28, 2024',
      caption: '',
    },
    {
      image: 'https://scontent.cdnsnapwidget.com/v/t51.71878-15/468231796_1349930043044432_2700269342921905811_n.jpg',
      link: 'https://www.instagram.com/ato.energia',
      date: 'Nov 26, 2024',
      caption: '',
    },
    {
      image: 'https://scontent.cdnsnapwidget.com/v/t51.75761-15/467837742_17967117038807541_158311600544659219_n.jpg',
      link: 'https://www.instagram.com/ato.energia',
      date: 'Nov 21, 2024',
      caption: 'Faltam 2 dias para a Black Friday!',
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
