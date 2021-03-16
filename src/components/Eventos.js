import React, { Component } from 'react';
import App from '../App.css'

export class EventosES6 extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            contador: 0
        }

        /* Código para realizar el bindeo - Recomendable siempre en el constructor de la clase. */

        /* Al método sumar de la clase enlazame el this de la clase */
        this.sumar = this.sumar.bind(this);

        this.restar = this.restar.bind(this); 

        /* console.log(this.sumar); */
    }

    sumar(e) {
        console.log('Sumando');

        console.log( this ); /* Sin el bind esto retornaria undefined */

        this.setState({ 
            contador : this.state.contador + 1
        });
    }

    restar(e) {
        console.log('Restando');

        this.setState({
            contador : this.state.contador - 1
        });
    }


    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>

                <nav>
                    <button className = 'btn' onClick = { this.sumar }>+</button>

                    <button className = 'btn' onClick = { this.restar }>-</button>
                </nav>

                <h3>{ this.state.contador }</h3>
            </div>
        );
    }
}

/* https://www.etnassoft.com/2017/01/03/aprender-javascript-en-2016/ */

/*  Properties Initializer

    Diferencias a comparación de la sintaxis de ES6
    -   Ya no se cuenta con un constructor
    -   Los estados se lo definen directamente como una propiedad de la clase ya sin la palabra reservada this
    -   Los métodos son definidos usando arrow functions para que puedan heredar el contexto de la clase que los usa.
    -   Ya no es necesario realizar el bindeo como en la versión ES6.
*/

export class EventosES7 extends Component {
	
    state = {
        contador: 0
    };

	sumar = e => {
		console.log("Sumando");

		console.log(this); 

		this.setState({
			contador: this.state.contador + 1,
		});
	}

	restar = e => {
        console.log("Restando");
        
		this.setState({
			contador: this.state.contador - 1,
		});
	}

	render() {
		return (
			<div>
				<h2>Eventos en Componentes de Clase ES7</h2>

				<nav>
					<button className="btn" onClick={ this.sumar }>
						+
					</button>

					<button className="btn" onClick={ this.restar }>
						-
					</button>
				</nav>

				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}

/* ================================================================================================================ */
/* ======================Eventos Nativos, Sintéticos & Perzonalizados ============================================= */
/*
    -   Toda función manejadora de eventos solamente puede recibir como parametro el evento en si.
    -   Todo evento (e) tiene un atributo llamado target, que es el objeto que origina el evento.
    -   React envuelve el evento nativo del navegador para darle soporte en los diferentes navegadores y versiones 
        donde react se soporta. Adicionalmente tienes un mejor control desde react del evento.
    -   La mayoria de los eventos JS nativcs estan soportados por esta capa que recubre React llamada SyntheticBaseEvent
    -   More Info : https://es.reactjs.org/docs/events.html
    -   Que pasa si tengo la nesecidad de acceder al evento nativo, lo hacemos de la siguiente forma: 
            e.nativeEvent
*/
export class MasSobreEventos extends Component {
    /* handle = Manejar */
    handleClick = (e) => {
        console.log(e); // Google Chrome Expected Output : SyntheticBaseEvent {...}
                        // Mozila Firefox Expected Output : Object {...}

		// Forma de acceder al evento nativo
		console.log(e.nativeEvent); // Google Chrome - Expected Output : MouseEvent{...}
                                    // Mozila Firefox Expected Output : click {...}
                                    
		console.log(e.target);  // Google Chrome - Expected Output : <button>Saludar</button>
                                // Mozila Firefox Expected Output : <button>

		// Forma de acceder al target desde un evento nativo
        console.log(e.nativeEvent.target);  // Google Chrome - Expected Output : <button>Saludar</button>
                                            // Mozila Firefox Expected Output : <button>
	}
    
    render() {
        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={ this.handleClick }>Saludar</button>
            </div>
        );
    }
}

export class EventosConParametros extends Component {
    handleClick(e, mensaje) {
        console.log(e);
        console.log(e.target);
        console.log(mensaje);
    }

    render() {
        return(
            <div>
                <h2>Eventos con Parametros</h2>
                {/* Forma de pasar parametros junto a un evento */}
                <button onClick={ (e) => this.handleClick(e, "Hola pasando parametros desde un evento") }>Saludar</button>
            </div>
        );
    }
}
