import { usersCollection } from "./dbConnect.js"

function findUser(username) {
  return usersCollection.findOne({ username })
}

function registerUser({ username, password }) {
  return usersCollection.insertOne({ username, password })
}

export { findUser, registerUser }
