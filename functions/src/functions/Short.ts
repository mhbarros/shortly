import * as functions from 'firebase-functions'
import { LinkRepository } from '../repository/LinkRepository'
import { generateShortHash } from '../helper/crypto'
import cors from 'cors'

const Cors = cors({ origin: true })

const Short = async (request: functions.Request, response: functions.Response) => {
  Cors(request, response, async () => {
    if (request.method !== 'POST') {
      response.status(405)
      response.send()
      return
    }

    const { url } = request.body // todo: validation
    if (!url) {
      response.status(400)
      response.json({ error: "Required parameter 'url' not set." })
      return
    }

    const shortHash = generateShortHash(Date.now().toString()).replace('+', '') // todo: better hash

    try {
      await new LinkRepository().create(url, shortHash)
    } catch (e: any) {
      response.status(400)
      response.json({ error: e.message })
      return
    }

    response.status(200)
    response.json({
      short: process.env.BASE_URL + shortHash,
    })
  })
}

export default Short
