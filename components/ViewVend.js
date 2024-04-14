import React, { useState } from 'react'
import LogCloseSesion from 'log/logCloseSesion'
import NavBarVendedor from 'components/NavBarVendedor'
import logFilterProdUsersInput from 'log/logFilterProdUsersInput'
import CardProdNew from 'components/CardProdNew'

function ViewVend({ prod }) {

    let { textInputFilter, Change, cardFilter, setCardFilter } = logFilterProdUsersInput(prod)




    let { closeSesion } = LogCloseSesion()

    return (
        <>


            <NavBarVendedor Change={Change} closeSesion={closeSesion} textInputFilter={textInputFilter} />

            <section className='section_Pagin'>
                <h1 style={{textAlign:'center', fontSize:'20px'}}>Mis Productos</h1>

                {
                    cardFilter.length != 0 ?
                        cardFilter.map((x) => (
                            <CardProdNew key={x.idProducto} dataCar={[]} cliente={false} x={x} vendedor={true} />



                        )) : [...prod].length == 0 ? <h1>No hay productos disponibles</h1> : [...prod].map((x) => (



                            <CardProdNew key={x.idProducto} dataCar={[]} cliente={false} x={x} vendedor={true} />

                        ))}

            </section>
        </>

    )
}

export default ViewVend