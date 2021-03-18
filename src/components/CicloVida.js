import React, { Component } from 'react';

export default class CicloVida extends Component {
    render() {
        return(
            <>
                <h2>Ciclo de Vida de React</h2>
            </>
        );
    }
}


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