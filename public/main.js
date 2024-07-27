const socket = io()

const loginContainer = document.getElementById('login-container')
const chatContainer = document.getElementById('chat-container')
const usernameInput = document.getElementById('username-input')
const loginButton = document.getElementById('login-button')
const form = document.getElementById('message-form')
const input = document.getElementById('message-input')
const messages = document.getElementById('messages')

let username

// Function to fetch initial messages
const fetchMessages = async () => {
  try {
    const response = await fetch('/messages')
    const msgs = await response.json()
    msgs.forEach((msg) => {
      const item = document.createElement('div')
      item.classList.add('message')
      item.textContent = `${msg.user}: ${msg.text}`
      item.classList.add(msg.user === username ? 'right' : 'left')
      messages.appendChild(item)
    })
    messages.scrollTop = messages.scrollHeight
  } catch (error) {
    console.error('Error fetching messages:', error)
  }
}

loginButton.addEventListener('click', () => {
  username = usernameInput.value
  if (username) {
    loginContainer.classList.add('hidden')
    chatContainer.classList.remove('hidden')
    socket.emit('user connected', username)
    fetchMessages()
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (input.value) {
    const message = {
      user: username,
      text: input.value,
    }
    socket.emit('chat message', message)
    input.value = ''
  }
})

socket.on('chat message', (msg) => {
  const item = document.createElement('div')
  item.classList.add('message')
  item.textContent = `${msg.user}: ${msg.text}`
  item.classList.add(msg.user === username ? 'right' : 'left')
  messages.appendChild(item)
  messages.scrollTop = messages.scrollHeight
})
