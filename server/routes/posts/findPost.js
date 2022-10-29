const Post = require('../../models/postModel')
async function findPost(req,res){
    const {id} = req.body;
    
    try{
        //default sort is {altitude: -1}
        const postList = await Post.findById(id)
        if(!postList)return res.send({status:failed, reason:'404'})
        return res.send({status:'ok', info: postList})
        
    }catch(error){
        return res.send({status:'failed', reason: error})
    }
}
module.exports = findPost