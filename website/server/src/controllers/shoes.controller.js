const Shoes = require('../models/scrapedShoes.model')

/**
 * Function to get all data from the products obtained from a previous scrapping
 * @param {*} req 
 * @param {*} res 
 */
async function getShoes(req, res) {
    try {
        const shoes = await Shoes.find()
        res.json(shoes)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getShoes
}