const Founders = require('../models/founders.model')

/**
 * Function to get all data from the business founders
 * @param {*} req No parameters needed
 * @param {*} res 
 */
async function getFounders(req, res) {
    try {
        const founders = await Founders.find()
        res.json(founders)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

/**
 * Function to register a new founder or business partner if needed. This has to be done from the admin page
 * @param {*} req It requires a form with: first_name, last_name, img_url, bio, experience, social_media_url
 * @param {*} res Sends an array of JSON objects with all the fetched data
 */

async function registerFounder(req, res) {
    try {
        const {
            first_name,
            last_name,
            img_url,
            bio,
            experience,
            social_media_url } = req.body

        const founders = Founders({
            first_name,
            last_name,
            img_url,
            bio,
            experience,
            social_media_url
        })

        const registeredFounders = await founders.save()
        res.status(201).send({ registeredFounders })
    } catch (error) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    getFounders,
    registerFounder
}