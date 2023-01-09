const Staff = require('../models/staff.model')


/**
 * Function to get all data from the workers
 * @param {*} req 
 * @param {*} res 
 */
async function getStaff(req, res) {
    try {
        const staff = await Staff.find()
        res.json(staff)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

/**
 * Function to register a new worker if needed. This has to be done from the admin page
 * @param {*} req It requires a form with: first_name, last_name, img_url, bio, experience, social_media_url
 * @param {*} res Sends an array of JSON objects with all the fetched data
 */
async function registerStaff(req, res) {
    try {
        const {
            first_name,
            last_name,
            img_url,
            bio,
            experience,
            social_media_url } = req.body

        const staff = Staff({
            first_name,
            last_name,
            img_url,
            bio,
            experience,
            social_media_url
        })

        const registeredStaff = await staff.save()
        res.status(201).send({ registeredStaff })
    } catch (error) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    getStaff,
    registerStaff
}