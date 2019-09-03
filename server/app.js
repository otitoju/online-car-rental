const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//setup middlewares

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

const port = 2020

app.get('/', function(req, res) {
    res.send('This is where the online car rental server is working')
})

app.listen(port, function(req, res) {
    console.log('Server started!!!')
})

//database connection
mongoose.connect('mongodb://localhost:27017/car-rental')