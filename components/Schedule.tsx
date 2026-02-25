
import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { EventType } from '../types';

const TypeTag: React.FC<{ type: EventType }> = ({ type }) => {
  const styles: Record<EventType, string> = {
    'Conferencia': `bg-blue-500/20 text-blue-200 border border-blue-400/30`,
    'Taller': `bg-orange-500/20 text-orange-200 border border-orange-400/30`,
    'Panel': `bg-emerald-500/20 text-emerald-200 border border-emerald-400/30`,
    'Break': `bg-white/5 text-white/40 border border-white/10`,
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${styles[type]}`}>
      {type}
    </span>
  );
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2' | 'day3'>('day1');

  const days = [
    { key: 'day1', label: 'Día 1: IA' },
    { key: 'day2', label: 'Día 2: Emprendimiento' },
    { key: 'day3', label: 'Día 3: Empresas & Carrera' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 text-white tracking-tight">Agenda del Congreso</h2>
        <p className="text-white/50 font-mono-custom max-w-lg mx-auto">Tres días de inmersión total en las tendencias que mueven al mundo.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {days.map((day) => (
          <button
            key={day.key}
            onClick={() => setActiveDay(day.key as any)}
            className={`px-10 py-4 rounded-full font-bold transition-all ${
              activeDay === day.key 
                ? 'bg-white text-blue-700 shadow-2xl shadow-blue-500/20' 
                : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {SCHEDULE_DATA[activeDay].map((event) => (
          <div key={event.id} className="glass-card p-10 rounded-[2.5rem] transition-all hover:translate-x-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black text-white">{event.time}</span>
                <div className="w-1.5 h-1.5 bg-[#ED593B] rounded-full shadow-[0_0_10px_rgba(237,89,59,0.8)]"></div>
                <TypeTag type={event.type} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-3 text-white leading-tight">{event.title}</h3>
            {event.speaker && (
                <p className="text-[#ED593B] font-bold mb-4 uppercase text-xs tracking-[0.2em]">{event.speaker}</p>
            )}
            <p className="text-white/60 leading-relaxed text-lg max-w-3xl">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
