
// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// CONFIG/MIDDLEWARE
require('dotenv').config()

app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect("mongodb+srv://zacharymathias:Wilson-27@cluster0.igegl4n.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true } )

.then(() => console.log('Connected Successfully'))

.catch((err) => { console.error(err); });

// ROOT INDEX 
app.get('/', (req, res) => {
    res.send('Hello World')
})

// BOOKS 
const booksController = require('./controllers/controller.js')
app.use('/books', booksController)

// LISTEN
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})