import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://alura:123@alura-cluster.rylndct.mongodb.net/?appName=alura-cluster')

let documentsCollection
let usersCollection

try {
  await client.connect()

  const db = client.db('alura-websocket')
  documentsCollection = db.collection('documents')
  usersCollection = db.collection('users')

  console.log('Connected to MongoDB!')
} catch (error) {
  console.log(error)
}

export { documentsCollection, usersCollection }
