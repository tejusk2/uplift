require('dotenv').config()

//npm i cors, nodemon, mongoose, express, jsonwebtoken


const express = require('express')

const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
//const User = require('./models/userModel')
const jwt = require('jsonwebtoken')







mongoose.connect(process.env.MONGO_KEY)



app.use(cors())
app.use(express.json())

app.disable('x-powered-by');

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts')
app.use('/api/users', userRouter);
app.use('/api/posts',postRouter)


app.listen(process.env.PORT, ( )=> {
    console.log('App Listening')
    
})