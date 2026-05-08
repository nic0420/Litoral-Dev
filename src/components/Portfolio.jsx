import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Nuestros Trabajos</h2>
        <p className="portfolio-subtitle">Soluciones reales funcionando ahora mismo.</p>
        
        <div className="portfolio-grid">
          {/* Placeholder 1: Carrito */}
          <div className="portfolio-item glass-card">
            <div className="portfolio-image-placeholder">
              <span>Captura de Carrito de Compras (1080x1080)</span>
            </div>
            <div className="portfolio-info">
              <h3>Catálogos con Carrito</h3>
              <p>Interfaz limpia para que el cliente seleccione productos y envíe el pedido por WhatsApp.</p>
            </div>
          </div>

          {/* Placeholder 2: Sorteos */}
          <div className="portfolio-item glass-card">
            <div className="portfolio-image-placeholder">
              <span>Captura de Página de Sorteos (1080x1080)</span>
            </div>
            <div className="portfolio-info">
              <h3>Venta de Números</h3>
              <p>Landing page optimizada para mostrar premios y elegir números disponibles rápidamente.</p>
            </div>
          </div>

          {/* Placeholder 3: Panel Admin */}
          <div className="portfolio-item glass-card">
            <div className="portfolio-image-placeholder">
              <span>Captura de Panel de Control (1080x1080)</span>
            </div>
            <div className="portfolio-info">
              <h3>Panel Administrativo</h3>
              <p>Autogestión sencilla. Sin miedo a la tecnología: controla tus ventas y clientes fácilmente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
