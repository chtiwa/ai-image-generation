const Post = require("../models/Post")
const asyncWrapper = require("../middleware/async")
const cloudinary = require("../utils/cloudinary")

const getPosts = asyncWrapper(async (req, res) => {
  const posts = await Post.find()
  res.status(200).json({ success: true, data: posts })
})

const createPost = asyncWrapper(async (req, res) => {
  const { name, prompt, photo } = req.body
  const photoUrl = await cloudinary.uploader.upload(photo)

  const post = await Post.create({ name, prompt, photo: photoUrl.secure_url })
  res.status(201).json({ success: true, data: post })
})

module.exports = { createPost, getPosts }
