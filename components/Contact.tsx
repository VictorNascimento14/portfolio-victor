import React from 'react';
import Footer from './Footer';

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/VictorNascimento14', 
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" /></svg> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/--dev-victor-nascimento/', 
    icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> 
  },
  { 
    name: 'Email', 
    url: 'mailto:victor.dev.nascimento@gmail.com', 
    icon: <span className="material-symbols-outlined text-4xl">mail</span> 
  },
];

const Contact: React.FC = () => {
  return (
    <section 
      id="contato"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(strong.png)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' 
      }}
      className="relative w-full h-screen flex flex-col items-center justify-between text-white snap-start overflow-hidden"
    >
      {/* Espaçador superior para empurrar o conteúdo para o centro */}
      <div />

      {/* Conteúdo Central */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-6xl font-black mb-6">
          Vamos Conversar
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Interessado em trabalhar juntos ou apenas quer bater um papo?
        </p>

        <div className="flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-full border-2 border-white/20 hover:border-[#fb2c55] transition-all duration-300 hover:-translate-y-2 bg-black/40 backdrop-blur-md shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Footer na base */}
      <div className="w-full relative z-10">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;