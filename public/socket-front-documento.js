import { updateTextArea } from "./documento.js"

const socket = io()

function selectDocument(nameDocument) {
  socket.emit('select_document', nameDocument)
}

function sendTextChange(text) {
  socket.emit('text_change', text)
}

socket.on('text_change_client', (text) => {
  updateTextArea(text)
})

export { sendTextChange, selectDocument }
