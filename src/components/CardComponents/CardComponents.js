import React, { Component } from 'react'

class CardComponents extends Component {
    constructor(){
        super()
        this.state = {
            peliculas:[],
            titulo: [],
            genero: [],
            viewMore: false,
            text: "ver mas",
            peliculasIniciales: [],
            page: 1,
           cargando: false,
           cambiarOrientacion: false,
           text:'fas fa-align-justify',
            }

        }
    componentDidMount() {
        const url= 'https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32'
        console.log(url);
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
            this.setState( {
                
                peliculas: data.results,
                titulo: results.title
    
            }) 
        })
     }

     render() {
         return (
             
            <React.Fragment>   
             {
                 this.state.peliculas.map( (unaPelicula, idx) => <Card key={peliculas.titulo + idx} titulo={unaPelicula}>
             
             </React.Fragment>   
              
         )
     }

    }

export default CardComponents;