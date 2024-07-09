import UCP from './img/ucp.png';
import Button from './components/Button';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);

  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (

    <div className="mt-5 text-center">

      <div className="mt- 5container">
        <img
          src={UCP}
          alt='Logo UCP'
        />
      </div>

      <div className='container'>

      <Contador 
      numClics={numClics}
      />

        <Button        
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />

        <Button        
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador }       
        />
      </div>

    </div>

  );
}

export default App;
