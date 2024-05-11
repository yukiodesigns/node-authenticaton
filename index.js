const express = require('express')
const  mongoose = require('mongoose')
const PORT = 3000 || process.env.PORT
const {MONGO_URI} = require('./config')
const user = require('./routes/users')
const auth = require('./routes/auth')
const app = express()

app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/user', user)

mongoose.connect(MONGO_URI).then(()=> console.log('Mongo is connected'))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})