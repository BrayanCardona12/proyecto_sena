import Link from 'next/link';

import {useState } from 'react'
import { StyleIndex } from 'log/Styles';


export default function BodyHome() {
  const [page, setPage] = useState(0);


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
          <Link href=''><i className="social_link  fa-brands fa-instagram social_net"></i></Link>
          <Link href=''><i className="social_link  fa-brands fa-youtube social_net"></i></Link>
          <Link href=''><i className="social_link  fa-brands fa-linkedin social_net"></i></Link>
          <Link href=''><i className="social_link  fa-brands fa-telegram social_net"></i></Link>
        </div>

        <nav className='navbar'>
          <div className='nav_hidden'>
            <Link href='' ><span className='nav_link__menu'>Inicio</span></Link>
            <Link href='' ><span className='nav_link__menu'>Nosotros</span></Link>
            <Link href='' ><span className='nav_link__menu'>Productos</span></Link>
            <Link href='' ><span className='nav_link__menu'>Catálogo</span></Link>
          </div>

          <div className='inicio_up'>
            <Link href="/FormLogin">
              <i className="fa-regular fa-user icon_inicio"></i>
            </Link>
          </div>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      <section className='banner'>
        <div className='slider'>

          <div className={`slide ${page === 0 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_01.jpg' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Snak</h1>
              </div>
              <div className="content">
                <h3 className='content_title'>01111. The Entry Fragger</h3>
                <p className='content_pagraf'>Abhishek Shakya, also known by his in-game name SnakeEye, is the entry fragger of SEC C
                  Esports.</p>
                <Link href="#" ><span className='btn_info'>More Details</span></Link>
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
                <h3 className='content_title'>00. Team SEC C Esports</h3>
                <p className='content_pagraf'>SEC C Esports is a professional esports team based in India. It was founded in 2021 by
                  Abhishek Shakya, a young entrepreneur and gamer.</p>
                <Link href="#" ><span className='btn_info'>Mas Detalles</span></Link>
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
                <h3 className='content_title'>02. The Supporter</h3>
                <p className='content_pagraf'>Ashish Shakya, in-game name Venom, is the support player of Team SEC C in Battlegrounds
                  Mobile India (BGMI).</p>
                <Link href='#'><span className='btn_info'>More Details</span></Link>
              </div>
            </div>
            <div className='right_info'>
              <h1 className='right_title'>om</h1>
              <h3 className='right_subtitle'>Ashish</h3>
            </div>

          </div>

          <div className={`slide ${page === 3 ? 'active' : ''}`}>
            <img className='slide_img' src='/img/portada_04.webp' alt="imagen slider" />
            <div className='left_info'>
              <div className='penetrte_blur'>
                <h1 className='penetrte_title'>Fla</h1>
              </div>
              <div className='content'>
                <h3 className='content_title'>03. The IGL</h3>
                <p className='content_pagraf'>Pankaj Rajpoot, in-game name Flash, is the in-game leader (IGL) of Team SEC C in
                  Battlegrounds Mobile India (BGMI).</p>
                <Link href='#' ><span className='btn_info'>More Details</span></Link>
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
                <h3 className='content_title'>04. The All Rounder</h3>
                <p className='content_pagraf'>Shivam Rajput, in-game name Mr. Rajput, is an all-rounder of Team SEC C in Battlegrounds
                  Mobile India (BGMI).</p>
                <Link href='#'><span className='btn_info'>More Details</span></Link>
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
        <h2 className='nosotros_title'>Sobre <span>Nosotros</span></h2>
        <div className='nosotros_grid'>
          <div className='nosotros_img'>
            {/* <Image src='/img/nosotros.jpg' width={100} height={100} layout='responsive' /> */}
            <img src='/img/nosotros.jpg' alt='nosotros' />
          </div>
          <div className='nosotros_texto'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, numquam deserunt enim quaerat cum
              doloribus accusantium, possimus ex, eveniet laboriosam eius corporis quo? Quos nobis impedit
              consequuntur nemo veritatis. Nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Facilis, numquam deserunt enim quaerat cum
              doloribus accusantium, possimus ex, eveniet laboriosam eius corporis quo? Quos nobis impedit
              consequuntur nemo veritatis. Nemo.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos a labore debitis ipsam. Magni
              sed nulla quisquam odit quidem deleniti neque quis dolorum aut eos, rem repellat iure, laudantium
              dolorem?
            </p>
          </div>
        </div>
      </section>

      <main className='producto'>
        <div className='producto_title'>
          <h2>Prod<span>uctos</span></h2>
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
          <h2>Explorar <span className='span_title'>Catálogo</span></h2>
        </div>

        <div className='explorar_catalogo'>
          <Link href=''>
            <img className='link_catalogo' src='/img/catalogo.jpg' alt='catalogo' />
          </Link>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer_grid'>
          <div className='footer_info'>
            <h3 className='footer_title'>Contacto</h3>
            <Link  href="#"> <span  className='footer_link'>123, Facatativa</span> </Link>
            <Link  href="#"> <span  className='footer_link'>Colombia, Cundinamarca</span></Link>
            <Link  href="#"> <span  className='footer_link'>000 123 567 890</span></Link>
          </div>

          <div className='footer_info'>
            <h3 className='footer_title'>UseFul Link</h3>
            <Link href="#"><span className='footer_link' >Blog</span></Link>
            <Link href="#"><span className='footer_link' >Ventas</span></Link>
            <Link href="#"><span className='footer_link' >Tickets</span></Link>
            <Link href="#"><span className='footer_link' >Servicio al cliente</span></Link>
            <Link href="#"><span className='footer_link' >Certificaciones</span></Link>
          </div>

          <div className='footer_info'>
            <h3 className='footer_title'>Recent Post</h3>
            <Link  href="#"> <span className='footer_link'>Lorem ipsum dolor sit amet</span></Link>
            <Link  href="#"> <span className='footer_link'>Lorem ipsum dolor sit amet</span></Link>
            <Link  href="#"> <span className='footer_link'>Lorem ipsum dolor sit amet</span></Link>
            <Link  href="#"> <span className='footer_link'>Lorem ipsum dolor sit amet</span></Link>
            <Link  href="#"> <span className='footer_link'>Lorem ipsum dolor sit amet</span></Link>
   
          </div>
          <div className='footer_info'>
            <h3 className='footer_title'>Redes Sociales</h3>
            <div className='icons_networks'>
              <Link href="#"><i className="footer_networks  fab fa-facebook"></i></Link>
              <Link href="#"><i className="footer_networks  fab fa-instagram"></i></Link>
              <Link href="#"><i className="footer_networks  fab fa-twitter"></i></Link>
              <Link href="#"><i className="footer_networks  fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>
        <hr className='linea_hr' />
        <div className='derechos_reservados'>
          <p>Todos los Derechos Reservados &copy; 2023</p>
        </div>
      </footer>
    </>
  )
}