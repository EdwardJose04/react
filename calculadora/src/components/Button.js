import React from 'react'

export default function Button(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <button 
            className={`btn ${esOperador(props.children) ? 'btn-success' : 'btn-primary'} w-100 fw-bold fs-5 py-3 hover-effect rounded-circle`} onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </button>
    )
}