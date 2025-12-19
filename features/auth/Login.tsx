import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Note: This is a demo form. In production, this would connect to a real authentication backend.
// Currently simulates login using localStorage for demonstration purposes only.

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email === 'admin@velito.fr' && password === 'admin') {
      localStorage.setItem('velito_user', 'Admin User');
      localStorage.setItem('velito_role', 'ADMIN');
      navigate('/admin');
    } else {
      localStorage.setItem('velito_user', 'Member User');
      localStorage.setItem('velito_role', 'USER');
      navigate('/esport');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Connexion</h2>
          <p className="text-slate-400">Accédez à votre espace membre Velito</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Mot de passe</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/20"
          >
            Se connecter
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-slate-400">
          Pas encore membre ? <Link to="/auth/register" className="text-blue-400 hover:underline">Créer un compte</Link>
        </div>
        <div className="mt-4 text-center text-xs text-slate-500">
           (Demo: admin@velito.fr / admin)
        </div>
      </div>
    </div>
  );
};

export default Login;