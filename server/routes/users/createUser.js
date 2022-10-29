const User = require('../../models/userModel');
const deriveKeyFromPassword = require('../../utils/salty')
const config = require('../../config.json');


async function createUser(req,res){
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).send(config.errorIncomplete);
    }

    const { salt, key } = await deriveKeyFromPassword(password);

    const user = {username,email,salt,key}

    try {
        const person =  await User.create(user)

        res.json({status:'ok', data: person})

        console.log("user created: " + username)
        
    } catch (error) {
        res.json({status:'error', error:'Duplicate Email or Username'})
    }
}

module.exports = createUser;