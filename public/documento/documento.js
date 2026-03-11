import { selectDocument, sendTextChange, deleteDocument } from "./socket-front-documento.js"

const params = new URLSearchParams(window.location.search)
const nameDocument = params.get('nome')

const textArea = document.getElementById('editor-texto')
const titleDocument = document.getElementById('titulo-documento')
const buttonDelete = document.getElementById('excluir-documento')
const listUsersInDocuments = document.getElementById('usuarios-conectados')

titleDocument.textContent = nameDocument || 'Documento sem título'

function treatAuthorizationSuccess (payloadToken) {
  selectDocument({nameDocument, username: payloadToken.username})
}

function updateInterfaceUsers(usersInDocument) {
  listUsersInDocuments.innerHTML = ''

  usersInDocument.forEach(user => {
    listUsersInDocuments.innerHTML += `
      <li class="list-group-item">${user}</li>
    `
  })
}

textArea.addEventListener('keyup', () => {
  sendTextChange({ 
    text: textArea.value, 
    nameDocument
  })
})

function updateTextArea(text) {
  textArea.value = text
}

buttonDelete.addEventListener('click', () => {
  deleteDocument(nameDocument)
})

function alertAndRedirect(name) {
  if (name === nameDocument) {
    alert(`O documento "${name}" foi excluído.`)
    window.location.href = '/'
  }
}

export { updateTextArea, alertAndRedirect, treatAuthorizationSuccess, updateInterfaceUsers }
