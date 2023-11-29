import axios from 'axios'
import { StyleCardProducto } from 'log/Styles'
import logCardProducto from 'log/logCardProducto'
import Link from 'next/link'
import { formatter } from "log/formatterInt"
import Head from 'next/head'


function CardPrueba({ vendedor, infoProd, dataCar, cliente }) {

    let { changeInput, cantidad, error, addCar, statusCar } = logCardProducto(infoProd, dataCar)

    return (
        <>


            <style jsx>
                {
                    `

.grid_contenido {
display: flex;
flex-wrap: wrap;
gap: 1.2rem;
width: 100%;
}
.card_contenido {
width: 28rem;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
border: 1px solid #e0e0e0;
border-radius: 20px;
}
.card_header {
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
}
.card_header a .fa-pen-to-square {
font-size: 2.2rem;
color: #45a049;
padding: .7rem;
border-radius: 50%;

}
.card_header a .bx-trash {
font-size: 2.3rem;
color: #a72525;
padding: 1rem;
border-radius: 50%;

}
.card_header a .fa-pen-to-square:hover {
color: #59d25f;
}
.card_header a .bx-trash:hover {
color: #ff0000;
}

.card_image img {
width: 150px;
height: 150px;
margin: 0 auto;
display: block;
}
.producto_detalle {
padding: 1rem;
text-align: center;
}

.producto_marca {
font-size: 1.3rem;
color: #b5b5b5;
}
.producto_category {
color: #000000;
font-weight: 500;
}
.producto_title {
margin: .5rem 0;
color: #222f3e;
font-size: 2rem;
}

.producto_desc {
color: #777777;
}

.producto_cantidad {
color: #222f3e;
font-size: 1.6rem;
font-weight: 700;
margin: 1rem 0;
}

.producto_precio {
font-size: 2.6rem;
font-weight: 600;
color: #e74c3c;
}

@media (max-width: 768px) {
.card_contenido {
margin: 0 auto;
display: block;
}
}


`
                }
            </style>

            <main className="card_product">
                <h1 className="form_title">Productos</h1>

                <div className="grid_contenido">
                    <div className="card_contenido">
                        {vendedor ? (
                            <div className="card_header">
                                <Link href={"/RolVendedor/actProducto/" + infoProd.idProducto}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>

                                <span onClick={async () => {
                                    await axios.delete("/api/Crud/insertUpdate/" + infoProd.idProducto)
                                    location.href = "/RolVendedor"
                                }}>
                                    <i className='bx bx-trash'></i>
                                </span>



                            </div>
                        ) : ''}

                        <div className="card_image">
                            <img src={infoProd.imagen} alt="img-producto" />
                        </div>
                        <div className="producto_detalle">
             
                            <span className="producto_category">{infoProd.categoria}</span>
                            <h4 className="producto_title">{infoProd.nombre}</h4>
                            <p className="producto_marca">{infoProd.marca}</p>
                            <p className="producto_desc">{infoProd.descripcion}</p>
                            <p className="producto_cantidad">Cantidad: {infoProd.cantidad}</p>
                            <p className="producto_precio">{formatter.format(infoProd.precio)}</p>
                        </div>
                    </div>


                </div>

                {
          cliente ? (
            <>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '1.4rem' }}>

                {
                  statusCar ? <p style={{
                    padding: '12px',
                    fontSize: '.6rem',
                    backgroundColor: 'rgb(77, 186, 55)',
                    width: '50%',
                    margin: 'auto',
                    textAlign: 'center',
                    borderRadius: '5px'
                  }}>Producto Añadido al Carrito</p>
                    :
                    error != "" ? <>
                      <span style={{ backgroundColor: 'gray' }}>+ 🛒</span>
                      <input value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(infoProd.cantidad)} />
                    </> : <>
                      <span onClick={addCar} style={{ backgroundColor: 'green' }}>+ 🛒</span>
                      <input value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(infoProd.cantidad)} />

                    </>
                }
              </div>
              <b>{error}</b>
            </>
          ) : ''
        }

            </main>
        </>

    )
}

export default CardPrueba