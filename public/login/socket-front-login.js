const socket = io()

function authenticateUser(data) {
  socket.emit('authenticate_user', data)
}

socket.on('authenticated_success', () => {
  alert('Authenticated successfully')
  window.location.href = '/'
})

socket.on('authentication_failed', () => {
  alert('Authentication failed')
})

socket.on('user_not_found', () => {
  alert('User not found')
})

export { authenticateUser }
