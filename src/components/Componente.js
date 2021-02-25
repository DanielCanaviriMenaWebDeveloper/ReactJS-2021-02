import React, {Component} from 'react';

/*  Ejemplo de Componente de Clase recibiendo una propiedad
    desde un componente padre. 
class Componente extends Component {
    render() {
        return <h2>{ this.props.msg }</h2>
    }
}
*/

/*  Ejemplo de Componente Funcional usando una Función Declarada, 
    recibe una propiedad desde un componente padre. */
function Componente(props) {
    return <h2>{ props.msg }</h2>
}




export default Componente;