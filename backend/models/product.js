const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "",
        require: true,
    },
    price: {
        type: String,
        default: null,
    },
    descrition: {
        type: String,
        default: "",
    },
    weight: {
        type: String,
        default: "",
    }
})

module.exports = mongoose.model('Product', productSchema)