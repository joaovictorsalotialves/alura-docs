import { scryptSync, timingSafeEqual } from 'crypto'

export default function authenticateUser(password, user) {
  const hashTest = scryptSync(password, user.salt, 64)

  const hashReal = Buffer.from(user.hashPassword, 'hex')

  const authenticate = timingSafeEqual(hashTest, hashReal)

  return authenticate
}
