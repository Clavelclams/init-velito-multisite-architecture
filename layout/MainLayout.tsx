import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import TopEcosystemBar from './TopEcosystemBar';
import MainNavbar from './MainNavbar';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white font-sans selection:bg-blue-500/30">
      <TopEcosystemBar />
      <MainNavbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      
      {/* Global Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
               
               {/* VENA Branding (Left Column) */}
               <div className="flex flex-col items-center md:items-start gap-4 max-w-sm">
                  <Link to="/vena" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-900/20 group-hover:bg-emerald-500/20 transition-all p-1.5 overflow-hidden">
                        {/* Using VENA Logo (Sans Texte) for Icon slot */}
                        <img 
                          src="logo/png/vena/VENA_LOGO_BLANC_SANS.png" 
                          alt="VENA Logo" 
                          className="w-full h-full object-contain" 
                        />
                    </div>
                    <div className="text-left">
                        <h2 className="text-2xl font-bold text-white leading-none tracking-tight">VENA</h2>
                        <p className="text-[10px] text-emerald-500 font-bold tracking-[0.15em] uppercase mt-1">
                          Expertise Numérique
                        </p>
                    </div>
                  </Link>
                  
                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      <span className="font-semibold text-slate-300">Entreprise porteuse de l’écosystème Velito.</span><br/>
                      Solutions digitales, innovation et structuration de projets esport.
                    </p>
                    <div className="text-slate-600 text-xs pt-2">
                      &copy; {new Date().getFullYear()} VENA. Tous droits réservés.
                    </div>
                  </div>
               </div>
               
               {/* Footer Links (Right Column) */}
               <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div className="flex flex-col gap-3">
                     <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigation</h4>
                     <Link to="/esport" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Hub Esport</Link>
                     <Link to="/vena" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Agence VENA</Link>
                     <Link to="/maville" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Ma Ville</Link>
                  </div>

                  <div className="flex flex-col gap-3">
                     <h4 className="text-white font-bold text-sm uppercase tracking-wider">Pro</h4>
                     <Link to="/esport/prestations" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                        Demander un devis <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                     </Link>
                     <Link to="/esport/partenaires" className="text-slate-400 hover:text-white transition-colors text-sm">
                        Devenir partenaire
                     </Link>
                     <Link to="/admin" className="text-slate-600 hover:text-slate-400 transition-colors text-sm">
                        Accès Admin
                     </Link>
                  </div>
               </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;