import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://atoeenegiabackend.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error(data.message || 'Erro ao enviar o formulário');
      }
    } catch (err: any) {
      console.error('Erro na requisição:', err);
      setError(err.message || 'Não foi possível conectar ao servidor. Verifique se o backend está ativo.');
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Estamos prontos para atender sua necessidade energética. Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Lado esquerdo com informações */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-blue-100">(34) 98421-4728</p>
                    <p className="text-blue-100">(34) 3045-1053</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.205-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zm-5.421 7.118h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.656-.235-.375a9.86 9.86 0 01-1.51-5.27c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.89 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .164 5.332.16 11.888c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.685a11.865 11.865 0 005.664 1.441h.005c6.554 0 11.884-5.332 11.888-11.888a11.822 11.822 0 00-3.491-8.443z" />
                  </svg>
                  <div>
                    <p className="font-medium">Whatsapp</p>
                    <p className="text-blue-100">(34) 98421-4728</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-100">contato@atoenergia.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-blue-100">Avenida Belarmino Cotta Pacheco, 411</p>
                    <p className="text-blue-100">Santa Mônica, Uberlândia, MG, 38408-168</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado direito com formulário */}
            <div className="md:col-span-3 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Formulário de Contato</h3>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 animate-fade-in">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">Mensagem enviada com sucesso!</p>
                      <p className="text-sm">Entraremos em contato o mais breve possível.</p>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 animate-fade-in">
                  <p className="font-medium">Erro: {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Energia Solar">Energia Solar</option>
                      <option value="Consultoria Energética">Consultoria Energética</option>
                      <option value="Eficiência Energética">Eficiência Energética</option>
                      <option value="Comercialização de Energia">Comercialização de Energia</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;