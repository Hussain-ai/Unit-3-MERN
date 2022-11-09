const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')


router.post('/users', usersController.createUser)

router.post('/users/:userId/tweets', usersController.createUserTweet)

router.post('/auth/signin', usersController.auth_sigin_post)

module.exports = router