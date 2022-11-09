const User = require('../models/User')
const Tweet = require('../models/Tweet')

//Require bcrypt
const bcrypt = require('bcrypt')
const salt = 10

//Require jsonwebtoken
const jsonwebtoken = require('jsonwebtoken')

//---createUser
async function createUser(req, res) {
    try {
        //----
        //plain text to encrypted String
        let hashedPassword = bcrypt.hashSync(req.body.password, salt)
        console.log(hashedPassword)
        const newUser = await User.create(req.body)({

            name: req.body.name,
            username: req.body.name,
            email: req.body.name,
            password: hashedPassword,
        })
        //----
        res.json(newUser)
    } catch (err) {
        res.json(err)
    }
}

const auth_sigin_post = async (req, res) =>{
    let {email, password} = req.body;
    console.log(email);

    try{
        let user = await User.findOne({email});
        console.log(user);

        if(!user){
            return res.json({message: "User not found"}).status(400);
        }

        // Password Comparison
        const isMatch = await bcrypt.compareSync(password, user.password);
        console.log(password); // Plaintext password
        console.log(user.password); // Encrypted password

        if(!isMatch) {
            return res.json({message: "Password not matched"}).status(401);
        }

        // JWT Token
        const payload = {
            user: {
                id: user._id
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            { expiresIn: 36000000},
            (err, token) => {
                if(err) throw err;
                res.json({token}).status(200);
            }
        )
    } catch (error) {
        console.log(error)
        res.json({message: "You are not loggedin!. Try again later."}).status(400);
    }
}

//---createUserTweet
async function createUserTweet(req, res) {

    let user = await User.findById(req.params.userId)
    let newTweet = await Tweet.create(req.body)

    user.tweets.push(newTweet._id)

    await user.save()
    await user,populate('tweets')
    res.json(user)
}
//---updateUser
const updateUser = async (req, res) => {

    const user = await User.findOneAndUpdate({
            _id: req.params.userId
        },{
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        
        })


    res.json({message: user})
}
//---DeleteUser
const deleteUser = async (req, res) => {

    const user = await User.findOneAndDelete({
        _id: req.params.userId
    })


    res.json({message: user})
}

module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser,
    auth_sigin_post
}