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
                
            </ul>
        </div>
    );
}

/* Internamente puedo definir una serie de propiedades por defecto */

Propiedades.defaultProps = {
    msgDefaultProps: "Mensaje desde una propiedad por Defecto",
};

