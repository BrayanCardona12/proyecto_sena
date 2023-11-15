import ViewRolCliente from 'components/viewRolCliente'
import getListVendedores from 'log/getListVendedores'
import logGetInfoUser from 'log/logGetInfoUser'
import LogSesionStatus from 'log/logSesionStatus'



function HomeCliente() {

  
  const {sesionActive} = LogSesionStatus('trueC')

  const {info} = getListVendedores()

  const  {information} = logGetInfoUser()



  return (

    <>{sesionActive ? <ViewRolCliente infoListV={info} infoUser={information}/> : ''} </>
    
  )


}

export default HomeCliente