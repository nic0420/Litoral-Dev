import React from 'react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: "Catálogos y Tiendas",
      description: "Para que tus clientes compren fácil y rápido, directo a tu WhatsApp.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      )
    },
    {
      title: "Gestión de Sorteos",
      description: "Plataformas con panel de control intuitivo para vender números y administrar participantes sin estrés.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
      )
    },
    {
      title: "Landing Pages",
      description: "Tu carta de presentación digital para destacar servicios o captar potenciales clientes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
      )
    }
  ];

  return (
    <section className="section services" id="servicios">
      <div className="container">
        <h2 className="section-title">Qué problemas solucionamos</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="glass-card service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
