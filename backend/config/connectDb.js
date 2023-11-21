const mongoose = require('mongoose');


const connectDb = async () => {
    await mongoose.connect('mongodb+srv://zultaifhassan110:12345@cluster0.tdrxjpi.mongodb.net/')
    console.log('Database Created Succesfully')
}

module.exports = connectDb;
