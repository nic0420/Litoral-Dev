import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-cta glass-card">
          <h2>No te quedes afuera del mundo digital.</h2>
          <p>Empecemos a armar tu web hoy.</p>
          <a 
            href="https://wa.me/5493795769425?text=Hola,%20quiero%20empezar%20a%20armar%20mi%20web." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-large"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Hablemos por WhatsApp
          </a>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">&lt;/&gt; litoral.dev</span>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/litoral.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>@litoral.dev</span>
            </a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Litoral.dev. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
