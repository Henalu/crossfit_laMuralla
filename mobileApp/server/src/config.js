import { config as dotenv } from 'dotenv'
dotenv()

const config = {
    appConfig:{
        host: process.env.APP_HOST,
        port: process.env.APP_PORT || 3000,
    },
    dbConfig: {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'test',
    }
}

export default config;