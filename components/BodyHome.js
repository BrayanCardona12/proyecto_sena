import Link from 'next/link';

import {useState } from 'react'
import { StyleIndex } from 'log/Styles';


export default function BodyHome() {
  const [page, setPage] = useState(0);

  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
      setIsMenu(!isMenu);
  };


  const prevSlide = () => {
    setPage((prev) => (prev - 1 >= 0 ? prev - 1 : 4));
  };

  const nextSlide = () => {
    setPage((prev) => (prev + 1 >= 5 ? 0 : prev + 1));
  };

  return (
    <>
   

      <header className='header'>
        <Link  href="/"><span className='logo_sivg'>SGVC</span></Link>

        <div className='social'>
          <Link href='https://www.instagram.com/'><i className="social_link  fa-brands fa-instagram social_net"></i></Link>
          <Link href='https://www.youtube.com/'><i className="social_link  fa-brands fa-youtube social_net"></i></Link>
          <Link href='https://co.linkedin.com/'><i className="social_link  fa-brands fa-linkedin social_net"></i></Link>
          <Link target='_blank' href='https://web.telegram.org/a/'><i className="social_link  fa-brands fa-telegram social_net"></i></Link>
        </div>

        <nav className='navbar'>
          <div className={`nav_hidden ${isMenu ? 'active' : ''}`}>
            <Link href='/' ><span className='nav_link__menu'>Inicio</span></Link>
            <Link href='#nosotrosWe' ><span className='nav_link__menu'>Nosotros</span></Link>
            <Link href='#prodD' ><span className='nav_link__menu'>Productos</span></Link>
            <Link href='#Catalog' ><span className='nav_link__menu'>Catálogo</span></Link>
          </div>

          <div className='inicio_up'>
            <Link href="/FormLogin">
              <i className="fa-regular fa-user icon_inicio"></i>
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      <section className='banner'>
        <div className='slider'>

          <div className={`slide ${page === 0 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_04.webp' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Snak</h1>
              </div>
              <div className="content">
                <h3 className='content_title'>The Man</h3>
                <p className='content_pagraf'>Explorando el Mundo de los Perfumes para Hombres.</p>
                <Link href="/FormLogin" ><span className='btn_info'>Ver Más</span></Link>
              </div>
            </div>
            <div className='right_info'>
              <h1 className='right_title'>eEye</h1>
              <h3 className='right_subtitle'>Abhishek</h3>
            </div>

          </div>

          <div className={`slide ${page === 1 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_02.jpg' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Cuidado</h1>
              </div>
              <div className='content'>
                <h3 className='content_title'>Perfumes</h3>
                <p className='content_pagraf'>Seduce al mundo con ese poder único que hay dentro de ti ¡Descúbrelo y revélalo con orgullo! .</p>
                <Link href="/FormLogin" ><span className='btn_info'>Ver Más</span></Link>
              </div>
            </div>
            <div className='right_info'>
              <h1 className='right_title'>Personal</h1>
              <h3 className='right_subtitle'>Yanbal</h3>
            </div>

          </div>

          <div className={`slide ${page === 2 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_03.webp' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Ven</h1>
              </div>
              <div className='content'>
                <h3 className='content_title'>Mujer y Belleza</h3>
                <p className='content_pagraf'>Una Edición Limitada de maquillaje de ojos en tonos tostados y cobres, creada especialmente para iluminar la mirada de mamá y para que ella resalte en todo momento y en todo lugar.</p>
                <Link href='/FormLogin'><span className='btn_info'>Ver Más</span></Link>
              </div>
            </div>
            <div className='right_info'>
              <h1 className='right_title'>om</h1>
              <h3 className='right_subtitle'>Ashish</h3>
            </div>

          </div>

          <div className={`slide ${page === 3 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_01.jpg' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Fla</h1>
              </div>
              <div className='content'>
                <h3 className='content_title'>Sérum facial</h3>
                <p className='content_pagraf'>Potencia tu rutina con fórmulas especializadas de alta concentración y eficacia clínica.</p>
                <Link href='//FormLogin' ><span className='btn_info'>Ver Más</span></Link>
              </div>
            </div>
            <div className='right_info'>
              <h1 className='right_title'>sh</h1>
              <h3 className='right_subtitle'>pankaj</h3>
            </div>
          </div>

          <div className={`slide ${page === 4 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_05.jpg' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Mr. R</h1>
              </div>
              <div className='content'>
                <h3 className='content_title'>Brillos del Alma</h3>
                <p className='content_pagraf'>Una Colección de Joyería para Reflejar tu Elegancia Interior.</p>
                <Link href='//FormLogin'><span className='btn_info'>Ver Más</span></Link>
              </div>
            </div>
            <div className='right_info'>
              <h1 className='right_title'>ajput</h1>
              <h3 className='right_subtitle'>Shivam</h3>
            </div>
          </div>
        </div>

        <div className='navigation'>
          <span className='prev-btn span_icon' onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left fa-3x nav_icon"></i>
          </span>
          <span className='next-btn span_icon' onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right fa-3x nav_icon"></i>
          </span>
        </div>
      </section>

      <section className='container'>
        <h2 id='nosotrosWe' className='nosotros_title'>Sobre <span>Nosotros</span></h2>
        <div className='nosotros_grid'>
          <div className='nosotros_img'>
            {/* <Image src='/img/nosotros.jpg' width={100} height={100} layout='responsive' /> */}
            <img src='/img/nosotros.jpg' alt='nosotros' />
          </div>
          <div className='nosotros_texto'>
          <p className=' mb-5'>Nos dedicamos apasionadamente a proporcionar soluciones
                            innovadoras para simplificar el proceso de ventas por catálogos. Nos enorgullece ofrecer una plataforma
                            única y efectiva que permite a nuestros clientes gestionar sus pedidos y compras de manera rápida y eficiente.</p>
                        <p>Con años de experiencia en el sector, entendemos los desafíos que enfrentan los negocios que dependen
                            de las ventas por catálogos. Es por eso que nos hemos comprometido a desarrollar un sistema que no
                            solo agiliza las operaciones, sino que también ofrece herramientas poderosas para mejorar la eficiencia
                            y la rentabilidad.</p>
                        <p className=' mb-5'>creemos en la importancia de la innovación continua. Estamos constantemente mejorando y actualizando
                            nuestro sistema para satisfacer las cambiantes necesidades de nuestros clientes y mantenernos a la
                            vanguardia de la industria.</p>
                        <p className=' mb-5'>Ya sea que estés comenzando tu negocio de ventas por catálogos o busques optimizar tus operaciones
                            existentes, estamos aquí para ayudarte. Únete a nosotros y descubre cómo nuestro equipo experto y
                            nuestra plataforma líder en la industria pueden llevar tu negocio al siguiente nivel.</p>
          </div>
        </div>
      </section>

      <main className='producto'>
        <div className='producto_title'>
          <h2 id='prodD'>Prod<span>uctos</span></h2>
        </div>

        <div className='producto_bg'>
          <div className='producto_grid'>
            <div className='producto_maquillaje'>
              {/* <Image className='producto_img' src='/img/imagen_01.jpg' width={100} height={100} layout='responsive' /> */}
              <img className="producto_img" src="img/imagen_01.jpg" alt="Maquillaje" />
              <h3 className='producto_titulo'>Maquillaje</h3>
              <p className='producto_texto'>¡Disfruta tu belleza con ingredientes naturales!</p>
            </div>
            <div className='producto_perfumes'>
              <img className="producto_img" src="img/imagen_02.jpg" alt="perfumes" />
              <h3 className='producto_titulo'>Perfumes</h3>
              <p className='producto_texto'>Con esencias únicas y memorables</p>
            </div>
            <div className="producto_facial">
              <img className="producto_img" src="img/imagen_03.jpg" alt="tratamiento facial" />
              <h3 className='producto_titulo'>Tratamiento Facial</h3>
              <p className='producto_texto'>¡Una línea experta en cuidado de la piel!</p>
            </div>
          </div>
        </div>
      </main>

      <section className='explorar'>
        <div className='explorar_title'>
          <h2>Explorar <span id='Catalog' className='span_title'>Catálogo</span></h2>
        </div>

        <div className='explorar_catalogo'>
          <Link href='/FormLogin'>
            <img className='link_catalogo' src='/img/catalogo.jpg' alt='catalogo' />
          </Link>
        </div>
      </section>

      <footer className='footer'>
                <div className='footer_grid'>
                    <div className='footer_info'>
                        <h3 className='footer_title'>Contacto</h3>
                        <Link className='footer_link' href="#">123, Facatativa</Link>
                        <Link className='footer_link' href="#">Colombia, Cundinamarca</Link>
                        <Link className='footer_link' href="#">000 123 567 890</Link>
                    </div>

                   
                    <div className='footer_info'>
                        <h3 className='footer_title'>Calidad e Innovación</h3>
                        <Link className='footer_link' href="#">Estrategias de Innovación</Link>
                        <Link className='footer_link' href="#">Resultados de Calidad</Link>
                        <Link className='footer_link' href="#">Procesos Optimos</Link>
                    </div>
                    <div className='footer_info'>
                        <h3 className='footer_title'>Redes Sociales</h3>
                        <div className='icons_networks'>
                            <Link className='footer_networks' href="https://www.facebook.com/"><i className="fab fa-facebook"></i></Link>
                            <Link className='footer_networks' href="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                            <Link className='footer_networks' href="#"><i className="fab fa-twitter"></i></Link>
                            <Link className='footer_networks' href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
                <hr className='linea_hr' />
                <div class='derechos_reservados'>
                    <p>Todos los Derechos Reservados &copy; SGVC</p>
                </div>
            </footer>
    </>
  )
}