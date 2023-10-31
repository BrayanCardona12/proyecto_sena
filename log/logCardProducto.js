import axios from 'axios'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function logCardProducto( infoProd, dataCar) {

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




  return {changeInput, cantidad, error, addCar, statusCar}
}

