import axios from 'axios';
import { formatter } from 'log/formatterInt';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toast';


function pedidos(props) {

    let { data } = props

    let router = useRouter()

    const clickEstado = (e, idP) => {
        let alerta = confirm('¿Estas seguro de que quieres actualizar el estado de este pedido?')

        if (alerta) {
            ; (async () => {
                await axios.patch('/api/compra/', { idP: parseInt(idP), estado: e.target.textContent })

            })();

            toast.success('Pedido actualizado con exito', { backgroundColor: 'green' })

            setTimeout(() => {
                location.reload()
            }, 2000)
        }


    }

    let colores = {
        Solicitado: '#ABABAB',
        Verificando_Pago: '#7D9743',
        Aprobado: 'green',
        Preparando: '#F18926',
        Enviando: '#A78146',
        Entregado: '#51FF00',
        Cancelado: 'red',
    }





    return (
        <>
            <style jsx>{`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1 {
    text-align: center;
}
.body {
    width: 100%;
    min-height: 100vh;
     background-color: rgb(140, 140, 140);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav div {
    width: 100%;
    text-align: center;
    padding: 3px 5px;
}

.cont-pedidos {
    width: 100%;
    margin: auto;
    margin-top: 60px;
    max-width: 800px;
    background-color: aliceblue;
    min-height: 100vh;}
    
    `}</style>


            <div className="body">
                <ToastContainer delay={2000} position='top-right' />
                <div className="nav">
                    <div style={{ backgroundColor: '#ABABAB' }} className="Solicitado">Solicitado</div>
                    <div style={{ backgroundColor: '#7D9743' }} className="VerificandoP">Verificando_Pago</div>
                    <div style={{ backgroundColor: 'green' }} className="Aprobado">Aprobado</div>
                    <div style={{ backgroundColor: '#F18926' }} className="Preparando">Preparando</div>
                    <div style={{ backgroundColor: '#A78146' }} className="Enviando">Enviando</div>
                    <div style={{ backgroundColor: '#51FF00' }} className="Entregado">Entregado</div>
                    <div style={{ backgroundColor: 'red' }} className="Cancelado">Cancelado</div>
                </div>

                <div className="cont-pedidos">
                    <h1>Lista - Pedidos</h1>
                    <table style={{ margin: 'auto' }} border="1">
                        <tbody>
                            <tr>
                                <th>/</th>
                                <th>ID-Pedido</th>
                                <th>ID-Cliente</th>
                                <th>NomCliente</th>
                                <th>Contacto</th>
                                <th>Total</th>
                                <th>F-Solicitud</th>
                                <th>F-Vencimiento</th>
                                <th>Estado</th>
                            </tr>
                            {
                                data.map(x => (
                                    <tr  style={{backgroundColor: `${colores[x.estadoP]}`}} key={x.idPedido}>
                                        <td onClick={() => {router.push('/RolVendedor/detalleP/' + x.idC + '/' + localStorage.getItem('inf') + '/' + x.idPedido)}}>👁 Ver</td>
                                        <td>{x.idPedido}</td>
                                        <td>{x.idC}</td>
                                        <td>{x.nombre}</td>
                                        <td>
                                            <a target='_blank' href={`https://api.whatsapp.com/send?phone=${x.codInt}${x.telefono}`}>📱</a>
                                            <a href={`mailto:${x.correo}`}>📬</a>
                                        </td>
                                        <td>{formatter.format(x.totalP)}</td>
                                        <td>{x.fechaS}</td>
                                        <td>{x.fechaV}</td>
                                        <td ><details >
                                            <summary>{x.estadoP}</summary>

                                            <span style={{ display: 'block' }} onClick={(e) => clickEstado(e, x.idPedido)}>Verificando Pago</span>
                                            <span style={{ display: 'block' }} onClick={(e) => clickEstado(e, x.idPedido)}>Aprobado</span>
                                            <span style={{ display: 'block' }} onClick={(e) => clickEstado(e, x.idPedido)}>Preparando</span>
                                            <span style={{ display: 'block' }} onClick={(e) => clickEstado(e, x.idPedido)}>Enviando</span>
                                            <span style={{ display: 'block' }} onClick={(e) => clickEstado(e, x.idPedido)}>Entregado</span>
                                            <span style={{ display: 'block' }} onClick={(e) => clickEstado(e, x.idPedido)}>Cancelado</span>
                                        </details>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default pedidos

pedidos.getInitialProps = async (ctx) => {
    try {
        const response1 = await axios.get('http://localhost:3000/api/compra/?idV=' + ctx.query.idV);

        return {
            data: response1.data
        };
    } catch (error) {


        return { data: {} };
    }
}