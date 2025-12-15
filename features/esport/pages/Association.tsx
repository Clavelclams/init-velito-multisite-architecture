import React from 'react';

const Association: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">L'Association</h1>
        <p className="text-xl text-slate-400">Plus qu'un club de jeux vidéo, un acteur social.</p>
      </div>

      <div className="space-y-12">
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">Notre Histoire</h2>
          <p className="text-slate-300 leading-relaxed">
            Fondée en 2020 au cœur d'Amiens, Velito Esport est née de la volonté de structurer la pratique du jeu vidéo amateur. 
            Très vite, nous avons compris que l'esport pouvait être un formidable levier d'inclusion, d'éducation et de mixité sociale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Nos Valeurs</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">✨ Excellence & Performance</li>
                <li className="flex items-center gap-2">🤝 Inclusion & Solidarité</li>
                <li className="flex items-center gap-2">🎓 Éducation & Prévention</li>
                <li className="flex items-center gap-2">🌍 Innovation Sociale</li>
              </ul>
           </div>
           <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-violet-400 mb-3">Notre Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nous voulons faire d'Amiens une place forte de l'esport responsable. 
                Un écosystème où le joueur est accompagné, où les parents sont rassurés, et où les talents peuvent éclore sereinement.
              </p>
           </div>
        </div>

        {/* Team Section Placeholder - Data would come from CMS */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">L'Équipe Dirigeante</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                   <img src={`https://picsum.photos/seed/staff${i}/300/300`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-slate-800" alt="Staff" />
                   <h4 className="text-white font-bold">Membre {i}</h4>
                   <p className="text-sm text-slate-500">Fonction</p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Association;