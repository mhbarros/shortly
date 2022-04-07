import { model } from 'mongoose'
import { LinksSchema } from '../Schemas/Links'

interface Link {
  url: String
  hash: String
}

export const LinkModel = model<Link>('links', LinksSchema)
