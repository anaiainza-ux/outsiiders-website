
import React, { useState } from 'react';

interface SponsorContactPopupProps {
  onClose: () => void;
}

const SponsorContactPopup: React.FC<SponsorContactPopupProps> = ({ onClose }) => {
  const WHATSAPP_URL = "https://wa.me/526621791772";
  const CONTACT_EMAIL = "outsiiders26@gmail.com";
  const DIRECT_CONTACT_EMAIL = "A01255054@tec.mx";
  
  const [showEmails, setShowEmails] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl glass-card rounded-[3rem] border border-white/20 p-8 md:p-14 shadow-2xl overflow-hidden animate-scale-up text-white">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED593B]/20 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4DCCBD]/10 blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          {!showEmails ? (
            <>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tighter uppercase">
                ¡NOS ENCANTA QUE <span className="text-[#ED593B]">QUIERAS SUMAR</span>!
              </h3>
              
              <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium">
                Para enviarte nuestra propuesta personalizada y los planes de patrocinio, elige tu medio preferido para contactar a nuestro equipo de alianzas:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* WhatsApp Option */}
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-black uppercase tracking-widest text-white mb-1">WhatsApp</span>
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Chatea con nosotros</span>
                </a>

                {/* Email Option */}
                <button 
                  onClick={() => setShowEmails(true)}
                  className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-[#ED593B]/20 hover:border-[#ED593B]/40 transition-all group"
                >
                  <div className="w-16 h-16 bg-[#ED593B]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#ED593B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-black uppercase tracking-widest text-white mb-1">Email</span>
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Ver correos de contacto</span>
                </button>
              </div>
            </>
          ) : (
            <div className="animate-fade-in">
              <button 
                onClick={() => setShowEmails(false)}
                className="mb-6 flex items-center gap-2 text-[#ED593B] font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Volver
              </button>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
                CANALES DE <span className="text-[#ED593B]">CONTACTO</span>
              </h3>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black text-[#ED593B] uppercase tracking-[0.3em] mb-2">Correo del Congreso</p>
                    <p className="text-xl md:text-2xl font-bold text-white break-all">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleCopy(CONTACT_EMAIL)}
                    className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${copiedEmail === CONTACT_EMAIL ? 'bg-[#4DCCBD] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    {copiedEmail === CONTACT_EMAIL ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black text-[#4DCCBD] uppercase tracking-[0.3em] mb-2">Contacto Directo Equipo</p>
                    <p className="text-xl md:text-2xl font-bold text-white break-all">
                      {DIRECT_CONTACT_EMAIL}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleCopy(DIRECT_CONTACT_EMAIL)}
                    className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${copiedEmail === DIRECT_CONTACT_EMAIL ? 'bg-[#4DCCBD] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    {copiedEmail === DIRECT_CONTACT_EMAIL ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default SponsorContactPopup;
