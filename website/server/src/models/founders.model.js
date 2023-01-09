const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foundersSchema = Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    img_url: { type: String, required: true },
    bio: { type: String, required: true },
    experience: { type: String, required: true },
    social_media_url: { type: String, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Founders', foundersSchema);

