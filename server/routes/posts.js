const express = require('express')
const router = express.Router()
const { createPost, getPosts } = require('../controllers/posts')

router.route('/').post(createPost).get(getPosts)

module.exports = router