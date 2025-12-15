import React, { useEffect, useState } from 'react';
import { getPartners } from '../../../services/cms';
import { Partner } from '../../../types';

const Partners: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    getPartners().then(setPartners);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Nos Partenaires</h1>
      <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
        Ils soutiennent le développement de l'esport à Amiens. Merci à eux.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white p-8 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
             {/* Using placeholder image since CMS mock uses picsum, but typically these are logos */}
             <div className="text-slate-900 font-bold text-xl">{partner.name}</div>
          </div>
        ))}
        {/* Fillers to look nice */}
        <div className="bg-white p-8 rounded-3xl flex items-center justify-center opacity-50">
           <span className="text-slate-900 font-bold">Votre Logo Ici</span>
        </div>
      </div>

      <div className="mt-20 p-12 bg-slate-800/30 rounded-3xl border border-slate-700">
         <h2 className="text-2xl font-bold text-white mb-4">Devenir Partenaire</h2>
         <p className="text-slate-400 mb-8">Associez votre image aux valeurs positives de l'esport et touchez une audience jeune et engagée.</p>
         <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500">
           Télécharger le dossier de sponsoring
         </button>
      </div>
    </div>
  );
};

export default Partners;