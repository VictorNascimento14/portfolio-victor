
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper/types';

import { PROJECTS } from '../constants';
import type { Project } from '../types';
import ProjectDetailCard from './ProjectDetailCard';

// Ordena os projetos por ID para garantir uma ordem consistente e previsível no carrossel.
const sortedProjects = [...PROJECTS].sort((a, b) => a.id - b.id);

const Projects: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const swiperRef = useRef<SwiperCore | null>(null);
    const activeProject = sortedProjects[activeIndex];

    const handleSlideChange = (swiper: SwiperCore) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <>
            <section id="projetos" className="relative w-full flex flex-col min-h-screen justify-center overflow-hidden bg-background-dark py-16 md:py-24 snap-start">
                {/* Background Image */}
                                {/* Background removido conforme solicitado */}

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-12">
                         <p className="text-lg text-text-secondary uppercase tracking-[0.2em] font-medium">Portfólio</p>
                         <h2 className="text-4xl sm:text-5xl font-heading uppercase text-primary font-black tracking-tight mt-1">
                            Meus Projetos
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    
                    <div className="h-28">
                        <div key={activeProject.id} className="animate-fade-in">
                            <p className="font-display text-sm uppercase tracking-widest text-text-secondary">{activeProject.category}</p>
                            <h3 className="mt-1 font-heading text-4xl lg:text-5xl uppercase leading-none text-white">
                                {activeProject.title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <div className="relative z-10 w-full mt-8">
                     <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={false}
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 200,
                          modifier: 1,
                          slideShadows: false,
                        }}
                        onSlideChange={handleSlideChange}
                        modules={[EffectCoverflow, Navigation]}
                        className="w-full"
                    >
                        {sortedProjects.map((project) => (
                                                        <SwiperSlide key={project.id} className="!w-[300px] sm:!w-[400px] lg:!w-[500px] group">
                                                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105 bg-background-dark">
                                                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover cursor-pointer" loading="lazy" onClick={() => handleProjectClick(project)} />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                                                                <h4 className="font-heading text-2xl text-white uppercase cursor-pointer" onClick={() => handleProjectClick(project)}>{project.title}</h4>
                                                                                <p className="text-white/80 text-sm cursor-pointer" onClick={() => handleProjectClick(project)}>{project.category}</p>
                                                                        </div>
                                                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                            <button
                                                                                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2 shadow-lg hover:bg-primary/80 transition-colors"
                                                                                onClick={() => handleProjectClick(project)}
                                                                                title="Ver detalhes"
                                                                            >
                                                                                <span className="material-symbols-outlined text-4xl text-white">add</span>
                                                                            </button>
                                                                            <div className="flex gap-2">
                                                                                {project.demoUrl && (
                                                                                    <a
                                                                                        href={project.demoUrl}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="px-3 py-1 bg-primary text-white rounded-lg text-xs font-semibold shadow hover:bg-primary/80 transition-colors"
                                                                                        onClick={e => e.stopPropagation()}
                                                                                    >
                                                                                        Projeto
                                                                                    </a>
                                                                                )}
                                                                                {project.githubUrl && (
                                                                                    <a
                                                                                        href={project.githubUrl}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="px-3 py-1 bg-gray-800 text-white rounded-lg text-xs font-semibold shadow hover:bg-gray-700 transition-colors"
                                                                                        onClick={e => e.stopPropagation()}
                                                                                    >
                                                                                        GitHub
                                                                                    </a>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full max-w-[1400px] left-1/2 -translate-x-1/2 flex justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
                                                <button
                                                    onClick={() => {
                                                        if (!swiperRef.current) return;
                                                        if (swiperRef.current.realIndex === 0) return;
                                                        swiperRef.current.slidePrev();
                                                    }}
                                                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/50 transition-colors hover:border-white hover:text-white backdrop-blur-sm"
                                                >
                                                    <span className="material-symbols-outlined">chevron_left</span>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (!swiperRef.current) return;
                                                        if (swiperRef.current.realIndex === sortedProjects.length - 1) return;
                                                        swiperRef.current.slideNext();
                                                    }}
                                                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/50 transition-colors hover:border-white hover:text-white backdrop-blur-sm"
                                                >
                                                    <span className="material-symbols-outlined">chevron_right</span>
                                                </button>
                    </div>
                </div>
            </section>
            {selectedProject && (
                <ProjectDetailCard 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </>
    );
};

export default Projects;
