import axios from 'axios'
import ViewCliente from 'components/viewCliente'
import ViewRolCliente from 'components/viewRolCliente'
import getListVendedores from 'log/getListVendedores'
import LogSesionStatus from 'log/logSesionStatus'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'



function HomeCliente() {

  
  const {sesionActive} = LogSesionStatus('trueC')

  const {info} = getListVendedores()



  return (

    <>{sesionActive ? <ViewRolCliente infoListV={info}/> : ''} </>
    
  )


}

export default HomeCliente