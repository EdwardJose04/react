import UCP from './img/ucp.png';
import Button from './components/Button';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  // Estado para el número de clics
  const [numClics, setNumClics] = useState(0);

  // Función para incrementar el contador
  // Se pasa como prop 'manejarClic' al componente Button de "Clic"
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  // Función para reiniciar el contador
  // Se pasa como prop 'manejarClic' al componente Button de "Reiniciar"
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
        {/* Componente Contador que recibe el número de clics como prop */}
        <Contador 
          numClics={numClics}
        />

        {/* Componente Button para incrementar el contador */}
        <Button        
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />

        {/* Componente Button para reiniciar el contador */}
        <Button        
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}       
        />
      </div>
    </div>
  );
}

export default App;