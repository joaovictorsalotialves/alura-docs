import { updateTextArea } from "./documento.js"

const socket = io()

function selectDocument(nameDocument) {
  socket.emit('select_document', nameDocument, (text) => {
    updateTextArea(text)
  })
}

function sendTextChange(dados) {
  socket.emit('text_change', dados)
}

// socket.on('text_document', (text) => {
//   updateTextArea(text)
// })

socket.on('text_change_client', (text) => {
  updateTextArea(text)
})

export { sendTextChange, selectDocument }
