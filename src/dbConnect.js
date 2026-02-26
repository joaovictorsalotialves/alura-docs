import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://alura:123@alura-cluster.rylndct.mongodb.net/?appName=alura-cluster')

let documentsCollection

try {
  await client.connect()

  const db = client.db('alura-websocket')
  documentsCollection = db.collection('documents')

  console.log('Connected to MongoDB!')
} catch (error) {
  console.log(error)
}

export { documentsCollection}
