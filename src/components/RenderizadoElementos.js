import React, { Component } from 'react'

class RendeizadoElementos extends Component {
    constructor( props ) {
        super( props);

        this.state = {
            estaciones : ['Primavera', 'Verano', 'Otoño', 'Invierno']
        };

    }
    

    render() {
        return (
            <div>
                <h2>RenderizadoElementos</h2>

                <ol>Estaciones del Año:
                    {
                        this.state.estaciones.map( (estacion, index) => <li key = { index }>{ estacion }</li>)
                    }
                </ol>
            </div>
        );
    }
}

export default RendeizadoElementos