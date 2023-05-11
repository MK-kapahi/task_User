const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const empRoute = require('./routes/employee.route')
const postRoute = require("./routes/employe-post.route")
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
// API root
app.use('/api', empRoute)
app.use('/add-emp', postRoute)
// PORT
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
// 404 Handler
// app.use((req, res, next) => {
//   // @ts-ignore
//   next(createError(404))
// })
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint')
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})