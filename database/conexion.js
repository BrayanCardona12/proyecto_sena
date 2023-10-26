import { createPool } from "mysql2/promise"

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: 3306,
    database: 'bdp'
})


export {pool}