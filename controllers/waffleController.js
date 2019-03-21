const express = require('express')
const User = require('../models/User.js')
const Waffle = require('../models/Waffle.js')
const router = express.Router()

router.get('/:userId', (req, res) => {
    User
    .findById(req.params.userId)
    .then(user => {
        res.json(user)
    })
    .cath((err) => console.log(err))
})

router.get('/:userId/waffles/new', (req, res) => {
    User.findById(req.params.userId)
    Waffle.create(req.body).then(user => {
        user.waffles.push(waffle)
        console.log(waffle)
        user.save()
        res.redirect(`/${userId}`)
    })
})


router.post('/:userId/waffles', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const newWaffle = new Waffle({})
        user.waffles.push(newWaffle)

        user.save().then((user) => {
            res.json(newWaffle)
        })
    })
})

router.delete('/:userId/waffles/:waffleId', (req, res) => {
    User.findById(req.params.userId).then(user => {
        const filteredWaffles = user.waffles.filter(waffle => waffle._id.toString() !== req.params.waffleId)

        user.waffles = filteredWaffles

        user.save().then(user => {
            user.waffles = user.waffles.reverse()
            res.json(user.waffles)
        })
    })
})

router.patch('/:userId/waffles/:userId', (req, res) => {
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
})

module.exports = router