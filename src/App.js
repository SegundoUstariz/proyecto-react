import React from 'react';
import Header from './components/Header/Header'
import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <div id="wrapper">



        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">

            <CardComponents />


          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;