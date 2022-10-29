const express = require('express');
const router = express.Router();


const createUser = require('./users/createUser');
const login = require('./users/login')


router.post('/register', createUser)
router.post('/login', login)

module.exports = router;