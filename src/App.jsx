import { useState } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoPacientes from "./Components/ListadoPacientes";
function App() {   
  const [pacientes , setPacientes] = useState([]);
  const [paciente , setPaciente] = useState({});

 const eliminarPaciente = id => {
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados);
      console.log("dentro de la funcion eliminarPaciente", id);
  }
  
  
  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12  md:flex'>
        <Formulario 
        pacientes= {pacientes}
        setPacientes={setPacientes}
        paciente= {paciente}
        setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes= {pacientes}
          setPaciente= {setPaciente}
          eliminarPaciente={eliminarPaciente} 
        />
      </div>
      
    </div>
  )
}
export default App;
