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
            .then(user => {
                Waffle.create(req.body).then(waffle => {
                    user.waffles.push(waffle)
                    user.save()
                    res.json(waffle)
                })
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
            const update = req.body
            const waffleId = req.params.waffleId
            Waffle.findByIdAndUpdate(waffleId, update)
                .then(() => {
                    user.save().then((user) => {
                        user.waffles = user.waffles.reverse()
                        res.json(user)
                    })
                })
        })
    },

    delete: (req, res) => {
        User.findById(req.params.userId)
            .then(user => {
                user.waffles.id(req.params.waffleId).remove()
                user.save().then(user => {
                    res.json(user.waffles)
                })
            }).catch((err) => {
                console.log(err)
            })
    }

}

module.exports = waffleController