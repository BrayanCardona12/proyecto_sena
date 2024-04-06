import { useState } from "react";
import Link from "next/link"

// esta es la navBar del cliente

function NavBarHome({ textInputFilter, closeSesion, carrito, Change }) {
    //menu responsive
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // carrito compras
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <>

            <header className='header'>
                <div className='header_contenedor'>
                    <div className='header_info'>
                        <div className='header_datos'>
                            <p className='header_datos_per'>Hola, <span>{localStorage.getItem('theName') ? localStorage.getItem('theName') : 'unknown'}</span></p>
                            <p className='header_cliente'>Cliente</p>
                        </div>
                        <Link href={!localStorage.getItem('inf') ? '/' : '/ActUser/' + localStorage.getItem('inf')} style={{ position: 'relative' }} className="foto_perfil">
                            <img src={!localStorage.getItem('imgUser') ? 'unknown' : localStorage.getItem('imgUser')} alt='foto cliente' className='header_img' />
                            <span style={{ position: 'absolute', borderRadius: '10px', zIndex: '1', bottom: '0', right: '0' }} className="material-icons-sharp"> edit </span>
                        </Link>

                        {
                            carrito ?? (
                                <div className='icon_cart' onClick={toggleCart}>
                                    <i className='bx bxs-cart-alt cart_icon'></i>
                                    <span className='cart_num'>0</span>
                                </div>
                            )
                        }


                    </div>

                    <Link href='/' className='header_logo'>SGVC</Link>
                    <div className='header_search'>
                        <input value={textInputFilter} onChange={Change} placeholder="Arom Perfum..." style={{ border: '1px solid black' }} type="search" className='input_search' />
                    </div>

                    <div className='header_toggle' onClick={toggleMenu}>
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id='header_toggle'></i>
                    </div>
                </div>
            </header>

            {/* carrito */}

            {
                carrito ?? (
                    <div className={`cartTab ${isCartOpen ? 'showCart' : ''}`}>
                        <h1 className='cart_title'>Shopping Cart</h1>
                        <div className='list_Cart'>
                            <div className='cart_item'>
                                <div className='cart_image'>
                                    <img className='cart_image_client' src='/img/colonia_01.jpg' alt='producto' />
                                </div>
                                <div className='cart_name'>
                                    <p className='cart_name_text'>carolina herrera</p>
                                </div>
                                <div className='cart_precio'>
                                    <p className='cart_precio_col'>$230.000</p>
                                </div>
                                <div className='cart_cantidad'>
                                    <span className='minus'>-</span>
                                    <span className='cantidad_lote'>1</span>
                                    <span className='plus'>+</span>
                                </div>
                                <div className='cart_delete'>
                                    <button><i className='bx bxs-trash delete_icon'></i></button>
                                </div>
                            </div>
                            <div className='cart_item'>
                                <div className='cart_image'>
                                    <img className='cart_image_client' src='/img/colonia_01.jpg' alt='producto' />
                                </div>
                                <div className='cart_name'>
                                    <p className='cart_name_text'>carolina herrera</p>
                                </div>
                                <div className='cart_precio'>
                                    <p className='cart_precio_col'>$230.000</p>
                                </div>
                                <div className='cart_cantidad'>
                                    <span className='minus'>-</span>
                                    <span className='cantidad_lote'>1</span>
                                    <span className='plus'>+</span>
                                </div>
                                <div className='cart_delete'>
                                    <button><i className='bx bxs-trash delete_icon'></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='cart_total'>
                            <h3 className='cart_title_total'>
                                <span className='spanColorTotal'>Total:</span>
                                423.000 Col$</h3>
                        </div>
                        <div className='cart_btn'>
                            <button className='cart_check'>
                                <Link href='' className="btn_cesta">Ir a la Cesta</Link>
                            </button>
                        </div>
                    </div>

                )
            }

            {/* NAVEGACION */}
            <div className={`nav ${isMenuOpen ? 'show-menu' : ''} ${!carrito ? 'notExpand' : ''}`} id='navbar'>
                {
                    !carrito ? <>
                    </> : <>
                        <nav className='nav_container'>


                            <div>
                                <Link href='/' className='nav_link nav_logo'>
                                    <i className="bx bx-disc nav_icon"></i>
                                    <span className='nav_logo-name'>SGVC</span>
                                </Link>

                                <div className='nav_list'>
                                    <div className='nav_items'>
                                        <h3 className='nav_subtitle'>Menu</h3>
                                        <Link href="/cliente" className='nav_link'>
                                            <i className="bx bx-home nav_icon"></i>
                                            <span className='nav_name'>Home</span>
                                        </Link>

                                        <Link href='/cliente/vendedor' className='nav_link'>
                                            <i className="bx bxs-group nav_icon"></i>
                                            <span className='nav_name'>Vendedores</span>
                                        </Link>

                                        <Link href='/cliente/productos' className='nav_link'>
                                            <i className="bx bx-store nav_icon"></i>
                                            <span className='nav_name'>Productos</span>
                                        </Link>
                                        <Link href='/cliente/pedidos' className='nav_link'>
                                            <i className="fa-solid fa-table nav_icon"></i>
                                            <span className='nav_name'>Pedidos</span>
                                        </Link>
                                    </div>

                                    <div className='nav_items'>
                                        <h3 className='nav_subtitle'>Profile</h3>

                                        <div className='nav_dropdown'>
                                            <Link href='' className='nav_link'>
                                                <i className="bx bx-user nav_icon"></i>
                                                <span className='nav_name'>Perfíl</span>
                                                <i className="bx bx-chevron-down nav_icon nav_dropdown-icon"></i>
                                            </Link>

                                            <div className='nav_dropdown-collapse'>
                                                <div className='nav_dropdown-content'>
                                                    <Link href='/cliente/formulario' className='nav_link nav_dropdown-item'>Actualizar Datos</Link>
                                                    <Link href='' className='nav_link nav_dropdown-item'>Politica y Privacidad</Link>
                                                </div>
                                            </div>
                                        </div>



                                        <Link href='' className='nav_link'>
                                            <i className='bx bx-bookmark nav_icon'></i>
                                            <span className='nav_name'>Favoritos</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>






                            <div onClick={() => {
                                let alerta = confirm('¿Seguro que desea cerrar sesión?')
                                if (alerta) {
                                    closeSesion()
                                    return
                                }
                                return
                            }} href='' className='nav_div nav_logout'>
                                <i className='bx bx-log-out nav_icon'></i>
                                <span className='nav_name'>Cerrar Sesión</span>
                            </div>
                        </nav>
                    </>

                }

            </div>


        </>
    )
}

export default NavBarHome;