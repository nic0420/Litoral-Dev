import React from 'react';
import './Services.css';

const Services = () => {
  const ecommerceData = [
    {
      title: "E-commerce con Tienda Nube",
      description: "Lleva tu negocio al siguiente nivel con una plataforma robusta y lista para vender.",
      features: [
        "Catálogo ilimitado de productos",
        "Integración con pasarelas de pago",
        "Configuración de envíos automáticos",
        "Diseño adaptado a la identidad de tu marca"
      ],
      diferencial: "Asesoramiento estructural y de negocio.",
      modelo: "Implementación rápida sobre plataforma."
    },
    {
      title: "Catálogo Autogestionable a Medida",
      description: "Una experiencia de compra ultrarrápida, sin intermediarios y con pedidos directos a tu WhatsApp.",
      features: [
        "Carga instantánea de productos",
        "Pedidos enviados directo a WhatsApp",
        "Panel de control 100% personalizado",
        "Sin comisiones por venta ni costos ocultos"
      ],
      diferencial: "Sin comisiones por venta ni abonos mensuales de servidor.",
      modelo: "Desarrollo propio escalable en 5 a 7 días."
    }
  ];

  const platformsData = [
    {
      title: "Plataforma de Sorteos",
      description: "Automatiza y potencia tus sorteos con un sistema profesional de venta de números.",
      features: [
        "Panel de control administrativo para venta",
        "Gestión de participantes y pagos",
        "Bloqueo automático de números",
        "Notificaciones integradas"
      ],
      diferencial: "Código garantizado por un Analista Programador en Sistemas, sin plantillas pesadas.",
      modelo: "Sistema especializado de alto rendimiento."
    },
    {
      title: "Plataforma Inmobiliaria",
      description: "Muestra tus propiedades con una interfaz elegante y un sistema de contacto ágil.",
      features: [
        "Galería inmersiva de propiedades",
        "Filtros avanzados de búsqueda",
        "Fichas detalladas con mapa",
        "Contacto directo y rápido"
      ],
      diferencial: "Código garantizado por un Analista Programador en Sistemas, sin plantillas pesadas.",
      modelo: "Desarrollo propio escalable."
    },
    {
      title: "Landing Pages Profesionales",
      description: "Convierte visitantes en clientes con páginas de alto impacto visual y carga rápida.",
      features: [
        "Diseño persuasivo de alto impacto",
        "Llamados a la acción estratégicos",
        "Optimización SEO básica",
        "Formularios de contacto integrados"
      ],
      diferencial: "Código garantizado por un Analista Programador en Sistemas, sin plantillas pesadas.",
      modelo: "Sitio web de una página optimizado."
    }
  ];

  return (
    <section className="section services" id="servicios">
      <div className="container">
        
        {/* Planes y Soluciones */}
        <div className="services-group">
          <h2 className="section-title">Planes y Soluciones</h2>
          <div className="ecommerce-grid">
            {ecommerceData.map((service, index) => (
              <div className="glass-card premium-card" key={`eco-${index}`}>
                <div className="premium-card-content">
                  <h3>{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <ul className="check-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="premium-card-footer">
                  <p><b>Diferencial:</b> {service.diferencial}</p>
                  <p><b>Modelo:</b> {service.modelo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plataformas Específicas */}
        <div className="services-group">
          <h2 className="section-title">Plataformas Específicas</h2>
          <div className="platforms-grid">
            {platformsData.map((platform, index) => (
              <div className="glass-card premium-card" key={`plat-${index}`}>
                <div className="premium-card-content">
                  <h3>{platform.title}</h3>
                  <p className="card-description">{platform.description}</p>
                  <ul className="check-list">
                    {platform.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="premium-card-footer">
                  <p><b>Diferencial:</b> {platform.diferencial}</p>
                  <p><b>Modelo:</b> {platform.modelo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
