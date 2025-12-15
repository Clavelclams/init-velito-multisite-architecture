import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';

const ComingSoonPage: React.FC = () => {
  const location = useLocation();
  const moduleName = location.pathname.replace('/', '').toUpperCase();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-24 h-24 rounded-3xl bg-slate-800/50 flex items-center justify-center mb-8 border border-slate-700 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">
        <Construction size={48} className="text-blue-500" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 tracking-tight">
        {moduleName}
      </h1>
      
      <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
        Ce module de l'écosystème Velito est actuellement en cours de développement.
        <br/><span className="text-blue-400">Restez connectés.</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/esport"
          className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all border border-slate-700 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Retour au Hub Esport
        </Link>
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
          Me prévenir de la sortie
        </button>
      </div>
    </div>
  );
};

export default ComingSoonPage;