import EfectoHome from 'log/EfectoHome';
import {StylesHome} from 'log/Styles'
import LogAuth from 'log/logAuth';
import Link from 'next/link';
import  '@/styles/Home.module.css'
import { ToastContainer } from 'react-toast';

export default function BodyHome() {


  EfectoHome()

  const {changeInput, submit, correo, contrasena, rol, error} = LogAuth()

  return (
    <>
  
      <style jsx> 
      {`${StylesHome()}`}
       </style>

      <header className="header">
        <ToastContainer delay={8000} position='top-right'/>
        <Link href={"/RolCliente"} className='logo'>
        <i className="fa-solid fa-store"></i> SGVC</Link>

  

        <div className="icons">
         
          <div id="search-btn" className="fas fa-search"></div>
   
          <div id="login-btn" className="fas fa-user"></div>
        </div>
      </header>

      <div id="closer" className="fas fa-times"></div>

      <div className="login-form">
        <form onSubmit={submit}>
          <h3>Iniciar Sesión</h3>
          <input name='correo' onChange={changeInput} type="email" placeholder="Ingrese su correo" value={correo} className="box" />
          <input name='contrasena' onChange={changeInput} type="password" placeholder="Ingrese su contraseña" value={contrasena} className="box" />
          <select name='rol' onChange={changeInput} value={rol} className='box input' id="tipo">
            <option value="1">Cliente</option>
            <option value="2">Vendedor</option>
          </select>
        
          <input type="submit" value="login now" className="btn btn-margin" />
          {error? <b style={{color:'red', fontSize:'1.3rem'}}>{error}</b>: ''}
          <p className="forget">Olvidaste la contraseña <Link href="/forgotPass">Click Aqui</Link></p>
          <p className="forget">No tienes una cuenta <Link href="/Registro_Usuarios">Crear Una</Link></p>
        </form>
      </div>

      <section className="home">
        <div className="slides-container">

          <div className="slide actives">
            <div className="contenido">
              <span>Nuevas Fragancias</span>
              <h3>Ccori Perfum</h3>
              <p>Un perfume para mujer ambarado floral. Un elixir dorado con notas suntuosas de rosa blanca, canela dulce y un toque de chocolate.
              </p>
              <b id='btn-1' className="btn">Comprar Ahora</b>
            
            </div>
            <div className="image">
              <img style={{maxWidth:"500px", width:'100%', objectFit:'contain'}} src="https://emprendimiento.yanbal.com/assets/images/photos/global/ccori_ccoricristal_ccorirose.jpg" alt="null" />
            </div>
          </div>

          <div className="slide">
            <div className="contenido">
              <span>Nuevos Prodcutos</span>
              <h3>Catalogos</h3>
              <p>Podras interactuar con diversidad de catalogos, tenemos una amblia cantidad, descubrelos
              </p>
              <b id='btn-3' className="btn">Comprar Ahora</b>
            </div>
            <div className="image">
              <img src="https://belcorpcolombia.vtexassets.com/arquivos/ids/872505/200114517-producto1.jpg?v=638054443717230000" alt="null" />
            </div>
          </div>

          <div className="slide">
            <div className="contenido ">
              <span>Variedad de Productos</span>
              <h3>diverse</h3>

              <p>Podras encontrar diversidad de productos, perfectos para alegrar tu dia o el de alguien mas.
              </p>
              <b id="btn-2" className="btn btn-shopin">Comprar Ahora</b>
            </div>
            <div className="image">
              <img src="https://datosmujer.cl/wp-content/uploads/pack-maquillaje.jpg" />
            </div>
          </div>

        </div>

        <div id="slide-next"  className="fas fa-angle-right"></div>
        <div id="slide-prev"  className="fas fa-angle-left"></div>

      </section>


     
    </>

  )
}

