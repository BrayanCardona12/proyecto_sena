import axios from "axios"
import { uploadFile } from "firebaseConfig/config"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from "react-toast"

function logformActInsrt() {


    const router = useRouter()

    let [producto, setProducto] = useState({
        imagen: "",
        nombre: "",
        categoria: "Perfume",
        marca: "Carmel",
        descripcion: "",
        cantidad: 0,
        estado: "disponible",
        precio: 0,
        idVendedor: 0

    })

    useEffect(() => {
        setProducto({ ...producto, idVendedor: parseInt(localStorage.getItem('inf')) })

        async function getInfo(id) {
            const { data } = await axios.get(`/api/Crud/insertUpdate/${id}`)

            let [info] = data
            setProducto({ ...info })
        }

        if (router.query.id) {
            getInfo(router.query.id)
        }



    }, [])



    const Change = ({ target: { name, value } }) => {
        setProducto({ ...producto, [name]: value })

    }

    const [fileImg, setFileImg] = useState(null)

    let [inputMarca, setInputMarca] = useState(false)

    const changeMarca = (e) => {
        Change({ target: { name: "marca", value: e.target.textContent } })
    }



    const Submit = async (e) => {
        e.preventDefault()

        if (router.query.id) {

            if (fileImg == null) {
                toast.warn('⌛ Cargando...')
                await axios.put(`/api/Crud/insertUpdate/${router.query.id}`, { ...producto })
                router.push('/RolVendedor')
            } else {
                toast.warn('⌛ Cargando...')
                let url = await uploadFile(fileImg)
                await axios.put(`/api/Crud/insertUpdate/${router.query.id}`, { ...producto, imagen: url })
                router.push('/RolVendedor')
            }



        } else {
            toast.warn('⌛ Cargando...')
            let url = await uploadFile(fileImg)

            await axios.post("/api/Crud/insertUpdate", { ...producto, imagen: url })
            router.push('/RolVendedor')
        }



    }



    return { Submit, Change, producto, inputMarca, setInputMarca, changeMarca, setProducto, setFileImg }
}

export default logformActInsrt