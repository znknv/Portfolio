import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Premium",
    category: "Développement Fullstack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "Une plateforme de vente en ligne haute performance avec React et Stripe.",
    tags: ["React", "Node.js", "Tailwind", "Supabase"],
    link: "#",
    github: "#"
  },
  {
    title: "Dashboard Analytique",
    category: "Design & Dev",
    image: "https://placehold.co/2340x400",
    description: "Visualisation de données complexes pour une startup SaaS.",
    tags: ["TypeScript", "Recharts", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    title: "Application Mobile Travel",
    category: "Design Mobile",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2340&auto=format&fit=crop",
    description: "Design et intégration d'une application de voyage pour nomades digitaux.",
    tags: ["Figma", "React Native", "API Maps"],
    link: "#",
    github: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Projets Sélectionnés</h2>
            <p className="text-muted-foreground text-lg">
              Une sélection de mes travaux récents mêlant code robuste et attention au détail.
            </p>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1">
            Voir tous les projets
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent-foreground uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-[10px] font-bold rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;