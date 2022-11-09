const mongoose = require('mongoose')

const schema = mongoose.Schema

const UserModel = new schema({
    name: {type: String, require:true},
    username: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require:true},
    tweets: [
        {type:mongoose.Schema.Types.ObjectId,
        ref:'tweet'
    }
    ]
},{
    timestamps: true
})


const User = mongoose.model('User', UserModel)

module.exports = User
