import React from 'react';
import './Authority.css';

const Authority = () => {
  return (
    <section className="section authority" id="nosotros">
      <div className="container">
        <div className="authority-content glass-card">
          <div className="authority-text">
            <h2>Por qué elegir Litoral.dev</h2>
            <p className="highlight-text">
              Desarrollos dirigidos por un <strong>Analista Programador en Sistemas</strong>.
            </p>
            <ul className="authority-list">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Garantía de sitios seguros, modernos y sin plantillas pesadas.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>No usamos plataformas cerradas, tu web es ágil y tuya.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Cero comisiones por venta. Todo lo que ganas es tuyo.</span>
              </li>
            </ul>
          </div>
          <div className="authority-badge">
            <div className="badge-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>Seguridad y Calidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
