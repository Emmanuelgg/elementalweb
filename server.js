const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const https = require('https')
const app = express()
const fs = require('fs')
require('dotenv').load()
// API file for interacting with MongoDB and Functions to server
const api = require('./server/routes/api')

// Parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')))

// API location
app.use('/api', api)

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
  // res.writeHead(301,{Location: `https://${req.headers.host}${req.url}`})
  // res.end()
})

app.enable('trust proxy')

app.use(function(req, res, next) {
  console.log(req.secure)
  if (req.secure) {
    // request was via https, so do no special handling
    next()
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url)
  }
})

//Set Port
const port = process.env.PORT || '6000'
const host = process.env.HOST || '127.0.0.1'
//app.set('port', port)

const server = http.createServer(app)
server.listen(port, host, () => console.log(`Running on http://${host}:${port}`))


const credentials = {
  key: fs.readFileSync('./ssl/private.key', 'utf-8'),
  cert: fs.readFileSync('./ssl/certificate.crt', 'utf-8')
}

const https_port = process.env.HTTPS_PORT || '6433'
//app.set('port', https_port)
const serverHttps = https.createServer(credentials ,app)
serverHttps.listen(https_port, host, () => console.log(`Running on https://${host}:${https_port}`))
