
import React, { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectDetailCardProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Impede o scroll do fundo

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-surface-dark rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] grid grid-cols-1 md:grid-cols-2 animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no card
      >
        <div className="relative overflow-hidden h-64 md:h-auto">
          <img src={project.fullImageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10" aria-label="Fechar detalhes do projeto">
            <span className="material-symbols-outlined">close</span>
          </button>

          <p className="font-display text-sm uppercase tracking-widest text-primary mb-2">{project.category}</p>
          <h2 id="project-title" className="font-heading text-2xl sm:text-4xl uppercase text-white mb-4 leading-none">{project.title}</h2>

          <div className="flex items-center text-text-secondary text-sm mb-6">
            <span>{project.year}</span>
          </div>


          <div className="text-text-secondary leading-relaxed space-y-4">
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/80 transition-colors"
                >
                  Visitar Projeto
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-gray-700 transition-colors"
                >
                  Ver no GitHub
                </a>
              )}
            </div>
          </div>

          {project.tags.length > 0 && (
            <div className="mt-auto pt-6">
              <h3 className="text-lg font-bold mb-3 text-white">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-background-dark text-text-secondary px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;