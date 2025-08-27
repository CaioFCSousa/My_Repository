import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const scrollToNext = () => {
    const element = document.getElementById('sobre');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio" 
      className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className={`text-4xl sm:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Caio Fernando
            </span>
          </h1>
          
          <h2 className={`text-xl sm:text-2xl mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Desenvolvedor Full-stack
          </h2>
          
          <p className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Transformando ideias em código, com foco em Python e React.
          </p>
          
          <button
            onClick={scrollToNext}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
          >
            Conheça meu trabalho
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className={isDark ? 'text-gray-400' : 'text-gray-600'} size={32} />
      </button>
    </section>
  );
};