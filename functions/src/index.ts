import * as functions from 'firebase-functions'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.prod' })

import './db/config'

import Short from './functions/Short'
import GetUrl from './functions/GetUrl'

export const short = functions.https.onRequest(Short)
export const geturl = GetUrl
