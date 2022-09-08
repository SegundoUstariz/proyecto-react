import React, { Component } from 'react'

class CardComponents extends Component {
    constructor(){
        super()
        this.state = {
            peliculas:[],
            viewMore: false,
            text: "ver mas",
            peliculasIniciales: [],
            pagina: 1,
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
                cargando: true,
                peliculas: data.results,
                //peliculasIniciales: data.results,
                pagina: 2,
            }) 
        })
     }

     render() {
         return (
             
            <React.Fragment>   
             {
                 this.state.peliculas.map( (oneCharacter, idx) => <Card key={oneCharacter.name + idx} characterInfo={oneCharacter}>
             
             </React.Fragment>   
              
         )
     }

    }

export default CardComponents;