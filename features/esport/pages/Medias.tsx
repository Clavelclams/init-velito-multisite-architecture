import React from 'react';
import { Play } from 'lucide-react';

const Medias: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-10">Médiathèque</h1>

      {/* Videos Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Dernières Vidéos</h2>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="aspect-video bg-slate-800 rounded-3xl relative group cursor-pointer overflow-hidden">
              <img src="https://picsum.photos/seed/vid1/800/450" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video thumbnail"/>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play fill="white" className="ml-1" />
                 </div>
              </div>
              <div className="absolute bottom-6 left-6">
                 <h3 className="text-xl font-bold text-white">Aftermovie Velito Cup</h3>
              </div>
           </div>
           {/* More video placeholders */}
           <div className="aspect-video bg-slate-800 rounded-3xl relative group cursor-pointer overflow-hidden">
               <img src="https://picsum.photos/seed/vid2/800/450" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video thumbnail"/>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play fill="white" className="ml-1" />
                 </div>
              </div>
              <div className="absolute bottom-6 left-6">
                 <h3 className="text-xl font-bold text-white">Interview Président</h3>
              </div>
           </div>
        </div>
      </div>

      {/* Photos Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Galerie Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1,2,3,4,5,6,7,8].map(i => (
             <img 
               key={`gal-${i}`} 
               src={`https://picsum.photos/seed/gal${i}/400/400`} 
               alt="Gallery" 
               className="rounded-2xl hover:opacity-80 transition-opacity cursor-pointer border border-slate-800"
             />
           ))}
        </div>
      </div>
    </div>
  );
};

export default Medias;