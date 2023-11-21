import EfectoHome from 'log/EfectoHome';
import {StylesHome} from 'log/Styles'
import LogAuth from 'log/logAuth';
import Link from 'next/link';
import  '@/styles/Home.module.css'

export default function BodyHome() {

  EfectoHome()

  const {changeInput, submit, correo, contrasena, rol, error} = LogAuth()

  return (
    <>
  
      <style jsx> 
      {`${StylesHome()}`}
       </style>

      <header className="header">
        <Link href={"/RolCliente"} className='logo'>
        <i className="fa-solid fa-store"></i> Yanbal</Link>

        <form action="" className="search-form">
          <input type="search" placeholder="Buscar aqui..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>

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
              <span>New Arrivals</span>
              <h3>Flexible chair</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat earum quidem excepturi quae
                maiores quas numquam.
              </p>
              <Link href={'RolVendedor'} className='btn'>Comprar Ahora</Link>
            
            </div>
            <div className="image">
              <img style={{maxWidth:"500px", width:'100%', objectFit:'contain'}} src="https://i.ebayimg.com/thumbs/images/g/CIYAAOSwyexkwqtr/s-l640.jpg" alt="null" />
            </div>
          </div>

          <div className="slide">
            <div className="contenido">
              <span>New Arrivals</span>
              <h3>Flexible chair</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat earum quidem excepturi quae
                maiores quas numquam.
              </p>
              <a href="#" className="btn">Comprar Ahora</a>
            </div>
            <div className="image">
              <img src="https://http2.mlstatic.com/D_NQ_NP_971153-MLC54491012080_032023-O.webp" alt="null" />
            </div>
          </div>

          <div className="slide">
            <div className="contenido ">
              <span>New Arrivals</span>
              <h3>Flexible chair</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat earum quidem excepturi quae
                maiores quas numquam.
              </p>
              <a href="#" className="btn btn-shopin">Comprar Ahora</a>
            </div>
            <div className="image">
              <img src="https://vasari.vteximg.com.br/arquivos/ids/215218-500-500/MZC175912-BL-30.jpg?v=638162380611400000" />
            </div>
          </div>

        </div>

        <div id="slide-next"  className="fas fa-angle-right"></div>
        <div id="slide-prev"  className="fas fa-angle-left"></div>

      </section>


      <section className="contenedor">
        <h2 className="title">Ofertas</h2>
        <div className="banner-container">
          <div className="banner">
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/73ba5f3153d14878b735aa2f5cd4b540_9366/Tenis_Treziod_2_Azul_IG0659_HM1.jpg" alt="" />
            <div className="banner-content">
              <span>oferta limitada</span>
              <h3>upto 50% off</h3>
              <a href="#" className="btn">Comprar</a>
            </div>
          </div>

          <div className="banner">
            <img src="https://cdn.shopify.com/s/files/1/0529/4125/8945/products/W-217H-9AVDF_1.jpg?v=1655393067&width=600" alt="" />
            <div className="banner-content">
              <span>oferta limitada</span>
              <h3>upto 50% off</h3>
              <a href="#" className="btn">Comprar</a>
            </div>
          </div>

          <div className="banner">
            <img src="https://belcorpcolombia.vtexassets.com/arquivos/ids/916881-800-800?v=638242461883170000&width=800&height=800&aspect=true" alt="" />
            <div className="banner-content">
              <span>oferta limitada</span>
              <h3>upto 50% off</h3>
              <a href="#" className="btn">Comprar</a>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

