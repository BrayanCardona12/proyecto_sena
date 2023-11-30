import { pool } from "database/conexion"

export default async function compra(req, res) {

    async function insertPedido(req, res) {

        let { idV, idC, idProductos, estadoP, totalP, fechaS, fechaV, envio, valUnit, cant } = req.body

        await pool.query("INSERT INTO pedidos (idV, idC, envio , estadoP, totalP ,fechaS, fechaV) VALUES ( ?, ?, ?, ?, ?, ? ,? );", [idV, idC, envio, estadoP, totalP, fechaS, fechaV])

        let [dd] = await pool.query("SELECT * FROM pedidos ORDER BY idPedido DESC  LIMIT 1;");

        let listaP = idProductos.split(',')
        let listaCant = cant.split(',')
        let listaValUnit = valUnit.split(',')

      

        let q = `INSERT INTO pedidosdetalle (idDetalle, idProd, cantidad, valorUnit) VALUES `

        if (idProductos.length == 1) {
            await pool.query(`INSERT INTO pedidosdetalle (idDetalle, idProd, cantidad, valorUnit) VALUES ( ${parseInt(dd[0].idPedido)} , ${parseInt(idProductos)} , ${parseInt(cant)} , ${parseInt(valUnit)}) ;`)
            return res.status(200).json()
        } else {

            listaP.forEach((v, index) => {
                q += `(${dd[0].idPedido}, ${parseInt(v)} , ${parseInt(listaCant[index])} , ${parseInt(listaValUnit[index])} ) ,`
            });

            q = q.substring(0, q.length - 1);


            await pool.query(q);
            return res.status(200).json()
        }
    }

    async function updateCarr(req, res) {

        let { idV, idC } = req.body

        await pool.query("UPDATE carrito SET estado = 'noDisponible'  WHERE idVendedor = ? AND idCliente = ?;", [idV, idC])
        return res.status(200).json()
    }


    async function getPedidoVend(req, res) {

        let { idV, idC } = req.query
        if (idV) {
            let [datos] = await pool.query("SELECT idPedido, idC, usuarios.nombre, usuarios.codInt ,usuarios.telefono, usuarios.correo, totalP, fechaS, fechaV, estadoP FROM pedidos JOIN usuarios ON pedidos.idC = usuarios.id where pedidos.idV =  ? ;", [parseInt(idV)])
            return res.status(200).json(datos)
        }

        if (idC) {
            let [datos] = await pool.query("SELECT idPedido, idV, idC ,usuarios.nombre, usuarios.codInt ,usuarios.telefono, usuarios.correo, totalP, fechaS, fechaV, estadoP  FROM pedidos JOIN usuarios ON pedidos.idV = usuarios.id where pedidos.idC =  ? ;", [parseInt(idC)])
            return res.status(200).json(datos)
        }


    }

    async function actEstadoPedido(req, res) {

        let { idP, estado } = req.body


        let [datos] = await pool.query("UPDATE pedidos SET estadoP = ? WHERE idPedido = ?", [estado, parseInt(idP)])
        return res.status(200).json(datos)
    }

    async function findlistDetallePr(req, res) {

        let { idP } = req.query


        let [datos] = await pool.query("SELECT idProducto, nombre, pedidosdetalle.cantidad, pedidos.idPedido ,pedidosdetalle.valorUnit FROM producto JOIN pedidosdetalle ON producto.idProducto = pedidosdetalle.idProd JOIN pedidos ON pedidos.idPedido = pedidosdetalle.idDetalle where pedidos.idPedido = ? ;", [parseInt(idP)])
        return res.status(200).json(datos)
    }


    switch (req.method) {
        case 'GET':
            return await getPedidoVend(req, res)
        case 'POST':
            return await insertPedido(req, res)
        case 'PUT':
            return await updateCarr(req, res)
        case 'PATCH':
            return await actEstadoPedido(req, res)
        case 'DELETE':
            return await findlistDetallePr(req, res)

    }

}


