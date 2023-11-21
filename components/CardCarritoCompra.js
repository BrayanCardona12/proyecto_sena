import { formatter } from "log/formatterInt"
import logCardCarritoCompra from "log/logCardCarritoCompra"


function CardCarritoCompra({ datos }) {

  let { actCard,
    setActCard,
    setValorInput,
    valorInput,
    deleteCrP,
    error,
    updateCard,
    Change
  } = logCardCarritoCompra(datos)


  


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
  font-size: 1.7rem;

}

.card-user-icons span {

    background-color: orange;
    padding: 6px;
    border-radius: 6px;
}

.btnCar-save {
  display: block;
  margin: 5px auto;
  padding: 5px 30px;
  background-color: rgb(78, 197, 88);
  border: none;
  border-radius: 5px;


}

}



`}
      </style>


      {
        !actCard ? <div className="card-user">
          <div className="card-user-icons">
            <span onClick={() => {
              setActCard(!actCard)
              setValorInput(datos.cantidadProducto)
            }} className="cont-user-span">✍</span>
            <span onClick={deleteCrP} className="cont-user-span">❌</span>
          </div>
          <img src={datos.imagen} />
          <div className="card-user-info">
            <h2>{datos.nombre}</h2>
            <p>Valor Unitario: {formatter.format(datos.precio)}</p>
            <p className="card-user-info-p">Cantidad: </p>
            <input disabled value={datos.cantidadProducto} />
            <h4>Total: {formatter.format( parseInt(datos.precio) * parseInt(datos.cantidadProducto))}</h4>
          </div>
        </div>
          :
          <div className="card-user">
            <img src={datos.imagen} />
            <div className="card-user-info">
              <h1>{datos.nombre}</h1>
              <p>Valor Unitario: ${datos.precio}</p>
              <p className="card-user-info-p">Cantidad: </p>

              <input type="number" onChange={(e) => Change(e, datos)} value={valorInput} />
              <i style={{ display: 'block' }}>Disponibles: {datos.cantidad}</i>
              {error && <b>{error}</b>}
              {error == '' ? <button onClick={updateCard} className="btnCar-save">Guardar Cambios</button> : ''}
            </div>
          </div>
      }



    </>
  )
}

export default CardCarritoCompra