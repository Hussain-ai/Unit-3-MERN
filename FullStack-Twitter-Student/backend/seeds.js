require('dotenv').config()
require('./config/database')
const Tweet = require('./models/Tweet')

Tweet.insertMany([
    {
        name: "Hussain",
        content: "I get an error",
    },
    {
        name: "Mohd",
        content:"Hello World" ,
    },
    {
        name: "Kareem",
        content: "Do the deliverable",
    },
    {
        name:'Ahmed',
        content: "This lesson is easy",
    }
]).then(()=> console.log('Data added successfully!')).catch(err => console.log(err))