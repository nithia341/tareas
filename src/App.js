import logo from "./imagenes/001.png";
import './App.css';
import ListaDeTareas from "./componentes/ListaDeTareas";


function App() {
  return (
    <div className="tareas">
      <div className='logo-contenedor'>
        <img
          src={logo} 
          className ="logo"/>
      </div>
      <div 
      className= "lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
       
      </div>
    
    </div>
  );
}

export default App;
