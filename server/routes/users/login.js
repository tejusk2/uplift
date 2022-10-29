const User = require('../../models/userModel');
const deriveKeyFromPassword = require('../../utils/salty')


async function login(req,res){
    const {username, password} = req.body;
    
    
    const user = await User.findOne({username: username})
    if(!user){
        res.json({status:'failed'})
        return;
    }
    const {key} = await deriveKeyFromPassword(password, user.salt)


    if(key === user.key){
        
        res.json({status:'authenticated',data: user})
    }else{
        res.json({status:'failed'})
    }
    
}

module.exports = login;