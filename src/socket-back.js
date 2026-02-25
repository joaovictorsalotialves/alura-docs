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

  socket.on('select_document', (nameDocument, returnText) => {
    socket.join(nameDocument)

    const document = findDocument(nameDocument)

    if (document) {
      // socket.emit('text_document', document.text)
      returnText(document.text)
    }
  })

  socket.on('text_change', ({ text, nameDocument }) => {
    const document = findDocument(nameDocument)

    if (document) {
      document.text = text
    }

    socket.to(nameDocument).emit('text_change_client', text)
  })
})

function findDocument(nameDocument) {
  const document = documents.find(doc => doc.name === nameDocument)

  return document
}
