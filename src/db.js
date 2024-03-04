import {createPool} from 'mysql2/promise'
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER
}   from './config.js'
export const pool = createPool({
    host: DB_HOST, //si fuera un servicio en la nube, le colocamos una IP
    user: DB_USER,
    port: DB_PORT,
    database: DB_DATABASE
})
