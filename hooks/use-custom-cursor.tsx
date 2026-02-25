
"use client"
import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.width = '32px';
    cursor.style.height = '32px';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.display = 'flex';
    cursor.style.alignItems = 'center';
    cursor.style.justifyContent = 'center';
    cursor.style.transition = 'transform 0.1s ease-out, filter 0.3s ease';
    
    // Icono de foco apagado (Blanco - Minimalista)
    const bulbOff = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1"></path>
        <line x1="9" y1="18" x2="15" y2="18"></line>
        <line x1="10" y1="20" x2="14" y2="20"></line>
      </svg>
    `;

    // Icono de foco encendido (Simétrico y Limpio como la imagen)
    // Usamos rayos distribuidos simétricamente
    const bulbOn = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFC759" stroke="#FFC759" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1"></path>
        <line x1="9" y1="18" x2="15" y2="18"></line>
        <line x1="10" y1="20" x2="14" y2="20"></line>
        
        <!-- Rayos Simétricos -->
        <line x1="12" y1="-2" x2="12" y2="0.5" stroke-width="2"></line> <!-- Arriba -->
        <line x1="5" y1="2" x2="7" y2="4" stroke-width="2"></line> <!-- Arriba Izquierda -->
        <line x1="19" y1="2" x2="17" y2="4" stroke-width="2"></line> <!-- Arriba Derecha -->
        <line x1="1" y1="9" x2="3.5" y2="9" stroke-width="2"></line> <!-- Izquierda -->
        <line x1="23" y1="9" x2="20.5" y2="9" stroke-width="2"></line> <!-- Derecha -->
        <line x1="5" y1="16" x2="7" y2="14" stroke-width="2"></line> <!-- Abajo Izquierda -->
        <line x1="19" y1="16" x2="17" y2="14" stroke-width="2"></line> <!-- Abajo Derecha -->
      </svg>
    `;

    cursor.innerHTML = bulbOff;
    document.body.appendChild(cursor);

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 16}px`;
      cursor.style.top = `${e.clientY - 16}px`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]')) {
        cursor.innerHTML = bulbOn;
        cursor.style.transform = 'scale(1.2)';
        cursor.style.filter = 'drop-shadow(0 0 15px rgba(255, 199, 89, 1))';
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]')) {
        cursor.innerHTML = bulbOff;
        cursor.style.transform = 'scale(1)';
        cursor.style.filter = 'none';
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver, true);
    document.addEventListener('mouseout', onMouseOut, true);
    
    document.body.style.cursor = 'none';
    
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver, true);
      document.removeEventListener('mouseout', onMouseOut, true);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);
};
