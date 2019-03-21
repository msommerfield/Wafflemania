const express = require('express')
const User = require('../models/User.js')
const router = express.Router()

const userController = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            console.log(err)
        }
    },

    create: async (req, res) => {
        try {
            const newUser = req.body
            const savedUser = await User.create(newUser)
            res.json(savedUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    show: (req, res) => {
        User.findById(req.params.userId)
            .then(user => {
                res.send(user)
            })
    },


    update: async (req, res) => {
        try {
            const userId = req.params.userId
            const updatedUser = req.body
            const savedUser = await User.findByIdAndUpdate(userId, updatedUser, { new: true })
            res.json(savedUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    delete: async (req, res) => {
        console.log('DELETE')
        try {
            const userId = req.params.userId
            const deletedUser = await User.findByIdAndRemove(userId)
            res.json(deletedUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = userController