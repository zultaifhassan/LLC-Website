const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
        require: true,
    },
    email: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    }
})

module.exports = mongoose.model('User', userSchema)