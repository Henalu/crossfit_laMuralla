const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shoesSchema = Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
    },
    link: {
        type: String,
        trim: true,
        unique: true,
    },
    img: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Shoes', shoesSchema);