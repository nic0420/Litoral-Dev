import React, { useState } from 'react';
import './Portfolio.css';

const BrowserFrame = ({ url, label }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="browser-frame">
      <div className="browser-topbar">
        <div className="browser-dots">
          <span className="browser-dot red"></span>
          <span className="browser-dot yellow"></span>
          <span className="browser-dot green"></span>
        </div>
        <div className="browser-url">
          <svg className="browser-url-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span className="browser-url-text">{url}</span>
        </div>
      </div>
      <div className="browser-viewport">
        {!loaded && !error && (
          <div className="browser-loader">
            <div className="loader-spinner"></div>
          </div>
        )}
        {error && (
          <div className="browser-error">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="browser-error-icon"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            <p>Vista previa no disponible</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-ghost-sm">Abrir proyecto</a>
          </div>
        )}
        <iframe
          src={url}
          title={label}
          className={`browser-iframe ${loaded ? 'loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Catálogos con Carrito",
      description: "Desarrollamos una interfaz limpia y rápida para que tus clientes puedan seleccionar productos y enviarte el pedido directamente por WhatsApp, evitando comisiones y registros molestos.",
      url: "https://tomas-hazel.vercel.app/",
      label: "Catálogo Tienda Tomas"
    },
    {
      title: "Venta de Números",
      description: "Landing page optimizada para sorteos. Mostramos los premios de forma atractiva y permitimos elegir números disponibles rápidamente, con integración a tu WhatsApp para el comprobante de pago.",
      url: "https://giorgio-store.vercel.app/",
      label: "Sorteos Giorgio Store"
    },
    {
      title: "Panel Administrativo",
      description: "Sistema de autogestión sencillo. Sin miedo a la tecnología: controla tus ventas, gestiona clientes y modifica tu contenido fácilmente desde cualquier dispositivo.",
      url: "https://libreria-bia.vercel.app/admin",
      label: "Panel Librería Bia"
    }
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Casos de Éxito</h2>
        <p className="portfolio-subtitle">Soluciones reales funcionando ahora mismo.</p>
        
        <div className="portfolio-list">
          {projects.map((project, index) => (
            <div className="portfolio-featured-item glass-card" key={index}>
              <div className="portfolio-visual">
                <BrowserFrame url={project.url} label={project.label} />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Ver proyecto <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
