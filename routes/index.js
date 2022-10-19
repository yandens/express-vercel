const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.get('/', controller.index)
router.get('/test', controller.test)

module.exports = router
