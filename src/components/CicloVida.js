/* 
    Ciclo de Vida 
    
    -   Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren
        en 3 fases.

        1.  Montaje.
        2.  Actualización.
        3.  Desmontaje.
    
    1.  Montaje

        Estos métodos se ejecutan cuando se crea un componente y se inserta en el arbol
        del DOM.

        *   constructor(). Se ejecuta al crear la instancia del componente, en el constructor
            puedes inicializar el estado y enlazar manejadores de eventos.
        
        *   render(). Es el único método requerido, cuando se ejecuta, examina el estado y 
            las propiedades y dibuja el componente en el arbol del DOM.
        
        *   componentDidMount(). Se invoca inmediatamente despues de que un componente se ha
            insertado al árbol del DOM. Es útil para ejecutar suscripciones o peticiones 
            asincronas a API's, bases de datos, servicios, etc.
    
    2.  Actualización

        Estos métodos son ejecutados por cambios en el estado o las propiedades de los 
        componentes.

        *   render(). redibuja el componente cuando detecta cambios en el estado o las pro-
            piedades del componente.
        
        *   componentDidUpdate(). Se ejecuta inmediatamente después de que la actualización 
            del estado o las propiedades sucede, al igual que componentDidMount es un 
            método ideal para hacer peticiones externas.
    
    3.  Desmontaje

        Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol 
        del DOM.

        *   componentWillUnmount(). Se ejecuta antes de destruir el componente del árbol del
            DOM, es un método útil para hacer tareas de limpieza.
*/

import React, { Component } from 'react';

class Reloj extends Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		console.log(3, "El componente Reloj ha sido eliminado del DOM");
	}

	render() {
		return <h3>{this.props.hora}</h3>;
	}
}

export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se inicializa, aún NO está en el DOM");

        this.state = {
            hora : new Date().toLocaleTimeString(),
            visible : false,
        };

        this.temporizador = null;


    }

    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props han cambiado");
        console.log("prevProps: ", prevProps); // Muestra las props previas que maneja el componente en este caso un objeto vacio.
        console.log("prevState: ", prevState); // Muestra el estado previo antes de la actualización del componente.
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora : new Date().toLocaleTimeString(),
            });
        }, 1000);
    }
    
    iniciar = () => {
        this.tictac();
        this.setState({
            visible : true,
        });
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible : false,
        });
    }
    render() {
        console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM");
        return(
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>

                {/* <h3>{ this.state.hora }</h3> */}
                {/* Operador de Cortocircuito : Cuando el valor de la isquierda tiende a
                falso se ejecuta ese valor, si tiende a verdadero ejecuta el valor de la 
                derecha. */}
                { this.state.visible && <Reloj hora = { this.state.hora }/> }

                <button onClick = { this.iniciar }>Iniciar</button>
                <button onClick = { this.detener }>Detener</button>
            </>
        );
    }
}




