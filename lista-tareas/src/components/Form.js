import React, {useState} from 'react';
import { MdAddCircle } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {

        setInput(e.target.value);

    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <div>
            <form onSubmit={manejarEnvio}>
                <div className="input-group">
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Escribe tu tarea...'
                        onChange={manejarCambio}
                    />
                    <button className='btn btn-success' >
                        <MdAddCircle />
                    </button>
                </div>
            </form>
            <p className='text-center p-0 m-0'>Da click a una tarea para marcarla como completada.</p>
        </div>
    );
}

export default Form;
