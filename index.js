require('dotenv').config()
const express = require('express')
const asyncHandler = require('express-async-handler')
const app = express()
const defaultHanlder = require('./middleware/errorHandler')
// import connect db vs call connetDB fn ==> to connect to our data base
const connectDB = require('./config/dbConnect')
const mongoose = require("mongoose")
connectDB()

const path = require('path')
const errorHanlder = require('./middleware/errorHandler')
const PORT = process.env.PORT || 4000
app.use(express.json())

app.get('/', asyncHandler(async (req, res) => {
    res.status(200).send('hello')
}))
app.all('*', (req, res) => {
    res.status(404).send('not found')

})
app.use(defaultHanlder)
mongoose.connection.once('open', () => {
    console.log('connect db')
    app.listen(PORT, () => {
        console.log(`listening on ${PORT} ...`)
    })
})
mongoose.connection.on('error', err => {
    console.log(err)
})