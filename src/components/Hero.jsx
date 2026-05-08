import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero section animate-fade-in" id="inicio">
      <div className="container hero-container">
        
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Soluciones web profesionales
          </div>
          
          <h1 className="hero-title">
            Tu negocio abierto las <span className="text-gradient">24 horas</span>.
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
              Escribinos por WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#servicios" className="btn-outline">
              Ver planes
            </a>
          </div>

          <div className="hero-tech-stack">
            <div className="tech-icons">
              <div className="tech-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div className="tech-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
              <div className="tech-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div>
            </div>
          </div>
        </div>

        {/* Right Column - Mockup Window */}
        <div className="hero-right">
          <div className="mockup-glow"></div>
          <div className="mockup-window glass-card">
            
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot bg-red"></span>
                <span className="dot bg-yellow"></span>
                <span className="dot bg-green"></span>
              </div>
              <div className="mockup-title">litoral.dev</div>
            </div>
            
            <div className="mockup-body">
              <div className="mockup-grid">
                
                <div className="mockup-card border-blue">
                  <div className="mockup-icon icon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>Diseño Moderno</h4>
                    <p>Interfaces atractivas y responsivas para todos los dispositivos</p>
                  </div>
                </div>

                <div className="mockup-card border-purple">
                  <div className="mockup-icon icon-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>Desarrollo Web</h4>
                    <p>Código limpio y eficiente para un rendimiento óptimo</p>
                  </div>
                </div>

                <div className="mockup-card border-green">
                  <div className="mockup-icon icon-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>SEO Optimizado</h4>
                    <p>Mejor visibilidad en buscadores y más tráfico web</p>
                  </div>
                </div>

                <div className="mockup-card border-orange">
                  <div className="mockup-icon icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  <div className="mockup-text">
                    <h4>Autogestionable</h4>
                    <p>Gestión de contenido sencilla sin depender de terceros</p>
                  </div>
                </div>

              </div>

              <div className="mockup-stats">
                <div className="stat">
                  <span className="stat-value text-blue">100%</span>
                  <span className="stat-label">Soluciones a medida</span>
                </div>
                <div className="stat">
                  <span className="stat-value text-purple">+10</span>
                  <span className="stat-label">Tecnologías modernas</span>
                </div>
                <div className="stat">
                  <span className="stat-value text-green">24/7</span>
                  <span className="stat-label">Soporte técnico</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;
