import React, { Component } from "react";
import "./CardComponents.css";
import { Link } from "react-router-dom";
class CardComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false,
      items: [],
      favoritos: [],
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
    this.setState({...this.state, favoritos: true});
  }
  quitarFav(id) {
    //terminar el filtro
    const item = JSON.parse(localStorage.getItem("items"));
    const filtrados = item.filter((fav) => fav.id !== id);
    localStorage.setItem("items", JSON.stringify(filtrados));
    this.setState({...this.state, favoritos: false});
    window.location.reload();
  }
 componentDidMount() {
 const item = JSON.parse(localStorage.getItem("items"));
  const filtrados = item.filter((fav) => fav.id === this.props.datosPela.id);
   if (filtrados.length >= 1) {
    this.setState({
      ...this.state,
       favoritos: true,
      });
  } else {
   this.setState({
    ...this.state,
      favoritos: false,
      });
 }
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
        {this.state.favoritos ? (
          <button onClick={() => this.quitarFav(this.props.datosPela.id)}>
            Quitar de favoritos
          </button>
        ) : (
          <button onClick={() => this.addfav(this.props.datosPela)}>
            Agregar de favoritos
          </button>
        )}
    
      </article>
    );
  }
}

export default CardComponents;
