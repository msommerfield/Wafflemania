const express = require('express')
const router = express.Router()
const waffleController =require('../controllers/waffleController')
const userController = require('../controllers/userController')

//user routes
router.get('/', userController.index)
router.post('/', userController.create)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

//waffle routes
router.get('/:userId', waffleController.index)
router.get('/:userId/waffles/new', waffleController.new)
router.post('/:userId/waffles', waffleController.create)
router.get('/:userId/waffles:userId', waffleController.show)
router.get('/:userId/waffles:userId/edit', waffleController.edit)
router.put('/:userId/waffles:userId', waffleController.update)
router.delete('/:userId/waffles:userId', waffleController.delete)


module.exports = router