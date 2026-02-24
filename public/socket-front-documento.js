import { updateTextArea } from "./documento.js"

const socket = io()

function sendTextChange(text) {
  socket.emit('text_change', text)
}

socket.on('text_change_client', (text) => {
  updateTextArea(text)
})

export { sendTextChange }
