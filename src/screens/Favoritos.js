import React, { useState,useEffect } from "react";
import CardComponents from "../components/CardComponents/CardComponents";

function Favoritos() {
  const [state, setState] = useState(null);
  const getFav = () => {
    const item = JSON.parse(localStorage.getItem("items"));
    setState(item);
    console.log(item);
  };

  useEffect(()=>{
    getFav();
  },[]);
  return (
    <React.Fragment>
      { 
      state !== null 
      ? (
      <React.Fragment>
        Favoritos
        {
            state.map((peliFav)=> (
                <CardComponents key={peliFav.id} datosPela={peliFav}/>

              
            ))
        }
    </React.Fragment>
      )
      : <p>cargando...</p>
      }
    </React.Fragment>
  );
}

export default Favoritos;
