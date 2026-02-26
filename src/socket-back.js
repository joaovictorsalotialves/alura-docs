import { io } from './server.js'
import { findDocument, updateDocument, getDocuments, addDocument } from './documentsDb.js'

io.on('connection', (socket) => {
  socket.on('get_documents', async (returnDocuments) => {
    const documents = await getDocuments()
    
    returnDocuments(documents)
  })

  socket.on('add_document', async (nameDocument) => {
    const result = await addDocument(nameDocument)

    if (result.acknowledged) {
      io.emit('add_document_client', nameDocument)
    }
  })

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
