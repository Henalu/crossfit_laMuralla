//! Este es el archivo que se encarga de inicializar el servidor
require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')
const fs = require('fs')
const importData = require ('./db/importData')

// Scrapping
const { scrapeShoes } = require('./scrapping')
const shoesUrl = 'https://www.reebok.es/calzado-fitness_training'

/**
 * The main function. It starts the server, runs the scrapping and stays listening.
 * @param {JSON} appConfig 
 * @param {JSON} dbConfig 
 */
async function initApp(appConfig, dbConfig) {
    try {
        const data = JSON.parse(fs.readFileSync('./shoesData.json', 'utf-8'))
        await connectDb(dbConfig)
        await importData(data)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
        await scrapeShoes(shoesUrl)
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)
