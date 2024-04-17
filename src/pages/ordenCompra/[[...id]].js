import axios from "axios";
import { formatter, host } from "log/const"
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";


function facturaEjem(props) {



    let { data: { data1, data2, data3 } } = props;



    const total = (d) => {
        let total = 0
        for (let i of d) {
            total += i.precio * i.cantidadProducto
        }

        return formatter.format(total)
    }

    const total2 = (d) => {
        let total = 0
        for (let i of d) {
            total += i.precio * i.cantidadProducto
        }

        return total
    }

    const router = useRouter()
    let para = useParams()
    let [loading, setLoading] = useState(false)

    const idsPPedidos = (d) => {
        let ids = ''
        for (let i of d) {
            ids += `${i.idProducto},`
        }

        ids = ids.substring(0, ids.length - 1);

        return ids
    }

    const cantidaddd = (d) => {
        let ids = ''
        for (let i of d) {
            ids += `${i.cantidadProducto},`
        }

        ids = ids.substring(0, ids.length - 1);

        return ids
    }

    const valorUnitt = (d) => {
        let ids = ''
        for (let i of d) {
            ids += `${i.precio},`
        }

        ids = ids.substring(0, ids.length - 1);

        return ids
    }

    const fechass = () => {

        const fechaActual = new Date();

        const fechaVencimiento = new Date(fechaActual);

        fechaVencimiento.setDate(fechaVencimiento.getDate() + 10);

        const formatoFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const fechaVencimientoFormateada = fechaVencimiento.toLocaleDateString('es-CO', formatoFecha);

        return {
            FActual: fechaActual.toLocaleDateString('es-CO', formatoFecha),
            FVencimiento: fechaVencimientoFormateada
        }
    }

    const comprarr = () => {
        let alerta = confirm('Esta a punto de realizar una compra, ¿está seguro de quererla realizar?')

        if (alerta) {
            setLoading(true)
                ; (async () => {

                    await axios.post('/api/compra/', {
                        idV: parseInt(para.id[0]),
                        idC: parseInt(para.id[1]),
                        idProductos: idsPPedidos(data3),
                        estadoP: 'Solicitado',
                        totalP: total2(data3),
                        fechaS: fechass().FActual,
                        fechaV: fechass().FVencimiento,
                        envio: data2[0].pais != 'CO' ? 'si' : 'no',
                        cant: cantidaddd(data3),
                        valUnit: valorUnitt(data3),

                    })


                    await axios.put('/api/compra/', {
                        idV: parseInt(para.id[0]),
                        idC: parseInt(para.id[1]),
                    })

                    setLoading(false)
                })();

            router.push('/RolCliente/pedidos/?idC=' + parseInt(para.id[1]))
        }
    }




    return (
        <>

            <style jsx>{
                `


.html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  
}

.body {
    margin: 0;

}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block
}

audio,
canvas,
progress,
video {
    display: inline-block;
    vertical-align: baseline
}

audio:not([controls]) {
    display: none;
    height: 0
}

[hidden],
template {
    display: none
}

a {
    background-color: transparent
}

a:active,
a:hover {
    outline: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

b,
strong {
    font-weight: bold
}

dfn {
    font-style: italic
}

h1 {
    font-size: 1em;
    margin: 0.67em 0
}

mark {
    background: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sup {
    top: -0.5em
}

sub {
    bottom: -0.25em
}

img {
    border: 0
}

svg:not(:root) {
    overflow: hidden
}

figure {
    margin: 1em 40px
}

hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0
}

pre {
    overflow: auto
}

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
.html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],
.html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type="checkbox"],
input[type="radio"] {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    box-sizing: content-box
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: bold
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,
th {
    padding: 0
}

.html {
    font-size: 10px;
    line-height: 1.5;
    color: #000;
    background: #ddd;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 6rem auto 0;
    max-width: 800px;
    background: white;
    border: 1px solid #aaa;
    padding: 2rem
}

.container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem
}

*,
*:before,
*:after {
    -moz-box-sizing: inherit;
    box-sizing: inherit
}




.group:after,
.row:after,
.invoicelist-footer:after {
    content: "";
    display: table;
    clear: both
}

a {
    color: #009688;
    text-decoration: none
}

p {
    margin: 0
}

.row {
    position: relative;
    display: block;
    width: 100%;
    font-size: 0
}

.col,
.logoholder,
.me,
.info,
.bank,
[class*="col-"] {
    vertical-align: top;
    display: inline-block;
    font-size: 1rem;
    padding: 0 1rem;
    min-height: 1px
}

.col-4 {
    width: 25%
}

.col-3 {
    width: 33.33%
}

.col-2 {
    width: 50%
}

.col-2-4 {
    width: 75%
}

.col-1 {
    width: 100%
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.control-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #009688;
    color: white;
    line-height: 4rem;
    height: 4rem
}

.control-bar .slogan {
    font-weight: bold;
    font-size: 1rem;
    display: inline-block;
    margin-right: 2rem
}

.control-bar label {
    margin-right: 1rem
}

.control-bar a {
    margin: 0;
    padding: .5em 1em;
    background: rgba(255, 255, 255, 0.8)
}

.control-bar a:hover {
    background: #fff
}

.control-bar input {
    border: none;
    background: rgba(255, 255, 255, 0.2);
    padding: .5rem 0;
    max-width: 30px;
    text-align: center
}

.control-bar input:hover {
    background: rgba(255, 255, 255, 0.3)
}

.hidetax .taxrelated {
    display: none
}

.showtax .notaxrelated {
    display: none
}

.hidedate .daterelated {
    display: none
}

.showdate .notdaterelated {
    display: none
}

header {
    margin: 1rem 0 0;
    padding: 0 0 2rem 0;
    border-bottom: 3pt solid #009688
}

header p {
    font-size: .9rem
}

header a {
    color: #000
}

.logo {
    margin: 0 auto;
    width: auto;
    height: auto;
    border: none;
    fill: #009688
}

.logoholder {
    width: 14%
}

.me {
    width: 30%
}

.info {
    width: 30%
}

.bank {
    width: 26%
}

.section {
    margin: 2rem 0 0
}

.smallme {
    display: inline-block;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
    font-size: .9rem
}

.client {
    margin: 0 0 3rem 0
}

h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    color: #009688
}

.details input {
    display: inline;
    margin: 0 0 0 .5rem;
    border: none;
    width: 50px;
    min-width: 0;
    background: transparent;
    text-align: left
}

h2, h3 {
    color: #009688;
}


.invoice_detail{
	border: solid 1px #009688;
	padding:10px;
	height:25px;
	text-align:center
}


.invoicelist-body {
    margin: 1rem
}

.invoicelist-body table {
    width: 100%
}

.invoicelist-body thead {
    text-align: left;
    border-bottom: 1pt solid #666
}

.invoicelist-body td,
.invoicelist-body th {
    position: relative;
    padding: 1rem
}

.invoicelist-body tr:nth-child(even) {
    background: #ccc
}

.invoicelist-body tr:hover .removeRow {
    display: block
}

.invoicelist-body input {
    display: inline;
    margin: 0;
    border: none;
    width: 80%;
    min-width: 0;
    background: transparent;
    text-align: left
}

.invoicelist-body .control {
    display: inline-block;
    color: white;
    background: #009688;
    padding: 3px 7px;
    font-size: .6rem;
    text-transform: uppercase;
    cursor: pointer
}

.invoicelist-body .control:hover {
    background: #f36464
}

.invoicelist-body .newRow {
    margin: .5rem 0;
    float: left
}

.invoicelist-body .removeRow {
    display: none;
    position: absolute;
    top: .1rem;
    bottom: .1rem;
    left: -1.3rem;
    font-size: .5rem;
    border-radius: 3px 0 0 3px;
    padding: .5rem
}

.invoicelist-footer {
    margin: 1rem
}

.invoicelist-footer table {
    float: right;
    width: 25%
}

.invoicelist-footer table td {
    padding: 1rem 0.3rem 0 1rem;
    text-align: right
}

.invoicelist-footer table tr:nth-child(2) td {
    padding-top: 0
}

.invoicelist-footer table #total_price {
    font-size: 1rem;
    color: #009688
}

.note {
    margin: 1rem
}

.hidenote .note {
    display: none
}

.qrCont {
    text-align: center;
    display: inline-block;
    
}

.cont-qrr {
    display: flex;
    align-items: center;
   justify-content: center;
}

.imgQR {
    max-width: 100px;
}

.note h2 {
    margin: 0;
    font-size: .5rem;
    font-weight: bold
}

footer {
    display: block;
    margin: 1rem 0;
    padding: 1rem 0 0
}

footer p {
    font-size: .8rem
}

@media print {
    .html {
        margin: 0;
        padding: 0;
        background: #fff
    }
    .body {
        width: 100%;
        border: none;
        background: #fff;
        color: #000;
        margin: 0;
        padding: 0
    }
    .control,
    .control-bar {
        display: none !important
    }
   
}

.borderrr {
    border-top: 1px rgb(0, 157, 128) solid ;
}
`
            }</style>



            <div  >

                <main className="hidetax hidenote hidedate body">

                    <div className="col-2">
                        <h1 style={{color:'black', fontWeight:'700'}}>Resumen de Compra:</h1>
                    </div>

                    <div style={{ display: 'flex' }} className="row section">

                        <div className="col-2">
                            <p className="client">
                                <strong>Vendedor:</strong><br />
                                {`Nombre: ${data1[0].nombre}  ${data1[0].apellido}`}<br />
                                {data1[0].tipoDoc + ': ' + data1[0].numDoc}<br />
                                {'Dirección: ' + data1[0].direccion}<br />
                                {'Telefono:' + data1[0].telefono}
                            </p>
                        </div>

                        <div className="col-2">


                            <p className="client">
                                <strong>Cliente:</strong><br />
                                {`Nombre: ${data2[0].nombre}  ${data2[0].apellido}`}<br />
                                {data2[0].tipoDoc + ': ' + data2[0].numDoc}<br />
                                {'Dirección: ' + data2[0].direccion}<br />
                                {'Telefono:' + data2[0].telefono}
                            </p>


                        </div>
                    </div>

                    <div className="invoicelist-body">
                        <table>
                            <thead>
                                <tr>
                                    <th width="5%">Código</th>
                                    <th width="60%">Descripción</th>
                                    <th width="10%">Cant.</th>
                                    <th width="15%">Valor Unit.</th>
                                    <th width="15%">Valor Total.</th>
                                    <th width="15%">IVA.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data3.map(x => (
                                        <tr key={x.idProducto}>
                                            <td width="5%"> <span >{x.idProducto}</span></td>
                                            <td width="60%"><span >{x.nombre}</span></td>
                                            <td className="amount">{x.cantidadProducto}</td>
                                            <td className="rate">{formatter.format(x.precio)}</td>

                                            <td className="sum">{formatter.format(parseInt(x.precio) * parseInt(x.cantidadProducto))}</td>
                                            <td>19%</td>
                                        </tr>
                                    ))
                                }



                            </tbody>
                        </table>

                    </div>


                    <div className="invoicelist-footer">
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Sub-Total:</strong></td>
                                    <td style={{color:'black'}} id="total_price">{total(data3)}</td>

                                </tr>

                                <tr>
                                    <td><strong>Envio:</strong></td>
                                    <td style={{color:'black'}} id="total_price">{data2[0].pais != 'CO' ? formatter.format(25000) : formatter.format(0)}</td>
                                </tr>

                                <tr className="borderrr">
                                    <td><strong>T-Pagar:</strong></td>
                                    <td style={{color:'black'}} id="total_price">{data2[0].pais != 'CO' ? formatter.format(parseInt(total2(data3)) + 30000) : total(data3)}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </main >

                {loading ? <img src="https://i.gifer.com/ZKZg.gif" style={{ maxWidth: '60px' }} /> :
                    <div className="flex justify-evenly items-center m-4">
                            <button onClick={router.back} style={{ color: 'white', fontSize: '20px' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-auto block rounded">Regresar</button>
                
                        <button onClick={comprarr} style={{ color: 'white', fontSize: '20px' }} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-auto block rounded">COMPRAR</button>
                        </div>}


            </div>

        </>
    )
}

export default facturaEjem

facturaEjem.getInitialProps = async (ctx) => {

    const response3 = await axios.patch(host + '/api/CarShop/', { idC: parseInt(ctx.query.id[1]), idV: parseInt(ctx.query.id[0]) });
    const response2 = await axios.get(host + `/api/Login?id=${ctx.query.id[1]}`);
    const response1 = await axios.get(host + `/api/Login?id=${ctx.query.id[0]}`);
    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;

    const info = {
        data1,
        data2,
        data3
    }



    return {
        data: JSON.parse(JSON.stringify(info))
    };
}

