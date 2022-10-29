const express = require('express');
const router = express.Router();


const createPost = require('./posts/createPost');
const getPosts = require('./posts/getPosts')
const editPosts = require('./posts/editPosts')
const findPost = require('./posts/findPost')
const ratePost = require('./posts/ratePost')

router.post('/createPost', createPost)
router.get('/getPosts', getPosts)
router.patch('/editPosts', editPosts)
router.patch('/ratePost', ratePost)
router.post('/search', findPost)

module.exports = router;