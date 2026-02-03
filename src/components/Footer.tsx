import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedinUrl = 'https://www.linkedin.com/in/zargan-bakanova-6a196b350/';
  const githubUrl = 'https://github.com/znknv';

  return (
    <footer className="py-12 border-t border-border bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-2">Zargan BAKANOVA</h3>
            <p className="text-muted-foreground text-sm italic">
              Étudiante BTS SIO — ESUPEC Cholet
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github size={20} /></a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Zargan BAKANOVA. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Mentions Légales</a>
            <a href="#" className="hover:text-primary">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;