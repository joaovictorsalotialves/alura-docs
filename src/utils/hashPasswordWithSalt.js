import { randomBytes, scryptSync } from 'crypto'

export default function hashPasswordWithSalt(password) {
  const salt = randomBytes(16).toString('hex')

  const hashPassword = scryptSync(password, salt, 64).toString('hex')

  return { hashPassword, salt }
}