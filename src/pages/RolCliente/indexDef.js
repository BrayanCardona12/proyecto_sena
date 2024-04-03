import Swiper from 'swiper';
import { useEffect } from 'react';
import NavBarHome from 'components/NavBarHome';
import Head from 'next/head';

export default function ClienteHome() {
    useEffect(() => {
        const swiperCards = new Swiper(".card__content", {
            loop: true,
            spaceBetween: 32,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
                968: {
                    slidesPerView: 3,
                },
            },
        });


    }, []);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/homeCliente.css" />
                <link rel="stylesheet" href="/style/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/style/swipper.css" />
                <link rel="stylesheet" href="/style/estilosNavBarHome.css" />
            </Head>

            <NavBarHome />

        
            <section className='section_Pagin'>

                <div className='sm-banner'>
                    <div className='banner-box'>
                        <h4 className='banner__subtitulo'>Dendur</h4>
                        <h2 className='banner__titulo'>45 % dscto.</h2>
                        <p className='banner__info'>Aroma ambarado especiado Intensidad</p>
                        <button className='button__white'>Leer Más</button>
                    </div>

                    <div className='banner-box banner-box2'>
                        <h4 className='banner__subtitulo--box2'>Para Mujer</h4>
                        <h2 className='banner__titulo--box2'>Descuentos Extraordinarios</h2>
                        <p className='banner__info--box2'>Las Mejores Promociones</p>
                        <button className='button__white--box2'>Leer Más</button>
                    </div>
                </div>


                {/* <section className="card__swiper--vende">
                    <h1 className='titulo__swiper'>Lista vendedores</h1>
                    <div className="card__container swiper">
                        <div className="card__content">
                            <div className="swiper-wrapper">
                                <article className="card__article swiper-slide">
                                    <div className="card__image">
                                        <div className="border__image">
                                            <img src="/img/vendedor_02.jpg" alt="image" className="card__img" />
                                        </div>
                                        <div className="card__shadow"></div>
                                    </div>

                                    <div className="card__data">
                                        <h3 className="card__name">Kell Dawx</h3>
                                        <p className="card__description">
                                            Passionate about development and design,
                                            I carry out projects at the request of users.
                                        </p>

                                        <a href="#" className="card__button">View More</a>
                                    </div>
                                </article>

                                <article className="card__article swiper-slide">
                                    <div className="card__image">
                                        <div className="border__image">
                                            <img src="/img/perfil.jpg" alt="image" className="card__img" />
                                        </div>
                                        <div className="card__shadow"></div>
                                    </div>

                                    <div className="card__data">
                                        <h3 className="card__name">Lotw Fox</h3>
                                        <p className="card__description">
                                            Passionate about development and design,
                                            I carry out projects at the request of users.
                                        </p>

                                        <a href="#" className="card__button">View More</a>
                                    </div>
                                </article>

                                <article className="card__article swiper-slide">
                                    <div className="card__image">
                                        <div className="border__image">
                                            <img src="/img/perfil_02.jpg" alt="image" className="card__img" />
                                        </div>
                                        <div className="card__shadow"></div>
                                    </div>

                                    <div className="card__data">
                                        <h3 className="card__name">Sara Mit</h3>
                                        <p className="card__description">
                                            Passionate about development and design,
                                            I carry out projects at the request of users.
                                        </p>

                                        <a href="#" className="card__button">View More</a>
                                    </div>
                                </article>

                                <article className="card__article swiper-slide">
                                    <div className="card__image">
                                        <div className="border__image">
                                            <img src="/img/perfil_03.jpg" alt="image" className="card__img" />
                                        </div>
                                        <div className="card__shadow"></div>
                                    </div>

                                    <div className="card__data">
                                        <h3 className="card__name">Jenny Wert</h3>
                                        <p className="card__description">
                                            Passionate about development and design,
                                            I carry out projects at the request of users.
                                        </p>

                                        <a href="#" className="card__button">View More</a>
                                    </div>
                                </article>

                                <article className="card__article swiper-slide">
                                    <div className="card__image">
                                        <div className="border__image">
                                            <img src="/img/perfil_04.jpg" alt="image" className="card__img" />
                                        </div>
                                        <div className="card__shadow"></div>
                                    </div>

                                    <div className="card__data">
                                        <h3 className="card__name">Lexa Kin</h3>
                                        <p className="card__description">
                                            Passionate about development and design,
                                            I carry out projects at the request of users.
                                        </p>

                                        <a href="#" className="card__button">View More</a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section> */}


                <div className='contenido_banner'>
                    <div className='contenido__promocion contenido__max'>
                        <h1 className='titulo_novedades'>Novedades</h1>

                        <div className='con-sider'>

                            <article className='article__crema'>
                                <div className='article__flex'>
                                    <h1 className='article__titulo'>Totalist+ Renueva</h1>
                                    <h3 className='article__info'>con ingredientes que cuidan tu piel</h3>
                                    <button className='article__button'>Ver Más</button>
                                </div>
                            </article>

                            <aside className='aside__promo'>

                                <div className='aside__flex'>
                                    <div className='aside__contenido'>
                                        <h3 className='aside__text'>Paleta Sexy Glam</h3>
                                        <p className='aside__info'>El mix perfecto de sombras mate, satinadas y escarchadas</p>
                                        <button className='aside__button'>Comprar</button>
                                    </div>
                                    <img className='aside_image' src='/img/promo_05.jpg' alt='' />
                                </div>



                                <div className='aside__flex'>
                                    <div className='aside__contenido'>
                                        <h3 className='aside__text'>Nueva Joyería</h3>
                                        <p className='aside__info'>Celebra con diseños unicos y de la más alta Calidad</p>
                                        <button className='aside__button'>Más Información</button>
                                    </div>
                                    <img className='aside_image' src='/img/promo_06.webp' alt='' />
                                </div>
                            </aside>

                        </div>
                    </div>
                </div>
            </section>
            <footer>
            </footer>
        </>
    )
}
