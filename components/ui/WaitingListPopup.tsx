
import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface WaitingListPopupProps {
  onClose: () => void;
}

const WaitingListPopup: React.FC<WaitingListPopupProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waiting_list')
        .insert([{ full_name: name, email: email }])
        .select();

      if (error) {
        throw error;
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error: any) {
      if (error.code === '23505') { // Código de error para violación de constraint "unique"
        setErrorMessage('Este correo electrónico ya está en la lista.');
      } else {
        setErrorMessage('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Popup Content: Liquid Glass style */}
      <div className="relative w-full max-w-lg glass-card rounded-[2.5rem] border border-white/20 p-8 md:p-12 shadow-2xl overflow-hidden animate-scale-up">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED593B]/20 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-20 h-20 bg-[#4DCCBD]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#4DCCBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">¡ESTÁS DENTRO!</h3>
            <p className="text-white/60 font-mono-custom">Te avisaremos en cuanto la preventa comience.</p>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-4xl font-black text-white mb-4 leading-none tracking-tighter uppercase">
                LA VENTA SE <br/><span className="text-[#ED593B]">ABRIRÁ PRONTO</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Si quieres ser de los primeros en enterarte, únete a nuestra waiting list.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#ED593B] uppercase tracking-[0.3em] ml-4">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre aquí..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:ring-2 focus:ring-[#ED593B] outline-none transition-all font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#ED593B] uppercase tracking-[0.3em] ml-4">Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  placeholder="innovador@dominio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:ring-2 focus:ring-[#ED593B] outline-none transition-all font-medium"
                />
              </div>

              {status === 'error' && (
                <p className="text-xs font-bold text-red-400 mt-2 ml-4">{errorMessage}</p>
              )}

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#ED593B] text-white py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-[#ED593B] transition-all transform active:scale-95 shadow-2xl shadow-[#ED593B]/20 mt-4 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESANDO...
                  </>
                ) : (
                  'UNIRME A LA LISTA'
                )}
              </button>
            </form>

            <p className="text-[10px] text-white/20 text-center mt-8 font-black tracking-widest uppercase">
              CONEXIÓN CIFRADA SEIID // 2026
            </p>
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
      `}</style>
    </div>
  );
};

export default WaitingListPopup;
