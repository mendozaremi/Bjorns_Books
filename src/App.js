import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Hero from './Hero';
import Books from './Books';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
        <Books />
        <Footer />
      </header>
    </div>
  );
}

export default App;
