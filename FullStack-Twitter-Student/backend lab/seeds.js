require('dotenv').config()
require('./config/database')
const Tweet = require('./models/Tweet')

Tweet.insertMany([
    {
        name: "Hussain",
        TweetContent: "I get an error",
    },
    {
        name: "Mohd",
        TweetContent:"Hello World" ,
    },
    {
        name: "Kareem",
        TweetContent: "This lesson is easy",
    },
]).then(()=> console.log('Data added successfully!')).catch(err => console.log(err))