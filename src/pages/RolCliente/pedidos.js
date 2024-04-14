import axios from 'axios';
import { formatter, host } from 'log/const';
import { ToastContainer, toast } from 'react-toast';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import NavBarHome from 'components/NavBarHome';
import LogCloseSesion from 'log/logCloseSesion';


function pedidos(props) {
    let { data } = props

    // let router = useRouter()
    let { closeSesion } = LogCloseSesion()

    let colores = {
        Solicitado: '#B0B0B0',
        Verificando_Pago: '#FFA07A',
        Aprobado: '#FFD700',
        Preparando: '#A4D3A5',
        Enviando: '#FFA500',
        Entregado: '#98FB98',
        Cancelado: '#FF6347',
    }

    let [datos, setDatos] = useState([...data])

    const filterCategoria = (e) => {

        let sss = data.filter(x => x.estadoP.toLowerCase() == e.target.textContent.toLowerCase())
        setDatos(sss)
    }



    const [rowsLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [rowsToShow, setRowsToShow] = useState([]);

    useEffect(() => {
        setTotalPages(Math.ceil(datos.length / rowsLimit));
        updateRowsToShow();
    }, [datos, rowsLimit, currentPage]);

    const updateRowsToShow = () => {
        const startIndex = currentPage * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        setRowsToShow(datos.slice(startIndex, endIndex));
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const previousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const changePage = (value) => {
        setCurrentPage(Math.max(0, Math.min(value, totalPages - 1)));
    };




    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pedidos Vendedor</title>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
                {/* 
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css" />
                <link rel="stylesheet" href="https://cdn.datatables.net/1.13.7/css/dataTables.bootstrap5.min.css" /> */}

                <link rel="stylesheet" href="/style/estilosNavBarHome.css" />
            </Head>

            <style jsx>
                {`
.bg__file {
    color: #00c3ff;
}
.table_icon {
    background-color: rgba(218, 218, 218, 0.363);
    border-radius: 50%;
    padding: 5px;
    width: 35px;
    height: 35px
}
.table_icon:hover {
    background-color: rgba(218, 218, 218, 0.616);
}
.yt .icon_net {
    color: #FF0000;
    font-size: 18px;
}
.what .icon_net {
    color: #25D366;
    font-size: 20px;
}
        
.nave {
       display: flex;
         justify-content: space-between;
         align-items: center;
     }

     .nave div {
         width: 100%;
         text-align: center;
         padding: 3px 5px;
     }
        
        `}
            </style>

            {data[0] == {error: true} ?
                toast.error('Ups, ha ocurrido un error en el servidor.')
                : ''}

            <NavBarHome home={true} pedidos={true} carrito={false} Change={() => { }} infoCarShop={[]} total={() => { }} textInputFilter={''} parametros={{}} closeSesion={closeSesion} />

            {/* <div className="cont-pedidos">
                    <h1 style={{ textAlign: 'center' }}>Lista - Pedidos</h1>
                    <table id="example" className="table table-striped display responsive nowrap" style={{ width: '90%', margin: 'auto' }}>
                        <tbody>
                            <tr>
                                <th>/</th>
                                <th>ID-Pedido</th>
                                <th>ID-Vendedor</th>
                                <th>NomVendedor</th>
                                <th>Contacto</th>
                                <th>Total</th>
                                <th>F-Solicitud</th>
                                <th>F-Vencimiento</th>
                                <th>Estado</th>
                            </tr>
                            {
                                datos.map(x => (
                                    <tr style={{ backgroundColor: `${colores[x.estadoP]}` }} key={x.idPedido}>
                                        <td >
                                            <Link className='recibo_icon' href={`/facturaCompra/${x.idC}/${x.idV}/${x.idPedido}`}>
                                                <i class="fa-regular fa-file">👁‍🗨</i>
                                            </Link>



                                        </td>
                                        <td>{x.idPedido}</td>
                                        <td>{x.idV}</td>
                                        <td>{x.nombre}</td>
                                        <td>
                                            <div className="social_icons pedido_icon">
                                                <a className='what' target='_blank' href={`https://api.whatsapp.com/send?phone=${x.codInt}${x.telefono}`}><i className='bx bxl-whatsapp'></i></a>
                                                <a className="yt" href={`mailto:${x.correo}`}><i className='bx bxl-gmail'></i></a>
                                            </div>

                                        </td>
                                        <td>{formatter.format(x.totalP)}</td>
                                        <td>{x.fechaS}</td>
                                        <td>{x.fechaV}</td>
                                        <td style={{ backgroundColor: `${colores[x.estadoP]}` }} className="estado_menu">{x.estadoP}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    {data.length == 0 ? <h3 style={{ textAlign: 'center' }}>Tabla Vacia...</h3> : ''}

                </div> */}



            <div className='section_Pagin'>

                <div className="nave">
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Solicitado }} className="Solicitado">Solicitado</div>
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Verificando_Pago }} className="Verificando_Pago">Verificando_Pago</div>
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Aprobado }} className="Aprobado">Aprobado</div>
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Preparando }} className="Preparando">Preparando</div>
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Enviando }} className="Enviando">Enviando</div>
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Entregado }} className="Entregado">Entregado</div>
                    <div onClick={filterCategoria} style={{ backgroundColor: colores.Cancelado }} className="Cancelado">Cancelado</div>
                    <div onClick={() => {
                        setDatos(props.data)
                    }} style={{ backgroundColor: 'darkgray' }} className="Cancelado">Todo</div>
                </div>
                <div className="min-h-screen h-full bg-white flex mt-28 justify-center pt-10 pb-14">
                    <div className="w-full max-w-5xl px-2">
                        <div className='flex justify-between items-center mb-3'>

                            <h1>Tabla Pedidos</h1>

                        </div>
                        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none">
                            <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-2 border-gray-300">
                                <thead className='rounded-lg text-base font-semibold w-full border-b-2 border-gray-300'>
                                    <tr className=" border-x-1 border-t-1 border-gray-400">
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Recibo</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">ID Pedido</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">ID Vendedor</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Nombre Vendedor</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Contacto</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Total</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Fecha Solicitada</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Fecha Vencimiento</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Estado</th>
                                    </tr>
                                </thead>
                                <tbody className="border-x-1 border-gray-400 border-b-1 text-center">
                                    {rowsToShow.map((row, index) => (
                                        <tr style={{ backgroundColor: `${colores[row.estadoP]}` }}
                                            key={index}>
                                            <td className={`py-2 px-3 font-normal text-base ${index == 0
                                                ? "border-t-2 border-gray-300"
                                                : index == rowsToShow?.length
                                                    ? "border-y"
                                                    : "border-t"
                                                } whitespace-nowrap`}>
                                                <a style={{ color: 'black' }} className='recibo_icon' href={`/facturaCompra/${row.idC}/${row.idV}/${row.idPedido}`}>
                                                    <i style={{ color: 'black' }} className="fa-regular fa-file bg__file"></i>
                                                </a>
                                            </td>
                                            <td>{row.idPedido}</td>
                                            <td>{row.idV}</td>
                                            <td>{row.nombre}</td>
                                            <td>
                                                <div className='flex gap-2 justify-center'>
                                                    <div className='table_icon'>
                                                        <a href={`mailto:${row.correo}`} className='contacto yt'>
                                                            <i className='bx bxl-gmail icon_net'></i>
                                                        </a>
                                                    </div>
                                                    <div className='table_icon'>
                                                        <a target='_blank' href={`https://api.whatsapp.com/send?phone=${row.codInt}${row.telefono}`} className='contacto what'>
                                                            <i className='bx bxl-whatsapp icon_net'></i>
                                                        </a>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>{formatter.format(row.totalP)}</td>
                                            <td>{row.fechaS}</td>
                                            <td>{row.fechaV}</td>
                                            <td>{row.estadoP}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='contenido_paginacion'>
                            {/*  justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-2.5 px-1 items-center */}
                            <div>
                                <button className={` mr-1 w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${currentPage == 0
                                    ? "bg-[#cccccc] pointer-events-none"
                                    : " cursor-pointer"
                                    }`}
                                    onClick={previousPage} disabled={currentPage === 0}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button className={`mr-1 w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid bg-[#FFFFFF] cursor-pointer ${currentPage == index
                                        ? "text-blue-600  border-sky-500"
                                        : "border-[#E4E4EB] "
                                        }`}
                                        key={index} onClick={() => changePage(index)} disabled={currentPage === index}>
                                        {index + 1}
                                    </button>
                                ))}
                                <button className={`w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${currentPage == totalPages - 1
                                    ? "bg-[#cccccc] pointer-events-none"
                                    : " cursor-pointer"
                                    }`}
                                    onClick={nextPage} disabled={currentPage === totalPages - 1}>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                            <div>
                                <p>
                                    Visualizando {currentPage * rowsLimit + 1} de{' '}
                                    {Math.min((currentPage + 1) * rowsLimit, datos.length)} ( {datos.length} entradas en total)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer delay={8000} position='top-center' />

        </>
    )
}

export default pedidos

pedidos.getInitialProps = async (ctx) => {
    try {
        const response1 = await axios.get(host + '/api/compra/?idC=' + ctx.query.idC);

        return {
            data: response1.data
        };
    } catch (error) {


        return { data: [{ error: true }] };
    }
}