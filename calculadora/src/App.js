import './App.css';
import UCP from './img/ucp.png'
import Button from './components/Button';
import Pantalla from './components/Screen';
import ButtonClear from './components/ButtonClear'
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    setInput(input + val);

  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    }

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center mb-4">
            <img
              src={UCP}
              alt='Logo UCP'
              className="img-fluid"
            />
          </div>

          <div className='bg-secondary p-3 rounded'>

            <Pantalla
              input={input}
            />

            <div className='row g-2 m-3'>
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
              <div className='col-3'><Button manejarClic={calcularResultado}>=</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>0</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>.</Button></div>
              <div className='col-3'><Button manejarClic={agregarInput}>/</Button></div>
            </div>

            <div className='row g-2 m-3'>
              <ButtonClear manejarClear={() => setInput('')} >

                Limpiar

              </ButtonClear>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;