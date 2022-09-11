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
        const textoAFiltrar = evento.target.value;
        this.setState({
            value: textoAFiltrar
        });

        
        let peliculasFiltradas = this.props.pelis.filter( unaPela => unaPela.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        // console.log(this.props.actualizarEstado);
        this.props.actualizarEstado(peliculasFiltradas) ;
        
    }

    render(){
        // console.log(this.props);
        return(
            <form onSubmit={(event)=>this.evitarEnvio(event)} action="">
                <input onChange={(event)=>this.obtenerDatos(event)} type="text" value={this.state.value}/>
            </form>
        )
    }
}

export default Filtrados