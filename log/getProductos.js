import axios from "axios"
import { useState, useEffect } from "react"

function getProductos() {

  const [productos, setProductos] = useState()

  useEffect(() => {


    (async () => {
      try {
        const { data } = await axios.post('/api/Crud/selectProductos', { id: localStorage.getItem('inf') })
        setProductos(data)
      } catch (err) {
        console.log('e');
      }

    })()




  }, [])
  return { productos: productos }
}








export default getProductos