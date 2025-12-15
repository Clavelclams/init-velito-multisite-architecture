import React, { useEffect, useState } from 'react';
import { getServices, submitQuote } from '../../../services/cms';
import { Service } from '../../../types';
import { CheckCircle, ArrowDown, Send, FileText, Phone, Calendar, Info, Users, Building2, GraduationCap } from 'lucide-react';

const audiences = [
  "Collectivités", "Centres Sociaux", "MJC", "Écoles & Collèges", "Lycées", "Foyers Jeunes", "Entreprises", "Événements Publics"
];

const Prestations: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    structureType: 'Collectivité',
    interventionType: 'Pack Standard',
    objective: 'Animation',
    location: '',
    date: '',
    duration: '',
    attendees: 0,
    hasEquipment: false,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    message: ''
  });

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitQuote({
      structureType: formData.structureType,
      interventionType: formData.interventionType,
      objective: formData.objective,
      location: formData.location,
      date: formData.date,
      duration: formData.duration,
      attendees: Number(formData.attendees),
      hasEquipment: Boolean(formData.hasEquipment),
      contactName: formData.contactName,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone
    });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = (packName?: string) => {
    if (packName) {
      setFormData(prev => ({ ...prev, interventionType: packName }));
    }
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getThemeColors = (theme: 'blue' | 'yellow' | 'red') => {
    switch (theme) {
      case 'yellow': return { border: 'border-yellow-500', text: 'text-yellow-400', bg: 'bg-yellow-500/10', button: 'bg-yellow-600 hover:bg-yellow-500' };
      case 'red': return { border: 'border-red-600', text: 'text-red-500', bg: 'bg-red-600/10', button: 'bg-red-600 hover:bg-red-500' };
      default: return { border: 'border-blue-500', text: 'text-blue-400', bg: 'bg-blue-500/10', button: 'bg-blue-600 hover:bg-blue-500' };
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Demande envoyée !</h2>
        <p className="text-slate-400 max-w-md mb-8">
          Merci pour votre intérêt. Notre équipe va étudier votre demande et vous recontactera sous 48h pour un devis précis.
        </p>
        <button 
          onClick={() => setSubmitSuccess(false)}
          className="px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors"
        >
          Retour aux offres
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-800">
            Offre Collectivités & Structures
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Faites intervenir <span className="text-blue-500">Velito Esport Amiens</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Animation, prévention, tournois esport encadrés.<br/>
            Une offre professionnelle adaptée à vos publics et vos événements.
          </p>
          <button 
            onClick={() => scrollToForm()}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center gap-2 mx-auto"
          >
            Demander un devis <ArrowDown size={20} />
          </button>
        </div>
      </section>

      {/* Packs Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Nos Formats d'Intervention</h2>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {services.map((service) => {
             const colors = getThemeColors(service.colorTheme);
             return (
              <div key={service.id} className={`bg-slate-800/40 border-t-4 ${colors.border} rounded-b-3xl p-8 hover:bg-slate-800/60 transition-colors relative flex flex-col h-full shadow-xl`}>
                 {service.highlight && (
                   <div className="absolute top-0 right-0 -mt-3 mr-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                     Compétition
                   </div>
                 )}
                 <div className="mb-6">
                    <h3 className={`text-2xl font-black uppercase ${colors.text} mb-2`}>{service.title}</h3>
                    <p className="text-slate-400 text-sm min-h-[40px]">{service.description}</p>
                 </div>
                 
                 <div className="mb-8 space-y-2">
                    {service.priceDetails.map((price, idx) => (
                      <div key={idx} className="text-white font-bold text-xl">{price}</div>
                    ))}
                    <div className="text-xs text-slate-500 uppercase font-medium mt-1">{service.duration}</div>
                 </div>

                 <ul className="space-y-4 mb-8 flex-grow">
                   {service.features.map((feat, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                        <CheckCircle size={18} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                        {feat}
                     </li>
                   ))}
                 </ul>

                 <button 
                   onClick={() => scrollToForm(service.title)}
                   className={`w-full py-3 rounded-xl text-white font-bold transition-colors ${colors.button}`}
                 >
                   Choisir ce pack
                 </button>
              </div>
             );
          })}
        </div>
        
        {/* Pricing Disclaimer */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-start gap-4 max-w-4xl mx-auto">
           <Info className="text-blue-400 flex-shrink-0" size={24} />
           <div>
              <h4 className="text-white font-bold mb-1">Information Tarifs</h4>
              <p className="text-slate-400 text-sm">
                 Les tarifs indiqués sont indicatifs. Ils peuvent être adaptés selon la durée, le volume, le type de public, 
                 le secteur géographique (QPV) ou le cadre partenarial mobilisé.
              </p>
           </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 bg-slate-800/20 border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Nous intervenons auprès de</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {audiences.map((aud, i) => (
                 <div key={i} className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 font-medium hover:border-blue-500 transition-colors">
                   <Building2 size={16} className="text-slate-500"/>
                   {aud}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { icon: FileText, title: "1. Formulaire", desc: "Remplissez les infos ci-dessous" },
             { icon: Phone, title: "2. Échange", desc: "Validation des besoins" },
             { icon: Send, title: "3. Devis", desc: "Envoi sous 48h" },
             { icon: Calendar, title: "4. Intervention", desc: "Jour J avec nos équipes" },
           ].map((step, idx) => (
             <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-blue-500 mb-4 border border-slate-700">
                   <step.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Demander un Devis</h2>
                <p className="text-slate-400">Gratuit, sans engagement et réponse rapide.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-8">
                {/* Structure Info */}
                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wide border-b border-slate-700 pb-2">L'Intervention</h3>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Type de structure</label>
                         <select name="structureType" value={formData.structureType} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none">
                            <option>Collectivité / Mairie</option>
                            <option>Centre Social / MJC</option>
                            <option>Établissement Scolaire</option>
                            <option>Entreprise</option>
                            <option>Association</option>
                            <option>Autre</option>
                         </select>
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Format souhaité</label>
                         <select name="interventionType" value={formData.interventionType} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none font-bold">
                            <option value="Pack Standard">🟦 PACK STANDARD (Animation)</option>
                            <option value="Pack Advanced">🟨 PACK ADVANCED (+ Matériel)</option>
                            <option value="Pack Premium">🟥 PACK PREMIUM (Compétition)</option>
                            <option value="Sur Mesure">Autre / Sur Mesure</option>
                         </select>
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Objectif principal</label>
                         <select name="objective" value={formData.objective} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none">
                            <option>Animation / Loisir</option>
                            <option>Tournoi Compétitif</option>
                            <option>Prévention / Pédagogie</option>
                            <option>Team Building</option>
                            <option>Autre</option>
                         </select>
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Lieu</label>
                         <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Ville, Quartier..." className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Date(s) souhaitée(s)</label>
                         <input type="text" name="date" value={formData.date} onChange={handleChange} required placeholder="ex: 14 Juillet 2024" className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Durée souhaitée</label>
                         <input type="text" name="duration" value={formData.duration} onChange={handleChange} required placeholder="ex: 2h, après-midi, journée" className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Participants estimés</label>
                         <input type="number" name="attendees" value={formData.attendees} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div className="flex items-center gap-3 bg-slate-900/50 px-4 rounded-xl border border-slate-700 h-[50px] mt-6">
                        <input type="checkbox" name="hasEquipment" checked={formData.hasEquipment} onChange={handleChange} id="hasEq" className="w-5 h-5 rounded border-slate-600 text-blue-600 focus:ring-blue-500 bg-slate-800" />
                        <label htmlFor="hasEq" className="text-slate-300 text-sm">Matériel déjà sur place ?</label>
                      </div>
                   </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 pt-4">
                   <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wide border-b border-slate-700 pb-2">Vos Coordonnées</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Nom du contact</label>
                         <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Structure (Nom)</label>
                         <input type="text" placeholder="Nom de la Mairie / Asso..." className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Email</label>
                         <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                         <label className="block text-sm text-slate-400 mb-1">Téléphone</label>
                         <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                      </div>
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande de devis'}
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prestations;