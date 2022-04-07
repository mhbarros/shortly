import { Schema } from 'mongoose'

const LinksSchema = new Schema({
  url: String,
  hash: String,
  created_at: Date,
})

export { LinksSchema }
