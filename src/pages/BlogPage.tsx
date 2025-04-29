import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ChevronRight, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    document.title = 'Blog | ATO Energia';
    
    const addAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach(el => observer.observe(el));
      
      return () => {
        animatedElements.forEach(el => observer.unobserve(el));
      };
    };
    
    addAnimations();
    
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Como a Energia Solar pode reduzir sua conta de luz em até 95%',
      excerpt: 'Descubra como a instalação de painéis solares pode transformar sua relação com a energia elétrica e trazer economia significativa para o seu orçamento.',
      image: 'https://images.pexels.com/photos/359152/pexels-photo-359152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '15 de Junho, 2023',
      author: 'Carlos Souza',
      category: 'Energia Solar'
    },
    {
      id: 2,
      title: 'Eficiência Energética: 10 dicas práticas para sua casa',
      excerpt: 'Implementando pequenas mudanças no dia a dia, você pode reduzir seu consumo de energia e economizar sem perder o conforto. Confira nossas dicas.',
      image: 'https://images.pexels.com/photos/3952050/pexels-photo-3952050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '28 de Maio, 2023',
      author: 'Ana Oliveira',
      category: 'Eficiência Energética'
    },
    {
      id: 3,
      title: 'O futuro da energia no Brasil: tendências e desafios',
      excerpt: 'Análise das principais tendências no setor energético brasileiro e os desafios para a implementação de uma matriz energética mais sustentável.',
      image: 'https://images.pexels.com/photos/1108302/pexels-photo-1108302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '10 de Maio, 2023',
      author: 'Marcos Silva',
      category: 'Tendências'
    },
    {
      id: 4,
      title: 'Mercado livre de energia: como funciona e quem pode participar',
      excerpt: 'Entenda as regras do mercado livre de energia elétrica no Brasil e descubra se sua empresa pode se beneficiar deste modelo de contratação.',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '02 de Maio, 2023',
      author: 'Juliana Costa',
      category: 'Mercado de Energia'
    },
    {
      id: 5,
      title: 'Manutenção de painéis solares: o que você precisa saber',
      excerpt: 'Dicas essenciais para manter seu sistema fotovoltaico funcionando com máxima eficiência e garantir a durabilidade do seu investimento.',
      image: 'https://images.pexels.com/photos/9875362/pexels-photo-9875362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '18 de Abril, 2023',
      author: 'Carlos Souza',
      category: 'Energia Solar'
    },
    {
      id: 6,
      title: 'ESG e energia: como sua empresa pode se beneficiar',
      excerpt: 'A adoção de práticas sustentáveis no consumo energético pode fortalecer a imagem da sua empresa e trazer vantagens competitivas. Saiba como.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '05 de Abril, 2023',
      author: 'Ana Oliveira',
      category: 'Sustentabilidade'
    }
  ];

  const categories = ['Energia Solar', 'Eficiência Energética', 'Tendências', 'Mercado de Energia', 'Sustentabilidade'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog da ATO Energia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Novidades, dicas e informações sobre o mundo da energia renovável e sustentabilidade.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll opacity-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-52 object-cover object-center" 
                      />
                      <div className="p-6">
                        <div className="text-sm text-blue-600 font-medium mb-2">
                          {post.category}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          Ler mais
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-xl text-gray-600">Nenhum artigo encontrado para sua busca.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                      }}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Limpar filtros
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categorias</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${
                        selectedCategory === '' 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <ChevronRight size={16} className="mr-2" />
                      Todas as categorias
                    </button>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === category 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <ChevronRight size={16} className="mr-2" />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Inscreva-se para receber as últimas notícias e dicas sobre energia.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Inscrever-se
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default BlogPage;