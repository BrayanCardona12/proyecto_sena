import axios from "axios"
import { useState, useEffect } from "react"

function getProductos(props) {

  const [productos, setProductos] = useState([])
 
if (props) {
  
  useEffect(() => {
    async function getProductos() {
      const { data } = await axios.post('/api/Crud/selectProductos', { id: props.id })
      setProductos(data)
    }

    getProductos()

  }, [])
  return {productos:productos}
}else {

  useEffect(() => {
    async function getProductos() {
      const { data } = await axios.post('/api/Crud/selectProductos', { id: localStorage.getItem('inf') })
      setProductos(data)
    }

    getProductos()

  }, [])
  return {productos:productos}
}

   


  

}

export default getProductos