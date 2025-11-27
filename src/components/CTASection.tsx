
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Leaf } from 'lucide-react';


<div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">Transformação Sustentável</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Pronto para Começar sua Jornada Solar?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Nossos especialistas estão prontos para analisar sua situação e criar uma solução personalizada com máximo potencial de economia e sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-32 h-32 text-yellow-300 opacity-30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>