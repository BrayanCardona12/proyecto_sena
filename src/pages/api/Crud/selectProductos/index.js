import { pool } from "database/conexion";

export default async function SelectProductos(req, res) {

    async function getProductos(req, res) {

        let  id = req.body.id

        const [datos] = await pool.query("SELECT * from producto where idVendedor = ? AND estado = 'disponible';", [id])
    
        return res.status(200).json(datos)
    }

    switch (req.method) {
        case 'POST':
            return await getProductos(req, res)



    }
}