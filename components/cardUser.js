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
    position: relative;
    border-radius: 10px;
  
  }
  
  .cont-user img {
    width: 40%;
  }

  .wasa {
    background-color: #25D366;
    padding: 4px;

    border-radius: 10px;
    font-size:1.3rem;


  }

  .email {
    background-color: rgb(201, 75, 40);
    padding: 4px;

    border-radius: 10px;
    font-size:1.3rem;
  }

  .c-se {
    position: absolute;
    right:0;
    bottom:0;
  }



`}
      </style>


      <div style={{ position: 'relative' }}>
        <Link href={`/RolCliente/${datos.id}/?idC=` + localStorage.getItem('inf')}>
          <div className="cont-user">
            <img src={datos.imagen} />
            <div className="cont-user-info">
              <h1>{datos.nombre}</h1>
              <h3>Vendedor | {datos.pais}</h3>
              <p>{"N.I: " + datos.numDoc}</p>
            </div>

          </div>
        </Link>
        <div className='c-se'>
          <a href={`mailto:${datos.correo}`} className='email'>📬</a>
          <a target='_blank' href={`https://api.whatsapp.com/send?phone=${datos.codInt}${datos.telefono}`} className='wasa'>
          📞
        </a>
        </div>
        
      </div>


    </>

  )
}

export default CardUser