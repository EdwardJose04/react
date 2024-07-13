import React from 'react';
import Form from './Form';
import Tarea from './Tarea';
import { useState } from 'react';

function ListaTareas() {
  // Estado para almacenar la lista de tareas
  const [tareas, setTareas] = useState([]);

  // Función para agregar una nueva tarea
  // Se pasa como prop 'onSubmit' al componente Form
  const agregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Función para eliminar una tarea
  // Se pasa como prop 'eliminarTarea' a cada componente Tarea
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Función para marcar una tarea como completada
  // Se pasa como prop 'completarTarea' a cada componente Tarea
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      {/* Pasa la función agregarTarea como prop 'onSubmit' al Form */}
      <Form onSubmit={agregarTarea} />
      <div className=''>
        {/* Mapea las tareas y crea un componente Tarea para cada una */}
        {tareas.map(tarea => (
          <Tarea 
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaTareas;