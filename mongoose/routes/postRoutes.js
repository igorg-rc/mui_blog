const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const mongoose = require('mongoose')
const upload = require('../../helpers/multer')
const deleteFile = require('../../helpers/deleteFile')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/', upload.single('image'), async (req, res) => {
  const { title, content } = req.body
  const image = req.file
  const imgUrl = image.path
  console.log(image)

  try {
    const post = new Post({ title, content, imgUrl })
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({ message: error })
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id)
    if (!post || !mongoose.Types.ObjectId.isValid(id)) {
      console.log('bad request')
      return res.status(404).json({ message: `Post with id ${id} was not found.`})
    }

    res.status(200).json(post)
  } catch (error) {
    return  res.status(500).json(error)
    console.log(error)
  }
})

router.patch('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body
  const image = req.file
  const imgUrl = image.path
  console.log(image)

  Post
    .findById(id)
    .then(post => {
      deleteFile(post.imgUrl)
    })
    .catch(error => {
      console.log(error)
    })

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: `Post with id ${id} was not found.`})
    }
    const post = await Post.findById(id)
    post.title = title
    post.content = content
    if (image) {
      post.imgUrl = imgUrl
    }

    const updatedPost = await post.save()

    res.status(201).json(updatedPost)
  } catch (error) {
    res.status(500).json({ message: error})
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: `Post with id ${id} was not found.` })
  }
  
  try {
    const post = await Post.findById(id)
    await deleteFile(post.imgUrl)
  } catch (error) { 
    return res.status(500).json(error)
    console.log(error)
  }
  
  try {
    await Post.findByIdAndRemove(id)
    res.status(203).json({ message: `Post with id ${id} was successfuly deleted.` })
  } catch (error) {
    res.status(500).json({ message: error })
    console.log(error)
  }
})

module.exports = router