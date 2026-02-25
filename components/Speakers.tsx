
import React from 'react';
import { SPEAKERS } from '../constants';

const Speakers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-black mb-6 text-white tracking-tighter">MENTES <span className="text-[#4DCCBD]">DISRUPTIVAS</span></h2>
          <p className="text-white/50 font-mono-custom text-xl">
            Líderes de la industria global que están hackeando el presente para construir el futuro.
          </p>
        </div>
        <div className="hidden md:block">
           <div className="px-6 py-2 border border-white/20 rounded-full font-mono-custom text-xs text-white/40 tracking-widest">
              TOTAL_KEYNOTES: 04 / 12
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPEAKERS.map((speaker, idx) => (
          <div 
            key={speaker.id} 
            className="group relative h-[500px] rounded-[2rem] overflow-hidden glass-card border-white/10 hover:border-[#ED593B]/50 transition-all duration-500 animate-fade-in"
            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
          >
            {/* Background Image with Tech Overlay */}
            <div className="absolute inset-0">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>

            {/* Corner Tech Decor */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/30 group-hover:border-[#ED593B] transition-colors"></div>
            <div className="absolute top-6 right-6 font-mono-custom text-[10px] text-white/30">0{idx + 1} // POS_ID</div>

            {/* Info Container */}
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[#ED593B] font-mono-custom font-black text-xs tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {speaker.company}
              </p>
              <h3 className="text-3xl font-black text-white mb-2 leading-none uppercase tracking-tighter">
                {speaker.name.split(' ')[0]}<br/>
                <span className="text-white/60">{speaker.name.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-white/40 font-medium text-sm border-t border-white/10 pt-4 mt-4 uppercase tracking-widest">
                {speaker.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
         <button className="group text-white font-black text-sm tracking-[0.5em] uppercase hover:text-[#ED593B] transition-colors">
            Ver todos los ponentes <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
         </button>
      </div>
    </div>
  );
};

export default Speakers;
