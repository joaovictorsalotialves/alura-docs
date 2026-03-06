import { insertLinkDocument, removeLinkDocument } from './index.js'

const socket = io()

socket.on('connect_error', (error) => {
  alert(error)
  window.location.href = '/login/index.html'
})

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

socket.on('document_exists', (nameDocument) => {
  alert(`O documento ${nameDocument} já existe!`)
})

socket.on('delete_document_success', (nameDocument) => {
  removeLinkDocument(nameDocument)
})

export { addDocument }
