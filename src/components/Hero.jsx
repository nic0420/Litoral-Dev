import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero section animate-fade-in">
      <div className="container hero-content">
        <h1 className="hero-title">
          Tu negocio abierto las <span className="text-gradient">24 horas</span>.
          <br /> Webs a medida para comercios y emprendedores.
        </h1>
        <p className="hero-subtitle">
          Catálogos con carrito, páginas de sorteos y landing pages autogestionables. 
          Listas y funcionando en 5 a 7 días.
        </p>
        <div className="hero-actions">
          <a 
            href="https://wa.me/5493795769425?text=Hola,%20quiero%20hacer%20una%20web%20para%20mi%20negocio." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
