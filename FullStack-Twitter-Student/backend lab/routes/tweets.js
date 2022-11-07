//we import out controller functions
const express = require('express')
const router = express.Router()
const tweetsController = require('../controllers/tweets')

//We define the routes and controllers
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', tweetsController.createTweet)
//we export out routes
module.exports = router