import { addDocument } from './socket-front-index.js'
import { removeCookie } from './utils/cookies.js'

const listDocuments = document.getElementById('lista-documentos')
const form = document.getElementById('form-adiciona-documento')
const inputDocument = document.getElementById('input-documento')
const buttonLogout = document.getElementById('botao-logout')

buttonLogout.addEventListener('click', () => {
  removeCookie('auth_token')
  alert('User logout successfully')
  window.location.href = '/login/index.html'
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  addDocument(inputDocument.value)
  inputDocument.value = ''
})

function insertLinkDocument(nameDocument) {
  listDocuments.innerHTML += `
  <a 
    href="documento/index.html?nome=${nameDocument}" 
    class="list-group-item list-group-item-action" 
    id="document-${nameDocument}"
  >
    ${nameDocument}
  </a>`
}

function removeLinkDocument(nameDocument) {
  const linkDocument = document.getElementById(`document-${nameDocument}`)

  listDocuments.removeChild(linkDocument)
}

export { insertLinkDocument, removeLinkDocument }
