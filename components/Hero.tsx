import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    const scriptId = 'unicorn-studio-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      script.onload = () => {
        // @ts-ignore
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          // @ts-ignore
          window.UnicornStudio.init();
          // @ts-ignore
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center text-center bg-black pt-20 snap-start overflow-hidden">
      
      {/* Container do Background com "Safe Area" */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          data-us-project="N9XzvQXu7fA5SY2ewADJ" 
          className="w-full"
          style={{ 
            height: '110vh', // 10% maior que a tela para a linha ficar "para baixo" do campo de visão
            marginTop: '-5vh' // Centraliza o excesso
          }}
        ></div>
        
        {/* Máscara de Gradiente Reforçada */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            // Gradiente mais longo (começa em 60%) para garantir que a linha suma
            background: 'linear-gradient(to bottom, transparent 60%, black 98%, black 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6">
          Designer Criativo <span className="text-[#fb2c55]">&</span> <br className="hidden md:block" /> Desenvolvedor Fullstack
        </h1>
        
        <p className="text-base sm:text-lg md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
          Transformando ideias em experiências digitais memoráveis. Foco em interfaces intuitivas e código performático.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projetos" className="bg-[#fb2c55] text-white font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(251,44,85,0.3)]">
            Ver meus projetos
          </a>
          <a href="#contato" className="bg-white/5 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;