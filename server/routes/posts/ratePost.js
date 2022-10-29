const Post = require('../../models/postModel');
const User = require('../../models/userModel');
async function ratePost(req,res){
    const {_id, username, amount} = req.body
    const {rated} = User.findOne({username})

    if(rated){
        if(rated.includes(_id)){
            return res.send({status:'failed', reason: 'already liked'})
        }
    }
    try{
        const post = await Post.findById({_id})
        const {happinessScore} = post
        const score = [happinessScore[0]+amount, happinessScore[1]+30, parseInt(((happinessScore[0]+amount)/(happinessScore[1]+30))*100)]
        await Post.findByIdAndUpdate({_id}, {happinessScore: score, rating: score[2]})
        await User.findOneAndUpdate({username}, {$push : {'rated' : _id}})
        return res.send({status:'ok'})
    }catch(error){
        return res.send({status:'failed', reason: 'error'})
    }
}

module.exports = ratePost;