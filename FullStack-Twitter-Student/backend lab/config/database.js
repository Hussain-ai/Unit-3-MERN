const mongoose = require('mongoose')

console.log('This is my database url!', process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database!')
})