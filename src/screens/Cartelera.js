import React, { Component } from "react";
import CardComponents from "../components/CardComponents/CardComponents";

class Cartelera extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [], //aparecer pelas
    };
  }

  componentDidMount() {
    //Buscamos datos

    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=eb09954096929ff16616027732037e32&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ peliculas: data.results });
        console.log(data.results);
      })
      .catch();
  }
  render(){
   
    return(
        <React.Fragment>
            <h1>Nuevas peliculas</h1>
            {
                this.state.peliculas.map(nuevaPeli =>(
                    <CardComponents key={nuevaPeli.id} datosPela={nuevaPeli}/>
                ))
            }
        </React.Fragment>
    )
}
}
export default Cartelera;
