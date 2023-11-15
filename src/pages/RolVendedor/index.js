
import ViewRolVendedor from "components/viewRolVendedor"
import getProductos from "log/getProductos"
import logGetInfoUser from "log/logGetInfoUser"
import LogSesionStatus from "log/logSesionStatus"

function HomeVendedor() {
 
  const { sesionActive } = LogSesionStatus('trueV')
  const { productos } = getProductos()
  const  {information} = logGetInfoUser()


  return (

    <>{sesionActive ? <ViewRolVendedor prod={productos} infoUser={information} /> : ''} </>

  )
}

export default HomeVendedor