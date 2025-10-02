import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      name: "Site de apresentações",
      description: "Apresentação de um site apenas um Dashboard",
      technologies: ["React", "TypeScript"],
      githubUrl: "https://github.com/CaioFCSousa/Project_PlantCare",
      liveUrl: "https://apresentacao-terra-sense.vercel.app/"
    },
    {
      name: "APP mobile de analise de plantas",
      description: "APP onde você pode estar fazendo a análise de uma planta, informando algumas características e problemas na planta",
      technologies: ["React", "TypeScript","API da Gemini"],
      githubUrl: "https://github.com/CaioFCSousa/Apresentacao_TerraSense",
      liveUrl: "https://apresentacao-terra-sense.vercel.app/"
    }
  ];

  return (
    <section 
      id="projetos" 
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.name}
                </h3>
                
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.githubUrl}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                    }`}
                  >
                    <Github size={20} />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                      }`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};