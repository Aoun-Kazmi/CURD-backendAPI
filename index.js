const express = require('express')
const mongoose = require('mongoose')
const Product = require('./Models/product.model')
const productRoute = require('./Routes/product.route')
const app = express()


//ROUTES
app.use('/api/products',productRoute)


//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.send("Hello from NODE API!")
})



mongoose.connect("mongodb+srv://admin:admin@backenddb.3g75yo7.mongodb.net/NODE-API?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to database!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch(() => {
        console.log('Connection failed')
    })