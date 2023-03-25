require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connect')
const errorHandler = require('./middleware/error-handler')
const postRoutes = require('./routes/posts')
const dalleRoutes = require('./routes/dalle')

app.use(cors({ origin: [process.env.CLIENT_URL] }))
app.use(express.json({ limit: "50mb" }))

// error handler should be on top
app.use(errorHandler)

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`The server is listening on port : ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()