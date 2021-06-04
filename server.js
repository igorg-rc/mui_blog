const express = require('express')
const cors = require('cors')
const port = process.env.PORT || require('./config/keys').PORT
const db_start = require('./mongoose/db/db_start')
const postRoutes = require('./mongoose/routes/postRoutes')
const path = require('path')

db_start()

const app = express()

app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/downloads', express.static(path.join(__dirname, 'downloads')))
app.use('/images', express.static(path.join(__dirname, 'downloads', 'images')))
app.use('posts', express.static(path.join(__dirname, 'downloads', 'images', 'posts')))


app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
  res.send('Hello from server!')
})




app.listen(port, () => console.log(`Application is running on port ${port}`))