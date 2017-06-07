// This file will configure our web server that will serve ur the files in our source directory.
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import config from '../webpack.config.dev'
import open from 'open'

/* eslint-disable no-console */

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/menu', function (req, res) {
  res.send('GET request to the homepage')
})

app.get('*', function (req, res) { // Because we are creating a singlepage app, we want express to serve index.html for ALL requests.
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (err) { // Starts the server.
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`) // Open is a NPM package
  }
})
