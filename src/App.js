import React from 'react';
import Header from './components/Header/Header'
import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'
import Peliculas from './components/Peliculas/Peliculas';


function App() {
  return (
    <React.Fragment>
    
      <main>
        
        <h2>Películas</h2>
        <Peliculas />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;