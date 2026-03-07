import jwt from 'jsonwebtoken'

export default function authorizeUser(socket, next) {
  const token = socket.handshake.auth.token

  try {
    jwt.verify(token, process.env.JWT_SECRET)

    next()
  } catch (error) {
    next(error)
  }

  next()
}
