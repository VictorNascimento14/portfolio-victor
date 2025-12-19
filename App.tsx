
import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const currentSectionIndexRef = useRef(0);
    const sectionIds = ['hero', 'sobre', 'habilidades', 'projetos', 'contato'];
    const totalSections = sectionIds.length;

    const scrollToSection = useCallback((sectionIndex: number) => {
        const mainEl = mainRef.current;
        if (!mainEl) return;

        const targetIndex = Math.max(0, Math.min(sectionIndex, totalSections - 1));

        if (targetIndex === currentSectionIndexRef.current) {
            return;
        }

        currentSectionIndexRef.current = targetIndex;
        
        const isBoundary = targetIndex === 0 || targetIndex === totalSections - 1;
        const easeType = isBoundary ? 'power4.out' : 'elastic.out(1, 0.75)';

        gsap.to(mainEl, {
            scrollTop: mainEl.clientHeight * targetIndex,
            duration: 3.5,
            ease: easeType,
            overwrite: 'auto',
        });
    }, [totalSections]);

    useEffect(() => {
        const mainEl = mainRef.current;
        if (!mainEl) return;

        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

        // Only enable full-page scrolling on desktop
        if (!isDesktop) return;

        mainEl.scrollTop = 0;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const scrollDirection = e.deltaY > 0 ? 1 : -1;
            scrollToSection(currentSectionIndexRef.current + scrollDirection);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            let scrollDirection = 0;
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                scrollDirection = 1;
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                scrollDirection = -1;
            }
            if (scrollDirection !== 0) {
                 e.preventDefault();
                 scrollToSection(currentSectionIndexRef.current + scrollDirection);
            }
        }

        const handleNavClick = (e: Event) => {
            const anchor = (e.target as HTMLElement).closest('a');
            if (!anchor) return;
            
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetIndex = sectionIds.indexOf(targetId);
                if (targetIndex > -1) {
                    scrollToSection(targetIndex);
                }
            }
        };

        mainEl.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleNavClick);

        return () => {
            mainEl.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleNavClick);
            gsap.killTweensOf(mainEl);
        };
    }, [scrollToSection, sectionIds]);

    return (
        <div className="bg-background-dark font-display text-white antialiased overflow-x-hidden selection:bg-primary selection:text-white">
            <Header />
            <main ref={mainRef} className="lg:h-screen lg:overflow-y-hidden h-auto overflow-y-auto">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;