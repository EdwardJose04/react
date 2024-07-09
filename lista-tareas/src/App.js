import UCP from './img/ucp.png';
import Tarea from './components/Tarea';
import ListaTareas from './components/ListaTareas';


function App() {

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center mb-4">
            <img
              src={UCP}
              alt='Logo UCP'
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 rounded d-flex flex-column bg-secondary text-white  justify-content-start align-items-center mb-5 pb-5" style={{ minHeight: '400px', width: '400px' }}>
          <h2 className="text-center fst-italic my-2 p-2 bg-dark rounded w-100">Mis Tareas</h2>
          <ListaTareas />
          
        </div>
      </div>
    </div>
  );
}

export default App;
