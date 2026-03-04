const socket = io()

function registerUser(data) {
  socket.emit('register_user', data)
}

export { registerUser }
