import jwt from 'jsonwebtoken'

export default function createJWT(payload) {
  return jwt.sign(
    payload, 
    process.env.JWT_SECRET, { 
      expiresIn: '1h' 
    }
  )
}
