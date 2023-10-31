import axios from 'axios'
import { StyleCardProducto } from 'log/Styles'
import logCardProducto from 'log/logCardProducto'
import Link from 'next/link'


function CardProducto({ vendedor, infoProd, dataCar, cliente }) {

  let { changeInput, cantidad, error, addCar, statusCar }= logCardProducto(infoProd, dataCar)

  
  return (
    <>
      <style jsx>
        {`${StyleCardProducto()}`}
      </style>
      <div className="cardP">
        {vendedor ? (<div className="botones">
          <Link href={"/RolVendedor/actProducto/" + infoProd.idProducto}>

            <span className="material-icons-sharp btn-a">edit</span>

          </Link>

          <span onClick={async () => {
            await axios.delete("/api/Crud/insertUpdate/" + infoProd.idProducto)
            location.href = "/RolVendedor"
          }}
            className="material-icons-sharp btn-e">delete</span>

        </div>) : ''}

        <img src={infoProd.imagen} />

        <div className="cardPCont">
          <i>{infoProd.categoria}</i>
          <h2>{infoProd.nombre}</h2>
          <p>{infoProd.descripcion}</p>
          <h3>Cantidad: {infoProd.cantidad}</h3>
          <b>{infoProd.precio}</b>
        </div>
        {
          cliente ? (
            <>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '1.4rem' }}>

                {
                  statusCar ? <p style={{
                    padding: '12px',
                    fontSize: '.6rem',
                    backgroundColor: 'rgb(77, 186, 55)',
                    width: '50%',
                    margin: 'auto',
                    textAlign: 'center',
                    borderRadius: '5px'
                  }}>Producto Añadido al Carrito</p>
                    :
                    error != "" ? <>
                      <span style={{ backgroundColor: 'gray' }}>+ 🛒</span>
                      <input value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(infoProd.cantidad)} />
                    </> : <>
                      <span onClick={addCar} style={{ backgroundColor: 'green' }}>+ 🛒</span>
                      <input value={cantidad} onChange={changeInput} type='number' placeholder='1' min={1} max={parseInt(infoProd.cantidad)} />

                    </>
                }
              </div>
              <b>{error}</b>
            </>
          ) : ''
        }
      </div></>
  )
}

export default CardProducto