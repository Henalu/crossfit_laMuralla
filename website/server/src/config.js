//! Aquí van todas las variables de configuración para tenerlas en un mismo archivo
/**
 * App and DB Config.
 * Needs dotenv and environment variables.
 */
const config = {
    appConfig:{
        port: process.env.APP_PORT
    },
    dbConfig:{
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    }
}

module.exports = config