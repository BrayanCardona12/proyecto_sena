
import { useState } from 'react'
import { StyleHomeCliente } from 'log/Styles'
import Head from 'next/head'
import LogCloseSesion from 'log/logCloseSesion'
import EffectDarkModeStatus from 'log/EffectDarkModeStatus'
import CardUser from './cardUser'
import logFilterProdUsersInput from 'log/logFilterProdUsersInput'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toast'


function ViewRolCliente({ infoListV, infoUser }) {

  let { closeSesion } = LogCloseSesion()

  let [darkMode, setDarkMode] = useState(false)

  //LogFilterUser

  let { Change, textInputFilter, cardFilter } = logFilterProdUsersInput(infoListV)

  EffectDarkModeStatus(setDarkMode)

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
        <title>Vista | Cliente</title>
      </Head>


      <style jsx> {`${StyleHomeCliente()}`} </style>

      <main id="contMain" className={`${darkMode ? 'variables_modo_oscuro' : ''}`}>


        <div className="contenedor">

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
            <p onClick={() => {
              toast.error('Ups, un error', {
                backgroundColor: '#CC2C2C',
                color: 'white',
              })
            }}>dfgd</p>
            <div className="sidebar">
              <a href="#" className="active">
                <span className="material-icons-sharp">
                  dashboard
                </span>
                <h3>Panel</h3>
              </a>

              <a href="nosotros.html">
                <span className="material-icons-sharp">
                  person_outline
                </span>
                <h3>Usuario</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  receipt_long
                </span>
                <h3>Historial</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  insights
                </span>
                <h3>Analytics</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  mail_outline
                </span>
                <h3>Email</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  inventory
                </span>
                <h3>Lista de Venta</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  report_gmailerrorred
                </span>
                <h3>Reporte</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  settings
                </span>
                <h3>Configuración</h3>
              </a>

              <a href="#">
                <span className="material-icons-sharp">
                  add
                </span>
                <h3>New Login</h3>
              </a>

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
                  <p>Hola, <b>{!infoUser[0] ? 'unknown' : infoUser[0].nombre}</b></p>
                  <small>
                    Cliente
                  </small>
                </div>
                <Link href={!infoUser[0] ? '/' : '/ActUser/' + infoUser[0].id} style={{ position: 'relative' }} className="foto_perfil">
                  <img src={!infoUser[0] ? 'unknown' : infoUser[0].imagen} alt="foto perfil" />
                  <span style={{ position: 'absolute', borderRadius: '10px', zIndex: '10', bottom: '0', right: '0' }} className="material-icons-sharp"> edit </span>
                </Link>
              </div>
            </div>
            <ToastContainer delay={2000} position='top-center' />
            <input value={textInputFilter} onChange={Change} type="text" className="input-filter" placeholder="Ohm Parfum..." />
            <div style={{ width: '100%', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>


              {cardFilter.length != 0 ? cardFilter.map((x) => (
                <CardUser key={x.id} datos={x} />
              )) : infoListV.map((x) => (
                <CardUser key={x.id} datos={x} />
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