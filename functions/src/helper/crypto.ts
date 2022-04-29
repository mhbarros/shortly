import crypto from 'crypto'

export const generateShortHash = (data: string) => {
  const cryptoHash = crypto.createHash('sha256')
  cryptoHash.update(data)

  const hash = cryptoHash.digest()
  return hash
    .toString('base64')
    .replace(/[+=/!@#$%^&*()ç'"`~{\[\]}]*/g, '')
    .slice(0, 8)
}
