import { pool } from "database/conexion";

export default async function getInfoProducto(req, res) {

    async function infoP(req, res) {

        let { id } = req.query

        let [data] = await pool.query("SELECT * FROM producto where idProducto = " + id)
        return res.status(200).json(data)
    }


    async function updateProd(req, res) {

        let { id } = req.query
        let { nombre, categoria, descripcion, cantidad, precio, imagen, estado } = req.body

        let consul = `UPDATE producto SET nombre = '${nombre}', categoria = '${categoria}',  descripcion = '${descripcion}',  cantidad = ${cantidad}, precio = ${precio}, imagen = '${imagen}', estado = '${estado}'  where idProducto = ${id}`

        let [data] = await pool.query(consul)
        return res.status(200).json(data)
    }

    async function borrarP(req, res) {

        let { id } = req.query

        let consul = `UPDATE producto SET estado = 'noDisponible' WHERE idProducto = ${id}`


        await pool.query(consul)
        return res.status(200).json({})
    }

    switch (req.method) {
        case 'GET':
            return await infoP(req, res)
        case 'PUT':
            return await updateProd(req, res)

        case 'DELETE':
            return await borrarP(req, res)


    }
}
