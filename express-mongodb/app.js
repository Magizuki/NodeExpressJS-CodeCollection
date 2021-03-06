const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
//const bodyParser = require('body-parser')

require('dotenv/config')

//Import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('/posts', () => {
//     console.log('This is a middleware running')
// })

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true}, () => {
    console.log('connected to DB!')
})

//Start listening server
app.listen(3000)