import { formatter } from 'log/const'
import logCardCarritoCompra from 'log/logCardCarritoCompra'
import React from 'react'

function CardNewCarShop({ x, toast }) {

    let { actCard,
        setActCard,
        setValorInput,
        valorInput,
        deleteCrP,
        error,
        updateCard,
        Change
    } = logCardCarritoCompra({ ...x })

    return (
        <>
            {
                !actCard ? <div className='cart_item'>
                    <div className='cart_image'>
                        <img className='cart_image_client' src={x.imagen} alt='producto' />
                    </div>
                    <div className='cart_name'>
                        <p className='cart_name_text'>{x.nombre}</p>
                    </div>
                    <div className='cart_precio'>
                        <p className='cart_precio_col'>{formatter.format(x.precio)}</p>
                    </div>
                    <div className='cart_cantidad'>

                        <span className='cantidad_lote'>{x.cantidadProducto}</span>

                    </div>

                    <div className='cart_delete'>
                        <button onClick={deleteCrP} ><i className='bx bxs-trash delete_icon'></i></button>
                        <button onClick={() => {
                            setActCard(!actCard)
                            setValorInput(x.cantidadProducto)
                        }} ><i style={{ color: 'orange' }} className='bx bxs-pencil delete_icon'></i></button>
                    </div>

                </div>

                    :


                    <div className='cart_item'>
                        <div className='cart_image'>
                            <img className='cart_image_client' src={x.imagen} alt='producto' />
                        </div>
                        <div className='cart_name'>
                            <p className='cart_name_text'>{x.nombre}</p>
                        </div>
                        <div className='cart_precio'>
                            <p className='cart_precio_col'>{formatter.format(x.precio)}</p>
                        </div>
                        <div className='cart_cantidad'>


                            <input style={{ textAlign: 'center', border: '1px solid black' }} min={1} max={x.cantidad} type="number" onChange={(e) => Change(e, x)} value={valorInput} />


                        </div>


                        <div className='cart_delete'>
                            {error == '' ? <button onClick={updateCard} className="btnCar-save">✅</button> : (
                                <>
                                    <button onClick={deleteCrP} ><i className='bx bxs-trash delete_icon'></i></button>
                                    <button onClick={() => {
                                        setActCard(!actCard)
                                        setValorInput(x.cantidadProducto)
                                    }} ><i style={{ color: 'orange' }} className='bx bxs-pencil delete_icon'></i></button>
                                </>


                            )}


                        </div>

                        {error && toast.error(error)}


                    </div>

            }

        </>


    )
}

export default CardNewCarShop