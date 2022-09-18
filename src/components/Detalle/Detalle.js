import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detalle.css'
import config from '../../config/config'

const Detalle = (props) => {
    const [state, setState] = useState(null);
    const [fav, setFav] = useState(false);
    const params = useParams();
    const getDetail = () => {
        fetch(`https://api.themoviedb.org/3/movie/` + params.id + `?api_key=eb09954096929ff16616027732037e32`)
            .then(res => res.json())
            .then(data => {
                setState(data)

            })
        console.log(state)
    }

    getDetail();
    const addfav = (peli) => {
        const item = JSON.parse(localStorage.getItem("items"));
        item.push(peli);
        localStorage.setItem("items", JSON.stringify(item));
        setFav(true);
        window.location.reload();
    }
    const quitarFav = (id) => {
        //terminar el filtro
        const item = JSON.parse(localStorage.getItem("items"));
        const filtrados = item.filter((fav) => fav.id !== id);
        localStorage.setItem("items", JSON.stringify(filtrados));
        setFav(false);
        window.location.reload();
    }
    return (
        <div>
            {
                state !== null
                    ? (
                        <div className='detalles'>
                            <h3>{state.title} </h3>
                            <img src={"https://image.tmdb.org/t/p/w500/" + state.poster_path} alt="" />
                            <div> {
                                state.genres.map(
                                    item => (
                                        <p key={item.id}> {item.name}</p>
                                    )
                                )
                            }
                            </div>
                            <p>SINOPSIS: {state.overview} </p>
                            <p> DURACIÓN: {state.runtime} minutos</p>
                            <p> RATING: {state.popularity}</p>
                            <p> FECHA DE ESTRENO: {state.release_date} </p>
                            {fav ? (
                                <button onClick={() => quitarFav(state.id)}>
                                    Quitar de favoritos
                                  </button>
                            ) : (
                                    <button onClick={() => addfav(state)}>
                                        Agregar de favoritos
                                   </button>
                                )}

                        </div>
                    ) :
                    <div> cargando... </div>
            }

        </div>

    )

};


export default Detalle