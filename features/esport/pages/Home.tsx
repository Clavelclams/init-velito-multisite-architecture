import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Zap } from 'lucide-react';
import { getEvents } from '../../../services/cms';
import { Event } from '../../../types';

const Home: React.FC = () => {
  const [latestEvent, setLatestEvent] = useState<Event | null>(null);

  useEffect(() => {
    getEvents().then(events => {
      if (events.length > 0) setLatestEvent(events[0]);
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/esportbg/1920/1080" 
            alt="Esport Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium text-sm mb-6 backdrop-blur-sm">
              Association Esport & Insertion
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              LE JEU VIDÉO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                COMME MOTEUR
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Velito Esport Amiens (VEA) utilise le gaming pour créer du lien social, favoriser l'insertion et faire briller les talents locaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/esport/adherer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all hover:scale-105 text-center">
                Nous rejoindre
              </Link>
              <Link to="/esport/projets" className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700 backdrop-blur text-center">
                Découvrir nos actions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Communauté", desc: "Plus de 500 membres actifs sur Amiens." },
                { icon: Trophy, title: "Compétition", desc: "Des équipes performantes sur 5 jeux." },
                { icon: Zap, title: "Insertion", desc: "Des parcours innovants vers l'emploi." }
              ].map((feat, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
                   <feat.icon className="w-12 h-12 text-blue-500 mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-3">{feat.title}</h3>
                   <p className="text-slate-400">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Next Event Teaser */}
      {latestEvent && (
        <section className="py-20 bg-gradient-to-br from-blue-900/20 to-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src={latestEvent.imageUrl} 
                alt={latestEvent.title} 
                className="rounded-3xl shadow-2xl shadow-blue-500/10 w-full object-cover aspect-video"
              />
            </div>
            <div className="w-full md:w-1/2">
               <h4 className="text-blue-400 font-bold uppercase tracking-widest mb-2">Prochain Événement</h4>
               <h2 className="text-4xl font-bold text-white mb-4">{latestEvent.title}</h2>
               <p className="text-slate-300 text-lg mb-6">{latestEvent.description}</p>
               <div className="flex gap-4 text-sm text-slate-400 mb-8">
                  <span className="flex items-center gap-2"><Calendar size={16}/> {latestEvent.date}</span>
                  <span className="flex items-center gap-2">📍 {latestEvent.location}</span>
               </div>
               <Link to="/esport/agenda" className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors">
                  Voir l'agenda complet <ArrowRight size={20} />
               </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// Helper for the icon in the teaser
import { Calendar } from 'lucide-react';

export default Home;