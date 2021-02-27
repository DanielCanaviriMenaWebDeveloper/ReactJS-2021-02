import React from "react";
import PropTypes from "prop-types";

/*  Cuando es un Componente Funcional Declarativo, este recibe sus propiedades como parametro de la función dentro un 
    objeto llamado props donde cada una de las propiedades del objero props son propiedades del componente. */
export default function Propiedades(props) {
	return (
		<div>
			<h2>Propiedades</h2>

			<h4>{props.msgDefaultProps}</h4>

			{/* Crearemos una lista desordenada donde cada una de sus list item reciba los atributos que 
            se le envian desde el componente padre App.js */}
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				{/* Operador ternario para validar el valor de la propiedad recibida de tipo boolean */}
				<li>{props.boolean ? "Verdadero" : "Falso"}</li>
				{/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join */}
				<li>{props.arreglo.join(", ")}</li>
				<li>
					{props.objeto.nombre +
						" - " +
						props.objeto.edad +
						" años - " +
						props.objeto.profesion}
				</li>{" "}
				{/* Nota: Ver la forma de mostrar el objeto sin tener que concatenar */}
				<li>{props.funcion(2)}</li>
				{/* Tambien podria recibir el arreglo y a cada uno de esus elementos aplicarle la funcion recibida 
                que eleva al cuadrado un valor. */}
				<li>{props.arreglo.map(props.funcion).join(", ")}</li>{" "}
				{/* El método map recibe en el parametro de la función cada uno de los elementos del array. */}
				<li>{props.elementoReact}</li>
				<li>{props.componenteReact}</li>
				<li>{props.arreglo.map((num) => num + 5).join(", ")}</li>
			</ul>
		</div>
	);
}

/* Internamente puedo definir una serie de propiedades por defecto */

Propiedades.defaultProps = {
	msgDefaultProps: "Mensaje desde una propiedad por Defecto",
};

/*  https://www.npmjs.com/package/prop-types 
    PropTypes: Nos permite definir que ciertas propiedades cumplan con un tipo de dato o 
    bien sean requeridos, recordar siempre imprtar la libreria: 
        import PropTypes from 'prop-types';
    Comando para la instalación:
        npm i -S prop-types
*/

/* Sintaxis para definir el tipo de dato que deben recibir las propiedades */
Propiedades.propTypes = {
	cadena: PropTypes.string,
	numero:
		PropTypes.number
			.isRequired /* isRequired indica que la propiedad es requerida */,
	boolean: PropTypes.bool,
	arreglo: PropTypes.array,
};
