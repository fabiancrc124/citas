import {useState, useEffect} from 'react'
const Formulario = ({setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del formulario
    console.log("Enviando Formulario");
    if ([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log('al menos un campo vacion');
      setError(true);
      return;
    }
      setError(false);
      setPacientes(nombre);
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
                  {error &&  (
                    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                      <p>Todo los datos son importantes</p>
                    </div>


                  )}
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-buld ">Nombre Mascota   
              </label>
              <input 
                      id="mascota"
                      type="text" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                      placeholder="Nombre de la Mascota"
                      value={nombre}
                      onChange={ (e) => setNombre(e.target.value) } 
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
                      onChange={ (e) => setPropietario(e.target.value) } 
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
                      onChange={ (e) => setEmail(e.target.value) } 
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
                      onChange={ (e) => setFecha(e.target.value) } 
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
                      onChange={ (e) => setSintomas(e.target.value) } 
              />
            </div>

            <input 
                      type="submit"
                      className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                       hover:bg-indigo-700 cursor-pointer translate-all"
                      value="Agregar Paciente"
            />
          </form>
    </div>

      
    
  )
}

export default Formulario;