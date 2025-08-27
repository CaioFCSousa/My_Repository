import React from 'react';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML / CSS / JavaScript', level: 88 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'Banco de Dados (SQL, NoSQL)', level: 75 }
  ];

  return (
    <section 
      id="habilidades" 
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <span className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className={`w-full h-3 rounded-full ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              } overflow-hidden`}>
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out skill-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};