
import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (authError) {
        throw authError;
      }

      // Si el login es exitoso
      console.log('Usuario autenticado:', data.user);
      onLogin();
    } catch (err: any) {
      setError('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen paper-texture flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100 animate-fade-in">
        <div className="text-center mb-8">
            <span className="text-3xl font-black tracking-tighter text-[#0066D8]">
                OUTSIIIDERS <span className="text-[#ED593B]">2026</span>
            </span>
            <p className="text-gray-500 mt-2 font-mono-custom">Inicia sesión para innovar</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              placeholder="innovador@tec.mx"
              className="w-full px-5 py-4 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#0066D8] transition-all disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              placeholder="••••••••"
              className="w-full px-5 py-4 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#0066D8] transition-all disabled:opacity-50"
            />
          </div>

          {error && (
            <p className="text-xs font-bold text-red-500 mt-2 text-center">{error}</p>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#0066D8] text-white rounded-2xl font-black text-lg hover:bg-[#ED593B] transition-all transform active:scale-95 shadow-lg shadow-blue-100 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Iniciando...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <p className="text-sm text-gray-400">¿No tienes cuenta? <span className="text-[#0066D8] font-bold cursor-pointer hover:underline">Regístrate</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
