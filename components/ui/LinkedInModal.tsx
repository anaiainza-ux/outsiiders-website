
import React from 'react';

interface LinkedInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkedInModal: React.FC<LinkedInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl animate-scale-up overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-[#0066D8] tracking-tight">
            Contacta con nuestro equipo
          </h2>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
            <div className="w-20 h-20 bg-[#0066D8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-[#0066D8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Ana Ainza Acosta</h3>
            <p className="text-[#ED593B] font-black uppercase tracking-widest text-xs">Presidenta</p>
          </div>

          <a 
            href="https://www.linkedin.com/in/anaainzaacosta"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#ED593B] text-white py-4 rounded-xl font-black text-lg hover:bg-[#d44d32] transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/20 text-center"
          >
            Ver Perfil de LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default LinkedInModal;
