
import React, { useRef, useState, useEffect } from 'react';

const BadgeGenerator: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [name, setName] = useState('');

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("No se pudo acceder a la cámara. Por favor verifica los permisos en tu navegador.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraOn(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        setPhoto(canvasRef.current.toDataURL('image/png'));
        stopCamera();
      }
    }
  };

  const reset = () => {
    setPhoto(null);
    startCamera();
  };

  // Cleanup camera on unmount
  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-[#0066D8] mb-4">Tu Badge Digital</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Crea tu identificación oficial para OUTSIIIDERS 2026. Tómate una foto y personaliza tu pase de acceso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Step 1: Capture */}
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-inner border-2 border-dashed border-gray-200 flex items-center justify-center mb-6">
            {isCameraOn ? (
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted
                className="w-full h-full object-cover mirror"
                style={{ transform: 'scaleX(-1)' }}
              />
            ) : photo ? (
              <img src={photo} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-50 text-[#0066D8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Cámara Inactiva</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nombre en el Badge</label>
              <input 
                type="text" 
                placeholder="Escribe tu nombre..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0066D8] outline-none font-medium"
              />
            </div>
            
            <div className="pt-2">
              {!isCameraOn && !photo ? (
                <button 
                  onClick={startCamera}
                  className="w-full bg-[#0066D8] text-white font-black py-4 rounded-xl hover:bg-[#0052b1] transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  Activar Cámara
                </button>
              ) : isCameraOn ? (
                <button 
                  onClick={takePhoto}
                  className="w-full bg-[#ED593B] text-white font-black py-4 rounded-xl hover:bg-[#d44a2e] transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Capturar Foto
                </button>
              ) : (
                <button 
                  onClick={reset}
                  className="w-full bg-white border-2 border-gray-200 text-gray-600 font-black py-4 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  Repetir Foto
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Step 2: The Pass Visual */}
        <div className="flex flex-col items-center">
          <div className="relative w-80 h-[480px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col group">
            {/* Pass Header */}
            <div className="bg-[#0066D8] p-8 text-white text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
               <div className="relative z-10">
                 <div className="text-[10px] font-black tracking-widest uppercase mb-1 text-[#FFC759]">Official Attendee</div>
                 <div className="text-2xl font-black tracking-tighter">OUTSIIIDERS <span className="text-[#FFC759]">2026</span></div>
               </div>
            </div>

            {/* Pass Content */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-white relative">
              {/* Photo Frame */}
              <div className="w-44 h-44 rounded-full border-4 border-[#ED593B] p-1 mb-6 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                  {photo ? (
                    <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                  )}
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#4DCCBD] rounded-full border-2 border-white"></div>
              </div>

              {/* Name & Title */}
              <div className="text-center">
                <h3 className="text-2xl font-black text-[#212529] mb-1 uppercase tracking-tight leading-tight">
                  {name || 'TU NOMBRE AQUÍ'}
                </h3>
                <p className="text-sm font-bold text-[#3FA5C6] tracking-widest uppercase">INGENIERÍA IID</p>
              </div>
            </div>

            {/* Pass Footer / Barcode */}
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
              <div className="w-full h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4 px-6 overflow-hidden">
                <div className="flex gap-1 items-end">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`w-1 bg-gray-900/10 rounded-full transition-all duration-500 ${photo ? 'bg-gray-900' : ''}`} style={{ height: `${Math.random() * 20 + 10}px` }}></div>
                  ))}
                </div>
              </div>
              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">TEC DE MONTERREY • MAYO 2026</div>
            </div>
            
            {/* Ribbon Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#ED593B] rounded-b-lg"></div>
          </div>
          <p className="mt-6 text-sm text-gray-400 font-medium italic">Pase digital generado automáticamente</p>
        </div>
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default BadgeGenerator;
