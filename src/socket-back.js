import { documentsCollection } from './dbConnect.js'
import { io } from './server.js'

io.on('connection', (socket) => {
  console.log('A user connected! ID: ', socket.id)

  socket.on('select_document', async (nameDocument, returnText) => {
    socket.join(nameDocument)

    const document = await findDocument(nameDocument)

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
  const document = documentsCollection.findOne({ name: nameDocument })

  return document
}
