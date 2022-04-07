import crypto from 'crypto'

export const generateShortHash = (data: string) => {
  //todo: remove special characters from url, like +
  const cryptoHash = crypto.createHash('sha256')
  cryptoHash.update(data)

  const hash = cryptoHash.digest()
  return hash.toString('base64').slice(0, 8)
}
