import React from 'react';

/*  Cuando es un Componente Funcional Declarativo, este recibe sus propiedades como parametro de la función dentro un 
    objeto llamado props donde cada una de las propiedades del objero props son propiedades del componente. */
export default function Propiedades(props) {
    return (
        <div>
            <h2>Propiedades</h2>
            
            <h4>{ props.msgDefaultProps }</h4>

            {/* Crearemos una lista desordenada donde cada una de sus list item reciba los atributos que 
            se le envian desde el componente padre App.js */}
            <ul>
                <li>{ props.cadena }</li>

                <li>{ props.numero }</li>
                
                {/* Operador ternario para validar el valor de la propiedad recibida de tipo boolean */}
                <li>{ props.boolean ? 'Verdadero' : 'Falso' }</li>

                {/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join */}
                <li>{ props.arreglo.join(", ") }</li>

                <li>{ props.objeto.nombre + ' - ' + props.objeto.edad + ' años - ' + props.objeto.profesion }</li> {/* Nota: Ver la forma de mostrar el objeto sin tener que concatenar */}
            </ul>
        </div>
    );
}

/* Internamente puedo definir una serie de propiedades por defecto */

Propiedades.defaultProps = {
    msgDefaultProps: "Mensaje desde una propiedad por Defecto",
};

