
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import TypewriterInvitation from './components/TypewriterInvitation';
import LinkedInModal from './components/ui/LinkedInModal';
import { WebGLShader } from './components/ui/web-gl-shader';
import { useCustomCursor } from './hooks/use-custom-cursor';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [showInvitation, setShowInvitation] = useState(true);
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);
  const isFirstMount = useRef(true);
  const lastHash = useRef(window.location.hash);

  // Activate the global custom cursor experience
  useCustomCursor();

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    
    // Prevenir redirecciones en la carga inicial
    if (isFirstMount.current) {
      isFirstMount.current = false;
    }

    if (['#agenda', '#ponentes', '#sponsors'].includes(hash)) {
      setCurrentView('home');
    } else if (!hash || hash === '#' || hash === '') {
      setCurrentView('home');
    }
    
    lastHash.current = hash;
  }, []);

  useEffect(() => {
    const hasSeenInvite = localStorage.getItem('outsiiiders_seen_invite') === 'true';
    if (hasSeenInvite) {
      setShowInvitation(false);
    }
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  useEffect(() => {
    const hash = window.location.hash;
    if (currentView === 'home' && hash.startsWith('#') && hash.length > 1) {
      const id = hash.substring(1);
      
      const scrollTimer = setTimeout(() => {
        try {
          const element = document.getElementById(id);
          if (element) {
            const offset = 90;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } catch (err) {
          console.error("Scroll error:", err);
        }
      }, 100);
      
      return () => clearTimeout(scrollTimer);
    }
  }, [currentView, lastHash.current]);

  const handleInviteComplete = () => {
    setShowInvitation(false);
    localStorage.setItem('outsiiiders_seen_invite', 'true');
    setCurrentView('home');
    try {
      window.history.replaceState(null, "", window.location.pathname);
    } catch (e) {}
  };

  const handleBuyTickets = () => {
    window.open('https://www.ticketopolis.com/outsiiders2026/', '_blank', 'noopener,noreferrer');
  };

  const navigateTo = (view: AppView, targetSection?: string) => {
    if (targetSection) {
      const formattedSection = targetSection.startsWith('#') ? targetSection : `#${targetSection}`;
      
      if (currentView !== 'home') {
        setCurrentView('home');
      }
      
      if (window.location.hash === formattedSection) {
        const element = document.getElementById(targetSection.replace('#', ''));
        if (element) {
          const offset = 90;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      } else {
        window.location.hash = formattedSection;
      }
    } else {
      setCurrentView(view);
      if (view === 'home') {
        try {
          window.history.pushState("", document.title, window.location.pathname);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
          window.location.hash = "";
        }
      }
    }
  };

  if (showInvitation) {
    return <TypewriterInvitation onComplete={handleInviteComplete} />;
  }

  return (
    <div className="min-h-screen selection:bg-[#ED593B] selection:text-white bg-transparent">
      <WebGLShader />

      <Navbar 
        onBuyTickets={handleBuyTickets} 
        onNavigateSection={(section) => navigateTo('home', section)}
        onNavigateHome={() => navigateTo('home')}
      />
      
      {currentView === 'home' && (
        <main className="relative z-10">
          <Hero onBuyTickets={handleBuyTickets} />
          
          <section id="agenda" className="py-32 px-4 md:px-8 border-y border-white/5 scroll-mt-24">
            <Schedule />
          </section>
          
          <section id="ponentes" className="py-32 px-4 md:px-8 overflow-hidden scroll-mt-24">
            <Speakers />
          </section>

          <section id="sponsors" className="py-32 px-4 md:px-8 border-y border-white/5 scroll-mt-24">
            <Sponsors />
          </section>
        </main>
      )}

      <Footer onOpenLinkedIn={() => setIsLinkedInModalOpen(true)} />

      <LinkedInModal 
        isOpen={isLinkedInModalOpen} 
        onClose={() => setIsLinkedInModalOpen(false)} 
      />
    </div>
  );
};

export default App;
