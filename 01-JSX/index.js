import React from "react";
import ReactDOM from "react-dom";

/*  Insertando expresiones en JSX 
    Declaramos una variable llamada name y luego la usamos dentro el JSX envolviéndola
    dentro las llaves.
*/

const name = "Daniel Canaviri";

const element = <h1>Hello, {name} </h1>;

/*  Renderizado del ejemplo
    
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
*/

/*  Puedes poner cualquier expresión de JavaScript dentro las llaves en JSX,
    por ejemplo, 2 + 2 

    const element = <h1>Hello, {name} {2 + 2}</h1>; 
*/

/*  En el ejemplo a continuacion crearemos un objeto llamado user con sus propiedades,
    crearemos un metodo llamado formatName(obj) que recibe como parametro a dicho objeto,
    y luego insertaremos el resultado de llamar el método(funcion de JavaScript) dentro de un elemento <div> (Linea 89) */

/* Objeto */
const user = {
	names: "Daniel Alberto",
	surnames: "Canaviri Mena",
	age: 37,
	profession: "Ingeniero de Sistemas",
	country: "Bolivia",
	department: "Santa Cruz",
	direction: "Toborochi C3 N°564",
	avatarURL: "foto.jpg",
};

/*  Metodo que recibe como parametro un objeto y retorna las propiedades de este 
    concatenadoccon texto.*/
function formatName(obj) {
	return `${obj.names} ${obj.surnames} tiene ${obj.age} años de edad.
    Es ${obj.profession} y vive en ${obj.department} - ${obj.country}
    Dirección: ${obj.direction}`;
}

function saludo(obj) {
	return `me llamo ${obj.names} y te mando un fuerte saludo estes donde estes.`;
}

/*  JSX TAMBIEN ES UNA EXPRESIÓN 
    Despues de compilarse, las expresiones JSX se convierten en llamadas a funciones JavaScript
*/

/*  Si el objeto existe invocamos al metodo saludo(obj), caso contrario el mensaje 'Hola extraño' */

function getSaludo(obj) {
	if (obj) {
		return <div>Hola, {saludo(obj)}</div>;
	}
	return <h1>Hola extraño.</h1>;
}

/* Especificando atributos con JSX */

/* Puedes utilizar comillas para especificar strings literals como atributos.: */
const element2 = <div tabindex="0"></div>;

/* Objetos que contienen en sus propiedades cada una las declaraciones de una regla css, 
seran usadas para definir estilos a un elemento. */
const imgStyle = {
	width: "200px",
	height: "200px",
	display: "block",
	margin: "0 auto",
	boxShadow: "5px 5px 5px #006BC4",
	borderRadius: "10px",
};

const titulosStyle = {
	textAlign: "center",
};

/* Tambien puedes usar llaves para insertar una expresion JavaScript en un atributo: */
const element3 = <img style={imgStyle} src={user.avatarURL}></img>;

/*  Creación de elemento que se enviara para ser renderizado en el DOM */
/*  las etiquetas de JavaScript pueden contener hijos. */
const element = (
	<div style={titulosStyle}>
		<h3>Hola, {formatName(user)}!</h3>

		<h4>{getSaludo(user)}</h4>

		{element3}
	</div>
);

/* JSX REPRESENTA OBJETOS  
    Babel compila JSX a llamadas de React.createElement();
*/

/* Estas dos ejemplos son idénticos */
const elemento3 = <h1 className="greeting">Hello, word!</h1>;

const elemento4 = React.createElement(
	"h1",
	{ className: "greeting" },
	"Hello word!"
);

ReactDOM.render(element, document.getElementById("root"));







