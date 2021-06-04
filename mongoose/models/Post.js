const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imgUrl: String 
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
