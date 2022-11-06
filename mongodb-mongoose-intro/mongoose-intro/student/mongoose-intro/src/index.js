//Imported mongoose library
const mongoose = require('mongoose')

//Connect to our mongo DB
mongoose.connect('mongodb+srv://Hussain:hussain@cluster0.rk6qjyn.mongodb.net/animal')

// Display message when connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo database!!!')
})

const schema = mongoose.Schema
// Create an Animal Model 
const animalSchema = new schema({
    name: String,
    size: String,
    species: String,
    age: Number
})

const Animal = mongoose.model('Animal', animalSchema)

// Store some data into our Database 
// Controller methods

Animal.insertMany([
    {
        name: 'rocky',
        size: 'medium',
        species: 'elephant',
        age: 42
    },
    {
        name: 'oreo',
        size: 'small',
        species: 'cat',
        age: 12
    },
    {
        name: 'nutella',
        species: 'dog',
        size: 'small',
        age: 8
    },
    {
        name: 'hazel',
        species: 'cheetah',
        size: 'medium',
        age: 100
    },
    {
        name: 'speedy',
        species: 'turtle',
        size: 'large',
        age: 999
    }
]).then((err, docs) => {
    console.log('Data was succesfully added to DB')
}).catch(err => console.log(err))