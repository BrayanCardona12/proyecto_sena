import axios from 'axios';
import { formatter } from 'log/formatterInt';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toast';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function pedidos(props) {
  let { data } = props

  let router = useRouter()



  let colores = {
    Solicitado: '#ADD8E6',
    Verificando_Pago: '#FFFF99',
    Aprobado: '#00FF00',
    Preparando: '#98FB98',
    Enviando: '#FFA500',
    Entregado: '#008000',
    Cancelado: '#FF0000',
  }


  return (
    <>
      <style jsx>{
        `

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1 {
  text-align: center;
}
.body {
  width: 100%;
  min-height: 100vh;
   background-color: rgb(140, 140, 140);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav div {
  width: 100%;
  text-align: center;
  padding: 3px 5px;
}

.cont-pedidos {
  width: 100%;
  margin: auto;
  margin-top: 60px;
  max-width: 1000px;
  background-color: aliceblue;
  min-height: 100vh;}
  
  `}</style>


      <div className="body">
        <ToastContainer delay={2000} position='top-right' />
        <div className="nav">
          <div style={{ backgroundColor: colores.Solicitado }} className="Solicitado">Solicitado</div>
          <div style={{ backgroundColor: colores.Verificando_Pago }} className="Verificando_Pago">Verificando_Pago</div>
          <div style={{ backgroundColor: colores.Aprobado }} className="Aprobado">Aprobado</div>
          <div style={{ backgroundColor: colores.Preparando }} className="Preparando">Preparando</div>
          <div style={{ backgroundColor: colores.Enviando }} className="Enviando">Enviando</div>
          <div style={{ backgroundColor: colores.Entregado }} className="Entregado">Entregado</div>
          <div style={{ backgroundColor: colores.Cancelado }} className="Cancelado">Cancelado</div>
        </div>

        <div className="cont-pedidos">
          <h1>Lista - Pedidos</h1>
          <table style={{ margin: 'auto' }} border="1">
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
                data.map(x => (
                  <tr style={{ backgroundColor: `${colores[x.estadoP]}` }} key={x.idPedido}>
                    <td >
                      <Link href={`/facturaCompra/${x.idC}/${x.idV}/${x.idPedido}`}>
                        💾 Ver
                      </Link>



                    </td>
                    <td>{x.idPedido}</td>
                    <td>{x.idV}</td>
                    <td>{x.nombre}</td>
                    <td>
                      <a target='_blank' href={`https://api.whatsapp.com/send?phone=${x.codInt}${x.telefono}`}>📱</a>
                      <a href={`mailto:${x.correo}`}>📬</a>
                    </td>
                    <td>{formatter.format(x.totalP)}</td>
                    <td>{x.fechaS}</td>
                    <td>{x.fechaV}</td>
                    <td >{x.estadoP}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          {data.length == 0 ? <h3 style={{textAlign:'center'}}>Tabla Vacia...</h3> : ''}

        </div>
      </div>
    </>
  )
}

export default pedidos

pedidos.getInitialProps = async (ctx) => {
  try {
    const response1 = await axios.get('http://localhost:3000/api/compra/?idC=' + ctx.query.idC);

    return {
      data: response1.data
    };
  } catch (error) {


    return { data: {} };
  }
}