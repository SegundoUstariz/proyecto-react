import React, {Component} from "react";


class Card extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        console.log(this.props);
        return(
            <article className="tarjeta">
                <img src={this.props.peliculas.image} alt={this.props.peliculas.titulo} />
                <h3>{this.props.peliculas.titulo}</h3>
                <p>Genero: {this.props.peliculas.genero}</p>
                <p className="delete" onClick={()=>this.props.borrar(this.props.peliculas.id)}>Borrar</p>
            </article>
        ) 
    }

}



import './card.css';
export default Card;