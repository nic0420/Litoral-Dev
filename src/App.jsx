import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Authority from './components/Authority';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Portfolio />
      <Authority />
      <Footer />
    </div>
  );
}

export default App;
