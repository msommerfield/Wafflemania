const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const WaffleSchema = new Schema({
    batter: String,
    toppings: String,
    preferredCrispness: String,
    preferredLocation: String,
    imgLink: String
})

const UserSchema = new Schema({
    userName: String,
    password: String,
    waffles: [WaffleSchema] 
})


module.exports = {
    WaffleSchema: WaffleSchema,
    UserSchema: UserSchema,
}