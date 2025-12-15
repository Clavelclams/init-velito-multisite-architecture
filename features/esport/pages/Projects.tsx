import React, { useEffect, useState } from 'react';
import { getProjects } from '../../../services/cms';
import { Project } from '../../../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-10">Nos Projets & Actions</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {project.category}
              </div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <button className="text-blue-500 font-semibold group-hover:text-blue-400 transition-colors">
                En savoir plus &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;