const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 roundex-xl">
          <p className="font-buld mb-3 text-gray-700 uppercase" >Nombre: {''}
              <span className="font-normal normal-case">Fabian</span>
            </p>

            <p className="font-buld mb-3 text-gray-700 uppercase" >Propietario: {''}
              <span className="font-normal normal-case">Fabian</span>
            </p>

            <p className="font-buld mb-3 text-gray-700 uppercase" >Email: {''}
              <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-buld mb-3 text-gray-700 uppercase" >Fecha alta: {''}
              <span className="font-normal normal-case">10 Diciembre de 2022</span>
            </p>

            <p className="font-buld mb-3 text-gray-700 uppercase" >Sintomas: {''}
              <span className="font-normal normal-case"> bla bla bla </span>
            </p>
    </div>
  )
}

export default Paciente