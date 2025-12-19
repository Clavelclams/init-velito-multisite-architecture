import React from 'react';
import { CheckCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Adhérer à VEA</h1>
        <p className="text-xl text-slate-400">Rejoignez l'aventure et profitez de tous nos services.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
         {/* Member Card */}
         <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-4 bg-blue-600 rounded-bl-3xl text-white font-bold text-xl">
               25€ / an
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Membre Actif</h2>
            <ul className="space-y-4 mb-8">
               {[
                 'Accès prioritaire aux événements',
                 'Tarifs réduits boutique & partenaires',
                 'Accès au Discord membre',
                 'Participation aux tournois internes',
                 'Vote aux Assemblées Générales'
               ].map((item, i) => (
                 <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="text-blue-500 flex-shrink-0" size={20} />
                    {item}
                 </li>
               ))}
            </ul>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20">
               Adhérer via HelloAsso
            </button>
         </div>

         {/* Info Side */}
         <div className="space-y-8">
            <div>
               <h3 className="text-2xl font-bold text-white mb-2">Pourquoi adhérer ?</h3>
               <p className="text-slate-400 leading-relaxed">
                  Votre adhésion soutient directement le développement de nos projets sociaux et compétitifs. 
                  C'est grâce à vous que nous pouvons organiser des événements et accompagner les jeunes talents.
               </p>
            </div>
            <div>
               <h3 className="text-2xl font-bold text-white mb-2">Pour les mineurs</h3>
               <p className="text-slate-400 leading-relaxed">
                  Une autorisation parentale est obligatoire pour toute inscription. 
                  Nous veillons scrupuleusement au respect du temps de jeu et à l'équilibre scolaire.
               </p>
            </div>
         </div>
      </div>

      {/* Pro Section CTA */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
         <div className="p-4 bg-slate-700/50 rounded-2xl">
            <Briefcase size={40} className="text-white" />
         </div>
         <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Vous représentez une structure ?</h3>
            <p className="text-slate-400">Mairie, Centre social, École, Entreprise... Découvrez nos offres d'intervention et demandez un devis.</p>
         </div>
         <Link to="/esport/prestations" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors whitespace-nowrap">
            Demander un devis
         </Link>
      </div>
    </div>
  );
};

export default Join;