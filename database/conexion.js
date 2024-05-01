import { createPool } from "mysql2/promise"



// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     port: 3306,
//     database: 'bdp'
// })

const pool = createPool({
    host: 'bpxodinhwj61dk8lvhbe-mysql.services.clever-cloud.com',
    user: 'uyueophmedwm7d9e',
    password: 'Q5bwP1dXUtzyUL34qbNx',
    port: 3306,
    database: 'bpxodinhwj61dk8lvhbe'
})





export {pool}