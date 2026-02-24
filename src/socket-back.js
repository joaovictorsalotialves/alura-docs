import { io } from './server.js'

io.on('connection', (socket) => {
  console.log('A user connected! ID: ', socket.id)
})
