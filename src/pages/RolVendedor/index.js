import ViewRolVendedor from "components/viewRolVendedor"
import getProductos from "log/getProductos"
import LogSesionStatus from "log/logSesionStatus"

function HomeVendedor() {

  const { sesionActive } = LogSesionStatus('trueV')
  const { productos } = getProductos()

  return (

    <>
      {
        sesionActive && productos ?
          <ViewRolVendedor prod={productos} /> :
          <h1>Ups, ha ocurrido un error en el sistema, intente nuevamente.</h1>
      }
    </>

  )
}

export default HomeVendedor