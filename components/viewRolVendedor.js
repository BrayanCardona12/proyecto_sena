import { StyleHomeCliente } from "log/Styles"
import CardProducto from "components/CardProducto"
import Head from "next/head"
import LogCloseSesion from "log/logCloseSesion"
import EffectDarkModeStatus from "log/EffectDarkModeStatus"
import { useRef, useState } from "react"
import Link from "next/link"
import logFilterProdUsersInput from "log/logFilterProdUsersInput"



function ViewRolVendedor({prod, infoUser}) {


  const { closeSesion } = LogCloseSesion()

  const [darkMode, setDarkMode] = useState(false)

  let { Change, textInputFilter, cardFilter } = logFilterProdUsersInput(prod)

  EffectDarkModeStatus(setDarkMode)


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <title>Vista | Vendedor</title>
      </Head>


      <style jsx> {`${StyleHomeCliente()}`} </style>

      <main id="contMain" className={`${darkMode ? 'variables_modo_oscuro' : ''}`}>

        <div className='contenedor'>

          <aside className="seccion_nav">
            <div className="toggle">
              <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h2>SGVC <span className="danger">App Web</span></h2>
              </div>
              <div className="cerrar" id="cerrar_btn">
                <span className="material-icons-sharp">
                  close
                </span>
              </div>
            </div>

            <div className="sidebar">
              <a href="#" className="active">
                <span className="material-icons-sharp">
                  dashboard
                </span>
                <h3>Panel</h3>
              </a>


           
              <Link href={"/graficas/"  + localStorage.getItem('inf')}>
                <span className="material-icons-sharp">
                  insights
                </span>
                <h3>Analiticas</h3>
              </Link>

              <Link href={"/RolVendedor/pedidos/"  + localStorage.getItem('inf')}>
                <span className="material-icons-sharp">
                  mail_outline
                </span>
                <h3>Pedidos</h3>
              </Link>

            
              <Link href="/RolVendedor/insertarproductos">
                <span className="material-icons-sharp">
                  add
                </span>
                <h3>Insertar Producto</h3>
              </Link>

           

              <a onClick={() => closeSesion()}>
                <span className="material-icons-sharp">
                  logout
                </span>
                <h3>Cerrar Sesión</h3>
              </a>
            </div>
          </aside>

          <div className="seccion_right">
            <div className="nav">
              <button id="menu_btn">
                <span className="material-icons-sharp">
                  menu
                </span>
              </button>
              <div onClick={() => {
                setDarkMode(!darkMode)
                localStorage.setItem('theme', `${!darkMode ? 'dark' : 'light'}`)



              }} className="modo_oscuro">


                <span className={`material-icons-sharp ${!darkMode ? 'active' : ''}`}>
                  light_mode
                </span>


                <span
                  className={`material-icons-sharp ${darkMode ? 'active' : ''}`}>
                  dark_mode
                </span>


              </div>

              <div className="perfil">
                <div className="informacion">
                  <p>Hola, <b>{!infoUser[0] ? 'unknown': infoUser[0].nombre}</b></p>
                  <small>
                    Vendedor
                  </small>
                </div>
                <Link href={'/ActUser/'+infoUser.map(x => x.id)} style={{position:'relative'}} className="foto_perfil">
                  <img src={!infoUser[0] ? 'unknown': infoUser[0].imagen} alt="foto perfil" />
                  <span style={{position:'absolute', borderRadius:'10px',zIndex:'10', bottom:'0', right:'0'}} className="material-icons-sharp"> edit </span>
                </Link>
              </div>
            </div>
            
            <input value={textInputFilter} onChange={Change} type="text" className="input-filter" placeholder="Ohm Parfum..." />

            <div style={{ width: '100%', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
             
             {cardFilter.length != 0 ? cardFilter.map((x) => (
                <CardProducto infoProd={x} key={x.idProducto} cliente={false} dataCar={[]}  vendedor={true} />
        
              )) : prod.length == 0? <h1>Noy hay productos registrados</h1>:
             
             prod.map((x) => (
               <CardProducto infoProd={x} key={x.idProducto} cliente={false} dataCar={[]}  vendedor={true} />
             ))}
             
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default ViewRolVendedor