import hashPasswordWithSalt from "../utils/hashPasswordWithSalt.js"
import { usersCollection } from "./dbConnect.js"

function findUser(username) {
  return usersCollection.findOne({ username })
}

function registerUser({ username, password }) {
  const { hashPassword, salt } = hashPasswordWithSalt(password)

  return usersCollection.insertOne({ username, hashPassword, salt })
}

export { findUser, registerUser }
