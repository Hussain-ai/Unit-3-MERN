const mongoose = require('mongoose')

console.log('This is my database url!', process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL)

mongoose.connect('mongodb+srv://Hussain:hussain@cluster0.rk6qjyn.mongodb.net/tweets')

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database!')
})