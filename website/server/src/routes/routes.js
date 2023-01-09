const express = require('express')
const { registerStaff, getStaff } = require('../controllers/staff.controller')
const { registerFounder, getFounders } = require('../controllers/founders.controller')
const { getShoes } = require('../controllers/shoes.controller')
const sendEmail = require('../controllers/email.controller')

const api = express.Router()

api.get('/staff', getStaff)
api.post('/registerStaff', registerStaff)

api.get('/founders', getFounders)
api.post('/registerFounder', registerFounder)

api.get('/shoes', getShoes)

api.post('/send_email', sendEmail)

module.exports = api
