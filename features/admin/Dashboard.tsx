import React, { useEffect, useState } from 'react';
import { Settings, Users, Calendar, FileText, Image, DollarSign } from 'lucide-react';
import { getQuotes } from '../../services/cms';
import { QuoteRequest } from '../../types';

const Dashboard: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);

  useEffect(() => {
    getQuotes().then(setQuotes);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Tableau de Bord Admin</h1>
          <p className="text-slate-400">Gérez le contenu de Velito Esport Amiens</p>
        </div>
        <div className="text-sm px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full border border-violet-800">
           Mode Administrateur
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Module Cards */}
        {[
          { title: 'Événements', icon: Calendar, count: 12, color: 'bg-blue-500' },
          { title: 'Membres', icon: Users, count: 340, color: 'bg-green-500' },
          { title: 'Articles / Pages', icon: FileText, count: 8, color: 'bg-purple-500' },
          { title: 'Devis & Prestations', icon: DollarSign, count: quotes.length, color: 'bg-yellow-500' },
          { title: 'Médias', icon: Image, count: 156, color: 'bg-pink-500' },
          { title: 'Paramètres Site', icon: Settings, count: null, color: 'bg-slate-500' },
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 transition-colors cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${item.color} bg-opacity-20 text-white`}>
                <item.icon className="w-6 h-6" />
              </div>
              {item.count !== null && (
                 <span className="text-2xl font-bold text-white">{item.count}</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{item.title}</h3>
            <p className="text-sm text-slate-500 mt-2">Gérer {item.title.toLowerCase()}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {/* Recent Quotes */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-xl font-bold text-white">Dernières demandes de devis</h2>
             <button className="text-sm text-blue-400 hover:text-blue-300">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-800/50 uppercase font-medium">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Structure</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {quotes.slice(0, 5).map((quote) => (
                  <tr key={quote.id}>
                    <td className="px-4 py-3 font-medium text-white">{quote.structureType}</td>
                    <td className="px-4 py-3">{quote.contactName}</td>
                    <td className="px-4 py-3">{quote.date}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs ${quote.status === 'PENDING' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-green-900/30 text-green-400'}`}>
                        {quote.status === 'PENDING' ? 'En attente' : 'Traité'}
                      </span>
                    </td>
                  </tr>
                ))}
                {quotes.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-slate-500">Aucune demande pour le moment.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Changes Log */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Dernières modifications site</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-800/50 uppercase font-medium">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Type</th>
                  <th className="px-4 py-3">Titre</th>
                  <th className="px-4 py-3">Auteur</th>
                  <th className="px-4 py-3 rounded-r-lg">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">Event</span></td>
                  <td className="px-4 py-3 text-white font-medium">Velito Cup 2024</td>
                  <td className="px-4 py-3">Admin</td>
                  <td className="px-4 py-3">Il y a 2h</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Projet</span></td>
                  <td className="px-4 py-3 text-white font-medium">Insertion Numérique QPV</td>
                  <td className="px-4 py-3">Admin</td>
                  <td className="px-4 py-3">Hier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;