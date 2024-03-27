import { useState } from "react";
import Link from "next/link"


function NavBarHome() {
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
        <style>
            {
                `
                /* === globales */
.section_Pagin {
    margin: 56px 0 0 0;
    padding: 10px 20px 10px 100px;
}
@media (max-width: 768px) {
    .section_Pagin {
        margin: 56px 0 0 0;
        padding: 0;
    } 
}

/*========== HEADER, MENU, DROPDOWN MENU ==========*/
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
    padding: 0 1rem;
    z-index: 100;
}
  
.header_contenedor {
    display: flex;
    align-items: center;
    height: 56px;
    justify-content: space-between;
}

.header_info {
    display: flex;
    align-items: center;
    gap: 10px;
}
.header_info .icon_cart {
    position: relative;
}
.header_info .icon_cart .cart_num {
    display: flex;
    width: 20px;
    height: 20px;
    background-color: red;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: -5px;
}
.icon_cart .cart_icon {
    font-size: 30px;
    cursor: pointer;
}

.header_cliente {
    text-align: right;
}

.header_img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
  
.header_logo {
    color: #19181B;
    font-weight: 500;
    display: none;
}
  
.header_search {
    display: flex;
    /* background-color: #F4F0FA;
    border-radius: 20px;
    border: 1px solid #bcbcbc; */
    
}
.input_search {
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 350px;
    outline: none;
}
.search_button {
    background-color: #F76307;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 35px;
    color: white;
}
.search_button:hover {
    background-color: #ff752094;
}
/* .header_input {
    width: 100%;
    border: none;
    outline: none;
    background-color: #F4F0FA;
} */
  
/* .header_input::placeholder {
    color: #58555E;
} */
  
.header_icon, 
.header_toggle {
    font-size: 20px;
}
  
.header_toggle {
    color: #19181B;
    cursor: pointer;
}


/* seccion carrito*/
.cartTab {
    width: 450px;
    /* background-color: rgba(0, 0, 0, 0.1); */
    background-color: rgb(239, 239, 239);
    color: #000;
    position: fixed;
    inset: 57px -450px 0 auto;
    display: grid;
    grid-template-rows: 55px 1fr 60px 40px;
    transition: .5s;
    z-index: 999;
}

.cart_title {
    padding: 10px 0 10px 5px;
    margin: 0;
    font-weight: 300;
    font-size: 20px;
    border-bottom: 2px solid #000;
}

.list_Cart {
    overflow: auto;
}

.list_Cart::-webkit-scrollbar {
    width: 0;
}

.cartTab .list_Cart .cart_item .cart_image_client {
    width: 100%;
}

.cart_name {
    font-size: 14px;
    text-transform: uppercase;
}
.cart_precio_col {
    font-size: 18px;
}
.cartTab .list_Cart .cart_item {
    display: grid;
    grid-template-columns: 70px 80px 85px 110px 45px;
    gap: 10px;
    text-align: center;
    align-items: center;
    padding: 10px;
}

.list_Cart .cart_cantidad .minus,
.list_Cart .cart_cantidad .plus {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #b0acac;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}

.list_Cart .cart_cantidad .cantidad_lote:nth-child(2) {
    background-color: transparent;
    color: #000;
    margin: 0 10px;
}

.list_Cart .cart_item:nth-child(even) {
    background-color: #19191911
}

.cart_delete .delete_icon{
    font-size: 25px;
    color: #f71a02;
}

.cart_total {
    padding: 10px 10px;
}
.cart_title_total {
    text-align: right;
    color: #31344b;
    font-size: 30px;
}
.spanColorTotal {
    color: #000000;
    font-size: 25px;
    font-weight: 700;
}
.cartTab .cart_btn .cart_check {
    width: 100%;
    height: 100%;
    background-color: #f76307;
    border: none;
    font-size: 25px;
    font-weight: 500;
    transition: .4s;
}
.cart_btn .cart_check .btn_cesta {
    color: #FFFFFF;
}

.cart_btn .cart_check:hover {
    background-color: #ff7620;
}

.showCart {
    inset: 57px 0 0 auto;
}
@media (max-width: 460px) {
    .cartTab {
        width: 320px;
    }
    .cartTab .list_Cart .cart_item .cart_image_client {
        width: 100%;
    }
    .cartTab .list_Cart .cart_item {
        grid-template-columns: 53px 66px 80px 80px 15px;
        gap: 5px;
        padding: 0;
        margin-top: 5px;
    }
    .cart_name {
        font-size: 12px;
    }
    .cart_precio {
        font-size: 20px;
    }
    .list_Cart .cart_cantidad .minus,
    .list_Cart .cart_cantidad .plus {
        width: 20px;
        height: 23px;
    }
    .cart_delete .delete_icon{
        font-size: 20px;
    }

}

/* NAVEGACION */
.nav {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    padding: 10px 10px 30px;
    background-color: #FFFFFF;
    box-shadow: 1px 0 0 rgba(22, 8, 43, .1);
    z-index: 100;
    transition: .4s;
}

.nav_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: auto;
    scrollbar-width: none; /* para mozilla*/
}

.nav_container::-webkit-scrollbar {
    display: none; /* para google y otros */
}

.nav_logo {
    font-weight: 700;
    margin-bottom: 25px;
}

.nav_list,
.nav_items {
    display: grid;
}

.nav_list {
    row-gap: 25px;
}

.nav_items {
    row-gap: 15px;
}

.nav_subtitle {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #A5A1AA;
}

.nav_link {
    display: flex;
    align-items: center;
    color: #58555E;
}

.nav_link:hover {
    color: #F76307;
}

.nav_icon {
    /* font-size: 15px; */
    margin-right: 5px;
}

.nav_name {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
}

.nav_logout {
    margin: 0 0 15px;
}

/* dropdown */
.nav_dropdown {
    overflow: hidden;
    max-height: 21px;
    transition: .4s ease-in-out;
}

.nav_dropdown-collapse {
    background-color: #f0e8fc;
    border-radius: 5px;
    margin-top: 15px;
}

.nav_dropdown-content {
    display: grid;
    row-gap: 5px;
    padding: 10px 25px 10px 20px;
}

.nav_dropdown-item {
    font-size: 16px;
    font-weight: 500;
    color: #58555E;
}

.nav_dropdown-item:hover {
    color: #F76307;
}

.nav_dropdown-icon {
    margin-left: auto;
    transition: .4s;
}

/* mostrar dropdown */
.nav_dropdown:hover {
    max-height: 190px;
}

.nav_dropdown:hover .nav_dropdown-icon {
    transform: rotate(180deg);
}

/*mostrar menu */
.show-menu {
    left: 0;
    z-index: 999;
}

/*active*/
.active {
    color: #f76307;
}

/* MEDIA QUERIES */
@media (max-width: 767px) {
    .header_datos {
        display: none;
    }
    .header_search {
        padding: 2px 5px;
    }
    .input_search {
        width: 200px;
    }
    .header_info {
        gap: 10px;
    }
    .header_info .icon_cart .cart_num {
        width: 15px;
        height: 15px;
        color: #FFFFFF;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: -4px;
    }
    .icon_cart .cart_icon {
        font-size: 25px;
    }
}
@media (max-width: 320px) {
    
    .input_search {
        width: 135px;
    }
}

@media (min-width: 768px) {
    .header {
        padding: 0 35px 0 130px;
    }
    .input_search {
        width: 300px;
    }
    .header_toggle {
        display: none;
    }
    .header_logo {
        display: block;
    }
    .header_info {
        order: 1;
    }
    .header_img {
        width: 40px;
        height: 40px;
    }
    .nav {
        left: 0;
        padding: 12px 25px 0;
        width: 68px; /* Reduce navbar */
    }
    .nav_items {
        row-gap: 1.7rem;
    }
    .nav_icon {
        font-size: 18px;
    }
    
    /* Element opacity */
    .nav_logo-name, 
    .nav_name, 
    .nav_subtitle, 
    .nav_dropdown-icon {
        opacity: 0;
        transition: .3s;
    }
      
      
    /* Navbar expanded */
    .nav:hover {
        width: var(--nav-width);
    }
      
    /* Visible elements */
    .nav:hover .nav_logo-name {
        opacity: 1;
    }
    .nav:hover .nav_subtitle {
        opacity: 1;
    }
    .nav:hover .nav_name {
        opacity: 1;
    }
    .nav:hover .nav_dropdown-icon {
        opacity: 1;
    }
}
                `
            }
        </style>

            <header className='header'>
                <div className='header_contenedor'>
                    <div className='header_info'>
                        <div className='header_datos'>
                            <p className='header_datos_per'>Hola <span>Brayan</span></p>
                            <p className='header_cliente'>cliente</p>
                        </div>
                        <img src='img/vendedor_02.jpg' alt='foto cliente' className='header_img' />
                        <div className='icon_cart' onClick={toggleCart}>
                            <i class='bx bxs-cart-alt cart_icon'></i>
                            <span className='cart_num'>0</span>
                        </div>
                    </div>

                    <Link href='/cliente' className='header_logo'>SGVC</Link>
                    <div className='header_search'>
                        <input type="search" className='input_search' />
                        <button type='submit' className='search_button'>
                            <svg className='w-4 h-4 m-auto' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
               
                    <div className='header_toggle' onClick={toggleMenu}>
                        <i class={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id='header_toggle'></i>
                    </div>
                </div>
            </header>

            {/* carrito */}
            <div className={`cartTab ${isCartOpen ? 'showCart' : ''}`}>
                <h1 className='cart_title'>Shopping Cart</h1>
                <div className='list_Cart'>
                    <div className='cart_item'>
                        <div className='cart_image'>
                            <img className='cart_image_client' src='img/colonia_01.jpg' alt='producto' />
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
                            <button><i class='bx bxs-trash delete_icon'></i></button>
                        </div>
                    </div>
                    <div className='cart_item'>
                        <div className='cart_image'>
                            <img className='cart_image_client' src='img/colonia_01.jpg' alt='producto' />
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
                            <button><i class='bx bxs-trash delete_icon'></i></button>
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

            {/* NAVEGACION */}
            <div className={`nav ${isMenuOpen ? 'show-menu' : ''} `} id='navbar'>
                <nav className='nav_container'>
                    <div>
                        <Link href='/cliente' className='nav_link nav_logo'>
                            <i class="bx bx-disc nav_icon"></i>
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
                                    <i class="bx bx-store nav_icon"></i>
                                    <span className='nav_name'>Productos</span>
                                </Link>
                                <Link href='/cliente/pedidos' className='nav_link'>
                                <i class="fa-solid fa-table nav_icon"></i>
                                    <span className='nav_name'>Pedidos</span>
                                </Link>
                                {/* <!----> */}

                                <Link href='' className='nav_link'>
                                    <i class="bx bx-message-rounded nav_icon"></i>
                                    <span className='nav_name'>Mensaje</span>
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
                                            <Link href='' className='nav_link nav_dropdown-item'>Accounts</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='nav_dropdown'>
                                    <Link href='' className='nav_link'>
                                        <i className='bx bx-bell nav_icon'></i>
                                        <span className='nav_name'>Notificaciones</span>
                                        <i className='bx bx-chevron-down nav_icon nav_dropdown-icon'></i>
                                    </Link>

                                    <div className='nav_dropdown-collapse'>
                                        <div className='nav_dropdown-content'>
                                            <Link href='' className='nav_link nav_dropdown-item'>Blocked</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Silenced</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Publish</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Program</Link>
                                        </div>
                                    </div>
                                </div>



                                <Link href='' className='nav_link'>
                                    <i className='bx bx-compass nav_icon'></i>
                                    <span className='nav_name'>Explorar</span>
                                </Link>

                                <Link href='' className='nav_link'>
                                    <i class='bx bx-bookmark nav_icon'></i>
                                    <span className='nav_name'>Guardar</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href='' className='nav_link nav_logout'>
                        <i className='bx bx-log-out nav_icon'></i>
                        <span className='nav_name'>Cerrar Sesión</span>
                    </Link>
                </nav>
            </div>


        </>
    )
}

export default NavBarHome;