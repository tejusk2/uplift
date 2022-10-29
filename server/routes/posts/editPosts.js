const Post = require('../../models/postModel');
const User = require('../../models/userModel');
async function editPosts(req,res){
    const {_id, username} = req.body
    const {liked} = User.findOne({username})

    if(liked){
        if(liked.includes(_id)){
            return res.send({status:'failed', reason: 'already liked'})
        }
    }
    try{
        
        const {creator} = await Post.findByIdAndUpdate({_id}, {$inc : {'altitude' : 50}})
        await User.findOneAndUpdate({username}, {$push : {'liked' : _id}})
        await User.findOneAndUpdate({creator}, {$inc : {'points' : 50}})
        return res.send({status:'ok'})
    }catch(error){
        return res.send({status:'failed', reason: 'error'})
    }
}

module.exports = editPosts;