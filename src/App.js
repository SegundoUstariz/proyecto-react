import React from 'react';
import Header from './components/Header/Header'
//import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'
//import Peliculas from './components/Peliculas/Peliculas';
import { Route, Switch } from 'react-router-dom'
import NotFound from './screens/NotFound';
import Home from './screens/Home';
import VerMas from './screens/VerMas';
import Detalle from './components/Detalle/Detalle'
import Favoritos from './screens/Favoritos';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
         <Route path='/Detalle/:id' component={Detalle}/>
         <Route path='/todas' component={VerMas} />
         <Route path='/Favoritos' exact={true} component={Favoritos} />
          <Route path='/' exact={true} component={Home} />
          <Route path='' exact={true} component={NotFound} />
          
          
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;