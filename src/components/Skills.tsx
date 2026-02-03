import React from 'react';
import { Layout, Database, Smartphone, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "MySQL", "Symfony", "PHP", "API REST"]
  },
  {
    title: "Mobile Dev",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Expo"]
  },
  {
    title: "Cybersécurité",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Sécurité des applications", "Contrôles d'accès", "Tests d'intrusion (basique)"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Expertise Technique</h2>
          <p className="text-muted-foreground">
            Je combine curiosité et rigueur technique pour construire des solutions fiables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-secondary/10 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map(skill => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1 h-1 rounded-full bg-border mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;