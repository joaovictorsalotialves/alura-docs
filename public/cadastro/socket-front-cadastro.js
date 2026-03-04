const socket = io()

function registerUser(data) {
  socket.emit('register_user', data)
}

socket.on('register_user_success', () => {
  alert('Usuário registrado com sucesso!')
})

socket.on('register_user_error', () => {
  alert('Erro ao registrar usuário!')
})

socket.on('register_existing_user_error', () => {
  alert('Usuário já existe!')
})

export { registerUser }
