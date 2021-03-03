import React, { Component } from 'react';

/*  Para el ejemplo crearemos dos componentes Login y Logout para que dependiendo si estamos 
    logueados o no se nos muestre la opción correspondiente. */

function Login() {
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}

function Logout() {
    return(
        <div>
            <h3>Logout</h3>
        </div>
    );
}

class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);

        this.state = {
            session : false
        };

        
    }
    render() {
        return (
			<div>
				<h2>Renderizado Condicional</h2>

                {/* Expresion donde hacemos uso de un operador condicional ternario
                    para renderizar un componente u otro de acuerdo al valor del estado
                    del componente. */}
				{this.state.session ? <Login /> : <Logout /> }
			</div>
		);
    }
}

export default RenderizadoCondicional;


/* Renderizado de los Componentes
    ¿Que es el renderizado?

    Es cuando un valor del Estado o las Propiedades de nuestro componente cambio y esto 
    hacer que se vuelva a renderizar el elemento en la interfaz.

    Renderizado Condicional :

    Si tengo cierto valor ya sea por paso de propiedades o en el manejo del estado renderizo 
    un componente si no renderizo otro.
*/