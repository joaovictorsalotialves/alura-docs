import { io } from './server.js'
import { findDocument, updateDocument } from './documentsDb.js'

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

  socket.on('text_change', async ({ text, nameDocument }) => {
    const update = await updateDocument(nameDocument, text)

    if (update.modifiedCount) {
      socket.to(nameDocument).emit('text_change_client', text)
    }
  })
})
