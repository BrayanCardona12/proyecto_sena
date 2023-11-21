import logformActInsrt from "log/logformActInsrt"




function FormActInsrt() {

    let { Submit, Change, producto } = logformActInsrt()

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
                <input className='form-control' onChange={Change} type="text" value={producto.imagen} name="imagen" />

                <label htmlFor="nombre" className='form-label'>Nombre:</label>
                <input className='form-control' type="text" onChange={Change} name="nombre" value={producto.nombre} />

                <label htmlFor="categoria" className='form-label'>Categoria:</label>

                <select onChange={Change} value={producto.categoria} name='categoria' className="form-control">
                    <option value="Perfume">Perfume</option>
                    <option value="Colonia">Colonia</option>
                    <option value="Joyeria">Joyeria</option>
                    <option value="Maquillaje">Maquillaje</option>
                    <option value="Cuidado de piel">Cuidado de piel</option>
                    <option value="Labial">Labial</option>
                    <option value="Desodorante">Desodorante</option>
                    <option value="Delineador">Delineador</option>
                    <option value="Protección Solar">Protección Solar</option>
                    <option value="Tratamiento Facial">Tratamiento Facial</option>
                </select>


                <label className='form-label' htmlFor="descripcion">Descripcion:</label>
                <textarea className='form-control' value={producto.descripcion} onChange={Change} name="descripcion" rows="2" />


                <label htmlFor="cantidad" className='form-label'>Cantidad Disponible:</label>
                <input className='form-control' type="number" onChange={Change} name="cantidad" value={producto.cantidad} />


                <label htmlFor="precio" className='form-label' >Precio:</label>
                <input className='form-control' onChange={Change} type="number" value={producto.precio} name="precio" />




                <button className="btn btn-success  my-2 mx-auto d-block w-25">Guardar Producto</button>

            </form>
        </div>
    )
}

export default FormActInsrt