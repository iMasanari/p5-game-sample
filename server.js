const http = require('http')
const express = require('express')
const socketIo = require('socket.io')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('app'))
app.use('/lib/p5.js', express.static(__dirname + '/node_modules/p5/lib/p5.min.js'))

const server = http.createServer(app)

server.listen(port)

console.log(`Server running at http://localhost:${port}/`)

const io = socketIo.listen(server)
