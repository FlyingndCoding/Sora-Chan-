const mongoose = require('mongoose')
// const { mongoPath } = require('./config.json')

const mongoPath =
  'mongodb+srv://FBI:pneumonoultramicroscopicsilicovolcanoconiosis@cluster0.b17g0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}