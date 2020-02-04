const express = require('express')
const mongoose = require('mongoose') // * our ORM (middle person) to talk to mongo db for us
const bodyParser = require('body-parser')
const app = express()
const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')
const router = require('./config/router')

// app.get('/', (req, res) => {
//   res.json({ message: 'Hi!' })
// })

// * use mongo to make the connection
mongoose.connect(
  dbURI, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  })

//* hook up the body parser middleware
app.use(bodyParser.json())

app.use(logger)

app.use(router)

app.use('/api', router)

app.listen(port, () => console.log(`Express is up and running on ${port}`))