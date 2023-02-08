import { useState, useEffect } from 'react'
import Error from './Error'
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
      setError(paciente.error);

    }
  }, [paciente]);

  useEffect(() => {

  }, []);

  const handleSubmit = (e) => {

    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);
      return random + fecha;

    }


    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {

      setError(true);
      return;
    }
    setError(false);
    const objectoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    };

    if (paciente.id) {
      // EDITANDO EL REGISTRO
      console.log(objectoPaciente);
      console.log(paciente);
      objectoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(
        pacienteState => pacienteState.id === paciente.id ? objectoPaciente : pacienteState );

        setPacientes(pacientesActualizados);
        setPaciente({});
    }else{
      // NUEVO REGISTRO
      objectoPaciente.id = generarId();
      setPacientes([...pacientes, objectoPaciente]);
    }
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white sandow-md  rounded-lg py-10 px-5 mb-10 ">
        {error && (<Error><p> Todos los datos son importantes </p></Error>)}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-buld ">Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-buld ">Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-buld ">Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="altta" className="block text-gray-700 uppercase font-buld ">Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-buld ">Alta
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                       hover:bg-indigo-700 cursor-pointer translate-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>



  )
}

export default Formulario;
