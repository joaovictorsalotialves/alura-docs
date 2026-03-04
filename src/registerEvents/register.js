export default function registerEventsRegister(socket, io) {
  socket.on('register_user', (data) => {
    console.log('Registering user:', data)
  })
}
