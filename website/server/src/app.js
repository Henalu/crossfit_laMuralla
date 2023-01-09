const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')

const app = express()
const routes = require('./routes/routes')

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes)

module.exports = app