import React from 'react';
import Header from './components/Header/Header'
import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'
import Peliculas from './components/Peliculas/Peliculas';

function App() {
  return (
    <React.Fragment>
      <h1>My App in React</h1>
      <main>
        <h2>Personajes de Rick and Morty</h2>
        <Peliculas />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;