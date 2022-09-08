import React, { Component } from 'react';

class CardComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (
            <article className='character-card'>
                <img src={this.props.datosPela.poster_path} alt="" />
                <h2>{this.props.datosPela.original_title}</h2> 
                <p>{this.props.datosPela.overview}</p> 
                <p>Ver más</p>
            </article>

        )
    }

}

export default CardComponents