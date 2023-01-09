import app from './app.js';
import config from './config.js'
import connectDb from './database.js';

async function initApp(appConfig) {
    try{
        await connectDb()
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    }catch(e){
        console.error(e)
        process.exit(0)
    }
}

initApp(config.appConfig, config.dbConfig)
