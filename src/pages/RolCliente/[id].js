import axios from 'axios';
import CardCarritoCompra from 'components/CardCarritoCompra';
import CardProducto from 'components/CardProducto'
import { useEffect, useState } from 'react';
import path from 'path'



function InfoCatalogo(props) {


  let { data: { data1, data2, data3 } } = props;

  const [dataCar, setDataCar] = useState(data3)
  

  return (
    <>
      <style jsx>
        {
          `
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
        }

        .body {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px
        }

        .input {
          display: none;
        }

        .b1 {
          margin: auto;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          font-size: 45px;
          padding-bottom: 3px;
          width: 8%;
          height: 76px;
          background-color: rgb(0, 70, 117);
          color: rgb(101, 230, 247);
          cursor: pointer;
          transition: all .1s;
          top: -28px;
          border-radius: 1px 1px 20px 20px;
        }


        .ccc {
          position: fixed;
          width: 100%;
          height: 100vh;
          right: -100%;
          background-color: rgba(128, 128, 128, 0.514);
          transition: all .3s;
          display: flex;
          align-items: flex-start;
          justify-content: end;
          overflow: auto;
          

        }

        #cont {
          width: 35%;
          max-width:400px;
          height:100%;
          overflow: auto;
          background-color: white;

        }


        #cont h1 {
          background-color: rgb(52, 52, 252);
          padding: 9px;
          text-align: center;

        }

        #cont p {
          background-color: whitesmoke;
          border-radius: 1px 1px 23px 23px;
          padding: 9px;
        }

        .b2 {
          background-color: rgb(170, 170, 170);
          width: 30px;
          padding: 3px;
          text-align: center;
          font-size: 20px;
          border-radius: 30px;
          position: absolute;
          top: 0;
          right: 0;
        }

        .b2:hover {
          background-color: rgb(190, 190, 190);
        }

        #boton:checked ~ .ccc {
          right: 0px;
          top: 0;
        }

        #boton:checked ~ .b1 {
          right: 0;
          top: -100%;
        }

        #b:target ~ #cont {
          top: -100vh;
        }

        .bloque1 {
            margin: auto;
            width: 80%;
        }

        .bloque1 h1 {
            width: 100%;
            background-color: rgb(26, 26, 126);
            color: rgb(162, 121, 207);

        }




  `
        }</style>

      <div className='body' >

        {data1.map((x) => (

          <CardProducto key={x.idProducto} dataCar={data2} cliente={true} infoProd={x} vendedor={false} />
        ))}

        <input className='input' type="checkbox" id="boton" />
        <label className="b1" htmlFor="boton">🛒</label>


        <div className="ccc">
          <div id="cont">
            <label className="b2" htmlFor="boton"> X </label>
            <h1>🛒 Carrito 🛒</h1>
            {dataCar.map((x) => (
              <CardCarritoCompra key={x.idProducto} datos={x} />
            )
            )}

          </div>
        </div>

      </div>
    </>



  )


}



InfoCatalogo.getInitialProps = async (ctx) => {

  try {
    const response1 = await axios.get('http://localhost:3000/api/Crud/selectProductos/' + ctx.query.id);
    const response2 = await axios.put('http://localhost:3000/api/CarShop/');
    const response3 = await axios.patch('http://localhost:3000/api/CarShop/', { idC: parseInt(ctx.query.idC), idV: parseInt(ctx.query.id) });



//https://qzvrlqj3-3000.use2.devtunnels.ms/
// 'x-forwarded-proto': 'https',
// 'x-forwarded-host': 'qzvrlqj3-3000.use2.devtunnels.ms',

    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;

    const info = {
      data1,
      data2,
      data3
    }


    return {
      data: JSON.parse(JSON.stringify(info))
    };
  } catch (error) {
    // Manejar errores apropiadamente
    console.error(error);
    return { data: {} }; // Otra acción en caso de error
  }
}


export default InfoCatalogo