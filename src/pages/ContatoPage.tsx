import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Zap, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contato | ATO Energia';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Belarmino Cotta Pacheco, 411',
      subContent: 'Santa Mônica, Uberlândia - MG',
      color: 'from-[#1c355f] to-[#1c355f]/90'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(34) 3216-0000',
      subContent: 'Seg-Sex 8h às 18h',
      color: 'from-[#ffed00] to-[#ffd700]',
      textColor: 'text-[#1c355f]'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@atoenergia.com.br',
      subContent: 'Resposta em até 24h',
      color: 'from-[#1c355f] to-[#1c355f]/90'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda à Sexta',
      subContent: '8:00 às 18:00',
      color: 'from-[#ffed00] to-[#ffd700]',
      textColor: 'text-[#1c355f]'
    }
  ];

  return (
    <div>
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#1c355f] via-[#1c355f] to-[#1c355f]/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#ffed00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffed00] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#ffed00]/20 backdrop-blur-sm border border-[#ffed00]/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-[#ffed00]" />
              <span className="text-[#ffed00] font-bold text-sm uppercase tracking-wide">Estamos Aqui Para Ajudar</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Entre em Contato
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estamos prontos para responder todas as suas dúvidas e ajudar a transformar sua relação com a energia.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl animate-on-scroll opacity-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2217806279018!2d-48.25504568936946!3d-18.914728027402667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450733d53147%3A0x9a08000dfd3859c3!2sAto.Energia!5e0!3m2!1spt-BR!2sbr!4v1745951591180!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da ATO Energia"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const textColorClass = info.textColor || 'text-white';

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${info.color} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-on-scroll opacity-0`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg ${info.textColor ? 'bg-[#1c355f]/10' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${textColorClass || 'text-white'}`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${textColorClass || 'text-white'}`}>{info.title}</h3>
                  <p className={`font-bold text-sm mb-1 ${textColorClass || 'text-white'}`}>{info.content}</p>
                  <p className={`text-sm ${textColorClass || 'text-white'}/80`}>{info.subContent}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
                <h2 className="text-3xl font-bold text-[#1c355f] mb-8">Envie uma Mensagem</h2>

                {submitted && (
                  <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-900">Mensagem enviada com sucesso!</p>
                      <p className="text-green-700 text-sm">Em breve entraremos em contato.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1c355f] mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1c355f] focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1c355f] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1c355f] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1c355f] mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1c355f] focus:outline-none transition-colors"
                      placeholder="(34) 9 9999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1c355f] mb-2">Tipo de Serviço</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1c355f] focus:outline-none transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="agro">Agro</option>
                      <option value="usinas">Usinas</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1c355f] mb-2">Mensagem</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1c355f] focus:outline-none transition-colors resize-none"
                      placeholder="Conte-nos sobre seu projeto"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1c355f] to-[#1c355f]/90 hover:from-[#1c355f]/90 hover:to-[#1c355f] text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '200ms' }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#1c355f] mb-6">Por que nos contatar?</h3>
                  <div className="space-y-4">
                    {[
                      'Orçamento personalizado e sem compromisso',
                      'Análise gratuita da sua propriedade',
                      'Consultoria especializada em energia solar',
                      'Equipe dedicada a encontrar a melhor solução',
                      'Resposta rápida e atendimento de qualidade'
                    ].map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#ffed00] flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-[#1c355f]" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1c355f] to-[#1c355f]/90 rounded-2xl p-8 shadow-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Horário de Atendimento</h4>
                  <div className="space-y-3 text-white/90">
                    <p><strong>Segunda à Sexta:</strong> 8:00 - 18:00</p>
                    <p><strong>Sábado:</strong> 8:00 - 12:00</p>
                    <p><strong>Domingo e Feriados:</strong> Fechado</p>
                  </div>
                </div>

                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center gap-2 bg-[#ffed00] hover:bg-[#ffd700] text-[#1c355f] w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Ver Nossos Serviços
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-[#1c355f] to-[#1c355f]/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar sua Energia?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Solicite um orçamento gratuito e descubra quanto você pode economizar com energia solar.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-[#ffed00] hover:bg-[#ffd700] text-[#1c355f] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
