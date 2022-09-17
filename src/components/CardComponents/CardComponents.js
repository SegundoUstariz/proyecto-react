import React, { Component } from "react";
import "./CardComponents.css";
import { Link } from "react-router-dom";
class CardComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false,
      items: [],
    };
  }

  verMas() {
    this.setState({
        ...this.state,
        verMas: !this.state.verMas,
    });
  }

  addfav(peli) {
    const item = JSON.parse(localStorage.getItem("items"));
    item.push(peli);
    localStorage.setItem("items", JSON.stringify(item));
    const ls=JSON.parse(localStorage.getItem("items"));
    console.log(ls)
  }
  quitarFav(id){ //terminar el filtro
    const item = JSON.parse(localStorage.getItem("items"));
    const filtrados = item.filter(fav => fav.id !== id);
    localStorage.setItem("items", JSON.stringify(filtrados));
    const ls=JSON.parse(localStorage.getItem("items"));
    console.log(ls)
  }

  render() {
    console.log(this.props);
    return (
      <article className="card-components">
        <img
          src={
            "https://image.tmdb.org/t/p/w500/" +
            this.props.datosPela.poster_path
          }
          alt=""
        />
        <h2>{this.props.datosPela.original_title}</h2>

        {this.state.verMas ? <p>{this.props.datosPela.overview}</p> : <p></p>}

        <button onClick={() => this.verMas()}>
          {this.state.verMas ? "Ver Menos" : "Ver Mas"}
        </button>
        <button>
          <Link to={"/Detalle/" + this.props.datosPela.id}>Ir a detalle</Link>
        </button>
        <button onClick={() => this.quitarFav(this.props.datosPela.id)}>
          Quitar de Favoritos
        </button>
      </article>
    );
  }
}

export default CardComponents;
