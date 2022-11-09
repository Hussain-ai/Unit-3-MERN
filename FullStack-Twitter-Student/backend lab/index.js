const express = require('express')
const cors = require('cors')
//initiate application
const app = express()

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(express.json())
app.use('/',require('./routes/tweets'))
app.use('/', require('./routes/users'))

app.listen(3000,()=>{
    console.log('port 3000 working')
})