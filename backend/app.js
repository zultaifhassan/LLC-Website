const express = require('express');
const connectDb = require('./config/connectDb');
var bodyParser = require('body-parser')
const User = require('./models/user.model');
const Product = require('./models/product');
const Contact = require('./models/contact.model');
var cors = require('cors')
const app = express();
const PORT = 1122;

connectDb();

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use("/contact", async (req,res) => {
    try {
        console.log(req.body) 
        const payload = req.body;
        const contact = await Contact.create(payload)
        res.json({message: "contact detail", contact})
    }
    catch(err){
        console.log(err)
    }
})

app.use("/getContact", async (req,res) => {
    try {

        const contacts = await Contact.find()
        res.json(contacts)
    }
    catch(err){
        console.log(err)
    }
})



app.use("/product", async (req,res) => {
    try {
        console.log(req.body)
        const payload = req.body;
        const product = await Product.create(payload)
        res.json({message: "Product List", product})
    }
    catch(err){
        console.log(err)
    }
})

app.use("/getProduct", async (req,res) => {
    try {

        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        console.log(err)
    }
})


app.use("/user", async (req,res) => {
    try {
        console.log(req.body)
        const payload = req.body;
        const user = await User.create(payload)
        res.json({message: "hello user zultaif", user})
    }
    catch(err){
        console.log(err)
    }
})

app.use("/getUser", async (req,res) => {
    try {

        const users = await User.find()
        res.json(users)
    }
    catch(err){
        console.log(err)
    }
})



app.use("/getUser/:id", async (req,res) => {
    try {

        const users = await User.findOne({_id:req.params.id})
        res.json(users)
    }
    catch(err){
        console.log(err)
    }
})



app.use("/", (req,res) => {
    res.json({message: "hello zultaif"})
})


app.listen(PORT,  () => {
    console.log(`Server runs on port ${PORT}`);
})