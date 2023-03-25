const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose
    .set('strictQuery', true)
    .connect(url, { useUnifiedTopology: true })
    .then(() => console.log('Connected the database'))
    .catch((err) => console.log('Database connection error', err))
}

module.exports = connectDB