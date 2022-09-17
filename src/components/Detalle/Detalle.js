import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detalle.css'

const Detalle = (props) => {
    const [state, setState] = useState(null);
    const params = useParams();
    const getDetail = ()=> {
        fetch(`https://api.themoviedb.org/3/movie/`+params.id+`?api_key=eb09954096929ff16616027732037e32`)
        .then( res => res.json())
        .then( data => {
            setState(data)
            
        })
    }
    getDetail();
    return(
        <div> 
             {
            state !== null
            ? (
                <div className='detalles'>
                <h3>{state.title} </h3>
                <img src= {"https://image.tmdb.org/t/p/w500/"+state.poster_path} alt="" />
                <p>SINOPSIS: {state.overview} </p>
            <p> RATING: {state.popularity}</p>
            <p> FECHA DE ESTRENO: {state.release_date} </p>

            </div>
            ): 
            <div> cargando... </div>
            }
   
        </div>
       
    )

};


export default Detalle