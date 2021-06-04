const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("downloads", "images", "posts"))
  },
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, (error, raw) => {
      if (error) return cb(error)
      cb(null, `img_${Date.now()}_${file.originalname}`)
    })
  }
})

const upload = multer({
  storage: myStorage,
  limits: { fieldSize: 1000000000 }
})

module.exports = upload