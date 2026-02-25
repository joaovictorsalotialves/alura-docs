import { selectDocument, sendTextChange } from "./socket-front-documento.js"

const params = new URLSearchParams(window.location.search)
const nameDocument = params.get('nome')

const textArea = document.getElementById('editor-texto')
const titleDocument = document.getElementById('titulo-documento')

titleDocument.textContent = nameDocument || 'Documento sem título'

selectDocument(nameDocument)

textArea.addEventListener('keyup', () => {
  sendTextChange({ 
    text: textArea.value, 
    nameDocument
  })
})

function updateTextArea(text) {
  textArea.value = text
}

export { updateTextArea }
