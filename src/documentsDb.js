import { documentsCollection } from './dbConnect.js'

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

export { findDocument, updateDocument }
