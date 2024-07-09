import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='container mt-5' >
        <div className='m-5'>
          <h1 className='text-center'>Esto es lo que dicen nuestros alumnos sobre <strong>freeCodeCamp</strong></h1>
        </div>

        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané confianza en que podía programar trabajando en las cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como Ingeniero de Software. <strong>freeCodeCamp cambió mi vida.</strong>'
        />

        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='<strong>freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software</strong>. El plan de estudios bien estructurado llevó mis conocimientos de programación desde un nivel totalmente principiante a un nivel muy confiado. Fue todo lo que necesitaba para conseguir mi primer trabajo de desarrolladora en una empresa increíble.'
        />

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido dificultades para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que realmente se me quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong>freeCodeCamp, me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.'
        />

      </div>
    </div>
  );
}

export default App;