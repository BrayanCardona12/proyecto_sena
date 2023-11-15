import { pool } from "database/conexion";

export default async function CarritoCompra(req, res) {

    async function getProductValidate(req, res) {
        //  let {idVendedor, idProducto, idCliente} = req.body
        let query = `SELECT * from carrito`
        //let query = `SELECT * from carrito where idVendedor = ${idVendedor} AND idProducto = ${idProducto} AND idCliente = ${idCliente}`

        const [datos] = await pool.query(query)
        return res.status(200).json(datos)
    }



    async function insertProducto(req, res) {
        let infoReq = req.body

        await pool.query("INSERT INTO carrito SET ?", infoReq)
        return res.status(200).json()
    }

    async function findCarCliente(req, res) {
        let { idC, idV } = req.body

        const [datos] = await pool.query(`SELECT imagen, cantidad, nombre, precio, carrito.cantidadProducto, carrito.idCliente, carrito.idVendedor, carrito.idProducto FROM producto inner join carrito on producto.idProducto = carrito.idProducto where carrito.idCliente = ? and carrito.idVendedor = ? AND carrito.estado = 'disponible' AND producto.estado = 'disponible';`, [idC, idV])
    
        return res.status(200).json(datos)
    }


    // async function updateCar(req, res) {
    //     let { idC, idV } = req.body

    //     await pool.query(`UPDATE carrito SET estado = '${estado}', cantidadProducto = ${cantidadProducto} WHERE idCliente = ${idC} AND idProducto = ${idP} AND idVendedor = ${idV} ;`)
     
    //     return res.status(200).json(datos)
    // }




    switch (req.method) {
        // case 'GET':
        //     return await updateCar(req, res)
        case 'POST':
            return await insertProducto(req, res)
        case 'PUT':
            return await getProductValidate(req, res)
        case 'PATCH':
            return await findCarCliente(req, res)

    }
}