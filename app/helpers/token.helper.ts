import jsonwebtoken from 'jsonwebtoken'

export default class TokenHelper {
  static generateToken(id, expiresIn) {
    return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: expiresIn
    })
  }

  static generateRefreshToken(id) {
    return jsonwebtoken.sign({ id }, process.env.JWT_REFRESH_SECRET)
  }
}