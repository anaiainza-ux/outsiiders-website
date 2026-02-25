
import React, { useState } from 'react';

interface JobBoardModalProps {
  onClose: () => void;
}

const CONTACT_EMAIL = "outsiiders26@gmail.com";

const JobBoardModal: React.FC<JobBoardModalProps> = ({ onClose }) => {
  const [view, setView] = useState<'initial' | 'companyInfo' | 'comingSoon'>('initial');
  const [copied, setCopied] = useState(false);

  // Template de correo solicitado
  const emailTemplate = `Estimado equipo de OUTSIIIDERS 2026,

Por medio de la presente, me pongo en contacto con ustedes en representación de [Nombre de la Empresa]. Mi nombre es [Tu Nombre] y me desempeño como [Puesto/Cargo].

Hemos seguido de cerca la iniciativa del congreso organizado por la carrera de Ingeniería en Innovación y Desarrollo (IID) y estamos muy interesados en colaborar con el talento joven del Tecnológico de Monterrey.

Solicitamos formalmente información detallada sobre los requisitos y beneficios para integrar nuestras vacantes en la Bolsa de Trabajo del TEC vinculada al evento OUTSIIIDERS 2026.

Quedo a la espera de su respuesta para iniciar este proceso de vinculación.

Atentamente,
[Nombre Completo]
[Teléfono de contacto]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl glass-card rounded-[3rem] border border-white/20 p-8 md:p-16 shadow-2xl overflow-hidden animate-scale-up text-white">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4DCCBD]/10 blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ED593B]/10 blur-[100px] -ml-40 -mb-40 pointer-events-none" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {view === 'initial' ? (
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                Bolsa de Trabajo <span className="text-[#4DCCBD]">OUTSIIIDERS</span>
              </h2>
              <p className="text-white/50 font-mono-custom">El puente entre el talento y la industria.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Students Path */}
              <div className="bg-white/5 rounded-3xl p-10 border border-white/5 hover:border-[#4DCCBD]/30 transition-all group flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#4DCCBD]/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#4DCCBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">Para Estudiantes</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    Encuentra oportunidades exclusivas de nuestros sponsors y empresas aliadas, pre-filtradas para ti.
                  </p>
                </div>
                <div className="mt-auto">
                  <button 
                    onClick={() => setView('comingSoon')}
                    className="block w-full bg-[#4DCCBD] text-white py-4 rounded-2xl font-black text-center hover:bg-white hover:text-[#4DCCBD] transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/10"
                  >
                    Ir a la Bolsa de Trabajo
                  </button>
                </div>
              </div>

              {/* Company Path */}
              <div className="bg-white/5 rounded-3xl p-10 border border-white/5 hover:border-[#ED593B]/30 transition-all group flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#ED593B]/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#ED593B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">Para Empresas</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    Publica tus vacantes y conecta con el mejor talento en innovación y desarrollo del Tecnológico de Monterrey.
                  </p>
                </div>
                <div className="mt-auto">
                  <button 
                    onClick={() => setView('companyInfo')}
                    className="block w-full bg-[#ED593B] text-white py-4 rounded-2xl font-black hover:bg-white hover:text-[#ED593B] transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/10"
                  >
                    Publicar una Vacante
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : view === 'companyInfo' ? (
          <div className="relative z-10 animate-fade-in">
            <button 
              onClick={() => setView('initial')}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 font-bold uppercase tracking-widest text-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
              Volver
            </button>
            
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Publica tu <span className="text-[#ED593B]">Vacante</span>
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl">
              Para obtener acceso y que tus vacantes sean destacadas con el filtro <span className="text-white font-bold">'OUTSIIIDERS'</span>, por favor copia el siguiente template y envíalo a <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#ED593B] hover:underline font-black">{CONTACT_EMAIL}</a>:
            </p>

            <div className="flex flex-col items-center justify-center py-2">
              <div className="bg-white/5 rounded-3xl p-8 w-full border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="relative mb-6">
                  <pre className="text-sm md:text-base text-white/80 font-mono-custom whitespace-pre-wrap bg-black/40 p-6 rounded-2xl border border-white/5 max-h-[300px] overflow-y-auto custom-scrollbar">
                    {emailTemplate}
                  </pre>
                  
                  <button 
                    onClick={handleCopy}
                    className={`absolute top-4 right-4 p-3 rounded-xl transition-all flex items-center gap-2 ${
                      copied ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {copied ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-bold uppercase tracking-widest">Copiado</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span className="text-xs font-bold uppercase tracking-widest">Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-white/40 text-xs font-mono-custom">
                    * Completa los campos entre corchetes antes de enviar.
                  </p>
                  <a 
                    href={`mailto:${CONTACT_EMAIL}?subject=Publicar Vacante - OUTSIIIDERS 2026`}
                    className="text-[#ED593B] hover:text-white transition-colors text-sm font-black uppercase tracking-widest flex items-center gap-2"
                  >
                    Abrir correo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 animate-fade-in text-center py-10">
            <button 
              onClick={() => setView('initial')}
              className="absolute top-0 left-0 flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
              Volver
            </button>
            
            <div className="w-24 h-24 bg-[#4DCCBD]/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <svg className="w-12 h-12 text-[#4DCCBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              COMING <span className="text-[#4DCCBD]">SOON</span>
            </h2>
            
            <div className="max-w-xl mx-auto">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8">
                El acceso exclusivo a la bolsa de trabajo será revelado durante el <span className="text-white font-bold">Día 3</span> del congreso.
              </p>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 inline-block">
                <p className="text-[#4DCCBD] font-mono-custom font-bold uppercase tracking-widest text-sm">
                  Beneficio exclusivo para asistentes presenciales
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(237, 89, 59, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(237, 89, 59, 0.5);
        }
      `}</style>
    </div>
  );
};

export default JobBoardModal;
