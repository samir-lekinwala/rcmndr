import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/insertSong'
import { getMockToken } from './mockToken'

import { AddSongWithUserId } from '../../types/Song'

vi.mock('../db/insertSong')
vi.mock('../logger.ts')

describe('POST /api/v1/songs', () => {
  it('should return 201 when adding a new song', async () => {
    const fakeSong: AddSongWithUserId = {
      userId: '123',
      title: 'banana',
      artist: 'Ripe',
      genre: 'Banana',
      link: 'banana.com',
    }

    vi.mocked(db.insertSong).mockResolvedValue()
    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeSong)
    expect(response.status).toBe(201)
  })
})
