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
router.get('/', waffleController.index)
router.get('/new', waffleController.new)
router.post('/', waffleController.create)
router.get('/:vinylId', waffleController.show)
router.get('/:vinylId/edit', waffleController.edit)
router.put('/:vinylId', waffleController.update)
router.delete('/:vinylId', waffleController.delete)


module.exports = router