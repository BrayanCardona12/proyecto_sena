import axios from "axios";
import NavBarHome from "components/NavBarHome";
import { formatter, host } from "log/const";
import LogCloseSesion from "log/logCloseSesion";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toast";


export default function DetalleP({ data }) {

    let router = useRouter()

    let { closeSesion } = LogCloseSesion()

    if (data[0] != { error: true }) {
        toast.error('Ups, ha ocurrido un error en el servidor, intenta mas tarde')
    }

    return (

        <>
            <Head>

                <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />

                <link rel="stylesheet" href="/style/estilosNavBarHome.css" />
                <title>Detalle Producto</title>
            </Head>

            <button onClick={router.back} style={{ color: 'white', fontSize: '20px', position: 'fixed', right: 0, bottom: 0 }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Regresar</button>

            <NavBarHome closeSesion={closeSesion} carrito={false} pedidos={true} />

            <ToastContainer delay={5000} position="bottom-center" />
            <style jsx>
                {
                    `
                        
                        /*DETALLE PRODUCTO CLIENTE*/
.detalle_informacion {
    padding: 10px;
}
.detalle_texto {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 25px;
}

.detalle_titulo {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 25px;
}

.detalle_precio {
    font-size: 30px;
    font-weight: 700;
    color: #696969;
    margin-bottom: 25px;
}

.detalle_flex {
    display: flex;
    column-gap: 10px;
    margin-bottom: 25px;
}

.cantidad_border {
    border: 1px solid #696969;
    padding: 15px;
    font-size: 18px;
}

.bt_carrito {
    background-color: #F76308;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
}
.bt_carrito:hover {
    background-color: #f76408de;
    transition: 0.3s;
}
.titulo_info {
    font-size: 20px;
    font-size: 500;
    margin-bottom: 15px;
}

.detalle_descripcion {
    font-size: 17px;
    text-align: justify;

}
@media (min-width: 768px) {
    .detalle {
        margin-top: 20px;
    }
    .detalle_contenido {
        max-width: 1500px;
        margin: 0 auto;
    }

    .detalle_grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
    }

    .imagen_product {
        margin: 0 auto;
    }
}
                        
                        `
                }
            </style>

          
          {
                data[0] == { errorr: true } ? <h1>Error, en el sistema, por favor intenta mas tarde</h1> : <main className='section_Pagin'>
                    <section className='detalle'>

                        <div className='detalle_grid detalle_contenido'>
                      
                            <div className='detalle_imagen'>
                                <img className='imagen_product' src={data[0].imagen} alt='detalle producto' />
                            </div>

                            <div className='detalle_informacion'>
                                <h3 className='detalle_texto'>{data[0].categoria}</h3>
                                <h1 className='detalle_titulo'>{data[0].marca}</h1>
                                <p className='detalle_precio'>{formatter.format(data[0].precio)}</p>
                                <div className='detalle_flex'>
                                    <b>Cantidad:</b>
                                    <p>{data[0].cantidad}</p>

                                </div>
                                <h2 className='titulo_info'>Detalle del Producto</h2>
                                <p className='detalle_descripcion'>{data[0].descripcion}</p>
                            </div>

                        </div>
                    </section>

                    {/* <section className='mt-9'>
                        <h1 className='carrusel__titulo'>Otros Productos</h1>
                        < Carrusel items={items} />
                    </section> */}
                </main>


            }

        </>




    )
}


DetalleP.getInitialProps = async (ctx) => {


    try {

        const { data } = await axios.get(`${host}/api/Crud/insertUpdate/${ctx.query.id}`, [ctx.query.id])

        return {
            data: JSON.parse(JSON.stringify(data))

        }
    } catch (error) {

        return {
            data: [{
                errorr: true
            }]
        }

    }

}
