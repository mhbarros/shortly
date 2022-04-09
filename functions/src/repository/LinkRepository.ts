import { LinkModel } from '../db/Models/Link'

export class LinkRepository {
  async create(url: string, hash: string) {
    return await new LinkModel({
      url,
      hash,
    }).save()
  }
}
