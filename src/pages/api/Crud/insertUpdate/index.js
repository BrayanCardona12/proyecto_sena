import { pool } from "database/conexion";

export default async function insert(req, res) {

    async function insertarProducto(req, res) {

        let infoReq = req.body

        await pool.query("INSERT INTO producto SET ?", infoReq)
        return res.status(200).json()
    }

    async function deletePCar(req, res) {
        let { idC, idV, idP, estado, cantidadProducto} = req.body

        await pool.query(`UPDATE carrito SET estado = '${estado}', cantidadProducto = ${cantidadProducto} WHERE idCliente = ${idC} AND idProducto = ${idP} AND idVendedor = ${idV} ;`)
        return res.status(200).json({})
    }

    switch (req.method) {
        case 'POST':
            return await insertarProducto(req, res)
        case 'PUT':
            return await deletePCar(req, res)
    }
}
