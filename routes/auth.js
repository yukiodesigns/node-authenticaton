const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express')
const User = require('../models/User')
const {secret} = require('../config')
const router = express.Router()

router.post('/login', async(req, res)=>{
    const {username, password} = req.body

    const user = await User.findOne({username})
    if(!user) {return res.send('User not found')}

    const isPassword = await bcrypt.compare(password, user.password)
    if(!isPassword) {return res.send('Password not found')}

    const token = jwt.sign({userId:user._id, role:user.role}, secret)
    res.json({token})

})

module.exports = router