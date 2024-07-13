import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

// Recibe props de ListaTareas: id, texto, completada, completarTarea, eliminarTarea
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className="container mt-3">
      <div className={`card ${completada ? 'bg-danger text-white' : 'bg-dark'}`}>
        <div className="card-body d-flex justify-content-between align-items-center">
          {/* Llama a completarTarea (de ListaTareas) cuando se hace clic */}
          <div 
            className={`card-text mb-0 fs-5 fw-bold ${completada ? 'text-white text-decoration-line-through' : ''}`}
            onClick={() => completarTarea(id)}
          >
            {texto}
          </div>

          {/* Llama a eliminarTarea (de ListaTareas) cuando se hace clic */}
          <button className="ms-5 btn btn-danger rounded-circle" onClick={() => eliminarTarea(id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tarea;