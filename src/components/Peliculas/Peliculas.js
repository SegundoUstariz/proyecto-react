import React, {Component} from 'react';
import CardComponents from '../CardComponents/CardComponents';
import Filtrados from '../Filtrados/Filtrados';
import './Peliculas.css'
import {Link} from 'react-router-dom';


class Peliculas extends Component{
    constructor(){
        super()
        this.state={
            peliculas:[], //aparecer pelas
            page:1
        }
    }

    componentDidMount(){
        //BUscamos datos
        
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=${this.state.page}`)
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results,
                page:this.state.page+1
            }))
            .catch()
    }
    
    traerMas(){
        //Traer la siguiente página de peliculas
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=${this.state.page}`)
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results.concat(this.state.peliculas),
                page: this.state.page+1
            }))
            .catch()
    }

  

    render(){
        console.log(this.state.peliculas);
        const filtrarPeliculas = (filtradas) => {
            this.setState({
                peliculas: filtradas,
            })
        }
           ;     
        return(
            <React.Fragment>
                <button>
                    <Link to="/Cartelera"> Ver las nuevas peliculas</Link>
                </button>
                 <Filtrados pelis = {this.state.peliculas} actualizarEstado = {filtrarPeliculas} />
                 <button onClick={()=>this.traerMas()}> Traer más </button>
                <section className='cardContainer'>
                    { 
                        this.state.peliculas.map( (unaPela, idx) => <CardComponents key={unaPela.id} datosPela={unaPela}/>)
                    }
                </section>
                
            </React.Fragment>
        )
    }

}


export default Peliculas