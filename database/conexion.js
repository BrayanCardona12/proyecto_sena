import { createPool } from "mysql2/promise"



const pool = createPool({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10666324',
    password: 'kuZCvBJatd',
    port: 3306,
    database: 'sql10666324'
})

// No es optima ⬇

// const pool = createPool({
//     host: 'b1kg3k0tau41qoln9sqd-mysql.services.clever-cloud.com',
//     user: 'um0cuizgh2i9ldpb',
//     password: 'OUBy1keNOQhVdhahKng9',
//     port: 3306,
//     database: 'b1kg3k0tau41qoln9sqd'
// })

// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     port: 3306,
//     database: 'bdp'
// })




export {pool}