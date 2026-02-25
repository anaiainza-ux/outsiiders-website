
import React, { useState, useEffect } from 'react';

interface TypewriterInvitationProps {
  onComplete: () => void;
}

const TypewriterInvitation: React.FC<TypewriterInvitationProps> = ({ onComplete }) => {
  const lines = [
    'Bienvenid@ a outsIIDers 2026.',
    'Aquí no solo vienes a observar...',
    'Vienes a crear e innovar.',
    'Buscamos a los que miran fuera de la caja.',
    'A los que eligen el camino de la innovación.',
    'Tres días. Tres pilares. Una visión.',
    'IA. Emprendimiento. Industria.',
    'IID PRESENTA: OUTSIIIDERS 2026.',
    'Tu lugar está aquí.'
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;

    if (currentLineIndex < lines.length) {
      const line = lines[currentLineIndex];
      if (currentText.length < line.length) {
        const timeout = setTimeout(() => {
          setCurrentText(line.substring(0, currentText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          if (currentLineIndex < lines.length - 1) {
            setCurrentLineIndex(currentLineIndex + 1);
            setCurrentText('');
          } else {
            setIsDone(true);
            setCurrentLineIndex(lines.length);
          }
        }, 800);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentLineIndex, lines, isDone]);

  const handleSkip = () => {
    if (!isDone) {
      setIsDone(true);
      setCurrentLineIndex(lines.length);
      setCurrentText('');
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-[#1a1a1a] relative overflow-hidden cursor-pointer"
      onClick={handleSkip}
    >
      {/* Paper texture local overlay for this screen only */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }}></div>
      
      <div className="w-full md:w-[60%] lg:w-[50%] min-h-[500px] flex flex-col items-center justify-center relative z-10 bg-[#fdfbf7] p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#e5e1d8] rounded-sm">
        
        {/* Lightbulb Icon with creative glow - now in black for vintage look */}
        <div className="mb-12 animate-fade-in flex flex-col items-center">
            <div className="relative">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 relative z-10">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"></path>
                    <line x1="9" y1="21" x2="15" y2="21"></line>
                    <line x1="10" y1="18" x2="14" y2="18"></line>
                    <path d="M12 9v3" stroke="#000000" strokeWidth="1.5"></path>
                </svg>
                {/* Subtle vintage glow */}
                <div className="absolute inset-0 bg-black/5 blur-xl rounded-full scale-150"></div>
            </div>
            <div className="w-[1px] h-12 bg-gradient-to-b from-black/20 to-transparent mt-2"></div>
        </div>

        <div className="font-mono-custom text-[#2c2c2c] text-lg md:text-xl leading-relaxed space-y-4 w-full text-center md:text-left">
          <div className="min-h-[2em] italic">
             {lines.slice(0, currentLineIndex).map((line, idx) => (
                <p key={idx} className={idx === 7 ? "text-[#ED593B] font-bold" : ""}>{line}</p>
             ))}
             {!isDone && (
                <p className={currentLineIndex === 7 ? "text-[#ED593B] font-bold" : ""}>
                    {currentText}
                    <span className="inline-block w-2 h-5 bg-black animate-pulse ml-1"></span>
                </p>
             )}
          </div>
        </div>

        {isDone && (
          <div className="mt-12 animate-fade-in flex justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent handleSkip from firing
                onComplete();
              }}
              className="group relative overflow-hidden bg-black px-12 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 ease-out hover:shadow-2xl active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                ABRIR CARTA
              </span>
              <div className="absolute inset-0 h-full w-full scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left"></div>
            </button>
          </div>
        )}
        
        {!isDone && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/30 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
            Haz clic para omitir
          </div>
        )}
      </div>
    </div>
  );
};

export default TypewriterInvitation;
