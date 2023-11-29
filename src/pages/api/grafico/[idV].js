import { pool } from "database/conexion"

export default async function grafico(req, res) {

    async function getGraft2(req, res) {

        let { idV } = req.query


        let [datos] = await pool.query("SELECT estadoP, COUNT(*) as cantidad_registros FROM pedidos where idV = ? GROUP BY estadoP ;", [parseInt(idV)])
        return res.status(200).json(datos)

    }

    async function getGraft3(req, res) {

        let { idV } = req.query


        let [datos] = await pool.query("SELECT estado, COUNT(*) as cantidad_registros FROM carrito where idVendedor = ? GROUP BY estado;", [parseInt(idV)])
        return res.status(200).json(datos)
    }


    async function getGraft1(req, res) {

        let { idV } = req.query


        let [datos] = await pool.query("select idPedido, totalP from pedidos where idV = ? ORDER BY idPedido DESC LIMIT 8 ;", [parseInt(idV)])
        return res.status(200).json(datos)



    }

    async function getGraft4(req, res) {

      
        let { idV } = req.query


        let [datos] = await pool.query("SELECT nombre, cantidad FROM producto WHERE idVendedor = ? AND estado != 'noDisponible' ORDER BY idProducto DESC LIMIT 8;", [parseInt(idV)])
        return res.status(200).json(datos)
    }



    switch (req.method) {
        case 'GET':
            return await getGraft1(req, res)
        case 'POST':
            return await getGraft2(req, res)
        case 'PUT':
            return await getGraft3(req, res)
        case 'PATCH':
            return await getGraft4(req, res)


    }

}