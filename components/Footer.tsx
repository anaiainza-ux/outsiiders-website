
import React from 'react';

interface FooterProps {
  onOpenLinkedIn: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLinkedIn }) => {
  const socialLinks = [
    { label: 'LI', href: '#', onClick: (e: React.MouseEvent) => { e.preventDefault(); onOpenLinkedIn(); } },
    { 
      label: 'IG', 
      href: 'https://www.instagram.com/outsiiders.tec?igsh=NzcxM2Jlcnh4anU1&utm_source=qr' 
    },
  ];

  return (
    <footer className="py-20 px-6 md:px-12 bg-black/40 backdrop-blur-xl border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
            <span className="text-3xl font-black tracking-tighter block mb-8 text-white">
                OUTSIIIDERS <span className="text-[#ED593B]">2026</span>
            </span>
            <p className="text-white/50 max-w-sm mb-10 font-mono-custom text-sm leading-relaxed">
                El congreso de ingeniería e innovación líder en el norte del país. Una iniciativa de SEIID en el Tecnológico de Monterrey.
            </p>
            <div className="flex gap-6">
                {socialLinks.map(social => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  onClick={'onClick' in social ? (social.onClick as any) : undefined}
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-[#ED593B] transition-all font-black text-sm"
                >
                    {social.label}
                </a>
                ))}
            </div>
            </div>
            
            <div>
            <h4 className="text-xs font-black mb-8 text-[#ED593B] uppercase tracking-[0.3em]">Congreso</h4>
            <ul className="space-y-4 text-sm font-bold">
                <li><a href="#agenda" className="text-white/40 hover:text-white transition-colors">Agenda</a></li>
                <li><a href="#ponentes" className="text-white/40 hover:text-white transition-colors">Ponentes</a></li>
                <li><a href="#sponsors" className="text-white/40 hover:text-white transition-colors">Sponsors</a></li>
                <li><a href="#" className="text-white/40 hover:text-white transition-colors">Tickets</a></li>
            </ul>
            </div>
            
            <div>
            <h4 className="text-xs font-black mb-8 text-blue-400 uppercase tracking-[0.3em]">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:outsiiders26@gmail.com" className="text-white/40 text-sm font-bold hover:text-white transition-colors block">
                outsiiders26@gmail.com
              </a>
              <a href="tel:+526621791772" className="text-white/40 text-sm font-bold hover:text-white transition-colors block">
                +52 662 1791772
              </a>
              <p className="text-white/40 text-sm font-bold">Monterrey, Nuevo León</p>
            </div>
            </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-white/20 uppercase tracking-[0.2em]">
            <p>© 2026 OUTSIIIDERS CONGRESS. TODOS LOS DERECHOS RESERVADOS POR IID.</p>
            <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
