import jwt from 'jsonwebtoken'

export default function authorizeUser(socket, next) {
  const token = socket.handshake.auth.token

  try {
    const payloadToken = jwt.verify(token, process.env.JWT_SECRET)

    socket.emit('authorization_success', payloadToken)

    next()
  } catch (error) {
    next(error)
  }
}
