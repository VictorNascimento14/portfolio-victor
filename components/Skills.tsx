import React from 'react';
import { SKILLS } from '../constants';
import ProgressBar from './ProgressBar';
import CurvedLoop from '../src/component/CurvedLoop';

const Skills: React.FC = () => {
  return (
    <section 
      id="habilidades" 
      // O 'relative' aqui é fundamental para que o 'absolute' do CurvedLoop funcione
      className="relative w-full h-screen flex items-center justify-center bg-black pattern text-white py-8 snap-start overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 w-full z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-7xl font-heading uppercase text-white font-black tracking-tight">
            MINHAS <span className="text-primary">HABILIDADES</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-text-secondary max-w-2xl mx-auto mt-6 text-2xl leading-relaxed">
            Tenho experiência em diversas tecnologias de desenvolvimento web e mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-10">
          {SKILLS.map((skillCategory) => (
            <div key={skillCategory.category} className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-6 text-center md:text-left">
                {skillCategory.category}
              </h3>
              <div className="space-y-6">
                {skillCategory.technologies.map((tech, index) => (
                  <div key={tech.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProgressBar label={tech.name} percentage={tech.percentage} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPONENTE NO CANTINHO INFERIOR */}
      <div className="absolute bottom-[-320px] left-0 w-full z-0 translate-y-10 sm:translate-y-20">
        <CurvedLoop 
          marqueeText="DESENVOLVIMENTO WEB ✦ MOBILE ✦ UI/UX ✦ CSS ✦ HTML ✦ REACT ✦"
          speed={0.2}
          curveAmount={40} 
          direction="left"
          interactive={true}
          className="text-primary font-black uppercase text-4xl sm:text-3xl opacity-50 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  );
};

export default Skills;