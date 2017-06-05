import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression' // this enables gzip compression

/* eslint-disable no-console */

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('*', function (req, res) { // Because we are creating a singlepage app, we want express to serve index.html for ALL requests.
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, function (err) { // Starts the server.
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`) // Open is a NPM package
  }
})
