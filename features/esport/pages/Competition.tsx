import React from 'react';

const Competition: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-6">Esport & Compétition</h1>
      <p className="text-xl text-slate-400 mb-12 max-w-3xl">
        Retrouvez nos rosters officiels qui défendent les couleurs d'Amiens sur la scène nationale.
      </p>

      {/* Game Sections */}
      {['League of Legends', 'Valorant', 'Rocket League', 'FC 24'].map((game, idx) => (
        <div key={game} className="mb-16">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
             {game}
           </h2>
           <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                 {[1, 2, 3, 4, 5].map((player) => (
                   <div key={player} className="text-center group">
                      <div className="relative mb-4 inline-block">
                        <img 
                          src={`https://picsum.photos/seed/${game}${player}/200/200`} 
                          alt="Player" 
                          className="w-32 h-32 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500 transition-colors"
                        />
                        <div className="absolute bottom-0 right-0 bg-slate-900 text-xs px-2 py-1 rounded border border-slate-700">
                          Role
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-lg">Pseudo {player}</h4>
                      <p className="text-slate-500 text-sm">Nom Prénom</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      ))}
    </div>
  );
};

export default Competition;