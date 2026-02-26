import { documentsCollection } from './dbConnect.js'

function getDocuments() {
  return documentsCollection.find().toArray()
}

function findDocument(nameDocument) {
  const document = documentsCollection.findOne({ name: nameDocument })

  return document
}

function updateDocument(nameDocument, text) {
  const update = documentsCollection.updateOne({ 
    name: nameDocument 
  }, { 
    $set: { text } 
  })
  
  return update
}

export { findDocument, updateDocument, getDocuments }
