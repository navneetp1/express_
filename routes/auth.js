const express = require('express')
const router = express.Router()
const {login} = require('../controllers/functions')

router.post('/', login)

module.exports = router