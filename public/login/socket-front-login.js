const socket = io()

function authenticateUser(data) {
  socket.emit('authenticate_user', data)
}

export { authenticateUser }
