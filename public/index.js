import './socket-front-index.js'

const listDocuments = document.getElementById('lista-documentos')

function insertLinkDocument(nameDocument) {
  listDocuments.innerHTML += `
  <a href="documento.html?nome=${nameDocument}" class="list-group-item list-group-item-action">
    ${nameDocument}
  </a>`
}

export { insertLinkDocument }
