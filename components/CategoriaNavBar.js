import { useState } from "react";
import Link from "next/link";

function CategoriaNavBar({ filterCategoria, filterStockUp, filterStockDown, filterPriceDown, filterPriceUp, param }) {
    const [isOpen, setIsOpen] = useState({
        menu1: false,
        menu2: false,
        menu3: false,
    });


    const openMenu = (menu) => {
        setIsOpen((prev) => ({
            ...prev,
            [menu]: true,
        }));
    };

    const closeMenu = (menu) => {
        setIsOpen((prev) => ({
            ...prev,
            [menu]: false,
        }));
    };

    return (
        <>
            <div className='nav__producto'>
                <div className="nav__background">
                    <button onClick={filterCategoria}>
                        Todas las Categorías
                    </button>
                </div>
                <div className="nav__background">
                    <button>
                        <Link href={"/RolCliente/pedidos?idC=" + param.current.idC}>Pedidos Realizados</Link>
                    </button>
                </div>
                <div className="nav__background">
                    <button onClick={() => {
                        location.reload()
                    }}>
                        Borrar Filtros
                    </button>
                </div>
                <div >{/* ref={menuRef1} */}
                    <button onMouseEnter={() => openMenu("menu1")}
                        onMouseLeave={() => closeMenu("menu1")}
                        className="nav__background"
                    >Categorías
                        {!isOpen.menu1 ? (
                            <i class="fa-solid fa-chevron-up ml-2"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-down ml-2"></i>
                        )}
                    </button>
                    {isOpen.menu1 && (

                        <div onMouseEnter={() => openMenu("menu1")}
                            onMouseLeave={() => closeMenu("menu1")}
                            className="nav__bg--claro bg-white rounded-lg p-2 w-[180px] cursor-pointer">
                            <div>
                                <ul className="">
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Tratamiento Facial</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Protección Solar</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Cuidado Personal</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Desodorantes</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Delineador</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Maquillaje</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Colonias</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Perfume</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Joyeria</li>
                                    <li onClick={filterCategoria} className="nav__subMenus rounded-r-lg">Labial</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <button onMouseEnter={() => openMenu("menu2")}
                        onMouseLeave={() => closeMenu("menu2")} className="nav__background"
                    >Precio
                        {!isOpen.menu2 ? (
                            <i class="fa-solid fa-chevron-up ml-2"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-down ml-2"></i>
                        )}
                    </button>
                    {isOpen.menu2 && (
                        <div onMouseEnter={() => openMenu("menu2")}
                            onMouseLeave={() => closeMenu("menu2")}
                            className="nav__bg--claro bg-white text-center rounded-lg p-2 w-[150px] cursor-pointer">
                            <ul className="">
                                <li onClick={filterPriceUp} className="nav__subMenus rounded-r-lg">Por Mayor</li>
                                <li onClick={filterPriceDown} className="nav__subMenus rounded-r-lg">Por Menor</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div >
                    <button onMouseEnter={() => openMenu("menu3")}
                        onMouseLeave={() => closeMenu("menu3")}
                        className="nav__background"
                    >Stock
                        {!isOpen.menu3 ? (
                            <i class="fa-solid fa-chevron-up ml-2"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-down ml-2"></i>
                        )}
                    </button>
                    {isOpen.menu3 && (
                        <div onMouseEnter={() => openMenu("menu3")}
                            onMouseLeave={() => closeMenu("menu3")}
                            className="nav__bg--claro bg-white rounded-lg p-2 w-[90px] cursor-pointer">
                            <ul className="">
                                <li onClick={filterStockUp} className="nav__subMenus rounded-r-lg">Stock +</li>
                                <li onClick={filterStockDown} className="nav__subMenus rounded-r-lg">Stock -</li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default CategoriaNavBar;
