import { documentsCollection } from './dbConnect.js'

function getDocuments() {
  return documentsCollection.find().toArray()
}

function addDocument(nameDocument) {
  const result = documentsCollection.insertOne({
    name: nameDocument,
    text: ''
  })
  
  return result
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

function deleteDocument(nameDocument) {
  const result = documentsCollection.deleteOne({ name: nameDocument })
  return result
}

export { findDocument, addDocument, updateDocument, getDocuments, deleteDocument }
