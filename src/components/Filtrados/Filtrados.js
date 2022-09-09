import React, {Component} from 'react';

class Filtrados extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarEnvio(evento){
        evento.preventDefault()
    }

    obtenerDatos(evento){
        this.setState({
            value: evento.target.value,
        }, ()=>this.props.filtrarPeliculas(this.state.value))
        
    }

    render(){
        console.log(this.props);
        return(
            <form onSubmit={(event)=>this.evitarEnvio(event)} action="">
                <input onChange={(event)=>this.obtenerDatos(event)} type="text" value={this.state.value}/>
            </form>
        )
    }

}

export default Filtrados