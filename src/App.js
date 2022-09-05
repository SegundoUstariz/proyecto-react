import React from 'react';
import Header from './components/Header/Header';
import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'

function App() {
  return (
 
    <div id="wrapper">
    
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

          


              <CardComponents />
              
              <Footer />           

        </div>

      </div>

    </div>
 
  );
}

export default App;