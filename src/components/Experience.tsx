import React from 'react';

const experiences = [
  {
    period: "2021 - 2024",
    role: "Lycée Europe — Cholet",
    company: "Spécialités : Anglais LLCE — Option anglais euro",
    description: "Études secondaires au Lycée Europe à Cholet avec une spécialisation en Langues, Littératures et Cultures Étrangères (Anglais) et option anglais euro."
  },
  {
    period: "2024 - 2025",
    role: "BTS SIO — 1ère année",
    company: "Services Informatiques aux Organisations (ESUPEC — Cholet)",
    description: "Début du BTS SIO, découverte des fondamentaux du développement, des réseaux et de l'administration des systèmes."
  },
  {
    period: "12 Mai 2025 - 25 Juin 2025",
    role: "Stage — IT Sensé",
    company: "IT Sensé — Bressuire",
    description: "Stage effectué à IT Sensé (Bressuire) : participation à des missions pratiques en entreprise, découverte des process métiers et mise en œuvre de tâches techniques."
  },
  {
    period: "2025 - 2026",
    role: "BTS SIO — 2ème année",
    company: "Services Informatiques aux Organisations (ESUPEC — Cholet)",
    description: "Poursuite et approfondissement du BTS SIO, préparation des projets de fin d'études et mise en pratique des compétences acquises."
  },
  {
    period: "5 Janvier 2026 - 13 Février 2026",
    role: "Stage — Net Concept",
    company: "Net Concept — Angers",
    description: "Stage réalisé chez Net Concept (Angers) : missions en lien avec le développement/maintenance et intervention sur des environnements clients."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">Parcours Professionnel</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                  <div className="md:col-span-3 mb-2 md:mb-0">
                    <span className="text-sm font-bold text-accent-foreground uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <div className="md:col-span-9 border-l-2 border-secondary pl-8 pb-4 relative">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;