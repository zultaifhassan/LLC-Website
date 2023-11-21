const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
        require: true,
    },
    email: {
        type: String,
        default: null,
    },
    city: {
        type: String,
        default: "",
    },
    message: {
        type: String,
        default: "",
    }
}, {timestamps: true})

module.exports = mongoose.model('Contact', contactSchema)