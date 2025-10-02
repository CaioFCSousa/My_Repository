import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_67hzelh",   // substitua pelo seu service ID
      "template_2yepk3n",  // substitua pelo seu template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "hsqV72qQK0qR4Aahb"  // substitua pelo seu Public Key (antigo userID)
    ).then(
      () => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error("Erro ao enviar:", error.text);
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/CaioFCSousa', color: 'hover:text-gray-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/caio-fernando-29ba34287/', color: 'hover:text-blue-600' },
    { name: 'Email', icon: Mail, url: 'caiofernandocardoso6@gmail.com', color: 'hover:text-red-500' }
  ];

  return (
    <section 
      id="contato" 
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Vamos conversar sobre seu próximo projeto!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Vamos nos conectar
              </h3>
              <p className={`text-lg mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Entre em contato através das redes sociais ou envie uma mensagem diretamente.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className={`p-4 rounded-xl ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  } transition-all duration-300 transform hover:scale-110 ${link.color}`}
                  title={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Nome
              </label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Mensagem
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none`}
                placeholder="Sua mensagem..."
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
