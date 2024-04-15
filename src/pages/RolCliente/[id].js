import axios from 'axios';
import CardCarritoCompra from 'components/CardCarritoCompra';
import CardProdNew from 'components/CardProdNew';
import CardProducto from 'components/CardProducto'
import CategoriaNavBar from 'components/CategoriaNavBar';
import NavBarHome from 'components/NavBarHome';
import { formatter, host } from 'log/const';
import LogCloseSesion from 'log/logCloseSesion';
import logFilterProdUsersInput from 'log/logFilterProdUsersInput';
import logOtherMethodsFilter from 'log/logOtherMethodsFilter';
import Head from 'next/head';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toast';


function InfoCatalogo(props) {

  
  let { data: { data1, data2, data3, identCli, nom } } = props;

  let { closeSesion } = LogCloseSesion()

  let { Change, textInputFilter, cardFilter, setCardFilter } = logFilterProdUsersInput(data1)

  let { filterPriceDown, filterPriceUp, filterStockUp, filterStockDown, filterCategoria, total } = logOtherMethodsFilter(data1, cardFilter, setCardFilter)


  const router = useRouter()

  let par = useParams()
  let parametros = useRef({ idV: par.id, idC: identCli })

  

  return (
    <>

      <Head>
        <link rel="stylesheet" href="/style/estilosNavBarHome.css" />
        <link rel="stylesheet" href="/style/producto.css" />
        <link rel="stylesheet" href="/style/menuCategorias.css" />
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
        <title>Vista | Cliente</title>
      </Head>


      <NavBarHome

        Change={Change}
        carrito={true}
        closeSesion={closeSesion}
        textInputFilter={textInputFilter}
        infoCarShop={[...data3]}
        parametros={parametros}
        total={total}
        home={false}
        pedidos={false}


      />

      <section className='productos section_Pagin'>
        <h2 className="title_galeria">Productos</h2>

        <CategoriaNavBar

          filterCategoria={filterCategoria}
          filterStockUp={filterStockUp}
          filterStockDown={filterStockDown}
          filterPriceDown={filterPriceDown}
          filterPriceUp={filterPriceUp}
          param={parametros}

        />

        <div className='galeria'>
          <ToastContainer delay={7000} position='bottom-center'/>

          {
            cardFilter.length != 0 ?
              cardFilter.map((x) => (
                <CardProdNew  key={x.idProducto} toast={toast} dataCar={[...data2]} cliente={true} x={x} vendedor={false} />

                
              )) : [...data1].length == 0 ? <h1>No hay productos disponibles</h1> : [...data1].map((x) => (



                <CardProdNew toast={toast} key={x.idProducto} dataCar={[...data2]} cliente={true} x={x} vendedor={false} />

              ))}

        </div>
      </section>
    </>
  )
}





InfoCatalogo.getInitialProps = async (ctx) => {

  try {
    const response1 = await axios.get(host + '/api/Crud/selectProductos/' + ctx.query.id);
    const response2 = await axios.put(host + '/api/CarShop/', { idC: parseInt(ctx.query.idC), idV: parseInt(ctx.query.id) });
    const response3 = await axios.patch(host + '/api/CarShop/', { idC: parseInt(ctx.query.idC), idV: parseInt(ctx.query.id) });

    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;

    const info = {
      data1,
      data2,
      data3,
      identCli: ctx.query.idC,
      nom: ctx.query.nom,
    }


    return {
      data: JSON.parse(JSON.stringify(info))
    };
  } catch (error) {


    return { data: {} };
  }
}


export default InfoCatalogo