import React from 'react'

export default function Button({ texto, esBotonDeClic, manejarClic }) {
  return (
    <div className='container'>

        <button className={esBotonDeClic ? 'btn btn-warning m-3 p-3 fw-bold fs-2' : 'btn btn-danger p-3 fw-bold fs-2'}
        onClick={manejarClic}>
            {texto}
        </button>

    </div>
  )
}
