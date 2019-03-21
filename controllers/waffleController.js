const express = require('express')
const User = require('../models/User.js')
const Waffle = require('../models/Waffle.js')
const router = express.Router()

const waffleController = {
index: (req, res) => {
    User
    .findById(req.params.userId)
    .then(user => {
        res.json(user.waffles)
    })
    .catch((err) => console.log(err))
},

create: (req, res) => {
    User.findById(req.params.userId)
    Waffle.create(req.body).then(user => {
        user.waffles.push(waffle)
        console.log(waffle)
        user.save()
        res.redirect(`/${userId}`)
    })
},

show: (req, res) => {
    Waffle.findById(req.params.waffleId).then(waffle => {
        res.json(waffle)
    }).catch((err) => {
        console.log(err)
    })
},

update: (req, res) => {
    User.findById(req.params.userId).then(user => {
        const update = req.body.waffle
        const waffle = user.waffles.id(req.params.waffleId)
        if (update.ingredients) {
            waffle.ingredients = update.ingredients
        }
        if (update.preferredCrispness) {
            waffle.preferredCrispness = update.preferredCrispness
        }
        if (update.preferredLocation) {
            waffle.preferredLocation = update.preferredLocation
        }
        if (update.image) {
            waffle.image = update.image
        }

        user.save().then((user) => {
            user.waffles = user.waffles.reverse()
            res.json(user)
        })
    })
},

delete: (req, res) => {
    User.findById(req.params.userId).then(user => {
        const filteredWaffles = user.waffles.filter(waffle => waffle._id.toString() !== req.params.waffleId)

        user.waffles = filteredWaffles

        user.save().then(user => {
            user.waffles = user.waffles.reverse()
            res.json(user.waffles)
        })
    })
}

}

module.exports = waffleController