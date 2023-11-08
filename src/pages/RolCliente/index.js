import ViewRolCliente from 'components/viewRolCliente'
import getListVendedores from 'log/getListVendedores'
import LogSesionStatus from 'log/logSesionStatus'



function HomeCliente() {

  
  const {sesionActive} = LogSesionStatus('trueC')

  const {info} = getListVendedores()



  return (

    <>{sesionActive ? <ViewRolCliente infoListV={info}/> : ''} </>
    
  )


}

export default HomeCliente