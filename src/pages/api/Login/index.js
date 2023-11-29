import { pool } from "database/conexion"

export default async function auth(req, res) {

  async function verificarDatos(req, res) {

    let { correo, contrasena, rol } = req.body

    const [datos] = await pool.query("SELECT * from usuarios where correo = ? AND contrasena = ? AND rol = ? AND estado = 'activo';", [correo, contrasena, rol])

    return res.status(200).json(datos)

  }


  async function verificarRegister(req, res) {

    let { correo } = req.body

    const [datos] = await pool.query("SELECT * from usuarios where correo = ? AND estado = 'activo';", [correo])

    return res.status(200).json(datos)

  }

  async function getInfoUsers(req, res) {

    let { id } = req.query

    const [datos] = await pool.query("SELECT * from usuarios where id = ? ;", [id])


    return res.status(200).json(datos)

  }

  async function updatePass(req, res) {

    let { correo, pass } = req.query

    const [datos] = await pool.query("UPDATE usuarios SET contrasena = ? WHERE correo = ? ", [pass, correo])


    return res.status(200).json(datos)

  }


  switch (req.method) {

    case 'GET':

      return await getInfoUsers(req, res)

    case 'POST':

      return await verificarDatos(req, res)

    case 'PUT':
      return await verificarRegister(req, res)

    case 'PATCH':
      return await updatePass(req, res)

  }




}
