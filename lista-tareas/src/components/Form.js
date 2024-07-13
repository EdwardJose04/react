import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function Form(props) {
  // Estado local para el texto de la nueva tarea
  const [input, setInput] = useState('');

  // Maneja el cambio en el input
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  // Maneja el envío del formulario
  // Llama a la función onSubmit recibida como prop desde ListaTareas
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <div>
      {/* Formulario para crear una nueva tarea */}
      <form onSubmit={manejarEnvio}>
        <div className="input-group">
          <input
            className='form-control'
            type='text'
            placeholder='Escribe tu tarea...'
            onChange={manejarCambio}
          />
          {/* Botón para agregar la tarea */}
          <button className='btn btn-success'>
            <MdAddCircle />
          </button>
        </div>
      </form>
      <p className='text-center p-0 m-0'>Da click a una tarea para marcarla como completada.</p>
    </div>
  );
}

export default Form;