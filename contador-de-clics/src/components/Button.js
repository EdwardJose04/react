import React from 'react'

// Componente Button que recibe texto, esBotonDeClic y manejarClic como props
export default function Button({ texto, esBotonDeClic, manejarClic }) {
  return (
    <div className='container'>
        <button 
          // Clase condicional basada en el prop esBotonDeClic
          className={esBotonDeClic ? 'btn btn-warning m-3 p-3 fw-bold fs-2' : 'btn btn-danger p-3 fw-bold fs-2'}
          // Llama a la función manejarClic (recibida como prop) cuando se presiona el botón
          onClick={manejarClic}
        >
            {texto}  {/* Texto del botón (recibido como prop) */}
        </button>
    </div>
  )
}