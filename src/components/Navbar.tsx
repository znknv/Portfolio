import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkedinUrl = 'https://www.linkedin.com/in/zargan-bakanova-6a196b350/';
  const githubUrl = 'https://github.com/znknv';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-serif font-bold tracking-tight text-primary flex items-center gap-2">
          ZB<span className="text-accent-foreground">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary/60 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l pl-8 border-border">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b border-border animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <a href="https://github.com/znknv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/zargan-bakanova-6a196b350/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;