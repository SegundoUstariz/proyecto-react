import React, {Component} from 'react';
import CardComponents from '../CardComponents/CardComponents';
import Filtrados from '../Filtrados/Filtrados';


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

    traerMas(){
        //Traer la siguiente página de peliculas
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results.concat(this.state.peliculas),
                nextUrl: data.results.next
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
                 <Filtrados pelis = {this.state.peliculas} actualizarEstado = {filtrarPeliculas} />
                 <button onClick={()=>this.traerMas()}> Traer más </button>
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