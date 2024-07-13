import React from 'react';

export default function Button(props) {
    // Función que verifica si el valor es un operador
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        // Botón con clases condicionales y manejador de clic
        <button
            // Agrega clases de Bootstrap y clases condicionales para el estilo del botón
            className={`btn ${esOperador(props.children) ? 'btn-success' : 'btn-primary'} w-100 fw-bold fs-5 py-3 hover-effect rounded-circle`}
            // Llama a la función manejarClic cuando el botón es presionado
            onClick={() => props.manejarClic(props.children)}
        >
            {props.children}  {/* Contenido del botón */}
        </button>
    );
}
