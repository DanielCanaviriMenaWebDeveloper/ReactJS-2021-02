import React, { Component } from "react";

function EstadoAHijo(props) {
	return (
		<div>
			<h3>{props.contadorHijo}</h3>
		</div>
	);
}

class Estado extends Component {
	constructor(props) {
		super(props);
		/* Creando el objeto del estado */
		this.state = {
			contador: 0,
			contador_2: 100,
		};

		setInterval(() => {
			/*  No recomendado cambiar el estado directamente, lo recomendado es hacer uso del 
                método setState();
                
                this.state.contador += 1;
            */

			this.setState({
				contador: this.state.contador + 1,
				contador_2: this.state.contador_2 + 10,
			});
		}, 1000);
		/*  Warning: Advertencia: No se puede llamar a setState en un componente que aún no está montado. 
            Esta es una operación no operativa, pero podría indicar un error en su aplicación. En su lugar, 
            asigne a `this.state` directamente o defina una propiedad de clase` state = {}; `con el estado 
            deseado en el componente Estado. */
	}

	render() {
		return (
			<div>
				<h2>Este es mi componente estado</h2>
				{/* Uso de una de las propiedades del objeto state */}
				<p>{this.state.contador}</p>{" "}
				{/* Uso de otra de las propiedades del objeto state */}
				<p>{this.state.contador_2}</p>{" "}
				{/* Pasando a un componente hijo uno de los estados del componente padre */}
				<EstadoAHijo contadorHijo={this.state.contador} />
			</div>
		);
	}
}

export default Estado;
/*  Estado 

    El state son los valores internos que manejan la lógica y los datos de un componente,
    permite que este reaccione a cualquier cambio lo que hara que se vuelva a renderizar
    en la interfaz.
    
    El estado tiene 3 caracteristicas importantes
    
        1. Es inmutable
        2. No se puede modificar directamente
        3. Es asincrono 
    
    Para hacer cambios hay que hacer uso del método setState()

    El estado de un componente no es accesible desde otro componente excepto de aquel que 
    lo posee y lo asigna.

    La propagación del estado fluye de forma unidireccional y descendiente (hacia abajo),
    esto significa que un componente padre puede pasar valores de su estado a componentes
    hijos que lo recibiran como propiedades.

    En el momento que los valores del estado del padre sufran cambios esto causara que 
    tanto padre como los hijos que recibieron esos valores como propiedades se rendericen
    nuevamente y reaccionen a dicho cambio.

    Cada componente que se defina como una clase cuenta con un objeto para almacenar 
    información llamado state

    Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la 
    vista.
*/
