import { sendTextChange } from "./socket-front-documento.js"

const textArea = document.getElementById('editor-texto')

textArea.addEventListener('keyup', () => {
  sendTextChange(textArea.value)
})

function updateTextArea(text) {
  textArea.value = text
}

export { updateTextArea }
