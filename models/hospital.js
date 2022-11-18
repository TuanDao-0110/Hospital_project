const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
    "id": String,
    "orderNum": String,
    "hospitalName": String,
    "password": {
        type: String,
        required: [true, 'please provide password']
    }, role: {
        default: 'hospital'
    }
})

module.exports = mongoose.model('hospital_user', hospitalSchema)
