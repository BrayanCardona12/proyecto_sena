import { axios } from "axios"
import ScreenError from "components/screenError"
import ViewRolVendedor from "components/viewRolVendedor"
import { host } from "log/const"
import getProductos from "log/getProductos"
import LogSesionStatus from "log/logSesionStatus"
import ViewVend from "../../../components/ViewVend"
import Head from 'next/head';


function HomeVendedor() {

  const { sesionActive } = LogSesionStatus('trueV')
  const { productos } = getProductos()

  return (

    <>
      {
        sesionActive && productos[0] != {error: true } ?

          <>
            <>

              <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/style/estilosNavBarHome.css" />

                <link rel="stylesheet" href="/style/producto.css" />
                <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
                <title>Vista | Vendedor</title>
              </Head>

              <ViewVend prod={productos} />
            </>
          </>
          :
          <ScreenError />

         
      }
    </>
  )
}



export default HomeVendedor

