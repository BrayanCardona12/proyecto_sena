import axios from 'axios'
import { StyleCardProducto } from 'log/Styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function CardProducto({ vendedor, infoProd, dataCar, cliente }) {
  const router = useRouter();

  const [error, setError] = useState("")
  const [statusCar, setStatusCar] = useState()

  const [cantidad, setCantidad] = useState(1)


  const changeInput = ({ target: { value } }) => {
    if (value == '') {
      setCantidad(1)
      return
    }

    if (!parseInt(value)
      || parseInt(value) > parseInt(infoProd.cantidad)
      || parseInt(value) < 1) {
      setError("Error el valor ingresado es invalido")
      setCantidad(value)
      return
    }

    setCantidad(value)
    setError("")
    return

  }

  useEffect(() => {
    const validateProductoCar = () => {

      dataCar.map(x => {
        if (
          x.idVendedor == parseInt(router.query.id) &&
          x.idProducto == infoProd.idProducto &&
          x.idCliente == parseInt(localStorage.getItem('inf')) &&
          x.estado == 'disponible'
        ) {
          setStatusCar(true)


        }
      })

    }

    validateProductoCar()

  }, [])


  const addCar = async () => {
    let validate = true;

    for (const x of dataCar) {

      if (
        x.idVendedor == parseInt(router.query.id) &&
        x.idProducto == infoProd.idProducto &&
        x.idCliente == parseInt(localStorage.getItem('inf')) &&
        x.estado == 'noDisponible'
      ) {
        validate = false;

          (async () => {
            await axios.put('/api/Crud/insertUpdate/', {
              idV: x.idVendedor,
              idP: x.idProducto,
              idC: parseInt(localStorage.getItem('inf')),
              estado: 'disponible',
              cantidadProducto: cantidad
            });
          })();

        setStatusCar(true)
       location.href = `/RolCliente/${router.query.id}?idC=` + localStorage.getItem('inf')
     
        break

      }
    }

    if (validate) {
      (async () => {
        await axios.post('/api/CarShop/', {
          cantidadProducto: cantidad,
          idVendedor: parseInt(router.query.id),
          idProducto: infoProd.idProducto,
          idCliente: parseInt(localStorage.getItem('inf')),
          estado: 'disponible'

        })
      })();

      setStatusCar(true)
      location.href = `/RolCliente/${router.query.id}?idC=` + localStorage.getItem('inf')
  
    }




  }


  return (
    <>
      <style jsx>
        {`${StyleCardProducto()}`}
      </style>
      <div className="cardP">
        {vendedor ? (<div className="botones">
          <Link href={"/RolVendedor/actProducto/" + infoProd.idProducto}>

            <span className="material-icons-sharp btn-a">edit</span>

          </Link>

          <span onClick={async () => {
            await axios.delete("/api/Crud/insertUpdate/" + infoProd.idProducto)
            location.href = "/RolVendedor"
          }}
            className="material-icons-sharp btn-e">delete</span>



        </div>) : ''}




        <img src={infoProd.imagen} />

        <div className="cardPCont">
          <i>{infoProd.categoria}</i>
          <h2>{infoProd.nombre}</h2>
          <p>{infoProd.descripcion}</p>
          <h3>Cantidad: {infoProd.cantidad}</h3>
          <b>{infoProd.precio}</b>
        </div>
        {
          cliente ? (
            <>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '1.4rem' }}>

                {
                  statusCar ? <p style={{
                    padding: '12px',
                    fontSize: '.6rem',
                    backgroundColor: 'rgb(77, 186, 55)',
                    width: '50%',
                    margin: 'auto',
                    textAlign: 'center',
                    borderRadius: '5px'
                  }}>Producto Añadido al Carrito</p>
                    :
                    error != "" ? <>
                      <span style={{ backgroundColor: 'gray' }}>+ 🛒</span>
                      <input value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(infoProd.cantidad)} />
                    </> : <>
                      <span onClick={addCar} style={{ backgroundColor: 'green' }}>+ 🛒</span>
                      <input value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(infoProd.cantidad)} />

                    </>


                }


              </div>
              <b>{error}</b>

            </>


          ) : ''
        }

      </div></>

  )
}

export default CardProducto