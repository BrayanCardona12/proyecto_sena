import { formatter } from 'log/const'
import logCardProducto from 'log/logCardProducto'
import React from 'react'
import Link from 'next/link'

function CardProdNew({ vendedor, dataCar, cliente, x }) {

    let { changeInput, cantidad, error, addCar, statusCar } = logCardProducto(x, dataCar)

    return (
        <div key={x.idProducto} className='galeria_content'>

            {vendedor ? (
                <div className="card_header">
                    <Link style={{ fontSize: '2rem', color: 'green' }} href={"/RolVendedor/actProducto/" + x.idProducto}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>

                    <span style={{ fontSize: '2rem', color: 'red' }} onClick={async () => {
                        await axios.delete("/api/Crud/insertUpdate/" + x.idProducto)
                        location.href = "/RolVendedor"
                    }}>
                        <i className='bx bx-trash'></i>
                    </span>



                </div>
            ) : ''}

            <Link href='/cliente/detalleProducto'>
                <img src={x.imagen} class='galeria_img' alt='imagen producto' />

                <h4 className='galeria_tipo'>{x.categoria}</h4>
                <h3 className='galeria_marca'>{x.nombre}</h3>
                <p className='galeria_descripcion'>{x.descripcion}</p>
                <h3 className='galeria_cantidad'>Cantidad: {x.cantidad}</h3>
                <h6 className='galeria_precio'>{formatter.format(x.precio)}</h6>
            </Link>
          

            {
                cliente ? (
                    <>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '1.4rem' }}>

                            {
                                statusCar ? <p style={{
                                    padding: '12px',
                                    fontSize: '.9rem',
                                    backgroundColor: 'rgb(77, 186, 55)',
                                    width: '100%',
                                    margin: 'auto',
                                    textAlign: 'center',
                                    borderRadius: '5px'
                                }}>Producto Añadido al Carrito</p>
                                    :
                                    error != "" ? <>
                                        <button onClick={addCar} className='btn_buy'>Agregar al Carrito</button>

                                        {/* <span style={{ backgroundColor: 'gray' }}>+ 🛒</span> */}
                                        <input style={{display:'none'}}  value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(x.cantidad)} />
                                    </> : <>
                                        <button onClick={addCar} className='btn_buy'>Agregar al Carrito</button>

                                        {/* <span  style={{ backgroundColor: 'green' }}>+ 🛒</span> */}
                                        <input style={{display:'none'}}  value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(x.cantidad)} />

                                    </>
                            }
                        </div>
                        <b>{error}</b>
                    </>
                ) : ''
            }
        </div>
    )
}

export default CardProdNew