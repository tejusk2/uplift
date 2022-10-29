const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        username:{type: String, required: true, unique:true, maxLength:50, minLength:4},
        email:{type:String, required: true},
        salt:{type: String, required: true},
        key:{type: String, required: true},
        liked:{type: Array, required: false, default: []},
        createdStories:{type: Array, required: false, default: []},
        points:{type: Number , required: false, default: 0},
        rated:{type: Array, required:false, default: []}


    },
    {collection: 'users'}


)

const model = mongoose.model('UserData',User)

module.exports = model;