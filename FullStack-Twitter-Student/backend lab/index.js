const express = require('express')

//initiate application
const app = express()

require('dotenv').config()
require('./config/database')


app.use(express.json())
app.use('/',require('./routes/tweets'))

app.listen(3000,()=>{
    console.log('port 3000 working')
})