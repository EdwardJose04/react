import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className="container mt-3">
      <div className={`card ${completada ? 'bg-danger text-white' : 'bg-dark'}`}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div 
            className={`card-text mb-0 fs-5 fw-bold ${completada ? 'text-white text-decoration-line-through' : ''}`}
            onClick={() => completarTarea(id)}
          >
            {texto}
          </div>
          <button className="ms-5 btn btn-danger rounded-circle" onClick={() => eliminarTarea(id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tarea;
