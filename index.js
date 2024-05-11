const express = require('express')
const  mongoose = require('mongoose')
const PORT = 5000 || process.env.PORT
const {mongoURI} = require('./config')
const user = require('./routes/users')
const auth = require('./routes/auth')
const app = express()

app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/user', user)

mongoose.connect(mongoURI).then(()=> console.log('Mongo is connected'))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})