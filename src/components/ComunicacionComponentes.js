import React, { Component } from 'react';

export default class Padre extends Component {
    state = {
        contador : 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    render() {
        return(
            <>
                <h2>Comunicación entre Componentes Hola</h2>

                { this.state.contador }

                {/* Ejemplo de comunicación entre un componente Padre e Hijo mediante propiedades */}
                <Hijo incrementCont = { this.incrementarContador }mensaje = "Mensaje para el hijo 1"/>

                <Hijo incrementCont = { this.incrementarContador } mensaje = "Mensaje para el hijo 2"/>
            </>
        );
    }
}

function Hijo(props) {
    return(
        <>
            <h3>{ props.mensaje }</h3>

            {/* Ejemplo de Comunicación entre un componente Hijo y Padre mediante eventos, 
                tambien se puede observar que el componente hijo modifica el estado del componente padre
                mediante la ejecución del evento personalizado. */}
            <button onClick = { props.incrementCont }>+</button>
        </>
    )
}

/* La comunicación entre componentes no relacionados.

    -   Si los componentes no tienen una relación padre-hijo o están relacionados, pero están demasiado lejos, 
        como por ejemplo, un bisnieto o tataranieto, tenemos que crear un mecanismo de observación y/o 
        suscripción para la comunicación entre dichos componentes.

    -   Al menos existen 3 patrones para hacer esto.

        1.  Patrón Emisor de eventos / Destino / Despachador : los oyentes deben hacer referencia a la 
            fuente para suscribirse.

        2.  Patrón Publicación / Suscripción: no necesita una referencia específica a la fuente que desencadena 
            el evento, hay un objeto global accesible en todas partes que maneja todos los eventos.

        3. Patrón Señales: similar al Emisor de Eventos, pero aquí no usa cadenas aleatorias. Cada objeto que 
            podría emitir eventos debe tener una propiedad específica con ese nombre. De esta manera, se sabe 
            exactamente qué eventos puede emitir un objeto.

        4.  Portales: proporcionan una opción de primera clase para renderizar hijos en un nodo DOM que existe 
            por fuera de la jerarquía del DOM del componente padre.

    -   More info : https://github.com/millermedeiros/js-signals/wiki/Comparison-between-different-Observer-Pattern-implementations
    
    -   Otra manera de compartir datos entre componentes sin que tengan una relación padre-hijo es compartiendo un estado global 
        accesible para todos los componentes de nuestra aplicación, para ello podríamos usar 2 opciones:

        1.  Redux: librería externa a React para el manejo del estado.

        2.  Context: un API interna de React que provee una forma de pasar datos a través del árbol de componentes sin tener que 
            pasar props manualmente en cada nivel. Esta API la retomaremos cuando veamos el tema de Hooks.
*/
