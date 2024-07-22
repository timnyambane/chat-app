const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })

  socket.on('user connected', (username) => {
    socket.username = username
    io.emit('user connected', username)
  })
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
