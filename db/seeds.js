require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User.js')
const Waffle = require('../models/Waffle')

const savory = new Waffle({
    ingredients: {
        batter: 'Sweet Potato',
        toppings: 'Chicken and Hot Sauce'
    },
    preferredCrispness: 'Extra Crispy',
    preferredLocation: 'Folk Art',
    imgLink: 'https://media-cdn.tripadvisor.com/media/photo-s/07/15/4b/66/fried-chicken-and-cheddar.jpg'
})

const peacan = new Waffle({
    ingredients: {
        batter: 'Waffle House original recipe',
        toppings: 'Syup and Peacans'
    },
    preferredCrispness: 'slightly soft',
    preferredLocation: 'Waffle House',
    imgLink: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/15/0/FNM_120111-Copy-That-002_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382540943444.jpeg'
})

const cheddar = new Waffle({
    ingredients: {
        batter: 'Cheddar Cheese',
        toppings: 'Chicken and Syrup'
    },
    preferredCrispness: 'a little well done',
    preferredLocation: 'Bantam + Biddy',
    imgLink: 'https://s3-media4.fl.yelpcdn.com/bphoto/CQpHL20EU6oLvcqQY-KF-A/348s.jpg'
})

const fred = new User({
    userName: 'Freddy_bear',
    password: 'barkymutt',
    waffles: [savory, peacan] 
})

const sadie = new User({
    userName: 'Sady_pup',
    password: 'overit',
    waffles: [cheddar] 
})

User.deleteMany({})
    .then(() => Waffle.deleteMany({})
    .then(() => User.create(fred, sadie))
    .then(() => Waffle.create(savory, peacan, cheddar))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())
