import { pool } from "database/conexion";

export default async function RegisterUsers(req, res) {

    async function insertUsers(req, res) {
        let infoReq = req.body

        await pool.query("INSERT INTO usuarios SET ?", infoReq)
        return res.status(200).json()
    }

    async function getVendedores(req, res) {


        const [info] = await pool.query("SELECT * FROM usuarios WHERE rol = 2 AND estado = 'activo'")

        return res.status(200).json(info)
    }


    async function updatetUsers(req, res) {

        let { id, nombre, imagen, apellido, codInt, telefono, edad, pais, ciudad, direccion, correo, estado, contrasena,  tipoDoc, numDoc, imgDavi, imgNequi } = req.body

        await pool.query(`UPDATE usuarios SET nombre = ?, imagen = ?,  apellido = ?, codInt = ?, telefono = ?, edad = ?,  pais = ?,  ciudad = ?, direccion = ?,  correo = ?, estado = ?, contrasena = ?,  tipoDoc = ?, numDoc = ?, imgDavi = ?, imgNequi = ? WHERE id = ? ;`, [nombre, imagen, apellido, codInt, telefono, edad, pais, ciudad, direccion, correo, estado, contrasena, tipoDoc, numDoc, imgDavi, imgNequi , id])

        return res.status(200).json()
    }

    switch (req.method) {
        case 'GET':
            return await getVendedores(req, res)
        case 'POST':
            return await insertUsers(req, res)
        case 'PUT':
            return await updatetUsers(req, res)
    }
}