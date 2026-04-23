
import React from 'react';

interface HeroProps {
  onBuyTickets: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyTickets }) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-transparent"
    >
      {/* Background data particles effect via CSS */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-[#ED593B] to-transparent animate-[pulse_3s_infinite]" />
        <div className="absolute top-1/2 right-1/3 w-1 h-48 bg-gradient-to-b from-transparent via-white to-transparent animate-[pulse_4s_infinite]" />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-[#4DCCBD] to-transparent animate-[pulse_5s_infinite]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">
        <div className="mb-8 md:mb-12 animate-fade-in flex items-center gap-4" style={{ animationDelay: '0.2s' }}>
          <div className="h-[1px] w-12 bg-[#ED593B]" />
          <span className="text-white/60 font-mono-custom text-xs font-bold tracking-[0.5em] uppercase">
            SEIID presenta
          </span>
        </div>

        <div className="relative">
          <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black text-white leading-[0.85] tracking-tighter mb-12 animate-fade-in group">
            <span className="block hover:translate-x-4 transition-transform duration-500 ease-out cursor-default">OUTS</span>
            <span className="block text-transparent stroke-text hover:-translate-x-4 transition-transform duration-500 ease-out cursor-default" style={{ WebkitTextStroke: '2px white' }}>IIDERS</span>
            <span className="block text-[#ED593B] drop-shadow-[0_0_30px_rgba(237,89,59,0.5)]">2026</span>
          </h1>
          
          <div className="absolute -top-10 -right-10 hidden xl:block rotate-12 opacity-40">
             <div className="glass-card p-4 rounded-2xl border-white/20 animate-bounce">
                <p className="text-[#4DCCBD] font-mono-custom font-black text-sm">#INNOVATE_OR_DIE</p>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex-1 max-w-xl">
             <p className="text-2xl md:text-3xl font-light text-white/70 leading-relaxed mb-8 border-l-4 pl-8 border-[#ED593B]">
               El <span className="text-white font-bold">blueprint de la innovación</span> del mañana. <br/>
               <span className="text-white/90 font-medium">Este próximo: 13, 14 y 15 de Mayo 2026.</span>
             </p>
             <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onBuyTickets}
                  className="px-12 py-5 bg-white text-[#0066D8] font-black text-lg rounded-full transition-all hover:bg-[#ED593B] hover:text-white transform hover:-translate-y-1 active:scale-95 shadow-2xl"
                >
                  CONSEGUIR ACCESO
                </button>
                <a href="#agenda" className="px-12 py-5 border border-white/20 text-white font-black text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                   VER AGENDA
                </a>
             </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 text-right">
             <div className="space-y-1">
                <span className="text-white/40 font-mono-custom text-[10px] tracking-[0.3em] uppercase block">Localización</span>
                <span className="text-white font-bold block text-xl">Tec de Monterrey</span>
             </div>
             <div className="space-y-1">
                <span className="text-white/40 font-mono-custom text-[10px] tracking-[0.3em] uppercase block">Cronograma</span>
                <span className="text-white font-bold block text-xl uppercase">13, 14 y 15 de Mayo 2026</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic corner tech decorative element */}
      <div className="absolute top-0 right-0 p-12 opacity-20 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-[spin_20s_linear_infinite]">
          <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="1" strokeDasharray="10 10"/>
          <circle cx="100" cy="100" r="70" stroke="#ED593B" strokeWidth="2" strokeDasharray="5 5"/>
          <path d="M100 10V30M100 170V190M190 100H170M30 100H10" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
