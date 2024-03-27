import NavBarHome from 'components/NavBarHome';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ListaVendedores() {
    const [isFavorito, setIsFavorito] = useState(false);

    const toggleFavorito = () => {
        setIsFavorito((prev) => !prev);
    };

    return (
        <>

            <NavBarHome />

            <style jsx>
                {
                    `
                    .grid_card {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); /* Cada columna tiene un ancho mínimo de 200px y se ajusta automáticamente */
                        gap: 20px; /* Espacio entre las celdas */
                    }
                    .title_card {
                        text-align: center;
                        font-size: 25px;
                    }
                    .wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        width: 100%;
                        padding: 20px;
                        background-color: #ECF0F3;
                        box-shadow: 0 5px 10px rgba(31, 38, 135, 0.75);
                        border: 1px solid rgba(255, 255, 255, 0.18);
                        border-radius: 15px;
                    }
                    
                    .social_icons .link_icon {
                        background-color: #ecf0f3;
                        border-radius: 10px;
                        box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
                    }
                    
                    .wrapper .img_area {
                        margin: 0 auto;
                        background-color: #e06b11;
                        border-radius: 10px;
                        box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
                    }
                    
                    .wrapper .img_area {
                        height: 120px;
                        width: 120px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .img_area .inner_area {
                        height: calc(100% - 10px);
                        width: calc(100% - 10px);
                        border-radius: 50%;
                    }
                    .inner_area .img_bg {
                        height: 100%;
                        width: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    
                    .name {
                        font-size: 23px;
                        font-weight: 500;
                        color: #31344b;
                        margin: 10px 0 5px 0;
                    }
                    
                    .about {
                        font-weight: 400;
                        color: #44476a;
                        font-size: 16px;
                    }
                    .description {
                        font-size: 14px;
                        text-align: center;
                        margin: 5px 0;
                    }
                    .rol {
                        font-size: 20px;
                        color: #5c5c5c;
                        font-weight: 700;
                    }
                    
                    .social_icons {
                        margin: 15px 0 25px 0;
                    }
                    
                    .social_icons .link_icon {
                        height: 40px;
                        width: 40px;
                        display: inline-flex;
                        margin: 0 7px;
                        border-radius: 50%;
                        position: relative;
                    }
                    
                    .social_icons .link_icon:hover::before {
                        position: absolute;
                        content: "";
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        background-color: #ECF0F3;
                        border-radius: 50%;
                        box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 5px #ceced1;
                    }
                    
                    .social_icons .link_icon .icon_networ {
                        font-size: 20px;
                        text-align: center;
                        width: 100%;
                        height: 100%;
                        line-height: 40px;
                        position: relative;
                        z-index: 5;
                    }
                    
                    .social_icons .yt .icon_networ {
                        color: #FF0000;
                    }
                    .social_icons .what .icon_networ {
                        color: #25D366;
                    } 
                    
                    .icon {
                        margin-left: 260px;
                    }
                    
                    .wrapper .icon .favorite_icon {
                        font-size: 25px;
                    }
                    
                    @media (max-width: 768px) {
                        .grid_card {
                            grid-template-columns: repeat(2, 1fr);
                        }
                        .wrapper {
                            width: 90%;
                            margin: 0 auto;
                            gap: 2px;
                        }
                    }
                    
                    @media (max-width: 560px) {
                        .grid_card {
                            grid-template-columns: repeat(1, 1fr);
                            width: 70%;
                            margin: 0 auto;
                        }
                        .section_Pagin {
                            padding: 0 0 0 0;
                        }
                    }
                    
                    `
                }
            </style>

            <Head>
                <title>SGVC | Vendedor</title>
                <link rel="icon" href="/logo.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />

            </Head>

            <section className='vendedor_card section_Pagin'>
                <h2 className='title_card'>Vendedores</h2>
                <div className='grid_card'>
                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='/cliente/productosVendedor' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='/cliente/productosVendedor' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href=''><span className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></span></Link>
                            <Link href=''><span className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></span></Link>

                        </div>
                    </div>

                

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
