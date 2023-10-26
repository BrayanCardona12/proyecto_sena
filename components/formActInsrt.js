import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


function FormActInsrt() {

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


    return (
        <div>

            <style jsx>
                {`
                .form-actInsert {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                  }
                `}
            </style>

            <form className="form-actInsert" onSubmit={Submit}>

                <h1 className='text-center'>Form</h1>

       


                <label htmlFor="imagen" className='form-label' >Imagen:</label>
                <input className='form-control' onChange={Change} type="text" value={producto.imagen} name="imagen"  />

                <label htmlFor="nombre" className='form-label'>Nombre:</label>
                <input className='form-control' type="text" onChange={Change} name="nombre" value={producto.nombre} />

                <label htmlFor="categoria" className='form-label'>Categoria:</label>
                <input className='form-control' type="text" onChange={Change} name="categoria" value={producto.categoria} />


                <label className='form-label' htmlFor="descripcion">Descripcion:</label>
                <textarea className='form-control' value={producto.descripcion} onChange={Change} name="descripcion" rows="2" />


                <label htmlFor="cantidad" className='form-label'>Cantidad Disponible:</label>
                <input className='form-control' type="number" onChange={Change} name="cantidad" value={producto.cantidad} />


                <label htmlFor="precio" className='form-label' >Precio:</label>
                <input className='form-control' onChange={Change} type="number" value={producto.precio} name="precio"  />



               
                <button className="btn btn-success  my-2 mx-auto d-block w-25">Guardar Producto</button>

            </form>
        </div>
    )
}

export default FormActInsrt