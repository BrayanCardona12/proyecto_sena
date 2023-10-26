import axios from "axios"

function CardCarritoCompra({ datos }) {

  const deleteCrP = async () => {
    await axios.put('/api/Crud/insertUpdate/', {   
      idV: datos.idVendedor,
      idP: datos.idProducto,
      idC: parseInt(localStorage.getItem('inf')),
      estado:'noDisponible',
      cantidadProducto: datos.cantidadProducto
    })

    location.href = `/RolCliente/${datos.idVendedor}?idC=`+localStorage.getItem('inf')
  }


  return (
    <>
      <style jsx>
        {`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  
}

.card-user {
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
  margin: 8px auto;
}

.card-user img {
  max-width: 50%;
  max-height: 160px;
  object-fit: cover;
}

.card-user-info input {
display: inline;

}

.card-user-info-p {
  display: inline;
}

.card-user-icons {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.4rem;

}

.card-user-icons span {
    background-color: orange;
    padding: 6px;
    border-radius: 6px;
}



`}
      </style>


      <div className="card-user">
        <div className="card-user-icons">
          <span className="cont-user-span">✍</span>
          <span onClick={deleteCrP} className="cont-user-span">❌</span>

        </div>
        <img src={datos.imagen} />
        <div className="card-user-info">
          <h1>{datos.nombre}</h1>
          <p>Valor Unitario: ${datos.precio}</p>
          <p className="card-user-info-p">Cantidad: </p>
          <input disabled value={datos.cantidadProducto} />
          <h2>Total: ${parseInt(datos.precio) * parseInt(datos.cantidadProducto)}</h2>
        </div>
      </div>





    </>
  )
}

export default CardCarritoCompra