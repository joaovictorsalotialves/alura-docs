import { io } from './server.js'

io.on('connection', (socket) => {
  console.log('A user connected! ID: ', socket.id)

  socket.on('select_document', (nameDocument) => {
    socket.join(nameDocument)
  })

  socket.on('text_change', ({ text, nameDocument }) => {
    socket.to(nameDocument).emit('text_change_client', text)
  })
})
