import { pool } from "database/conexion"

export default async function auth(req, res) {

  async function verificarDatos(req, res) {

    let { correo, contrasena, rol } = req.body

    let query = `SELECT * from usuarios where correo = '${correo}' AND contrasena = '${contrasena}' AND rol = ${rol} AND estado = 'activo';`
    const [datos] = await pool.query(query)

    return res.status(200).json(datos)

  }


  async function verificarRegister(req, res) {

    let { correo } = req.body

    let query = `SELECT * from usuarios where correo = '${correo}' AND estado = 'activo';`
    const [datos] = await pool.query(query)

    return res.status(200).json(datos)

  }

  switch (req.method) {
    case 'POST':
    
       return await verificarDatos(req, res)
       case 'PUT':
        return await verificarRegister(req, res)
    
  }


}
