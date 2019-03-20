const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new Schema({
    userName: String,
    password: String,
    waffle: [waffleSchema] 
})

module.exports = mongoose.model('User', User)