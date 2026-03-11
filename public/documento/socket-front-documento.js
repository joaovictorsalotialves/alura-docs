import { alertAndRedirect, treatAuthorizationSuccess, updateInterfaceUsers, updateTextArea } from "./documento.js"
import { getCookie } from '../utils/cookies.js'

const socket = io('/users', {
  auth: {
    token: getCookie('auth_token')
  }
})

socket.on('authorization_success', treatAuthorizationSuccess)

socket.on('connect_error', (error) => {
  alert(error)
  window.location.href = '/login/index.html'
})

function selectDocument(data) {
  socket.emit('select_document', data, (text) => {
    updateTextArea(text)
  })
}

socket.on('users_in_document', updateInterfaceUsers)

function sendTextChange(dados) {
  socket.emit('text_change', dados)
}

socket.on('text_change_client', (text) => {
  updateTextArea(text)
})

function deleteDocument(nameDocument) {
  socket.emit('delete_document', nameDocument)
}

socket.on('delete_document_success', (nameDocument) => {
  alertAndRedirect(nameDocument)
})

export { sendTextChange, selectDocument, deleteDocument }
