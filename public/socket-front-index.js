import { insertLinkDocument } from './index.js'

const socket = io()

socket.emit('get_documents', (documents) => {
  documents.forEach(document => {
    insertLinkDocument(document.name)
  })
})

function addDocument(nameDocument) {
  socket.emit('add_document', nameDocument)
}

socket.on('add_document_client', (nameDocument) => {
  insertLinkDocument(nameDocument)
})

export { addDocument }
