
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['sobre', 'habilidades', 'projetos', 'contato'];

    return (
        <header className="fixed top-0 left-0 w-full bg-background-dark/80 backdrop-blur-sm z-50 border-b border-white/10">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#hero" className="text-xl sm:text-2xl font-bold tracking-tighter">
                            Meu Portfólio
                        </a>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 bg-black/30 backdrop-blur-md border border-white/10">
                        <div className="flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a key={link} href={`#${link}`} className="text-text-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <span className={`material-symbols-outlined transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <a key={link} href={`#${link}`} onClick={() => setIsMenuOpen(false)} className="text-text-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase tracking-widest transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;