import React, { Component } from 'react';
import App from '../App.css'

export default class Eventos extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            contador: 0
        }

        /* Código para realizar el bindeo - Recomendable siempre en el constructor de la clase. */

        /* Al método sumar de la clase enlazame el this de la clase */
        this.sumar = this.sumar.bind(this);

        this.restar = this.restar.bind(this); 

        console.log(this.sumar);
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
                <h2>Eventos en Componentes de Clase</h2>

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