import Link from 'next/link'
import React from 'react'

function CardUser({ datos }) {
  return (
    <>
      <style jsx>
        {`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  .cont-user {
    font-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
    max-width: 300px;
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    background-color: rgb(216, 154, 61);
    text-align: center;
  
    border-radius: 10px;
  
  }
  
  .cont-user img {
    width: 40%;
  }



`}
      </style>

      <Link href={`/RolCliente/${datos.id}/?idC=`+ localStorage.getItem('inf')}>
        <div className="cont-user">
          <img src={datos.imagen} />
          <div className="cont-user-info">
            <h1>{datos.nombre}</h1>
            <h3>Vendedor | {datos.pais}</h3>
            <p>{datos.correo}</p>
          </div>
        </div>
      </Link>

    </>

  )
}

export default CardUser