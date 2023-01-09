const mongoose = require('mongoose')
// Prepare for deprecation warning
mongoose.set('strictQuery', false)

mongoose.connection.on('open', ()=> console.log('db connected'))

/**
 * Default Function for connecting to MongoDB using mongoose
 * @param {String} host Our Mongo database host
 * @param {String} port Our Mongo database port
 * @param {String} dbName Our Mongo database name
 */
async function connectDb({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDb