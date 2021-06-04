const mongoose = require('mongoose')
const MONGO_URI = require('../../config/keys').MONGO_URI

const db_start = () => {
  mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connected to Mongodb...'))
  .catch(error => console.log(error))
}

module.exports = db_start