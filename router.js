const express = require('express')
const router = express.Router()
const charController = require('./controllers/charController')
// import controllers in here like const thisController = require('./controllers/thisController')

// character related routes
router.get('/', charController.myCharacter)

module.exports = router