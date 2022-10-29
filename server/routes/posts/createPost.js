const config = require('../../config.json');
const Post = require('../../models/postModel');
const User = require('../../models/userModel')

async function createPost(req,res){
    const {username, title, text} = req.body;
    
    if(!username || !title || !text){
        return res.status(400).send(config.errorIncomplete)
    }
    const date = new Date().getTime();
    post = {creator:username, title, text, altitude: 0, createdAt: date}


    try{
        const {id} = await Post.create(post)
        await User.findOneAndUpdate({username}, {$push : {'createdStories' : id}})
        return res.json({status: "ok", post:id })
    }catch(error){
        return res.json({status:'failed', reason: error})
    }
}

module.exports = createPost;