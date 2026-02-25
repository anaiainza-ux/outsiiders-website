
import React, { useState } from 'react';

const TEC_JOB_BOARD_URL = 'https://empleate.tec.mx'; // Placeholder URL for Tec Job Board

const JobBoard: React.FC = () => {
  const [showRequirements, setShowRequirements] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
          Conexión <span className="text-[#4DCCBD]">IID</span>
        </h2>
        <p className="text-white/60 font-mono-custom text-xl max-w-2xl mx-auto">
          El puente entre el talento de vanguardia y las organizaciones líderes del futuro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Path 1: Participant */}
        <div className="glass-card p-10 rounded-[3rem] flex flex-col justify-between group hover:border-[#4DCCBD]/50 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <div className="w-16 h-16 bg-[#4DCCBD]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#4DCCBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-4xl font-black text-white mb-4">Soy Participante</h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Explora vacantes exclusivas, pasantías y proyectos de innovación a través de la plataforma oficial del Tec.
            </p>
          </div>
          <a 
            href={TEC_JOB_BOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#4DCCBD] text-white py-5 rounded-[2rem] font-black text-xl hover:bg-[#3db8aa] transition-all shadow-xl shadow-emerald-500/20 text-center transform group-hover:-translate-y-1"
          >
            Ir a Bolsa de Trabajo
          </a>
        </div>

        {/* Path 2: Company / Speaker */}
        <div className="glass-card p-10 rounded-[3rem] flex flex-col justify-between group hover:border-[#ED593B]/50 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div>
            <div className="w-16 h-16 bg-[#ED593B]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#ED593B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className="text-4xl font-black text-white mb-4">Empresa / Ponente</h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              ¿Quieres dar de alta tu empresa o participar como ponente? Únete al ecosistema OUTSIIIDERS.
            </p>
          </div>
          
          <button 
            onClick={() => setShowRequirements(!showRequirements)}
            className="w-full bg-white/10 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-white/20 transition-all border border-white/10 group-hover:-translate-y-1"
          >
            {showRequirements ? 'Ocultar Información' : 'Dar de Alta'}
          </button>
        </div>
      </div>

      {/* Requirements Modal/Overlay */}
      {showRequirements && (
        <div className="mt-12 glass-card p-12 rounded-[3rem] animate-fade-in border-[#ED593B]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED593B]/10 blur-3xl -mr-32 -mt-32"></div>
          <h4 className="text-3xl font-black text-white mb-8">Requisitos para Colaborar</h4>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#ED593B] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <p className="text-white/80 text-lg">Semblanza profesional del ponente o perfil de la empresa.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#ED593B] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <p className="text-white/80 text-lg">Descripción detallada de la vacante o propuesta de tema para ponencia.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#ED593B] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <p className="text-white/80 text-lg">Logotipo oficial en formato vectorial (SVG) o PNG en alta resolución.</p>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h5 className="text-[#ED593B] font-black uppercase tracking-widest text-sm mb-4">Envía tu información a:</h5>
              <a href="mailto:outsiiders26@gmail.com" className="text-3xl md:text-4xl font-bold text-white break-all hover:text-[#ED593B] transition-colors">
                outsiiders26@gmail.com
              </a>
              <p className="text-white/40 mt-6 text-sm italic">
                * Nuestro equipo revisará tu propuesta y se pondrá en contacto contigo en un plazo de 48 horas hábiles.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <p className="text-white/30 font-mono-custom text-sm">
          PLATAFORMA DE VINCULACIÓN PROFESIONAL EXCLUSIVA PARA EL CONGRESO OUTSIIIDERS 2026.
        </p>
      </div>
    </div>
  );
};

export default JobBoard;
