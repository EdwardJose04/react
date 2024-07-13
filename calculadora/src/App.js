import './App.css';
import UCP from './img/ucp.png';
import Button from './components/Button';
import Pantalla from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  // Estado para el input de la calculadora
  const [input, setInput] = useState('');

  // Función para agregar valor al input
  // Se pasa como prop 'manejarClic' a los componentes Button
  const agregarInput = (val) => {
    setInput(input + val);
  };

  // Función para calcular el resultado del input actual
  // Se pasa como prop 'manejarClic' al componente Button del signo '='
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center mb-4">
            <img src={UCP} alt='Logo UCP' className="img-fluid" />
          </div>
          <div className='bg-secondary p-3 rounded'>
            {/* Componente Pantalla que recibe el input como prop */}
            <Pantalla input={input} />
            <div className='row g-2 m-3'>
              {/* Componentes Button que reciben la función agregarInput como prop 'manejarClic' */}
              <div className='col-3'><Button manejarClic={agregarInput}>1</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>2</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>3</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>+</Button></div>
            </div>
            <div className='row g-2 m-3'>
              <div className='col-3'><Button manejarClic={agregarInput}>4</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>5</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>6</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>-</Button></div>
            </div>
            <div className='row g-2 m-3'>
              <div className='col-3'><Button manejarClic={agregarInput}>7</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>8</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>9</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>*</Button></div>
            </div>
            <div className='row g-2 m-3'>
              {/* Componente Button que recibe la función calcularResultado como prop 'manejarClic' */}
              <div className='col-3'><Button manejarClic={calcularResultado}>=</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>0</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>.</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>/</Button></div>
            </div>
            <div className='row g-2 m-3'>
              {/* Componente ButtonClear que recibe una función para limpiar el input como prop 'manejarClear' */}
              <ButtonClear manejarClear={() => setInput('')}>Limpiar</ButtonClear>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;