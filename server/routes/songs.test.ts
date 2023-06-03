import request from 'supertest'
import { vi, describe, it, expect, beforeEach } from 'vitest'

import server from '../server'
import * as db from '../db/songs'
import { getMockToken } from './mockToken'

vi.mock('../db/songs')

beforeEach(() => {
  console.error = vi.fn()
})

describe('GET /api/v1/songs', () => {
  it("returns the user's songs", async () => {
    vi.mocked(db.getSongs).mockResolvedValue([
      {
        id: '1',
        title: 'Song 1',
        artist: 'Artist 1',
        link: 'link1',
        genre: 'genere 1',
      },
    ])
    const token = getMockToken()

    const res = await request(server)
      .get('/api/v1/songs')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)

    expect(res.body).toEqual([
      {
        id: '1',
        title: 'Song 1',
        artist: 'Artist 1',
        link: 'link1',
        genre: 'genere 1',
      },
    ])
  })

  it('returns 401 if no token is provided', async () => {
    await request(server).get('/api/v1/songs').expect(401)
  })

  it('returns 500 if the database throws an error', async () => {
    vi.mocked(db.getSongs).mockRejectedValue(new Error('dummy error'))
    const token = getMockToken()

    await request(server)
      .get('/api/v1/songs')
      .set('Authorization', `Bearer ${token}`)
      .expect(500)
  })
})
