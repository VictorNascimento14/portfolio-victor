import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = ['GitHub', 'LinkedIn'];

    return (
        <footer className="w-full bg-background-dark text-white py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-text-secondary">
                    &copy; {currentYear} Meu Portfólio. Todos os direitos reservados.
                </p>
                <div className="flex items-center space-x-4">
                    {socialLinks.map(link => (
                         <a key={link} href="#" className="text-text-secondary hover:text-white transition-colors">
                           {link}
                         </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;