import Short from '../../functions/Short'
import { LinkRepository } from '../../repository/LinkRepository'

it('should return 404 if the request method is GET', done => {
  const request: any = {
    method: 'GET',
    headers: {
      origin: true,
    },
  }

  const response: any = {
    status: (code: number) => {
      try {
        expect(code).toBe(405)
      } catch (e) {
        done(e)
      }
    },
    send: (message: string) => {
      try {
        expect(message).toBe(undefined)
        done()
      } catch (e) {
        done(e)
      }
    },
    setHeader: (key: string, value: string) => {},
    getHeader: (key: string) => {},
  }

  Short(request, response)
})

it('should return error when not passing url', done => {
  const request: any = {
    method: 'POST',
    body: {},
    headers: {
      origin: true,
    },
  }

  const response: any = {
    status: (code: number) => {
      try {
        expect(code).toBe(400)
      } catch (e) {
        done(e)
      }
    },
    json: (message: any) => {
      try {
        expect(message).toHaveProperty('error')
        expect(typeof message.error).toBe('string')
        done()
      } catch (e) {
        done(e)
      }
    },
    setHeader: (key: string, value: string) => {},
    getHeader: (key: string) => {},
  }

  Short(request, response)
})

it('should return status 400 and error when cannot save link to database', done => {
  const request: any = {
    method: 'POST',
    body: {
      url: 'https://www.google.com',
    },
    headers: {
      origin: true,
    },
  }

  const response: any = {
    status: (code: number) => {
      try {
        expect(code).toBe(400)
      } catch (e) {
        done(e)
      }
    },
    json: (message: any) => {
      try {
        expect(message).toHaveProperty('error')
        expect(typeof message.error).toBe('string')
        done()
      } catch (e) {
        done(e)
      }
    },
    setHeader: (key: string, value: string) => {},
    getHeader: (key: string) => {},
  }

  jest.spyOn(LinkRepository.prototype, 'create').mockImplementation(async (url: string, hash: string) => {
    throw new Error()
  })

  Short(request, response)
})

it('should generate a short url', done => {
  const request: any = {
    method: 'POST',
    body: {
      url: 'https://www.google.com',
    },
    headers: {
      origin: true,
    },
  }

  const response: any = {
    status: (code: number) => {
      try {
        expect(code).toBe(200)
      } catch (e) {
        done(e)
      }
    },
    json: (message: any) => {
      try {
        expect(message).toHaveProperty('short')
        expect(typeof message.short).toBe('string')
        done()
      } catch (e) {
        done(e)
      }
    },
    setHeader: (key: string, value: string) => {},
    getHeader: (key: string) => {},
  }

  //@ts-ignore
  jest.spyOn(LinkRepository.prototype, 'create').mockImplementation(async (url: string, hash: string) => {
    return true
  })

  Short(request, response)
})
