import Swiper from 'swiper';
import { useEffect, useState } from 'react';
import NavBarHome from 'components/NavBarHome';
import Head from 'next/head';
import CarruselVendedores from 'components/CarruselV';
import CardUserNew from 'components/cardUserNew';


export default function ClienteHome({
    infoListV,
    closeSesion,
    Change,
    textInputFilter,
    cardFilter,
    darkMode,
    setDarkMode
}) {

    const [load, setLoading] = useState(false)

    let [openListV, setOpenListV] = useState(false)


    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/homeCliente.css" />
                <link rel="stylesheet" href="/style/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/style/swipper.css" />
                <link rel="stylesheet" href="/style/estilosNavBarHome.css" />
                <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
                <title>Vista | Cliente</title>
            </Head>

            <NavBarHome Change={Change} textInputFilter={textInputFilter} closeSesion={closeSesion} carrito={false} />


            <section style={{position:'relative'}} className='section_Pagin'>

                <div className='sm-banner'>
                    <div className='banner-box'>
                        <h4 className='banner__subtitulo'>Dendur</h4>
                        <h2 className='banner__titulo'>45 % dscto.</h2>
                        <p className='banner__info'>Aroma ambarado especiado Intensidad</p>
                        <a href='#se ' className='button__white'>Leer Más</a>
                    </div>

                    <div className='banner-box banner-box2'>
                        <h4 className='banner__subtitulo--box2'>Para Mujer</h4>
                        <h2 className='banner__titulo--box2'>Descuentos Extraordinarios</h2>
                        <p className='banner__info--box2'>Las Mejores Promociones</p>
                        <a href='#se ' className='button__white--box2'>Leer Más</a>
                    </div>
                </div>

                <section id='se' className='mt-9'>
                    {load ? <svg  style={{ maxWidth: '100px', width: '100%', margin: 'auto', position:'fixed', bottom: 0, right:0, zIndex:10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#ff7300" stroke="#ff7300" strokeWidth="7" transform-origin="center" d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="0.9" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>  : ''}

                


                </section>
                {
                    openListV ? [...cardFilter].length != 0 ? 
                      
                    (<div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', justifyContent: 'center' }}>
                        {
                            [...cardFilter].map((x, index) => (<CardUserNew item={x} index={index} key={x.id} clickIcon={setLoading} />))
                        }
                    </div>) 
                    
                    
                    : 
                    
                    
                    (<div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', justifyContent: 'center' }}>
                        {
                            [...infoListV].map((x, index) => (<CardUserNew item={x} index={index} key={x.id} clickIcon={setLoading} />))
                        }
                    </div>) 
                    
                    
                    
                    : [...cardFilter].length != 0 ? <CarruselVendedores clickIcon={setLoading} items={[...cardFilter]} /> : <CarruselVendedores clickIcon={setLoading} items={[...infoListV]} />
                }
                    <button onClick={() => {
                        setOpenListV(!openListV)
                        
                        window.location.href = '#se'
                        }} className='article__button' style={{ display: 'block', margin: '20px auto', borderRadius: '6px' }}> {openListV ? '- Ver Menos -' : '🡫 Ver todo el listado de vendedores 🡫'}  </button>



                <div className='contenido_banner'>
                    <div className='contenido__promocion contenido__max'>
                        <h1  className='titulo_novedades'>Novedades</h1>

                        <div className='con-sider'>

                            <article className='article__crema'>
                                <div className='article__flex'>
                                    <h1 className='article__titulo'>Totalist+ Renueva</h1>
                                    <h3 className='article__info'>con ingredientes que cuidan tu piel</h3>
                                    <a href='#se ' style={{ borderRadius: '6px', display:'block', textAlign:'center'  }} className='article__button'>Ver Más</a>
                                </div>
                            </article>

                            <aside className='aside__promo'>

                                <div className='aside__flex'>
                                    <div className='aside__contenido'>
                                        <h3 className='aside__text'>Paleta Sexy Glam</h3>
                                        <p className='aside__info'>El mix perfecto de sombras mate, satinadas y escarchadas</p>
                                        <a href='#se ' style={{ borderRadius: '6px', display:'block'  }} className='aside__button'>Comprar</a>
                                    </div>
                                    <img className='aside_image' src='/img/promo_05.jpg' alt='' />
                                </div>



                                <div className='aside__flex'>
                                    <div className='aside__contenido'>
                                        <h3 className='aside__text'>Nueva Joyería</h3>
                                        <p className='aside__info'>Celebra con diseños unicos y de la más alta Calidad</p>
                                        <a href='#se ' style={{ borderRadius: '6px', display:'block' }} className='aside__button'>Más Información</a>
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
