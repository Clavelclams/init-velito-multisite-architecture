import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const interestsList = [
  'Esport (VEA)', 'VENA', 'Interactive', 'Plateforme', 'Ma Ville', 'Hub IA', 'Messages'
];

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    interests: [] as string[]
  });

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to register
    console.log('Registering with interests:', formData.interests);
    localStorage.setItem('velito_user', formData.name);
    localStorage.setItem('velito_role', 'USER');
    navigate('/esport');
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-lg bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Rejoindre l'écosystème</h2>
          <p className="text-slate-400">Créer votre identifiant unique Velito</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
             <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mot de passe</label>
                <input 
                  type="password" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
             </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-300 mb-3">Vos centres d'intérêt</label>
             <div className="flex flex-wrap gap-2">
                {interestsList.map(interest => (
                   <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
                      formData.interests.includes(interest)
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-slate-900/50 border-slate-600 text-slate-400 hover:border-slate-400'
                    }`}
                   >
                     {interest}
                   </button>
                ))}
             </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/20"
          >
            S'inscrire
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-slate-400">
          Déjà un compte ? <Link to="/auth/login" className="text-blue-400 hover:underline">Se connecter</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;