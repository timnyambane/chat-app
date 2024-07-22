# Real-time Chat Application

A real-time chat application built using HTML, CSS, JavaScript, Node.js, and Socket.io. The app allows users to join the chat with a username and send messages that appear in a chat window, mimicking the style of WhatsApp with user-specific message alignment.

## Features

- Real-time messaging with Socket.io
- User login with a username
- Message alignment based on the sender (left for other users, right for the current user)
- Responsive and clean user interface

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/realtime-chat-app.git
   cd realtime-chat-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the server:**

   ```sh
   node server.js
   ```

4. **Open the application in your browser:**
   Navigate to `http://localhost:3000`

## Project Structure

### `server.js`

This is the main server file that sets up an Express server and initializes Socket.io for real-time communication.

### `public/index.html`

The main HTML file that contains the structure of the chat application, including the login form and chat interface.

### `public/style.css`

The CSS file that styles the chat application, including the login form and chat messages.

### `public/main.js`

The JavaScript file that handles the client-side logic for the chat application, including user login and message sending/receiving.

## Usage

1. **Open the application in your browser:**
   Navigate to `http://localhost:3000`

2. **Enter your username:**
   Type a username in the input field and click "Join Chat".

3. **Send and receive messages:**
   Type a message in the input field and press "Send". Your messages will appear on the right, and messages from other users will appear on the left.

## Screenshots

### Login Screen

![Login Screen](screenshots/login.png)

### Chat Interface

![Chat Interface](screenshots/chat.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Socket.io](https://socket.io/) - For enabling real-time communication
- [Express](https://expressjs.com/) - For the server framework
