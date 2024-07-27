const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const fs = require('fs')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const DATA_FILE = path.join(__dirname, 'data.json')

app.use(express.static('public'))
app.use(express.json())

const readMessages = () => {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, 'utf8')
    return JSON.parse(data)
  }
  return []
}

const saveMessages = (messages) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2))
}

let messages = readMessages()

// Endpoint to get messages
app.get('/messages', (req, res) => {
  res.json(messages)
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    // Check for duplicates before adding to the messages array
    if (
      !messages.find(
        (message) => message.text === msg.text && message.user === msg.user
      )
    ) {
      messages.push(msg)
      saveMessages(messages)
      io.emit('chat message', msg)
    }
  })

  socket.on('user connected', (username) => {
    socket.username = username
    io.emit('user connected', username)
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
