import { formatter } from 'log/const'
import logCardProducto from 'log/logCardProducto'
import React from 'react'
import Link from 'next/link'
import axios  from 'axios'

function CardProdNew({ vendedor, dataCar, cliente, x }) {

    let { changeInput, cantidad, error, addCar, statusCar } = logCardProducto(x, dataCar)

    return (
        <div key={x.idProducto} className='galeria_content'>
{/* 
            {vendedor ? (
                <div style={{width:'100%' , display:'flex', justifyContent:'space-around', alignContent:'center'}} className="card_header">
                    <Link class="mx-2 bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded" href={"/RolVendedor/actProducto/" + x.idProducto}>
                        Actualizar
                    </Link>
                   

                    <span className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={async () => {
                        await axios.delete("/api/Crud/insertUpdate/" + x.idProducto)
                        location.href = "/RolVendedor"
                    }}>
                        Eliminar
                    </span>



                </div>
            ) : ''} */}

            <Link href='/cliente/detalleProducto'>
                <img src={x.imagen} class='galeria_img' alt='imagen producto' />
              <p className='galeria_marca'>{x.marca}</p>
                <p className='galeria_categoria'>{x.categoria}</p>
                <h3 className='galeria_tittle'>{x.nombre}</h3>
                <p className='galeria_descripcion'>{x.descripcion}</p>
                <p className='galeria_cantidad'>Cantidad: {x.cantidad}</p>
                <h6 className='galeria_precio'>{formatter.format(x.precio)}</h6>
            </Link>
            
            {vendedor ? (
                <div style={{width:'100%' , display:'flex', justifyContent:'center', alignContent:'center', margin:'12px 0'}} className="card_header">
                    <Link class="mx-2 bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded" href={"/RolVendedor/actProducto/" + x.idProducto}>
                        Actualizar
                    </Link>
                   

                    <span className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={async () => {
                        await axios.delete("/api/Crud/insertUpdate/" + x.idProducto)
                        location.href = "/RolVendedor"
                    }}>
                        Eliminar
                    </span>



                </div>
            ) : ''}
          

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