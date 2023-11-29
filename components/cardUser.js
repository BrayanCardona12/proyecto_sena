import Link from 'next/link'
import React from 'react'

function CardUser({ datos }) {
  //   return (
  //     <>
  //       <style jsx>
  //         {`

  // * {
  //     margin: 0;
  //     padding: 0;
  //     box-sizing: border-box;

  //   }

  //   .cont-user {
  //     font-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  //     max-width: 300px;
  //     display: flex;
  //     padding: 12px;
  //     justify-content: center;
  //     align-items: center;
  //     background-color: rgb(216, 154, 61);
  //     text-align: center;
  //     position: relative;
  //     border-radius: 10px;

  //   }

  //   .cont-user img {
  //     width: 40%;
  //   }

  //   .wasa {
  //     background-color: #25D366;
  //     padding: 4px;

  //     border-radius: 10px;
  //     font-size:1.3rem;


  //   }

  //   .email {
  //     background-color: rgb(201, 75, 40);
  //     padding: 4px;

  //     border-radius: 10px;
  //     font-size:1.3rem;
  //   }

  //   .c-se {
  //     position: absolute;
  //     right:0;
  //     bottom:0;
  //   }



  // `}
  //       </style>


  //       <div style={{ position: 'relative' }}>
  //         <Link href={`/RolCliente/${datos.id}/?idC=` + localStorage.getItem('inf') +  '&nom=' +  datos.nombre}>
  //           <div className="cont-user">
  //             <img src={datos.imagen} />
  //             <div className="cont-user-info">
  //               <h1>{datos.nombre}</h1>
  //               <h3>Vendedor | {datos.pais}</h3>
  //               <p>{"N.I: " + datos.numDoc}</p>
  //             </div>

  //           </div>
  //         </Link>
  //         <div className='c-se'>
  //           <a href={`mailto:${datos.correo}`} className='email'>📬</a>
  //           <a target='_blank' href={`https://api.whatsapp.com/send?phone=${datos.codInt}${datos.telefono}`} className='wasa'>
  //           📞
  //         </a>
  //         </div>

  //       </div>


  //     </>

  //   )

  return (<>

  <style jsx> 
{
  `
  .vendedor_card h2{
    text-align: center;
}
.wrapper {
    background-color: #ECF0F3;
    box-shadow: 0 1rem 2rem rgba(31, 38, 135, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 1rem;
    max-width: 300px
}

.social_icons a {
    background-color: #ecf0f3;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25rem;
    padding: 2rem;
}

.wrapper .img_area {
    margin: 0 auto;
    background-color: #e06b11;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #FFFFFF, 3px 3px 5px #ceced1;
}

.wrapper .img_area {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img_area .inner_area {
    height: calc(100% - 10px);
    width: calc(100% - 10px);
    border-radius: 50%;
}
.inner_area img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    font-size: 2.3rem;
    font-weight: 500;
    color: #31344b;
    margin: 1rem 0 .5rem 0;
}

.about {
    font-weight: 400;
    color: #44476a;
    font-size: 1.5rem;
}
.description {
    font-size: 1.2rem;
    text-align: center;
    margin: .5rem 0;
}
.rol {
    font-size: 1.5rem;
    color: #716e75;
    font-weight: 900;
}

.social_icons {
    margin: 15px 0 25px 0;
}

.social_icons a {
    height: 40px;
    width: 40px;
    display: inline-flex;
    margin: 0 .5rem;
    border-radius: 50%;
    position: relative;
}

.social_icons a:hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ECF0F3;
    border-radius: 50%;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 5px #ceced1;
}

.social_icons a i {
    font-size: 2rem;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 4rem;
    position: relative;
    z-index: 5;
}

.social_icons a.yt i {
    color: #FF0000;
}
.social_icons a.what i {
    color: #25D366;
} 

.icon {
    margin-left: 21rem;
}

.wrapper .icon i {
    font-size: 2.3rem;
    color: #e74c3c;
}

  `
}
  </style>
  <div style={{position:'relative'}}>
 <Link  href={`/RolCliente/${datos.id}/?idC=` + localStorage.getItem('inf') +  '&nom=' +  datos.nombre}>
<div className="wrapper">
     
      <div className="img_area">
        <div className="inner_area">
          <a href="productosVen.html" className="cliente_link">
            <img src={datos.imagen} alt="vendedor" />
          </a>
        </div>
      </div>
      <div className="name">{datos.nombre}</div>
      <div className="about">{datos.ciudad + ' | ' + datos.pais}</div>

      <div className="description" style={{color:'darkgray'}}>{datos.correo}</div>

      <div className="rol">Vendedor</div>
      
    </div>


  </Link>
  <div style={{position:'absolute', bottom:'0', width:'100%', display:'flex', justifyContent:'space-between'}}  className="social_icons">
        <a href={`mailto:${datos.correo}`} className="yt"><i className='bx bxl-gmail'></i></a>
        <a target='_blank' href={`https://api.whatsapp.com/send?phone=${datos.codInt}${datos.telefono}`}  className="what"><i className='bx bxl-whatsapp'></i></a>
      </div>
  </div>
 
  
    


  </>)
}

export default CardUser