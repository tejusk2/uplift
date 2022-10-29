const Post = require('../../models/postModel')
async function getPosts(req,res){
    const match = req.query.match;
    let sort = '';
    if(match === 'true'){
        sort = '-altitude -rating'
        
    }
    if(match === 'false'){
        sort = '-rating -altitude'
        
    }
    try{
        //default sort is {altitude: -1}
        const postList = await Post.find().sort(sort).limit(100)
        
        return res.send({status:'ok',list: postList})
    }catch(error){
        return res.send({status:'failed', reason: error})
    }
}
module.exports = getPosts