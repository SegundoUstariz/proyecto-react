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
            peliculasNuevas:[],
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

            fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=eb09954096929ff16616027732037e32&language=en-US`
              )
                .then((res) => res.json())
                .then((data) => {
                  this.setState({
                    ...this.state,
                    peliculasNuevas:data.results
                   });
                  console.log("peliculas Nuevas", data.results);
                })
                .catch();
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
              
                 <Filtrados pelis = {this.state.peliculas} actualizarEstado = {filtrarPeliculas} />
                 <button onClick={()=>this.traerMas()}> Traer más </button>
                 <h3>Peliculas populares</h3>
                <section className='cardContainer'>
                    { 
                        this.state.peliculas.map(
                            (unaPela, i) => {
                                if(i<=5){
                                    return(<CardComponents key={unaPela.id} datosPela={unaPela}/>)
                                }
                                else{
                                    return(<React.Fragment/>)
                                }
                            })
                    }
                </section>
                <h3>Peliculas nuevas</h3>
                <section className='cardContainer'>
                {
                    this.state.peliculasNuevas.map(
                        (unaPela, i) => {
                            if(i<=5){
                                return(<CardComponents key={unaPela.id} datosPela={unaPela}/>)
                            }
                            else{
                                return(<React.Fragment/>)
                            }
                        })
                }
                </section>
                
            </React.Fragment>
        )
    }

}


export default Peliculas