const express = require('express')
const router = express.Router()
const waffleController =require('../controllers/waffleController')
const userController = require('../controllers/userController')

// //user routes
router.get('/', userController.index)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)

// //waffle routes
router.get('/:userId/waffles', waffleController.index)
router.post('/:userId/waffles', waffleController.create)
router.get('/:userId/waffles/:waffleId', waffleController.show)
router.put('/:userId/waffles/:waffleId', waffleController.update)
router.delete('/:userId/waffles/:waffleId', waffleController.delete)


module.exports = router