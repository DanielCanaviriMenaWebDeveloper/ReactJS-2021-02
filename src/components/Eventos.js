import React, { Component } from 'react';
import App from '../App.css'

export default class Eventos extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            contador: 0
        }

        this.sumar = this.sumar.bind(this);

        this.restar = this.restar.bind(this);
    }

    sumar() {
        console.log('Sumando');

        console.log( this );

        this.setState({ 
            contador : this.state.contador + 1
        });
    }

    restar() {
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