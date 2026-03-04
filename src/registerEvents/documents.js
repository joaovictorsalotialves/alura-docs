import { findDocument, updateDocument, deleteDocument } from '../db/documentsDb.js'

export default function registerEventsDocuments(socket, io) {
  socket.on('select_document', async (nameDocument, returnText) => {
    socket.join(nameDocument)

    const document = await findDocument(nameDocument)

    if (document) {
      returnText(document.text)
    }
  })

  socket.on('text_change', async ({ text, nameDocument }) => {
    const update = await updateDocument(nameDocument, text)

    if (update.modifiedCount) {
      socket.to(nameDocument).emit('text_change_client', text)
    }
  })

  socket.on('delete_document', async (nameDocument) => {
    const result = await deleteDocument(nameDocument)

    if (result.deletedCount) {
      io.emit('delete_document_success', nameDocument)
    }
  })
}
