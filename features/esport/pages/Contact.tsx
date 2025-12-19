import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Note: This contact form is purely visual and not connected to any backend.
// In production, this would submit to a contact form handler or API.

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">Contactez-nous</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
           <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Coordonnées</h3>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <MapPin className="text-blue-500 mt-1" />
                    <div>
                       <p className="text-white font-medium">Siège Social</p>
                       <p className="text-slate-400">123 Rue de la République<br/>80000 Amiens</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Mail className="text-blue-500" />
                    <p className="text-slate-300">contact@velito.fr</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <Phone className="text-blue-500" />
                    <p className="text-slate-300">03 22 00 00 00</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Form */}
        <form className="bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-700">
           <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm text-slate-400 mb-1">Prénom</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2 text-white focus:border-blue-500 focus:outline-none" />
                 </div>
                 <div>
                    <label className="block text-sm text-slate-400 mb-1">Nom</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2 text-white focus:border-blue-500 focus:outline-none" />
                 </div>
              </div>
              <div>
                 <label className="block text-sm text-slate-400 mb-1">Email</label>
                 <input type="email" className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2 text-white focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                 <label className="block text-sm text-slate-400 mb-1">Message</label>
                 <textarea rows={4} className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2 text-white focus:border-blue-500 focus:outline-none"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 transition-colors" disabled>
                Formulaire de démonstration (non fonctionnel)
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;