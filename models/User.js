const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role:{type:String, enum:['user', 'admin'], default:'user'}
})

const user = mongoose.model('User', userSchema)

module.exports = user