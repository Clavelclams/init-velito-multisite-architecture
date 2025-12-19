import React from 'react';
import { NavLink } from 'react-router-dom';
import { EcosystemModule } from '../types';

const modules: EcosystemModule[] = [
  { id: 'esport', name: 'ESPORT (VEA)', path: '/esport' },
  { id: 'vena', name: 'VENA', path: '/vena' },
  { id: 'interactive', name: 'INTERACTIVE', path: '/interactive' },
  { id: 'plateforme', name: 'PLATEFORME', path: '/plateforme' },
  { id: 'maville', name: 'MA VILLE', path: '/maville' },
  { id: 'hub', name: 'HUB IA', path: '/hub' },
  { id: 'messages', name: 'MESSAGES', path: '/messages' },
];

const TopEcosystemBar: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 border-b border-slate-800 text-xs md:text-sm font-medium z-50 relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-10 overflow-x-auto no-scrollbar whitespace-nowrap">
        <span className="text-slate-400 mr-4 uppercase tracking-wider hidden md:inline-block">
          Écosystème Velito :
        </span>
        <div className="flex space-x-6">
          {modules.map((mod) => (
            <NavLink
              key={mod.id}
              to={mod.path}
              className={({ isActive }) => `
                transition-colors duration-200 uppercase tracking-wide
                ${isActive
                  ? 'text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]' 
                  : 'text-slate-500 hover:text-white'}
              `}
            >
              {mod.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopEcosystemBar;