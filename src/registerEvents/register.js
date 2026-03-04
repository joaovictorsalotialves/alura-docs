import { findUser, registerUser } from "../db/usersDb.js"

export default function registerEventsRegister(socket, io) {
  socket.on('register_user', async (data) => {
    const existingUser = await findUser(data.username)

    if (existingUser === null) {
      const result = await registerUser(data)

      if (result.acknowledged) {
        socket.emit('register_user_success')
        return
      }

      socket.emit('register_user_error')
    } else {
      socket.emit('register_existing_user_error')
    }
  })
}
