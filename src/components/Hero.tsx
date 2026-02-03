import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Étudiante — BTS SIO 2ème année
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
              Zargan BAKANOVA
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
              Étudiante en 2ème année de BTS Services Informatiques aux Organisations à l'ESUPEC de Cholet — Passionnée par le développement et la cybersécurité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all group"
              >
                Voir mes travaux
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/cv.pdf" 
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-all"
              >
                <Download className="mr-2 w-4 h-4" />
                Télécharger CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-secondary/50 to-transparent blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/20 blur-3xl rounded-full -z-10" />
    </section>
  );
};

export default Hero;