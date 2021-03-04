import React, { Component } from 'react';
import data from '../helpers/data.json';
import App from '../App.css';

/* Crearemos un componente  */
function ElementoLista(props) {
    return(
        <li>
            <a href = { props.framework.web } className="App-link" target = "_blank">{ props.framework.name }</a>
        </li>
    );
} 

class RendeizadoElementos extends Component {
    constructor( props ) {
        super( props);

        this.state = {
            estaciones : ['Primavera', 'Verano', 'Otoño', 'Invierno']
        };

    }
    
    render() {
        console.log(data); 
        return (
			<div>
				<h2>RenderizadoElementos</h2>

				<ol>
					Estaciones del Año:
					{this.state.estaciones.map((estacion, index) => (
						<li key={index}>{estacion}</li>
					))}
				</ol>

				<h3>Frameworks Frontend JavaScript</h3>

				<ul>
                    { 
                        data.frameworks.map( framework => ( <ElementoLista key = { framework.id } framework = { framework }/> ) )
                    }
				</ul>
			</div>
		);
    }
}

export default RendeizadoElementos