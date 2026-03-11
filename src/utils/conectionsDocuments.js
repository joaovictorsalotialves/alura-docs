const conectionsDocuments = []

function addConection(conection) {
  conectionsDocuments.push(conection)
}

function getUsersInDocument(nameDocument) {
  return conectionsDocuments
    .filter((conection) => conection.nameDocument === nameDocument)
    .map((conection) => conection.username)
}

function removeConection(nameDocument, username) {
  const index = conectionsDocuments.findIndex((conection) => {
    return conection.nameDocument === nameDocument && conection.username === username
  })

  if (index !== -1) {
    conectionsDocuments.splice(index, 1)
  }
}

function findConection(nameDocument, username) {
  return conectionsDocuments.find((conection) => {
    return conection.nameDocument === nameDocument && conection.username === username
  })
}

export { addConection, getUsersInDocument, removeConection, findConection }
