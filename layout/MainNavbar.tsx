import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, LayoutDashboard, Gamepad2, Zap, Cpu, MapPin, MessageSquare, MonitorPlay, Layers } from 'lucide-react';
import veaLogo from "../src/logo/png/vea/logo_1.png";
import venaLogo from "../src/logo/png/vena/vena_logo_blanc_sans.png";

// --- TYPES & CONFIGURATION ---

type ModuleKey = 'esport' | 'vena' | 'interactive' | 'plateforme' | 'maville' | 'hub' | 'messages' | 'default';

interface ModuleConfig {
  key: ModuleKey;
  name: string;
  sub: string;
  icon: React.ReactNode;
  colors: {
    primary: string; // Text color for Logo/Highlight
    bg: string; // Background tint
    border: string; // Border color
    button: string; // CTA Button color
  };
  links: { id: string; label: string; path: string; highlight?: boolean }[];
  cta?: { label: string; path: string };
}

// Configuration for each branch of Velito
const MODULES: Record<string, ModuleConfig> = {
  esport: {
    key: 'esport',
    name: 'VELITO',
    sub: 'ESPORT AMIENS',
    // Using image logo for VEA
    icon: <img src={veaLogo} alt="VEA" className="w-full h-full object-contain drop-shadow-md" />,
    colors: {
      primary: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      button: 'bg-blue-600 hover:bg-blue-500',
    },
    links: [
      { id: 'accueil', label: 'Accueil', path: '/esport' },
      { id: 'association', label: 'Association', path: '/esport/association' },
      { id: 'projets', label: 'Projets', path: '/esport/projets' },
      { id: 'competition', label: 'Esport', path: '/esport/competition' },
      { id: 'agenda', label: 'Agenda', path: '/esport/agenda' },
      { id: 'medias', label: 'Médias', path: '/esport/medias' },
      { id: 'partenaires', label: 'Partenaires', path: '/esport/partenaires' },
      { id: 'prestations', label: 'Prestations', path: '/esport/prestations', highlight: true },
      { id: 'contact', label: 'Contact', path: '/esport/contact' },
    ],
    cta: { label: 'Adhérer', path: '/esport/adherer' }
  },
  vena: {
    key: 'vena',
    name: 'VENA',
    sub: 'STUDIO CRÉATIF',
    // Using image logo for VENA (Sans texte version)
    icon: <img src={venaLogo} alt="VENA" className="w-full h-full object-contain drop-shadow-md" />,
    colors: {
      primary: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      button: 'bg-emerald-600 hover:bg-emerald-500',
    },
    links: [
      { id: 'presentation', label: 'Présentation', path: '/vena' },
      { id: 'contact', label: 'Contact', path: '/vena/contact' }, // Redirects to coming soon for now
    ],
    cta: { label: 'Nous découvrir', path: '/vena' }
  },
  interactive: {
    key: 'interactive',
    name: 'VELITO',
    sub: 'INTERACTIVE',
    icon: <MonitorPlay size={28} />,
    colors: {
      primary: 'text-pink-500',
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/30',
      button: 'bg-pink-600 hover:bg-pink-500',
    },
    links: [
      { id: 'experiences', label: 'Expériences', path: '/interactive' },
    ]
  },
  plateforme: {
    key: 'plateforme',
    name: 'VELITO',
    sub: 'PLATFORM',
    icon: <Layers size={28} />,
    colors: {
      primary: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      button: 'bg-amber-600 hover:bg-amber-500',
    },
    links: [
      { id: 'solutions', label: 'Solutions', path: '/plateforme' },
    ]
  },
  maville: {
    key: 'maville',
    name: 'MA VILLE',
    sub: 'CITOYENNETÉ',
    icon: <MapPin size={28} />,
    colors: {
      primary: 'text-orange-500',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      button: 'bg-orange-600 hover:bg-orange-500',
    },
    links: [
      { id: 'concept', label: 'Le Concept', path: '/maville' },
    ]
  },
  hub: {
    key: 'hub',
    name: 'HUB IA',
    sub: 'INNOVATION',
    icon: <Cpu size={28} />,
    colors: {
      primary: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      button: 'bg-cyan-600 hover:bg-cyan-500',
    },
    links: [
      { id: 'recherche', label: 'Recherche', path: '/hub' },
    ]
  },
  messages: {
    key: 'messages',
    name: 'VELITO',
    sub: 'MESSAGES',
    icon: <MessageSquare size={28} />,
    colors: {
      primary: 'text-violet-500',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      button: 'bg-violet-600 hover:bg-violet-500',
    },
    links: []
  },
  default: {
    key: 'default',
    name: 'VELITO',
    sub: 'GROUP',
    icon: <Layers size={28} />,
    colors: {
      primary: 'text-slate-400',
      bg: 'bg-slate-800',
      border: 'border-slate-700',
      button: 'bg-slate-700 hover:bg-slate-600',
    },
    links: []
  }
};

const MainNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Detect active module based on URL
  const getActiveModule = (): ModuleConfig => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return MODULES['esport']; // Default to esport if root
    const firstSegment = pathSegments[0];
    
    // Check if the segment matches a known module key
    if (MODULES[firstSegment]) {
      return MODULES[firstSegment];
    }
    
    // Fallback for admin or unknown routes
    if (firstSegment === 'admin') return MODULES['default'];
    
    return MODULES['esport']; // Default fallback
  };

  const currentModule = getActiveModule();
  const theme = currentModule.colors;

  // Mock Auth
  const isAuthenticated = localStorage.getItem('velito_user') !== null;
  const isAdmin = localStorage.getItem('velito_role') === 'ADMIN';
  const userName = localStorage.getItem('velito_user');

  const handleLogout = () => {
    localStorage.removeItem('velito_user');
    localStorage.removeItem('velito_role');
    navigate('/auth/login');
  };

  return (
    <nav className="w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* === DYNAMIC MODULE IDENTITY === */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => navigate(currentModule.links[0]?.path || '/')}>
             <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-1.5 shadow-lg transition-transform group-hover:scale-105 ${theme.bg} border ${theme.border} overflow-hidden`}>
               {currentModule.icon}
             </div>
             <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white leading-none tracking-tight">{currentModule.name}</h1>
                <p className={`text-xs font-bold tracking-[0.2em] mt-1 ${theme.primary}`}>{currentModule.sub}</p>
             </div>
          </div>

          {/* === DYNAMIC MODULE NAVIGATION === */}
          <div className="hidden lg:flex items-center space-x-1">
            {currentModule.links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                end={link.path === `/${currentModule.key}`}
                className={({ isActive }) => `
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? `bg-slate-800 text-white shadow-inner ${theme.primary}` 
                    : link.highlight 
                      ? `${theme.primary} ${theme.bg} hover:opacity-80 border ${theme.border}` 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* === ACTIONS (Global) === */}
          <div className="hidden lg:flex items-center gap-4">
             {/* Module CTA (if exists) */}
             {currentModule.cta && !isAuthenticated && (
               <button 
                 onClick={() => navigate(currentModule.cta!.path)}
                 className={`px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${theme.button}`}
               >
                 {currentModule.cta.label}
               </button>
             )}

             {isAuthenticated ? (
               <div className="flex items-center gap-4 pl-4 border-l border-slate-700">
                 {isAdmin && (
                   <button 
                     onClick={() => navigate('/admin')}
                     className="p-2 text-slate-400 hover:text-white transition-colors"
                     title="Administration"
                   >
                     <LayoutDashboard size={20} />
                   </button>
                 )}
                 <div className="flex items-center gap-3">
                    <div className="text-right hidden xl:block">
                       <p className="text-sm font-bold text-white leading-none">{userName}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                       <UserIcon size={20} className={theme.primary} />
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="text-xs text-slate-500 hover:text-red-400 transition-colors"
                    >
                      Sortir
                    </button>
                 </div>
               </div>
             ) : (
               <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
                 <button 
                   onClick={() => navigate('/auth/login')}
                   className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
                 >
                   Connexion
                 </button>
               </div>
             )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile CTA (Small) */}
             {currentModule.cta && !isAuthenticated && (
               <button 
                 onClick={() => navigate(currentModule.cta!.path)}
                 className={`px-3 py-1.5 text-xs text-white font-bold rounded-lg ${theme.button}`}
               >
                 {currentModule.cta.label}
               </button>
             )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 absolute w-full left-0 shadow-2xl min-h-screen z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-4 pt-2">
               Menu {currentModule.sub}
            </div>
            
            {currentModule.links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  block px-4 py-3 rounded-xl text-base font-medium transition-colors border border-transparent
                  ${isActive 
                    ? `${theme.bg} ${theme.primary} border-${theme.primary}/30` 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="border-t border-slate-800 my-4 pt-4">
               {isAuthenticated ? (
                 <div className="space-y-4 px-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                          <UserIcon size={20} className={theme.primary} />
                       </div>
                       <div>
                          <p className="text-white font-bold">{userName}</p>
                          <p className="text-xs text-slate-500">{isAdmin ? 'Administrateur' : 'Membre'}</p>
                       </div>
                    </div>
                    {isAdmin && (
                      <button 
                        onClick={() => { navigate('/admin'); setIsMobileMenuOpen(false); }}
                        className="w-full text-left py-2 text-slate-300 font-medium flex items-center gap-2"
                      >
                        <LayoutDashboard size={18} /> Tableau de Bord
                      </button>
                    )}
                    <button 
                      onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                      className="w-full text-left py-2 text-red-400 font-medium"
                    >
                      Se déconnecter
                    </button>
                 </div>
               ) : (
                 <div className="space-y-3 px-4">
                    <button 
                      onClick={() => { navigate('/auth/login'); setIsMobileMenuOpen(false); }}
                      className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold border border-slate-700"
                    >
                      Connexion Membre
                    </button>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;