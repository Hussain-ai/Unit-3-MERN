const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Hussain:hussain@cluster0.rk6qjyn.mongodb.net/movies', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});``

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});