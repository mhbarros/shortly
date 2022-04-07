import * as functions from 'firebase-functions'
import Cors from 'cors'

const cors = Cors({ origin: true })

import { LinkModel } from '../db/Models/Link'

const GetUrl = functions.https.onRequest(
  async (request: functions.Request, response: functions.Response) => {
    cors(request, response, async () => {
      const code = request.params[0].replace('/', '')
      if (!code) {
        response.status(404).send()
        return
      }

      try {
        const link = await LinkModel.findOne({ hash: code })
        if (!link) {
          response.status(404).send()
          return
        }

        response.set('Access-Control-Allow-Origin', '*')
        response.redirect(301, link.url.toString())
      } catch (e: any) {
        response.status(400).json({ error: e.error })
      }
    })
  }
)

export default GetUrl
