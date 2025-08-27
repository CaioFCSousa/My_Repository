import React from 'react';
import { Code, Database, GitBranch, Github } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const technologies = [
    { name: 'Python', icon: Code, color: 'text-blue-500' },
    { name: 'React', icon: Code, color: 'text-cyan-500' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
    { name: 'GitHub', icon: Github, color: 'text-gray-500' }
  ];

  return (
    <section 
      id="sobre" 
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sobre mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Sou um desenvolvedor apaixonado por tecnologia, com foco em Python para back-end 
              e React para front-end. Busco sempre aprender novas ferramentas e aplicar 
              boas práticas de desenvolvimento em meus projetos.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Com experiência em desenvolvimento web, estou constantemente explorando 
              novas tecnologias e metodologias para criar soluções eficientes e escaláveis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tech.icon className={`${tech.color} mb-4`} size={48} />
                <h3 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};