import React, { useEffect, useState } from 'react';
import { getEvents } from '../../../services/cms';
import { Event } from '../../../types';
import { Calendar as CalIcon, MapPin } from 'lucide-react';

const Agenda: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-10">Agenda & Événements</h1>
      
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col md:flex-row bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden hover:bg-slate-800/60 transition-colors">
            <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
               <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center flex-grow">
               <div className="flex justify-between items-start mb-2">
                 <span className="text-blue-400 font-bold uppercase tracking-wider text-xs">{event.type}</span>
                 <span className="text-slate-500 text-sm border border-slate-700 px-2 py-1 rounded">Bientôt</span>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
               <p className="text-slate-400 mb-6">{event.description}</p>
               <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                  <span className="flex items-center gap-2"><CalIcon size={16} className="text-blue-500"/> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> {event.location}</span>
               </div>
            </div>
            <div className="p-4 md:p-8 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-700">
               <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors w-full md:w-auto">
                 S'inscrire
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;