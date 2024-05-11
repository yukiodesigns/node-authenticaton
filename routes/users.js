const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.post('/register', async(req, res)=>{
    const {username, password, role} = req.body
    const hashed = await bcrypt.hash(password,10)
    const newUser = new User({
        username, password:hashed, role
    })
    try{
        await newUser.save()
        res.send('User created successfully')
    } catch(err){
        console.error(err)
        res.send('User not created')
    }
})

module.exports = router