import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Catálogos con Carrito",
      description: "Desarrollamos una interfaz limpia y rápida para que tus clientes puedan seleccionar productos y enviarte el pedido directamente por WhatsApp, evitando comisiones y registros molestos.",
      imageText: "Captura de Carrito de Compras (16:9)",
      link: "#"
    },
    {
      title: "Venta de Números",
      description: "Landing page optimizada para sorteos. Mostramos los premios de forma atractiva y permitimos elegir números disponibles rápidamente, con integración a tu WhatsApp para el comprobante de pago.",
      imageText: "Captura de Página de Sorteos (16:9)",
      link: "#"
    },
    {
      title: "Panel Administrativo",
      description: "Sistema de autogestión sencillo. Sin miedo a la tecnología: controla tus ventas, gestiona clientes y modifica tu contenido fácilmente desde cualquier dispositivo.",
      imageText: "Captura de Panel de Control (16:9)",
      link: "#"
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
              <div className="portfolio-image-container">
                <span>{project.imageText}</span>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn-ghost">Ver proyecto</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
