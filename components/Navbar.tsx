
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenWaitingList: () => void;
  onNavigateHome: () => void;
  onOpenJobBoard: () => void;
  onNavigateSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenWaitingList, onNavigateHome, onOpenJobBoard, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    onNavigateSection(section);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/30 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={onNavigateHome}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <span className="text-2xl font-black tracking-tighter text-white">
            OUTSIIIDERS <span className="text-[#ED593B]">2026</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          {['Agenda', 'Ponentes', 'Sponsors'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSectionClick(e, item.toLowerCase())}
              className="text-white/70 font-bold hover:text-white transition-all text-sm uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <button
            onClick={onOpenJobBoard}
            className="text-white/70 font-bold hover:text-white transition-all text-sm uppercase tracking-widest"
          >
            Bolsa de Trabajo
          </button>
          <button
            onClick={onOpenWaitingList}
            className="bg-[#ED593B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#ff6c4f] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#ED593B]/20"
          >
            Tickets
          </button>
        </div>

        <div className="md:hidden">
            <button onClick={onOpenWaitingList} className="bg-[#ED593B] p-3 rounded-full text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
