import { io } from './server.js'

const documents = [
  {
    name: 'JavaScript',
    text: 'Texto do documento JavaScript...'
  },
  {
    name: 'Node',
    text: 'Texto do documento Node...'
  },
  {
    name: 'Socket.io',
    text: 'Texto do documento Socket.io...'
  },
]

io.on('connection', (socket) => {
  console.log('A user connected! ID: ', socket.id)

  socket.on('select_document', (nameDocument) => {
    const document = findDocument(nameDocument)

    console.log(document)

    socket.join(nameDocument)
  })

  socket.on('text_change', ({ text, nameDocument }) => {
    socket.to(nameDocument).emit('text_change_client', text)
  })
})

function findDocument(nameDocument) {
  const document = documents.find(doc => doc.name === nameDocument)

  return document
}
