import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function logformActInsrt() {


    const router = useRouter()

    let [producto, setProducto] = useState({
        imagen: "",
        nombre: "",
        categoria:"",
        descripcion: "",
        cantidad:0,
        estado:"disponible",
        precio: 0,
        idVendedor: 0

    })

    useEffect( () => {
        setProducto({...producto, idVendedor: parseInt(localStorage.getItem('inf'))})

       async  function getInfo(id) {
            const { data } = await axios.get(`/api/Crud/insertUpdate/${id}`)

            let [info] = data
            setProducto({...info})
        }

        if (router.query.id) {
            getInfo(router.query.id)
        }



    },[])



    const Change = ({ target: { name, value } }) => {
        setProducto({ ...producto, [name]: value })
        
    }



    const Submit = async (e) => {
        e.preventDefault()

        if (router.query.id) {

            await axios.put(`/api/Crud/insertUpdate/${router.query.id}`, { ...producto })
            router.push('/RolVendedor')

        } else {

            await axios.post("/api/Crud/insertUpdate", producto)
            router.push('/RolVendedor')
        }



    }



  return {Submit, Change, producto, setProducto}
}

export default logformActInsrt