import React, {Component} from 'react';
import CardComponents from '../CardComponents/CardComponents';
import Filtrados from '../Filtrados/Filtrados';
import Formulario from '../Formulario/Formulario';

class Peliculas extends Component{
    constructor(){
        super()
        this.state={
            peliculas:[], //aparecer pelas
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32')
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results
            }))
            .catch()
    }

    filtrarPeliculas(textoAFiltrar){
        
        let peliculasFiltradas = this.state.peliculas.filter( unaPela => unaPela.titulo.toLowerCase().includes(textoAFiltrar.toLowerCase()))

        this.setState({
            peliculas: peliculasFiltradas,
        })
    }

    render(){
        console.log(this.state.peliculas);
        return(
            <React.Fragment>
                 <Filtrados filtrarPeliculas={(textoABuscar)=>this.filtrarPeliculas(textoABuscar)} />
                <button> Traer más </button>
                <section className='cardContainer'>
                    { 
                        this.state.peliculas.map( (unaPela, idx) => <CardComponents key={unaPela.name+idx} datosPela={unaPela}/>)
                    }
                </section>
            </React.Fragment>
        )
    }

}


export default Peliculas