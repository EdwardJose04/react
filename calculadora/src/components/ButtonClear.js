import React from "react";

// Componente ButtonClear
const ButtonClear = (props) => (
    <div className="container">
        {/* Botón con clases de Bootstrap y manejador de clic */}
        <div 
            className="btn btn-warning fs-4 w-100 fw-bold"
            onClick={props.manejarClear}  // Llama a la función manejarClear cuando se presiona el botón
        >
            {props.children}  {/* Contenido del botón */}
        </div>
    </div>
);

export default ButtonClear;
