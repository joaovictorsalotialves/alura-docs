import { findUser } from "../db/usersDb.js"
import authenticateUser from "../utils/authenticateUser.js"

export default function registerEventsLogin(socket, io) {
  socket.on('authenticate_user', async ({ username, password }) => {
    const user = await findUser(username)

    if (!user) {
      socket.emit('user_not_found')
      return
    }

    const authenticate = authenticateUser(password, user)

    if (authenticate) {
      socket.emit('authenticated_success')
      return
    } 
    
    socket.emit('authentication_failed')
  })
}
