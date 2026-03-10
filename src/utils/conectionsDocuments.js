const conectionsDocuments = []

function addConection(conection) {
  conectionsDocuments.push(conection)
}

function getUsersInDocument(nameDocument) {
  return conectionsDocuments
    .filter((conection) => conection.nameDocument === nameDocument)
    .map((conection) => conection.username)
}

export { addConection, getUsersInDocument }
