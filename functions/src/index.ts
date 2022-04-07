import dotenv from 'dotenv'
dotenv.config()
console.log(process.env)
import '../db/config'

import Short from './functions/Short'
import GetUrl from './functions/GetUrl'

export const short = Short
export const geturl = GetUrl
