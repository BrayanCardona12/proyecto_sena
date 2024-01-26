import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react"


function actForm(props) {

    let { data: {dd, id} } = props


    let [info, setInfo] = useState({imagen:'', nombre:'', telefono:0, apellido:''})


    let changeInput = ({ target: { name, value } }) => {
        setInfo({ ...info, [name]: value })
    }

    useEffect(() => {{
        
        setInfo({...dd[0]})
    }},[])

   

    return (
        <>
        
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>API</title>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" />
                <link rel="shortcut icon" href="https://rickandmortyapi.com//icons/icon-48x48.png?v=1538abef51e33ef514e8fe1ab9aeab4e" type="image/x-icon" />

            </Head>
            <div className="d-flex flex-column">
                <h1 className="text-center">Form Actualizar Alumno</h1>

                <form className="form" onSubmit={() => {}} >

                    <img  src={info.imagen} style={{ maxWidth: '100px' }} />
                    <label htmlFor="Imagen">Imagen:</label>
                    <input onChange={changeInput} type="text" className="form-control" value={info.imagen} name="imagen" />

                    <label htmlFor="nombre">Nombre:</label>
                    <input onChange={changeInput} type="text" className="form-control" value={info.nombre} name="nombre" />

                    <label htmlFor="nombre">Apellido:</label>
                    <input onChange={changeInput} type="text" className="form-control" value={info.apellido} name="apellido" />
              
                    <label htmlFor="telefono">Telefono:</label>
                    <input onChange={changeInput} value={info.telefono} type="number" className="form-control" name="telefono" />

                    <button onClick={async () => {
                        await axios.put('http://localhost:8080/api/act?id=' + id, info)
                        location.href = '/consumirSpring'
                    }} className="btn btn-success d-block m-auto">Enviar</button>
                </form>

                
            </div>

        </>
    )
}

actForm.getInitialProps = async (ctx) => {
    const dd = await axios.get('http://localhost:8080/api/getPorId?id=' + ctx.query.id)

    return {
        data: {dd :dd.data, id: ctx.query.id}
    }
}

export default actForm