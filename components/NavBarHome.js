import { useEffect, useState } from "react";
import Link from "next/link"
import { formatter } from "log/const";
import logCardCarritoCompra from "log/logCardCarritoCompra";
import CardNewCarShop from "./cardNewCarShop";
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toast';
import { toast } from 'react-toast'

// esta es la navBar del cliente

function NavBarHome({ textInputFilter, pedidos ,closeSesion, carrito, Change, infoCarShop, total, parametros, home }) {
    //menu responsive
    const [isMenuOpen, setMenuOpen] = useState(false);

    let router = useRouter()

    useEffect(() => {
       
        document.getElementById('actUser').href = `${!localStorage.getItem('inf') ? '/' : '/ActUser/' + localStorage.getItem('inf')}`

        if (document.getElementById('acr')) {  document.getElementById('acr').href = `${!localStorage.getItem('inf') ? '/' : '/ActUser/' + localStorage.getItem('inf')}` }
        
        if (document.getElementById('ped')) {  document.getElementById('ped').href = `${!localStorage.getItem('inf') ? '/' : '/RolCliente/pedidos?idC=' + localStorage.getItem('inf')}` }
        

    
        document.getElementById('nombrePerfil').innerText = localStorage.getItem('theName') ? localStorage.getItem('theName') : 'unknown'


        document.getElementById('fotoPerfil').src = !localStorage.getItem('imgUser') ? 'unknown' : localStorage.getItem('imgUser')


    }, [])



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
                <ToastContainer delay={2000} position="bottom-center" />

                <div className='header_contenedor'>
                    <div className='header_info'>
                        <div className='header_datos'>
                            <p className='header_datos_per'>Hola, <span id="nombrePerfil"></span></p>
                            <p className='header_cliente'>Cliente</p>
                        </div>
                        <a id="actUser" style={{ position: 'relative' }} className="foto_perfil">
                            <img id="fotoPerfil" alt='foto cliente' className='header_img' />
                            <span style={{ position: 'absolute', borderRadius: '10px', zIndex: '1', bottom: '0', right: '0' }} className="material-icons-sharp"> edit </span>
                        </a>

                        {
                            carrito ? (
                                <div className='icon_cart' onClick={toggleCart}>
                                    <i className='bx bxs-cart-alt cart_icon'></i>
                                    <span className='cart_num'>{[...infoCarShop].length}</span>
                                </div>
                            ) : ''
                        }


                    </div>

                    <Link href='/' className='header_logo'>SGVC</Link>
                    <div className='header_search'>
                        <input value={textInputFilter} onChange={Change} placeholder="Arom Perfum..." style={{ border: '1px solid black', display:`${pedidos ? 'none': 'block'}` }} type="search" className='input_search' />
                    </div>

                    <div className='header_toggle' onClick={toggleMenu}>
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id='header_toggle'></i>
                    </div>
                </div>
            </header>

            {/* carrito */}

            {
                carrito ? (
                    <div className={`cartTab ${isCartOpen ? 'showCart' : ''}`}>
                        <h1 className='cart_title'>Shopping Cart</h1>
                        <div className='list_Cart'>

                            {[...infoCarShop].length == 0 ? <h2 style={{textAlign:'center'}}>No hay productos disponibles</h2> : [...infoCarShop].map((x) => (
                                <CardNewCarShop x={x} toast={toast} />

                            )
                            )}




                        </div>
                        <div className='cart_total'>
                            <h3 className='cart_title_total'>
                                <span className='spanColorTotal'>Total:</span>
                                {total([...infoCarShop])}</h3>
                        </div>
                        <div className='cart_btn'>
                            <button onClick={(e) => {
                                e.preventDefault()
                                router.push(`/ordenCompra/${parametros.current.idV}/${parametros.current.idC}`)
                            }} className='cart_check'>
                                Ir a la Cesta
                            </button>
                        </div>
                    </div>

                ) : ''
            }

            {/* NAVEGACION */}
            <div className={`nav ${isMenuOpen ? 'show-menu' : ''} `} id='navbar'>
                {
                    !carrito && !home ? <> </> : <>
                        <nav className='nav_container'>


                            <div>
                                <Link href='/' className='nav_link nav_logo'>
                                    <i className="bx bx-disc nav_icon"></i>
                                    <span className='nav_logo-name'>SGVC</span>
                                </Link>

                                <div className='nav_list'>
                                    <div className='nav_items'>
                                        <h3 className='nav_subtitle'>Menu</h3>
                                        <Link href="/" className='nav_link'>
                                            <i className="bx bx-home nav_icon"></i>
                                            <span className='nav_name'>Home</span>
                                        </Link>

                                        <Link href='/RolCliente' className='nav_link'>
                                            <i className="bx bxs-group nav_icon"></i>
                                            <span className='nav_name'>Vendedores</span>
                                        </Link>

                                        <a id="ped" className='nav_link'>
                                            <i className="bx bx-store nav_icon"></i>
                                            <span className='nav_name'>Pedidos</span>
                                        </a>

                                    

                                    </div>

                                    <div className='nav_items'>
                                        <h3 className='nav_subtitle'>Profile</h3>

                                        <div className='nav_dropdown'>
                                            <a className='nav_link'>
                                                <i className="bx bx-user nav_icon"></i>
                                                <span className='nav_name'>Perfíl</span>
                                                <i className="bx bx-chevron-down nav_icon nav_dropdown-icon"></i>
                                            </a>

                                            <div className='nav_dropdown-collapse'>
                                                <div className='nav_dropdown-content'>
                                                    <a id="acr"  className='nav_link nav_dropdown-item'>Actualizar Datos</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ cursor: 'pointer' }} onClick={() => {
                                let alerta = confirm('¿Seguro que desea cerrar sesión?')
                                if (alerta) {
                                    closeSesion()
                                    return
                                }
                                return
                            }} className='nav_div nav_logout'>
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