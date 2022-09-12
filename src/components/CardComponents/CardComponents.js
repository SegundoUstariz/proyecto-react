
import React, { Component } from 'react';
import './CardComponents.css'
class CardComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            verMas: false        }
    }

    verMas(){
        this.setState ({
            verMas: !this.state.verMas}) 
    }

    render() {
        console.log(this.props);
        return (
            <article className='card-components'>
                <img src={"https://image.tmdb.org/t/p/w500/"+this.props.datosPela.poster_path} alt="" />
                <h2>{this.props.datosPela.original_title}</h2> 

                   {
                    this.state.verMas ? <p>{this.props.datosPela.overview}</p> : <p></p>
                   }

                <button onClick={() => this.verMas()}>
                    {this.state.verMas ? "Ver Menos" : "Ver Mas" }
                </button>
                <button>
                    Ir a detalle
                </button>
                <button>
                    Anadir a Favoritos
                </button>

            </article>

        )
    }

}

export default CardComponents