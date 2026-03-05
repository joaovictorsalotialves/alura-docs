import { findUser } from "../db/usersDb.js"

export default function registerEventsLogin(socket, io) {
  socket.on('authenticate_user', async ({ username, password }) => {
    const user = await findUser(username)

    console.log(user)
  })
}
