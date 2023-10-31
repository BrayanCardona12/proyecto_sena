
import ViewRolVendedor from "components/viewRolVendedor"
import getProductos from "log/getProductos"
import LogSesionStatus from "log/logSesionStatus"

function HomeVendedor() {
 
  const { sesionActive } = LogSesionStatus('trueV')
  const { productos } = getProductos()

  return (

    <>{sesionActive ? <ViewRolVendedor prod={productos} /> : ''} </>

  )
}

export default HomeVendedor