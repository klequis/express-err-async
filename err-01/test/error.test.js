import { expect } from 'chai'
import request from 'supertest'
import app from 'server'
import { yellow } from 'logger'

describe('lone test', function() {
  it('will do something', async function() {
    const r = await request(app)
      .get('/')
  })
})