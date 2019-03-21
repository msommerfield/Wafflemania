const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const WaffleSchema = new Schema({
    ingredients: {
        batter: String,
        toppings: String
    },
    preferredCrispness: String,
    preferredLocation: String,
    image: String
})

const UserSchema = new Schema({
    userName: String,
    password: String,
    waffle: [WaffleSchema] 
})


module.exports = {
    WaffleSchema: WaffleSchema,
    UserSchema: UserSchema
}