import { findDocument, getDocuments, addDocument } from '../db/documentsDb.js'

export default function registerEventsStart(socket, io) {
  socket.on('get_documents', async (returnDocuments) => {
    const documents = await getDocuments()
    
    returnDocuments(documents)
  })

  socket.on('add_document', async (nameDocument) => {
    const documentExists = (await findDocument(nameDocument)) !== null

    if (documentExists) {
      socket.emit('document_exists', nameDocument)
      return
    }

    const result = await addDocument(nameDocument)

    if (result.acknowledged) {
      io.emit('add_document_client', nameDocument)
    }
  })
}
