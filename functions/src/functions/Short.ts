import * as functions from 'firebase-functions'
import { LinkRepository } from '../repository/LinkRepository'
import { generateShortHash } from '../helper/crypto'
import cors from 'cors'

const Cors = cors({ origin: true })

const Short = functions.https.onRequest(
  async (request: functions.Request, response: functions.Response) => {
    Cors(request, response, async () => {
      if (request.method !== 'POST') {
        response.status(404).send()
        return
      }

      const { url } = request.body // todo: validation
      if (!url) {
        response
          .status(400)
          .json({ error: "Required parameter 'url' not set." })
        return
      }

      const shortHash = generateShortHash(Date.now().toString()) // todo: better hash

      try {
        await new LinkRepository().create(url, shortHash)
      } catch (e: any) {
        response.status(400).json({ error: e.message })
      }

      response.status(200).json({
        short: process.env.BASE_URL + shortHash,
      })
    })
  }
)

export default Short
