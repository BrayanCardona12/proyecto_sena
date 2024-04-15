
import { StyleHomeCliente } from 'log/Styles'
import Head from 'next/head'
import CardUser from './cardUser'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toast'
import { useState } from 'react'


function ViewRolCliente(
  {
    infoListV,
    closeSesion,
    Change,
    textInputFilter,
    cardFilter,
    darkMode,
    setDarkMode
  }
) {

  const [load, setLoading] = useState(false)

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        <title>Vista | Cliente</title>
      </Head>


      <style jsx> {`${StyleHomeCliente()}`} </style>

      <main id="contMain" className={`${darkMode ? 'variables_modo_oscuro' : ''}`}>
        <div className="contenedor">


          <aside style={{ position: 'relative' }} className="seccion_nav">
          {load ?   <svg style={{ position: 'absolute', bottom:'0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#1B7071" stroke="#1B7071" strokeWidth="7" transform-origin="center" d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="0.9" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>

            : ''}
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
                  <p>Hola, <b>{localStorage.getItem('theName') ? localStorage.getItem('theName') : 'unknown'}</b></p>
                  <small>
                    Cliente
                  </small>
                </div>
                <Link href={!localStorage.getItem('inf') ? '/' : '/ActUser/' + localStorage.getItem('inf')} style={{ position: 'relative' }} className="foto_perfil">
                  <img src={!localStorage.getItem('imgUser') ? 'unknown' : localStorage.getItem('imgUser')} alt="foto perfil" />
                  <span style={{ position: 'absolute', borderRadius: '10px', zIndex: '1', bottom: '0', right: '0' }} className="material-icons-sharp"> edit </span>
                </Link>
              </div>
              <a onClick={() => 
              {
                let alerta = confirm('¿Seguro que desea cerrar sesión?')
                if (alerta){
                  closeSesion()
                  return
                }
                return
              }}>
                <span className="material-icons-sharp">
                  logout
                </span>

              </a>
            </div>
            <ToastContainer delay={2000} position='bottom-center' />
            <input value={textInputFilter} onChange={Change} type="text" className="input-filter" placeholder="Ohm Parfum..." />
            <h1 style={{ textAlign: 'center' }}>Lista | Vendedores</h1>
            <div style={{ width: '100%', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>


              {cardFilter.length != 0 ? cardFilter.map((x) => (
   
                  <CardUser key={x.id} clickIcon={setLoading} datos={x} />
     

              )) : infoListV.map((x) => (
                <CardUser key={x.id} clickIcon={setLoading} datos={x} />
              ))
              }

            </div>

          </div>
        </div>

      </main>

    </>
  )
}

export default ViewRolCliente