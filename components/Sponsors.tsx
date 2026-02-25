
import React, { useState } from 'react';
import SponsorContactPopup from './ui/SponsorContactPopup';

const Sponsors: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
          NUESTROS <span className="text-[#ED593B]">ALIADOS</span>
        </h2>
        <p className="text-white/50 font-mono-custom text-xl max-w-2xl mx-auto mb-12">
          Organizaciones líderes que apuestan por la próxima generación de innovadores, impulsando juntos el futuro de la industria.
        </p>
        
        <div className="glass-card max-w-3xl mx-auto p-12 rounded-[3rem] border-white/10 relative overflow-hidden group">
          {/* Decorative glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#ED593B]/20 blur-[60px] rounded-full group-hover:bg-[#ED593B]/30 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#4DCCBD]/20 blur-[60px] rounded-full group-hover:bg-[#4DCCBD]/30 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">¿Quieres sumarte como patrocinador?</h3>
            <p className="text-white/40 mb-10 font-medium text-lg">
              Sé parte del cambio. Posiciona tu marca frente a los ingenieros y líderes más brillantes de la nueva generación.
            </p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="inline-block px-12 py-5 bg-[#ED593B] text-white font-black uppercase tracking-[0.2em] text-sm rounded-full hover:bg-white hover:text-[#ED593B] transition-all transform hover:-translate-y-1 shadow-2xl shadow-orange-500/20"
            >
              SÉ PARTE DEL EVENTO
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/5">
          <div className="w-2 h-2 bg-[#4DCCBD] rounded-full animate-pulse shadow-[0_0_10px_#4DCCBD]"></div>
          <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Convocatoria Abierta para Empresas 2026</span>
        </div>
      </div>

      {isPopupOpen && (
        <SponsorContactPopup onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default Sponsors;
