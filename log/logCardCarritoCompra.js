import axios from "axios"
import { useRef, useState } from "react"

export default function logCardCarritoCompra(datos) {
    let [actCard, setActCard] = useState();
    let [valorInput, setValorInput] = useState();
    let [error, setError] = useState('');
  
    const deleteCrP = async () => {
      await axios.put('/api/Crud/insertUpdate/', {
        idV: datos.idVendedor,
        idP: datos.idProducto,
        idC: parseInt(localStorage.getItem('inf')),
        estado: 'noDisponible',
        cantidadProducto: datos.cantidadProducto
      })
  
      location.href = `/RolCliente/${datos.idVendedor}?idC=` + localStorage.getItem('inf')
    }
  
    const Change = ({ target: { value } }, d) => {
  
      if (value == '') {
        setValorInput(1)
        setError('')
        return
      }
  
      if (parseInt(value) < 1) {
        setValorInput(d.cantidadProducto)
        setError('')
        return
      }
  
  
      if (!parseInt(value)
        || parseInt(value) > parseInt(d.cantidad)
      ) {
        setError('Error, cantidad no disponible')
        setValorInput(value)
        return
      }
  
  
      setValorInput(value)
      setError('')
  
      return
  
  
    }
  
    const updateCard = async () => {
      await axios.put('/api/Crud/insertUpdate/', {
        idV: datos.idVendedor,
        idP: datos.idProducto,
        idC: parseInt(localStorage.getItem('inf')),
        estado: 'disponible',
        cantidadProducto: valorInput
      })
  
      location.href = `/RolCliente/${datos.idVendedor}?idC=` + localStorage.getItem('inf')
    }
  return {
    actCard,
    setActCard,
    valorInput,
    setValorInput,
    error,
    Change,
    updateCard,
    deleteCrP
  }
}

 