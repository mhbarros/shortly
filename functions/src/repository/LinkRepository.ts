import { LinkModel } from '../../db/Models/Link'

export class LinkRepository {
  async create(url: string, hash: string) {
    new LinkModel({
      url,
      hash,
    }).save()
  }
}
