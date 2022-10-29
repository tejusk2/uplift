const mongoose = require('mongoose')

const Post = new mongoose.Schema(
    {
        creator:{type: String, required: true},
        altitude:{type: Number, required: true},
        title:{type: String, required: true, maxLength:200, minLength:4},
        text:{type: String, required: true, maxLength:4000, minLength:10},
        createdAt:{type:Number, required: true},
        happinessScore:{type:Array, required: false, default: [30,30,100]},
        rating:{type:Number, required: false, default: 100}

    },
    {collection: 'posts'}


)

const model = mongoose.model('PostData', Post)

module.exports = model;